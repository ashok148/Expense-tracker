import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useActionData, Form, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import styles from "./../../app/style.css";
const { Title, Paragraph,Text } = Typography;

export async function loginUser(email, password) {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post("http://localhost:4000/api/user/login",
      email,
      password,
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
  const email = form.get("email");
  const password = form.get("password");
  switch (request.method) {
    case "POST": {
      const userData = await loginUser({ email, password });
      return userData;
    }
    default:
      return "invalid login form data";
  }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Login() {
  const actionData = useActionData();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = actionData?.mydata?.user._id;
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (userId == undefined) {
      return navigate("/login");
    } else {
      dispatch({ type: "login" });
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
    <div className='main-user'>
      {actionData?.mydata?.message ? (
        <Alert message={actionData?.mydata?.message} type="success" />
      ) : null}
      {actionData?.error?.message ? (
        <Alert message="Please provide a valid email address and password." type="error" />
      ) : null}

      <div className="main-user-component">
        <div className="main-component login">
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
            Login
          </Title>
          <Form method="POST">
            <Row gutter={[16, 16]}>
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
             <Row>
              <Col span={16}>
              {actionData?.formErrors?.password ? (
                  <Text type="danger">
                    {actionData?.formErrors?.password}
                  </Text>
                ) : null}
              </Col>
              <Col span={8} align="right">
              <Paragraph strong>
                    <Button type="link" href="/password/forgot" style={{padding:0}}>Forgot Your Password</Button>
                  </Paragraph>
              </Col>
             </Row>
            
               

              </Col>
              <Col span={24}>
                <Button type="primary" htmlType="submit" size="large">Login</Button>
              </Col>
              <Col span={24}>
                  <Paragraph strong>
                    Don't have an account?
                    <Button type="link" href="/">Sign Up</Button>
                  </Paragraph>
                 
                </Col>
             
             
            </Row>
          </Form>
        </div>
      </div>
    </div>
  )
}
