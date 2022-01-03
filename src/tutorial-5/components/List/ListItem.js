import React from 'react'

const ListItem = ({item}) => {
    const{name,date,text} = item
    return (
      <div className="list_item">
        <div className="list_name">{name}</div>
        <div className="list_text">{text}</div>
        <div className="list_data">{date}</div>
      </div>
    );
}

export default ListItem
