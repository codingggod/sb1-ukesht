import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';

const Publication = ({ title, authors, date, abstract, link }: {
  title: string;
  authors: string;
  date: string;
  abstract: string;
  link: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{authors}</p>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700 mb-4">{abstract}</p>
      </div>
      <div className="ml-4">
        <a
          href={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Publications = () => {
  const publications = [
    {
      title: "Advancing Ethical AI: A Framework for Responsible Development",
      authors: "Dr. Sarah Chen, Dr. Michael Roberts, Dr. James Wilson",
      date: "February 2024",
      abstract: "This paper presents a comprehensive framework for ethical AI development, addressing key challenges in bias mitigation and fairness.",
      link: "#"
    },
    {
      title: "Neural Networks in Healthcare: A Systematic Review",
      authors: "Dr. Emily Johnson, Dr. David Kim",
      date: "January 2024",
      abstract: "A systematic review of neural network applications in healthcare, focusing on diagnostic accuracy and patient outcomes.",
      link: "#"
    },
    {
      title: "Federated Learning: Privacy-Preserving AI Training",
      authors: "Dr. Alex Thompson, Dr. Lisa Garcia",
      date: "December 2023",
      abstract: "An exploration of federated learning techniques for training AI models while maintaining data privacy and security.",
      link: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest research papers, articles, and findings in artificial intelligence.
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Publication key={index} {...pub} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Publications;