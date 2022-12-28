import { useState, useEffect } from "react";
import { useActionData, Form, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import styles from "./../../app/style.css";
import {
  validatefirst,
  validatelast,
  validateEmail,
  validatePassword,
  validateComfirmPassword,
} from "./validation";
import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd';
import { UserOutlined} from '@ant-design/icons';
const { Title, Paragraph,Text } = Typography;
export async function createUser(
  firstname,
  lastname,
  email,
  password,
  cpassword
) {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post(
      "http://localhost:4000/api/user/signup",
      firstname,
      lastname,
      email,
      password,
      cpassword,
      config
    );
    const mydata = await res?.data;
    return { mydata };
  } catch (error) {
    return { error };
  }
}

export async function action({ request }) {
  const form = await request.formData();
  const firstname = form.get("firstname");
  const lastname = form.get("lastname");
  const email = form.get("email");
  const password = form.get("password");
  const cpassword = form.get("cpassword");

  const formErrors = {
    firstname: validatefirst(firstname),
    lastname: validatelast(lastname),
    email: validateEmail(email),
    password: validatePassword(password),
    cpassword: validateComfirmPassword(password, cpassword),
  };

  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors,
    };

  switch (request.method) {
    case "POST": {
      const userData = await createUser({
        firstname,
        lastname,
        email,
        password,
        cpassword,
      });
      return userData;
    }
    default:
      return "invalid form data";
  }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Signup() {
  const actionData = useActionData();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = actionData?.mydata?.user._id;
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  useEffect(() => {
    if (userId == undefined) {
      return navigate("/");
    } else {
      dispatch({ type: "login" })
      return navigate("/user/dashboard");
    }
  }, [dispatch, navigate, userId]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="main-user">
      {actionData?.mydata?.message ? (
        <Alert message={actionData?.mydata?.message} type="success"/>
      ) : null}
      {actionData?.error?.message ? (
        <Alert message="User Already Exits, Please login" type="error"/>
      ) : null}
      <div className="main-user-component">
      <div className="main-component">
        <Avatar
          style={{
            backgroundColor: "#9c27b0",
            verticalAlign: 'middle',
          }}
          size="large"
        >
          <UserOutlined size="large" />
        </Avatar>
        <Title level={2} style={{ marginTop: "10px" }}>
          Sign up
        </Title>
        <Form method="POST">
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Input
                name="firstname"
                placeholder="FirstName"
                required
                size="large"
                value={inputs.firstname}
                onChange={handleChange}
              />
              {actionData?.formErrors?.firstname ? (
                <Text type="danger">
                {actionData?.formErrors?.firstname}
                </Text>
                ) : null}
            </Col>
            <Col span={12}>
              <Input
                name="lastname"
                placeholder="lastName"
                required
                size="large"
                value={inputs.lastname}
                onChange={handleChange}
              />
              {actionData?.formErrors?.lastname ? (
                <Text type="danger">
                  {actionData?.formErrors?.lastname}
                </Text>
              ) : null}
            </Col>
            <Col span={24}>
              <Input
                name="email"
                placeholder="Email Address"
                required
                size="large"
                value={inputs.email}
                onChange={handleChange}
              />
              {actionData?.formErrors?.email ? (
                <Text type="danger">
                  {actionData?.formErrors?.email}
                </Text>
              ) : null}
            </Col>
            <Col span={24}>
              <Input
                name="password"
                placeholder="Password"
                required
                size="large"
                type="password"
                value={inputs.password}
                onChange={handleChange}
              />
              {actionData?.formErrors?.password ? (
                <Text type="danger">
                  {actionData?.formErrors?.password}
                </Text>
              ) : null}
            </Col>
            <Col span={24}>
              <Input
                name="cpassword"
                placeholder="Confirm Password"
                required
                type="password"
                size="large"
                value={inputs.cpassword}
                onChange={handleChange}
              />
              {actionData?.formErrors?.cpassword ? (
                <Text type="danger">
                  {actionData?.formErrors?.cpassword}
                </Text>
              ) : null}
            </Col>
            <Col span={24}>
              <Button type="primary" htmlType="submit" size="large">Sign Up</Button>
            </Col>
            <Col span={24}>
              <Paragraph strong>
                Already have an account?
                <Button type="link" href="/login">Sign In</Button>
              </Paragraph>
            </Col>
          </Row>
        </Form>
      </div>
      </div>
    </div>
  );
}
