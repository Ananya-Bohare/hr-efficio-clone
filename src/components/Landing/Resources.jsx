import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  BookOpenIcon,
  ChartBarIcon,
  PlayIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline';

function ResourcesSection() {
  const resources = [
    {
      type: 'Guide',
      title: 'The Complete HR Digital Transformation Playbook',
      description: 'Step-by-step guide to modernizing your HR operations with proven frameworks',
      icon: <BookOpenIcon className="w-8 h-8 text-blue-500" />,
      action: 'Download Guide',
      color: 'bg-blue-100'
    },
    {
      type: 'Case Study',
      title: 'How TechCorp Reduced Onboarding Time by 70%',
      description: 'Real-world results from implementing Efficio HRMS across global teams',
      icon: <ChartBarIcon className="w-8 h-8 text-cyan-500" />,
      action: 'Read Case Study',
      color: 'bg-cyan-100'
    },
    {
      type: 'Webinar',
      title: 'Future of Work: AI in HR Management',
      description: '45-minute session with industry leaders on emerging HR technologies',
      icon: <PlayIcon className="w-8 h-8 text-purple-500" />,
      action: 'Watch Now',
      color: 'bg-purple-100'
    },
    {
      type: 'Whitepaper',
      title: '2024 HR Technology Trends Report',
      description: 'Data-driven insights on what matters most in HR tech this year',
      icon: <DocumentTextIcon className="w-8 h-8 text-indigo-500" />,
      action: 'Get Report',
      color: 'bg-indigo-100'
    },
    {
      type: 'Toolkit',
      title: 'Employee Retention Toolkit',
      description: 'Templates, checklists and strategies to improve retention',
      icon: <DocumentTextIcon className="w-8 h-8 text-green-500" />,
      action: 'Download Toolkit',
      color: 'bg-green-100'
    },
    {
      type: 'Infographic',
      title: 'HR Metrics That Matter',
      description: 'Visual guide to the KPIs every HR leader should track',
      icon: <ChartBarIcon className="w-8 h-8 text-orange-500" />,
      action: 'View Infographic',
      color: 'bg-orange-100'
    }
  ];

  return (
    <section id="resources-section" className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-4 py-2 mb-6 shadow-lg">
            Knowledge Center
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              HR Resources
            </span> & Insights
          </h2>
          <p className="text-xl text-gray-600">
            Actionable content to help you optimize HR operations and drive strategic impact
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${resource.color} p-6 flex items-center justify-center h-32`}>
                <div className="bg-white p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {resource.type}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <Link 
                  to="#" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  {resource.action}
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/resources" 
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Explore All Resources
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;