import React from 'react';

import { Container, Stack, Typography } from '@material-ui/core';
// components
//
import Board from 'react-trello';
import { AppContext } from '../../utils/Store';
import { CustomCard } from './CustomCard';
import { CreateCustomCard } from './CustomCreateCard';
import { TestCard } from './TestCard';
import './Board.css'

// ----------------------------------------------------------------------

const components = {
  NewCardForm: CreateCustomCard,
}

export default function TaskBoard() {
  const context = React.useContext(AppContext);
  const [tasks, setTasks] = [context.tasks, context.setTasks];
  const [board, setBoard] = [context.board, context.setBoard];
  
  return (
    <Board
      data={board}
      draggable
      components={components}
      editable
    />
  )
}
