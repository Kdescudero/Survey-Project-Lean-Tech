import React, { Component } from 'react';
import usersData from "../Users/UsersData";
import CardDashboard from "./CardDashboard";

const MORE_USERS = 3;

class Dashboard extends Component {

  state = {
    dislike : 0,
    like    : 0,
    more    : 6,
    time    : ''
  };

  Clock=()=>{
    const CurrentTime = new Date();
    const hours    = CurrentTime.getHours();
    const minutes  = CurrentTime.getMinutes();
    const seconds  = CurrentTime.getSeconds();
    const time     = hours + " : " + minutes + " : " + seconds;

    this.setState({ time });

    setTimeout(() =>{
      this.Clock()
    }, 1000);

    usersData.map(item => {
      if((minutes === 42 && seconds === 0) && (item.like >= 10)){
        alert(`El ganador es ${ item.name}`)
      }else if((hours === 1 && minutes === 59 && seconds === 0) && (item.like === 0)){
        alert("Nadie Gano");
      }
    });
  };

  componentDidMount() {
    this.Clock();
    setTimeout(() =>{
      usersData.map(item => {
        if(item.like >= 10){
          alert(`El ganador es ${ item.name}`)
        }
      });
    }, 10000)
  }

  handleMoreUsers=()=>{
    this.setState({
      more : MORE_USERS + this.state.more
    })
  };

  handleLike=(code)=>{
    usersData.map(item => {
      if(code === item.id) {
        this.setState({
          like : item.like ++
        })
      }
    })
  };

  handleDislike=(code)=>{
    usersData.map((item) => {
      if(code === item.id) {
        this.setState({
          dislike : item.dislike ++
        })
      }
    })
  };

  getBadge = (status) => {
    return status === 'Active'   ? 'success'   :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending'  ? 'warning'   :
          status === 'Banned'   ? 'danger'    : 'primary'
  };

  render(){
    return(
      <>
        <div style={{ display : 'flex', justifyContent : 'center' }}>
          <h1>{this.state.time} - Fin Votaciones - 1:59:00</h1>
        </div>
        <CardDashboard
          handleMoreUsers = {this.handleMoreUsers}
          handleDislike   = {this.handleDislike.bind(this)}
          handleLike      = {this.handleLike.bind(this)}
          getBadge        = {this.getBadge.bind(this)}
          data            = {usersData}
          more            = {this.state.more}
        />
      </>
    )
  }
}

export default Dashboard;
