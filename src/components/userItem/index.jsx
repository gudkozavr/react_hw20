import { Card } from "antd";

export default function UserItem({ user }) {
  return (
    <Card title={user.name} bordered={false} style={{ width: "100%" }}>
      <p>{user.email}</p>
    </Card>
  );
}
