import React, { Component } from 'react';

export class History extends Component {
    static displayName = History.name;

    constructor(props) {
        super(props);
        this.state = { histories: [], loading: true };
    }

    componentDidMount() {
        this.populateUserData();
    }

    /// Render Users table
    static renderUsersTable(histories) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>userid</th>
                        <th>status</th>
                        <th>lasttimestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {histories.map(histories =>
                        <tr key={histories.id}>
                            <td>{histories.userid}</td>
                            <td>{histories.status}</td>
                            <td>{histories.lasttimestamp}</td>
                        </tr>
                    )}
                    {/*{histories.map(histories =>*/}
                    {/*    <tr key={histories.id}>*/}
                    {/*        <td>{histories.username}</td>*/}
                    {/*        <td>{histories.name}</td>*/}
                    {/*        <td>{histories.lastname}</td>*/}
                    {/*        */}{/*<td>{histories.department}</td>*/}
                    {/*    </tr>*/}
                    {/*)}*/}
                </tbody>
            </table>
        );
    }
    ///

    ///
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : History.renderUsersTable(this.state.histories);

        return (
            <div>
                <h1 id="tabelLabel" >Histroy</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
    ///

    async populateUserData() {
        /*const response = await fetch('users');*/
        const response = await fetch('history');
        //const response = await fetch('histories');
        const data = await response.json();


        const temp = "";


        this.setState({ histories: data, loading: false });
    }
}

