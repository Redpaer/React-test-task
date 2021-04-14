import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Table,Button } from "antd";
import "antd/dist/antd.css";
import {Link, Route} from "react-router-dom";
import AddPage from './components/AddPage';

import { EditUsers } from './components/edit-users.component'

class createTable extends React.Component {
  state = {
    loadingf: false,  
    mas:[]
  }
  componentDidMount(){
    this.setState({loadingf: true});
    fetch("/users")
      .then(Result => Result.json())
      .then(data =>{this.setState({
        mas: data,
        loadingf: false})
        console.log(data);
      })
  }
  render() {
    return (
    <Table loading={this.state.loadingf} columns={columns} dataSource={this.state.mas} />
    );
    
  }
}     
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Route path="/list/:id" component={EditUsers} />{" "}
        <Route exact path="/" component={createTable} />{" "}
        <AddPage />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { text: "load" };
  }
}
class other extends React.Component {
  componentDidMount(){
    let FF = "/list/" + this.props.match.params.id;
    console.log(FF);
    fetch(FF)
      .then(response => response.text())
      .then(Data => {
        this.setState({ text: Data });
      })
      .catch(error => console.error(error));   
  }
}

const columns = [
  {
    title: "Имя пользователя",
    dataIndex: "name",
  },

  {
    title: "Возраст",
    dataIndex: "age"
  },
  {
    title: "Город",
    dataIndex: "city"
  },
  {
    title: "Телефон",
    dataIndex: "phone"
  },
  {
    title: 'Action',
    dataIndex: '_id',
    key: '_id',
    render: (bookName, _id) => {
      console.log(bookName, _id);
      return (
        <header>
          <nav>
            <ul>
              <li>
                <Link to={"/list/" + _id._id}>Edit</Link>
              </li>
            </ul>
          </nav>
        </header>
      ); 
    }
  }
];



export default App;
