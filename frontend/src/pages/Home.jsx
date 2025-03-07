import React from "react";

export default function Home() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        Welcome to the Node.js Authentication App!
      </h1>
      <p className="mb-4 text-slate-700">
        Dive into this sleek full-stack web app crafted with the MERN
        stack—MongoDB, Express.js, React, and Node.js! It’s your one-stop
        solution for secure user authentication, featuring seamless sign-up,
        login, and logout functionality, plus protected routes exclusive to
        authenticated users.
      </p>
      <p className="mb-4 text-slate-700">
        On the front end, React powers a dynamic, user-friendly interface, with
        React Router handling smooth client-side navigation. The back end,
        driven by Node.js and Express, pairs with MongoDB for robust data
        storage. JSON Web Tokens (JWT) ensure top-notch security for
        authentication.
      </p>
    </div>
  );
}
