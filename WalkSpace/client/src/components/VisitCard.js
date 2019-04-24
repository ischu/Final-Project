import React from "react";

function VisitCard(props) {
        return (
            <div className={props.cancelled?"card has-background-danger":(props.complete?"card has-background-success":(props.arrive?"card has-background-info":"card"))}>
                <header className="card-header">
                    <p className="card-header-title">
                        Visit for {props.name}
                    </p>
                    <a href="#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                    </a>
                </header>
            <div className="card-content">
                <div className="content">
                    {props.time}
                    <br />
                    <time datetime="2016-1-1">{props.date}</time>
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