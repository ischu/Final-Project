import React from "react";

function VisitCard(props) {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        Visit
                    </p>
                    <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </a>
                </header>
            <div className="card-content">
                <div className="content is-danger">
                    {props.time}
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            {/* <footer className="card-footer">
                <a href="#" className="card-footer-item">Save</a>
                <a href="#" className="card-footer-item">Edit</a>
                <a href="#" className="card-footer-item">Delete</a>
            </footer> */}
            </div >
        )

};

export default VisitCard;