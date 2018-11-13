import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Dashboard = () => (
  <div className='dashboard'>
    <Grid container spacing={24}>
      <Grid item xs={12}>
          <Typography variant="h6" color="inherit">
            Welcome to the Cloud Fax Dashboard
          </Typography>
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;