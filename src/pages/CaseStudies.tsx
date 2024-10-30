import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CaseStudy = ({ title, company, industry, challenge, solution, results, image }: {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
  >
    <div className="aspect-w-16 aspect-h-9">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600">{company} | {industry}</p>
        </div>
        <button className="text-blue-600 hover:text-blue-700">
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Challenge</h4>
          <p className="text-gray-600">{challenge}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Solution</h4>
          <p className="text-gray-600">{solution}</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Key Results</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </motion.div>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "AI-Powered Healthcare Diagnostics",
      company: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Improving early disease detection accuracy while reducing diagnostic time.",
      solution: "Implemented deep learning models for medical image analysis with real-time processing capabilities.",
      results: [
        "93% improvement in diagnostic accuracy",
        "60% reduction in processing time",
        "Successful deployment across 50+ hospitals"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070"
    },
    {
      title: "Smart Manufacturing Optimization",
      company: "IndustrialTech Corp",
      industry: "Manufacturing",
      challenge: "Reducing production downtime and optimizing resource allocation.",
      solution: "Developed predictive maintenance system using IoT sensors and machine learning algorithms.",
      results: [
        "45% reduction in unplanned downtime",
        "30% improvement in resource efficiency",
        "$2M annual cost savings"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Studies</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our AI solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudy key={index} {...study} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CaseStudies;