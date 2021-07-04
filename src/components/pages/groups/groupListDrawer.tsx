
import { groupListConectedType } from "./groupsListContainer";

import { DataGrid } from '@material-ui/data-grid';
import { GridColDef } from "@material-ui/data-grid";

import { makeStyles } from '@material-ui/styles';
export const GroupListDrawer = (props: groupListConectedType) => {




  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Group name', width: 160 },
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
      description: 'Course of groups',
      width: 160,
    },
  ];

  const useStyles = makeStyles({
    root: {
      '& .MuiDataGrid-columnHeaderWrapper': {
        backgroundColor: 'rgb(255, 145, 77)',
      },
      '& .MuiDataGrid-selectedRowCount': {
        color: 'rgba(255, 7, 0, 0.55)',
      },
    },
  });
  const classes = useStyles();


  return (
    <div>

      <DataGrid
        className={classes.root}
        autoHeight={true}
        autoPageSize={true}
        rows={props.groupList}
        columns={columns}
        onCellDoubleClick={() => alert(1)}
        hideFooterSelectedRowCount={true}
      />

    </div>
  );
};

