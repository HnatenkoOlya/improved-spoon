import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import toast from "react-hot-toast";
import css from "./AppoinmentForm.module.css";

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(90).required("Name is required"),
  phone: Yup.string().min(2).max(11).required("Phone is required"),
  time: Yup.string().required("Time is required"),
  date: Yup.string().required("Date is required"),
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
      date: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log({
      ...data,
      psychologistId: psychologist.id,
      psychologistName: psychologist.name,
    });
    toast.success("Appointment successfully created!");
    onSuccess();
  };

  return (
    <div>
      <h2 className={css.modalTitle}>
        Make an appointment with a psychologists
      </h2>
      <p className={css.modalText}>
        You are on the verge of changing your life for the better. Fill out the
        short form below to book your personal appointment with a professional
        psychologist. We guarantee confidentiality and respect for your privacy.
      </p>
      <div className={css.psychologistInfo}>
        <img
          className={css.img}
          src={psychologist.avatar_url}
          alt={psychologist.name}
        />
        <p>Your psychologists: </p>
        <p>{psychologist.name}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} validate={schema}>
        <input
          type="text"
          {...register("name")}
          placeholder="Name"
          className={css.input}
        />
        <p className={css.inputError}>{errors.name?.message}</p>
        <div className={css.phoneDate}>
          <input
            type="phone"
            {...register("phone")}
            placeholder="+420"
            className={css.inputPhone}
          />
          <p className={css.inputError}>{errors.phone?.message}</p>
          <input type="date" {...register("date")} className={css.inputPhone} />
          <p className={css.inputError}>{errors.date?.message}</p>
        </div>
        <div className={css.phoneDate}>
          <select className={css.sortedSelect} {...register("time")}>
            <option value="">Select time</option>
            <option value="09:00" className={css.sortedOption}>
              09:00
            </option>
            <option value="10:00" className={css.sortedOption}>
              10:00
            </option>
            <option value="11:00" className={css.sortedOption}>
              11:00
            </option>
            <option value="12:00" className={css.sortedOption}>
              12:00
            </option>
          </select>
          <p className={css.inputError}>{errors.time?.message}</p>
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            className={css.inputPhone}
          />
          <p className={css.inputError}>{errors.email?.message}</p>
        </div>
        <input
          type="text"
          {...register("comment")}
          placeholder="Comment"
          className={css.input}
        />
        <p className={css.inputError}>{errors.comment?.message}</p>
        <button type="submit" className={css.loginBtn}>
          Send
        </button>
      </form>
    </div>
  );
}
export default AppointmentForm;
//<img src={psychologist.avatar_url} alt={psychologist.name} />
