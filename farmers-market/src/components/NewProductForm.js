import React from 'react';
//import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewProductForm(props){
  
  const firestore = useFirestore();
  
  function addProductToFirestore(event) {
    event.preventDefault();
    props.onNewProductCreation();
  
    return firestore.collection('products').add( {
      productName: event.target.productName.value,
      description: event.target.description.value,
      price: parseInt(event.target.price.value),
      business: event.target.business.value,
      //id: v4()
    }
  );
}

    return (
      <React.Fragment>
        <ReusableForm 
          formSubmissionHandler={addProductToFirestore} 
          buttonText="Submit" />
      </React.Fragment>
    );
  }

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func,

};

export default NewProductForm;

//Add file uploading functionality for pictures

