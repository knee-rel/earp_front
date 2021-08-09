import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../components/button";
import Footer from "../components/footer";
import Header from "../components/header";
import Dine from "../public/dine.png";

const SignUpPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center flex-col md:flex-row w-full m-5 p-10">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image src={Dine} alt="Dine" height={300} width={550} />
        </div>
        <div className="flex items-center justify-center bg-white flex-col p-10 m-10 shadow-lg rounded-xl w-full lg:w-1/2">
          <div className="text-center">
            <h1 className="text-2xl">Welcome</h1>
            <p>Kindly fill in your details to log-in</p>
          </div>
          <form className="flex items-center justify-center bg-white flex-col w-full">
            <input
              className="p-4 w-full lg:w-3/4 rounded-full bg-white border-2 m-3 focus:outline-none "
              type="text"
              placeholder="Username"
            />
            <input
              className="p-4 w-full lg:w-3/4 rounded-full bg-white border-2 m-3 focus:outline-none "
              type="text"
              placeholder="Password"
            />
          </form>
          <p className="mr-3">
            No account yet?
            <Link href="/login" className="m-2 text-blue-300" passHref>
              <p className="ml-2">Sign-up</p>
            </Link>
          </p>
          <Button>Log-in</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
