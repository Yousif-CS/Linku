import React, {Component} from 'react'
import { TextField, Button } from '@material-ui/core';
import './Board.css';

class CreateCustomCard extends Component {
  handleAdd = () => this.props.onAdd({
    title: this.titleRef.value, 
    description: this.descRef.value, 
    label: this.label.value})
  
  setTitle = (ref) => this.titleRef = ref
  setDescription = (ref) => this.descRef = ref
  setLabel = (ref) => this.label = ref

  render() {
  const {onCancel} = this.props
  return (
   <div className={addTask}>
      <div className={addTaskContainer}>
        <TextField inputRef={this.setTitle} id="standard-textarea" placeholder="Set title..." />
      </div>
      <div className={addTaskContainer}>
        <TextField inputRef={this.setDescription} id="standard-textarea" placeholder="Set description..." />
      </div>
      <div className={addTaskContainer}>
        <TextField inputRef={this.setLabel} id="standard-textarea" placeholder="Set label..." />
      </div>
      <Button variant="contained" color="primary" onClick={this.handleAdd}>Add</Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
    </div>
    ) 
  }
}

export default CreateCustomCard;