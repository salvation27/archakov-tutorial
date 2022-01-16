import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import UserGit from "./UserGit";
import Loading from "./Loading";

const url = "https://api.github.com/users";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState({});
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [loading, setLoading] = useState("");
  const [showBlockGit, setShowBlockGit] = useState(false);

  const getGitData = async (e) => {
    try {
      setData({}); //очищаю блок от данных о старом юзере
      setShowBlockGit(false);
      setBtnDisabled(true);
      setLoading("Загрузка...");
      e.preventDefault();
      const response = await axios.get(`${url}/${userInput}`);
      setData(response.data);
      setUserInput("");
      setLoading("");
      setShowBlockGit(true);
      setBtnDisabled(false);
      changeUrl(response.data.login);
    } catch (e) {
      setData({});
      alert("Такого пользователя нет");
      setBtnDisabled(false);
      setUserInput("");
      setLoading("");
    }
  };

  // для изменения адресной строки
  const changeUrl = (userName) => {
    window.history.pushState(null, null, `/login=${userName}`);
  };

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button
            disabled={btnDisabled}
            className={btnDisabled ? "app-form_btn gray_btn" : "app-form_btn"}
            onClick={getGitData}
          >
            Найти
          </button>
        </form>
        {showBlockGit ? <UserGit data={data} /> : <Loading loading={loading} />}
      </div>
    </div>
  );
};

export default App;
