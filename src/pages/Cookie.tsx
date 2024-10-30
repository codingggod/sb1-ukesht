import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Cookie as CookieIcon, Info, Settings, Shield } from 'lucide-react';

const Cookie = () => {
  return (
    <PageTransition>
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding how and why we use cookies on our website.
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
                  <CookieIcon className="w-6 h-6 mr-2 text-blue-600" />
                  What Are Cookies?
                </h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Remembering your preferences</li>
                  <li>Understanding how you use our website</li>
                  <li>Improving site functionality</li>
                  <li>Personalizing content and advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Info className="w-6 h-6 mr-2 text-blue-600" />
                  Types of Cookies We Use
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Essential Cookies</h3>
                    <p>Required for the website to function properly. Cannot be disabled.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Performance Cookies</h3>
                    <p>Help us understand how visitors interact with our website.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Functionality Cookies</h3>
                    <p>Remember your preferences and personalize your experience.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Marketing Cookies</h3>
                    <p>Track your activity across websites to deliver targeted advertising.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Settings className="w-6 h-6 mr-2 text-blue-600" />
                  Managing Cookies
                </h2>
                <p>
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Browser settings to block or delete cookies</li>
                  <li>Our cookie consent tool on the website</li>
                  <li>Third-party opt-out tools</li>
                </ul>
              </section>

              <section>
                <h2 className="flex items-center text-2xl font-bold mb-4">
                  <Shield className="w-6 h-6 mr-2 text-blue-600" />
                  Privacy and Security
                </h2>
                <p>
                  We take your privacy seriously and ensure that:
                </p>
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Cookies don't store personally identifiable information</li>
                  <li>Data collected is encrypted and secure</li>
                  <li>Third-party cookies comply with privacy regulations</li>
                  <li>You have control over your cookie preferences</li>
                </ul>
              </section>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Cookie;