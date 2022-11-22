import styled from "@emotion/styled";
import { Col, Layout, Menu, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.2);
`;

export const NavbarSide: React.FunctionComponent = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Logo />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
        <Menu.Item data-cy="navbar-home" key="/home">
          <Link to="/home">
            <Row>
              <Col>Home</Col>
            </Row>
          </Link>
        </Menu.Item>
        <Menu.Item data-cy="navbar-eth-signer" key="/eth-signer">
          <Link to="/eth-signer">
            <Row>
              <Col>Ethereum Signer</Col>
            </Row>
          </Link>
        </Menu.Item>
        <Menu.Item data-cy="navbar-hd" key="/hd">
          <Link to="/eth-signer">
            <Row>
              <Col>HD Wallet</Col>
            </Row>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
