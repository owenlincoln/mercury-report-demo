import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MUIDataTable from "mui-datatables";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
});

const data = [
  ['Acerta', 'ACE-LY-003', '7 Nov 2018', '8 Nov 2018', 45, 45, 24],
  ['Acerta', 'ACE-LY-003', '7 Nov 2018', '8 Nov 2018', 45, 45, 24],
  ['Acerta', 'ACE-LY-003', '7 Nov 2018', '8 Nov 2018', 45, 45, 24],
  ['Acerta', 'ACE-LY-003', '7 Nov 2018', '8 Nov 2018', 45, 45, 24],
  ['Acerta', 'ACE-LY-003', '7 Nov 2018', '8 Nov 2018', 45, 45, 24],
  ['Acerta', 'ACE-LY-003', '7 Nov 2018', '8 Nov 2018', 45, 45, 24],
  ['Genetech', 'GO40782', '7 Nov 2018', '8 Nov 2018', 10, 5, 5],
  ['Genetech', 'GO40782', '7 Nov 2018', '8 Nov 2018', 10, 5, 5],
  ['Genetech', 'GO40782', '7 Nov 2018', '8 Nov 2018', 10, 5, 5],
  ['Genetech', 'GO40782', '7 Nov 2018', '8 Nov 2018', 10, 5, 5],
  ['Genetech', 'GO40782', '7 Nov 2018', '8 Nov 2018', 10, 5, 5],
  ['Gilead', 'GS-US-427-4024', '7 Nov 2018', '8 Nov 2018', 78, 40, 38],
  ['Gilead', 'GS-US-427-4024', '7 Nov 2018', '8 Nov 2018', 78, 40, 38],
  ['Gilead', 'GS-US-427-4024', '7 Nov 2018', '8 Nov 2018', 78, 40, 38],
  ['Gilead', 'GS-US-427-4024', '7 Nov 2018', '8 Nov 2018', 78, 40, 38],
  ['Gilead', 'GS-US-427-4024', '7 Nov 2018', '8 Nov 2018', 78, 40, 38],
  ['Janssen', 'CNTO1275CRD3005', '7 Nov 2018', '8 Nov 2018', 9, 6, 3],
];

const columns = ["SPONSOR", "STUDY", "FROM", "TO", "COMPLETED FAXES", "COMPLETED (US FAXES)", "COMPLETED (INT. FAXES)"];

const options = {
  filter: false,
  selectableRows: false,
  search: false,
};

function DataTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <MUIDataTable 
        title={"Total Fax Report"} 
        data={data} 
        columns={columns} 
        options={options} 
      />
    </Paper>
  );
}

DataTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataTable);

