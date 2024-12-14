import { useSelector } from "react-redux";
import { selectUsers } from "../../redux/slices/userSlice";
import UserItem from "../userItem";
import { Col, Row } from "antd";

export default function UserList() {
  const users = useSelector(selectUsers);

  return (
    <Row gutter={[16, 16]}>
      {users.map((user) => (
        <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
          <UserItem user={user} />
        </Col>
      ))}
    </Row>
  );
}
