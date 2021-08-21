import React from 'react';
import { Link } from 'react-router-dom';
import User from '../images/user.jpg';

const ContactCard = ({ contact }) => {
    const { name, email, id } = contact

    return (
        <div className="item">
            <img className="ui avatar image" src={User} alt="user" />
            <div className="content">
                <Link to={{ pathname: `/contact/${id}`, state: { contact: contact } }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>

            </div>
            <Link to={{ pathname: `/confirm/${id}`, state: { contact: contact } }}>
                <i
                    className="trash alternate outline icon right floated"
                    style={{ color: "red", marginTop: "7px" }}
                ></i>
            </Link>
        </div>

    );
};

export default ContactCard;