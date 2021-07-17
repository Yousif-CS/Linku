import React from 'react';
import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import { experimentalStyled } from '@material-ui/core/styles';
import { Paper, TextField, IconButton } from '@material-ui/core';
import { AppContext } from '../../utils/Store';
import chatHead from '@iconify/icons-ant-design/aliwangwang-filled';
import { makeStyles } from '@material-ui/styles';
import SenderMessage from './SenderMessage';
import MyMessage from './MyMessage';
import './Chat.css';

const useStyles = makeStyles(() => ({
  blep: {
    position: 'fixed',
    bottom: '6.5em',
    right: '4.5em',
    height: '30em',
    width: '30em',
    paddingLeft: '2em',
    paddingTop: '2em',
    paddingBottom: '4em',
    border: '1px solid #eee',
    overflow: 'auto',
  },
  
  textBar: {
    position: 'fixed',
    bottom: '7em',
    right: '10em',
    width: '24em'
  },

  input : {
    zIndex: 5,
  },

  help: {
    margin: '20em',
    paddingLeft: '10px'
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
    {message: 'i am so weak i want to sleep o lord have mercy lord haaave mercy'},
    {message: 'i am so weak i want to sleep o lord have mercy lord haaave mercy'},
    {message: 'i am so weak i want to sleep o lord have mercy lord haaave mercy'}
  ]

  const send = [
    {message: 'hi'},
    {message: 'xd'},
    {message: 'i am so weak i want to sleep o lord have mercy lord haaave mercy'},
    {message: 'i am so weak i want to sleep o lord have mercy lord haaave mercy'},
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
          <Icon icon={chatHead} width={24} height={24} />
        </IconWrapperStyle>
      </IconButton>
      {
        open ? 
        <>
        <Paper elevation={5} className={classes.blep}>
            {rep.map((msg) => <SenderMessage message={msg} />)}
            {send.map((msg) => <MyMessage className={classes.help} message={msg}>msg.message</MyMessage>)}
            <TextField variant="filled" color="secondary" InputProps={{
              className: classes.input,
            }} className={classes.textBar} id="standard-textarea" placeholder="Start typing..." />
          </Paper>
        </>
        : null
      }
    </>
  );
}
