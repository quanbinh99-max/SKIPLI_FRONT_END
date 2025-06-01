import { Pagination, Select, Space } from 'antd';

const { Option } = Select;

export default function GithubPagination({ currentPage, perPage, onChangePage, onChangePerPage }) {
  return (
    <Space style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
      <Pagination
        current={currentPage}
        pageSize={perPage}
        onChange={onChangePage}
        showSizeChanger={false}
        simple
      />
      <Select value={perPage} onChange={onChangePerPage}>
        <Option value={10}>10 / page</Option>
        <Option value={30}>30 / page</Option>
        <Option value={50}>50 / page</Option>
      </Select>
    </Space>
  );
}
