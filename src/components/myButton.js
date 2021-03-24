import React from 'react';
import PropTypes from 'prop-types';
import './App.css'
import {Button} from '@material-ui/core';


export const  MyButton = ({clickAction, myClass, mySize, myColor, myVariant, myLabel}) => {
  return (
<Button variant={myVariant} color={myColor} size={mySize} onClick={clickAction} 
 className={myClass} >
   {myLabel}
   </Button>

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
  