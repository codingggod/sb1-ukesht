import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Scale, HelpCircle } from 'lucide-react';

const Terms = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
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
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Agreement to Terms
                </h2>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                  Use License
                </h2>
                <p>
                  Permission is granted to temporarily access our services for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Remove any copyright or proprietary notations</li>
                  <li>Transfer the materials to another person</li>
                </ul>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Scale className="w-6 h-6 mr-2 text-blue-600" />
                  Limitations
                </h2>
                <p>
                  In no event shall AI Hub or its suppliers be liable for any damages arising out of the use or inability to use our services, even if we have been notified of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <HelpCircle className="w-6 h-6 mr-2 text-blue-600" />
                  Support and Contact
                </h2>
                <p>
                  If you have any questions or concerns about these Terms of Service, please contact us:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Email: legal@aihub.org</li>
                  <li>Phone: +1 (123) 456-7890</li>
                  <li>Address: 123 AI Street, Tech City, TC 12345</li>
                </ul>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Terms;