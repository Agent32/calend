import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';



import calendarJornalStyle from "./calendarJornalStyle.module.scss";
import { CalendarDrawer } from "../../calendarDrawer/calendarDrawer";
import { groupListConectedType } from "../groups/groupsListContainer";
import React from 'react';
import { ListenedLections } from './listenedLections';


export const CalendarAndJornalDrawer = (props: groupListConectedType) => {

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

  function a11yProps(index: any) {
    return {
      id: `tabIndex${index}`,
      'aria-controls': `tabPanelIndex${index}`,
    };
  }

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

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };


  return (
    <div className={calendarJornalStyle.main}>


      <div className={classes.root}>
        <Paper className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="group tabs">
              <Tab label="Calendar" {...a11yProps(0)} />
              <Tab label="Journal" {...a11yProps(1)} />
              <Tab label="Group List" {...a11yProps(2)} />
            </Tabs>

          </AppBar>

          <TabPanel value={value} index={0}>
          <div className={calendarJornalStyle.jrn}>
          <Box component="div" display="inline" p={5} m={1} bgcolor="background.paper">
          <ListenedLections />
      </Box>
      <Box component="div" display="inline" p={1} m={1} bgcolor="background.paper">
      <CalendarDrawer event={props.groupList[0].calendar} />
      </Box>
</div>
          {/*  <span className={calendarJornalStyle.jrn}>   </span> */}

           


           

          
          </TabPanel>
          <TabPanel value={value} index={1}>
            Journal
          </TabPanel>
          <TabPanel value={value} index={2}>
            Group List
          </TabPanel>
        </Paper>
      </div>

    </div>
  )
};

