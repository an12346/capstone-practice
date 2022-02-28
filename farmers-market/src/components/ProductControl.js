import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import PropTypes from "prop-types";
import EditProductForm from "./EditProductForm";
import { connect } from 'react-redux';
import * as a from './../actions';
import { hexToRgb } from '@material-ui/core';
import { withFirestore, isLoaded } from 'react-redux-firebase';



class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //productFormShowing: false,
      //mainProductListings: [],
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct != null) {
      this.setState({
        selectedProduct: null,
        editing: false
      });
    } else {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
    }
  }

  handleAddingNewProductToList = () =>
  {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedProduct = (id) => {
    this.props.firestore.get({collection: 'products', doc: id}).then((product) => {
      const firestoreProduct = {
        productName: product.get("productName"),
        description: product.get("description"),
        price: product.get("price"),
        business: product.get("business"),
        id: product.id
      }
      this.setState({selectedProduct: firestoreProduct});
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingProductInList = (productToEdit) => {
      this.setState({
        editing: false,
        selectedProduct: null
      });
  }

  handleDeletingProduct = (id) => {
    this.props.firestore.delete({collection: 'products', doc: id});
    this.setState({selectedProduct: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onClickingDelete = {this.handleDeletingProduct} />
      buttonText = "Go Back";
    } else if (this.state.editing) {
      currentlyVisibleState = <EditProductForm product = {this.state.selectedProduct} onEditProduct = {this.handleEditingProductInList}/>
      buttonText = "Go Back"
    } else if (this.state.selectedProduct != null) {
      currentlyVisibleState = <ProductDetail product = {this.state.selectedProduct} onClickingEdit = {this.handleEditClick}/>
      buttonText = "Go back";
    } else if (this.props.productFormShowing) {
      currentlyVisibleState = <NewProductForm onNewProductCreation = {this.handleAddingNewProductToList} />;
      buttonText = "Go back";
    } else {
      currentlyVisibleState = <ProductList productListings = {this.props.mainProductListings} onProductSelection = {this.handleChangingSelectedProduct} />
      buttonText = "Add Product";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ProductControl.propTypes = {
  mainProductListings: PropTypes.object,
  productFormShowing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    mainProductListings: state.mainProductListings,
    productFormShowing: state.productFormShowing
  }
}

ProductControl = connect (mapStateToProps)(ProductControl);

export default withFirestore(ProductControl);

