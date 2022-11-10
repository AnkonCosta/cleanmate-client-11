import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../../src/assets/logo/clean.png";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, googleLogin, updateUserProfile, loading } =
    useContext(AuthContext);
  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="w-full md:max-w-screen-lg mx-auto bg-white h-96 flex justify-center items-center">
        <button className="btn loading btn-outline border border-green-600">
          loading....
        </button>
      </div>
    );
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        handleUpdateUserProfile(name, photoURL);
        Swal.fire("Congratulations!", "User created successfully.", "success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Congratulations!", "User created successfully.", "success");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  // updateUserProfile
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((result) => {})
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full md:max-w-screen-lg  bg-white mx-auto ">
      <section className="bg-gray-50  dark:bg-gray-900  py-12">
        <div className="flex flex-col items-center py-12  justify-center px-6  mx-auto  lg:py-0">
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
                Register your account!
              </h1>
              <form
                onSubmit={handleRegister}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Ankon Costa"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    id="photoURL"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="https://cornel-portfolio.netlify.app/ankon.png"
                    required
                  />
                </div>
                <div></div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="ankon@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
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
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <p
                  onClick={handleGoogleSignIn}
                  type="submit"
                  className="w-full btn bg-white hover:bg-white text-black border border-green-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <FaGoogle className="mr-5 text-xl" /> Login with Google
                </p>
                <button
                  type="submit"
                  className="w-full text-black border border-green-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account ?{" "}
                  <Link className="text-green-600  font-semibold" to="/login">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster></Toaster>
    </div>
  );
};

export default Register;
