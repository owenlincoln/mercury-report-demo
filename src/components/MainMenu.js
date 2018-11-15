import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Switch, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Dashboard from './Dashboard.js';
import Reports from './Reports.js';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 2,
      overflow: 'auto',
    },
  });

class MainMenu extends React.Component {

    state = {
        value: 0,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                    </Toolbar>
                </AppBar>
                <AppBar position="static">
                <Tabs value={value} onChange={this.handleChange}>
                    <Tab label="Dashboard" component={NavLink} to="/" button />
                    <Tab label="Reports" component={NavLink} to="/reports" button />
                </Tabs>
                </AppBar>
                <main className={classes.content}>
                    <Content />
                </main>
            </div>
        )
    }
}

const Content = () => (
    <Switch>
      <Route exact path='/' component={Dashboard}></Route>
      <Route exact path='/reports' component={Reports}></Route>
    </Switch>
  );

 export default withStyles(styles)(MainMenu);