
import React from 'react';
import {
  ServicesContainer,
  ServicesGrid,
  ServiceCard,
  ServiceTitle,
  ServiceDescription,
} from '../styles/ServicesStyles';

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Our AI Solutions</h2>
      <ServicesGrid>
        <ServiceCard>
          <ServiceTitle>AI Consulting</ServiceTitle>
          <ServiceDescription>
            We provide expert AI consulting services to help you understand how artificial intelligence can benefit your business. Our team will guide you through the process of integrating AI solutions into your operations.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Custom AI Development</ServiceTitle>
          <ServiceDescription>
            Our team of developers specializes in creating custom AI solutions tailored to your specific needs. From machine learning models to natural language processing, we build the tools you need to succeed.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>AI-Driven Automation</ServiceTitle>
          <ServiceDescription>
            Automate your business processes with our AI-driven automation services. We help you streamline operations, reduce costs, and improve efficiency through intelligent automation.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Data Analytics</ServiceTitle>
          <ServiceDescription>
            Unlock the power of your data with our advanced analytics services. Our AI-powered tools provide deep insights into your business, helping you make informed decisions based on real-time data.
          </ServiceDescription>
        </ServiceCard>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;

