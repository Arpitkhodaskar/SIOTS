import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Clock,
  FileCheck,
  AlertCircle,
  ChevronRight,
} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export const StudentDashboard = () => {
  const { user } = useAuthStore();

  // Mock data - replace with actual API calls
  const applications = [
    {
      id: '1',
      company: 'Tech Corp',
      position: 'Software Engineering Intern',
      status: 'pending',
      appliedDate: '2024-03-15',
    },
    {
      id: '2',
      company: 'Innovation Labs',
      position: 'Data Science Intern',
      status: 'approved',
      appliedDate: '2024-03-10',
    },
  ];

  const schedules = [
    {
      id: '1',
      company: 'Tech Corp',
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      status: 'pending',
    },
  ];

  return (
    <div className="space-y-6">
      <header className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-1">
          Track your internship applications and schedules
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Applications
            </h2>
            <Link
              to="/internships"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {applications.map((application) => (
              <div
                key={application.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <Briefcase className="h-6 w-6 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {application.position}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {application.company} • Applied {application.appliedDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      application.status === 'approved'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {application.status}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Internship Schedules
            </h2>
            <Link
              to="/schedules"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {schedules.map((schedule) => (
              <div
                key={schedule.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-gray-400" />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {schedule.company}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {schedule.startDate} - {schedule.endDate}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                    {schedule.status}
                  </span>
                  <ChevronRight className="h-5 w-5 text-gray-400 ml-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <FileCheck className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="font-semibold text-gray-900">
                Complete Applications
              </h3>
              <p className="text-2xl font-bold text-indigo-600">2</p>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <Briefcase className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Active Internships</h3>
              <p className="text-2xl font-bold text-green-600">1</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-8 w-8 text-yellow-600" />
            <div>
              <h3 className="font-semibold text-gray-900">Pending Reviews</h3>
              <p className="text-2xl font-bold text-yellow-600">1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};