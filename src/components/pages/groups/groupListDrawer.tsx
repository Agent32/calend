
import { useState } from "react";
import { ListGroup } from "react-bootstrap";

import groupListStyle from "./groupListStyle.module.scss";
import { groupListConectedType } from "./groupsListContainer";


import { CalendarDrawer } from "../../calendarDrawer";
import { person } from "../../../store/types/storeTypes";
import { PersonListDrawer } from "../../personListDrawer";

const eventEmul = [
  { title: 'Lection1', date: '2021-06-01', start: '2021-06-01T15:20:00' },
  { title: 'Lection3', date: '2021-06-02', start: '2021-06-02T11:10:00' }
]
const eventEmu2 = [
  { title: 'Lection2', date: '2021-06-03', start: '2021-06-03T12:20:00' },
  { title: 'Lection4', date: '2021-06-05', start: '2021-06-07T16:10:00' }
]

export const GroupListDrawer = (props: groupListConectedType) => {

  const [showCalendar, setShowCalendar] = useState(true);
  const [eventEmulator, setEventEmulator] = useState(eventEmul);
  const [personeList, setPersoneList] = useState(props.groupList[0].userList as Array<person>);
  const handleCalendarClick = () => {
    setShowCalendar(true)
    eventEmulator === eventEmul ? setEventEmulator(eventEmu2) : setEventEmulator(eventEmul)
    return (null)
  }
  const handleGrouopClick = (data: Array<person>) => {
    setShowCalendar(false)
    setPersoneList(data)
    return (null)
  }

  const groupList = props.groupList.map(current => {
    return (

      <ListGroup horizontal={true} key={current.id} className={groupListStyle.ListGroup}>
        <ListGroup.Item className={groupListStyle.item} variant="primary">{current.name}</ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} variant="secondary">{current.startDate.slice(0, 10)}</ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} variant="secondary"> {current.gitLink}  </ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} variant="secondary">{current.groupProfile}</ListGroup.Item>
        <ListGroup.Item className={groupListStyle.item} onClick={handleCalendarClick} action variant="info">Calendar</ListGroup.Item>
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
          <ListGroup.Item className={groupListStyle.item} variant="warning">Calendar</ListGroup.Item>
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

