import ava1 from '../assets/ava1.PNG';
import ava2 from '../assets/ava2.PNG';
import ava3 from '../assets/ava3.PNG';
import ava4 from '../assets/ava4.PNG';
import ava5 from '../assets/ava5.PNG';
import ava6 from '../assets/ava6.PNG';
import ava7 from '../assets/ava7.PNG';
import ava8 from '../assets/ava8.PNG';
import ava9 from '../assets/ava9.PNG';
import ava10 from '../assets/ava10.PNG';
import ava11 from '../assets/ava11.PNG';
import ava12 from '../assets/ava12.PNG';
import ava13 from '../assets/ava13.PNG';
import ava14 from '../assets/ava14.PNG';
import ava15 from '../assets/ava15.PNG';

export const assignees = [
  { id: 'user1', name: 'John Doe', role: 'Junior Animator',department: 'Animation', avatar: ava1 },
  { id: 'user2', name: 'Jane Smith', role: 'Graphic Designer Intern', department: 'Design',avatar: ava2 },
  { id: 'user3', name: 'Peter Jones', role: 'Senior UI/UX Designer', department: 'Design', avatar: ava3 },
  { id: 'user4', name: 'Alice Brown', role: 'Product Design Lead', department: 'Design',avatar: ava4 },
  { id: 'user5', name: 'Bob Green', role: 'Creative Director', department: 'Marketing',avatar: ava5 },
  { id: 'user6', name: 'Carol White', role: 'Frontend Engineer', department: 'Sales' ,avatar: ava6 },
];


export const taskData = [
  {
    id: '1',
    title: 'Implement New Feature',
    description: 'Add a \'dark mode\' option for improved UX.',
    status: 'Not Started',
    assignees: [assignees[0], assignees[1]],
    type: 'Feature',
    startDate: '2024-04-17',
    endDate: '2024-05-15',
    priority: 'Medium',
    isCompleted: false,
  },
  {
    id: '2',
    title: 'Fix Bug - On Payment',
    description: 'The save button is not working on mobile.',
    status: 'Not Started',
    assignees: [assignees[2]],
    type: 'Bug',
    startDate: '2024-05-10',
    endDate: '2024-07-18',
    priority: 'High',
    isCompleted: false,
  },
  {
    id: '3',
    title: 'Review Design - Final',
    description: 'Provide feedback on the latest UI prototypes.',
    status: 'Not Started',
    assignees: [assignees[3], assignees[4], assignees[5]],
    type: 'Review',
    startDate: '2024-06-11',
    endDate: '2024-07-17',
    priority: 'High',
    isCompleted: false,
  },
  {
    id: '4',
    title: 'New Version - Quality Check',
    description: 'Conduct thorough testing of updated software.',
    status: 'Not Started',
    assignees: [assignees[1], assignees[3]],
    type: 'Testing',
    startDate: '2024-05-27',
    endDate: '2024-06-11',
    priority: 'Low',
    isCompleted: false,
  },
  {
    id: '5',
    title: 'Fix Bug - Mobile Compatibility',
    description: 'The app is crashing on some Android devices.',
    status: 'In Progress',
    assignees: [assignees[0], assignees[2]],
    type: 'Bug',
    startDate: '2024-04-17',
    endDate: '2024-05-15',
    priority: 'Urgent',
    isCompleted: false,
  },
  {
    id: '6',
    title: 'Review Marketing Campaign',
    description: 'Analyze the effectiveness of recent social media.',
    status: 'In Progress',
    assignees: [assignees[4]],
    type: 'Review',
    startDate: '2024-05-10',
    endDate: '2024-07-18',
    priority: 'Medium',
    isCompleted: false,
  },
  {
    id: '7',
    title: 'Conduct User Research',
    description: 'Gather feedback from users to identify areas.',
    status: 'In Progress',
    assignees: [assignees[1], assignees[5]],
    type: 'Testing',
    startDate: '2024-06-11',
    endDate: '2024-07-17',
    priority: 'Medium',
    isCompleted: false,
  },
  {
    id: '8',
    title: 'Update Documentation',
    description: 'Ensure all documentation is up-to-date and accurate.',
    status: 'In Progress',
    assignees: [assignees[3]],
    type: 'Review',
    startDate: '2024-05-27',
    endDate: '2024-06-11',
    priority: 'Low',
    isCompleted: false,
  },
  {
    id: '9',
    title: 'Optimize Database Performance',
    description: 'Improve database query efficiency & scalability.',
    status: 'Done',
    assignees: [assignees[0], assignees[3]],
    type: 'Feature',
    startDate: '2024-04-17',
    endDate: '2024-05-15',
    priority: 'Medium',
    isCompleted: true,
  },
  {
    id: '10',
    title: 'Improve API Security',
    description: 'Enhance API security measures to protect.',
    status: 'Done',
    assignees: [assignees[2], assignees[4]],
    type: 'Feature',
    startDate: '2024-05-10',
    endDate: '2024-07-18',
    priority: 'Urgent',
    isCompleted: true,
  },
  {
    id: '11',
    title: 'Implement API for Task Creation',
    description: 'Develop an API endpoint to create new tasks.',
    status: 'Done',
    assignees: [assignees[1], assignees[5]],
    type: 'Feature',
    startDate: '2024-05-27',
    endDate: '2024-06-11',
    priority: 'Low',
    isCompleted: true,
  },
  {
    id: '12',
    title: 'Develop API Endpoints',
    description: 'Build the necessary API endpoints',
    status: 'To Do',
    assignees: [assignees[0], assignees[1]],
    type: 'Back-End',
    startDate: '2025-08-31', // Assuming 'D - 149' from today (April 4, 2025)
    endDate: '2025-09-01',   // You'll need to determine an appropriate end date
    priority: 'High',
    isCompleted: false,
    progress: 0,
  },
  {
    id: '13',
    title: 'Ensure Responsive Design',
    description: 'Test and adjust the UI for responsive',
    status: 'To Do',
    assignees: [assignees[2], assignees[3], assignees[4]],
    type: 'Front-End',
    startDate: '2025-09-01', // Assuming 'D - 148' from today
    endDate: '2025-09-02',   // You'll need to determine an appropriate end date
    priority: 'Medium',
    isCompleted: false,
    progress: 0,
  },
  {
    id: '14',
    title: 'Implement UI Components',
    description: 'Develop front-end components',
    status: 'To Do',
    assignees: [assignees[5], assignees[0]],
    type: 'Front-End',
    startDate: '2025-09-02', // Assuming 'D - 147' from today
    endDate: '2025-09-03',   // You'll need to determine an appropriate end date
    priority: 'Medium',
    isCompleted: false,
    progress: 0,
  },
  {
    id: '15',
    title: 'Create Clickable Prototype',
    description: 'Landing page for management app',
    status: 'On Progress',
    assignees: [assignees[1], assignees[2]],
    type: 'UI / UX Design',
    startDate: '2025-09-03', // Assuming 'D - 146' from today
    endDate: '2025-09-04',   // You'll need to determine an appropriate end date
    priority: 'High',
    isCompleted: false,
    progress: 30,
  },
  {
    id: '16',
    title: 'Choose Tech Stack',
    description: 'Decide on the FE & BE technologies',
    status: 'On Progress',
    assignees: [assignees[3]],
    type: 'UI / UX Design',
    startDate: '2025-09-04', // Assuming 'D - 145' from today
    endDate: '2025-09-05',   // You'll need to determine an appropriate end date
    priority: 'Medium',
    isCompleted: false,
    progress: 20,
  },
  {
    id: '17',
    title: 'Design High-Fidelity',
    description: 'Develop detailed and polished UI',
    status: 'In Review',
    assignees: [assignees[4]],
    type: 'UI / UX Design',
    startDate: '2025-09-05', // Assuming 'D - 144' from today
    endDate: '2025-09-06',   // You'll need to determine an appropriate end date
    priority: 'Low',
    isCompleted: false,
    progress: 40,
  },
  {
    id: '18',
    title: 'Design High-Fidelity v2',
    description: 'Inserting the design into the mockup',
    status: 'In Review',
    assignees: [assignees[5], assignees[0]],
    type: 'UI / UX Design',
    startDate: '2025-09-06', // Assuming 'D - 143' from today
    endDate: '2025-09-07',   // You'll need to determine an appropriate end date
    priority: 'Low',
    isCompleted: false,
    progress: 44,
  },
  {
    id: '19',
    title: 'Wireframing',
    description: 'Create Low-Fidelity Wireframes',
    status: 'Completed',
    assignees: [assignees[1], assignees[2], assignees[3]],
    type: 'UI / UX Design',
    startDate: '2025-09-07', // Assuming 'D - 142' from today
    endDate: '2025-09-08',   // You'll need to determine an appropriate end date
    priority: 'High',
    isCompleted: true,
    progress: 100,
  },
  {
    id: '20',
    title: 'Conduct Market Research',
    description: 'Research similar apps in the market',
    status: 'Completed',
    assignees: [assignees[4], assignees[5]],
    type: 'Ideation',
    startDate: '2025-09-08', // Assuming 'D - 141' from today
    endDate: '2025-09-09',   // You'll need to determine an appropriate end date
    priority: 'Medium',
    isCompleted: true,
    progress: 100,
  },
  {
    id: '21',
    title: 'Define App Concept',
    description: 'Brainstorm ideas for the app\'s core',
    status: 'Completed',
    assignees: [assignees[0]],
    type: 'Ideation',
    startDate: '2025-09-09', // Assuming 'D - 140' from today
    endDate: '2025-09-10',   // You'll need to determine an appropriate end date
    priority: 'Low',
    isCompleted: true,
    progress: 100,
  },
];

// Data.js
export const calendarEvents = [
  {
    day: 'Monday , 24 Sept',
    events: [
      {
        title: 'Team Building & Collaboration',
        time: '09.30 am - 10.30 a.m',
        description: 'Identify areas for improvement in team collaboration or communication.',
        tags: ['Review', 'Daily', 'Materials'],
      },
      {
        title: 'Risk Assessment & Mitigation',
        time: '13.00 pm - 14.30 p.m',
        description: 'Review the project\'s risk management plan and make necessary adjustments.',
        tags: ['Testing', 'Review', 'Daily'],
      },
    ],
  },
  {
    day: 'Tuesday , 25 Sept',
    events: [
      {
        title: 'Daily Standup - Development',
        time: '11.30 am - 13.30 pm',
        description: 'Well start by briefly discussing what we achieved and encountered yesterday. This will help us identify areas where w',
        tags: ['Testing', 'Review', 'Daily'],
        action: 'Join the Meeting',
      },
      {
        title: 'Personal & Professional Goals',
        time: '15.30 pm - 16.30 p.m',
        description: '',
        tags: [],
      },
    ],
  },
  {
    day: 'Wednesday , 26 Sept',
    events: [
      {
        title: 'Knowledge Sharing & Learning',
        time: '09.30 am - 10.30 a.m',
        description: 'Discuss recent articles, or conferences that members have found valuable.',
        tags: ['Sharing', 'Daily', 'Materials'],
      },
      {
        title: 'Data Management & Analytics',
        time: '11.30 am - 13.30 p.m',
        description: 'Identify opportunities for data-driven decision-making.',
        tags: ['Materials', 'Review'],
      },
      {
        title: 'DevOps & CI/CD',
        time: '14.30 pm - 15.00 p.m',
        description: 'I\'d like to discuss our plan for the next quarter. I\'ll add the agenda later',
        tags: ['Materials', 'Review', 'Daily'],
      },
    ],
  },
  {
    day: 'Thursday , 27 Sept',
    events: [
      {
        title: 'Mentorship & Sponsorship',
        time: '09.30 am - 10.00 am',
        description: 'Id like to discuss our plan for the next quarter. Ill add the agenda later.',
        tags: ['Materials', 'Mentoring'],
      },
      {
        title: 'Agile Methodology & Scrum',
        time: '11.30 am - 12.30 p.m',
        description: '',
        tags: [],
      },
      {
        title: 'Daily Standup - Designer',
        time: '13.30 pm - 14.30 pm',
        description: 'If any issues or roadblocks are preventing us from moving forward, well discuss them openly and brainstorm so',
        tags: ['Testing', 'Review', 'Daily'],
        action: 'Join the Meeting',
      },
    ],
  },
];

export const emailData = [
  {
    id: 1,
    sender: { name: "Arlene McCoy", email: "arlene@bio.com" },
    subject: "Thank You for Your Interest in SaaS Collaboration",
    body: "Thank you for showing interest in our SaaS collaboration tool! We’re excited to help you streamline your workflow and enhance productivity. Let us know if you have any questions!",
    timestamp: "Today, 10:32 AM",
    isRead: false,
    isSent: false,
    isDraft: false,
    attachments: [],
  },
  {
    id: 2,
    sender: { name: "Kathryn Murphy", email: "kathryn.murphy@example.com" },
    subject: "Following Up on Your Recent Inquiry",
    body: "I hope this message finds you well. I wanted to check in regarding your recent inquiry. If you need any further details or assistance, feel free to reach out.",
    timestamp: "Today, 9:18 AM",
    isRead: false,
    isSent: false,
    isDraft: false,
    attachments: [],
  },
  {
    id: 3,
    sender: { name: "Dianne Russell", email: "dianne.russell@example.com" },
    subject: "About Your Free Consultation",
    body: "Thank you for signing up for the free consultation. We look forward to discussing your digital marketing strategy and answering any questions you may have.",
    timestamp: "Yesterday, 6:44 AM",
    isRead: true,
    isSent: false,
    isDraft: false,
    attachments: [],
  },
  {
    id: 4,
    sender: { name: "Floyd Miles", email: "floyd.miles@example.com" },
    subject: "New Features to Enhance Your CRM",
    body: "Discover the latest updates designed to optimize your workflow and elevate your CRM experience. Check out the attached files for more details.",
    timestamp: "Yesterday, 1:58 AM",
    isRead: true,
    isSent: false,
    isDraft: false,
    attachments: [
      { filename: "Feedback_Forms.pdf", size: "2.4 MB" },
      { filename: "Campaign_Results.pdf", size: "24.8 MB" },
    ],
  },
  {
    id: 5,
    sender: { name: "Theresa Webb", email: "theresa.webb@example.com" },
    subject: "Approval Needed for New Order Delivery",
    body: "Dear John, I hope you’re having a wonderful day! I am reaching out to request your approval for the new order delivery. Please review and confirm at your earliest convenience.",
    timestamp: "Jul 10, 4:48 PM",
    isRead: true,
    isSent: false,
    isDraft: false,
    attachments: [],
  },
    {
      id: 6,
      sender: { name: "John Doe", email: "john.doe@example.com" },
      subject: "Project Update",
      body: "Hey team, here's the latest update on the project. Please review and let me know your thoughts.",
      timestamp: "Mar 25, 2025",
      isRead: false,
      isSent: false,
      isDraft: false,
      attachments: [{ filename: "project_update.pdf", size: "1.2MB" }],
    },
    {
      id: 7,
      sender: { name: "Alice Smith", email: "alice.smith@example.com" },
      subject: "Meeting Reminder",
      body: "Reminder: Our weekly team meeting is scheduled for tomorrow at 10 AM.",
      timestamp: "Mar 26, 2025",
      isRead: true,
      isSent: false,
      isDraft: false,
      attachments: [],
    },
    {
      id: 8,
      sender: { name: "You", email: "your.email@example.com" },
      subject: "Follow-up on Proposal",
      body: "Hi Mike, just following up on the proposal I sent last week. Let me know your thoughts.",
      timestamp: "Mar 24, 2025",
      isRead: true,
      isSent: true,
      isDraft: false,
      attachments: [],
    },
    {
      id: 9,
      sender: { name: "David Lee", email: "david.lee@example.com" },
      subject: "Invoice for March",
      body: "Attached is the invoice for March. Please process the payment at your earliest convenience.",
      timestamp: "Mar 23, 2025",
      isRead: false,
      isSent: false,
      isDraft: false,
      attachments: [{ filename: "invoice_march.pdf", size: "500KB" }],
    },
    {
      id: 10,
      sender: { name: "Emma Brown", email: "emma.brown@example.com" },
      subject: "Draft: New Blog Post",
      body: "Here's a draft of my new blog post. Let me know if you have any feedback before I publish.",
      timestamp: "Mar 22, 2025",
      isRead: false,
      isSent: false,
      isDraft: true,
      attachments: [],
    },
    {
      id: 11,
      sender: { name: "You", email: "your.email@example.com" },
      subject: "Job Application Submission",
      body: "Dear Hiring Manager, please find attached my resume and cover letter for the Software Engineer position.",
      timestamp: "Mar 21, 2025",
      isRead: true,
      isSent: true,
      isDraft: false,
      attachments: [{ filename: "resume.pdf", size: "800KB" }],
    },
  
];


const dummyEmployeeData = [
  // Level 1: C-Suite/Leadership
  {
    id: '1',
    name: 'Snehal Baraskar',
    title: 'CEO',
    department: 'Executive',
    location: 'Hyderabad',
    phone: '9029876543',
    email: 'snehal.baraskar@example.com',
    managerId: null,
    profileImage: ava1,
  },
  
  // Level 2: Department Heads (reporting to CEO)
  {
    id: '2',
    name: 'Aish Rautela',
    title: 'CTO',
    department: 'Technology',
    location: 'Hyderabad',
    phone: '8765432109',
    email: 'aish.rautela@example.com',
    managerId: '1',
    profileImage: ava2,
  },
  {
    id: '3',
    name: 'Ajay Hiremath',
    title: 'CBO',
    department: 'Business',
    location: 'Hyderabad',
    phone: '9876543210',
    email: 'ajay.hiremath@example.com',
    managerId: '1',
    profileImage: ava5,
  },
  {
    id: '4',
    name: 'Raksha Rai',
    title: 'CHRO',
    department: 'HR',
    location: 'Hyderabad',
    phone: '9432107658',
    email: 'raksha.rai@example.com',
    managerId: '1',
    profileImage: ava3,
  },
  {
    id: '14',
    name: 'Karthik Reddy',
    title: 'COO',
    department: 'Operations',
    location: 'Bangalore',
    phone: '7689054321',
    email: 'karthik.reddy@example.com',
    managerId: '1',
    profileImage: ava15,
  },

  // Level 3: Department Leadership (reporting to C-level)
  // Technology Team
  {
    id: '7',
    name: 'Nisha Gupta',
    title: 'VP of Engineering',
    department: 'Technology',
    location: 'Pune',
    phone: '9823456789',
    email: 'nisha.gupta@example.com',
    managerId: '2',
    profileImage: ava4,
  },
  // Business Team
  {
    id: '10',
    name: 'Arjun Nair',
    title: 'VP of Marketing',
    department: 'Business',
    location: 'Hyderabad',
    phone: '9087654321',
    email: 'arjun.nair@example.com',
    managerId: '3',
    profileImage: ava12,
  },
  // HR Team
  {
    id: '5',
    name: 'Drake Ramoisr',
    title: 'HR Director',
    department: 'HR',
    location: 'Hyderabad',
    phone: '9687543210',
    email: 'qloron.tech@example.com',
    managerId: '4',
    profileImage: ava7,
  },
  // Operations Team
  {
    id: '15',
    name: 'Ananya Patel',
    title: 'Operations Manager',
    department: 'Operations',
    location: 'Delhi',
    phone: '8789054321',
    email: 'ananya.patel@example.com',
    managerId: '14',
    profileImage: ava10,
  },

  // Level 4: Managers (reporting to VPs/Directors)
  // Engineering Managers
  {
    id: '8',
    name: 'Rahul Mehta',
    title: 'Engineering Manager',
    department: 'Technology',
    location: 'Bangalore',
    phone: '9988776655',
    email: 'rahul.mehta@example.com',
    managerId: '7',
    profileImage: ava6,
  },
  // Marketing Managers
  {
    id: '11',
    name: 'Sanya Kapoor',
    title: 'Marketing Manager',
    department: 'Business',
    location: 'Mumbai',
    phone: '8097654321',
    email: 'sanya.kapoor@example.com',
    managerId: '10',
    profileImage: ava14,
  },
  // HR Managers
  {
    id: '12',
    name: 'Deepika Sharma',
    title: 'HR Manager',
    department: 'HR',
    location: 'Hyderabad',
    phone: '9123456780',
    email: 'deepak.sharma@example.com',
    managerId: '5',
    profileImage: ava9,
  },

  // Level 5: Individual Contributors
  // Engineers
  {
    id: '6',
    name: 'Vakil Verma',
    title: 'Senior Software Engineer',
    department: 'Technology',
    location: 'Hyderabad',
    phone: '8123456789',
    email: 'vakil.verma@example.com',
    managerId: '8',
    profileImage: ava8,
  },
  {
    id: '9',
    name: 'Meera Iyer',
    title: 'Software Engineer',
    department: 'Technology',
    location: 'Chennai',
    phone: '8976543210',
    email: 'meera.iyer@example.com',
    managerId: '8',
    profileImage: ava11,
  },
  // Finance
  {
    id: '13',
    name: 'Priya Rao',
    title: 'Senior Accountant',
    department: 'Finance',
    location: 'Pune',
    phone: '7098765432',
    email: 'priya.rao@example.com',
    managerId: '12',
    profileImage: ava13,
  }
];
  
  export default dummyEmployeeData;
  

// Data.js

export const attendanceData = [
  {
    date: 'Mar 18, Tue',
    status: 'on-time',
    effectiveHours: '0h 0m +',
    grossHours: '0h 0m +',
    arrival: 'On Time',
  },
  {
    date: 'Mar 17, Mon',
    status: 'present',
    effectiveHours: '10h 52m',
    grossHours: '10h 12m',
    arrival: 'On Time',
    presentPercentage: 90, // Example percentage for visual
  },
  {
    date: 'Mar 16, Sun',
    status: 'weekly-off',
  },
  {
    date: 'Mar 15, Sat',
    status: 'weekly-off',
  },
  {
    date: 'Mar 14, Fri',
    status: 'present',
    effectiveHours: '8h 30m',
    grossHours: '8h 45m',
    arrival: 'On Time',
    presentPercentage: 75,
  },
  {
    date: 'Mar 13, Thu',
    status: 'late',
    effectiveHours: '7h 50m',
    grossHours: '8h 0m',
    arrival: 'Late by 15 mins',
    presentPercentage: 65,
  },
  {
    date: 'Mar 12, Wed',
    status: 'present',
    effectiveHours: '9h 10m',
    grossHours: '9h 0m',
    arrival: 'On Time',
    presentPercentage: 80,
  },
  {
    date: 'Mar 11, Tue',
    status: 'present',
    effectiveHours: '10h 0m',
    grossHours: '10h 15m',
    arrival: 'On Time',
    presentPercentage: 85,
  },
  {
    date: 'Mar 10, Mon',
    status: 'present',
    effectiveHours: '8h 40m',
    grossHours: '8h 30m',
    arrival: 'On Time',
    presentPercentage: 70,
  },
  {
    date: 'Mar 9, Sun',
    status: 'weekly-off',
  },
  {
    date: 'Mar 8, Sat',
    status: 'weekly-off',
  },
  {
    date: 'Mar 7, Fri',
    status: 'present',
    effectiveHours: '9h 5m',
    grossHours: '9h 20m',
    arrival: 'On Time',
    presentPercentage: 78,
  },
  {
    date: 'Mar 6, Thu',
    status: 'present',
    effectiveHours: '8h 15m',
    grossHours: '8h 0m',
    arrival: 'On Time',
    presentPercentage: 68,
  },
  {
    date: 'Mar 5, Wed',
    status: 'absent',
    effectiveHours: '-',
    grossHours: '-',
    arrival: '-',
  },
  {
    date: 'Mar 4, Tue',
    status: 'present',
    effectiveHours: '10h 30m',
    grossHours: '10h 45m',
    arrival: 'On Time',
    presentPercentage: 92,
  },
  {
    date: 'Mar 3, Mon',
    status: 'present',
    effectiveHours: '7h 45m',
    grossHours: '8h 0m',
    arrival: 'On Time',
    presentPercentage: 60,
  },
  {
    date: 'Mar 2, Sun',
    status: 'weekly-off',
  },
  {
    date: 'Mar 1, Sat',
    status: 'weekly-off',
  },
];

export const attendanceStats = {
  me: {
    avgHours: '10h 25m',
    onTimeArrivalPercentage: 100,
  },
  myTeam: {
    avgHours: '7h 15m',
    onTimeArrivalPercentage: 58,
  },
};

export const eventData = [
  { id: 1, date: '2025-03-05', title: 'Candidate Interview 10:00 AM' },
  { id: 2, date: '2025-03-05', title: 'Follow Up with Client' },
  { id: 3, date: '2025-03-12', title: 'Team Meeting 2:00 PM' },
  { id: 4, date: '2025-03-15', title: 'Performance Review 11:00 AM' },
  { id: 5, date: '2025-03-18', title: 'Product Launch Preparation' },
  { id: 6, date: '2025-03-20', title: 'Marketing Strategy Discussion' },
  { id: 7, date: '2025-03-22', title: 'Client Presentation 3:30 PM' },
  { id: 8, date: '2025-03-25', title: 'Budget Planning for Next Quarter' },
  { id: 9, date: '2025-03-28', title: 'Project Deadline' },
  { id: 10, date: '2025-04-02', title: 'New Employee Orientation' },
  { id: 11, date: '2025-04-05', title: 'Annual General Meeting' },
  { id: 12, date: '2025-04-08', title: 'Code Review Session' },
  { id: 13, date: '2025-04-10', title: 'HR Policy Update Meeting' },
  { id: 14, date: '2025-04-15', title: 'Stakeholder Review Call' },
  { id: 15, date: '2025-04-18', title: 'Industry Conference Attendance' },
  { id: 16, date: '2025-04-22', title: 'Product Demo for Investors' },
  { id: 17, date: '2025-04-28', title: 'Team Building Activity' },
  { id: 18, date: '2025-05-01', title: 'Quarterly Sales Report Submission' },
  { id: 19, date: '2025-05-05', title: 'Website Redesign Planning' },
  { id: 20, date: '2025-05-10', title: 'Cybersecurity Audit' }
];


// Data.js
export const weekDays = [
  {
    short: 'M',
    fullDate: 'Mar 24, Mon',
    schedule: '9:00 AM - 6:00 PM',
    expectedHours: '9h 0m',
    completedHours: '7h 30m',
    progress: '83%',
  },
  {
    short: 'T',
    fullDate: 'Mar 25, Tue',
    schedule: '10:00 AM - 7:00 PM',
    expectedHours: '9h 0m',
    completedHours: '8h 15m',
    progress: '91%',
  },
  {
    short: 'W',
    fullDate: 'Mar 26, Wed',
    schedule: '8:00 AM - 5:00 PM',
    expectedHours: '9h 0m',
    completedHours: '5h 24m',
    progress: '60%',
  },
  {
    short: 'T',
    fullDate: 'Mar 27, Thu',
    schedule: '9:30 AM - 6:30 PM',
    expectedHours: '9h 0m',
    completedHours: '0h 0m',
    progress: '70%',
  },
  {
    short: 'F',
    fullDate: 'Mar 28, Fri',
    schedule: '10:30 AM - 7:30 PM',
    expectedHours: '9h 0m',
    completedHours: '0h 0m',
    progress: '80%',
  },
  {
    short: 'S',
    fullDate: 'Mar 29, Sat',
    schedule: 'Weekly Off',
    expectedHours: '0h 0m',
    completedHours: '0h 0m',
    progress: '50%',
  },
  {
    short: 'S',
    fullDate: 'Mar 30, Sun',
    schedule: 'Weekly Off',
    expectedHours: '0h 0m',
    completedHours: '0h 0m',
    progress: '0%',
  },
];

export const currentTimeAction = {
  time: '02:46:40 PM',
  date: 'Tue 8, Mar 2025',
};

export const actionLinks = [
  'Shift Info',
  'Work From Home',
  'On Duty',
  'Partial Day Request',
  'Attendance Policy',
];

export const payrollData = {
  period: '01 July - 31 July 2024',
  payrollCost: 12500,
  payrollCostChange: '20% last month',
  totalExpense: 2560,
  totalExpenseChange: '20.1% last month',
  pendingPayments: 4700,
  pendingPaymentsChange: '-50 Total Employee',
  totalPayrolls: 200,
  newEmployees: '+10 New Employee',
  payrollCostOverview: {
    title: 'Payroll Cost Overview',
    period: 'July 2024',
    breakdown: [
      { label: 'Salaries', amount: 8740.00, percentage: '51.3%' },
      { label: 'Taxes', amount: 2110.00, percentage: '12.1%' },
      // Add more breakdown items if needed
    ],
    monthlyData: [
      { month: 'Mar', cost: 3000, expense: 1200 },
      { month: 'Apr', cost: 4500, expense: 1800 },
      { month: 'May', cost: 5200, expense: 2100 },
      { month: 'Jun', cost: 7800, expense: 2500 },
      { month: 'Jul', cost: 8740, expense: 2800 },
      { month: 'Aug', cost: 6500, expense: 2200 },
      { month: 'Sep', cost: 5800, expense: 1900 },
      { month: 'Oct', cost: 6200, expense: 2000 },
      { month: 'Nov', cost: 7000, expense: 2300 },
      // ...
  ],
  },
  bonusesAndIncentives: {
    title: 'Bonuses and Incentives',
    total: 10500,
    bonuses: 5100,
    incentives: 5400,
  },
  payrollList: [
    {
      payrollId: 'PYRL120124',
      employeeName: 'Hazel Nutt',
      role: 'Lead UI / UX Designer',
      dateTime: '21 Jun, 2024 - 05:05 pm',
      totalSalary: 2500.00,
      reimbursement: 500.00,
      status: 'Completed',
    },
    {
      payrollId: 'PYRL120125',
      employeeName: 'Simon Cyrene',
      role: 'Sr. UI / UX Designer',
      dateTime: '21 Jun, 2024 - 05:03 pm',
      totalSalary: 2300.00,
      reimbursement: 100.00,
      status: 'Completed',
    },
    {
      payrollId: 'PYRL120126',
      employeeName: 'Aida Bugg',
      role: 'Jr Graphics Designer',
      dateTime: '21 Jun, 2024 - 05:01 pm',
      totalSalary: 2000.00,
      reimbursement: 1000.00,
      status: 'Pending',
    },
    {
      payrollId: 'PYRL120127',
      employeeName: 'Peg Legge',
      role: 'Jr Animator',
      dateTime: '21 Jun, 2024 - 05:00 pm',
      totalSalary: 2100.00,
      reimbursement: 500.00,
      status: 'Pending',
    },
    {
      payrollId: 'PYRL120128',
      employeeName: 'Simon Cyrene',
      role: 'Sr UI / UX Designer',
      dateTime: '21 Jun, 2024 - 05:03 pm',
      totalSalary: 2300.00,
      reimbursement: 100.00,
      status: 'Completed',
    },
    // Add more payroll entries
  ],
  
};

export const hiringData = {
  stats: {
    openPositions: 12,
    openPositionsChange: '+2',
    totalApplicants: 135,
    totalApplicantsChange: '+15%',
    hiringRate: '68%',
    hiringRateChange: '+5%',
    avgTimeToHire: '32 days',
    avgTimeToHireChange: '-3 days'
  },
  positions: [
    {
      id: 1,
      title: 'Senior UX Designer',
      department: 'Design',
      applicants: 24,
      status: 'Active',
      posted: '2023-05-15',
      hiringManager: 'Sarah Johnson',
      progress: 75,
      type: 'Full-time'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'Engineering',
      applicants: 42,
      status: 'Active',
      posted: '2023-06-02',
      hiringManager: 'Michael Chen',
      progress: 60,
      type: 'Full-time'
    },
    {
      id: 3,
      title: 'HR Coordinator',
      department: 'Human Resources',
      applicants: 18,
      status: 'On Hold',
      posted: '2023-04-28',
      hiringManager: 'David Wilson',
      progress: 30,
      type: 'Full-time'
    },
    {
      id: 4,
      title: 'Marketing Intern',
      department: 'Marketing',
      applicants: 36,
      status: 'Closed',
      posted: '2023-03-10',
      hiringManager: 'Emily Rodriguez',
      progress: 100,
      type: 'Internship'
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      applicants: 15,
      status: 'Active',
      posted: '2023-06-15',
      hiringManager: 'Michael Chen',
      progress: 45,
      type: 'Full-time'
    },
    {
      id: 6,
      title: 'Backend Developer',
      department: 'Engineering',
      applicants: 28,
      status: 'Active',
      posted: '2023-07-01',
      hiringManager: 'Sophia Martinez',
      progress: 50,
      type: 'Full-time'
    },
    {
      id: 7,
      title: 'Product Manager',
      department: 'Product',
      applicants: 20,
      status: 'On Hold',
      posted: '2023-06-20',
      hiringManager: 'James Anderson',
      progress: 40,
      type: 'Full-time'
    },
    {
      id: 8,
      title: 'Data Scientist',
      department: 'Data Science',
      applicants: 33,
      status: 'Active',
      posted: '2023-05-30',
      hiringManager: 'Olivia Brown',
      progress: 70,
      type: 'Full-time'
    },
    {
      id: 9,
      title: 'Customer Support Specialist',
      department: 'Customer Service',
      applicants: 19,
      status: 'Closed',
      posted: '2023-04-15',
      hiringManager: 'William Harris',
      progress: 100,
      type: 'Full-time'
    },
    {
      id: 10,
      title: 'Business Analyst',
      department: 'Business Intelligence',
      applicants: 22,
      status: 'Active',
      posted: '2023-07-10',
      hiringManager: 'Emma White',
      progress: 65,
      type: 'Full-time'
    },
    {
      id: 11,
      title: 'Machine Learning Engineer',
      department: 'AI Research',
      applicants: 30,
      status: 'Active',
      posted: '2023-07-15',
      hiringManager: 'Liam Scott',
      progress: 55,
      type: 'Full-time'
    },
    {
      id: 12,
      title: 'Content Strategist',
      department: 'Marketing',
      applicants: 14,
      status: 'On Hold',
      posted: '2023-06-25',
      hiringManager: 'Sophia Taylor',
      progress: 35,
      type: 'Full-time'
    },
    {
      id: 13,
      title: 'IT Support Specialist',
      department: 'IT',
      applicants: 25,
      status: 'Active',
      posted: '2023-07-05',
      hiringManager: 'Ryan Evans',
      progress: 50,
      type: 'Full-time'
    },
    {
      id: 14,
      title: 'Sales Representative',
      department: 'Sales',
      applicants: 40,
      status: 'Active',
      posted: '2023-06-30',
      hiringManager: 'Noah Carter',
      progress: 60,
      type: 'Full-time'
    },
    {
      id: 15,
      title: 'Security Analyst',
      department: 'Cybersecurity',
      applicants: 18,
      status: 'Active',
      posted: '2023-07-12',
      hiringManager: 'Lucas Brown',
      progress: 65,
      type: 'Full-time'
    },
    {
      id: 16,
      title: 'Software Engineer',
      department: 'Engineering',
      applicants: 50,
      status: 'Active',
      posted: '2023-07-20',
      hiringManager: 'Daniel Garcia',
      progress: 70,
      type: 'Full-time'
    }
  ]
};

// Data.js
export const projectsData = {
  stats: {
    totalProjects: 18,
    totalProjectsChange: '+3',
    activeTeams: 7,
    activeTeamsChange: '+1',
    avgProgress: '65%',
    avgProgressChange: '+5%',
    onTime: '72%',
    onTimeChange: '+8%'
  },
  projects: [
    {
      id: 1,
      name: 'Employee Onboarding System',
      description: 'Develop new digital onboarding platform for new hires',
      team: 'HR Tech',
      priority: 'High',
      status: 'On Track',
      progress: 75,
      startDate: '2023-05-15',
      endDate: '2023-08-30'
    },
    {
      id: 2,
      name: 'Performance Review Update',
      description: 'Update performance review process and forms',
      team: 'HR Operations',
      priority: 'Medium',
      status: 'At Risk',
      progress: 45,
      startDate: '2023-06-01',
      endDate: '2023-07-15'
    },
    {
      id: 3,
      name: 'Diversity Training Program',
      description: 'Create new diversity and inclusion training materials',
      team: 'Learning & Development',
      priority: 'High',
      status: 'On Track',
      progress: 85,
      startDate: '2023-04-10',
      endDate: '2023-06-30'
    },
    {
      id: 4,
      name: 'Benefits Portal Redesign',
      description: 'Redesign employee benefits selection portal',
      team: 'HR Tech',
      priority: 'Medium',
      status: 'Off Track',
      progress: 30,
      startDate: '2023-05-01',
      endDate: '2023-07-15'
    },
    {
      id: 5,
      name: 'Remote Work Policy Update',
      description: 'Update company policies for hybrid work arrangements',
      team: 'HR Policy',
      priority: 'Low',
      status: 'Completed',
      progress: 100,
      startDate: '2023-03-01',
      endDate: '2023-04-15'
    }
  ]
};