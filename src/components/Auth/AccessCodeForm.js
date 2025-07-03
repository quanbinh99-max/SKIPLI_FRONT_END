import { Button, Card, Form, Input, notification, Typography } from "antd";
import { useState } from "react";
import { savePhoneToLocalStorage } from "../../utils/storage";
import { validateAccessCode } from "../api/authApi";

const { Title } = Typography;

export default function AccessCodeForm({ phone, onSuccess }) {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const handleFinish = async () => {
    setLoading(true);
    try {
      await validateAccessCode(phone, code);
      savePhoneToLocalStorage(phone);
      onSuccess();
    } catch (error) {
      api.error({
        message: "Notification",
        description: error.message || "Something went wrong",
        duration: 0,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card style={{ maxWidth: 400, margin: "40px auto", padding: "24px" }}>
      <Title level={3} style={{ textAlign: "center" }}>
        Enter Access Code
      </Title>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Access Code"
          name="code"
          rules={[
            { required: true, message: "Please enter the access code" },
            { pattern: /^[0-9]{4,8}$/, message: "Invalid access code format" },
          ]}
        >
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Access Code"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            Verify
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </Card>
  );
}
