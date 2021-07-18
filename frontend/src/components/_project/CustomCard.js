import React from 'react';
import DeleteButton from 'react-trello';
import Tag from 'react-trello';
import { AppContext } from '../../utils/Store';

import {
  MovableCardWrapper,
  CardHeader,
  CardRightContent,
  CardTitle,
  Detail,
  Footer
} from 'react-trello'

export const CustomCard = ({
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
  cardDraggable
}) => {
  const clickDelete = e => {
    onDelete()
    e.stopPropagation()
  }

  const onChangeTitle = (e) => {
    console.log('yeet')
  }

  return (
    <MovableCardWrapper
      onClick={onClick}
      style={cardStyle}
      className={className}
    >
      {console.log('????????')}
      <CardHeader>
        <p>KAYEMESSSS</p>
        <CardTitle draggable={cardDraggable}>
          {editable ? <InlineInput value={title} onChange={onChangeTitle} border placeholder={'Edit title'} resize='vertical' onSave={(value) => updateCard({title: value})} /> : title}
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
          <p>yeet</p>
        </Footer>
      )}
    </MovableCardWrapper>
  )
}
