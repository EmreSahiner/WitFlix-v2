import { faSleigh } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 100vw;
`;

const Form = styled.form`
  width: 30vw;
  margin: auto;
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid white;
  font-size: 1.3rem;
`;

const Input = styled.input`
  display: block;
  padding: 0.5rem;
  width: 90%;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  font-size: 1.5rem;
`;

const CheckBox = styled(Input)`
  display: inline-block;
  width: inherit;
  transform: scale(2);
  margin-right: 1rem;
`;

const Error = styled.p`
  color: red;
`;

const initialValues = {
  name: "",
  email: "",
  terms: false,
};

const errorMessages = {
  name: "En az dört karakter giriniz.",
  email: "Geçerli bir email adresi giriniz",
  terms: "Kayıt olabilmek için anlaşma şartlarını kabul ediniz.",
};

function Register({ addUser }) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (
      formData.name.trim().length >= 4 &&
      validateEmail(formData.email) &&
      formData.terms
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    value = type == "checkbox" ? checked : value;

    if (name == "name") {
      if (value.trim().length >= 4) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name == "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name == "terms") {
      if (value) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    axios.post("https://reqres.in/api/users", formData).then((response) => {
      addUser({
        ...response.data,
        ["avatar"]: `https://picsum.photos/300?${response.data.id}`,
      });
      setFormData(initialValues);
      history.push("/welcome");
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <Input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <Error>{errors.name && errorMessages.name}</Error>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Input
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Error>{errors.email && errorMessages.email}</Error>
        </div>
        <div>
          <CheckBox
            name="terms"
            id="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleChange}
          />{" "}
          <label htmlFor="terms">
            Please do not email me Netflix special offers.
          </label>
          <Error>{errors.terms && errorMessages.terms}</Error>
        </div>
        <button disabled={!isValid}>Register</button>
      </Form>
    </FormContainer>
  );
}

export default Register;
