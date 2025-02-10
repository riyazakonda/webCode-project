import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signupWithEmail, googleLogin, facebookLogin, githubLogin } =
    useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signupWithEmail(data.email, data.password);
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, register me!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Registration successfully!",
            text: "Provide Your Email and Password to Login",
            icon: "success",
          });
        }
        navigate("/");
      });
    } catch (error) {
      console.log("Reagistration to Failed", error.message);
    }
  };

  // google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      Swal.fire({
        title: "Login successful",
        icon: "success",
        draggable: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  const heandleFacebook = async () => {
    try {
      await facebookLogin();
      navigate("/");
    } catch (error) {
      console.log("facebook falied", error.message);
    }
  };

  // github login
  const heandleGitHub = async () => {
    try {
      await githubLogin();
      navigate("/");
    } catch (error) {
      console.log("github to failed", error.message);
    }
  };
  return (
    <div className="flex justify-center items-center p-5 bg-gray-100 min-h-screen">
      <div className="w-full max-w-md  p-8 space-y-6 bg-white shadow-lg rounded-lg ">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Please Register
        </h2>
        {/* registetion  */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: Text,
                  message: "Invalid name address",
                },
              })}
              type="text"
              className={`w-full px-4 py-2 border-2 border-blue-400 rounded-md focus:outline-none focus:right-2`}
            />
            {errors.name && (
              <p className="text-sm text-red-600 italic mt-2">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              className={`w-full px-4 py-2 border-2 border-blue-400 rounded-md focus:outline-none focus:right-2`}
            />
            {errors.email && (
              <p className="text-sm text-red-600 italic mt-2">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at last 6 character",
                },
              })}
              type="password"
              className={`w-full px-4 py-2 border-2 border-blue-400 rounded-md focus:outline-none focus:right-2`}
            />
            {errors.password && (
              <p className="text-sm text-red-600 italic mt-2">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 rounded-md hover:bg-blue-600 py-2 w-full "
          >
            Sign Up
          </button>
        </form>

        {/* social login */}
        <div className="text-center space-y-4">
          <p className="text-gray-600">Or Sign-up</p>

          <div className="flex flex-col sm:flex-row justify-center  gap-4 ">
            <button
              onClick={handleGoogleLogin}
              className="flex  w-full items-center  px-4 py-2 space-x-2 hover:bg-red-500 text-white bg-red-600"
            >
              <FaGoogle></FaGoogle>
              <span>Google</span>
            </button>
            <button
              onClick={heandleGitHub}
              className="flex w-full items-center  px-4 py-2 space-x-2 hover:bg-gray-800 text-white bg-gray-900"
            >
              <FaGithub></FaGithub>
              <span>GitHub</span>
            </button>
            <button
              onClick={heandleFacebook}
              className="flex w-full items-center  px-4 py-2 space-x-2 hover:bg-blue-500 text-white bg-blue-600"
            >
              <FaFacebook></FaFacebook>
              <span>Facebook</span>
            </button>
          </div>

          <h2 className="text-sm text-center text-gray-600">
            Have a account ? Please
            <Link to="/login" className="text-blue-400 pl-1 hover:underline">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Register;
