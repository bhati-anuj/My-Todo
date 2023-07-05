import React, { useContext, useState } from "react";
import { Container, InputGroup, Form } from "react-bootstrap";
import { MdTaskAlt, MdDownloadDone } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const TodoList = ({data}) => {
  const [check, setCheck] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(data);

  
  const handleEdit = () => {
    data = text;
 
    console.log(text);
 
    setEdit(false);
  };

  

  return (
    <Container style={{ display: "flex", width: "100%" }}>
      {edit ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <InputGroup className="mb-3">
            <Form.Control onChange={(e) => setText(e.target.value)} />
          </InputGroup>
          <MdDownloadDone onClick={handleEdit} />
        </div>
      ) : (
        <>
          <span
            onClick={() => setEdit(!edit)}
            style={{
              textDecoration: check ? "line-through" : "none",
              marginRight: "auto",
            }}
          >
            {text}
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "8%",
            }}
          >
            <FaEdit onClick={() => setEdit(!edit)} />

            <MdTaskAlt onClick={() => setCheck(!check)} />
          </div>
        </>
      )}
    </Container>
  );
};

export default TodoList;
