import React from "react";
import {Card,CardContent,TextField,Grid, Box,Typography, Divider} from "@mui/material";

const Report1 = () => {
  const data = {
    applicationNo: "10003202500015",
    courseCode: "10003",
    courseName: "Bachelor of Physiotherapy",
    applicantName: "Ms. VAISHNAVI MOKTHALA",
    fatherName: "ANJAIAH MOKTHALA",
    age: "20 Years / 0 Months / 2 Days",
    dob: "29-Dec-2005",
    placeOfBirth: "AMANGAL",
    socialStatus: "BC-D",
    nationality: "Indian",
    maritalStatus: "Unmarried",
    gender: "Female",
    differentlyAbled: "No",
    idMark1: "A MOLE ON THE LEFT CHEEK",
    idMark2: "A MOLE ON THE LEFT HAND",
    localArea: "Local",
    inService: "No",
    aadhar: "225135167216",
    email: "vaishnavimokthala65@gmai",
    fatherOccupation: "BUSINESS",
    fatherIncome: "25000",
    motherOccupation: "HOUSE WIFE",
    motherIncome: "0",
  };

  return (
    <Box
      sx={{
        width: "100%",
        p: { xs: 2, sm: 4, md: 6 },
        border: "1px solid #ccc",
        borderRadius: 2,
        backgroundColor: "#f9f9f9",
      }}
    >
      <Card elevation={3} sx={{ width: "100%" }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Bachelor of Physiotherapy - Application Report
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            {[
              { label: "Application No", value: data.applicationNo },
              { label: "Course", value: `${data.courseCode} - ${data.courseName}` },
              { label: "Applicant Name", value: data.applicantName },
              { label: "Father's Name", value: data.fatherName },
              { label: "Date of Birth", value: data.dob },
              { label: "Age", value: data.age },
              { label: "Gender", value: data.gender },
              { label: "Marital Status", value: data.maritalStatus },
              { label: "Social Status", value: data.socialStatus },
              { label: "Nationality", value: data.nationality },
              { label: "Place of Birth", value: data.placeOfBirth },
              { label: "Differently Abled", value: data.differentlyAbled },
              { label: "Identification Mark 1", value: data.idMark1 },
              { label: "Identification Mark 2", value: data.idMark2 },
              { label: "Aadhar No", value: data.aadhar },
              { label: "Email", value: data.email },
              { label: "Father's Occupation", value: data.fatherOccupation },
              { label: "Father's Income", value: `₹${data.fatherIncome}` },
              { label: "Mother's Occupation", value: data.motherOccupation },
              { label: "Mother's Income", value: `₹${data.motherIncome}` },
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <TextField
                  fullWidth
                  label={item.label}
                  value={item.value}
                  InputProps={{ readOnly: true }}
                  variant="outlined"
                  size="small"
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Report1;
