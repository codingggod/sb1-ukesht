import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Book, Video, FileText, Download, ExternalLink } from 'lucide-react';

const ResourceCard = ({ icon: Icon, title, description, type, link }: {
  icon: any;
  title: string;
  description: string;
  type: string;
  link: string;
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
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
            <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-2">
              {type}
            </span>
          </div>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            {type === 'Download' ? <Download className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
          </a>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </motion.div>
);

const Resources = () => {
  const resources = [
    {
      icon: Book,
      title: "AI Implementation Guide",
      description: "Comprehensive guide for implementing AI solutions in enterprise environments.",
      type: "Guide",
      link: "#"
    },
    {
      icon: Video,
      title: "AI Ethics Workshop",
      description: "Recorded workshop on ethical considerations in AI development.",
      type: "Video",
      link: "#"
    },
    {
      icon: FileText,
      title: "Research Papers Collection",
      description: "Collection of our latest research papers and findings.",
      type: "Download",
      link: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our collection of guides, tutorials, and research materials to enhance your AI knowledge.
            </p>
          </div>

          <div className="space-y-6">
            {resources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resources;