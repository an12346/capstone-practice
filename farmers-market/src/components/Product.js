import React from 'react';
//import Grid from '@material-ui/core';
//import { PinDropSharp } from '@material-ui/icons';
import PropTypes from "prop-types";

function Product(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenProductClicked(props.id)}>
        <h2>{props.productName}</h2>
        <h2>{props.price}</h2>
        <h2>{props.business}</h2>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number,
  business: PropTypes.string,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func
};

export default Product;

