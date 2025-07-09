import React from 'react';
import FormComponent1 from '../../components/FormComponent1';

const tcFields = [
  { label: '1. Roll No.', name: 'rollNo', type: 'text' },
  { label: '2. Name of the Student', name: 'studentName', type: 'text' },
  { label: '3. Name of the Father', name: 'fatherName', type: 'text' },
  { label: '4. Nationality', name: 'nationality', type: 'text', disabled: true },
  { label: '5. Date of Birth (As per School Records)', name: 'dob', type: 'date' },
  { label: '6. Date of Admission to the Course', name: 'admissionDate', type: 'date' },
  { label: '7. Date of Completion of the Course', name: 'completionDate', type: 'date' },
  { label: '8. Class at time of leaving', name: 'classLeaving', type: 'text' },
  {
    label: '9. Whether qualified for Promotion to Higher class',
    name: 'promotionQualified',
    type: 'radio',
    options: ['Yes', 'No'],
    disabled: true,
  },
  {
    label: '10. Conduct and Character during study',
    name: 'conduct',
    type: 'text',
    disabled: true,
  },
];

const TransferCertificate = () => {
  return <FormComponent1 formTitle="TRANSFER CERTIFICATE" fields={tcFields} />;
};

export default TransferCertificate;
