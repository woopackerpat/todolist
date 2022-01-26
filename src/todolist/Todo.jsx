import React from "react";
import {Button, Row, Col} from "antd"
import { Input } from "antd";
import { useState } from "react";
import axios from "axios";

export default function Todo(props) {

    const [changeInput, setChangeInput] = useState()
    const [isEdit, setIsEdit] = useState(false)

    const updateTodoItem = async (id) => {
        await axios.put(`http://localhost:8000/todo-list/${id}`, {task: changeInput})
        props.fetchData()
        setIsEdit(false)
    }

    const toggleEdit = () => {
        setChangeInput(props.todo.task)
        setIsEdit(true)

    }

    let contents = (
        <Row style = {{width: "100%"}} align="middle">
            <Col span = {20}>
                <Input value = {changeInput} onChange = {(e) => setChangeInput(e.target.value)}/>            
            </Col>
            <Col span = {4}>
            <Button type = "primary" onClick = {() => updateTodoItem(props.todo.id)}>Done</Button>
            </Col>
        </Row>
    )

    if(!isEdit) {
        contents = (
            <Row style={{ width: "100%" }} align="middle">
        <Col span={16}>{props.todo.task}</Col>
        <Col span={4}>
          <Button style = {{backgroundColor: 'orange'}} onClick={() => toggleEdit()}>
            Edit
          </Button>
        </Col>
        <Col span={4}>
          <Button type="danger" onClick={() => props.delete(props.todo.id)}>
            Delete
          </Button>
        </Col>
      </Row>
        )
    }

  return (
    <div style={{width:"100%"}}>
        {contents}
    </div>
  );
}
