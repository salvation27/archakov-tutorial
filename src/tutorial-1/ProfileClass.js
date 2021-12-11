import React, { Component } from "react";

export class ProfileClass extends Component {
  render() {
    const { name } = this.props;
    const { registredAt } = this.props;

    function montoToStr(num) {
      return num > 12 || num < 1
        ? null
        : "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
            ","
          )[num - 1];
    }

    return (
      <div className="profile_wrapper">
        <div className="title">
          Привет, <strong>{name.split(" ")[0]}!</strong>
        </div>
        <div>
          Дата регистрации: {registredAt.getDate()}{" "}
          {montoToStr(registredAt.getMonth())} {registredAt.getFullYear()}
        </div>
      </div>
    );
  }
}

export default ProfileClass;
