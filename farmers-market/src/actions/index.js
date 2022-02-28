export const deleteProduct = id => ({
  type: 'DELETE_PRODUCT',
  id
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

/*export const addProduct = (product) => {
  const { productName, description, price, business, id } = product;
  return {
    type: 'ADD_PRODUCT',
    productName: productName,
    description: description,
    price: price,
    business: business,
    id: id
  }
}*/