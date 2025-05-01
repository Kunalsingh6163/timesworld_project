import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/features/authSlice";
import { AppDispatch, RootState } from "../../store/store";
import { SlSocialGoogle, SlSocialFacebook } from "react-icons/sl";
import { LuLinkedin } from "react-icons/lu";
import { FiTwitter } from "react-icons/fi";
import { useNavigate } from "react-router";

interface FormData {
  username: string;
  password: string;
}

interface FormErrors {
  username?: string;
  password?: string;
}

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector(
    (state: RootState) => state.auth
  );

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.username.trim()) errors.username = "Username is required";
    if (!formData.password.trim()) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      dispatch(login(formData));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-between bg-white px-8 md:px-16">
      <div className="w-full md:w-1/2 p-8 md:p-16 bg-white">
        <h2 className="text-[32px] font-[Noto-Sans] font-bold mb-2 leading-[42px] text-[#3d3d3d]">
          Sign In
        </h2>
        <p className="text-[16px] text-[#3d3d3d] font-bold leading-[26px] mb-6">
          New user?{" "}
          <a
            href="#"
            className="text-blue-600 font-[Noto-Sans] font-semibold hover:underline"
          >
            Create an account
          </a>
        </p>

        <form className="space-y-4 text-[#3d3d3d]" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username or email"
            name="username"
            required
            value={formData.username}
            onChange={handleChange}
            className="w-[280px] h-[48px] px-4 py-2 border-black border-2 text-[#3d3d3d]"
          />
          {formErrors.username && <p>{formErrors.username}</p>}
          <br></br>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-[280px] h-[48px] px-4 py-2 border-black border-2 text-[#3d3d3d]"
          />
          {formErrors.password && <p>{formErrors.password}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="keep-signed-in"
              className="mr-2 w-7 h-7 border-2 border-black bg-gray-200 focus:ring-0"
            />
            <label
              htmlFor="keep-signed-in"
              className="text-sm text-[#3D3D3D] font-semibold text-[16px] font-[Noto-Sans]"
            >
              Keep me signed in
            </label>
          </div>

          <button
            type="submit"
            className="w-[280px] h-[48px] px-4 py-2 border-black border-2  text-white  bg-[#3c3c3c] font-[Noto-Sans]"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6 w-[280px]">
          <hr className="flex-grow border-gray-300 border-2" />
          <span className="px-3 text-[#3d3d3d] font-bold text-[13px] font-[Noto-Sans]">
            Or Sign In with
          </span>
          <hr className="flex-grow border-gray-300 border-2" />
        </div>

        <div className="flex items-start justify-start gap-4 text-2xl text-gray-600  ">
          {[SlSocialGoogle, SlSocialFacebook, LuLinkedin, FiTwitter].map(
            (Icon, idx) => (
              <div
                key={idx}
                className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center"
              >
                <Icon className="cursor-pointer hover:text-blue-600" />
              </div>
            )
          )}
        </div>
      </div>

      <div className="hidden md:flex w-1/2 justify-end items-end">
        <img
          src="/loginSticker.svg"
          alt="login-sticker"
          width={400}
          height={609}
        />
      </div>
    </div>
  );
};

export default Login;
