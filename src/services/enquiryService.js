/**
 * Origami Learning - Student Enquiry Service
 * 
 * Submits student enquiry data to Google Sheets via Google Apps Script Web App.
 */

import { GOOGLE_APPS_SCRIPT_URL } from '../config/apiConfig';
import schoolsData from '../data/schools.json';

export function validateEnquiry(formData) {
  const errors = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters)';
  }

  if (!formData.place || formData.place.trim().length === 0) {
    errors.place = 'Please enter your city / town / place';
  }

  // School Selection Validations
  if (!formData.district || formData.district === 'All') {
    errors.district = 'District is required';
  }

  if (!formData.board || formData.board === 'All') {
    errors.board = 'Board is required';
  }

  if (!formData.classLevel || !['8', '9', '10'].includes(formData.classLevel)) {
    errors.classLevel = 'Class must be 8, 9 or 10';
  }

  if (!formData.schoolId) {
    errors.schoolId = 'School is required';
  } else {
    // Verify that the selected school genuinely matches the filters
    const selectedSchool = schoolsData.find(s => s.id === formData.schoolId);
    
    if (!selectedSchool) {
      errors.schoolId = 'Invalid school selected';
    } else {
      if (formData.district && formData.district !== 'All' && selectedSchool.district !== formData.district) {
        errors.schoolId = 'Selected school does not belong to the selected district';
      }
      if (formData.board && formData.board !== 'All' && selectedSchool.board !== formData.board) {
        errors.schoolId = 'Selected school does not belong to the selected board';
      }
      if (formData.category && formData.category !== 'All' && selectedSchool.category !== formData.category) {
        errors.schoolId = 'Selected school does not belong to the selected category';
      }
      if (formData.classLevel && formData.classLevel !== 'All') {
        const classNum = parseInt(formData.classLevel, 10);
        if (!selectedSchool.classes.includes(classNum)) {
          errors.schoolId = 'Selected school does not offer the selected class';
        }
      }
    }
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

  const selectedSchool = schoolsData.find(s => s.id === formData.schoolId);
  const schoolRecord = selectedSchool 
    ? `${selectedSchool.schoolName} (Code: ${selectedSchool.schoolCode})`
    : formData.schoolId;

  // Send EXACT fields requested by the new Google Apps Script.
  // The new Apps script automatically generates the Sl No., so we don't send it.
  const payload = {
    name: formData.name.trim(),
    place: formData.place.trim(),
    class: formData.classLevel,
    school: schoolRecord,
    mobile: formData.mobile.trim(),
    course: formData.course.trim(),
    action: "create"
  };

  try {
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload),
      redirect: 'follow'
    };

    // Google Apps Script CORS often fails on localhost due to strict browser origin policies.
    // We use 'no-cors' mode locally to force the opaque POST request through.
    if (isLocalhost) {
      fetchOptions.mode = 'no-cors';
    }

    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, fetchOptions);

    let result = null;

    if (isLocalhost) {
      // In 'no-cors' mode, the response is opaque (status 0) and body cannot be read.
      // If fetch didn't throw a network error, the payload was successfully sent.
      result = { success: true };
    } else {
      if (!response.ok) {
        throw new Error(`Server returned error status (${response.status}). Please try again.`);
      }

      const responseText = await response.text();

      try {
        result = JSON.parse(responseText);
      } catch {
        result = { success: true };
      }

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
    console.error('Google Sheets submission error:', error);
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
