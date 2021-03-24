import React from 'react';
import PropTypes from 'prop-types';
// import './App.css'

export const TableHead = ({one,two,three,four,five}) => {
  return (
    <tr style={{border:"1px solid black"}} >
        <th style={{border:"1px solid black"}} >
        {one}
        </th>
        <th>
        {two}
        </th>
        <th>
        {three}
        </th>
        <th>
        {four}
        </th>
        <th>
        {five}
        </th >
    </tr>
  )
}


TableHead.prototype = {
    /**
     * Is this the principal call to action on the page?
     */
    one: PropTypes.string.isRequired,
    /**
     * What background color to use
     */
    two: PropTypes.string,
    /**
     * How large should the button be?
     */
    three: PropTypes.oneOf(['Price', 'TotalPrice', 'subTotalPrice']),
    /**
     * Button contents
     */
    four: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    five: PropTypes.string.isRequired,
  };
  
  TableHead.defaultProps = {
   one:"one",
   two:"two",
   three:"three",
   four:"four",
   five:"five",
  };
  