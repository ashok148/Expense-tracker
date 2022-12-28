import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useActionData, Form, NavLink } from "@remix-run/react";
import { useState } from 'react';
import axios from "axios";
import styles from "~/style.css";
import { validateEmail } from '../validation';
const { Title, Paragraph, Text } = Typography;

export async function resetPassword(email) {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post('http://localhost:4000/api/user/password/forgot',
      email,
      config)
    const mydata = await res?.data;
    return { mydata };
  } catch (error) {
    return { error }
  }

}

export async function action({ request }) {

  const form = await request.formData();
  const email = form.get("email")
  const formErrors = {
    email: validateEmail(email),
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors
    };

  switch (request.method) {
    case "POST": {
      return await resetPassword({ email })
    }
    default: return "invalid forgot password data"
  }

}

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}

export default function Forgot() {
  const actionData = useActionData();
  const [inputs, setInputs] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };


  return (
    <div className='main-user'>
      {actionData?.mydata?.message ? (
        <Alert type="success" message={actionData?.mydata?.message}/>
      ) : null}
      {actionData?.error?.message ?  (
        <Alert  type="error" message="Could not find any user for this account!"/>
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
            Forgot password
          </Title>
          <Text style={{ marginBottom: "15px" }}>
            Enter your registered email to reset your password.
          </Text>
          <Form method="POST" style={{ width: "100%" }}>
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
                  <Text type="danger">{actionData?.formErrors?.email}</Text>
                ) : null}
               </Col>
              <Col span={24}>
                <Button type="primary" htmlType="submit" size="large">Reset Password</Button>
              </Col>
              <Col span={24}>
                <Paragraph strong>
                  New here?
                  <Button type="link" href="/">Sign Up</Button>
                </Paragraph>
             </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>

  )
};