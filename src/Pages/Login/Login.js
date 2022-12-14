import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import logo from "../../../src/assets/logo/clean.png";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { logIn, googleLogin, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return (
      <div className="w-full md:max-w-screen-lg mx-auto bg-white h-96 flex justify-center items-center">
        <button className="btn loading btn-outline border border-green-600">
          loading....
        </button>
      </div>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logIn(email, password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);
        // // get jwt token
        fetch(`https://service-review-server-blush.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("serviceToken", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        setLoading(false);
        toast.error(errorMessage);
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;

        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full md:max-w-screen-lg mx-auto">
      <section className="bg-gray-50 py-12 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 mb-8 mx-auto  lg:py-0">
          <a
            href=" "
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
            CleanMate
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                onSubmit={handleLogin}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="????????????????????????"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href=" "
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <p
                  onClick={handleGoogleSignIn}
                  className="w-full btn bg-white hover:bg-white text-black border border-green-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <FaGoogle className="mr-5 text-xl" /> Login with Google
                </p>
                <button
                  type="submit"
                  className="w-full text-black border border-green-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <Link className="text-green-600 font-semibold" to="/register">
                    Register
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
