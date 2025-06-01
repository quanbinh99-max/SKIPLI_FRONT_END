import { useState } from 'react';
import PhoneForm from '../components/Auth/PhoneForm.js';
import AccessCodeForm from '../components/Auth/AccessCodeForm.js';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const onAuthSuccess = () => {
    navigate('/search');
  };
  return (
    <div>
      {!phone ? (
        <PhoneForm onNext={setPhone} />
      ) : (
        <AccessCodeForm phone={phone} onSuccess={onAuthSuccess} />
      )}
    </div>
  );
}
