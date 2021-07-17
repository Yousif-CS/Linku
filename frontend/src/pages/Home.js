import React from 'react';
// material
import { Box, Grid, Container, Typography, Card, Stack, Link } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppNewsUpdate,
  AppWeeklySales,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';
import { AppContext } from '../utils/Store';
import { MHidden } from '../components/@material-extend';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles/';
import { Navigate, useRoutes } from 'react-router-dom';

// ----------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    height: "100%",
    background: "linear-gradient(180deg, #FFFFFF 50%, #1f5391 50%)",
  },
  bigCard: {
    padding: '50px',
  },
  container: {
    paddingTop: '150px'
  }
});

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  // maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '150px',

}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export default function Home() {
  const user = React.useContext(AppContext).user;
  if (user.token !== '') {
    return(<Navigate to="/dashboard/app" />);
  }
  const classes = useStyles();
  return (
    <Page title="Dashboard" className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        {/* <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, Welcome Back
          </Typography>
        </SectionStyle> */}

        <Box sx={{ pb: 5 }}>
          <Typography align='center' variant="h2">Connect with people, not profiles</Typography>
        </Box>
        <Card className={classes.bigCard}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWeeklySales />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppNewUsers />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppItemOrders />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBugReports />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Card>
            Image
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
            Statement
            </Card>
          </Grid>
        </Grid>
        </Card>
      </Container>
    </Page>
  );
}
