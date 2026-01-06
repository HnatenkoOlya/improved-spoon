import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
  const onSubmit = (data) => {
    console.log("register data", data);
    onSuccess();
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
