import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href={process.env.PUBLIC_URL + "/"}>
          <img src={"/assets/images/logo/Logo_Full.svg"} alt="voopo" className="img-fluid mt-2" />
      </Link>
    </div>
  );
};

export default Logo;
