import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Heading from "../../components/layout/Heading";

function Contact() {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [validSubmit, setValidSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmit(true);
    setError(null);
    try {
      setValidSubmit(data);
      console.log(data);
      reset();
    } catch (error) {
      setError(error.toString());
      console.log(error);
    }
  };

  return (
    <>
      <Heading>Fill in the form below to contact me</Heading>
      <form className="form_container" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: true, minLength: 5 })}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your name"
          />
          {errors.name && <div>Name must be longer then 5 letters</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          {errors.email && <div>Please enter a valid email address</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            What is on your mind?
          </label>
          <textarea
            type="text"
            placeholder="type it in here"
            {...register("description", { required: true })}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          {errors.description && <div>Please fill out the text area.</div>}
        </div>
        <div>
          <Button type="submit" variant="success">
            {submit ? "Sent" : "Send"}
          </Button>
        </div>
      </form>
      <div>{error && <p>Something went wrong. </p>}</div>
      <div>{validSubmit && <p className="text-center p-3">Form is submitted.</p>}</div>
    </>
  );
}

export default Contact;
