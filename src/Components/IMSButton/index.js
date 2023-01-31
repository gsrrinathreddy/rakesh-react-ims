import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch,useSelector } from 'react-redux';

export default function IMSButton() {
    const dispatch=useDispatch();
    
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Order</Button>
    </Stack>
  );
}