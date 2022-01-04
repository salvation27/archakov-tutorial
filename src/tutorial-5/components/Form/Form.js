import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './Form.css'

const Form = ({ addComment }) => {
  // стейт для обекта юзер
  // const [user, setUser] = useState({});
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputText, setInputText] = useState("");


 
//  при отправке формы
  const onSubmitUser = (e) => {
    if (inputName.length & inputEmail.length & inputText.length) {
      // создаю поля в объекте user
      const userObj = {
        id: uuidv4(),
        name: inputName,
        email: inputEmail,
        text: inputText,
        date: new Date().toLocaleString(),
      };

      // проверяю есть в пропсах функция
      if (addComment) {
        // если есть такая функция передаю обект и e (для омены перезагрузки страницы)
        addComment(userObj, e);
        // очищаю поля инпута
        setInputName("");
        setInputEmail("");
        setInputText("");
      }
    } else {
      alert("Заполните пустые поля");
    }
    
  };

  return (
    <div className="form_wrap">
      <h2>Обратная связь:</h2>
      <form action="" id="form_commit" onSubmit={onSubmitUser}>
        <TextField
          id="filled-textarea-name"
          label="Имя"
          placeholder="Введите имя"
          multiline
          fullWidth
          color="secondary"
          style={{ marginBottom: 10 }}
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <TextField
          id="filled-textarea-email"
          label="Почта"
          placeholder="Введите почту"
          multiline
          color="secondary"
          fullWidth
          style={{ marginBottom: 10 }}
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <TextField
          id="filled-textarea-email"
          label="Текст..."
          placeholder="Текст..."
          multiline
          color="secondary"
          fullWidth
          rows={4}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button variant="contained" type='submit'>Отправить</Button>
        {/* <button>dsdsds</button> */}
      </form>
    </div>
  );
};

export default Form
