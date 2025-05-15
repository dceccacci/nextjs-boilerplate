'use client';
import { Box } from '@mui/material';

import ExampleSelect from '@/app/components/exampleSelect';
import ExampleTable from '@/app/components/exampleTable';

//adapted from previous assignments

export default function Home() {

  return (
    <Box>
      <ExampleSelect/>
      <ExampleTable/>
    </Box>
  );
}
