import React, {Component} from 'react';

const Box = (props) =>{
  const style={
    width:'100px',
    height:'100px',
    background:props.color,
    display:'inline-block'
  }
  return(<div style={style}/>);
};

export default Box;
