import React, { Component } from "react";
import axios from "axios";

class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          todo_description: response.data.todo_description,
          todo_responsible: response.data.todo_responsible,
          todo_priority: response.data.todo_priority,
          todo_completed: response.data.todo_completed
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>Welcome to Edit Todo Component!!</p>
      </div>
    );
  }
}

export default EditTodo;
