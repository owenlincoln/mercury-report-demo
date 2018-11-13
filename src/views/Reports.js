import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TotalFaxReport from '../TotalFaxReport';
import TotalFaxSearch from '../TotalFaxSearch';

const Reports = () => (
  <div className='reports'>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <TotalFaxSearch />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom component="h2">
          Total Fax Report
        </Typography>
        <TotalFaxReport />
      </Grid>
    </Grid>
  </div>
);

export default Reports;