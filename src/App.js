import React, {Component} from 'react';
import './App.css';
import UserList from './components/UserList/UserList';
import Form from './components/Form/Form'

class App extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            updateUser: null,
            reload: false
        };
    }
    componentDidMount() {
        fetch("http://localhost:80?action=downloadUser")
            .then(res => res.json())
            .then(response => {
                this.setState({data: response})
                //  console.log(response);
            })
    }
    updateUser = (id, name, surname, phoneNumber, adress) => {
        const formData = new FormData();
        formData.append("action", "update");
        formData.append("id", id);
        formData.append("name", name);
        formData.append("surname", surname);
        formData.append("phonenumber", phoneNumber);
        formData.append("adress", adress);
        fetch('http://localhost:80/index.php', {
            method: "post",
            body: formData
        }).then(res => {
            fetch("http://localhost:80?action=downloadUser")
                .then(res => res.json())
                .then(response => {
                    this.setState({data: response})
                    console.log(response);
                })
            console.log("zaktualizowałem użytkownika:");
            console.log(res);
        })
    }
    uploadData = (name, surname, phoneNumber, adress) => {
        const formData = new FormData();
        formData.append("action", "add");
        formData.append("name", name);
        formData.append("surname", surname);
        formData.append("phonenumber", phoneNumber);
        formData.append("adress", adress);
        fetch('http://localhost:80', {
            method: "post",
            body: formData
        }).then(res => {
            fetch("http://localhost:80?action=downloadUser")
                .then(res => res.json())
                .then(response => {
                    this.setState({data: response})
                    console.log(response);
                })
            console.log("Dodałem użytkownika:");
            console.log(res);
        })
    }
    render() {

        return (
            <div className='App'>
                <UserList data={this.state.data} updateUser={this.updateUser}/>
                <Form
                    uploadData={this.uploadData}
                    id={this.state.id}
                    name={this.state.name}
                    surname={this.state.surname}
                    phoneNumber={this.state.phoneNumber}
                    adress={this.state.adress}/>
            </div>
        );
    }
}

export default App;