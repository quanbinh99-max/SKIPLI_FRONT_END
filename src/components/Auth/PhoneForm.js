import { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';
import { createNewAccessCode } from '../api/authApi';
import { formatPhone } from '../../utils';

const { Title } = Typography;

export default function PhoneForm({ onNext }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFinish = async () => {
    setLoading(true);
    try {
      await createNewAccessCode(phoneNumber);
      onNext(phoneNumber);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      style={{ maxWidth: 400, margin: '40px auto', padding: '24px' }}
    >
      <Title level={3} style={{ textAlign: 'center' }}>
        Verify Your Phone
      </Title>
      <Form layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: 'Please enter your phone number' },
          ]}
        >
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(formatPhone(e.target.value))}
            placeholder="Enter your phone number"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            Send Code
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
