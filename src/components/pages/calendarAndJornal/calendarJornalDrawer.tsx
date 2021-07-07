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
import { TableDrawer } from './tabsBilder';


export const CalendarAndJornalDrawer = (props: groupListConectedType) => {


  

  return (
    <div className={calendarJornalStyle.main}>


      <div>
        <TableDrawer/>

</div>


    </div>
  )
};

