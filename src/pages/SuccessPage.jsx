import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SuccessMessage from '../components/SuccessMessage';
import { getLatestSubmittedEnquiry } from '../services/enquiryService';

export default function SuccessPage() {
  const location = useLocation();
  const enquiryData = location.state?.enquiryData || getLatestSubmittedEnquiry();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#F8FAFC] flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SuccessMessage enquiryData={enquiryData} />
      </div>
    </div>
  );
}
