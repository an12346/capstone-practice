import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditProductForm (props) {
  const firestore = useFirestore();
  const { product } = props;

  function handleEditProductFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct();
    const propertiesToUpdate = {
      description: event.target.description.value, price: event.target.price.value, business: event.target.business.value, id: product.id
    }
    return firestore.update({collection: 'products', doc: product.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler = {handleEditProductFormSubmission}
      buttonText="Update Product"/>
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  onEditProduct: PropTypes.func
};

export default EditProductForm;
