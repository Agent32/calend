
import { useState } from "react";
import { ListGroup } from "react-bootstrap";

import groupListStyle from "./groupListStyle.module.scss";
import { groupListConectedType } from "./groupsListContainer";


import { CalendarDrawer } from "../../calendarDrawer/calendarDrawer";
import { calendarType, person } from "../../../store/types/storeTypes";
import { PersonListDrawer } from "../../personalList/personListDrawer";


export const GroupListDrawer = (props: groupListConectedType) => {

  const [showCalendar, setShowCalendar] = useState(true);
  const [eventEmulator, setEventEmulator] = useState<Array<calendarType>>(props.groupList[0].calendar);
  const [personeList, setPersoneList] = useState(props.groupList[0].userList as Array<person>);
  const handleCalendarClick = (data: Array<calendarType>) => {
    setShowCalendar(true)
    setEventEmulator(data)

    return (null)
  }
  const handleGrouopClick = (data: Array<person>) => {
    setShowCalendar(false)
    setPersoneList(data)
    return (null)
  }

  const groupList = props.groupList.map(current => {
    return (

      <ListGroup horizontal={'lg'} key={current.id} className={groupListStyle.ListGroup}>
        <ListGroup.Item className={groupListStyle.item} variant="primary">{current.name}</ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} variant="secondary">{current.startDate.slice(0, 10)}</ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} variant="secondary"> {current.gitLink}  </ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} variant="secondary">{current.groupProfile}</ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} onClick={() => handleCalendarClick(current.calendar)} action variant="info">Events</ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} onClick={() => handleGrouopClick(current.userList)} action variant="info" >Group list</ListGroup.Item>
      </ListGroup>


    )
  })



  return (
    <div className={groupListStyle.main}>

      <div className={groupListStyle.table}>

        <ListGroup horizontal={'lg'} className={groupListStyle.ListGroup} >
          <ListGroup.Item className={groupListStyle.item} variant="warning">Group name</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Start Date</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning"> Git Link </ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Group Profile</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Events</ListGroup.Item>
          <ListGroup.Item className={groupListStyle.item} variant="warning">Group list</ListGroup.Item>
        </ListGroup>

        {groupList}
      </div>
      <div className={groupListStyle.detailInfo}>

        {showCalendar ? <CalendarDrawer event={eventEmulator} /> : <PersonListDrawer data={personeList} />}


      </div>

    </div>
  );
};

