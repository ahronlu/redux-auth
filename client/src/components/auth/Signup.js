import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { signup } from "../../actions";

const Signup = ({ handleSubmit, history }) => {
  const dispatch = useDispatch();

  const { errorMessage } = useSelector((state) => state.auth);

  const onSubmit = (formProps) => {
    dispatch(
      signup(formProps, () => {
        history.push("/feature");
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{errorMessage && errorMessage}</div>
      <button>Sign Up!</button>
    </form>
  );
};

export default reduxForm({ form: "signup" })(Signup);
