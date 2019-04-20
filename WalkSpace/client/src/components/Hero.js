import React, { Component } from "react";

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body has-background-primary">
                    <div className="container">
                        <h1 className="title">
                            Hero title
                        </h1>
                        <h2 className="subtitle">
                            Hero subtitle
                        </h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero;