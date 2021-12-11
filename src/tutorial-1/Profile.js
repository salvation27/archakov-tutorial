export default function Profile(props) {

  const regData = props.registredAt;
  const regYear = regData.getFullYear();
  const regDate = regData.getDate();
  const regMont = regData.getMonth();
  const monTo = montoToStr(regMont);

  function montoToStr(num) {
    return num > 12 || num < 1
      ? null
      : "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
          ","
        )[num - 1];
  }

// Вытаскиваю первое слово в строке (имя)
  const splitName = props.name.split(" ")[0];

  return (
    <div className='profile_wrapper'>
      <div className='title'>
        Привет, <strong>{splitName}!</strong>
      </div>
      <div>Дата регистрации:{` ${regDate} ${monTo} ${regYear}`}</div>
    </div>
  );
}
