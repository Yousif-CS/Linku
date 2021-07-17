import { Link as RouterLink, Outlet } from 'react-router-dom';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
// components
import Logo from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles/';
import { Box, Grid, Container, Typography, Card, Stack, Link, Button} from '@material-ui/core';
// ----------------------------------------------------------------------

const useStyles = makeStyles({
  appbar: {
    backgroundColor: 'white',
    height: '100px',
    paddingTop: '15px',
    boxShadow: 'none',
  },
  buttons: {
    marginLeft: '20px',
    marginRight: '20px',
  }
});

const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0)
  }
}));

// ----------------------------------------------------------------------

export default function LogoOnlyLayout() {
  const navigate = useNavigate();

  const classes = useStyles();
  const location = useLocation();
  if (location.pathname !== '/') {
    return (
        <>
          <HeaderStyle>
            <RouterLink to="/">
              <Logo />
            </RouterLink>
          </HeaderStyle>
          <Outlet />
        </>
      );
  }
  
  return (
  <>
    <AppBar title={<Logo />} className={classes.appbar} boxShadow={0}>
    <Toolbar>
      <Box display='flex' flexGrow={1}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      </Box>
      <Button onClick={() => {navigate('/login')}} className={classes.buttons} size='large' variant='outlined'>Login</Button>
      <Button onClick={() => {navigate('/register')}} className={classes.buttons} size='large' variant='outlined'>Register</Button>
    </Toolbar>
    </AppBar>
    <Outlet />
  </>
  );
}
