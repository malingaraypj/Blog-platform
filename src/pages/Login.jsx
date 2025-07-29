import { Link, useNavigate } from "react-router";
import SiteIcon from "../components/others/SiteIcon";
import Input from "../utils/Input";
import { useLogin } from "../Hooks/useLogin";
import { useEffect } from "react";

function Login() {
  const { loginUser, backendError, isSubmitting, loginSuccess } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess) {
      navigate("/");
    }
  }, [loginSuccess, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());

    await loginUser(data);
  };
  return (
    <div className="w-svw h-svh bg-gray-800 py-20">
      <div className="bg-black w-[60%]  mx-auto p-10 rounded-lg shadow-gray-800 shadow-2xl">
        <SiteIcon />
        {backendError && (
          <p className="text-red-600 text-sm text-center">{backendError}</p>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between items-center gap-5"
        >
          <h1 className="font-bold text-3xl">Login to Your Account</h1>
          <div className="flex flex-col justify-between items-center gap-5">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
            ></Input>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            ></Input>
          </div>
          <div className="flex justify-between items-center">
            <p>
              Don't have an account?{" "}
              <Link className="text-blue-500 cursor-pointer" to="/register">
                Register
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-500 text-white px-5 py-2 rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
