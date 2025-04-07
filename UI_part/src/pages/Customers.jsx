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
} from "@mui/material";

const ProjectForm = () => {
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

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", p: 3,mt:10, bgcolor: "#000000", borderRadius: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} >Title</Typography>
      
      <TextField
        fullWidth
        label="Location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ style: { color: 'white' } }}
        InputProps={{ style: { color: 'white' } }}
      />

      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          label="Start Date"
          name="startDate"
          type="text"
          value={formData.startDate}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        />
        <TextField
          fullWidth
          label="End Date"
          name="endDate"
          type="text"
          value={formData.endDate}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ style: { color: 'white' } }}
          InputProps={{ style: { color: 'white' } }}
        />
      </Box>

      <Typography variant="body1" fontWeight="bold" mt={2} color="white">Interdependencies</Typography>
      <RadioGroup
        row
        value={formData.interdependencies}
        onChange={handleChange}
        name="interdependencies"
      >
        <FormControlLabel value="yes" control={<Radio color="warning" />} label={<Typography color="white">Yes</Typography>} />
        <FormControlLabel value="no" control={<Radio />} label={<Typography color="white">No</Typography>} />
      </RadioGroup>

      <FormControl fullWidth margin="normal">
        <InputLabel style={{ color: 'white' }}>Technology</InputLabel>
        <Select
          name="technology"
          value={formData.technology}
          onChange={handleChange}
          sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
        >
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="Angular">Angular</MenuItem>
          <MenuItem value="Vue">Vue</MenuItem>
        </Select>
      </FormControl>

      <Box display="flex" gap={2} alignItems="center">
        <FormControl fullWidth>
          <InputLabel style={{ color: 'white' }}>Roles Needed</InputLabel>
          <Select
            name="rolesNeeded"
            value={formData.rolesNeeded}
            onChange={handleChange}
            sx={{ color: 'white', '.MuiSvgIcon-root': { color: 'white' } }}
          >
            <MenuItem value="Developer">Developer</MenuItem>
            <MenuItem value="Designer">Designer</MenuItem>
            <MenuItem value="Manager">Manager</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="inherit">+</Button>
      </Box>

      <Button fullWidth variant="contained" color="warning" sx={{ mt: 3 }}>
        Create Project
      </Button>
    </Box>
  );
};

export default ProjectForm;
