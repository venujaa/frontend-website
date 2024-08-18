
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Hero Section
export const HeroSection = styled.section`
  height: 100vh;
  background: url('/path/to/your/image.jpg') no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: blue;
`;

export const HeroText = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const CTAButton = styled(Link)`
  padding: 0.8rem 2rem;
  background-color: var(--secondary-color);
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: darken(var(--secondary-color), 10%);
  }
`;

// Overview Section
export const OverviewSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
`;

export const OverviewText = styled.p`
  font-size: 1.2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

// Services Section
export const ServicesSection = styled.section`
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  background-color: white;
`;

export const ServiceCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Testimonials Section
export const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: gray;
`;

export const Testimonial = styled.div`
  background-color: white;
  padding: 2rem;
  margin: 1rem auto;
  border-radius: 8px;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #555;
`;

// Call to Action Section
export const CTASection = styled.section`
  padding: 4rem 2rem;
  background-color: var(--primary-color);
  text-align: center;
  color: white;
`;

export const CTAText = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const CTAButtonLarge = styled(Link)`
  padding: 1rem 2.5rem;
  background-color: var(--secondary-color);
  color: white;
  font-size: 1.5rem;
  border-radius: 5px;
  text-decoration: none;
`;
