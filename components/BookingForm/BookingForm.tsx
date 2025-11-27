"use client";

import css from "./BookingForm.module.css";
// import { DayPicker } from "react-day-picker";
// import "react-day-picker/dist/style.css";

type CarBookingFormProps = {
  carId: string;
};

export default function CarBookingForm({ carId }: CarBookingFormProps) {
  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const date = formData.get("date") as string;
    const comment = formData.get("comment") as string;

    console.log("Booking data:", { carId, name, email, date, comment });
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <div className={css.header}>
        <h3 className={css.title}>Book your car now</h3>
        <p className={css.text}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <div className={css.inputs}>
        <input name="name" placeholder="Name*" className={css.input} required />
        <input
          name="email"
          type="email"
          placeholder="Email*"
          className={css.input}
          required
        />
        <input
          type="text"
          placeholder="Booking date"
          className={css.input}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => (e.target.type = "text")}
        />
        <textarea
          name="comment"
          placeholder="Comment"
          className={css.textarea}
        />
      </div>
      <button type="submit" className={css.submitBtn}>
        Send
      </button>
    </form>
  );
}
