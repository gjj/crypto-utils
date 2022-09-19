import { Layout } from "antd";
import React from "react";
import Package from "../../../package.json";
import { NavbarSide } from "./NavbarSide";

const { Footer, Content } = Layout;

export const AppLayoutWrapper: React.FunctionComponent<{ component: React.FunctionComponent }> = ({
  component,
  ...propsForComponent
}) => {
  const Component = component;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <NavbarSide />
      <Layout>
        <Content style={{ margin: "24px 32px 0" }}>
          <Component {...propsForComponent} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <p data-cy="build-label">
            Build v{Package.version}-
            <a href="https://github.com/gjj" target="_blank" rel="noopener noreferrer">
              {process.env.REACT_APP_COMMIT_REF?.substring(0, 7)}
            </a>
          </p>
        </Footer>
      </Layout>
    </Layout>
  );
};
