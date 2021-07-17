import React, {Component} from 'react'
import Board from 'react-trello'

class NewCardForm extends Component {
  
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
      <div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setTitleRef} placeholder="User" />
        </div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setDescRef} placeholder="Task Description" />
        </div>
        <div style={{marginBottom: 5}}>
          <input type="text" ref={this.setLabelRef} placeholder="Label" />
        </div>
      </div>
      <button onClick={this.handleAdd}>Add</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  </div>
    ) 
  }
}

export default NewCardForm;