import { useState } from 'react';
import { Layout, Typography, Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import ProfileModal from './ProfileModal';
import SearchBar from '../Github/SearchBar';

const { Header } = Layout;
const { Title } = Typography;

export default function Navbar({ likedIds, query, setQuery }) {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <Header
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          marginBottom: 16,
        }}
      >
        <Title level={3} style={{ margin: 0 }}>
          Github Explorer
        </Title>
        <SearchBar value={query} onChange={setQuery} />
        <Button
          shape="circle"
          icon={<UserOutlined />}
          onClick={() => setShowProfile(true)}
        />
      </Header>

      <Modal
        open={showProfile}
        onCancel={() => setShowProfile(false)}
        footer={null}
        title="Liked Profiles"
      >
        <ProfileModal likedIds={likedIds} />
      </Modal>
    </>
  );
}
