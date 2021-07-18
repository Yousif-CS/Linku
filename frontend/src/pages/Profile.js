import React from 'react';

import { Container, Stack, Typography, Card, Box } from '@material-ui/core';
// components
import Page from '../components/Page';
//
import Board from 'react-trello';
import { AppContext } from '../utils/Store';
import { makeStyles } from '@material-ui/styles/';

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
        height: '100%',
        width: '50%'
    },
    display: {
      marginBottom: '20px'
    }
  });
  
export default function Project() {
  const classes = useStyles();
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  const user = React.useContext(AppContext).user;
  const project = React.useContext(AppContext).project;

  return (
    <Page title="My Profile">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          My Profile
        </Typography>
        <Stack
          direction="column"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Card className={classes.text}>
          <Container sx={{ textAlign: '-webkit-center'}}>
          <Box
            component="img"
            src="/static/mock-images/avatars/avatar_default.jpg"
            sx={{ width: 100, borderRadius: '50%', marginBottom: '30px'}}
          />
          </Container>
          <Typography className={classes.display} variant="h5">
          First name: {user.first_name}
          </Typography>
          <Typography className={classes.display} variant="h5">
          Last name: {user.last_name}
          </Typography>
          <Typography className={classes.display} variant="h5">
          Email: {user.email}
          </Typography>
          <Typography className={classes.display} variant="h5">
          Role: {user.role}
          </Typography>
          </Card>
        </Stack>
      </Container>
    </Page>
  );
}
