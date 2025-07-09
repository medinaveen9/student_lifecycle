import React, { useState } from 'react';
import { Box,Typography, Table,TableBody,TableCell,TableContainer, TableHead, TableRow,Paper,TextField,  Button,}
 from '@mui/material';
import { toWords } from 'number-to-words';

const FormComponentNMT = ({
  studentInfo = {},
  subjectsData = [],
  title = '',
}) => {
  const {
    rollNumber = '',
    name = '',
    parentName = '',
    examDate = '',
    result = true,
  } = studentInfo;

  const [inputRollNumber, setInputRollNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [year, setYear] = useState('');
  const [academicyear, setAcademicYear] = useState('');

  const handleFetch = () => {
    console.log('Fetching data for roll number:', inputRollNumber);

  };

  const grandTotal = subjectsData.reduce(
    (total, subject) => total + (subject.totalSecured || 0),
    0
  );
  const totalInWords = toWords(grandTotal).replace(/,/g, ' ').toUpperCase();

  return (
    <Box sx={{ pt: 9, px: 6, pb: 7 }}>
   
      <Typography variant="h6" sx={{ mb: 3 }}>
        {title}
      </Typography>
 
      <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Student ID"
          value={inputRollNumber}
          onChange={(e) => setInputRollNumber(e.target.value)}
        />
        <TextField
          label="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <TextField
          label="Year of Study"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <TextField
          label="Academic Year"
          value={academicyear}
          onChange={(e) => setAcademicYear(e.target.value)}
        />
        <Button variant="outlined" onClick={handleFetch}>
          Fetch
        </Button>
      </Box>

      <Box sx={{ mb: 3 }}>
        <Typography>
          <strong>Roll No:</strong> {rollNumber}
        </Typography>
        <Typography>
          <strong>Name:</strong> {name}
        </Typography>
        <Typography>
          <strong>S/O./D/O:</strong> {parentName}
        </Typography>
        <Typography>
          <strong>Exam Date:</strong> {examDate}
        </Typography>
      </Box>

      <TableContainer component={Paper} sx={{ mb: 2, overflowX: 'auto' }}>
        <Table size="medium">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#dddddd' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Paper</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Subject</TableCell>
              <TableCell align="center" colSpan={2} sx={{ fontWeight: 'bold' }}>
                Theory
              </TableCell>
              <TableCell align="center" colSpan={2} sx={{ fontWeight: 'bold' }}>
                Practical/Viva
              </TableCell>
              <TableCell align="center" colSpan={2} sx={{ fontWeight: 'bold' }}>
                Total
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: '#dddddd' }}>
              <TableCell />
              <TableCell />
              <TableCell>Max Marks</TableCell>
              <TableCell>Secured</TableCell>
              <TableCell>Max Marks</TableCell>
              <TableCell>Secured</TableCell>
              <TableCell>Max Marks</TableCell>
              <TableCell>Secured</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjectsData.map((subject, index) => (
              <TableRow key={index}>
                <TableCell>{subject.paperNo}</TableCell>
                <TableCell
                  sx={{ wordBreak: 'break-word', maxWidth: 300, whiteSpace: 'normal' }}
                >
                  {subject.subject}
                </TableCell>
                <TableCell>{subject.theoryMax}</TableCell>
                <TableCell>{subject.theorySecured ?? '-'}</TableCell>
                <TableCell>{subject.practicalMax ?? 'NA'}</TableCell>
                <TableCell>
                  {subject.practicalMax ? subject.practicalSecured ?? '-' : 'NA'}
                </TableCell>
                <TableCell>{subject.totalMax}</TableCell>
                <TableCell>{subject.totalSecured ?? '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2 }}>
        <Typography>
          <strong>Aggregate in Words:</strong> {totalInWords}
        </Typography>
        <Typography sx={{ mt: 1 }}>
          <strong>Result:</strong> {result ? 'PASS' : 'FAIL'}
        </Typography>
      </Box>
    </Box>
  );
};

export default FormComponentNMT;
