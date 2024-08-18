
import React from 'react';
import { AboutContainer, SectionTitle, AboutText } from '../styles/AboutStyles';

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>About Us</SectionTitle>
      <AboutText>
        At our AI-based company, we are committed to pushing the boundaries of technology and innovation. Our mission is to harness the power of artificial intelligence to deliver cutting-edge solutions that drive business success and transform industries.
      </AboutText>
      <AboutText>
        Founded in [Year], we have grown into a team of dedicated professionals with a shared passion for AI and technology. Our vision is to be a leader in the AI space, providing unparalleled expertise and innovative products that meet the needs of our clients around the world.
      </AboutText>
      <AboutText>
        Our team consists of experts from various fields, all united by a common goal: to make AI accessible and beneficial to businesses of all sizes. We believe in the transformative power of AI and are excited to be at the forefront of this revolution.
      </AboutText>
    </AboutContainer>
  );
};

export default About;


