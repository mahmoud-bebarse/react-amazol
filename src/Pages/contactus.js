import React from "react";
import Navbar from "../navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contactus = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          marginTop: 140,
          marginLeft: 550,
        }}
      >
        <h1 style={{ width: 450, fontWeight: "bolder" }}>
          {" "}
          Love To hear form you, get in touch
        </h1>
        <div>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 50 }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                style={{
                  width: 390,
                  height: 40,
                  marginTop: 5,
                  backgroundColor: "#f2f2f2",
                  borderWidth: 0,
                  paddingLeft: 20,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 30,
              }}
            >
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                style={{
                  width: 390,
                  height: 40,
                  marginTop: 5,
                  backgroundColor: "#f2f2f2",
                  borderWidth: 0,
                  paddingLeft: 20,
                }}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="area" style={{ marginTop: 20 }}>
              Message
            </label>
            <textarea
              id="area"
              placeholder="Enter your message"
              style={{
                width: 810,
                height: 200,
                marginTop: 5,
                backgroundColor: "#f2f2f2",
                borderWidth: 0,
                padding: 20,
              }}
            />
            <button
              type="button"
              style={{ width: 400, position: "absolute", left: 525, top: 714 }}
              className="btn btn-dark"
            >
              Send
            </button>
          </div>
        </div>
        <div
          style={{ marginTop: 80, display: "flex", flexDirection: "column" }}
        >
          <h4>Social Media</h4>
          
        </div>
      </div>
    </div>
  );
};

export default Contactus;
