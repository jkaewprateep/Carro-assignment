import React, { Component } from 'react';

// Add
import { StyleSheet } from "react-native";
import { NavMenu } from './NavMenu';


export class LoginForm extends Component {
    static displayName = LoginForm.name;

    constructor(props) {
        super(props);
        this.state = { username: "", name: "", lastname : "", department: "", email: "", password: "", ck_register: false, currentCount: 0, errors: "", fetched_data: [], submit_btn: "Submit" };

        this.password_handleChange = this.password_handleChange.bind(this);
        this.username_handleChange = this.username_handleChange.bind(this);
        this.email_handleChange = this.email_handleChange.bind(this);
        this.name_handleChange = this.name_handleChange.bind(this);
        this.lastname_handleChange = this.lastname_handleChange.bind(this);
        this.department_handleChange = this.department_handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        /*this.handleRegisterClick = this.handleRegisterClick.bind(this);*/
        this.handleRegisterCKClick = this.handleRegisterCKClick.bind(this);

        
    }

    Login_verification( ) {
        this.populateUserData(this.state.username, this.state.password);
    }

    Add_employeedata() {
        this.AddEmployeeData(this.state.username, this.state.name, this.state.lastname, this.state.department, this.state.password, this.state.email);
    }

    handleRegisterCKClick(event) {
        this.setState({ ck_register: !this.state.ck_register });

        if (!this.state.ck_register) {
            this.setState({ submit_btn: "Register" });
        }
        else
        {
            this.setState({ submit_btn: "Submit" });
        }
    }

    username_handleChange(event) {
        this.setState({ username: event.target.value });
    }

    name_handleChange(event) {
        this.setState({ name: event.target.value });
    }

    lastname_handleChange(event) {
        this.setState({ lastname: event.target.value });
    }

    department_handleChange(event) {
        this.setState({ department: event.target.value });
    }

    email_handleChange(event) {
        this.setState({ email: event.target.value });
    }

    password_handleChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {

        // Login
        if (!this.state.ck_register) {
            alert('username is: ' + this.state.username);
            event.preventDefault();
            this.Login_verification(this.state.username, this.state.password);
            /*this.message = this.state.name;*/
        }
        else // Register
        {
            event.preventDefault();

            this.AddEmployeeData(this.state.username, this.state.name, this.state.lastname, this.state.department, this.state.password, this.state.email)
            this.sendemail();
            /*this.message = this.state.name;*/
        }
    }

    //handleRegisterClick(event) {
    //    alert('Register clicks : ' + this.state.username);
    //}

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <table>
                    <tr>
                        <td><label>Username </label></td>
                        <td><input type="text" style={styles.textOutputStyle} value={this.state.username}
                            onChange={this.username_handleChange} name="uname" required /></td>
                    </tr>
                    <tr>
                        <td><label>Password </label></td>
                        <td><input type="password" style={styles.textOutputStyle} value={this.state.password}
                            onChange={this.password_handleChange} name="password" required /></td>
                    </tr>
                    <tr hidden={!this.state.ck_register}>
                        <td><label hidden={!this.state.ck_register}>email </label></td>
                        <td><input type="email" style={styles.textOutputStyle} value={this.state.email}
                            onChange={this.email_handleChange} name="email" hidden={!this.state.ck_register} /></td>
                    </tr>
                    <tr hidden={!this.state.ck_register}>
                        <td><label hidden={!this.state.ck_register}>Name </label></td>
                        <td><input type="text" style={styles.textOutputStyle} value={this.state.name}
                            onChange={this.name_handleChange} name="name" hidden={!this.state.ck_register} /></td>
                    </tr>
                    <tr hidden={!this.state.ck_register}>
                        <td><label hidden={!this.state.ck_register}>Lastname </label></td>
                        <td><input type="text" style={styles.textOutputStyle} value={this.state.lastname}
                            onChange={this.lastname_handleChange} name="lname" hidden={!this.state.ck_register} /></td>
                    </tr>
                    <tr hidden={!this.state.ck_register}>
                        <td><label hidden={!this.state.ck_register}>Department </label></td>
                        <td><input type="text" style={styles.textOutputStyle} value={this.state.department}
                            onChange={this.department_handleChange} name="department" hidden={!this.state.ck_register} /></td>
                    </tr>
                    <tr>
                        <td></td>
                        

                        <td><input type="checkbox" checked={this.state.ck_register} onChange={this.handleRegisterCKClick} />Register
                            <input className="btn btn-primary" type="submit" value="Register" hidden={!this.state.ck_register} />
                            <input className="btn btn-primary" type="submit" value="Submit" hidden={this.state.ck_register}  /></td>
                    </tr>
                </table>
                <p aria-live="polite">Current count: <strong>{this.state.currentCount}:    </strong><strong>{this.state.errors}</strong></p>
            </form>
        );
    }


    async populateUserData() {
        const temp = 'https://localhost:44419/users/Login_function?username=' + this.state.username +
            '&password=' + this.state.password;
        const response = await fetch(temp);
        const data = await response.json();
        this.setState({ fetched_data: data, loading: false });

        if (data) {
            if (data[0]) {
                this.setState({
                    currentCount: 0,
                    errors: ""
                });

                window.location.replace("?name=Jirayu");
            }
            else {
                this.setState({
                    currentCount: this.state.currentCount + 1,
                    errors: "username / password incorrect."
                });

                if (this.state.currentCount >= 2) {
                    window.location.replace("http://www.google.co.th");
                }
            }
        }
        else {
            this.setState({
                currentCount: this.state.currentCount + 1,
                errors: "username / password incorrect."
            });

            if (this.state.currentCount >= 2) {
                window.location.replace("http://www.google.co.th");
            }
        }
    }

    async AddEmployeeData(Username, Name, Lastname, Department, Password, Email)
    {
        const temp = 'https://localhost:44419/users/Addemployeedata?Username=' + Username +
            '&Password=' + Password + 
            '&Department=' + Department + 
            '&Name=' + Name + 
            '&Lastname=' + Lastname + 
            '&Email=' + Email;
        const response = await fetch(temp);
        const data = await response.json();
        this.setState({ fetched_data: data, loading: false });

        window.location.replace("/");
    }

    async sendemail()
    {
        const apiKey = 'df280819e67a43a8b265cd45d3a89a48';
        const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey;
        const email = "jkaewprateep@gmail.com";
        const response = await fetch(apiURL + '&email=' + email);
        const data = await response.json();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textInputStyle: {
        borderColor: '#9a73ef',
        borderWidth: 1,
        height: 40,
        margin: 20,
        padding: 10,
    },
    textOutputStyle: {
        fontSize: 20
    }
})