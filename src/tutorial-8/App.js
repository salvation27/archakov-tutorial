import React, { useState } from "react";
import './App.css'
import EmptyBlock from "./EmptyBlock";
import User from './User'
const mockApiUrl = "https://61ddf360f60e8f0017668b3a.mockapi.io/users5";

const App = () => {
  const [users,setUsers] = useState([]);
  const [load,setLoad] = useState(false)
  const [error,setError] = useState('')


//   задержка  данных для показа блока загрузки и ошибки
  const delay = ms => {
      return new Promise (r => setTimeout(()=>r(),ms))
  }
//   const getUsers = () => {
//     fetch(mockApiUrl)
//     .then((res) => {
//       res.json().then(arr=>{
//          setUsers(arr)
//       })
//     });
//   };

  const getUserAsinc = async () => {
    try{
        setLoad(true)
        await delay(1000)
        const res = await fetch(mockApiUrl);
        const data = await res.json();
        if(res.ok) {
           setUsers(data); 
        }else {
            throw Error("Ошибка при запросе данных");
        }
    } catch(e) {
      setError("Ошибка при запросе данных");
      await delay(3000);
      setError("Отменяю загрузку");
      await delay(3000);
      setError("");
      setLoad(false);
      
    }
  }


  return (
    <div className="app_wrap">
      <button className="app_btn" onClick={getUserAsinc}>
        Получить данные 
      </button>
      <h3>Список пользователей:</h3>
      <div className="app_list_users">
        {users.length ? (
          users.map((user, i) => <User key={i} user={user} />)
        ) : (
          <EmptyBlock load={load} />
        )}
        {error}
      </div>
    </div>
  );
};

export default App;
