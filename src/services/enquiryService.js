/**
 * Origami Learning - Student Enquiry Service
 * 
 * Submits student enquiry data to Google Sheets via Google Apps Script Web App.
 */

import { GOOGLE_APPS_SCRIPT_URL } from '../config/apiConfig';

/**
 * Validate enquiry payload
 */
export function validateEnquiry(formData) {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters)';
  }

  if (!formData.place || formData.place.trim().length === 0) {
    errors.place = 'Please enter your city / town / place';
  }

  if (!formData.class) {
    errors.class = 'Please select your current class / grade';
  }

  if (!formData.school || formData.school.trim().length === 0) {
    errors.school = 'Please enter your school or college name';
  }

  const mobileRegex = /^[6-9][0-9]{9}$/;
  if (!formData.mobile) {
    errors.mobile = 'Please enter your 10-digit mobile number';
  } else if (!mobileRegex.test(formData.mobile.trim())) {
    errors.mobile = 'Enter a valid 10-digit mobile number starting with 6–9';
  }

  if (!formData.course) {
    errors.course = 'Please select the program you are interested in';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Submit Enquiry to Google Sheets via Google Apps Script Web App using fetch() POST
 * 
 * Exact JSON field names required by Google Apps Script:
 * {
 *   name,
 *   place,
 *   class,
 *   school,
 *   mobile,
 *   course
 * }
 */
export async function submitStudentEnquiry(formData) {
  const validation = validateEnquiry(formData);
  if (!validation.isValid) {
    throw {
      type: 'VALIDATION_ERROR',
      errors: validation.errors,
      message: 'Please complete all required fields correctly before submitting.'
    };
  }

  // Generate formatted timestamp: YYYY-MM-DD HH:mm:ss in Indian Standard Time / local time
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const formattedTimestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  // Exact JSON payload matching the Google Apps Script Web App requirements
  const payload = {
    name: formData.name.trim(),
    place: formData.place.trim(),
    class: formData.class.trim(),
    school: formData.school.trim(),
    mobile: formData.mobile.trim(),
    course: formData.course.trim(),
    submittedAt: formattedTimestamp,
    SubmittedAt: formattedTimestamp,
    timestamp: formattedTimestamp
  };

  try {
    /**
     * Google Apps Script Web App uses POST with a 302 redirect.
     * Sending with 'text/plain;charset=utf-8' ensures standard browsers avoid
     * an unnecessary OPTIONS preflight request (which Apps Script does not support)
     * while transmitting the JSON payload directly into e.postData.contents.
     */
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload),
      redirect: 'follow'
    });

    if (!response.ok) {
      throw new Error(`Server returned error status (${response.status}). Please try again.`);
    }

    const responseText = await response.text();
    let result = null;

    try {
      result = JSON.parse(responseText);
    } catch {
      // If response is text but successful status, treat as success
      result = { success: true };
    }

    if (result && result.success === false) {
      throw new Error(result.message || 'Submission was not accepted by the server. Please try again.');
    }

    // Build receipt record for display on success page
    const submissionRecord = {
      Submission_ID: `OL-${Date.now().toString().slice(-6)}`,
      ...payload,
      Student_Name: payload.name,
      Place: payload.place,
      Class_Grade: payload.class,
      School_College: payload.school,
      Mobile_Number: payload.mobile,
      Interested_Program: payload.course,
      SubmittedAt: formattedTimestamp
    };

    // Store in SessionStorage for receipt view / page refresh continuity
    try {
      sessionStorage.setItem('latest_enquiry', JSON.stringify(submissionRecord));
    } catch (storageErr) {
      console.warn('Session storage write error:', storageErr);
    }

    return {
      success: true,
      data: submissionRecord,
      message: result?.message || 'Enquiry submitted successfully'
    };

  } catch (error) {
    console.error('Google Sheets submission error:', error);
    
    // Provide clean, human-readable error messages
    if (error.type === 'VALIDATION_ERROR') {
      throw error;
    }
    
    throw new Error(
      error.message || 'Failed to submit your enquiry to Google Sheets. Please check your internet connection and try again.'
    );
  }
}

/**
 * Get the latest submitted enquiry details for the confirmation page
 */
export function getLatestSubmittedEnquiry() {
  try {
    const data = sessionStorage.getItem('latest_enquiry');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}
