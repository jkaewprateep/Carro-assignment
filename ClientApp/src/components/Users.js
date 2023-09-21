import React, { Component } from 'react';

export class Users extends Component {
    static displayName = Users.name;

    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
    }

    componentDidMount() {
        this.populateUserData();
    }

    /// Render Users table
    static renderUsersTable(users) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>name</th>
                        <th>lastname</th>
                        <th>department</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(users =>
                        <tr key={users.id}>
                            <td>{users.username}</td>
                            <td>{users.name}</td>
                            <td>{users.lastname}</td>
                            <td>{users.department}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    ///

    ///
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Users.renderUsersTable(this.state.users);

        return (
            <div>
                <h1 id="tabelLabel" >Users detail</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
    ///

    async populateUserData() {
        const response = await fetch('users');
        const data = await response.json();
        this.setState({ users: data, loading: false });
    }
}
