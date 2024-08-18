
import React from 'react';
import {
  HeroSection,
  HeroText,
  CTAButton,
  OverviewSection,
  OverviewText,
  ServicesSection,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
  TestimonialsSection,
  Testimonial,
  TestimonialText,
  CTASection,
  CTAText,
  CTAButtonLarge,
} from '../styles/HomeStyles';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroText>Innovating the Future with AI</HeroText>
        <CTAButton to="/services">Explore Our Services</CTAButton>
      </HeroSection>

      {/* Company Overview Section */}
      <OverviewSection>
        <OverviewText>
          Our company is a leader in AI solutions, offering cutting-edge technologies to transform businesses across various industries. We are committed to driving innovation and delivering exceptional value to our clients.
        </OverviewText>
      </OverviewSection>

      {/* Key Services Section */}
      <ServicesSection>
        <ServiceCard>
          <ServiceTitle>AI Consulting</ServiceTitle>
          <ServiceDescription>Expert advice to harness the power of AI and achieve your business goals.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Custom AI Solutions</ServiceTitle>
          <ServiceDescription>Tailored AI solutions designed to address your specific business challenges.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Data Analytics</ServiceTitle>
          <ServiceDescription>Advanced data analysis to gain insights and make informed decisions.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>AI-Driven Automation</ServiceTitle>
          <ServiceDescription> AI to benefit from the enhanced performance and productivity contributions </ServiceDescription>
        </ServiceCard>
      </ServicesSection>

      {/* Client Testimonials Section */}
      <TestimonialsSection>
        <Testimonial>
          <TestimonialText>"This AI company revolutionized our operations with their innovative solutions. Highly recommended!" - Client A</TestimonialText>
        </Testimonial>
        <Testimonial>
          <TestimonialText>"Their expertise in AI is unmatched. Our productivity has soared since implementing their systems." - Client B</TestimonialText>
        </Testimonial>
      </TestimonialsSection>

      {/* Call to Action Section */}
      <CTASection>
        <CTAText>Ready to take your business to the next level with AI?</CTAText>
        <CTAButtonLarge to="/contact">Contact Us Today</CTAButtonLarge>
      </CTASection>
    </>
  );
};

export default Home;
