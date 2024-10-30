import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Brain, Shield, Heart, Cpu, Network, Lock } from 'lucide-react';

const Project = ({ icon: Icon, title, description, status, progress }: {
  icon: any;
  title: string;
  description: string;
  status: string;
  progress: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="flex items-start space-x-4">
      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Status: <span className="text-blue-600">{status}</span></span>
            <span className="text-gray-500">{progress}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      icon: Brain,
      title: "Neural Network Optimization",
      description: "Developing more efficient neural network architectures for edge computing applications.",
      status: "In Progress",
      progress: 75
    },
    {
      icon: Shield,
      title: "AI Security Framework",
      description: "Building comprehensive security protocols for AI systems in production environments.",
      status: "Planning",
      progress: 30
    },
    {
      icon: Heart,
      title: "Healthcare AI Assistant",
      description: "Creating an AI assistant for healthcare professionals to improve patient care.",
      status: "Testing",
      progress: 90
    },
    {
      icon: Cpu,
      title: "Edge AI Deployment",
      description: "Optimizing AI models for efficient deployment on edge devices.",
      status: "Development",
      progress: 60
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Active Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our ongoing research projects and innovations in artificial intelligence.
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Project key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;