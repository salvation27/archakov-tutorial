import React,{useState} from 'react'
import './App.css'
import TabItem from './TabItem';

const App = () => {

const tabs = [
  {
    id: 1,
    title: "Сколько всего мест в доме?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expeditaeum provident totam!",
  },
  {
    id: 2,
    title: "Самая дорогая квартира?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fuga deserunt aliquid voluptatum ad, molestiae dicta officiis animi ummollitia, reiciendis a cum ratione veritatis cupiditate voluptatem.Consectetur, exercitationem magnam.",
  },
  {
    id: 3,
    title: "Могу ли я отменить бронирование?",
    description:
      "Да, вы можете отменить забронированную квартиру в течение 3 дней.",
  },
  {
    id: 4,
    title: "Можно ли купить квартиру?",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi itaque ratione voluptatem dolores iusto aperiam adipisci incidunt perspiciatis ullam! Repellat accusamus rerum excepturi minus delectus? Consequatur libero nemo alias.",
  },
];

const [active,setActive] = useState(1)

const openTab = (id) => {
  if(active === id ){
   return setActive(null)
  }
   return setActive(id);
}

console.log(active)
    return (
      <div id="app">
        <div className="app-container">
          <h1 className="app-title">FAQ</h1>
          <div className="app-tabs">
            {tabs.map((tab) => (
              <TabItem
                key={tab.id}
                tab={tab}
                active={active}
                openTab={openTab}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default App
