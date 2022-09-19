import { Col, Row, Typography, Form, Button, Input } from "antd";
import * as BitGo from "bitgo";
import React from "react";
import { RoundedCard } from "../../components/Shared/RoundedCard";
import { AppLayoutWrapper } from "../../components/UI/AppLayoutWrapper";

const { Title } = Typography;
const { TextArea } = Input;

const Home: React.FunctionComponent = () => {
  const [form] = Form.useForm();
  console.log(form);
  const bitgo = new BitGo.BitGo({ env: "test" });
  console.log(bitgo);

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
                  <Col>
                    {" "}
                    <Form form={form} layout="vertical">
                      <Form.Item label="Encrypted Private Key">
                        <TextArea
                          rows={6}
                          placeholder='Should look like {"iv":"XXXXXXXX==","v":1,"iter":10000,"ks":256,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"abcdefGH=","ct":"XXXXX"}'
                        />
                      </Form.Item>
                      <Form.Item label="Encryption Password">
                        <Input.Password placeholder="Your password used to encrypt the above private key." />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary">Submit</Button>
                      </Form.Item>
                    </Form>
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
