import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

function App() {
  return (
    <>
      <Profile name="Вася Пупкин" registredAt={new Date(2021, 6, 22)} />
      <ProfileClass name="Вася Пупкин" registredAt={new Date(2021, 6, 22)} />
    </>
  );
}

export default App;
