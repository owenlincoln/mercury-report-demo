import React from 'react';
import Grid from '@material-ui/core/Grid';
import TotalFaxReport from '../TotalFaxReport';
import TotalFaxSearch from '../TotalFaxSearch';

const Reports = () => (
  <div className='reports'>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <TotalFaxSearch />
      </Grid>
      <Grid item xs={12}>
        <TotalFaxReport />
      </Grid>
    </Grid>
  </div>
);

export default Reports;