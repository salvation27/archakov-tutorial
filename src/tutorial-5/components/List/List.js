import React from 'react'
import './List.css'
import ListItem from './ListItem' 
import EmptyBlock from '../EmptyBlock/EmptyBlock'
const List = ({ comments, removeComment }) => {
  return (
    <div className="list_wrap">
      <div className="list_title">Отзывы:</div>
      <div className="list">
        {comments.length ? comments.map((item, i) => (
          <ListItem
            key={`${i}+${item.name}`}
            item={item}
            removeComment={removeComment}
          />
        )) : <EmptyBlock />}
      </div>
    </div>
  );
};

export default List
