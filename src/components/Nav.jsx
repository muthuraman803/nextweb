import React from "react";
import Link from "next/link";
import '@/style/globel.css'

const Nav = () => {
  return (
    <nav>
      <ul className="flex justify-around mt-10">
        <li className="nav_child">
          <Link href={"#"}>FILED #1</Link>
        </li>
        <li className="nav_child">
          <Link href={"#"}>FILED #1</Link>
        </li>
        <li className="text-3xl font-semibold sm:text-xs ">
          <Link href={"#"}>YOUR LOGO</Link>
        </li>
        <li className="nav_child">
          <Link href={"#"}>FILED #1</Link>
        </li>
        <li className="nav_child">
          <Link href={"#"}>FILED #1</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
