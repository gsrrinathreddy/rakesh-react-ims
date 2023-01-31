import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function IMSAvatar(props) {
    let photo=props.photo;
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt="Remy Sharp"
        src={photo}
        sx={{ width: 56, height: 56 }}
      />
    </Stack>
  );
}