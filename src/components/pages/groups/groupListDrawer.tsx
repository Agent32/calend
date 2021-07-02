
import { useState } from "react";
/* import { ListGroup, Table } from "react-bootstrap"; */

import groupListStyle from "./groupListStyle.module.scss";
import { groupListConectedType } from "./groupsListContainer";

import { calendarType, person } from "../../../store/types/storeTypes";
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import { GridColDef } from "@material-ui/data-grid";
import { GridValueGetterParams ,} from "@material-ui/data-grid";

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



/*   const groupList = props.groupList.map(current => {
    debugger
    return (

      <tr key={current.id}  >

        <td className={groupListStyle.groupAva} ><img src={current.avatar} alt='ava' /></td>
        <td>{current.name}</td>
        <td>{current.mentor}</td>
        <td> {current.startDate.slice(0, 10)} </td>
        <td> {current.endDate.slice(0, 10)}</td>
        <td>{current.groupProfile}</td>

      </tr>


    )
  }) */

  const shit = ['Avatar', 'Group name', 'Mentor', 'Start Date', 'End Date', 'Сourse']
  
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Group name', width: 120 },
    {
      field: 'mentor',
      headerName: 'Mentor',
      description:
        'Name of the mentor.',
      width: 160,
      
    },
    {
      field: 'startDate',
      headerName: 'Start Date',
      type: 'dateTime',
      width: 160,
    },
    {
      field: 'endDate',
      headerName: 'End Date',
      type: 'dateTime',
      width: 160,
    },
    {
      field: 'groupProfile',
      headerName: 'Сourse',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];

 


  return (
    <div className={groupListStyle.main}>

<DataGrid rows={props.groupList} columns={columns} pageSize={5}  />
      
     
{/*       <Table striped bordered hover size="sm" >
        <thead> //
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
      </Table> */}


    </div>
  );
};

