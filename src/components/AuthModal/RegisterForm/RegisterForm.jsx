import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { auth } from "../../../firebase/firebase.js";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(90).required("Name is required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function RegisterForm({ onSuccess }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      await updateProfile(userCredential.user, {
        displayName: data.name,
      });
      login({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: data.name,
      });
      onSuccess();
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <div>
      <h2>Registration</h2>
      <p>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} validate={schema}>
        <input type="text" {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>
        <input type="text" {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default RegisterForm;
