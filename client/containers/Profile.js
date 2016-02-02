import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm} from 'redux-form';
export const fields = ['first_name', 'last_name', 'gender', 'gender_preference', 'age_min', 'age_max', 'favoriteColor', 'employed', 'description'];

class SimpleForm extends Component {

  render() {


    var video = document.querySelector("#videoElement");
     
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
     
    if (navigator.getUserMedia) {       
        navigator.getUserMedia({video: true}, handleVideo, videoError);
    }
     
    function handleVideo(stream) {
        video.src = window.URL.createObjectURL(stream);
    }
     
    function videoError(e) {
        // do something
    }

    const {
      fields: {first_name, last_name, gender, gender_preference, age_min, age_max, favoriteColor, employed, description},
      handleSubmit,
      resetForm,
      submitting
    } = this.props;

    return (
      <div>
      <div >

          <video autoplay="true" id="videoElement">
           
          </video>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...first_name} disabled={true}/>
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <input type="text" placeholder="Last Name" {...last_name} disabled/>
          </div>
        </div>
        <div>
          <label>Gender</label>
          <div>
            <label>
              <input type="radio" {...gender} value="male" checked={gender.value === 'male'}/> Male
            </label>
            <label>
              <input type="radio" {...gender} value="female" checked={gender.value === 'female'}/> Female
            </label>
          </div>
        </div>
        <div>
          <label>Gender Preference</label>
          <div>
            <label>
              <input type="radio" {...gender_preference} value="male" checked={gender_preference.value === 'male'}/> Male
            </label>
            <label>
              <input type="radio" {...gender_preference} value="female" checked={gender_preference.value === 'female'}/> Female
            </label>
            <label>
              <input type="radio" {...gender_preference} value="none" checked={gender_preference.value === 'none' || gender_preference.value === null}/> Both
            </label>
          </div>
        </div>
        <div>
          <label>Age Preference</label>
          <div>
            <input type="number" min="18"  {...age_min} placeholder="Min Age" />
            to
            <input type="number" max="100" {...age_max} placeholder="Max Age" />
          </div>
        </div>
        <div>
          <label>Favorite Color</label>
          <div>
            <select

              {...favoriteColor}
              value={favoriteColor.value || ''}  // required syntax for reset form to work
                                                 // undefined will not change value to first empty option
                                                 // when resetting
              >
              <option></option>
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </select>
          </div>
        </div>
        <div>
          <label>
            <input type="checkbox" {...employed}/> Employed
          </label>
        </div>
        <div>
          <label>Description</label>
          <div>
            <textarea
              {...description}
              value={description.value || ''} // required for reset form to work (only on textarea's)
                                        // see: https://github.com/facebook/react/issues/2533
            />
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
          <button type="button" disabled={submitting} onClick={resetForm}>
            Clear Values
          </button>
        </div>
      </form>
      </div>
    );
  }
}

SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'profile',
  fields
},
state => ({ // mapStateToProps
  initialValues: state.user.userInfo // will pull state into form's initialValues
}),
{}      // mapDispatchToProps (will bind action creator to dispatch)
)(SimpleForm);
