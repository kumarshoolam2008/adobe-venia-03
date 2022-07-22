import React from 'react';
import { useForm } from "react-hook-form";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    reset();
  };

  return (
    <div className="signup">
      <div className="container">
        <h4 className="">Create an Account</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="col-form-label">First Name</div>
            <input
              type="text"
              className={`form-control ${errors.name && "invalid"}`}
              {...register("fname", { required: "Is Required" })}
              onKeyUp={() => {
                trigger("fname");
              }}
            />
            {errors.fname && (
              <small className="text-danger">{errors.fname.message}</small>
            )}
          </div>
          <div className="form-group">
            <div className="col-form-label">Last Name</div>
            <input
              type="text"
              className={`form-control ${errors.lname && "invalid"}`}
              {...register("lname", {
                required: "Is Required"
              })}
              onKeyUp={() => {
                trigger("lname");
              }}
            />
            {errors.lname && (
              <small className="text-danger">{errors.lname.message}</small>
            )}
          </div>
          <div className="form-group">
            <div className="col-form-label">Email Address</div>
            <input
              type="text"
              className={`form-control ${errors.email && "invalid"}`}
              {...register("email", {
                required: "Is Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid Email address",
                }
              })}
              onKeyUp={() => {
                trigger("email");
              }}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </div>
          <div className="form-group">
            <div className="col-form-label">Password</div>
            <input
              type="password"
              className={`form-control ${errors.password1 && "invalid"}`}
              {...register("password1", {
                required: "Is Required"
              })}
              onKeyUp={() => {
                trigger("password1");
              }}
            />
            {errors.lname && (
              <small className="text-danger">{errors.password1.message}</small>
            )}
          </div>
          <div className='button-section'>
          <input
            type="submit"
            className="button-primary"
            value="Sign In"
          />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
