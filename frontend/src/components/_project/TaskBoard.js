import React from 'react';

import { Container, Stack, Typography } from '@material-ui/core';
// components
//
import Board from 'react-trello';
import { AppContext } from '../../utils/Store';
import { CustomCard } from './CustomCard';
import CreateCustomCard from './CustomCreateCard';
import './Board.css'
// ----------------------------------------------------------------------

const components = {
  card: CustomCard,
  NewCardForm: CreateCustomCard,
}

export default function TaskBoard() {
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  
  return (
    <div>
      <Board
        className="boardContainer"
        data={board} 
        components={components} 
        editable
      />
    </div>
  );
}
