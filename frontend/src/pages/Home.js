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
import POSTS from '../_mocks_/blog';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../components/_dashboard/blog';

// ----------------------------------------------------------------------

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(180deg, #FFFFFF 50%, #1f5391 50%)",
  },
  bigCard: {
    padding: '50px',
  },
  container: {
    paddingTop: '150px',
    paddingBottom: '100px',
  },
  text: {
      textAlign: 'center',
      paddingTop: '40px',
      paddingBottom: '40px',
      paddingLeft: '40px',
      paddingRight: '40px',
      height: '100%'
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
          <Typography align='center' variant="h2">Connect with people, not profiles.</Typography>
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
            <img src="/static/project_board_all.jpg" />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.text}>
            <Typography variant="h3">Engage with industry mentors</Typography>
              <Typography gutterBottom variant="subtitle1" sx={{ opacity: 0.72 }}>
                who have experience in your industries and companies of interest.
              </Typography>
              <br></br>
              <Typography variant="subtitle1" sx={{ opacity: 0.72 }}>
                Get exposure to what industry is really like, find out what you want to do, get tips for uni, and build lasting connections on LinkU.
              </Typography>
            </Card>
          </Grid>
          {POSTS.map((post, index) => (
                <BlogPostCard key={post.id} post={post} index={index} />
              ))}
        </Grid>
        </Card>
      </Container>
    </Page>
  );
}
