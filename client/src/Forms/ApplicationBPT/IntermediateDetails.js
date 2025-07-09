import React, { useState } from 'react';
import { TextField, Table,  TableBody,TableCell, TableContainer,  TableHead,TableRow,Paper, Box, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const IntermediateDetails = () => {
  const [subjectsData, setSubjectsData] = useState([
    { subject: 'Botany', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Zoology', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Physics', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Chemistry', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'English', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Second Language', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' }
  ]);

const [totalMarks, setTotalMarks] = useState({ obtained: '', max: '' });
const [totalPercentage, setTotalPercentage] = useState('');
const [groupMarks, setGroupMarks] = useState({ obtained: '', max: '' });
const [groupPercentage, setGroupPercentage] = useState('');

const updateFormData = (data) => {
  console.log("Intermediate form data:", data); 
};
  const handleChange = (index, field, value) => {
    const updated = [...subjectsData];
    updated[index][field] = value;
    setSubjectsData(updated);
  };
    const navigate = useNavigate();
  
    const handleNext = () => {
        updateFormData({ subjectsData, totalMarks, totalPercentage, groupMarks, groupPercentage });

      navigate('/coursedetails'); 
    };

  return (
    <Box sx={{ pt: 9, px: 6, pb: 7 }}>
      <Typography variant="h6" gutterBottom>Intermediate Marks Entry</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#dddddd' }}>
              <TableCell>Subject</TableCell>
              <TableCell>1st Yr Theory</TableCell>
              <TableCell>Max</TableCell>
              <TableCell>2nd Yr Theory</TableCell>
              <TableCell>Max</TableCell>
              <TableCell>Practical</TableCell>
              <TableCell>Max</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Max</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
            {subjectsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.subject}</TableCell>
                <TableCell>
                  <TextField size="small" value={row.t1} onChange={(e) => handleChange(index, 't1', e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField size="small" value={row.t1Max} onChange={(e) => handleChange(index, 't1Max', e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField size="small" value={row.t2} onChange={(e) => handleChange(index, 't2', e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField size="small" value={row.t2Max} onChange={(e) => handleChange(index, 't2Max', e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField size="small" value={row.practical} onChange={(e) => handleChange(index, 'practical', e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField size="small" value={row.practicalMax} onChange={(e) => handleChange(index, 'practicalMax', e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField size="small" value={row.total} onChange={(e) => handleChange(index, 'total', e.target.value)} />
                </TableCell>
                <TableCell>
                  <TextField size="small" value={row.totalMax} onChange={(e) => handleChange(index, 'totalMax', e.target.value)} />
                </TableCell>
              </TableRow>
            ))}

       
<TableRow>
  <TableCell colSpan={7} sx={{ fontWeight: 'bold' }}>Total Marks obtained in Intermediate/Equivalent Examination</TableCell>
  <TableCell>
    <TextField
      size="small"
      value={totalMarks.obtained}
      onChange={(e) => setTotalMarks({ ...totalMarks, obtained: e.target.value })}
    />
  </TableCell>
  <TableCell>
    <TextField
      size="small"
      value={totalMarks.max}
      onChange={(e) => setTotalMarks({ ...totalMarks, max: e.target.value })}
    />
  </TableCell>
</TableRow>

<TableRow>
  <TableCell colSpan={7} sx={{ fontWeight: 'bold' }}>Total Percentage</TableCell>
  <TableCell colSpan={2}>
    <TextField
      size="small"
      value={totalPercentage}
      onChange={(e) => setTotalPercentage(e.target.value)}
      InputProps={{ endAdornment: <span>%</span> }}
    />
  </TableCell>
</TableRow>

<TableRow>
  <TableCell colSpan={7} sx={{ fontWeight: 'bold' }}>Total Marks obtained in Group</TableCell>
  <TableCell>
    <TextField
      size="small"
      value={groupMarks.obtained}
      onChange={(e) => setGroupMarks({ ...groupMarks, obtained: e.target.value })}
    />
  </TableCell>
  <TableCell>
    <TextField
      size="small"
      value={groupMarks.max}
      onChange={(e) => setGroupMarks({ ...groupMarks, max: e.target.value })}
    />
  </TableCell>
</TableRow>

<TableRow>
  <TableCell colSpan={7} sx={{ fontWeight: 'bold' }}>Total Percentage in Group</TableCell>
  <TableCell colSpan={2}>
    <TextField
      size="small"
      value={groupPercentage}
      onChange={(e) => setGroupPercentage(e.target.value)}
      InputProps={{ endAdornment: <span>%</span> }}
    />
  </TableCell>
</TableRow>
      </TableBody>
      </Table>
      </TableContainer>

       <Box sx={{ mt: 3, textAlign: 'right' }}>
        <Button variant="contained" onClick={handleNext}>Next</Button>
      </Box>
      </Box>
  );
};

export default IntermediateDetails;