import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import alertify from 'alertifyjs';

export default class FormDeme2 extends Component {

    state = { email: "", password: "", city: "", description: "" }
    handleChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " added to db!");
        alertify.success(this.state.description + " added to db!");
        alertify.success(this.state.city + " added to db!");

    }
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <br />
                        <Input type="email" name="email" id="email" placeholder="Enter your Email" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <br />
                        <Input type="password" name="password" id="password" placeholder="Enter your Password" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <br />
                        <Input type="textarea" name="description" id="description" placeholder="Write your description" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" onChange={this.handleChange}>
                            <option>Eskişehir</option>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>Aydın</option>
                            <option>İzmir</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
