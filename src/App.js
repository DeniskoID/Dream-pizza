// eslint-disable-next-line no-unused-vars
import React from 'react';

import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaBlock title="Мексиканская" price="500" />
            <PizzaBlock title="Маргарита" price="300" />
            <PizzaBlock title="Гавайская" price="450" />
            <PizzaBlock title="Пепперони" price="600" />
            <PizzaBlock title="Неаполитанская" price="400" />
            <PizzaBlock title="Сицилийская" price="300" />
            <PizzaBlock title="Четыре сезона" price="550" />
            <PizzaBlock title="Каприччиоза" price="350" />
            <PizzaBlock title="Карбонара" price="450" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
