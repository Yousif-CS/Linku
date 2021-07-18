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
  card: CustomCard,
  NewCardForm: CreateCustomCard,
}

export default function TaskBoard() {
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  const [tasks, setTasks] = [context.tasks, context.setTasks];

  return (
    <div>
      {console.log(tasks)}
      <Board
        className="boardContainer"
        data={board} 
        components={components} 
        editable
      />
    </div>
  );
}
