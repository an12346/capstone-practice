import React from "react";
import Product from './Product';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function ProductList(props){
  
  useFirestoreConnect([
    {collection: 'products'}
  ]);
  const products = useSelector(state => state.firestore.ordered.products);

  if (isLoaded(products)) {
    return (
      <React.Fragment>
        {products.map((product) => {
          return <Product 
          whenProductClicked = { props.onProductSelection }
          productName={product.productName}
          description={product.description}
          price={product.price}
          business={product.business}
          key={product.id} 
          id={product.id}
          />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

ProductList.propTypes = {
  onProductSelection: PropTypes.func
};

export default ProductList;