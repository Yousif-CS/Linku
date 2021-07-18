import React from 'react';

import { Container, Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import TaskBoard from '../components/_project/TaskBoard';
import { AppContext } from '../utils/Store';

// ----------------------------------------------------------------------

export default function Project() {
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  const [profile, setProfile] = [context.profile, context.setProfile];

  return (
    <Page title="Dashboard: My Project Board">
      {console.log(profile)}
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Project Board
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
        </Stack>
        <TaskBoard />
      </Container>
    </Page>
  );
}
