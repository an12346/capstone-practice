import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
          type='text'
          name='productName'
          placeholder='Product Name' />
        <textarea 
          name='description'
          placeholder='Description'/>
        <input 
          type='number'
          name='price'
          placeholder='Price'
        />
        <input 
          type='text'
          name='business'
          placeholder='Name of Business' />
          <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;