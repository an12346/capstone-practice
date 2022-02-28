import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props){
  const { product, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Product Details</h1>
      <h3>{product.productName}</h3>
      <h3>{product.business}</h3>
      <h3>{parseInt(product.price)}</h3>
      <h3>{product.description}</h3>
      <button onClick={props.onClickingEdit}>Update Product</button>
      <button onClick={()=> onClickingDelete(product.id)}>Delete Product</button>
    </React.Fragment>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickigDelete: PropTypes.func
}

export default ProductDetail;