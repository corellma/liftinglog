import React, { useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import LiftsTable from '../components/table';
import GreyButton from '../components/button';
import { DbConnector } from '../models/dbconnector';
import { Lift } from '../models/lift';

export default function AllLifts() {
  const dbConnector = new DbConnector();
  const tableColumns = ['Exercise', 'Weight', 'Reps', 'Date', 'e1RM'];
  const [allLifts, setAllLifts] = useState<Lift[]>([]);

  useEffect(() => {
    fillAllLifts();
  });

  async function fillAllLifts() {
    setAllLifts((await dbConnector.getAllEntries().sortBy('Date')).reverse());
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
        Your Lifting History
      </Typography>
      <LiftsTable columns={tableColumns} lifts={allLifts} />
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
