import React from 'react';

import { Container, Stack, Typography } from '@material-ui/core';
// components
//
import { TextField, Button, Paper } from '@material-ui/core';
import './Board.css';
import axios from 'axios';
import baseURL from '../../utils/baseURL';
import { makeStyles } from "@material-ui/styles";

import Board from 'react-trello';
import { AppContext } from '../../utils/Store';
import styled, {createGlobalStyle, css} from 'styled-components'

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

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
});

export const CustomCard = ({
  onDelete,
  onClick,
  className,
  title,
  description,
  label,
}) => {
  
  const classes = useStyles();
  const [submitTitle, setTitle] = React.useState('');
  const [submitDescription, setDescription] = React.useState('');
  const [submitLabel, setLabel] = React.useState('');
  const onTitleChange = e => {
    setTitle(e.target.value);
  }

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const onLabelChange = e => {
    setLabel(e.target.value);
  }

  const handleDelete = e => {
    onDelete();
    e.stopPropagation();
  }
  return (
    <CardWrapper
      onClick={onClick}
      className={className}
    >
      <header
        style={{
          borderBottom: '1px solid #eee',
          paddingBottom: 6,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TextField onChange={onTitleChange} id="standard-basic" InputProps={{classes}} variant='standard' defaultValue={title} />
        <TextField onChange={onDescriptionChange} id="standard-basic" InputProps={{classes}} variant='standard' defaultValue={label} />
      </header>
      <TextField onChange={onLabelChange} id="standard-basic" InputProps={{classes}} variant='standard' defaultValue={description} />
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
          label: 'due in a day',
          subTitle: 'SMS received at 12:13pm today',
          description: 'Thanks. Please schedule me for an estimate on Monday.',
          escalationText: 'Escalated to OPS-ESCALATIONS!',
          cardColor: '#BD3B36',
          cardStyle: {borderRadius: 6, boxShadow: '0 0 6px 1px #BD3B36', marginBottom: 15},
          metadata: {id: 'Card1'}
        },
        {
          id: 'Card2',
          name: 'Card Weathers',
          label: 'due now',
          subTitle: 'Email received at 1:14pm',
          description: 'Is the estimate free, and can someone call me soon?',
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
          label: 'due in a day',
          subTitle: 'Email received at 4:23pm today',
          description: 'You are welcome. Interested in doing business with you' + ' again',
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
