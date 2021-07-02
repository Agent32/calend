
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";

import calendarJornalStyle from "./calendarJornalStyle.module.scss";


import { CalendarDrawer } from "../../calendarDrawer/calendarDrawer";
import { calendarType, person } from "../../../store/types/storeTypes";
import { PersonListDrawer } from "../../personalList/personListDrawer";
import { Card, ListGroup } from 'react-bootstrap';
import { groupListConectedType } from "../groups/groupsListContainer";

export const CalendarAndJornalDrawer = (props: groupListConectedType) => {



  return (
    <div className={calendarJornalStyle.main}>
      <Tabs defaultActiveKey="calendar" id="uncontrolled-tab-example" >
        <Tab eventKey="calendar" title="Calendar" >
          <div className={calendarJornalStyle.calendarTab}>
            <Card style={{ width: '25rem' }} >
              <ListGroup variant="flush"  >
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card>
            <CalendarDrawer event={props.groupList[0].calendar} />
          </div>
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

