//import React from 'react';
import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useNavigate } from 'react-router-dom';
// import { Login } from '../component/Login';

function App() {
  const [email_or_username, setName] = useState('');
  const [password, setPassword] = useState('');
  const [is_contributor, setContributor] = useState(false);
  //const history = useHistory();
  // const navigate = useNavigate();
  return (
    <div> 
            <Form className="login-form">
                <h1>
                <div className="text-right">
                    <Button
                        href="/register"
                        className=" btn-dark text-right">
                        sign up
                    </Button>
                </div>
                <span className="font-weight-bold">Mindify</span>
                </h1>
                <FormGroup>
                    <Label>Username or Email</Label>
                    <h2></h2>
                    <Input 
                        value={email_or_username} 
                        placeholder = "Username or Email" 
                        onChange={e => setName(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <label>Password</label>
                    <h2></h2>
                    <Input 
                        value={password} 
                        placeholder = "Password"
                        onChange={e => setPassword(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <div className="text-center">
                    <Input 
                        type="checkbox"
                        value={is_contributor}
                        onChange={e => setContributor(e.target.checked)}/>
                        Contributor
                    </div>                    
                </FormGroup>


                <Button onClick={async () =>{
                     const login = {email_or_username, password, is_contributor};
                     const response = await fetch('http://127.0.0.1:5000/api/login', {
                         method: 'POST',
                         headers:{
                            'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(login)
                     })
                     .then(response => {                         
                         if (response.status === 201) {


                          response.json().then(data => { 
                            window.localStorage.setItem("user", JSON.stringify(data.user));                            
                            console.log(JSON.parse(window.localStorage.getItem("user"))); 
                            const ref="/homepage";
                            history.push(ref);
                            // carry out other logic below
                          })


                            response.json().then(data => { // store user in localStorage as token
                                window.localStorage.setItem("user", JSON.stringify(data.user));
                                console.log(JSON.parse(window.localStorage.getItem("user"))); // prints correctly here
                            })
                            console.log("Successful Login"); 
                            console.log(JSON.parse(window.localStorage.getItem("user"))); // prints null here

                            const ref="/homepage";
                            // navigate.push(ref);
                            //redirect to home page
                         }
                         else if (response.status === 204) {
                            console.log("Invalid Username or Password or Incorrect Permissions");
                            const ref="/";
                            // navigate.push(ref);
                            // reload login page
                         }
                     })
                     .catch(error => console.log(error))

                    }}
                    className="btn-lg btn-dark btn-block">
                    Log in</Button>               
            </Form>
        </div>);  
  
}

export default App;
