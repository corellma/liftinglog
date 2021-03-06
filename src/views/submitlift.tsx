import React from 'react';
import { Typography } from '@material-ui/core';
import InputForm from '../components/input-form';

export default function SubmitLift() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant='h6' style={{ paddingTop: '40px', width: '300px' }}>
        Enter a new PR for a Lift
      </Typography>
      <InputForm />
    </div>
  );
}
