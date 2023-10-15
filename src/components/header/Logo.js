import React from "react";
import Link from "next/link";

const Logo = ({ language }) => {
  return (
    <div className="logo">
      <Link href={`/${language || ''}`} >
        <img src={"/assets/images/logo/Logo_Full.svg"} alt="voopo" className="img-fluid mt-2" />
      </Link>
    </div >
  );
};

export default Logo;
