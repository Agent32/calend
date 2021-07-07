import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import React from 'react';


import { ListenedLections } from './listenedLections';

import { CalendarDrawer } from "../../calendarDrawer/calendarDrawer";


export const TableDrawer = (props: any) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTabs-root': {
        backgroundColor: 'rgb(255, 145, 77)',
      },
      '& .MuiTabs-indicator': {
        backgroundColor: 'black',
      },
      flexGrow: 1,
    },
  }));


  function TabPanel(props: any) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`tabPanelIndex${index}`}
        aria-labelledby={`tabIndex${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const classes = useStyles();


  const [value, setValue] = React.useState(0);

  function a11yProps(index: any) {
    return {
      id: `tabIndex${index}`,
      'aria-controls': `tabPanelIndex${index}`,
    };
  }

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  

  return (
    <Paper className={classes.root}>
      <Tabs value={value} onChange={handleChange} aria-label="group tabs">
        <Tab label="Calendar" {...a11yProps(0)} />
        <Tab label="Journal" {...a11yProps(1)} />
        <Tab label="Group List" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
       <ListenedLections />
         {/*  <CalendarDrawer event={props.groupList[0].calendar} /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Journal
      </TabPanel>
      <TabPanel value={value} index={2}>
        Group List
      </TabPanel>
    </Paper>


  )
}