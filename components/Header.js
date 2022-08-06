import Link from "next/link";
import React from "react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../context/authContext";

export default () => {
  const [logged, setLogged] = useState(false);
  const authContext = useContext(Context);

  useEffect(() => {
    authContext.auth === "" ? setLogged(false) : setLogged(true);
  }, [authContext.auth]);

  return (
    <div>
      <nav className=" bg-main absolute w-[100%] z-10">
        <div className="relative flex flex-wrap items-center justify-between mx-auto px-10 md:px-20 lg:px-40 py-3">
          <div className="w-1/4">
            <Link href="/">
              <img
                className="object-scale-down cursor-pointer"
                src="https://i0.wp.com/raccoon.ag/wp-content/uploads/2022/01/logo-raccoon-monks.png?fit=212%2C41&ssl=1"
              />
            </Link>
          </div>

          <div className="relative flex flex-wrap items-center justify-between w-2/3 lg:w-2/5">
            <Link href="/products">
              <p className="px-2 lg:px-5 py-2 flex items-center text-md  font-bold leading-snug text-white hover:opacity-75">
                Produtos
              </p>
            </Link>

            <a
              className="px-2 lg:px-5 py-2 flex items-center text-md  font-bold leading-snug text-white hover:opacity-75"
              href="https://patrux08.github.io/a-simple-anki-deck/"
              target="_blank"
            >
              Extra
            </a>

            <Link href="/auth/login">
              <button
                type="button"
                className="float-right inline-block justify-center rounded-sm w-1/3 bg-blue-900 px-3 lg:px-5 py-2 text-md font-bold text-white hover:bg-[#1E2A6A]"
              >
                {logged ? "Logout" : "Login"}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
