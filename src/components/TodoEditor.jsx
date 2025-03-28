import { render } from '@testing-library/react';
import React, { Component } from 'react';

export class TodoEditor extends Component {
    state={
        textValue: '',
    };

    handleChange = (e) =>{
        this.setState({textValue: e.currentTarget.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.textValue);
        e.currentTarget.reset();
    }

  render(){
      return (
          <form acttion="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
              <textarea name="edit" id="" value={this.state.textValue} onChange={this.handleChange} />
          </label>
          <button type="submit">Додати</button>
          </form>
      );
  };
};
