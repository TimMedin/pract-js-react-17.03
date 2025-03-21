import { render } from '@testing-library/react';
import React from 'react';

export const TodoEditor = () => {
    state={
        textValue: '',
    };

    handleChange = (e) =>{
        this.setState({textValue: e.currentTarget.value})
    }

    handleSubmit = (e) => {
        e.prevent.default();
        this.props.addTodo(this.state.textValue);
        e.currentTarget.reset();
    }

  render(){
      return (
          <form acttion="">
          <label htmlFor="">
              <textarea name="edit" id="" value={this.state.textValue} onChange={this.handleChange} />
          </label>
          <button type="submit">Додати</button>
          </form>
      );
  };
};
