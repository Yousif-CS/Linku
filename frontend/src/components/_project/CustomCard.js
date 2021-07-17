import React from 'react';
import { MovableCardWrapper } from 'react-trello';
import DeleteButton from 'react-trello';
import Tag from 'react-trello';
import { AppContext } from '../../utils/Store';

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
}) => {
  const clickDelete = e => {
    onDelete()
    e.stopPropagation()
  }

  return (
    <MovableCardWrapper
      onClick={onClick}
      style={cardStyle}
      className={className}
    >
      <header
        style={{
          borderBottom: '1px solid #eee',
          paddingBottom: 6,
          marginBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <div style={{fontSize: 14, fontWeight: 'bold'}}>{title}</div>
        <div style={{fontSize: 11}}>{id}</div>
        {showDeleteButton && <DeleteButton onClick={clickDelete} />}
      </header>
      <div style={{fontSize: 12, color: '#BD3B36'}}>
        <div style={{color: '#4C4C4C', fontWeight: 'bold'}}>{description}</div>
        <div style={{padding: '5px 0px'}}>
          <i>{body}</i>
        </div>
        <div style={{marginTop: 10, textAlign: 'center', color: cardColor, fontSize: 15, fontWeight: 'bold'}}>{escalationText}</div>
        {tags && (
          <div
            style={{
              borderTop: '1px solid #eee',
              paddingTop: 6,
              display: 'flex',
              justifyContent: 'flex-end',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}>
            {tags.map(tag => (
              <Tag key={tag.title} {...tag} tagStyle={tagStyle} />
            ))}
          </div>
        )}
      </div>
    </MovableCardWrapper>
  )
}
