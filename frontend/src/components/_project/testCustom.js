import React from 'react';

import { Container, Stack, Typography } from '@material-ui/core';
// components
//
import { TextField, Button, Paper } from '@material-ui/core';
import './Board.css';
import axios from 'axios';
import baseURL from '../../utils/baseURL';

import Board from 'react-trello';
import { AppContext } from '../../utils/Store';
import styled, {createGlobalStyle, css} from 'styled-components'
import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer
} from 'react-trello'
import InlineInput from 'react-trello'
import Tag from 'react-trello'
import DeleteButton from 'react-trello'

// ----------------------------------------------------------------------

const CardWrapper = styled.article`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`

const CustomBoi = ({
  onDelete,
  onClick,
  className,
  name,
  cardStyle,
  body,
  dueOn,
  cardColor,
  subTitle,
  tagStyle,
  escalationText,
  tags,
}) => {
  
  const handleDelete = e => {
    onDelete();
    e.stopPropagation();
  }
  return (
    <CardWrapper
      onClick={onClick}
      style={cardStyle}
      className={className}
    >
      <Paper>
      <div className='addTaskContainer'>
        <TextField id="standard-textarea" placeholder="Set title..." />
      </div>
      <div className='addTaskContainer'>
        <TextField id="standard-textarea" placeholder="Set description..." />
      </div>
      <div className='addTaskContainer'>
        <TextField id="standard-textarea" placeholder="Set label..." />
      </div>
    </Paper>
      <header
        style={{
          borderBottom: '1px solid #eee',
          paddingBottom: 6,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: cardColor
        }}>
        <p>{name}</p>
        <div style={{fontSize: 14, fontWeight: 'bold'}}>{name}</div>
        <div style={{fontSize: 11}}>{dueOn}</div>
      </header>
      <div style={{fontSize: 12, color: '#BD3B36'}}>
        <div style={{color: '#4C4C4C', fontWeight: 'bold'}}>{subTitle}</div>
        <div style={{padding: '5px 0px'}}>
          <i>{body}</i>
        </div>
        <div style={{marginTop: 10, textAlign: 'center', color: cardColor, fontSize: 15, fontWeight: 'bold'}}>{escalationText}</div>
      </div>
    </CardWrapper>
  )
}

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '12/12',
      style: {backgroundColor: 'cyan', padding: 20},
      titleStyle: {fontSize: 20, marginBottom: 15},
      labelStyle: {color: '#009688', fontWeight: 'bold'},
      cards: [
        {
          id: 'Card1',
          name: 'John Smith',
          dueOn: 'due in a day',
          subTitle: 'SMS received at 12:13pm today',
          body: 'Thanks. Please schedule me for an estimate on Monday.',
          escalationText: 'Escalated to OPS-ESCALATIONS!',
          cardColor: '#BD3B36',
          cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15},
          metadata: {id: 'Card1'}
        },
        {
          id: 'Card2',
          name: 'Card Weathers',
          dueOn: 'due now',
          subTitle: 'Email received at 1:14pm',
          body: 'Is the estimate free, and can someone call me soon?',
          escalationText: 'Escalated to Admin',
          cardColor: '#E08521',
          cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #E08521', marginBottom: 15},
          metadata: {id: 'Card1'}
        }
      ]
    },
    {
      id: 'lane2',
      title: 'Long Lane name this is i suppose ha!',
      cards: [
        {
          id: 'Card3',
          name: 'Michael Caine',
          dueOn: 'due in a day',
          subTitle: 'Email received at 4:23pm today',
          body: 'You are welcome. Interested in doing business with you' + ' again',
          escalationText: 'Escalated to OPS-ESCALATIONS!',
          cardColor: '#BD3B36',
          cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15},
          metadata: {id: 'Card1'},
          tags: [{title: 'Critical', color: 'white', bgcolor: 'red'}, {title: '2d ETA', color: 'white', bgcolor: '#0079BF'}]
        }
      ]
    }
  ]
}

const components = {
  Card: CustomBoi,
};

export default function TestCustom() {
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  
  return (
    <div>
      <Board data={data} components={components} draggable/>
      <p>yeet</p>
    </div>
  );
}