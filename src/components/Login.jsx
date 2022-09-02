import { useFormik } from "formik";
import { Link, useLocation } from "react-router-dom";
import * as yup from "yup";
import Input from "../Common/Input";
import { toast } from "react-toastify";
import { loginUser } from "../Services/loginService";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../Context/AuthProvider";
import queryString from "query-string";
import { useEffect } from "react";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is Required"),

  password: yup.string().required("Password is Required"),
});

const Login = () => {
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

  const onSubmit = async (values) => {
    try {
      const { data } = await loginUser(values);
      setAuth(data);
      // localStorage.setItem("authState", JSON.stringify(data));
      toast.success("Login was successfully");
      navigate(`/${redirect}`, { replace: true });
    } catch (error) {
      toast.error(`${error.response.data.message}`);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    //(yup)
    validationSchema,
    //disable form-button
    validateOnMount: true, 
  });

  return (
    <div className="flex items-center justify-center">
      <form
        className="flex flex-col bg-white w-full md:w-1/2 lg:w-1/3  p-3 mt-5 rounded-lg shadow-lg border border-gray-300 "
        onSubmit={formik.handleSubmit}
      >
        <Input
          formik={formik}
          label="Email"
          name="email"
          type="email"
          placeholder="enter your email ..."
        />

        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
          placeholder="enter your password ..."
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
          Login
        </button>
        <Link
          // to="/signUp"
          to={{ pathname: "/signUp", search: "redirect=checkout" }}
        >
          <p className="mt-3 hover:text-violet-700">
            Have you not registered on the site?
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
