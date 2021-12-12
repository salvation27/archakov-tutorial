import React from 'react'
import './App.css'

const App = () => {

    let email = '';
    let pass = '';

   function handleChange (e){
       if(e.target.name === 'mail') {
         email = e.target.value.trim();
         return email;
       }  if (e.target.name === 'pass') {
        pass = e.target.value.trim();
        return pass;
       } 
   }

   function handleSubmit (e){
       e.preventDefault()
       if(email === '' || pass === ''){
         alert('Заполните все поля');
       } else {

// replace(/\s+/g, "");    удаляет пробелы внутри строки

         console.log("email:",email.replace(/\s+/g, ""),"password:",pass.replace(/\s+/g, ""));
         e.target.reset();
       }
   }

    return (
      <div className="form_wrap">
        <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder="E-mail" name='mail' onChange={handleChange} />
          <input type="password" placeholder="Пароль" name='pass' onChange={handleChange} />
          <input type="submit" value="Войти" />
        </form>
      </div>
    );
}

export default App
