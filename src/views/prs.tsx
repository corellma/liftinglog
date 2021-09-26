import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import GreyButton from '../components/button';
import LiftTable from '../components/table';
import { Lift } from '../models/lift';
import { DbConnector } from '../models/dbconnector';

export default function PRs() {
  const dbConnector = new DbConnector();
  const tableColumns = ['Exercise', 'Weight', 'Reps', 'Date', 'e1RM'];
  const [prLifts, setPrLifts] = useState<Lift[]>([]);

  useEffect(() => {
    fillPrLifts();
  });

  async function fillPrLifts() {
    const prLifts = await dbConnector.getPrLifts();
    setPrLifts(prLifts);
  }

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
      <LiftTable columns={tableColumns} lifts={prLifts} />
      <div style={{ width: '100%', height: '100%', paddingTop: '40px' }}>
        <GreyButton
          textOnButton='Track a new Lift'
          href='/submitlift'
          isRouter
        />
      </div>
    </div>
  );
}
