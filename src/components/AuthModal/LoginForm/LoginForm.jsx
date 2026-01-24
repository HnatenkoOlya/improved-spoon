import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { auth } from "../../../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginForm({ onSuccess }) {
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  /*const onSubmit = (data) => {
    login(data);
    onSuccess();
  };*/

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      login({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName,
      });
      /*await updateProfile(userCredential.user, {
        displayName: data.name,
      });*/

      onSuccess();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("User not found. Please register first.");
          break;

        case "auth/wrong-password":
        case "auth/invalid-credential":
        case "auth/invalid-login-credentials":
          toast.error("Incorrect email or password");
          break;

        case "auth/too-many-requests":
          toast.error("Too many attempts. Please try again later.");
          break;

        default:
          toast.error("Login failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <p>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} validate={schema}>
        <input type="text" {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
export default LoginForm;
