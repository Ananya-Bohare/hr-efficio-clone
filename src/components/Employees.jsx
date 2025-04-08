import React, { useState, useRef, useMemo, useCallback } from "react";
import { useCenteredTree } from "./utils";
import Tree from "react-d3-tree";
import dummyEmployeeData from "./Data";
import "./Employees.css";
import { FiZoomIn, FiZoomOut, FiRefreshCw, FiChevronDown, FiChevronRight, FiPlus } from "react-icons/fi";

// Convert flat data structure into a hierarchical tree format

const convertDataToTree = (employees, managerId = null) => {
  return employees
    .filter((emp) => emp.managerId === managerId)
    .map((node) => ({
      ...node,
      name: node.name,
      attributes: {
        title: node.title,
        department: node.department,
        location: node.location,
        profileImage: node.profileImage,
      },
      children: convertDataToTree(employees, node.id),
    }));
};

// Custom node component for rendering each employee node
const ModernNode = ({ nodeDatum, toggleNode, foreignObjectProps, onAddEmployee }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <g>
      <foreignObject {...foreignObjectProps}>
        <div
          className={`modern-employee-node ${isHovered ? "hovered" : ""}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleNode}
        >
          <div className="employee-image-container">
            {nodeDatum.attributes.profileImage ? (
              <img
                src={nodeDatum.attributes.profileImage}
                alt={nodeDatum.name}
                className="employee-avatar"
              />
            ) : (
              <div className="avatar-placeholder">
                {nodeDatum.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>

          <div className="employee-details">
            <h3 className="employee-name">{nodeDatum.name}</h3>
            <p className="employee-title">{nodeDatum.attributes.title}</p>
            <div className="employee-meta">
              <span className="department-badge">{nodeDatum.attributes.department}</span>
              {nodeDatum.attributes.location && (
                <span className="location-tag">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  {nodeDatum.attributes.location}
                </span>
              )}
            </div>
          </div>

          <div className="node-actions">
            {nodeDatum.children?.length > 0 && (
              <div className="toggle-indicator">
                {nodeDatum.__rd3t.collapsed ? <FiChevronRight /> : <FiChevronDown />}
              </div>
            )}
            <button 
              className="add-employee-btn"
              onClick={(e) => {
                e.stopPropagation();
                onAddEmployee(nodeDatum.id);
              }}
              title="Add team member"
            >
              <FiPlus size={14} />
            </button>
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

const EmployeeForm = ({ managerId, onSave, onCancel, employees }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    department: '',
    location: '',
    phone: '',
    email: '',
    managerId: managerId,
    profileImage: null
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate a unique ID (in a real app, this would come from your backend)
    const newId = Math.max(...employees.map(e => parseInt(e.id)), 0) + 1;
    onSave({
      ...formData,
      id: newId.toString()
    });
  };

  return (
    <div className="employee-form-modal">
      <div className="employee-form-container">
        <h3>Add New Employee</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-actions">
            <button type="button" onClick={onCancel}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Employees = () => {
  const [translate, containerRef] = useCenteredTree();
  const [zoom, setZoom] = useState(0.8);
  const treeRef = useRef();
  const [employees, setEmployees] = useState(dummyEmployeeData);
  const [showForm, setShowForm] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);
  const [reRenderTrigger, setReRenderTrigger] = useState(0);

  // Memoizing tree data to prevent unnecessary re-renders
  const treeData = useMemo(() => convertDataToTree(employees), [employees]);

  // Handlers for zoom controls
  const handleZoomIn = useCallback(() => setZoom((prev) => Math.min(prev + 0.1, 1.5)), []);
  const handleZoomOut = useCallback(() => setZoom((prev) => Math.max(prev - 0.1, 0.5)), []);
  const handleZoomReset = useCallback(() => {
    setZoom(0.8);
    treeRef.current?.resetTransform();
  }, []);

  const handleAddEmployee = (managerId) => {
    setSelectedManager(managerId);
    setShowForm(true);
  };

  const handleSaveEmployee = (newEmployee) => {
    setEmployees(prev => [...prev, newEmployee]);
    setShowForm(false);
    setSelectedManager(null);
    setReRenderTrigger(prev => prev + 1); // Trigger a re-render
  };

  const handleCancelAdd = () => {
    setShowForm(false);
    setSelectedManager(null);
  };

  const nodeSize = { x: 280, y: 120 };
  const foreignObjectProps = {
    width: nodeSize.x,
    height: nodeSize.y,
    x: -nodeSize.x / 2,
    y: -nodeSize.y / 2,
  };

  return (
    <div className="modern-org-chart-container">
      <div className="org-header">
        <h2 className="org-title">Organization Tree</h2>
        <div className="header-controls">
          <button 
            className="add-root-employee-btn"
            onClick={() => handleAddEmployee(null)}
          >
            <FiPlus /> Add Employee
          </button>
          <div className="zoom-controls">
            <button onClick={handleZoomIn} aria-label="Zoom In">
              <FiZoomIn />
            </button>
            <button onClick={handleZoomReset} aria-label="Reset Zoom">
              <FiRefreshCw />
            </button>
            <button onClick={handleZoomOut} aria-label="Zoom Out">
              <FiZoomOut />
            </button>
          </div>
        </div>
      </div>

      <div className="org-tree-wrapper" ref={containerRef}>
        <Tree
          ref={treeRef}
          data={treeData}
          translate={translate}
          zoom={zoom}
          nodeSize={nodeSize}
          renderCustomNodeElement={(rd3tProps) => (
            <ModernNode
              {...rd3tProps}
              foreignObjectProps={foreignObjectProps}
              onAddEmployee={handleAddEmployee}
            />
          )}
          orientation="vertical"
          pathFunc="step"
          separation={{ siblings: 1.2, nonSiblings: 1.2 }}
          transitionDuration={250}
          depthFactor={220}
          initialDepth={1}
          collapsible={true}
          styles={{
            links: {
              stroke: "#e2e8f0",
              strokeWidth: 2,
              strokeLinecap: "round",
              transition: "stroke 0.3s ease",
            },
          }}
        />
      </div>

      {showForm && (
        <EmployeeForm 
          managerId={selectedManager}
          onSave={handleSaveEmployee}
          onCancel={handleCancelAdd}
          employees={employees}
        />
      )}
    </div>
  );
};

export default Employees;