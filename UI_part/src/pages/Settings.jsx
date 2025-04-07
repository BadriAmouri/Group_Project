import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  TextField,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";

const Settings = () => {
  const [formData, setFormData] = useState({
    location: "",
    startDate: "",
    endDate: "",
    interdependencies: "yes",
    technology: "",
    shift: "4x4",
    rolesNeeded: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const teamTable = (title) => (
    <Box>
      <Typography variant="h6" align="center"  mb={1} color="white">{title}</Typography>
      <TableContainer component={Paper} sx={{ bgcolor: 'orange' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Role</TableCell>
              <TableCell sx={{ color: 'white' }}>Total Num</TableCell>
              <TableCell sx={{ color: 'white' }}>Employees</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Sample empty row */}
            <TableRow>
              <TableCell sx={{ color: 'white' }}></TableCell>
              <TableCell sx={{ color: 'white' }}></TableCell>
              <TableCell sx={{ color: 'white' }}></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );

  return (
    <Box sx={{ maxWidth: '100%', mx: "auto", p: 3,mt:10, bgcolor: "#192031", borderRadius: 2 }}>
      {/* Project Description */}
      <Box sx={{ p: 2, bgcolor: 'orange', borderRadius: 2, mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" color="white">Project #9090 </Typography>
        <Box display="flex" justifyContent="space-around" mt={2}>
          <Typography fontWeight="bold" color="white">Start date</Typography>
          <Typography fontWeight="bold" color="white">End Date</Typography>
        </Box>
        <Typography mt={2} color="white">Location : Hassi messoud</Typography>
        <Typography fontWeight="bold" color="white">Total Number of Employees : 20</Typography>
      </Box>

      {/* Team Tables */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          {teamTable("Team 1")}
        </Grid>
        <Grid item xs={12} md={6}>
          {teamTable("Team 2")}
        </Grid>
      </Grid>

      {/* Actions */}
      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button variant="text" sx={{ color: 'white', textDecoration: 'underline' }}>edit</Button>
        <Button variant="contained" color="warning">validate</Button>
      </Box>
    </Box>
  );
};

export default Settings;
