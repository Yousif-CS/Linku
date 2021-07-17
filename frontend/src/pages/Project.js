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
    <Page title="Dashboard: My Project Board">
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
          <p>helo</p>
        </Stack>
        <Board data={board} editable draggable/>
      </Container>
    </Page>
  );
}
