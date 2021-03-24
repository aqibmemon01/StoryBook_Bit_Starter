"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableHead = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import './App.css'
var TableHead = function TableHead(_ref) {
  var one = _ref.one,
      two = _ref.two,
      three = _ref.three,
      four = _ref.four,
      five = _ref.five;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("tr", {
    style: {
      border: "1px solid black"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
      style: {
        border: "1px solid black"
      },
      children: one
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
      children: two
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
      children: three
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
      children: four
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
      children: five
    })]
  });
};

exports.TableHead = TableHead;
TableHead.prototype = {
  /**
   * Is this the principal call to action on the page?
   */
  one: _propTypes.default.string.isRequired,

  /**
   * What background color to use
   */
  two: _propTypes.default.string,

  /**
   * How large should the button be?
   */
  three: _propTypes.default.oneOf(['Price', 'TotalPrice', 'subTotalPrice']),

  /**
   * Button contents
   */
  four: _propTypes.default.string.isRequired,

  /**
   * Optional click handler
   */
  five: _propTypes.default.string.isRequired
};
TableHead.defaultProps = {
  one: "one",
  two: "two",
  three: "three",
  four: "four",
  five: "five"
};

//# sourceMappingURL=TableHead.js.map