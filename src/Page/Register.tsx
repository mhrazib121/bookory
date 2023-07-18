import { useState } from "react";
import CommonInput from "../components/ui/Common/CommonInput";

const Register = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        <div className="mb-6">
          <img
            src="/path/to/your/image.png"
            alt="Logo"
            className="mx-auto h-12"
          />
          <h2 className="mt-4 text-3xl text-center font-bold">Register</h2>
        </div>
        <form>
          <div className="mb-4">
            <label
              htmlFor="firstname"
              className="block text-gray-700 font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              className="w-full px-3 py-2 text-gray-700 border border-gray-400 rounded leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              className="w-full px-3 py-2 text-gray-700 border border-gray-400 rounded leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 text-gray-700 border border-gray-400 rounded leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 text-gray-700 border border-gray-400 rounded leading-tight focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
