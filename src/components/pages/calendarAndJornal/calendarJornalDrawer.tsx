
import Box from '@material-ui/core/Box';



import calendarJornalStyle from "./calendarJornalStyle.module.scss";
import { CalendarDrawer } from "../../calendarDrawer/calendarDrawer";
import { groupListConectedType } from "../groups/groupsListContainer";
import { ListenedLections } from './listenedLections';
import { TableDrawer } from './tabsBilder';
import { Button } from '@material-ui/core';
import React from 'react';


export const CalendarAndJornalDrawer = (props: groupListConectedType) => {




  let objToDraw = [
    {
      tabLable: 'Calendar',
      object: (
        <Box display="flex" flexDirection="row" justifyContent="flex-start"   >
          <Box p={4} m={2}>
            <ListenedLections /> </Box>

          <Box>     <CalendarDrawer event={props.groupList[0].calendar} /></Box>
          <Button variant="contained" color="primary" onClick={addTable}>
            Primary
          </Button>
        </Box>)
    }, {
      tabLable: 'Journal',
      object: (<div> Ne sosvem rabotaet</div>)
    }
  ]

  const [objToDrawInTable, setObjToDrawInTable] = React.useState(objToDraw);

  function addTable() {

    const ro = {
      tabLable: 'Test',
      object: (<div> Really work</div>)
    }

    objToDraw = [...objToDraw, ro]
    setObjToDrawInTable(objToDraw)

  }

  return (
    <div className={calendarJornalStyle.main}>


      <div>
        <TableDrawer tabs={objToDrawInTable} />

      </div>


    </div>
  )
};

