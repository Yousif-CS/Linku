import React from 'react';
import { AppContext } from '../../utils/Store';

export const BoardWithCustomCard = () => {
  const context = React.useContext(AppContext);
  const [board, setBoard] = [context.board, context.setBoard];
  const [draggedData, setDraggedData] = React.useState(null);

  const updateBoard = newData => {
    debug('calling updateBoard')
    setDraggedData(newData)
  }

  const onDragEnd = (cardId, sourceLandId, targetLaneId, card) => {
    debug('Calling onDragENd')
    const {draggedData} = this.state
    const laneIndex = draggedData.lanes.findIndex(lane => lane.id === sourceLandId)
    const cardIndex = draggedData.lanes[laneIndex].cards.findIndex(card => card.id === cardId)
    const updatedData = update(draggedData, {lanes: {[laneIndex]: {cards: {[cardIndex]: {cardColor: {$set: '#d0fdd2'}}}}}})
    this.setState({boardData: updatedData})
  }
  
  return (
    <Board
      tagStyle={{fontSize: '80%'}}
      data={board}
      draggable
      onDataChange={updateBoard}
      handleDragEnd={onDragEnd}
      onCardClick={(cardId, metadata) => alert(`Card with id:${cardId} clicked. Has metadata.id: ${metadata.id}`)}
      components={{Card: CustomCard}}
    />
  )
    
  }