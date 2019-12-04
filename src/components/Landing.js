import React from 'react';
import Navbar from './Navbar';
import {
    Link
  } from "react-router-dom";

function Landing() {
  return (
      <section>
        <Navbar />
        <div className="cont">
            <h1> Welcome to <span className="sittr">Sittr.</span></h1>
            <p className="desc">Let's get started. Choose an option below.</p>
            <div className="wrapper">
                <div className="left">
                    <h2>I need a caregiver</h2>
                    <Link to="/caretakers" className="btnn">Find care</ Link>
                </div>
                <div className="right">
                    <h2>I want a care job</h2>
                    <Link to="/parents" className="btnn">Find jobs</ Link>
                </div>
            </div>
        </div>
      </section>
  );
}

export default Landing;