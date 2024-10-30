import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of AI technology through groundbreaking research and development."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together with industry leaders and academic institutions to advance AI capabilities."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining the highest standards in research, development, and ethical considerations."
    },
    {
      icon: Lightbulb,
      title: "Impact",
      description: "Creating meaningful change through practical applications of AI technology."
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About AI Hub</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading the way in AI research and implementation to create a better future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At AI Hub, we're dedicated to advancing the field of artificial intelligence through innovative research and practical applications. Our mission is to bridge the gap between academic research and real-world implementation, ensuring that AI technology benefits society as a whole.
              </p>
              <p className="text-gray-600">
                We collaborate with leading institutions and organizations worldwide to develop responsible AI solutions that address complex challenges across various industries.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                alt="AI Research"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;