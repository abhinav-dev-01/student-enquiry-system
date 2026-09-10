/**
 * Origami Learning - Student Enquiry Service
 * 
 * Submits student enquiry data to Google Sheets via Google Apps Script Web App.
 */

import { GOOGLE_APPS_SCRIPT_URL } from '../config/apiConfig';

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

export async function submitStudentEnquiry(formData) {
  const validation = validateEnquiry(formData);
  if (!validation.isValid) {
    throw {
      type: 'VALIDATION_ERROR',
      errors: validation.errors,
      message: 'Please complete all required fields correctly before submitting.'
    };
  }

  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const formattedTimestamp = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

  // Send EXACT fields requested by the new Google Apps Script.
  const payload = {
    action: "create",
    name: formData.name.trim(),
    place: formData.place.trim(),
    class: formData.class.trim(),
    school: formData.school.trim(),
    mobile: formData.mobile.trim(),
    course: formData.course.trim()
  };

  try {
    console.log("ACTUAL POST URL:", GOOGLE_APPS_SCRIPT_URL);
    console.log("Submitting payload:", payload);

    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    };

    if (isLocalhost) {
      fetchOptions.mode = 'no-cors';
      console.warn("Running on localhost: using mode 'no-cors' to bypass strict Google Apps Script CORS restrictions.");
    }

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, fetchOptions);

    let result = null;

    if (isLocalhost) {
      // In no-cors mode, the response is opaque (status 0). We cannot read response.json().
      // If fetch didn't throw a network error, it successfully reached Google servers.
      console.log("Localhost opaque response status:", response.status);
      result = { success: true };
    } else {
      console.log("Response status:", response.status);
      result = await response.json();
      console.log("Apps Script response:", result);
      
      if (result && result.success === false) {
        throw new Error(result.message || 'Submission was not accepted by the server. Please try again.');
      }
    }

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
    console.error("ENQUIRY SUBMISSION ERROR:", error);
    if (error.type === 'VALIDATION_ERROR') {
      throw error;
    }
    throw new Error(
      error.message || 'Failed to submit your enquiry to Google Sheets. Please check your internet connection and try again.'
    );
  }
}

export function getLatestSubmittedEnquiry() {
  try {
    const data = sessionStorage.getItem('latest_enquiry');
    return data ? JSON.parse(data) : null;
  } catch {
    return null;
  }
}
