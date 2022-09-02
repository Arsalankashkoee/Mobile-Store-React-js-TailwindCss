import { useFormik } from "formik";
import { Link, useLocation } from "react-router-dom";
import * as yup from "yup";
import Input from "../Common/Input";
import { signUpUser } from "../Services/signUpService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../Context/AuthProvider";
import queryString from "query-string";
import { useEffect } from "react";

const initialValues = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  passwordConfirm: "",
};

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is Required")
    .min(3, "Name length is not valid "),

  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is Required"),

  phoneNumber: yup
    .string()
    .matches(/^(\+98|0)?9\d{9}$/, "Invalid Phone Number")
    .required("Phone Number is Required")
    .nullable(),

  password: yup
    .string()
    .required("Password is Required")
    .matches(
      // eslint-disable-next-line no-useless-escape
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

  passwordConfirm: yup
    .string()
    .required("Password Confirmation is Required")
    .oneOf([yup.ref("password"), null], "Passwords must be match"),
});

const SignUpForm = () => {
  let navigate = useNavigate();

  // AuthProvider
  const setAuth = useAuthActions();
  const auth = useAuth();

  const location = useLocation();

  // queryString
  const parsed = queryString.parse(location.search);

  const redirect = parsed.redirect || "/";

  useEffect(() => {
    if (auth) navigate(`/${redirect}`, { replace: true });
  }, [auth, redirect]);

  // POST User's data
  const onSubmit = async (values) => {
    const userData = {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      password: values.password,
    };

    try {
      const { data } = await signUpUser(userData);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      toast.success("Registration was successfully");
      navigate(`/${redirect}`, { replace: true });
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      toast.error(`${error.response.data.message}`);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    //(yup)
    validationSchema,
    validateOnMount: true, //disable form-button
  });
  return (
    <div className="flex items-center justify-center">
      <form
        className="flex flex-col bg-white w-full md:w-1/2 lg:w-1/3  p-3 mt-5 rounded-lg shadow-lg border border-gray-300 "
        onSubmit={formik.handleSubmit}
      >
        <Input
          formik={formik}
          label="Name"
          name="name"
          placeholder="enter your name ..."
        />
        <Input
          formik={formik}
          label="Email"
          name="email"
          type="email"
          placeholder="enter your email ..."
        />
        <Input
          formik={formik}
          label="Phone Number"
          name="phoneNumber"
          type="text"
          placeholder="enter your phone number ..."
        />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
          placeholder="enter your password ..."
        />
        <Input
          formik={formik}
          label="Password Confirmation"
          name="passwordConfirm"
          type="password"
          placeholder="enter your password confirmation ..."
        />
        <button
          type="submit"
          className={
            formik.isValid
              ? "text-white bg-gradient-to-l from-purp to-viol w-full rounded-lg shadow-lg py-2 mt-9"
              : "text-white bg-gradient-to-l from-purp to-viol w-full rounded-lg shadow-lg py-2 mt-9 opacity-30"
          }
          disabled={!formik.isValid}
        >
          Sign up
        </button>
        <Link
          // to="/login"
          to={{ pathname: "/login", search: "redirect=checkout" }}
        >
          <p className="mt-3 hover:text-violet-700">
            Have you already registered on the site?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
