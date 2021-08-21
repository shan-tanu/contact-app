import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class AddContact extends Component {
    state = {
        name: "", email: "",
    }

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All fields mandatory!!");
        }
        else {
            this.props.addContactHandler(this.state);
            this.setState({ name: "", email: "" });
            this.props.history.push("/");
        }

    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter E-mail" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}></input>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;