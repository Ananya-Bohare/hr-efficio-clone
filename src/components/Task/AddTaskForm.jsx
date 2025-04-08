import React, { useState } from 'react';
import { 
  XMarkIcon, 
  PlusIcon, 
  TagIcon, 
  CalendarDaysIcon, 
  FlagIcon, 
  PaperClipIcon, 
  ChatBubbleLeftEllipsisIcon, 
  ListBulletIcon,
  CheckCircleIcon ,
  ChevronDownIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { assignees } from '../Data';

const AddTaskForm = ({ onClose, onAddTask, taskToEdit  }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [selectedAssignees, setSelectedAssignees] = useState([]);
  const [priority, setPriority] = useState('Medium');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [subtasks, setSubtasks] = useState([{ id: Date.now(), text: '', isCompleted: false }]);
  const [isAssigneeDropdownOpen, setIsAssigneeDropdownOpen] = useState(false);

  const toggleAssignee = (assigneeId) => {
    setSelectedAssignees(prev => 
      prev.includes(assigneeId)
        ? prev.filter(id => id !== assigneeId)
        : [...prev, assigneeId]
    );
  };

  const handleAssigneeChange = (event) => {
    const selectedAssigneeId = event.target.value;
    setAssignees([...assignees, selectedAssigneeId]);
  };

  const handleAttachmentChange = (event) => {
    const files = Array.from(event.target.files);
    setAttachments([...attachments, ...files]);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      setComments([...comments, { text: comment, author: 'You', timestamp: 'Just now' }]);
      setComment('');
    }
  };

  const handleSubtaskChange = (index, event) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index].text = event.target.value;
    setSubtasks(newSubtasks);
  };

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, { id: Date.now(), text: '', isCompleted: false }]);
  };

  const handleRemoveSubtask = (idToRemove) => {
    setSubtasks(subtasks.filter(subtask => subtask.id !== idToRemove));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title,
      description,
      status,
      assignees: selectedAssignees.map(id => assignees.find(a => a.id === id)),
      priority,
      type,
      startDate,  
      endDate,  
      attachments,
      comments,
      subtasks,
      id: taskToEdit?.id || Date.now().toString(),
    };
    onAddTask(newTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm overflow-y-auto h-full w-full z-20 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white z-10 p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900">Create New Task</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-500 focus:outline-none rounded-full p-1 hover:bg-gray-100 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Task Name */}
            <div className="md:col-span-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Implement user dashboard"
                required
              />
            </div>

            {/* Priority */}
            <div>
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
              <div className="relative">
                <select
                  id="priority"
                  className="w-full px-4 py-2.5 pr-8 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="Lowest">Lowest</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FlagIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              {/* Type */}
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Type</label>
              <div className="relative">
                <input
                  type="text"
                  id="type"
                  className="w-full px-4 py-2.5 pr-8 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="e.g. Feature, Bug"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <TagIcon className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            </div>

            {/* Assignees */}
            <div className="relative">
              <label htmlFor="assignees" className="block text-sm font-medium text-gray-700 mb-1">Assign To</label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsAssigneeDropdownOpen(!isAssigneeDropdownOpen)}
                  className="w-full px-4 py-2.5 pr-8 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-left flex items-center justify-between"
                >
                  <div className="flex items-center space-x-1 overflow-x-auto">
                    {selectedAssignees.length > 0 ? (
                      selectedAssignees.map(id => {
                        const assignee = assignees.find(a => a.id === id);
                        return assignee ? (
                          <div key={id} className="flex items-center">
                            <img 
                              src={assignee.avatar} 
                              alt={assignee.name}
                              className="h-5 w-5 rounded-full border border-gray-300 mr-1"
                            />
                            <span className="text-sm">{assignee.name}</span>
                          </div>
                        ) : null;
                      })
                    ) : (
                      <span className="text-gray-400">Select assignees...</span>
                    )}
                  </div>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                </button>
                
                {isAssigneeDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1 max-h-60 overflow-auto">
                    {assignees.map(assignee => (
                      <div
                        key={assignee.id}
                        onClick={() => toggleAssignee(assignee.id)}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="flex items-center flex-1">
                          <img 
                            src={assignee.avatar} 
                            alt={assignee.name}
                            className="h-6 w-6 rounded-full border border-gray-300 mr-3"
                          />
                          <span className="text-sm">{assignee.name}</span>
                        </div>
                        {selectedAssignees.includes(assignee.id) && (
                          <CheckIcon className="h-5 w-5 text-blue-500" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
              <div className="flex items-center space-x-2">
                <div className="relative flex-1">
                  <input
                    type="date"
                    id="startDate"
                    className="w-full px-4 py-2.5 pr-8 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <span className="text-gray-400">to</span>
                <div className="relative flex-1">
                  <input
                    type="date"
                    id="endDate"
                    className="w-full px-4 py-2.5 pr-8 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <CalendarDaysIcon className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>


            {/* Attachments */}
            <div className="md:col-span-2">
              <label htmlFor="attachments" className="block text-sm font-medium text-gray-700 mb-1">Attachments</label>
              <div className="flex items-center space-x-2">
                <label className="flex-1 cursor-pointer">
                  <div className="w-full px-4 py-2.5 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors flex items-center justify-between">
                    <span className="text-gray-500">Choose files...</span>
                    <PaperClipIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="file"
                    id="attachments"
                    multiple
                    className="hidden"
                    onChange={handleAttachmentChange}
                  />
                </label>
              </div>
              {attachments.length > 0 && (
                <div className="mt-2 text-sm text-gray-600 flex flex-wrap gap-2">
                  {attachments.map((file, index) => (
                    <span key={index} className="inline-flex items-center bg-gray-100 rounded-full px-3 py-1">
                      <span className="truncate max-w-xs">{file.name}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                id="description"
                rows="3"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the task in detail..."
              />
            </div>

            {/* Subtasks */}
            <div className="md:col-span-2">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">Subtasks</label>
                <button
                  type="button"
                  onClick={handleAddSubtask}
                  className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none flex items-center"
                >
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Add Subtask
                </button>
              </div>
              <div className="space-y-2">
                {subtasks.map((subtask, index) => (
                  <div key={subtask.id} className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-5 w-5 text-gray-300 flex-shrink-0" />
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      value={subtask.text}
                      onChange={(event) => handleSubtaskChange(index, event)}
                      placeholder="Add a subtask"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSubtask(subtask.id)}
                      className="text-gray-400 hover:text-red-500 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments */}
            <div className="md:col-span-2">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Add Comment</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="comment"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  value={comment}
                  onChange={handleCommentChange}
                  placeholder="Write a comment..."
                />
                <button
                  type="button"
                  onClick={handleAddComment}
                  className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
                >
                  Post
                </button>
              </div>
              {comments.length > 0 && (
                <div className="mt-4 space-y-3">
                  <h6 className="text-sm font-semibold text-gray-700">Comments</h6>
                  <div className="space-y-3">
                    {comments.map((c, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900">{c.author}</span>
                          <span className="text-xs text-gray-500">{c.timestamp}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-700">{c.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;