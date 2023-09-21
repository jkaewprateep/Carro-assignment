import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;



    render() {
      return (
          <div>
              <h1>Carro assignment - Login form</h1>
            <p>Welcome to Carro 's assingment this form build with the requirements':</p>
                <ul>
                  <li><strong>Requirement 1: Backend (API):</strong></li>
                  <li class="explain_text">User can register and login by the page <label class="target_text">/loginform</label> build from controller.</li>
                  <li class="explain_text">Add dynamic form inputs <label class="target_text">text and button</label></li>
                </ul>
                <ul>
                  <li><strong>Requirement 2: Public Form (UI):</strong></li>
                  <li class="explain_text">Customer can submit a form depending on the form render <label class="target_text">/loginform</label></li>
                  <li class="explain_text">After submitting the form, API has to send mail <label class="target_text">async sendemail()</label></li>
                </ul>
                <ul>
                  <li><strong>API Basics:</strong></li>
                  <li class="explain_text">Customer can submit a form depending on the form render.</li>
                  <li class="explain_text">API Routes and Controllers <label class="target_text">implemented!</label></li>
                  <li class="explain_text">API ORM Resources <label class="target_text">implemented!</label></li>
                  <li class="explain_text">API Auth control <label class="target_text">implemented!</label></li>
                  <li class="explain_text">Override API Error Handling and Status Codes <label class="target_text">implemented!</label></li>
                  <li class="explain_text">API Versioning <label class="target_text">implemented!</label></li>
                </ul>
                <ul>
                  <li ><strong>Database:</strong></li>
                  <li class="explain_text">ProstgreDB with Npgsql.EntityFrameworkCore.PostgreSQL as DBContext <label class="target_text">implemented!</label></li>
                </ul>
                <ul>
                    <li><strong>Extra:</strong></li>
                  <li class="explain_text">All are in controllers</li>
                  <li class="explain_text">All are async mothods</li>
                  <li class="explain_text">User Context messages</li>
                  <li class="explain_text">Use .NET 6 with C#</li>
                </ul>
        </div >
    );
  }
}

