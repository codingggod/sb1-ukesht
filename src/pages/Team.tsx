import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

const TeamMember = ({ name, role, image, bio, linkedin }: {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <div className="aspect-w-1 aspect-h-1 mb-6">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
    <p className="text-blue-600 mb-4">{role}</p>
    <p className="text-gray-600 mb-4">{bio}</p>
    <div className="flex space-x-4">
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href={`mailto:${name.toLowerCase().replace(' ', '.')}@aihub.org`}
        className="text-gray-600 hover:text-blue-600"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  </motion.div>
);

const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Research Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      bio: "Leading AI researcher with over 15 years of experience in machine learning and ethical AI development.",
      linkedin: "#"
    },
    {
      name: "Dr. Michael Roberts",
      role: "Head of AI Ethics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      bio: "Specializes in AI governance and ethical frameworks for responsible AI development.",
      linkedin: "#"
    },
    {
      name: "Dr. Emily Johnson",
      role: "Senior Research Scientist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      bio: "Expert in neural networks and deep learning applications in healthcare.",
      linkedin: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the experts and innovators driving AI research and development at AI Hub.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Team;