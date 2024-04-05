import React from "react";
import Image from "next/image";

import Link from "next/link";

function webinar() {
  return (
    <div className="w-full pt-20 px-8">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "56.2500%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1.6em",
          marginBottom: "0.9em",
          overflow: "hidden",
          borderRadius: "8px",
          willChange: "transform",
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0,
          }}
          src="https://www.canva.com/design/DAF9yMXBin0/9TDKECf1Y6jjUmukteEJbg/view?embed"
          allowFullScreen={true}
          allow="fullscreen"
        ></iframe>
      </div>
    </div>
  );
}

export default webinar;
