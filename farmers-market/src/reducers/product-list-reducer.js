export default (state = {}, action) => {
  //const { productName, business, price, description, id } = action;
  switch (action.type) {
  /*case 'ADD_TICKET':
    retur Object.assign({}, state, {
      [id]: {
        productName: productName,
        business: business,
        price: price,
        description: description,
        id: id
      }
    });*/
  case 'DELETE_PRODUCT':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

