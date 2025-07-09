import React from "react";
import {Box, Typography, Table,TableHead,TableBody, TableRow,TableCell, Divider,Grid,Card,CardContent,TextField} 
from "@mui/material";

const Paper2 = () => {
  const subjectMarks = [
    { subject: "Botany", t1: 59, t1Max: 60, t2: 51, t2Max: 60, practical: 30, practicalMax: 30, total: 140, totalMax: 150 },
    { subject: "Zoology", t1: 57, t1Max: 60, t2: 54, t2Max: 60, practical: 30, practicalMax: 30, total: 141, totalMax: 150 },
    { subject: "Physics", t1: 60, t1Max: 60, t2: 47, t2Max: 60, practical: 30, practicalMax: 30, total: 137, totalMax: 150 },
    { subject: "Chemistry", t1: 60, t1Max: 60, t2: 40, t2Max: 60, practical: 30, practicalMax: 30, total: 130, totalMax: 150 },
    { subject: "English", t1: 92, t1Max: 100, t2: 92, t2Max: 100, total: 184, totalMax: 200 },
    { subject: "Second Language", t1: 98, t1Max: 100, t2: 98, t2Max: 100, total: 196, totalMax: 200 },
  ];

  const educationDetails = [
    {
      class: "Inter 2nd Year",
      year: "2023",
      college: "SR JUNIOR COLLEGE",
      place: "PEDDAMBERPET",
      district: "Rangareddy",
      state: "Telangana",
    },
    {
      class: "Inter 1st Year",
      year: "2022",
      college: "SR JUNIOR COLLEGE",
      place: "PEDDAMBERPET",
      district: "Rangareddy",
      state: "Telangana",
    },
    {
      class: "10th Class",
      year: "2021",
      college: "FORTUNE BUTTERFLY SCHOOL",
      place: "AMANGAL, KADTHAL",
      district: "Rangareddy",
      state: "Telangana",
    },
    {
      class: "9th Class",
      year: "2020",
      college: "FORTUNE BUTTERFLY SCHOOL",
      place: "AMANGAL, KADTHAL",
      district: "Rangareddy",
      state: "Telangana",
    },
    {
      class: "8th Class",
      year: "2019",
      college: "FORTUNE BUTTERFLY SCHOOL",
      place: "AMANGAL, KADTHAL",
      district: "Rangareddy",
      state: "Telangana",
    },
    {
      class: "7th Class",
      year: "2018",
      college: "FORTUNE BUTTERFLY SCHOOL",
      place: "AMANGAL, KADTHAL",
      district: "Rangareddy",
      state: "Telangana",
    },
    {
      class: "6th Class",
      year: "2017",
      college: "FORTUNE BUTTERFLY SCHOOL",
      place: "AMANGAL, KADTHAL",
      district: "Rangareddy",
      state: "Telangana",
    },
  ];

  const totals = {
    intermediateTotal: 928,
    intermediateMax: 1000,
    intermediatePercentage: "92.8%",
    groupTotal: 548,
    groupMax: 600,
    groupPercentage: "91.33%",
  };

  const eapcet = {
    regNo: "A151427674D7",
    hallTicket: "2513C03232",
    rank: 14660,
  };

  return (
    <Box sx={{ width: "100%", p: { xs: 2, sm: 4, md: 6 }, backgroundColor: "#f9f9f9" }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Intermediate Academic Record
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Typography variant="h6" gutterBottom>Intermediate Marks</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Subject</TableCell>
                <TableCell>1st Yr Marks</TableCell>
                <TableCell>1st Yr Max</TableCell>
                <TableCell>2nd Yr Marks</TableCell>
                <TableCell>2nd Yr Max</TableCell>
                <TableCell>Practical</TableCell>
                <TableCell>Practical Max</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Total Max</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subjectMarks.map((row, idx) => (
                <TableRow key={idx}>
                  <TableCell>{row.subject}</TableCell>
                  <TableCell>{row.t1}</TableCell>
                  <TableCell>{row.t1Max}</TableCell>
                  <TableCell>{row.t2}</TableCell>
                  <TableCell>{row.t2Max}</TableCell>
                  <TableCell>{row.practical ?? "-"}</TableCell>
                  <TableCell>{row.practicalMax ?? "-"}</TableCell>
                  <TableCell>{row.total}</TableCell>
                  <TableCell>{row.totalMax}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Box mt={3}>
            <Typography><strong>Total Marks:</strong> {totals.intermediateTotal} / {totals.intermediateMax}</Typography>
            <Typography><strong>Total %:</strong> {totals.intermediatePercentage}</Typography>
            <Typography><strong>Group Marks:</strong> {totals.groupTotal} / {totals.groupMax}</Typography>
            <Typography><strong>Group %:</strong> {totals.groupPercentage}</Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
  Educational History (6th–Inter)
</Typography>

<Grid container spacing={2}>
  {educationDetails.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card variant="outlined" sx={{ backgroundColor: "#f9f9f9", borderRadius: 2 }}>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                label="Class"
                value={item.class}
                InputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Year"
                value={item.year}
                InputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="College"
                value={item.college}
                InputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Place"
                value={item.place}
                InputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="District"
                value={item.district}
                InputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="State"
                value={item.state}
                InputProps={{ readOnly: true }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>


          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>EAPCET Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Registration Number" value={eapcet.regNo} InputProps={{ readOnly: true }} variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Hall Ticket Number" value={eapcet.hallTicket} InputProps={{ readOnly: true }} variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Rank" value={eapcet.rank} InputProps={{ readOnly: true }} variant="outlined" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Paper2;
