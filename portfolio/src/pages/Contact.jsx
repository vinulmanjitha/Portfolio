import React, { useRef } from "react";
import { Typography, Button, Form, Divider } from "antd";
import {
  DownloadOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import emailjs from "@emailjs/browser";
import resume from "../assets/images/Vinul_Lewangama _CV.pdf";
const { Title, Text } = Typography;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3ljd90e", "template_shcys1z", form.current, {
        publicKey: "h7tQE3XxESSksXT7g",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      className="contact-section"
      id="contact"
      style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}
    >
      <Title level={2}>Contact Info</Title>
      <div style={{ fontSize: "16px", lineHeight: 2 }}>
        <p>
          <UserOutlined style={{ marginRight: 8 }} />
          <Text strong>Name:</Text> Vinul Lewangama
        </p>
        <p>
          <MailOutlined style={{ marginRight: 8 }} />
          <Text strong>Email:</Text> vinulmanjitha98@gmail.com
        </p>
        <p>
          <EnvironmentOutlined style={{ marginRight: 8 }} />
          <Text strong>Location:</Text> Sri Lanka
        </p>
        <p>
          <PhoneOutlined style={{ marginRight: 8 }} />
          <Text strong>Phone:</Text> +94 76 637 2245
        </p>
        
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          href="https://drive.google.com/uc?export=download&id=1frCO5ljy0tJ8EyBqH6WaXC74HPfyY_Lw"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "1rem" }}
        >
          Download CV
        </Button>
        <Divider/>
      <Title level={4}>Reach Out</Title>
        <form ref={form} onSubmit={sendEmail} class="antd-form">
          <div class="form-item">
            <label for="name">Name</label>
            <input type="text" name="user_name" id="name" required />
          </div>

          <div class="form-item">
            <label for="email">Email</label>
            <input type="email" name="user_email" id="email" required />
          </div>

          <div class="form-item">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5" required></textarea>
          </div>

          <div class="form-item">
            <input type="submit" value="Send" class="antd-button" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
