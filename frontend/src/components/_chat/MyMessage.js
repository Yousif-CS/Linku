import React from 'react';
import { Paper, TextField, Typography, IconButton } from '@material-ui/core';
import { AppContext } from '../../utils/Store';
import checkCircle from '@iconify/icons-ant-design/check-circle-outlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  nice: {
    backgroundColor: '#93bff5',
    paddingLeft: '1em',
    maxWidth: '15em',
    paddingRight: '1em',
    marginBottom: '1em',
    paddingTop: '1em',
    paddingBottom: '1em',
    borderRadius: 10,
    marginLeft: '10em'
  }
}));

export default function MyMessage({message}) {
  const classes = useStyles();

  return (
    <Paper className={classes.nice}>{message.message}</Paper>
  );
}
