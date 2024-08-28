import React from "react";

function Loading() {
  return (
    <div className="position-fixed top-0 start-0 z-200 wv-100 hv-100 bg-overlay-color">
      <div
        className="spinner-border fs-1 spiner"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
