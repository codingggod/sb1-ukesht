import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Brain, Shield, Heart, Cpu, Network, Lock } from 'lucide-react';

const ResearchArea = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Research = () => {
  const researchAreas = [
    {
      icon: Brain,
      title: "Machine Learning & Neural Networks",
      description: "Advancing the frontiers of deep learning and neural architectures for improved AI capabilities."
    },
    {
      icon: Heart,
      title: "Healthcare AI",
      description: "Developing AI solutions for medical diagnosis, treatment planning, and healthcare management."
    },
    {
      icon: Shield,
      title: "AI Ethics & Governance",
      description: "Establishing frameworks for responsible AI development and deployment."
    },
    {
      icon: Cpu,
      title: "Natural Language Processing",
      description: "Creating advanced systems for language understanding and generation."
    },
    {
      icon: Network,
      title: "Federated Learning",
      description: "Exploring distributed AI training while preserving data privacy."
    },
    {
      icon: Lock,
      title: "AI Security",
      description: "Developing robust systems against adversarial attacks and ensuring AI safety."
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exploring the frontiers of artificial intelligence through innovative research and practical applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <ResearchArea key={index} {...area} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Research;