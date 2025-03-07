import React from "react";

export default function About() {
  return (
    <div className="px-4 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">About This App</h1>
      <p className="mb-4 text-slate-700">
        Welcome to a powerful MERN stack application—built with MongoDB,
        Express.js, React, and Node.js—designed to showcase secure
        authentication in action. Sign up, log in, and log out with ease, while
        enjoying access to exclusive protected routes reserved for authenticated
        users.
      </p>
      <p className="mb-4 text-slate-700">
        The front end shines with React’s dynamic interface and React Router’s
        seamless navigation. On the back end, Node.js and Express team up with
        MongoDB for reliable data management, while JSON Web Tokens (JWT) lock
        down authentication with robust security.
      </p>
    </div>
  );
}
