"use client";

import { useState } from "react";
import css from "./BookingForm.module.css";

export default function CarBookingForm({ carId }: { carId: string }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    date: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("send booking:", { carId, ...values });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input placeholder="Name" />
      <input placeholder="Email" />
      <input type="date" placeholder="Booking date" />
      <textarea placeholder="Comment" />
      <button type="submit">Send</button>
    </form>
  );
}
