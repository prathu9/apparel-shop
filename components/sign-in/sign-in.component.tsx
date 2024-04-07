"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPasword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormField] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormField({
      ...formFields,
      [name]: value,
    });
  };

  const logGoogleUser = async () => {
    try {
      await signInWithGooglePopup();
    } catch (err) {
      console.log(err);
    }
  };

  const resetFormFields = () => {
    setFormField(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPasword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Incorrect email or password");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
