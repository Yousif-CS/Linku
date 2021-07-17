import React, {Component} from 'react'
import Board from 'react-trello'
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

class CreateCustomCard extends Component {
  handleAdd = () => this.props.onAdd({
    title: this.titleRef.value, 
    description: this.descRef.value, 
    label: this.label.value})
  
  setTitleRef = (ref) => this.titleRef = ref
  setDescRef = (ref) => this.descRef = ref
  setLabelRef = (ref) => this.label = ref

  render() {
  const {onCancel} = this.props
  return (
   <div style={{background: 'white', borderRadius: 3, border: '1px solid #eee', borderBottom: '1px solid #ccc'}}>
    <div style={{padding: 5, margin: 5}}>
      <div style={{marginBottom: 3}}>
        <TextField inputRef={this.setDescRef} id="standard-textarea" placeholder="Set title..." />
      </div>
      <div style={{marginBottom: 3}}>
        <TextField inputRef={this.setDescRef} id="standard-textarea" placeholder="Set description..." />
      </div>
      <div style={{marginBottom: 3}}>
        <TextField inputRef={this.setLabelRef} id="standard-textarea" placeholder="Set label..." />
      </div>
      <Button classes={classes.button} variant="contained" color="primary" onClick={this.handleAdd}>Add</Button>
      <Button variant="contained" color="secondary" onClick={onCancel}>Cancel</Button>
    </div>
  </div>
    ) 
  }
}

export default CreateCustomCard;