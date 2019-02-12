import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button type={props.type} className="Button" onClick={props.onClick}>
      {props.caption}
    </button>
  );
}
export default Button;