import { Col, Row } from "antd";
import GithubCard from "./GithubCard";

export default function GithubList({ users, likedIds, onLike }) {
  if (users?.length === 0) return null;
  return (
    <Row gutter={[16, 16]}>
      {users?.map((user) => (
        <Col
          key={user.id}
          span={24}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <GithubCard
            user={user}
            liked={likedIds?.includes(user.id)}
            onLike={onLike}
          />
        </Col>
      ))}
    </Row>
  );
}
