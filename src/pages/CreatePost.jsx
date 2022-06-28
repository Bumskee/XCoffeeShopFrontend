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
    fetch('https://mrx-coffeeshop-backend.herokuapp.com/'+'menues',{
        method:'POST',
        mode:'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            menues_id:null,
            name:event.target.name.value,
            price:event.target.price.value
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
            placeholder="Item Name"/>
          </Form.Group>
          <Form.Group class="beside" controlId="price">
            <Form.Label>price</Form.Label>
            <Form.Control type="text" name="price" required 
            placeholder="Item Price"/>
          </Form.Group>
          <Form.Group class="beside">
            <Button class="submitButton" variant="primary" type="submit">
              Add Item
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }  
}

export default CreatePost;