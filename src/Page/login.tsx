import { useState } from "react";
import CommonInput from "../components/ui/Common/CommonInput";
import Button from "../components/ui/Common/Button";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  console.log("email", email);
  console.log("pass", password);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        <div className="mb-6">
          <img
            src="/path/to/your/image.png"
            alt="Logo"
            className="mx-auto h-12"
          />
          <h2 className="mt-4 text-3xl text-center font-bold">Login</h2>
        </div>
        <form>
          <CommonInput
            label="Email Address"
            placeholder="Enter your email address"
            type="email"
            key={1}
            value={email}
            handleOnChange={setEmail}
          />
          <CommonInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            key={2}
            value={password}
            handleOnChange={setPassword}
          />

          <div className="w-full bg-blue-700 hover:bg-blue-700 rounded-md flex flex-col items-center mb-12">
            <Button label="Sign In" />
          </div>
        </form>
        <a href="/register" className="text-sm flex gap-2 justify-center mb-6">
          Don't have an account?{" "}
          <span className="text-blue-500 hover:text-blue-800"> Register</span>
        </a>
        <div className="flex justify-between">
          <a href="/" className="text-sm text-blue-500 hover:text-blue-800">
            Back to home
          </a>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
