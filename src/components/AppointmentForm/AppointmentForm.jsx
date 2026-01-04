import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(90).required("Name is required"),
  phone: Yup.string().min(2).max(11).required("Phone is required"),
  time: Yup.string().required("Time is required"),
  email: Yup.string()
    .email("Must be a valid email!")
    .required("Email is required"),
  comment: Yup.string().min(2).max(100).required("Comment is required"),
});

function AppointmentForm({ onSuccess, psychologist }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "+420",
      time: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    onSuccess();
  };

  return (
    <div>
      <h2>Make an appointment with a psychologists</h2>
      <p>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div>
        <p>Your psychologists: </p>
        <p>{psychologist.name}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} validate={schema}>
        <input type="text" {...register("name")} placeholder="Name" />
        <p>{errors.name?.message}</p>
        <input type="phone" {...register("phone")} placeholder="+420" />
        <p>{errors.phone?.message}</p>
        <select {...register("time")}>
          <option value="">Select time</option>
          <option value="09:00">09:00</option>
          <option value="09:30">09:30</option>
          <option value="10:00">10:00</option>
        </select>
        <p>{errors.time?.message}</p>
        <input type="text" {...register("email")} placeholder="Email" />
        <p>{errors.email?.message}</p>
        <input
          type="text"
          {...register("comment")}
          placeholder="Comment + date"
        />
        <p>{errors.comment?.message}</p>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default AppointmentForm;
//<img src={psychologist.avatar_url} alt={psychologist.name} />
