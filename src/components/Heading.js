import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

export const  Heading = ({subTitle}) => {
  return (
    <div>
    <h1>Add Product</h1>
    <h3>( {subTitle} )</h3>
    </div>
  )
}


// TableHead.PropTypes = {
//     /**
//      * Is this the principal call to action on the page?
//      */
//     one: PropTypes.bool,
//     /**
//      * What background color to use
//      */
//     two: PropTypes.string,
//     /**
//      * How large should the button be?
//      */
//     three: PropTypes.oneOf(['small', 'medium', 'large']),
//     /**
//      * Button contents
//      */
//     four: PropTypes.string.isRequired,
//     /**
//      * Optional click handler
//      */
//     five: PropTypes.func,
//   };
  
//   TableHead.defaultProps = {
//     two: null,
//     one: false,
//     three: 'medium',
//     five: undefined,
//   };
  