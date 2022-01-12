import React from 'react'

const User = ({user}) => {
    return (
      <div  className="app_list" style={{ marginLeft: 15 }}>
        {user.firstName}
      </div>
    );
}

export default User
