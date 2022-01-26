import React, { useEffect } from "react";
import { useState } from "react";
import {Button, List, Input, Row, Col, Divider} from "antd"
import _ from 'lodash'

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [inputField, setInputField] = useState('')

  useEffect(() => {
    setTodoList([]);
  }, []);

  const addTodoItem = () => {
    
    const newTodoList = [...todoList]
    newTodoList.push(
      {
        id: _.uniqueId(),
        task: inputField
      }
    )
    setTodoList(newTodoList)
    setInputField('')
  }

  const deleteTodoItem = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
    // const newTodoList = [...todoList];
    // const targetIndex = newTodoList.findIndex(todo => todo.id ===id);
    // newTodoList.splice(targetIndex, 1);
    // setTodoList(newTodoList)
  }

  return (
    <Row justify = "center">
      <Col>
        <Row>
          <Col span = {20}>
            <Input value = {inputField} onChange = {(e) => setInputField(e.target.value)}/>
          </Col>
          <Col span = {4}>
            <Button style = {{width: '100%'}} onClick={addTodoItem}>Add</Button>
          </Col>
        </Row>
        <Divider/>
          <List
            style = {{width: '450px'}}
            header={<div>Todo List Page</div>}
            bordered
            dataSource={todoList}
            renderItem={(todo) => (
              <List.Item>
                <Row style = {{width: '100%'}} align="middle" >
                  <Col span = {20}>
                    {todo.task}
                  </Col>
                  <Col span = {4}>
                     <Button type = 'danger' onClick = {() => deleteTodoItem(todo.id)}>Delete</Button>
                  </Col>
                </Row>
                
              </List.Item>
            )}
          />
      </Col>
    </Row>
      
      
    
  );
}

export default TodoList;
