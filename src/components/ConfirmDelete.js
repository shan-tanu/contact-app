import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmDelete = (props) => {
    const id = props.location.state.contact.id;
    console.log(id);
    return (
        <div className="main">
            <h2>Are you sure you want to delete ?</h2>
            <div >
                <Link to={{ pathname: `/`, state: { confirm: true, id: id } }}>
                    <button className="ui button blue" onClick={() => { props.getId(id) }}>Yes</button>
                </Link>
                <Link to={{ pathname: `/`, state: { confirm: false, id: id } }}>
                    <button className="ui button blue">No</button>
                </Link>
            </div>
        </div>
    );
};

export default ConfirmDelete;