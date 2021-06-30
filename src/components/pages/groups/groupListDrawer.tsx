
import { useState } from "react";
import { ListGroup,Table } from "react-bootstrap";

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

  const tableHeader = (
    <ListGroup horizontal={'lg'} >
      <ListGroup.Item variant="warning">Group name</ListGroup.Item>
      <ListGroup.Item variant="warning">Start Date</ListGroup.Item>
      <ListGroup.Item variant="warning"> Git Link </ListGroup.Item>
      <ListGroup.Item variant="warning">Group Profile</ListGroup.Item>
      <ListGroup.Item variant="warning">Events</ListGroup.Item>
      <ListGroup.Item variant="warning">Group list</ListGroup.Item>
    </ListGroup>)

  const groupList = props.groupList.map(current => {
    return (

      <ListGroup horizontal={'lg'} key={current.id} >
        <ListGroup.Item variant="primary">{current.name}</ListGroup.Item>
        <ListGroup.Item variant="secondary">{current.startDate.slice(0, 10)}</ListGroup.Item>
        <ListGroup.Item variant="secondary"> {current.gitLink}  </ListGroup.Item>
        <ListGroup.Item variant="secondary">{current.groupProfile}</ListGroup.Item>
        <ListGroup.Item onClick={() => handleCalendarClick(current.calendar)} action variant="info">Events</ListGroup.Item>
        <ListGroup.Item onClick={() => handleGrouopClick(current.userList)} action variant="info" >Group list</ListGroup.Item>
      </ListGroup>


    )
  })

  const table = [tableHeader, ...groupList]

  return (
    <div className={groupListStyle.main}>

<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      {table}

    </div>
  );
};

