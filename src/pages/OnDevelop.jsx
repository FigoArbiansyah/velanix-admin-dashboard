import React from "react";
import { Link } from "react-router-dom";

const OnDevelop = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <p>
        Masih dalam tahap pengembangan, arahkan url ke /dashboard, atau tekan
        link berikut,{" "}
        <Link to="/dashboard" className="text-blue-500 underline">
          Halaman Dashboard
        </Link>
      </p>
    </div>
  );
};

export default OnDevelop;
