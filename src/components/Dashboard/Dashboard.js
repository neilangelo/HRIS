import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import EmployeeTable from '../EmployeeTable/EmployeeTable';
import Employee from '../EmployeeTable/EmployeeForm/Employee'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Router>
    <div className={classes.root}>
      <Header />
      <SideBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
        <Route path="/employee" exact component={EmployeeTable}/>
        <Route path="/employee/add"  component={Employee} />
        </Switch>
      </main>
    </div>
    </Router>
  );
}