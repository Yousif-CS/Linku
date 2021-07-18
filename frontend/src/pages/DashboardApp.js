import React from 'react';
// material
import { Box, Grid, Container, Typography, Card, Stack, Link, TextField } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppNewUsers,
  AppBugReports,
  AppItemOrders,
  AppWeeklySales,
} from '../components/_dashboard/app';
import { AppContext } from '../utils/Store';
import { makeStyles } from '@material-ui/styles/';
import { LoadingButton } from '@material-ui/lab';
import axios from 'axios';
import baseURL from '../utils/baseURL';

const useStyles = makeStyles({
  project: {
    textAlign: 'center',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    height: '100%'
  },
  inputs: {
    width: '700px',
    marginBottom: '20px'
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
  }
});

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const user = React.useContext(AppContext).user;
  const context = React.useContext(AppContext);
  const [project, setProject] = [context.project, context.setProject];
  
  const classes = useStyles();
  const [projTitle, setProjTitle] = React.useState('');
  const [projDesc, setProjDesc] = React.useState('');
  
  const createProject = async () => {
    if (projTitle === '' || projDesc === '') {
        // TODO fancy error
        alert('A field below is empty!');
        return;
    }
    const config = {
      headers: { Authorization: `Bearer ${user.token}` }
    };
    
    const bodyParameters = {
      name: projTitle,
      description: projDesc,
      user_id: user.user_id,
    };
    
    try {
        const response = await axios.post(`${baseURL()}/project/`,
        bodyParameters,
        config,
        );
        const data = response.data;
        
        console.log(response);
        setProject(response.data);
        alert('We found you a mentee! Redirecting you to the project page...');
        // navigate('/');
    } catch (e) {
        alert(e);
        alert(e.reponse);
    }
  };
  
  const checkProject = async () => {
    const config = {
      headers: { Authorization: `Bearer ${user.token}` }
    };
    
    const bodyParameters = {
      name: projTitle,
      description: projDesc,
      user_id: user.user_id,
    };
    
    try {
        const response = await axios.get(`${baseURL()}/user/projects`,
        config,
        );
        const data = response.data;
        console.log(response);
        // navigate('/');
    } catch (e) {
        alert(e);
        alert(e.reponse);
    }
  };

  
  const mentor = () => {
    return (
        <Page title="Dashboard">
          <Container maxWidth="xl">
            <Box sx={{ pb: 5 }}>
              <Typography variant="h4">Welcome back {user.first_name}!</Typography>
            </Box>
            <Grid container spacing={3}>
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

              {console.log(project)}
              
                { project !== {} ?
                  <Grid item xs={12} md={6} lg={12}>
                    <Card className={classes.project}>
                      <Typography variant="h3">You don't have any mentees {user.first_name}!</Typography>
                      <br></br>
                      <Typography gutterBottom variant="h5" sx={{ opacity: 0.72 }}>
                        Fill in the below information and click the button to be assigned a new mentee.
                      </Typography>
                      <Typography variant="h5" sx={{ opacity: 0.72 }}>
                        You are assigned a mentee who matches you the closest based on company and industry alignments of yourself and the mentee.
                      </Typography>
                      <br></br>
                      <Container>
                      <TextField
                        className={classes.inputs}
                        autoComplete="title"
                        type="text"
                        label="Project title"
                        value={projTitle}
                        onChange={(e) => {setProjTitle(e.target.value)}}
                      />
                      <TextField
                        className={classes.inputs}
                        autoComplete="desc"
                        multiline
                        rows={5}
                        type="text"
                        label="Project description"
                        value={projDesc}
                        onChange={(e) => {setProjDesc(e.target.value)}}
                      />
                      <LoadingButton
                        fullWidth
                        className={classes.inputs}
                        size="large"
                        type="submit"
                        variant="contained"
                        onClick={() => {createProject()}}
                      >
                        Create a new project and assign me a new mentee
                      </LoadingButton>

                      </Container>
                    </Card>
                  </Grid>
                  : null
                }
            </Grid>
          </Container>
        </Page>
      );
  }
  
  const mentee = () => {
    return (<> Mentee</>)
  }
  checkProject();
  if (user.role === 'Industry Mentor') {
    return (mentor());
  } else {
      return (mentee());
  }
  

}
