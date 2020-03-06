const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Glen';

function getItems() {
  return fetch(BASE_URL + '/items').then(result => result.json());
  //   return Promise.resolve('A successful response!');
  // .then(jsonResult => console.log(jsonResult));
}

function createItem(name) {
  let newItem = JSON.stringify({
    name: name
  });

  return fetch(BASE_URL + '/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: newItem
  });
}

function updateItem(id, updateData) {
  const newUpdate = JSON.stringify(updateData);

  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },

    body: newUpdate
  });
}

function deleteItem(id) {
  return fetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
  })
}



export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
