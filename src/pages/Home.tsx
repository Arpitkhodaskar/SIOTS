import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, Calendar, CheckCircle } from 'lucide-react';

export const Home = () => {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Student Internship Tracker System
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Streamline your internship journey with our comprehensive tracking and
          management system.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
            title: 'Browse Internships',
            description:
              'Explore curated internship opportunities from top companies.',
          },
          {
            icon: <Users className="h-8 w-8 text-indigo-600" />,
            title: 'Easy Application',
            description:
              'Apply to multiple internships with our streamlined process.',
          },
          {
            icon: <Calendar className="h-8 w-8 text-indigo-600" />,
            title: 'Schedule Management',
            description: 'Upload and track your internship schedules effortlessly.',
          },
          {
            icon: <CheckCircle className="h-8 w-8 text-indigo-600" />,
            title: 'Progress Tracking',
            description: 'Monitor your internship progress and achievements.',
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/register"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Get Started Today
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Choose Our Platform?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
            alt="Students collaborating"
            className="rounded-lg object-cover h-64 w-full"
          />
          <div className="space-y-4">
            <p className="text-gray-600">
              Our platform provides a seamless experience for both students and
              administrators. Students can easily find and apply for internships,
              while administrators can efficiently manage the entire process.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Real-time tracking and updates</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Secure document management</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Automated notifications</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Comprehensive reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};