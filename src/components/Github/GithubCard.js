import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';

export default function GithubCard({ user, liked, onLike }) {
  return (
    <div
      style={{ width: '500px', border: '1px solid #ccc', borderRadius: 8, padding: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
    >
      <div style={{ display: 'flex', width: '100%', alignItems: 'space', gap: 16 }}>
        <Avatar src={user.avatar_url} size={50} />
        <div>
          <p style={{ margin: 0, fontWeight: 'bold' }}>{user.login}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.html_url}
          </a>
        </div>
      </div>
      <Button
        type="text"
        icon={liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
        onClick={() => onLike(user.id)}
      />
    </div>
  );
}
