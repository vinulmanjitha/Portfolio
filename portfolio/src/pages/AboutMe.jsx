import React from "react";
import { Typography, Row, Col, Divider, Tag } from "antd";

const { Title, Paragraph, Text } = Typography;

const AboutMe = () => {
  return (
    <section
      style={{ maxWidth: 1000, margin: "0 auto", padding: "2rem" }}
      id="aboutMe"
    >
      <Typography>
        {/* Who I Am Section */}
        <Title level={2}>Who I Am</Title>
        <Paragraph>
          I'm a Full Stack Software Engineer with experience in building
          scalable applications using React, Angular, Spring Boot, and Oracle.
          At Sampath Bank IT Solutions, I've worked on key systems like the
          Trade Portal and Credit Approval System, improving workflows and
          system efficiency. With a B.Sc. (Hons) in Computer Science from the
          University of Sri Jayewardenepura, I bring strong technical skills and
          a passion for innovative projects—from real-time AI apps to machine
          learning in music. I'm a fast learner, team player, and always eager
          to grow professionally. I specialize in developing back-end systems
          using <Text strong>Spring Boot</Text>, and crafting interactive UIs
          with <Text strong>React</Text> and <Text strong>Angular</Text>. My
          experience includes secure authentication with{" "}
          <Text strong>JWT & Spring Security</Text>, and managing data with{" "}
          <Text strong>Oracle DB</Text>.
        </Paragraph>
        <Divider />
      </Typography>
    </section>
  );
};

export default AboutMe;
