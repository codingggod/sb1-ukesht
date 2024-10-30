import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Event = ({ title, date, location, time, description, speakers }: {
  title: string;
  date: string;
  location: string;
  time: string;
  description: string;
  speakers: string[];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
  >
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-3 mb-4">
      <div className="flex items-center text-gray-600">
        <Calendar className="w-5 h-5 mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <Clock className="w-5 h-5 mr-2" />
        <span>{time}</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-5 h-5 mr-2" />
        <span>{location}</span>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div className="flex items-start">
      <Users className="w-5 h-5 mr-2 text-gray-600 mt-1" />
      <div>
        <p className="font-medium text-gray-900 mb-1">Speakers:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {speakers.map((speaker, index) => (
            <li key={index}>{speaker}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Events = () => {
  const events = [
    {
      title: "AI Ethics Symposium 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM EST",
      location: "Virtual Event",
      description: "Join us for a day-long symposium on ethical considerations in AI development and deployment.",
      speakers: [
        "Dr. Sarah Chen - AI Ethics Lead",
        "Prof. Michael Roberts - Stanford University",
        "Dr. Lisa Garcia - Tech Ethics Institute"
      ]
    },
    {
      title: "Machine Learning Workshop Series",
      date: "April 5-7, 2024",
      time: "10:00 AM - 4:00 PM EST",
      location: "AI Hub Main Campus",
      description: "A three-day intensive workshop on advanced machine learning techniques and applications.",
      speakers: [
        "Dr. James Wilson - ML Research Lead",
        "Dr. Emily Johnson - Deep Learning Expert",
        "Prof. David Kim - Neural Networks Specialist"
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join us for conferences, workshops, and symposiums on the latest developments in AI.
            </p>
          </div>

          <div className="space-y-8">
            {events.map((event, index) => (
              <Event key={index} {...event} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Events;