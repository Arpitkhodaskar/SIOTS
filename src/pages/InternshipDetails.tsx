import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Building2,
  MapPin,
  Calendar,
  ClipboardList,
  Users,
  ArrowLeft,
} from 'lucide-react';

export const InternshipDetails = () => {
  const { id } = useParams();

  // Mock data - replace with actual API call
  const internship = {
    id,
    title: 'Software Engineering Intern',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    deadline: '2024-04-15',
    description:
      'We are seeking a passionate Software Engineering Intern to join our team...',
    requirements: [
      'Currently pursuing a BS/MS in Computer Science or related field',
      'Strong programming skills in Python, JavaScript, or Java',
      'Experience with web technologies and frameworks',
      'Excellent problem-solving and communication skills',
    ],
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Participate in code reviews and testing',
      'Learn and work with modern technologies',
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/dashboard"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Link>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {internship.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              {internship.company}
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              {internship.location}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Apply by {internship.deadline}
            </div>
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600">{internship.description}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Requirements
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {internship.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Responsibilities
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {internship.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </section>
          </div>

          <div>
            <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
              <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-4">
                Apply Now
              </button>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <ClipboardList className="h-5 w-5 mr-2" />
                  <span>Full-time internship</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>12 applicants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};