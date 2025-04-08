import React, { useState, useEffect } from 'react';
import { taskData , assignees} from '../Data';
import { UserCircleIcon, TagIcon , PencilIcon, TrashIcon} from '@heroicons/react/24/outline';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  TASK: 'task'
};

const TaskCard = ({ task, onEdit, onDelete}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task.id, status: task.status },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const priorityColors = {
    'Urgent': 'text-red-500',
    'High': 'text-orange-500',
    'Medium': 'text-yellow-500',
    'Low': 'text-green-500',
    'Lowest': 'text-blue-500'
  };

  

  return (
    <div 
      ref={drag}
      className={`relative bg-white rounded-md shadow-sm p-4 mb-4 border border-gray-100 cursor-grab hover:shadow-md transition-shadow ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
      onClick={() => onEdit(task)}
    >
      <div className="flex items-center justify-between mb-2">
        {task.priority && (
          <TagIcon className={`h-4 w-4 ${priorityColors[task.priority] || 'text-gray-500'} mr-1`} />
        )}
        <span className="text-xs text-gray-500">{task.type}</span>
        <span className="text-xs text-gray-500">
          {task.endDate ? new Date(task.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'No due date'}
        </span>
      </div>
      <h4 className="text-sm font-semibold text-gray-800 mb-2">{task.title}</h4>
      <p className="text-xs text-gray-600 mb-2">{task.description?.substring(0, 80)}</p>
      <div className="flex items-center justify-between text-xs text-gray-500">
      <div className="flex items-center space-x-1">
          {task.assignees?.slice(0, 3).map((assignee, index) => (
            assignee?.avatar ? (
              <img
                key={index}
                src={assignee.avatar}
                alt={assignee.name}
                className="h-5 w-5 rounded-full border border-gray-400 object-cover"
              />
            ) : (
              <UserCircleIcon key={index} className="h-5 w-5 text-gray-400" />
            )
          ))}
          {task.assignees?.length > 3 && (
            <span className="rounded-full bg-gray-200 h-5 w-5 flex items-center justify-center text-xs">
              +{task.assignees.length - 3}
            </span>
          )}
        </div>
      </div>
      
      {/* Edit and Delete Buttons */}
      <div className="absolute bottom-2 right-2 flex space-x-1">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onEdit(task);
          }}
          className="p-1 text-gray-900 hover:text-blue-500 transition-colors"
          title="Edit task"
        >
          <PencilIcon className="h-3 w-4" />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onDelete(task.id);
          }}
          className="p-1 text-gray-900 hover:text-red-500 transition-colors"
          title="Delete task"
        >
          <TrashIcon className="h-3 w-4" />
        </button>
      </div>
    </div>
  );
};

const TaskColumn = ({ title, tasks, status, onTaskDrop, onEditTask, onDeleteTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => onTaskDrop(item.id, status),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div 
      ref={drop}
      className={`w-full sm:w-70 bg-gray-100 rounded-md p-4 flex-shrink-0 ${
        isOver ? 'bg-gray-200' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-md font-semibold text-gray-700">{title}</h3>
        <span className="text-sm text-gray-500">{tasks.length}</span>
      </div>
      <div className="space-y-3">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} onDrop={onTaskDrop} onEdit={onEditTask}
          onDelete={onDeleteTask}/>
        ))}
        <button className="w-full text-sm text-gray-500 hover:text-gray-700 focus:outline-none flex items-center justify-center">
          + Add new
        </button>
      </div>
    </div>
  );
};

const BoardView = ({ tasks, setTasks, onAddTask: parentAddTask, onEditTask }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Listen for sidebar collapse state (you might want to use context or props in a real app)
  useEffect(() => {
    const handleResize = () => {
      setSidebarCollapsed(window.innerWidth < 768); // Example breakpoint
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const handleTaskDrop = (taskId, newStatus) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleAddTask = (status) => {
    parentAddTask(status);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  // Filter tasks by status
  const statusGroups = {
    'To Do': tasks.filter(task => task.status === 'To Do'),
    'In Progress': tasks.filter(task => task.status === 'In Progress'),
    'In Review': tasks.filter(task => task.status === 'In Review'),
    'Completed': tasks.filter(task => task.status === 'Completed' || task.status === 'Done')
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="overflow-x-auto pb-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 ${
          sidebarCollapsed ? 'flex-wrap' : 'flex-nowrap'
        }`}>
          {Object.entries(statusGroups).map(([title, tasks]) => (
            <TaskColumn 
              key={title}
              title={title} 
              tasks={tasks} 
              status={title.split(' ')[0] === 'In' ? title.split(' ').slice(0, 2).join(' ') : title.split(' ')[0]} 
              onTaskDrop={handleTaskDrop}
              onAddTask={handleAddTask}
              onEditTask={onEditTask}
              onDeleteTask={handleDeleteTask}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default BoardView;