import React from "react";

const Notfound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "240px",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>Not Found</h1>
      <h1
        style={{
          fontSize: "150px",
          fontWeight: "bolder",
          letterSpacing: "10px",
        }}
      >
        404
      </h1>
    </div>
  );
};

export default Notfound;
