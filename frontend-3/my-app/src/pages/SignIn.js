import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Signing in with:\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-300 to-orange-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-xl w-96 transition-all transform hover:scale-105 duration-500 ease-in-out"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-orange-600">Sign In</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-4 mb-5 border-2 border-orange-300 rounded-md focus:ring-4 focus:ring-orange-500 focus:outline-none transition duration-300 ease-in-out"
          required
        />

        <button
          type="submit"
          className="w-full py-3 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 transition duration-300 ease-in-out"
        >
          Sign In
        </button>

        <div className="mt-6 text-center">
          <span className="text-sm text-gray-500">Don't have an account? </span>
          {/* Use Link to navigate to the SignUp page */}
          <Link
            to="/signup"
            className="text-sm text-orange-500 font-semibold hover:text-orange-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
