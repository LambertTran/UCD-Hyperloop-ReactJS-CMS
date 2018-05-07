/** Packages */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

/** Actions */
import { uploadImage } from '../../actions/postRequest';

export class InputForm extends React.Component {

  renderField = (field) => {
    // delete the value field
    delete field.input.value

    return (
      <div className='form-group has-danger'>
        <label>{field.label} </label>
        <input 
          className='form-control'
          type={field.type}
          {...field.input}
        />
        <div className='text-help'>
          { (field.meta.error && field.meta.touched) ? field.meta.error : '' }
        </div>
      </div> 
    );
  }

  onSubmit = (data) => {
    this.props.uploadImage(data.img[0])
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div className='upload-modal-content'>
        <form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
          <h3>Please choose 1 image for your team</h3>
          <Field label='Image' name='img' component={this.renderField} type='file'/>
          <button type='submit' className='btn btn-primary'>Upload</button>
          <button type='button' className='btn btn-danger'>Cancel</button>
        </form>
      </div>
    )
  }
}

// validate the values object got from redux form
// after user submit the form
function validate(data) {
  const errors = {};

  if (!data.img || !data.img[0]) {
    errors.img  = 'Missing image file'; 
  } else if (data.img[0]) {
    let fileType = data.img[0].name.split('.');
    switch (fileType.pop()) {
      case 'png':
        break;
      case 'jpg':
        break;
      case 'jpeg':
        break;
      default:
        errors.img = 'Must be an image file'

    }
  }
  return errors;
} 

export default reduxForm({
  validate,
  form: 'PostsNewForm',
})(
  connect(null,{ uploadImage })(InputForm)
)