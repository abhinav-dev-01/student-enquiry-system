import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { User, MapPin, GraduationCap, Building2, Phone, BookOpen, AlertTriangle, ShieldCheck, X } from 'lucide-react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import LoadingButton from './LoadingButton';
import { submitStudentEnquiry, validateEnquiry } from '../services/enquiryService';

const CLASS_OPTIONS = [
  'Class 8',
  'Class 9',
  'Class 10',
  'Civil Service Aspirant'
];

const COURSE_OPTIONS = [
  'Civil Service',
  'Tuition'
];

const INITIAL_FORM_STATE = {
  name: '',
  place: '',
  class: '',
  school: '',
  mobile: '',
  course: ''
};

export default function EnquiryForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState(() => {
    const programParam = searchParams.get('program');
    let initialCourse = '';
    if (programParam) {
      if (programParam.toLowerCase().includes('civil')) {
        initialCourse = 'Civil Service';
      } else if (programParam.toLowerCase().includes('tuition')) {
        initialCourse = 'Tuition';
      }
    }
    return {
      ...INITIAL_FORM_STATE,
      course: initialCourse
    };
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  // Handle Cancel action: reset form and navigate back / home
  const handleCancel = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors({});
    setTouched({});
    setServerError('');
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Sanitize mobile to allow only numbers and max 10 chars
    let cleanedValue = value;
    if (name === 'mobile') {
      cleanedValue = value.replace(/\D/g, '').slice(0, 10);
    }

    setFormData(prev => ({
      ...prev,
      [name]: cleanedValue
    }));

    // Clear field error on edit
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    if (serverError) setServerError('');
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Run single field validation
    const validation = validateEnquiry(formData);
    if (validation.errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: validation.errors[name]
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submission while already submitting
    if (isSubmitting) return;

    setServerError('');

    // Mark all touched
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    const validation = validateEnquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      
      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(validation.errors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitStudentEnquiry(formData);
      
      if (response.success) {
        // Clear the form fields upon successful submission
        setFormData(INITIAL_FORM_STATE);
        setTouched({});
        setErrors({});

        // Navigate to success receipt page
        navigate('/enquiry-success', {
          state: { enquiryData: response.data }
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      if (err.type === 'VALIDATION_ERROR') {
        setErrors(err.errors);
      } else {
        setServerError(
          err.message || 'Unable to submit your enquiry right now. Please try again.'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      
      {/* Global Server Error Banner */}
      {serverError && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3 animate-in fade-in">
          <AlertTriangle className="w-5 h-5 shrink-0 text-red-500 mt-0.5" />
          <div className="flex-1">
            <span className="font-semibold">Submission failed: </span>
            {serverError}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        
        {/* 1. Student Name */}
        <div className="sm:col-span-2">
          <FormInput
            id="name"
            name="name"
            label="Student Name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.name ? errors.name : undefined}
            icon={User}
            required
            autoComplete="name"
          />
        </div>

        {/* 2. Place */}
        <div>
          <FormInput
            id="place"
            name="place"
            label="Place"
            placeholder="Enter your city / town / place"
            value={formData.place}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.place ? errors.place : undefined}
            icon={MapPin}
            required
            autoComplete="address-level2"
          />
        </div>

        {/* 3. Class */}
        <div>
          <FormSelect
            id="class"
            name="class"
            label="Class / Grade"
            placeholder="Select your class"
            value={formData.class}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            options={CLASS_OPTIONS}
            error={touched.class ? errors.class : undefined}
            icon={GraduationCap}
            required
          />
        </div>

        {/* 4. School / College */}
        <div className="sm:col-span-2">
          <FormInput
            id="school"
            name="school"
            label="School / College Name"
            placeholder="Enter school or college name"
            value={formData.school}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.school ? errors.school : undefined}
            icon={Building2}
            required
          />
        </div>

        {/* 5. Mobile Number */}
        <div>
          <FormInput
            id="mobile"
            name="mobile"
            type="tel"
            label="Mobile Number"
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            error={touched.mobile ? errors.mobile : undefined}
            helperText="10 digits starting with 6–9"
            icon={Phone}
            maxLength={10}
            required
            autoComplete="tel"
          />
        </div>

        {/* 6. Course (Civil Service / Tuition) */}
        <div>
          <FormSelect
            id="course"
            name="course"
            label="Course"
            placeholder="Select program"
            value={formData.course}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            options={COURSE_OPTIONS}
            error={touched.course ? errors.course : undefined}
            icon={BookOpen}
            required
          />
        </div>

      </div>

      {/* Trust & Privacy Notice */}
      <div className="flex items-center gap-2.5 text-xs text-[#64748B] bg-slate-50 p-3.5 rounded-xl border border-[#E2E8F0]">
        <ShieldCheck className="w-4 h-4 text-[#25ABE2] shrink-0" />
        <span>Your enquiry will be recorded in our secure academic admissions database. Our counselors will call you shortly.</span>
      </div>

      {/* Action Buttons: Submit & Cancel */}
      <div className="pt-3 flex flex-col-reverse sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={handleCancel}
          disabled={isSubmitting}
          className="w-full sm:w-1/3 py-3.5 px-5 rounded-[14px] border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-heading font-bold text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99] flex items-center justify-center gap-2 shadow-xs"
        >
          <X className="w-4 h-4 text-slate-400" />
          <span>Cancel</span>
        </button>

        <LoadingButton
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          loadingText="Submitting..."
          className="w-full sm:w-2/3 text-sm py-3.5"
        >
          Submit Student Enquiry
        </LoadingButton>
      </div>

    </form>
  );
}
