import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PatientForm from './components/PatientForm';
import './global/styles.css';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box className="form-page-wrapper">
        <Typography variant='h3'>Patient Form</Typography>
        <PatientForm />
      </Box>
    </QueryClientProvider>
  );
};

export default App;
