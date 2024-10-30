import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase } from 'lucide-react';

const JobCard = ({ title, location, type, description, requirements }: {
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <div className="flex space-x-4 mb-4">
      <div className="flex items-center text-gray-600">
        <MapPin className="w-4 h-4 mr-1" />
        {location}
      </div>
      <div className="flex items-center text-gray-600">
        <Clock className="w-4 h-4 mr-1" />
        {type}
      </div>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mb-4">
      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors">
      Apply Now
    </button>
  </motion.div>
);

const Careers = () => {
  const jobs = [
    {
      title: "Senior AI Research Scientist",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our research team to develop cutting-edge AI solutions for real-world applications.",
      requirements: [
        "Ph.D. in Computer Science, AI, or related field",
        "5+ years of experience in machine learning research",
        "Strong publication record in top-tier conferences",
        "Experience with PyTorch or TensorFlow"
      ]
    },
    {
      title: "AI Ethics Researcher",
      location: "Remote",
      type: "Full-time",
      description: "Help shape the future of responsible AI development through research and policy recommendations.",
      requirements: [
        "Advanced degree in Ethics, Philosophy, or Computer Science",
        "3+ years of experience in AI ethics research",
        "Strong understanding of AI/ML technologies",
        "Excellent communication skills"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Help shape the future of AI technology by joining our diverse and innovative team.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
              ))}
            </div>
          </div><boltAction type="file" filePath="src/pages/Privacy.tsx">import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your data.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Shield className="w-6 h-6 mr-2 text-blue-600" />
                  Data Collection
                </h2>
                <p>
                  We collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Professional information (company, role, industry)</li>
                  <li>Usage data and preferences</li>
                  <li>Communication history</li>
                </ul>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Lock className="w-6 h-6 mr-2 text-blue-600" />
                  Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Eye className="w-6 h-6 mr-2 text-blue-600" />
                  Data Usage
                </h2>
                <p>
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Providing and improving our services</li>
                  <li>Communicating about products and updates</li>
                  <li>Research and analytics</li>
                  <li>Legal compliance</li>
                </ul>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Database className="w-6 h-6 mr-2 text-blue-600" />
                  Your Rights
                </h2>
                <p>
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Right to access your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Privacy;