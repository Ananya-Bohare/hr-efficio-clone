import React, { useState } from 'react';
import { projectsData as initialProjectsData } from '../Data';
import Form from './Form';
import ProjectDetailsModal from './ProjectDetailsModal';
import { PlusIcon, MagnifyingGlassIcon, ChevronDownIcon,TrashIcon, // Import TrashIcon for delete
  EyeIcon, ClockIcon, CheckCircleIcon, UserGroupIcon, ChartBarIcon, CalendarIcon, EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
const Projects = () => {
  // State for filters and search
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');
  const [sortOption, setSortOption] = useState('Newest');
  const [activeChart, setActiveChart] = useState('status');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [projectsData, setProjectsData] = useState(initialProjectsData);
  const [selectedProject, setSelectedProject] = useState(null); // State to hold the project to view details
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);


  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleAddProject = (newProject) => {
    setProjectsData({ ...projectsData, projects: [...projectsData.projects, newProject] });
  };

  const handleDeleteProject = (id) => {
    const updatedProjects = {
      ...projectsData,
      projects: projectsData.projects.filter((project) => project.id !== id),
    };
    setProjectsData(updatedProjects);
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
    setSelectedProject(null);
  };


  // Extract projects from data
  const projects = projectsData.projects || [];
  const stats = projectsData.stats || {};

  // Get unique values for filters
  const statuses = [...new Set(projects.map(project => project.status))];
  const priorities = [...new Set(projects.map(project => project.priority))];
  const teams = [...new Set(projects.map(project => project.team))];

  // Filter projects based on search and filters
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.team.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
    const matchesPriority = priorityFilter === 'All' || project.priority === priorityFilter;
    const matchesTeam = teamFilter === 'All' || project.team === teamFilter;

    return matchesSearch && matchesStatus && matchesPriority && matchesTeam;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortOption === 'Newest') return new Date(b.startDate) - new Date(a.startDate);
    if (sortOption === 'Oldest') return new Date(a.startDate) - new Date(b.startDate);
    if (sortOption === 'High Priority') {
      const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  // Chart data preparation
  const statusData = [
    { name: 'On Track', value: projects.filter(p => p.status === 'On Track').length, color: '#10B981' },
    { name: 'At Risk', value: projects.filter(p => p.status === 'At Risk').length, color: '#F59E0B' },
    { name: 'Off Track', value: projects.filter(p => p.status === 'Off Track').length, color: '#EF4444' },
    { name: 'Completed', value: projects.filter(p => p.status === 'Completed').length, color: '#3B82F6' }
  ];

  const priorityData = [
    { name: 'High', value: projects.filter(p => p.priority === 'High').length, color: '#EF4444' },
    { name: 'Medium', value: projects.filter(p => p.priority === 'Medium').length, color: '#F59E0B' },
    { name: 'Low', value: projects.filter(p => p.priority === 'Low').length, color: '#10B981' }
  ];

  const progressData = [
    { name: '0-25%', value: projects.filter(p => p.progress <= 25).length, color: '#EF4444' },
    { name: '26-50%', value: projects.filter(p => p.progress > 25 && p.progress <= 50).length, color: '#F59E0B' },
    { name: '51-75%', value: projects.filter(p => p.progress > 50 && p.progress <= 75).length, color: '#93C5FD' },
    { name: '76-100%', value: projects.filter(p => p.progress > 75).length, color: '#10B981' }
  ];

  const teamProgressData = teams.map(team => {
    const teamProjects = projects.filter(p => p.team === team);
    const avgProgress = teamProjects.reduce((sum, p) => sum + p.progress, 0) / (teamProjects.length || 1);
    return {
      name: team,
      progress: avgProgress,
      projects: teamProjects.length
    };
  });


  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor = 'bg-gray-100';
    let textColor = 'text-gray-800';

    switch(status) {
      case 'On Track':
        bgColor = 'bg-green-100';
        textColor = 'text-green-800';
        break;
      case 'At Risk':
        bgColor = 'bg-yellow-100';
        textColor = 'text-yellow-800';
        break;
      case 'Off Track':
        bgColor = 'bg-red-100';
        textColor = 'text-red-800';
        break;
      case 'Completed':
        bgColor = 'bg-blue-100';
        textColor = 'text-blue-800';
        break;
      default:
        break;
    }

    return (
      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor} ${textColor}`}>
        {status}
      </span>
    );
  };

  // Priority indicator component
  const PriorityIndicator = ({ priority }) => {
    let color = 'bg-gray-400';
    
    switch(priority) {
      case 'High':
        color = 'bg-red-500';
        break;
      case 'Medium':
        color = 'bg-yellow-500';
        break;
      case 'Low':
        color = 'bg-green-500';
        break;
      default:
        break;
    }

    return (
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
        <span>{priority}</span>
      </div>
    );
  };

  // Progress bar component
  const ProgressBar = ({ progress }) => {
    let bgColor = 'bg-green-500';
    if (progress < 30) bgColor = 'bg-red-500';
    else if (progress < 70) bgColor = 'bg-yellow-500';

    return (
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full ${bgColor}`} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-500 ml-2">{progress}%</span>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Projects Dashboard</h1>
          <p className="text-gray-500">Track and manage all HR projects</p>
        </div>
        <button 
        onClick={handleOpenForm}
        className="px-4 py-2 bg-indigo-600 rounded-lg text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center">
          <PlusIcon className="h-5 w-5 mr-2" />
          New Project
        </button>
      </div>

      <Form
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onAddProject={handleAddProject}
      />
      <ProjectDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={handleCloseDetailsModal}
        project={selectedProject}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard 
          icon={<CheckCircleIcon className="h-6 w-6 text-indigo-600" />}
          title="Total Projects"
          value={stats.totalProjects || 0}
          change={stats.totalProjectsChange || '+0'}
          color="indigo"
        />
        <StatCard 
          icon={<UserGroupIcon className="h-6 w-6 text-green-600" />}
          title="Active Teams"
          value={stats.activeTeams || 0}
          change={stats.activeTeamsChange || '+0'}
          color="green"
        />
        <StatCard 
          icon={<ChartBarIcon className="h-6 w-6 text-blue-600" />}
          title="Avg Progress"
          value={stats.avgProgress || '0%'}
          change={stats.avgProgressChange || '+0%'}
          color="blue"
        />
        <StatCard 
          icon={<ClockIcon className="h-6 w-6 text-yellow-600" />}
          title="On Time"
          value={stats.onTime || '0%'}
          change={stats.onTimeChange || '+0%'}
          color="yellow"
        />
      </div>

      {/* Visualization Charts */}
      <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Project Analytics</h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveChart('status')}
              className={`px-3 py-1 rounded-md text-sm ${activeChart === 'status' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              By Status
            </button>
            <button 
              onClick={() => setActiveChart('priority')}
              className={`px-3 py-1 rounded-md text-sm ${activeChart === 'priority' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              By Priority
            </button>
            <button 
              onClick={() => setActiveChart('progress')}
              className={`px-3 py-1 rounded-md text-sm ${activeChart === 'progress' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              By Progress
            </button>
            <button 
              onClick={() => setActiveChart('team')}
              className={`px-3 py-1 rounded-md text-sm ${activeChart === 'team' ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            >
              By Team
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={activeChart === 'status' ? statusData : 
                       activeChart === 'priority' ? priorityData : 
                       progressData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {(activeChart === 'status' ? statusData : 
                    activeChart === 'priority' ? priorityData : 
                    progressData).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={teamProgressData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="progress" name="Avg Progress %" fill="#3B82F6" />
                <Bar dataKey="projects" name="Number of Projects" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg border shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search projects, descriptions, or teams..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            <FilterDropdown 
              options={['All', ...statuses]}
              value={statusFilter}
              onChange={setStatusFilter}
              label="Status"
            />
            <FilterDropdown 
              options={['All', ...priorities]}
              value={priorityFilter}
              onChange={setPriorityFilter}
              label="Priority"
            />
            <FilterDropdown 
              options={['All', ...teams]}
              value={teamFilter}
              onChange={setTeamFilter}
              label="Team"
            />
            <FilterDropdown 
              options={['Newest', 'Oldest', 'High Priority']}
              value={sortOption}
              onChange={setSortOption}
              label="Sort"
            />
          </div>
        </div>
      </div>

      {/* Projects Table */}
      <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
        {sortedProjects.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <TableHeader>Project Name</TableHeader>
                  <TableHeader>Team</TableHeader>
                  <TableHeader>Priority</TableHeader>
                  <TableHeader>Status</TableHeader>
                  <TableHeader>Progress</TableHeader>
                  <TableHeader>Timeline</TableHeader>
                  <TableHeader align="right">Actions</TableHeader>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{project.name}</div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">{project.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {project.team}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <PriorityIndicator priority={project.priority} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={project.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <ProgressBar progress={project.progress} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleViewDetails(project)}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        <EyeIcon className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(project.id)}
                        className="text-red-600 hover:text-red-900 mr-3"
                      >
                        <TrashIcon className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <EllipsisVerticalIcon className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState onAddNew={() => console.log('Add new project')} />
        )}
      </div>
    </div>
  );
};

// Reusable Components

const StatCard = ({ icon, title, value, change, color }) => {
  const colorClasses = {
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600' },
    green: { bg: 'bg-green-50', text: 'text-green-600' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600' }
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className={`text-2xl font-semibold ${colorClasses[color].text}`}>{value}</p>
        </div>
        <div className={`p-3 rounded-full ${colorClasses[color].bg}`}>
          {icon}
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-1">{change} from last month</p>
    </div>
  );
};

const FilterDropdown = ({ options, value, onChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full sm:w-40"
      >
        {value}
        <ChevronDownIcon className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          {options.map(option => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 ${
                value === option ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const TableHeader = ({ children, align = 'left' }) => (
  <th 
    scope="col" 
    className={`px-6 py-3 text-${align} text-xs font-medium text-gray-500 uppercase tracking-wider`}
  >
    {children}
  </th>
);

const EmptyState = ({ onAddNew }) => (
  <div className="bg-white rounded-lg border shadow-sm p-8 text-center">
    <div className="mx-auto h-12 w-12 text-gray-400">
      <CheckCircleIcon className="h-full w-full" />
    </div>
    <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
    <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
    <div className="mt-6">
      <button
        onClick={onAddNew}
        className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
        New Project
      </button>
    </div>
  </div>
);

export default Projects;