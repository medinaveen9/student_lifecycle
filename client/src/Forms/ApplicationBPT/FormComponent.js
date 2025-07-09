import React, { useState } from 'react';
import { TextField,Table, TableBody, TableCell,  TableContainer,TableHead,TableRow, Paper, Box,  Typography}
 from '@mui/material';

const FormComponent= ({ title }) => {
  const [subjectsData, setSubjectsData] = useState([
    { subject: 'Botany', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Zoology', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Physics', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Chemistry', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'English', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
    { subject: 'Second Language', t1: '', t1Max: '', t2: '', t2Max: '', practical: '', practicalMax: '', total: '', totalMax: '' },
  ]);

  const handleChange = (index, field, value) => {
    const updatedData = [...subjectsData];
    updatedData[index][field] = value;
    setSubjectsData(updatedData);
  };

  return (
    <Box sx={{ pt: 9, px: 6, pb: 7 }}>
      <Typography variant="h6" gutterBottom>{title || "Intermediate Marks Entry"}</Typography>

      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#dddddd' }}>
              <TableCell>Subject</TableCell>
              <TableCell>Marks in Theory 1st Yr</TableCell>
              <TableCell>Max Theory 1st Yr</TableCell>
              <TableCell>Marks in Theory 2nd Yr</TableCell>
              <TableCell>Max Theory 2nd Yr</TableCell>
              <TableCell>Marks in Practical</TableCell>
              <TableCell>Max Practical</TableCell>
              <TableCell>Total Marks</TableCell>
              <TableCell>Max Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjectsData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.subject}</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.t1}
                    onChange={(e) => handleChange(index, 't1', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.t1Max}
                    onChange={(e) => handleChange(index, 't1Max', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.t2}
                    onChange={(e) => handleChange(index, 't2', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.t2Max}
                    onChange={(e) => handleChange(index, 't2Max', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.practical}
                    onChange={(e) => handleChange(index, 'practical', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.practicalMax}
                    onChange={(e) => handleChange(index, 'practicalMax', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.total}
                    onChange={(e) => handleChange(index, 'total', e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.totalMax}
                    onChange={(e) => handleChange(index, 'totalMax', e.target.value)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default FormComponent;
