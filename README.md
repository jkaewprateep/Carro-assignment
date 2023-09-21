# Carro-assignment
To create custom forms for surveys and questionnaires!

### Requirement 1: Backend (API): ###
🧸💬 By using controllers to handle message communications in the project and to ProsgreDB, create a login form, history form, user detail form, and home page.
🧸💬 Application default routing, application proxy, application settings and resources, communication functions, and CSS style for the global pages are added.
🐑💬 Application resources and CSS files you can apply change at a single point of configuration when datasets ( datasetDB object ) are created as classes and by the controller.
🐐💬 Input and output are dynamics user control with message communication registered with EventListerners.

* User can register and login by the page /loginform build from controller.
* Add dynamic form inputs text and button

### Requirement 2: Public Form (UI): ###
🧸💬 User interaction is on a single page of MVC control, continue working with a message to complete the task.
🦭💬 Add by summary email verification and communication, SMTP email and free email API * Some email server required install of email node and problem fixed * 

* Customer can submit a form depending on the form render /loginform
* After submitting the form, API has to send mail async sendemail()

### API Basics: ###
🧸💬 Customer and Login / Register by active script. Click on the Register checkbox the interaction running under active script to continue work on the same page.
🧸💬 API Router control, ORM resources, Auth control ( custom as userController ), error handling, and versions are created with specific methods included configured in the proxy.

* Customer can submit a form depending on the form render.
* API Routes and Controllers implemented!
* API ORM Resources implemented!
* API Auth control implemented!
* Override API Error Handling and Status Codes implemented!
* API Versioning implemented!

### Database: ####
🐑💬 Communication database API, installed on VSCode / VsStudio to create struct of datasets for communication and use data table as database communication. 
* ProstgreDB with Npgsql.EntityFrameworkCore.PostgreSQL as DBContext implemented!

### Extra: ###
🐐💬 Same as described and followed requirements by inches !

* All are in controllers
* All are async mothods
* User Context messages
* Use .NET 6 with C#

### Sample controller for database and message events ###
🐑💬 All communication using controller and message event register for the example of a dataset with information created.

```
// api/<controller>/Addemployeedata
[HttpGet("Addemployeedata")]
public IActionResult Addemployeedata(string Username, string Name, string Lastname, string Department,
    string Password, string Email)
{
    Task<List<Employee>> populate_employee = AddEmployeeData(Username, Name, Lastname,
        Department, Password, Email);

    Employee employee = new Employee();
    if (populate_employee.Result.Find(con => con.Username == Username) != null)
    {
        employee.Username = populate_employee.Result.Find(con => con.Username == Username).Username;
        employee.Name = populate_employee.Result.Find(con => con.Username == Username).Name;
        employee.Lastname = populate_employee.Result.Find(con => con.Username == Username).Lastname;
        employee.Department = populate_employee.Result.Find(con => con.Username == Username).Department;
        employee.Password = populate_employee.Result.Find(con => con.Username == Username).Password;
        employee.Email = populate_employee.Result.Find(con => con.Username == Username).Email;
        List<Employee> result2 = new List<Employee> { employee };
        return Json(result2.ToArray());
    }
    else
    {
        List<Employee> result2 = new List<Employee> {  };
        return Json(result2.ToArray());
    }
    
}
```

### EventListeners and active controls ###
🦭💬 EventLister to listen and respond to registered events as a priority, active events can apply logic here.

```
constructor(props) {
    super(props);
    this.state = { username: "", name: "", lastname : "", department: "", email: "", password: "",
                    ck_register: false, currentCount: 0, errors: "", fetched_data: [], submit_btn: "Submit" };

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
    this.AddEmployeeData(this.state.username, this.state.name, this.state.lastname, this.state.department,
        this.state.password, this.state.email);
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
```

### Render function ###
🦭💬 For render user controls in the page are working with active event listener.

```
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
                        onChange={this.department_handleChange} name="department"
                            hidden={!this.state.ck_register} /></td>
                </tr>
                <tr>
                    <td></td>
                    

                    <td><input type="checkbox" checked={this.state.ck_register}
                                onChange={this.handleRegisterCKClick} />Register
                        <input className="btn btn-primary" type="submit" value="Register"
                                hidden={!this.state.ck_register} />
                        <input className="btn btn-primary" type="submit" value="Submit"
                                hidden={this.state.ck_register}  /></td>
                </tr>
            </table>
            <p aria-live="polite">Current count: <strong>{this.state.currentCount}:
                          </strong><strong>{this.state.errors}</strong></p>
        </form>
    );
```

## Home Page ##
🦭💬 Start page and you can navigate using navigation toolbar

![Alt text](https://github.com/jkaewprateep/Carro-assignment/blob/main/images/01.png)

## Login & Register Page ##
🦭💬 Log in and register for example of active script and communication event.

![Alt text](https://github.com/jkaewprateep/Carro-assignment/blob/main/images/02.png)

## User Detail Page ##
🦭💬 To examine newly registered users and detail input.

![Alt text](https://github.com/jkaewprateep/Carro-assignment/blob/main/images/03.png)

## History Page ##
🦭💬 To examine user history as an active script.

![Alt text](https://github.com/jkaewprateep/Carro-assignment/blob/main/images/04.png)

## Controllers Codings ##
*** 🦭💬 To observe of coding all are managed codes ***

![Alt text](https://github.com/jkaewprateep/Carro-assignment/blob/main/images/05.png)
