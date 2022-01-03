import React from 'react'
import './List.css'
import ListItem from './ListItem' 

const List = ({ comments }) => {
  return (
    <div className="list_wrap">
      <div className="list_title">Отзывы:</div>
      <div className="list">
          {
              comments.map((item,i)=> <ListItem key={`${i}+${item.name}`} item={item} /> )
          }
      </div>
    </div>
  );
};

export default List
