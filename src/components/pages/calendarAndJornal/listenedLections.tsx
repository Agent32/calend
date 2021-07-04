

import { DataGrid } from '@material-ui/data-grid';
import { GridColDef } from "@material-ui/data-grid";
import { makeStyles } from '@material-ui/styles';

export const ListenedLections = (props: any) => {

  const rows = [
    { id:1,
      lection: 'java',
      mentor: 'Rawrs',
      whoListendedNumber: 3
    },
    {id:2,
      lection: 'c++',
      mentor: 'ASDAS',
      whoListendedNumber: 2
    },
    { id:3,
      lection: 'js',
      mentor: 'asdfsad',
      whoListendedNumber: 7
    },
    { id:4,
      lection: 'asm',
      mentor: 'zxcvzxcv',
      whoListendedNumber: 1
    },
    { id:5,
      lection: 'python',
      mentor: 'asdfsad',
      whoListendedNumber: 5
    },
    { id:6,
      lection: 'java',
      mentor: 'asdfsasdasad',
      whoListendedNumber: 6
    },

  ]


  const columns: GridColDef[] = [
    { field: 'lection', headerName: 'Lection Name', width: 130 },
    {
      field: 'mentor',
      headerName: 'Mentor',
      description:
        'Name of the mentor.',
      width: 150,
    },
    {
      field: 'whoListendedNumber',
      headerName: 'Listened number',
      description:
        'Number of interns who listened this lection',
      width: 80,
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
    <div style={{ width: 370 }}>

      <DataGrid
        className={classes.root}
        autoHeight={true}
        rows={rows}
        columns={columns}
        onCellDoubleClick={() => alert(1)}
        hideFooterSelectedRowCount={true}
      />

    </div>
  );
};

