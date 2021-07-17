import React from 'react';

import { Container, Stack, Typography } from '@material-ui/core';
// components
//
import Board from 'react-trello';
import { AppContext } from '../../utils/Store';
import styled, {createGlobalStyle, css} from 'styled-components'
import CustomCard from './CustomCard';

// ----------------------------------------------------------------------

const MyGlobalStyle = createGlobalStyle`
  .LaneMenuHeader {
    background-color: 'blue';
  }
`

export default function TaskBoard() {
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  
  return (
    <div>
      <Board data={board} editable draggable/>
      <p>yeet</p>
    </div>
  );
}
