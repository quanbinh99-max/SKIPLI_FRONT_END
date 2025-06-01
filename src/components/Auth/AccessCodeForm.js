import { useState } from 'react';
import { Form, Input, Button, Typography, Card, message } from 'antd';
import { savePhoneToLocalStorage } from '../../utils/storage';
import { validateAccessCode } from '../api/authApi';

const { Title } = Typography;

export default function AccessCodeForm({ phone, onSuccess }) {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFinish = async () => {
    setLoading(true);
    try {
      const isValid = await validateAccessCode(phone, code);
      if (isValid) {
        savePhoneToLocalStorage(phone);
        onSuccess();
      } else {
        message.error('Invalid code');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      style={{ maxWidth: 400, margin: '40px auto', padding: '24px' }}
    >
      <Title level={3} style={{ textAlign: 'center' }}>
        Enter Access Code
      </Title>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Access Code"
          name="code"
          rules={[
            { required: true, message: 'Please enter the access code' },
            { pattern: /^[0-9]{4,8}$/, message: 'Invalid access code format' },
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
    </Card>
  );
}
