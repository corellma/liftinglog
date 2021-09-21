import React from 'react';
import { Typography } from '@material-ui/core';
import GreyButton from '../components/Button';
import { PrTable } from '../components/PrTable';

export default function Dashboard() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        marginLeft: '300px',
        marginRight: '300px',
      }}
    >
      <Typography variant='h6' style={{ paddingTop: '40px', width: '300px' }}>
        Your best PRs by Lift
      </Typography>
      <PrTable />
      <div style={{ width: '100%', height: '100%', paddingTop: '40px' }}>
        <GreyButton textOnButton='Track a new Lift' href='/lifts' isRouter />
      </div>
    </div>
  );
}
