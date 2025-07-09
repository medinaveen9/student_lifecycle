import React, { useState } from 'react';
import {Typography, Box, Table,  TableBody, TableCell,TableContainer,  TableHead,TableRow,Paper,  Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DocumentsUpload = () => {
  const documents = [
    'CASTE CERTIFICATE',
    '10th Class Marks Memo',
    'INTERMEDIATE MARKS MEMO',
    '6TH to 10TH Study and Conduct Certificate',
    'INTER STUDY AND CONDUCT CERTIFICATE',
    'TRANSFER OR MIGRATION CERTIFICATE of Intermediate',
    'TELANGANA STATE EAPCET-2025 RANK CARD'
  ];

  const navigate = useNavigate();

  const [uploadedDocs, setUploadedDocs] = useState({});

  const handleFileChange = (index, file) => {
    setUploadedDocs(prev => ({
      ...prev,
      [index]: file
    }));
  };

  const handleNext = () => {
    // const documentStatus = documents.map((doc, idx) => ({
    //   name: doc,
    //   uploaded: !!uploadedDocs[idx],
    //   file: uploadedDocs[idx] || null
    // }));

    // updateFormData({
    //   documentUploads: documentStatus
    // });

    navigate('/report');
  };

  return (
    <Box sx={{ p: 10, border: '1px solid #ccc', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>Payment Details</Typography>
      <Typography variant="h6" gutterBottom>Document Uploads</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>S.No.</TableCell>
              <TableCell>Document Type</TableCell>
              <TableCell>Upload File</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((doc, idx) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{doc}</TableCell>
                <TableCell>
                  <input type="file" accept=".pdf,.jpg,.png" onChange={(e) => handleFileChange(idx, e.target.files[0])} />
                  {uploadedDocs[idx] && (
                    <Typography variant="caption" color="primary">
                      {uploadedDocs[idx].name}
                    </Typography>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 3, textAlign: 'right' }}>
        <Button variant="contained" onClick={handleNext}>Submit</Button>
      </Box>
    </Box>
  );
};

export default DocumentsUpload;
