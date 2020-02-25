import React, {Component} from 'react';
import './Form.modules.css';


class Form extends Component {

    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            surname: '',
            phoneNumber: '',
            adress: '',
            reload: false
        };
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
    clearForm = ()=>{
        this.setState({
            id: '',
            name: '',
            surname: '',
            phoneNumber: '',
            adress: ''
        });
    }
    render(){  
      return (      
          <div>
              <h1>Add User</h1>
          <div className="Form">          
            <label className="labelAdd">Name:</label><input className="formElement" placeholder="Your name..." type="text" name="name" required value={this.state.name} onChange={this.handleChange} />
            <label className="labelAdd">Surname:</label><input className="formElement"  placeholder="Your surname..." type="text" name="surname" required value={this.state.surname} onChange={this.handleChange} />
            <label className="labelAdd">Phone number:</label><input className="formElement"  minLength="9" maxLength="9" placeholder="Your phone number..." type="tel"   required name="phoneNumber" value={this.state.phoneNumber} onChange={this.handleChange} />
            <label className="labelAdd">Adress:</label><input className="formElement" placeholder="Your home adress..." type="text" name="adress" required value={this.state.adress} onChange={this.handleChange} />
            <button className="submitButtonForm" type="submit" onClick={this.props.uploadData.bind(null,this.state.name,this.state.surname,this.state.phoneNumber, this.state.adress )}               >Save</button>
            <button className="submitButtonForm" type="submit" onClick={this.clearForm}>Clear</button>
         </div>
        </div>
      );
    }
  }

  export default Form;
