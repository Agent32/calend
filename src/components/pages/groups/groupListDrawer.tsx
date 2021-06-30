
import { useState } from "react";
import { ListGroup, Table } from "react-bootstrap";

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
    debugger
    return (

      <tr key={current.id} >

        <td className={groupListStyle.groupAva} ><img src={current.avatar} alt='ava' /></td>
        <td>{current.name}</td>
        <td>{current.mentor}</td>
        <td> {current.startDate.slice(0, 10)} </td>
        <td> {current.endDate.slice(0, 10)}</td>
        <td>{current.groupProfile}</td>

      </tr>


    )
  })


  return (
    <div className={groupListStyle.main}>

      <Table striped bordered hover size="sm" >
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Group name</th>
            <th>Mentor</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Сourse</th>
          </tr>
        </thead>
        <tbody>
          {groupList}
        </tbody>
      </Table>


    </div>
  );
};

