import React from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField
} from '@mui/material';

const projects = [
  {
    id: '#xyxyxyx',
    location: 'xyxyxyx',
    startTime: 'xyxyxyx',
    status: 'completed'
  },
  {
    id: '#xyxyxyx',
    location: 'xyxyxyx',
    startTime: 'xyxyxyx',
    status: 'current'
  }
];

const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const generateCalendar = () => {
  const dates = [];
  for (let i = 0; i < 31; i++) {
    dates.push(i + 1);
  }
  return dates;
};

const Inbox = () => {
  const calendarDays = generateCalendar();

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        lorem lorem
      </Typography>

      {/* Search Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <TextField variant="outlined" size="small" placeholder="Search" />
      </Box>

      {/* Projects Table */}
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#eee' }}>
            <TableRow>
              <TableCell><strong>Project ID</strong></TableCell>
              <TableCell><strong>Location</strong></TableCell>
              <TableCell><strong>Start time</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project, index) => (
              <TableRow key={index}>
                <TableCell>{project.id}</TableCell>
                <TableCell>{project.location}</TableCell>
                <TableCell>{project.startTime}</TableCell>
                <TableCell sx={{ color: project.status === 'completed' ? 'green' : 'orange' }}>
                  {project.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Bottom section */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Employee Status Box */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            padding: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 200
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            List of employees and their status of presences
          </Typography>
        </Box>

        {/* Calendar Box */}
        <Box
          sx={{
            width: 320,
            backgroundColor: '#f5f5f5',
            padding: 2,
            borderRadius: 2
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>
            March 2025
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center' }}>
            {days.map((day, index) => (
              <Box key={index} sx={{ fontWeight: 'bold', mb: 1 }}>{day}</Box>
            ))}
            {Array(5).fill('').map((_, i) => (
              <Box key={`empty-${i}`} /> // Leading empty days for alignment
            ))}
            {calendarDays.map((date) => (
              <Box
                key={date}
                sx={{
                  padding: 1,
                  margin: '2px',
                  borderRadius: '50%',
                  backgroundColor: [26].includes(date) ? 'blue' : '#fce7d4',
                  color: [26].includes(date) ? 'white' : 'black',
                  fontWeight: 'bold'
                }}
              >
                {date}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Inbox;
