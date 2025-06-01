import { Input } from 'antd';

export default function SearchBar({ value, onChange }) {
  return (
    <Input
      value={value}
      style={{ width: 300 }}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search GitHub user"
      allowClear
    />
  );
}
