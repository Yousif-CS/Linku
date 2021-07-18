import React, {Component} from 'react'
import { TextField, Button, Paper } from '@material-ui/core';
import './Board.css';
import { AppContext } from '../../utils/Store';
import axios from 'axios';
import baseURL from '../../utils/baseURL';

export const CreateCustomCard = ({
  onAdd,
  onCancel
}) => {
  const [submitTitle, setTitle] = React.useState('');
  const [submitDescription, setDescription] = React.useState('');
  const [submitLabel, setLabel] = React.useState('');
  const context = React.useContext(AppContext);
  const [tasks, setTasks] = [context.tasks, context.setTasks];
  const project = context.project;
  const mentees = context.mentees;

  const addTask = async () => {
    const config = {
      headers: { Authorization: `Bearer ${context.user.token}` }
    };
    try {
      const response = await axios.post(`${baseURL()}/task`,
        {
          title: submitTitle,
          description: "A test description",
          "label": "a test label",
          status: 0,
          project_id: project.id,
          mentee_id: mentees[0].id
        },
        config
        );
      const data = response.data;
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  const onTitleChange = e => {
    setTitle(e.target.value);
  }

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const onLabelChange = e => {
    setLabel(e.target.value);
  }

  const handleAdd = () => {
    onAdd({
      title: submitTitle,
      description: submitDescription,
      label: submitLabel,
    })
    addTask();
  }

  return (
    <Paper>
      {console.log(mentees)}
      <div className='addTaskContainer'>
        <TextField onChange={onTitleChange} id="standard-textarea" placeholder="Set title..." />
      </div>
      <div className='addTaskContainer'>
        <TextField onChange={onDescriptionChange} id="standard-textarea" placeholder="Set description..." />
      </div>
      <div className='addTaskContainer'>
        <TextField onChange={onLabelChange} id="standard-textarea" placeholder="Set label..." />
      </div>
      <Button variant="contained" color="primary" onClick={handleAdd}>Add</Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
    </Paper>
  )
}

