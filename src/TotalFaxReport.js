import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(sponsor, study, from, to, completed, completed_us, completed_int, project_code) {
  id += 1;
  return { id, sponsor, study, from, to, completed, completed_us, completed_int, project_code };
}

const data = [
  createData('Acerta', 'ACE-LY-003', '7 Nov 2018', '8 Nov 2018', 45, 45, 24, 1565),
  createData('Genetech', 'GO40782', '7 Nov 2018', '8 Nov 2018', 10, 5, 5, 6762),
  createData('Gilead', 'GS-US-427-4024', '7 Nov 2018', '8 Nov 2018', 78, 40, 38, 5635),
  createData('Janssen', 'CNTO1275CRD3005', '7 Nov 2018', '8 Nov 2018', 9, 6, 3, 7645),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>SPONSOR</CustomTableCell>
            <CustomTableCell>STUDY</CustomTableCell>
            <CustomTableCell>FROM</CustomTableCell>
            <CustomTableCell>TO</CustomTableCell>
            <CustomTableCell numeric>COMPLETED FAXES</CustomTableCell>
            <CustomTableCell numeric>COMPLETED (US FAXES)</CustomTableCell>
            <CustomTableCell numeric>COMPLETED (INT. FAXES)</CustomTableCell>
            <CustomTableCell numeric>PROJECT CODE</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                  {n.sponsor}
                </TableCell>
                <TableCell>{n.study}</TableCell>
                <TableCell>{n.from}</TableCell>
                <TableCell>{n.to}</TableCell>
                <TableCell numeric>{n.completed}</TableCell>
                <TableCell numeric>{n.completed_us}</TableCell>
                <TableCell numeric>{n.completed_int}</TableCell>
                <TableCell numeric>{n.project_code}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);

