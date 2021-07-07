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

type tabProps = {
  tabLable: string,
  object: any
}

type TableProps = {
  tabs: Array<tabProps>
}




export const TableDrawer = (props: TableProps) => {
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
          <Box m={1}> 
            {children}
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

  const resultTabs = props.tabs.map((current, numb) => {
    return (
      <Tab label={current.tabLable} {...a11yProps(numb)} key={numb} />
    )
  })
  const resultTabpanel = props.tabs.map((current, numb) => {
    return (
      <TabPanel value={value} index={numb}>
        {current.object}
      </TabPanel>


    )
  })

{/* <Tab label="Calendar" {...a11yProps(0)} />
<Tab label="Journal" {...a11yProps(1)} />
<Tab label="Group List" {...a11yProps(2)} />
</Tabs>
<TabPanel value={value} index={0}>
<ListenedLections />
{/*  <CalendarDrawer event={props.groupList[0].calendar} /> 
</TabPanel>
<TabPanel value={value} index={1}>
Journal
</TabPanel>
<TabPanel value={value} index={2}>
Group List
</TabPanel> */}
  
  return (
    <Paper className={classes.root}>
      <Tabs value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="group tabs">
{resultTabs}
      </Tabs>
{resultTabpanel}
    </Paper>


  )
}