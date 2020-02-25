import React, { Component } from 'react';
import './UserList.module.css';
import User from '../User/User';

class UserList extends Component {

    state = {
        user: []
    }
    deleteUser = (id, idDb) => {
         const users = this.props.data;
         users.splice(id,1)
         this.setState({user : users})
         const formData = new FormData();
         formData.append("action", "delete");
         formData.append("id", idDb);
     fetch('http://localhost:80', {
         method: "post",
         body: formData
     })
     .then(res => {
         console.log("usunąłem użytkownika:");
         console.log(res);
     })
    }
    render(){
            const users = this.props.data.map((user,id) => {
            return (<User 
                key={user.id} 
                id={user.id}
                name={user.name} 
                surname={user.surname} 
                phoneNumber={user.phoneNumber} 
                adress={user.adress} 
                deleteUser={() => this.deleteUser(id,user.id)}
                updateUser={this.props.updateUser}
                />);
        })
        return(
        <div className="userListTop">
            <h1>User List</h1>
            {users}    
        </div>) 
    }
}

export default UserList;