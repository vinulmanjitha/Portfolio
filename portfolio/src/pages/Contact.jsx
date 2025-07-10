import React from "react";
import { Typography, Button } from "antd";
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Contact = () => {
  return (
      <section className="contact-section" id="contact" style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}>
        <Title level={2}>Contact Info</Title>
        <div style={{ fontSize: "16px", lineHeight: 2 }}>
          <p>
            <UserOutlined style={{ marginRight: 8 }} />
            <Text strong>Name:</Text> Vinul Lewangama
          </p>
          <p>
            <MailOutlined style={{ marginRight: 8 }} />
            <Text strong>Email:</Text> vinul@example.com
          </p>
          <p>
            <EnvironmentOutlined style={{ marginRight: 8 }} />
            <Text strong>Location:</Text> Sri Lanka
          </p>
          <p>
            <PhoneOutlined style={{ marginRight: 8 }} />
            <Text strong>Phone:</Text> +94 77 123 4567
          </p>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            href="/path-to-your-cv.pdf"
            download
            style={{ marginTop: "1rem" }}
          >
            Download CV
          </Button>
        </div>
      </section>
  );
};

export default Contact;
