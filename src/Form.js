import React, {Component} from 'react';

export default class MForm extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      newTodo:""
    };
    this.addTodo=this.addTodo.bind(this);
  }

  addTodo(){
    const data=[...this.state.data, this.state.newTodo];
    if(this.state.newTodo.trim().length>0){
      this.setState({data, newTodo:""});
    }
  }

  render(){
    const {newTodo}=this.state;
    return(
      <div>
          <form onSubmit={(e) =>
            {
            e.preventDefault();
            this.addTodo();
            }
          }>

          </form>
          <ol>
            {this.state.data.map((val, index)=><li key = {index}>{val}</li>)}
          </ol>
      </div>
    );
  }
}
