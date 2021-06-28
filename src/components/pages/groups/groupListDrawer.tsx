
import { useState } from "react";
import { ListGroup, Tab } from "react-bootstrap";

import groupListStyle from "./groupListStyle.module.scss";
import { groupListConectedType } from "./groupsListContainer";

import FullCalendar, { DatePointApi, DateSelectArg } from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

import interactionPlugin from "@fullcalendar/interaction"
import { CalendarDrawer } from "../../calendarDrawer";

const eventEmul = [
  { title: 'Lection1', date: '2021-06-01',start: '2021-06-01T15:20:00' },
  { title: 'Lection3', date: '2021-06-02', start: '2021-06-02T11:10:00' }
]

export const GroupListDrawer = (props: groupListConectedType) => {

  const [showCalendar, setShowCalendar] = useState(true);
//() => setShowCalendar(!showCalendar)
  
  const handleCalendarClick = () =>
  {setShowCalendar(true)
    return (null)
  }
  const handleGrouopClick = (data:any) =>
  {setShowCalendar(false)
    return (null)
  }
  
  const groupList = props.groupList.map(current => {
    return (
    
        <ListGroup horizontal={true} key={current.id} className={groupListStyle.ListGroup}>
          <ListGroup.Item className={groupListStyle.item} variant="primary">{current.name}</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="secondary">{current.startDate.slice(0, 10)}</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="secondary"> {current.gitLink}  </ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="secondary">{current.groupProfile}</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} onClick={ handleCalendarClick }  action variant="info">Calendar</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} onClick={ ()=>  handleGrouopClick(current.userList) }  action variant="info" >Group list</ListGroup.Item> 
        </ListGroup>
     

    )
  })

  const PersonListDrawer = () =>  {
    return (
      <div> ababa</div>
    )
  }
  
  return (
    <div className={groupListStyle.main}>
      
      <div className={groupListStyle.table}>

        <ListGroup horizontal={'lg'} className={groupListStyle.ListGroup} >
          <ListGroup.Item className={groupListStyle.item} variant="warning">Group name</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Start Date</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning"> Git Link </ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Group Profile</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Calendar</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Group list</ListGroup.Item>
        </ListGroup>

        {groupList}
      </div>
      <div className={groupListStyle.detailInfo}>
      
   { showCalendar?  <CalendarDrawer event={eventEmul}/>: <PersonListDrawer/>}
  
       
      </div>
   
    </div>
  );
};

