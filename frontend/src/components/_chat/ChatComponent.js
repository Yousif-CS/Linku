import React from 'react';
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { alpha, experimentalStyled } from '@material-ui/core/styles';
import { Paper, TextField, Typography, IconButton } from '@material-ui/core';
import MenuPopover from '../MenuPopover';
import { AppContext } from '../../utils/Store';
import checkCircle from '@iconify/icons-ant-design/check-circle-outlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  blep : {
    position: 'fixed',
    bottom: '6.5em',
    right: '4.5em',
    height: '30em',
    width: '30em',
    padding: '2em',
  },
  
  textBar: {
    position: 'fixed',
    bottom: '7em',
    right: '20em',
  }
}));

const IconWrapperStyle = experimentalStyled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(10),
  height: theme.spacing(10),
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  border: '0.5px solid #2867b2',
  zIndex: 1,
}));

export default function ChatComponent() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const user = React.useContext(AppContext).user;
  const rep = [
    {message: 'hi'},
    {message: 'xd'},
    {message: 'i am so weak i want to sleep o lord have mercy lord haaave mercy'}
  ]

  const classes = useStyles();

  const handleChat = () => {
    setOpen(!open);
  };

  return (
    <>
      <IconButton
        onClick={handleChat}
      >
        <IconWrapperStyle>
          <Icon icon={checkCircle} width={24} height={24} />
        </IconWrapperStyle>
      </IconButton>
      {
        open ? 
        <Paper elevation={3} className={classes.blep}>
          {rep.map((msg) => <div>{msg.message}</div>)}
          <TextField className={classes.textBar} id="standard-textarea" label="Send a message" placeholder="Start typing..." />
        </Paper>
        : null
      }
    </>
  );
}
