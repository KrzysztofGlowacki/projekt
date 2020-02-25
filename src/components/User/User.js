import React, {Component} from 'react';
import './User.modules.css';
import Popup from "reactjs-popup";

class User extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            surname: '',
            phoneNumber: '',
            adress: '',
            reload: false,
            isOpen: false,
            isOpen2: false
        };
      }
      componentDidMount(){
          this.setState({   
                id: this.props.id,
                name: this.props.name,
                surname: this.props.surname,
                phoneNumber: this.props.phoneNumber,
                adress: this.props.adress,
                reload: false
          })
      }
      handlePopupOpen = () => {
        console.log(this.state.isOpen) 
        this.setState({
             isOpen: true   
            });
      }
      handlePopupClose = () => {
        console.log(this.state.isOpen) 
        this.setState({ isOpen: false });
      }
      handlePopupOpen2 = () => {
        console.log(this.state.isOpen2) 
        this.setState({
             isOpen2: true
            });
      }
    
      handlePopupClose2 = () => {
        console.log(this.state.isOpen2) 
        this.setState({ isOpen2: false });
      }
    handleChange = (event) => {
        console.log(event.target.name)
        switch(event.target.name){
            case 'name':
                this.setState({ name : event.target.value });
                break;
            case 'surname':
                this.setState({ surname : event.target.value });
                break;
            case 'phoneNumber':
                this.setState({ phoneNumber : Number(event.target.value) });
                break;
            
            case 'adress':
                this.setState({ adress : event.target.value });
                break;
            }
    }
        twoFunctions2 = () =>{
            this.props.updateUser.bind(null,this.props.id,this.state.name,this.state.surname,this.state.phoneNumber, this.state.adress );
            this.handlePopupClose2();
    }
        render() {

        return(
            <div className="User">
                <div className="Name">{this.props.name}</div>
                <div className="Buttons">
                <Popup
                    trigger={<button className="showButton"> Show Details </button>}
                    modal
                    closeOnDocumentClick
                    on='click'
                    open={this.state.isOpen}                    
                    onOpen={this.handlePopupOpen}>
                        <div className="details">
                        <img className="closeImg" onClick={this.handlePopupClose} src="https://raw.githubusercontent.com/google/material-design-icons/master/content/2x_web/ic_clear_black_48dp.png" alt="Image not found"/>
                        <span>  Name : {this.props.name} </span>
                        <span>  Surname : {this.props.surname} </span>
                        <span>  Phone Number : {this.props.phoneNumber}</span>
                        <span>  Adress : {this.props.adress} </span>
                        </div>
                </Popup>
                <Popup
                    trigger={<button className="showButton"> Update User </button>}
                    modal
                    closeOnDocumentClick
                    on='click'
                    open={this.state.isOpen2}                    
                    onOpen={this.handlePopupOpen2}>
                        <div className="updateForm">
                        <img className="closeImg" onClick={this.handlePopupClose2} src="https://raw.githubusercontent.com/google/material-design-icons/master/content/2x_web/ic_clear_black_48dp.png" alt="Image not found"/>
                        <label>Name:</label><input className="formElement" type="text" name="name" required value={this.state.name} onChange={this.handleChange} />
                        <label>Surname:</label><input className="formElement" type="text" name="surname" required value={this.state.surname} onChange={this.handleChange} />
                        <label>Phone number:</label><input className="formElement" type="tel" minLength="9" maxLength="9" required name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
                        <label>Adress:</label><input className="formElement" type="text" name="adress" required value={this.state.adress} onChange={this.handleChange} />
                        <button className="updateButton" type="submit" onClick={this.props.updateUser.bind(null,this.props.id,this.state.name,this.state.surname,this.state.phoneNumber, this.state.adress )}> Save changes </button>
                        </div>
                </Popup>
                    <button onClick={this.props.deleteUser} className="showButton">Delete User</button>        
                </div>
            </div>
        );
    }
}

export default User;