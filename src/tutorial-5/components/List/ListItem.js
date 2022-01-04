import React from 'react'

const ListItem = ({ item, removeComment }) => {
  const { name, date, text,id } = item;
  return (
    <div className="list_item">
      <div className="list_icon_user">
        <img src="/img/user.png" alt="" />
      </div>
      <div className="list_description">
        <div className="btn_delete" onClick={() => removeComment(id)}>
          Х
        </div>
        <div className="list_name">{name}</div>
        <div className="list_text">{text}</div>
        <div className="list_data">{date}</div>
      </div>
    </div>
  );
};

export default ListItem
