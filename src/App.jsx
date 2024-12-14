import { Layout } from "antd";
import "./App.css";
import { Content, Footer, Header } from "antd/es/layout/layout";
import UserList from "./components/userList";

function App() {
  return (
    <Layout>
      <Header style={{ color: "white", textAlign: "center", fontSize: "24px" }}>
        User List Application
      </Header>
      <Content
        style={{ padding: "50px", display: "flex", justifyContent: "center" }}
      >
        <UserList />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        All rights do not reserved. Do whatever you want
      </Footer>
    </Layout>
  );
}

export default App;
