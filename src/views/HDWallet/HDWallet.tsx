import { Col, Row, Typography, Form, Button, Input, Card } from "antd";
import { ethers } from "ethers";
import React, { useState } from "react";
import { RoundedCard } from "../../components/Shared/RoundedCard";
import { AppLayoutWrapper } from "../../components/UI/AppLayoutWrapper";

const { Title } = Typography;
const { TextArea } = Input;

interface DecryptFormFields {
  extendedKey?: string;
  path?: string;
}

const HDWallet: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const [address, setAddress] = useState("");

  const onFinish = (values: DecryptFormFields): void => {
    if (values?.extendedKey && values?.path) {
      const hdnode = ethers.utils.HDNode.fromExtendedKey(values?.extendedKey);
      setAddress(hdnode.derivePath(values?.path).address);
    }
  };

  return (
    <>
      <Row>
        <Col md={24}>
          <Title data-cy="home-title" level={3}>
            HD Wallet Derivation
          </Title>
        </Col>
      </Row>
      <Row>
        <Col md={24}>
          <RoundedCard>
            <Row>
              <Col md={14}>
                <Title
                  level={4}
                  style={{
                    paddingBottom: "8px",
                  }}
                >
                  Decrypt Wallet
                </Title>

                <Row>
                  <Col span={12} style={{ paddingRight: 16 }}>
                    {" "}
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                      <Form.Item
                        label="Extended Key"
                        name="extendedKey"
                        rules={[{ required: true, message: "This field is required" }]}
                      >
                        <TextArea
                          rows={6}
                          placeholder='Should look like xpub661MyMwAqRbcEmZuXRjDmQo99aryPSv37cEF8AMLhHyVrWMub4N4TYeQewPMjWGhEetfkxkfw4MTjS1VQQZQpgsxkLE9FbwJvRi6YL7JKRK'
                        />
                      </Form.Item>
                      <Form.Item
                        label="Path"
                        name="path"
                        rules={[{ required: true, message: "This field is required" }]}
                      >
                        <Input placeholder="Derivation path, e.g. m" />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" size="large">
                          Decrypt
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={12}>
                    <Card title="Derived Public Key" bordered={false} style={{ width: 300 }}>
                      <p>{address}</p>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </RoundedCard>
        </Col>
      </Row>
    </>
  );
};

export const HDWalletPage: React.FunctionComponent = () => {
  return <AppLayoutWrapper component={HDWallet} />;
};
