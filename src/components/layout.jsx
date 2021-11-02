import React from "react";
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <>
       <h2> Test </h2>
       <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
      <main>{children}</main>
    </>
  );
};

export default Layout;
