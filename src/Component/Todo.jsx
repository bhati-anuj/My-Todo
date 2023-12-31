import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import { Button, InputGroup, Form } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import LocalStorage from "../LocalStorage";
import style from "../Component/Todo.module.css";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState(LocalStorage());

  const handleAdd = () => {
    setTodo([...todo, task]);
    setTask("");
  };

  function handleDelete(i) {
    todo.splice(i, 1);
    setTodo([...todo]);
  }

  useEffect(() => {
    localStorage.setItem("Todo List", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <div className={style.todoContainer}>
        <h1 className={style.todoTitle}>My Todo</h1>
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
        <div style={{ margin: "0 20px ", fontSize: "20px" }}>
          <ol>
            {todo.map((e, index) => (
              <li key={index}>
                <div style={{ display: "flex", marginBottom: "10px" }}>
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
