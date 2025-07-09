import React from "react";
import { Box,Typography,  Grid,TextField,Divider,Card,CardContent,List,ListItem,ListItemText} from "@mui/material";

const Paper3 = () => {
  const address = {
    addressLine: "HNO 7-29/1A, Gandhi Nagar Colony, Amangal Village and Mandal",
    country: "India",
    state: "Telangana",
    district: "Rangareddy",
    pin: "509321",
    phone: "",
    mobile: "9346490142",
    email: "vaishnavimokthala65@gmail.com"
  };

  const payment = {
    type: "Online Payment",
    reference: "136189873101",
    date: "09-Jun-2025",
    bank: "",
    branch: "",
    amount: "2500",
    remarks: "Online Payment"
  };

  const documents = [
    "CASTE CERTIFICATE",
    "10th Class Marks Memo",
    "INTERMEDIATE MARKS MEMO",
    "6TH to 10TH Study and Conduct Certificate",
    "INTER STUDY AND CONDUCT CERTIFICATE",
    "TRANSFER OR MIGRATION CERTIFICATE of Intermediate",
    "TELANGANA STATE EAPCET-2025 RANK CARD"
  ];

  return (
    <Box sx={{ width: "100%", p: { xs: 2, sm: 4, md: 6 }, backgroundColor: "#f9f9f9" }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5" gutterBottom>Address, Payment & Declaration</Typography>
          <Divider sx={{ mb: 3 }} />

          <Typography variant="h6" gutterBottom>Correspondence Address</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField fullWidth label="Address" value={address.addressLine} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Country" value={address.country} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="State" value={address.state} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="District" value={address.district} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Pin Code" value={address.pin} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Mobile No" value={address.mobile} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email ID" value={address.email} InputProps={{ readOnly: true }} />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>Payment Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Payment Type" value={payment.type} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Transaction ID" value={payment.reference} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Date" value={payment.date} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Amount (₹)" value={payment.amount} InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Remarks" value={payment.remarks} InputProps={{ readOnly: true }} />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>Uploaded Documents</Typography>
          <List dense>
            {documents.map((doc, idx) => (
              <ListItem key={idx}>
                <ListItemText primary={`${idx + 1}. ${doc}`} />
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 3 }} />

        
          <Typography variant="h6" gutterBottom>Declaration</Typography>
          <Typography paragraph>
            I declare that the particulars given above are correct. I agree to abide by the admission prospectus issued by the Institute.
            I also declare that in the event the information provided is incorrect or false, I may be prosecuted as per law.
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Signature" value="" InputProps={{ readOnly: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Date" value="" InputProps={{ readOnly: true }} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Paper3;
