// import $ from 'jquery';

import 'normalize.css';
import './index.css';
import './api';

import shoppingList from './shopping-list';
import api from './api';
import store from './store';

const main = function () {
  api
    .getItems()
    // .then(res => res.json())
    .then(items => {
      const item = items[0];
      console.log(item);
      return api.updateItem(item.id, { name: 'foobar' });
    })
    .then(res => res.json())
    .then(() => console.log('updated!'));

  api
    .getItems()
    // .then(res => res.json())
    .then(items => {
      items.forEach(item => store.addItem(item));
      shoppingList.render();
      const item = store.items[0];
      console.log('current name: ' + item.name);
      store.findAndUpdate(item.id, { name: 'barbaz' });
      console.log('new name: ' + item.name);
    })
    .catch(e => {
      console.log(e.message);
    });

  api
    .createItem('pears')
    // .then(res => res.json())
    .then(newItem => {
      return api.getItems();
    })
    .then(items => {
      console.log(items);
    });
  api.getItems().then(res => console.log(res));
  shoppingList.bindEventListeners();
  shoppingList.render();
};

main();
