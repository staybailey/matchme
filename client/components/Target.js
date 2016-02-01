import React, { Component, PropTypes } from 'react';
import SkipButton from '../components/SkipButton';

const divStyle = {
  // width: 400,
  height: 600,
  width: 'auto',
  // marginTop: 40,
  borderWidth: 1,
  borderColor: 'black',
  // opacity: .5,
  // backgroundColor: '#ccc',

  // display: 'block',
  // position:'relative',
  // verticalAlign: 'bottom',

  // backgroundImage: 'url(' + image_url + ')',
  // backgroundSize: 'cover',

  fontSize: 30,
  fontWeight: 'bold',
  fontFamily: 'Helvetica, sans-serif',
  // backgroundImage: 'http://i.onionstatic.com/onion/7954/original/1200.jpg',
  // WebkitTextFillColor: 'white',  Will override color (regardless of order)
  // WebkitTextStrokeWidth: 2,
  // WebkitTextStrokeColor: 'black',

  borderRadius: 5,
  zIndex: 1
};

const paraTargetStyle = {
  // backgroundColor: '#ccc',
  // position: 'absolute'
  // bottom: 0;
  width: '90%',
  fontSize: 20,
  fontWeight: 'bold',
  color:'black',
};

const imgTargetStyle = {
  maxWidth: '100%'
};

const backgroundDivStyle = {
  top: 0,
  left: 0,
  bottom: 0,
  backgroundColor: '#fff',
  right: 0,
  position: 'absolute',
  zIndex: -1,
  backgroundSize: 'cover',
  opacity: 0.5
};

const wellStyle = {
  // marginTop: 20
};

const iconStyle = {
  height: 45,
  width: 'auto'
};

const skipButtonStyle = {
  float: 'right',
  fontSize: 18,
  borderRadius: 5,
  backgroundColor: '#fff',
  backgroundRepeat: 'repeat-x',
  filter: 'progid:DXImageTransform.Microsoft.gradient(startColorstr="#132103ff", endColorstr="#ccfafe")',
  borderColor: '#ccfafe #ccfafe hsl(185, 100%, 85%)',
  color: '#333'
};

const userInfoStyle = {
  marginLeft: 45
}

const seekingStyle = {
  marginTop: -20,
  fontSize: 23
}

class Target extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { target, actions } = this.props;

    let targetHeight = '49em';
    let wellStyle = {height: targetHeight};

    let maleIcon = 'http://1.bp.blogspot.com/-9zJZ2kiHqFQ/VQCayOG1pxI/AAAAAAAADEU/igsvbvsPjKU/s1600/The%2BMale%2BPrinciple.png';
    let femaleIcon = 'http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons/3d-transparent-glass-icons-symbols-shapes/016921-3d-transparent-glass-icon-symbols-shapes-female-symbol.png';
    let bothIcon = 'http://icons.iconarchive.com/icons/icons-land/vista-love/128/Sex-Unknown-icon.png';

    let icon_user_path = maleIcon;
    if (target.gender === 'female') {
      icon_user_path = femaleIcon;
    } if (target.gender === 'both') {
      icon_user_path = bothIcon;
    }

    let icon_seeking_path = maleIcon;
    if (target.gender_preference === 'female') {
      icon_seeking_path = femaleIcon;
    } else if (target.gender_preference === 'both') {
      // http://icons.iconarchive.com/icons/aha-soft/free-large-love/512/Sex-icon.png
      icon_seeking_path = bothIcon;
    }

    function calculateAge(birthdate) { 

      let difference = +Date.now() - +new Date(birthdate);
      let ageDate = new Date(difference); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    let age = calculateAge(target.birthday);

    return (

      <div className='well well-sm col-md-6 col-sm-12 col-xs-12' style={wellStyle}>
        <div style={divStyle}>
          <img src={target.image_url} style={imgTargetStyle} className="img img-responsive img-rounded center-block"/>
          <div style={userInfoStyle}>
              <p>{target.first_name}, {age}</p>
              <div style={seekingStyle}>
                <img src={icon_user_path} style={iconStyle}/> seeking <img src={icon_seeking_path} style={iconStyle}/>
              </div>
              <p style={paraTargetStyle}>''{target.description}''</p>
          </div>
          <SkipButton style={skipButtonStyle} actions={actions}/>
        </div>

      </div>


    );
  }
}

Target.propTypes = {
  target: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};



export default Target;
