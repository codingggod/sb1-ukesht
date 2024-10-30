import React from 'react';
import { ArrowUpRight, Brain, Heart, Shield } from 'lucide-react';

const ResearchCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-blue-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700">
      Explore Project <ArrowUpRight className="ml-1 w-4 h-4" />
    </a>
  </div>
);

const FeaturedResearch = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Leading the Forefront of AI Advancements</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our groundbreaking research projects that are shaping the future of artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ResearchCard
            icon={Brain}
            title="AI in Healthcare Diagnostics"
            description="Improving diagnostic accuracy with advanced machine learning algorithms and computer vision."
          />
          <ResearchCard
            icon={Shield}
            title="Ethical AI Framework"
            description="Developing comprehensive guidelines for responsible AI implementation across industries."
          />
          <ResearchCard
            icon={Heart}
            title="Human-AI Collaboration"
            description="Exploring new paradigms for effective interaction between humans and AI systems."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedResearch;