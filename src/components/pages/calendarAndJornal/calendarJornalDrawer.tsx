
import { useState } from "react";
import {Tabs, Tab} from "react-bootstrap";

import groupListStyle from "./groupListStyle.module.scss";


import { CalendarDrawer } from "../../calendarDrawer/calendarDrawer";
import { calendarType, person } from "../../../store/types/storeTypes";
import { PersonListDrawer } from "../../personalList/personListDrawer";

import { groupListConectedType } from "../groups/groupsListContainer";

export const CalendarAndJornalDrawer = (props:groupListConectedType) => {



  return (
    <div>
<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="calendar" title="Calendar">
   <CalendarDrawer event={props.groupList[0].calendar} />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    asdasd
  </Tab>
  <Tab eventKey="contact" title="Contact" >
   asdasd
  </Tab>
</Tabs>
  </div>
  )
};

