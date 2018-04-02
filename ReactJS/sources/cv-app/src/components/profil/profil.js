import React   from 'react';
import PropTypes from 'prop-types';

import './profil.css';

class Profil extends React.Component {

  render() {
    return (
      <div>
        Nom : { this.props.name } <br />
        Prénom : { this.props.surname }
      </div>
    );
  }
}

Profil.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string,
};


export default Profil;
