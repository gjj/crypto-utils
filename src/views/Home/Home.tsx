import { Col, Row, Typography, Form, Button, Input, Card } from "antd";
import React, { useState } from "react";
// import * as SJCL from "sjcl";
import { RoundedCard } from "../../components/Shared/RoundedCard";
import { AppLayoutWrapper } from "../../components/UI/AppLayoutWrapper";

const { Title } = Typography;
const { TextArea } = Input;

interface DecryptFormFields {
  privateKey?: string;
  password?: string;
}

const Home: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  const [privateKey, setPrivateKey] = useState("");

  const onFinish = (values: DecryptFormFields): void => {
    if (values?.privateKey && values?.password) {
      console.log(JSON.parse(values.privateKey));
      // const result = SJCL.decrypt(values?.password, values.privateKey);
      // setPrivateKey(result);
      setPrivateKey("");
    }
  };

  return (
    <>
      <Row>
        <Col md={24}>
          <Title data-cy="home-title" level={3}>
            Home
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
                        label="Encrypted Private Key"
                        name="privateKey"
                        rules={[{ required: true, message: "This field is required" }]}
                      >
                        <TextArea
                          rows={6}
                          placeholder='Should look like {"iv":"XXXXXXXX==","v":1,"iter":10000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"abcdefGH=","ct":"XXXXX"}'
                        />
                      </Form.Item>
                      <Form.Item
                        label="Encryption Password"
                        name="password"
                        rules={[{ required: true, message: "This field is required" }]}
                      >
                        <Input.Password placeholder="Your password used to encrypt the above private key." />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" size="large">
                          Decrypt
                        </Button>
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={12}>
                    <Card title="Decrypted Private Key" bordered={false} style={{ width: 300 }}>
                      <p>{privateKey}</p>
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

export const HomePage: React.FunctionComponent = () => {
  return <AppLayoutWrapper component={Home} />;
};
