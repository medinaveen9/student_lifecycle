import React from 'react';
import {Box, Typography, TextField, Radio, RadioGroup, FormControlLabel,FormControl, TextareaAutosize,  Button,
} from '@mui/material';

const FormComponent1 = ({ formTitle, fields }) => {
  return (
    <Box sx={{ pt: 9, px: 6, pb: 7 }}>

      <Typography variant="h6" align="center" gutterBottom>
        {formTitle}
      </Typography>

      {fields.map((field, index) => {
       
        const hasNumberPrefix = /^\d+\./.test(field.label);
        const label = hasNumberPrefix ? field.label : `${index + 1}. ${field.label}`;

        return (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              {label}
            </Typography>

            {field.type === 'text' || field.type === 'date' ? (
              <TextField
                name={field.name}
                type={field.type}
                fullWidth
                size="small"
                defaultValue={field.defaultValue || ''}
              />
            ) : field.type === 'radio' ? (
              <FormControl>
                <RadioGroup row name={field.name}>
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            ) : field.type === 'textarea' ? (
              <TextareaAutosize
                name={field.name}
                minRows={4}
                placeholder="Enter text"
                style={{ width: '100%', padding: '8px' }}
              />
            ) : null}
          </Box>
        );
      })}

      <Box mt={4} display="flex" justifyContent="center">
        <Button variant="contained" color="blue">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default FormComponent1;


