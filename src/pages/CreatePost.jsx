import React, {Component} from "react";
import {Button, Form} from "react-bootstrap"
import './CreatePost.css';

export class CreatePost extends Component{

  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    fetch('https://characternames-backend.herokuapp.com/'+'heroes',{
        method:'POST',
        mode:'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            heros_id:null,
            name:event.target.name.value,
            alias:event.target.alias.value
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })
}

  render(){
    return (
      <div class="createPost">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group class="beside" controlId="name">
            <Form.Label>name</Form.Label>
            <Form.Control type="text" name="name" required 
            placeholder="character name"/>
          </Form.Group>
          <Form.Group class="beside" controlId="alias">
            <Form.Label>alias</Form.Label>
            <Form.Control type="text" name="alias" required 
            placeholder="character alias"/>
          </Form.Group>
          <Form.Group class="beside">
            <Button class="submitButton" variant="primary" type="submit">
              Add Character
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }  
}

export default CreatePost;