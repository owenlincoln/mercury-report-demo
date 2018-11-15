import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Dashboard from './Dashboard.js';
import Reports from './Reports.js';

class MainMenu extends React.Component {

    render() {
        return (
            <div>
                 <CssBaseline />
                 <AppBar position="static" color="default">
                    <Toolbar>
                    <Typography variant="h6" color="inherit">
                    <DashboardIcon />
                        Dashboard
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        Reports
                    </Typography>
                    </Toolbar> 
                </AppBar>
                 <Content />
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


  export default (MainMenu);