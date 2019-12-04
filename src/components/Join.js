import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';

export default class Join extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            name: '',
            userName: '',
            password: '',
            value: 'babysitter'
        };

    }

    handleNameChange(e){
        this.setState({
            name: e.target.value
        });
    }
    handleUserChange(e){
        this.setState({userName: e.target.value});
    }
    handlePasswordChange(e){
        this.setState({password: e.target.value});
    }

    
    handleLogin(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            userName: this.state.userName,
            password:this.state.password
        }
        console.log(user);

        axios.post('http://sittrapp.herokuapp.com/', user)
            .then(res => console.log(res.data));

        if(this.state.value === 'babysitter'){
            window.location = '/parents';
        }else {
            window.location = '/caretakers';
        }
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }


    render() {
        return (
            <div>
                <Navbar />
                <div className="sign-up">
                    <div className="explan">
                        <h4 className="explan1">Who are you?</h4>
                        <p className="explan1">Please indicate whether you are a parent/guardian or a babysitter in the drop down menu before you sign up</p>
                    </div>
                    <form className="wrapper" onSubmit={this.handleLogin}>
                        <p>Full name:</p>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
                        <p>Username:</p>
                        <input type="text" name="userName" value={this.state.userName} onChange={this.handleUserChange} />
                        <p>Password:</p>
                        <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option className="options" value="parent">Parent/Guardian</option>
                            <option className="options" value="babysitter">Babysitter</option>
                        </select>
                        <button onClick={e => this.handleLogin(e)} type="button">Join now!</button>
                    </form>
                </div>
            </div>
        );
    }
}
