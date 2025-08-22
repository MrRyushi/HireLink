import React from "react";

const Login = () => {


  return (
    <div className="flex flex-col items-center justify-center py-48">
      <div className="flex flex-col md:w-2/5 2xl:w-1/5 border p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8">Sign in</h1>
        <form className="flex flex-col gap-2">
          <label>Email Address</label>
          <input placeholder="Email" className="py-2 px-4 border rounded-lg"/>
          <label>Password</label>
          <input type="password" placeholder="Password" className="py-2 px-4 border rounded-lg"/>
          <button className="bg-blue-800 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
            Sign In 
          </button>
        </form>
        <div className="flex flex-col items-center">
          <p className="mt-4 text-sm">
            {"Don't"} have an account?{" "}
            <a href="/register" className="text-blue-800 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
