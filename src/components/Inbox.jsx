import React, { useState } from 'react';
import { emailData } from './Data';
import { 
  MagnifyingGlassIcon, 
  ArrowUpIcon, 
  AdjustmentsHorizontalIcon, 
  PlusIcon, 
  PaperClipIcon,
  StarIcon,
  ArchiveBoxIcon,
  TrashIcon,
  EnvelopeIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('Inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [starredEmails, setStarredEmails] = useState([]);
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleStar = (emailId, e) => {
    e.stopPropagation();
    if (starredEmails.includes(emailId)) {
      setStarredEmails(starredEmails.filter(id => id !== emailId));
    } else {
      setStarredEmails([...starredEmails, emailId]);
    }
  };

  const filteredEmails = emailData.filter(email => {
    const matchesTab =
      (activeTab === 'Inbox' && !email.isSent && !email.isDraft) ||
      (activeTab === 'Sent' && email.isSent) ||
      (activeTab === 'Drafts' && email.isDraft);

      const matchesSearch =
      searchTerm === '' ||
      email.sender.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.body.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTab && matchesSearch;
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSelectedEmail(null);
    setSearchTerm('');
  };

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  // Color mapping for sender avatars
  const avatarColors = [
    'bg-blue-500', 
    'bg-purple-500', 
    'bg-pink-500', 
    'bg-orange-500', 
    'bg-green-500',
    'bg-teal-500',
    'bg-indigo-500'
  ];

  const getAvatarColor = (name) => {
    const charCode = name.charCodeAt(0);
    return avatarColors[charCode % avatarColors.length];
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Top Header Navigation */}
      <header className="bg-white border-b border-gray-200 py-2 px-6 flex items-center justify-between shadow-sm">
        <nav>
          <ul className="flex items-center space-x-1">
            {['Inbox', 'Sent', 'Drafts'].map((tab) => (
              <li key={tab}>
                <button
                  className={`py-2 px-4 font-medium rounded-lg transition-colors focus:outline-none ${
                    activeTab === tab 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-3">
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">
            <TagIcon className="h-4 w-4 mr-1" />
            Labels
          </button>
          <button className="text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors flex items-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            Manage Views
          </button>
        </div>
      </header>

      {/* Secondary Header / Toolbar */}
      <div className="bg-white border-b border-gray-200 py-2 px-6 flex items-center space-x-3 shadow-sm">
        <div className="relative flex-grow max-w-2xl">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-gray-50"
          />
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors">
            <ArrowUpIcon className="h-5 w-5" />
          </button>
          <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors">
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
          </button>
          <div className="relative">
            <button className="flex items-center text-sm text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              Date Range
            </button>
          </div>
        </div>
        
        <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 shadow-sm transition-all flex items-center">
          <PlusIcon className="h-4 w-4 mr-1.5" />
          New Email
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar / Email List */}
        <aside className={`bg-white w-80 border-r border-gray-200 flex flex-col ${selectedEmail ? 'hidden md:flex' : 'flex'}`}>
          
          <div className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-gray-200">
              {filteredEmails.map((email) => (
                <li
                  key={email.id}
                  className={`px-4 py-3 cursor-pointer transition-all duration-200 ${
                    selectedEmail?.id === email.id 
                      ? 'bg-blue-50 border-l-4 border-blue-500' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => handleEmailClick(email)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={(e) => toggleStar(email.id, e)}
                        className="text-gray-400 hover:text-yellow-400 focus:outline-none"
                      >
                        {starredEmails.includes(email.id) ? (
                          <SolidStarIcon className="h-5 w-5 text-yellow-400" />
                        ) : (
                          <StarIcon className="h-5 w-5" />
                        )}
                      </button>
                      
                      {/* Avatar with dynamic color */}
                      <div className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white font-medium text-sm ${getAvatarColor(email.sender.name)}`}>
                        {email.sender.name.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <h4 className={`text-sm truncate ${
                          email.isRead ? 'text-gray-700' : 'font-semibold text-gray-900'
                        }`}>
                          {email.sender.name}
                        </h4>
                        <div className="text-xs text-gray-500 ml-2 whitespace-nowrap">
                          {email.timestamp}
                        </div>
                      </div>
                      
                      <p className={`text-sm truncate ${
                        email.isRead ? 'text-gray-500' : 'font-medium text-gray-800'
                      }`}>
                        {email.subject}
                      </p>
                      
                      <p className="text-xs text-gray-500 truncate mt-1">
                        {email.body.substring(0, 100)}...
                      </p>
                    </div>
                    
                    {email.attachments && email.attachments.length > 0 && (
                      <PaperClipIcon className="h-4 w-4 flex-shrink-0 text-gray-400" />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Email Content Area */}
        <main className={`flex-1 bg-white ${selectedEmail ? 'block' : 'hidden md:block'}`}>
          {selectedEmail ? (
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedEmail.subject}</h2>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                      <ArchiveBoxIcon className="h-5 w-5" />
                    </button>
                    <button className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 flex items-start">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center text-white font-medium text-sm ${getAvatarColor(selectedEmail.sender.name)}`}>
                    {selectedEmail.sender.name.charAt(0).toUpperCase()}
                  </div>
                  
                  <div className="ml-3 flex-1">
                    <div className="flex items-baseline">
                      <h3 className="text-sm font-semibold text-gray-900">
                        {selectedEmail.sender.name}
                      </h3>
                      <span className="ml-2 text-sm text-gray-500">
                        &lt;{selectedEmail.sender.email}&gt;
                      </span>
                      <span className="ml-auto text-sm text-gray-500">
                        {selectedEmail.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">to me</p>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 p-6 overflow-y-auto">
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {selectedEmail.body}
                </div>
                
                {selectedEmail.attachments && selectedEmail.attachments.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Attachments ({selectedEmail.attachments.length})</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedEmail.attachments.map((attachment) => (
                        <div key={attachment.filename} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                          <PaperClipIcon className="h-5 w-5 mr-3 text-gray-400" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{attachment.filename}</p>
                            <p className="text-xs text-gray-500">{attachment.size}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    Reply
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors">
                    Forward
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <div className="text-center p-6 max-w-md">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No email selected</h3>
                <p className="mt-1 text-sm text-gray-500">Select an email from the list to view its contents</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Inbox;