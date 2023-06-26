import React, { useState } from "react";
import TodoList from "./TodoList";
import { Button, InputGroup, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);

  const handleAdd = () => {
    setTodo([...todo, task]);
    setTask("");
  };

  const handleDelete = (i) => {
    todo.splice(i, 1);
    setTodo([...todo]);
  };

  return (
    <>
      <div style={{ border: "2px solid green", width: "50%" }}>
        <h1
          style={{
            margin: "20px",
            fontFamily: "Courgette, cursive",
            fontWeight: "700",
          }}
        >
          My Todo
        </h1>
        <div style={{ padding: "20px" }}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Write your task here"
              aria-label="Write your task here"
              aria-describedby="basic-addon2"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button variant="secondary" id="button-addon2" onClick={handleAdd}>
              ADD
            </Button>
          </InputGroup>
        </div>
        <div style={{margin:'0 20px '}}>
          <ol>
            {todo.map((e, index) => (
              <li key={index} >
               <div style={{display:'flex'}}>

                <TodoList data={e} />
                <MdDelete
                  variant="danger"
                  onClick={() => handleDelete(index)}
                  />
                  </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
