import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ollipekkanikka@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-2 w-fit mx-auto">
      <div className="flex space-x-2">
        <input
          {...register("name")}
          placeholder="Name"
          className="contactInput"
          type="text"
        />
        <input
          {...register("email")}
          placeholder="Email"
          className="contactInput"
          type="email"
        />
      </div>

      <input
        {...register("subject")}
        placeholder="Subject"
        className="contactInput"
        type="text"
      />

      <textarea
        {...register("message")}
        placeholder="Message"
        className="contactInput"
      />
      <button
        type="submit"
        className="bg-[#F7AB0A] py-5 px-10 rounded-md text-back font-bold text-lg">
        Submit
      </button>
    </form>
  );
}
