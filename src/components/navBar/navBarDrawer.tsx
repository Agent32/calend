
import { AppBar, Container, Typography, Breadcrumbs, Link } from '@material-ui/core';
import { emphasize, makeStyles } from '@material-ui/core/styles';


import { Breadcrumb } from 'antd';


import nawBarStyle from "./nawBarStyle.module.scss";

export function NavBarDrawer(props: any) {

  const useStyles = makeStyles((theme) => ({
    colorDefault: {
     
        backgroundColor: 'black',    
    },
    root: {
      height: theme.spacing(3),
      color: 'white',
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
       color: 'orange',
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(theme.palette.grey[300], 0.12),
      },
    }
  }));

  const classes = useStyles();


  return (
   /*  <AppBar position='static' className={classes.colorDefault}>
      <Container fixed>
        <Typography variant='h6'>  Intern management System</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="secondary" href="#groups"  className={classes.root}>
            Groups
          </Link>
          <Link color="secondary" href="#journal" className={classes.root}>
            Journal
          </Link>
          <Link color="secondary" href="#did" className={classes.root}>
            Functional
          </Link>
        </Breadcrumbs>

      </Container>
    </AppBar> */
    <Breadcrumb className={nawBarStyle.main}>
      <h4> Intern management System </h4>
    <Breadcrumb.Item href="/">
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#groups">
    <span> 
      Groups</span>
    </Breadcrumb.Item >
    <Breadcrumb.Item href="#journal"><span>Journal</span></Breadcrumb.Item>
  </Breadcrumb> 
  )
}