import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import SidebarData from './SideBarData/SideBarData';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SideBar.css'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
         {SidebarData.map((item, index) => {
           return(
            <List  key={index} className={classes.list}>
             <ListItem button  className={item.cName}>
               <Link to={item.path}>
               <ListItemText primary={item.title} ></ListItemText>
               </Link>
             </ListItem>
             </List>   
           )
         })}    
      </Drawer>
    </div>
  );
}