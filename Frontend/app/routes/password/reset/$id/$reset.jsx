import { Col, Row, Input, Avatar, Alert, Button, Typography } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useActionData, Form, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "~/style.css";
import { validatePassword, validateComfirmPassword } from "~/routes/validation";
const { Title, Paragraph,Text } = Typography;

export async function changePassword(id, token, password, cpassword) {
  try {
    const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.post(
      `http://localhost:4000/api/user/password/reset/${id}/${token}`,
      {
        password,
        cpassword,
        config,
      }
    );
    const mydata = await res?.data;
    return { mydata };
  } catch (error) {
    return { error };
  }
}

export async function action({ request, params }) {
  const id = params.id;
  const token = params.reset;
  const form = await request.formData();
  const password = form.get("password");
  const cpassword = form.get("cpassword");
  const formErrors = {
    password: validatePassword(password),
    cpassword: validateComfirmPassword(password, cpassword),
  };
  if (Object.values(formErrors).some(Boolean))
    return {
      formErrors,
    };

  switch (request.method) {
    case "POST": {
      return await changePassword(id, token, password, cpassword)
    }
    default:
      return "invalid reset password data";
  }
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

function Reset() {
  const actionData = useActionData();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (actionData?.mydata?.message) {
      navigate("/login");
    }
  },[actionData?.mydata?.message]);

  return (
    <div className="main-user">
        {actionData?.mydata?.message ? (
          <Alert message={actionData?.mydata?.message} type="success"/>
              ) : null}
        {actionData?.error?.message ? (
          <Alert  message="Fail to reset password!" type="error"/>
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
            Reset Your Password
          </Title>
         <Form method="POST">
         <Row gutter={[16, 16]}>
            <Col span={24}>
            <Input
                name="password"
                placeholder="Enter New Password"
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
                placeholder="Confirm New Password"
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
                <Button type="primary" htmlType="submit" size="large">
                  Update Password</Button>  
            </Col>
            </Row>
         
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Reset;