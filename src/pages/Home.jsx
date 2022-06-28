import React, {Component} from "react";
import {ButtonToolbar, Button} from 'react-bootstrap'
import './Home.css';

export class Home extends Component {

  constructor(props){
    super(props);
    this.state={menues:[]}
  }

  refreshList(){
    fetch('https://mrx-coffeeshop-backend.herokuapp.com/'+'menues')
    .then(response=>response.json())
    .then(data=>{
      this.setState({menues:data});
    });
  }

  componentDidMount(){
    this.refreshList();
  }

  componentDidUpdate(){
    this.refreshList();
  }

  orderItem(){
    if(window.confirm("are you sure?")){
      console.log("order successful")
    }
  }

  render(){
    const {menues}=this.state;
    return (
      <div>
        <table class="content-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th text-align="center">Options</th>
              </tr>
            </thead>
            <tbody>
                {menues.map(menu=>
                  <tr key={menu.menues_id}>
                    <td>{menu.name}</td>
                    <td>{menu.price}</td>
                    <td>
                      <ButtonToolbar>
                        <Button className="mr-2" variant="danger"
                        onClick={()=>this.orderItem()}>
                          Order
                        </Button>
                      </ButtonToolbar>
                    </td>
                  </tr>)}
            </tbody>
        </table> 
      </div>
    );
  }
}

export default Home;
