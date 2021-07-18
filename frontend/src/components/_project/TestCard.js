import React, {Component} from 'react'

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

export const TestCard = ({
  id,
  title,
  description,
  label,
  status,
  mentee_id,
  project_id,
  cardStyle,
  tags,
  showDeleteButton,
  onDelete,
  editable,
  onClick,
  cardDraggable,
}) => {

  const clickDelete = e => {
    onDelete()
    e.stopPropagation()
  }

  const updateCard = (card) => {
    console.log(card)
    onChange({...card, id})
  }

  const [submitTitle, setTitle] = React.useState('');
  const [submitLabel, setDescription] = React.useState('');
  const [submitDescription, setLabel] = React.useState('');

  const onTitleChange = e => {
    setTitle(e.target.value);
  }

  const onDescriptionChange = e => {
    setDescription(e.target.value);
  }

  const onLabelChange = e => {
    setLabel(e.target.value);
  }

  return (
    <MovableCardWrapper
      data-id={id}
      onClick={onClick}
      style={cardStyle}
    >
      <CardHeader>
        <CardTitle draggable={cardDraggable}>
          {editable ? <InlineInput value={title} border placeholder={'Edit title'} resize='vertical' onSave={(value) => updateCard({title: value})} /> : title}
        </CardTitle>
        <CardRightContent>
          {editable ? <InlineInput value={label} border placeholder={'Edit label'} resize='vertical' onSave={(value) => updateCard({label: value})} /> : label}
        </CardRightContent>
        {showDeleteButton && <DeleteButton onClick={clickDelete} />}
      </CardHeader>
      <Detail>
        {editable ? <InlineInput value={description} border placeholder={'Edit description'} resize='vertical' onSave={(value) => updateCard({description: value})} /> : description}
      </Detail>
      {tags && tags.length> 0 && (
        <Footer>
          {tags.map(tag => (
            <Tag key={tag.title} {...tag} tagStyle={tagStyle} />
          ))}
        </Footer>
      )}
    </MovableCardWrapper>
  )
}