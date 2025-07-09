import React from 'react';

const FormComponentBonafide = () => {
  return (
    <div style={{ padding: '80px', fontFamily: 'serif', maxWidth: '1200px', margin: 'auto', lineHeight: '1.8', border: '1px solid #ccc' }}>
      <div style={{ textAlign: 'center' }}> 
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <p><strong>File.No.</strong> NIMS/BPT/2025/001</p>
        <p><strong>Date:</strong> 27-06-2025</p>
      </div>

      <h3 style={{ textAlign: 'center', textDecoration: 'underline', marginTop: '40px' }}>
        BONAFIDE/STUDY & COURSE COMPLETION CERTIFICATE
      </h3>

      <p>
        This is to certify that <strong>John Doe</strong> S/o. <strong>Mr. Richard Doe</strong> has completed <strong>4 years</strong> 
        <strong> Bachelor of Physiotherapy</strong> from this Institute during the year <strong>2020–2024</strong>. His Roll number is <strong>BPT20201234</strong>.
      </p>

      <p>
        He has completed <strong>1 year</strong> compulsory Internship from <strong>July 2024</strong> to <strong>June 2025</strong>, 
        during the period of studies at this institute his conduct and character were found to be <strong>“Satisfactory”</strong>.
      </p>
      <div style={{ textAlign: 'right', marginTop: '60px' }}>
      </div>
    </div>
  );
};

export default FormComponentBonafide;
