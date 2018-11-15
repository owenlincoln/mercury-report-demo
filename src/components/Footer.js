import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    footer: {position: 'absolute', bottom: 0, width: '100%', textAlign: "center",},
  });



class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.footer}>
        <Typography>Footer Text</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);