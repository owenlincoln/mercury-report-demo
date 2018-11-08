import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

class SimpleSelect extends React.Component {
  state = {
    sponsor: '',
    study: '',
    labelWidth: 0,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
      <Grid item xs={12}>
        <Paper className={classes.root} elevation={1}>
            <Grid item xs={2}>
                <Typography align='left' variant="h5" component="h5">
                Search
                </Typography>
            </Grid>
            <Grid item xs={10}>
                <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="sponsor-placeholder">
                    Sponsor
                </InputLabel>
                <Select
                    value={this.state.sponsor}
                    onChange={this.handleChange}
                    input={<Input name="sponsor" id="sponsor-placeholder" />}
                    displayEmpty
                    name="sponsor"
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                    <em>All</em>
                    </MenuItem>
                    <MenuItem value={10}>Acerta</MenuItem>
                    <MenuItem value={20}>Genetech</MenuItem>
                    <MenuItem value={30}>Gilead</MenuItem>
                    <MenuItem value={40}>Janssen</MenuItem>
                </Select>
                </FormControl>           

                <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="study-placeholder">
                    Study
                </InputLabel>
                <Select
                    value={this.state.study}
                    onChange={this.handleChange}
                    input={<Input name="study" id="study-placeholder" />}
                    displayEmpty
                    name="study"
                    className={classes.selectEmpty}
                >
                    <MenuItem value="">
                    <em>All</em>
                    </MenuItem>
                    <MenuItem value={10}>ACE-LY-003</MenuItem>
                    <MenuItem value={20}>GO40782</MenuItem>
                    <MenuItem value={30}>GO40782</MenuItem>
                    <MenuItem value={40}>CNTO1275CRD3005</MenuItem>
                </Select>
                </FormControl>     
                  
                <TextField
                  id="datefrom"
                  label="Date From"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />    
                <TextField
                  id="dateto"
                  label="Date To"
                  type="date"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />      
            </Grid> 
        </Paper>  
        </Grid>           
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
