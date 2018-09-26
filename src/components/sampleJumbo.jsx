import React from "react";

const SampleJumbo = () => {
  return (
    <div
      className="jumbotron text-center size-full rounded-0"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        backgroundImage:
          'url("https://66.media.tumblr.com/2e91caee53292ded85aaf62af1f2f3dd/tumblr_pf51jnluJT1u9wc5qo2_1280.jpg")'
      }}
    >
      <h1>Hello World! </h1>
      <p>This is a resizable jumbotron first page.</p>
    </div>
  );
};

export default SampleJumbo;
