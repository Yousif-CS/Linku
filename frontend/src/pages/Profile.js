import React from 'react';

import { Container, Stack, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
//
import Board from 'react-trello';
import { AppContext } from '../utils/Store';

// ----------------------------------------------------------------------

export default function Project() {
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  
  return (
    <Page title="My Profile">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Profile
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <p>yeet</p>
        </Stack>
      </Container>
    </Page>
  );
}
