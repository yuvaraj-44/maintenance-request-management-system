# FixFlow — Campus Maintenance Request Management System (OOAD)
### K.Ramakrishnan College of Technology (Autonomous), Tiruchirappalli
**Department of Computer Science and Engineering**  
**Course:** CSB1303 – Object Oriented Analysis & Design (Semester 5)

#### 👥 Project Team:
- **Sakthivel K** — `2403811710421137`
- **Saran I** — `2403811710421140`
- **Yuvaraj S** — `2403811710421187`

#### 🎓 Faculty Supervision:
- **Project Supervisor:** Ms. S. Shahina Shalu M.E., Assistant Professor / CSE
- **Head of Department:** Mr. R. Rajavarman M.E., (Ph.D.,), Assistant Professor (Sr. Grade) / CSE
- **Principal:** Dr. N. Vasudevan

---

## 🏛️ Modeled Campus Infrastructure

### 1. Circuit Block (Computing & Circuit Engineering — 4 Floors + Ground)
- **Ground Floor:** Commercial Hall, Student Amenities, Campus Stationery Store, Central Maintenance Helpdesk.
- **1st Floor:** Department of Electrical & Electronics Engineering (EEE) — Power Electronics Lab, Electrical Machines Lab, Control Systems Lab.
- **2nd Floor:** Department of Artificial Intelligence & Data Science (AI & DS) — AI & ML Lab, Data Analytics Lab.
- **3rd Floor:** Department of Computer Science & Engineering (CSE) — 5 Computer Labs (Data Structures, Web Tech, OOAD Lab, Networks, High Performance Computing) & Classrooms.
- **4th Floor:** Department of Electronics & Communication Engineering (ECE) — VLSI Design Lab, DSP Lab, Microwave & Optical Lab.

### 2. Unwind Block (Engineering, Technology & Science & Humanities — 5 Floors)
- **Ground Floor:** Automobile Engineering Workshop & Entrepreneurship Development Cell (EDC).
- **1st Floor:** Main Air-Conditioned Conference Hall, Principal Executive Boardroom, Administrative Section.
- **2nd Floor:** Department of Mechanical Engineering — Thermal Lab, Fluid Mechanics Lab, CAD/CAM Simulation Lab.
- **3rd Floor:** Department of Civil Engineering & Department of Information Technology (IT) — Civil Drawing Hall, Strength of Materials Lab, IT Systems Lab.
- **4th Floor:** Department of Science & Humanities (S&H) — 1st Year Engineering Classrooms (Sections A through E).
- **5th Floor:** Department of Science & Humanities Laboratories — Engineering Physics Lab, Engineering Chemistry Lab.

---

## 🌟 Key Features

### 1. Multi-Role Workflows (3 User Personas)
- **Faculty, Staff & Students (Residents):**
  - Personalized dashboard with open complaints and resolution progress.
  - Interactive block & floor navigator with drop-downs for Circuit Block, Unwind Block, and specific laboratories.
  - Submit maintenance requests across 6 categories (Electrical, Plumbing, Furniture, AC, Cleaning, Other).
  - Track live lifecycle status (`Submitted → Pending → Assigned → In Progress → Completed`).
  - Search, filter, and cancel unstarted requests.

- **Estate & Maintenance Administrator (Dr. S. Shanmugam):**
  - Executive overview cards: Total, Pending, In Progress, Completed, High/Urgent priority, and SLA resolution rate.
  - Central maintenance queue with multi-factor search and filter controls.
  - Assign / reassign certified trade technicians with custom dispatch instructions.
  - Workforce management: staff directory, active job workloads, and register new technicians.
  - Analytics & Reports: Block-wise complaint distribution (Circuit vs Unwind), category breakdown, and export/print features.

- **Field Maintenance Technician (Marcus Vance, David Chen, Sarah Jenkins):**
  - Dedicated technician workspace showing assigned work orders.
  - View problem descriptions, exact room location, and reporter contact details.
  - Accept assigned jobs to start work (`In Progress`).
  - Update job status (`In Progress`, `On Hold`, `Completed`).
  - Add diagnostic repair notes, parts replaced, and completion remarks.

### 2. Built-in OOAD Academic Documentation & Diagrams
- **Interactive In-App Documentation Viewer:** View rendered Mermaid UML diagrams directly in the browser during your college project presentation!
  - System Architecture Diagram
  - Use Case Diagram
  - Class Diagram (Inheritance, Polymorphism, Composition, Associations)
  - Sequence Diagrams (Request Submission, Assignment & Technician Resolution)
  - Activity Diagram (Maintenance Lifecycle Workflow)
  - Component Diagram
  - Database & Entity Relationship Diagram (ERD)
  - 10+ Detailed Verification Test Cases with expected and actual results.
  - Conclusion & Future Enhancements.
- Full markdown documentation also available in [`docs/OOAD_PROJECT_REPORT.md`](docs/OOAD_PROJECT_REPORT.md).

### 3. LocalStorage Persistence & Zero Cloud Cost
- Requires **no external database, no API keys, and no paid services**.
- All requests, assignments, notes, and user accounts persist across browser refreshes.
- Includes a **1-Click Reset to Demo Data** button anytime you want to restore the initial showcase state.

---

## 🔑 Demonstration Credentials

You can use the one-click login buttons on the login screen or enter these credentials:

| Role | Email | Password | Persona & KRCT Department |
| :--- | :--- | :--- | :--- |
| **Administrator** | `admin@demo.com` | `Admin123` | Dr. S. Shanmugam (Estate & Maintenance Officer) |
| **Faculty / Resident** | `user@demo.com` | `User123` | Prof. Priya Sharma (CSE Dept, Circuit Block 3rd Floor) |
| **Technician (Elec / HVAC)** | `technician@demo.com` | `Tech123` | Marcus Vance (Circuit Block In-Charge) |
| **Technician (Plumbing)** | `tech.plumbing@demo.com` | `Tech123` | David Chen (Unwind Block & Campus Water Works) |
| **Technician (Civil/Carpentry)** | `tech.furniture@demo.com` | `Tech123` | Sarah Jenkins (Lab Fixtures & Furniture) |

> **Pro-Tip for Presentations:** Use the **"Switch Role"** pill in the top navigation bar to seamlessly flip between Admin, User, and Technician roles in real-time with a single click!

---

## 🚀 Quick Start / Running Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9+ or higher)

### 1. Clone or Open the Project
Open a terminal in the project directory:
```bash
cd "c:\Users\SARAN\Desktop\OOAD SEM 5"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173
```

### 4. Build for Production (Optional)
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure

```text
├── docs/
│   └── OOAD_PROJECT_REPORT.md    # Complete college submission report & UML diagrams
├── src/
│   ├── components/               # Modular UI components
│   │   ├── CreateRequestModal.jsx# Request submission modal with validation
│   │   ├── EmptyState.jsx        # Empty state indicators
│   │   ├── MermaidViewer.jsx     # Live Mermaid diagram renderer
│   │   ├── MetricCard.jsx        # KPI metric cards
│   │   ├── Navbar.jsx            # Top navbar with quick role switcher
│   │   ├── NotificationToast.jsx # Floating toast alerts
│   │   ├── PriorityBadge.jsx     # Low/Medium/High/Urgent badges
│   │   ├── RequestDetailModal.jsx# Full lifecycle, audit trail, & actions
│   │   ├── RequestTable.jsx      # Filterable & searchable table
│   │   ├── Sidebar.jsx           # Responsive sidebar navigation
│   │   └── StatusBadge.jsx       # Colored status indicators
│   ├── context/
│   │   ├── AuthContext.jsx       # Session & role-based authentication
│   │   └── RequestContext.jsx    # Request lifecycle & operations provider
│   ├── models/                   # Pure OOAD Domain Models
│   │   ├── Assignment.js         # Technician assignment entity
│   │   ├── MaintenanceReport.js  # Analytics & reporting engine
│   │   ├── MaintenanceRequest.js # Core encapsulated request entity
│   │   ├── TimelineEvent.js      # Audit trail log entity
│   │   └── User.js               # Polymorphic User, ResidentUser, Admin, Tech
│   ├── pages/
│   │   ├── AdminDashboard.jsx    # Facilities administration overview
│   │   ├── DocumentationPage.jsx # In-app OOAD report & diagram viewer
│   │   ├── LoginPage.jsx         # Sign in, registration & 1-click logins
│   │   ├── ReportsPage.jsx       # Maintenance analytics & export
│   │   ├── TechnicianDashboard.jsx# Work orders & repair notes
│   │   ├── UserDashboard.jsx     # Resident portal & my requests
│   │   └── UserManagementPage.jsx# Staff & technician directory
│   ├── services/
│   │   ├── authService.js        # Authentication business logic
│   │   └── storageService.js     # LocalStorage persistence & initial seeds
│   ├── styles/
│   │   └── index.css             # Modern blue-and-white design system
│   ├── utils/
│   │   ├── formatters.js         # Date & status configuration helpers
│   │   └── validators.js         # Input validation rules
│   ├── App.jsx                   # Application routing and modals shell
│   └── main.jsx                  # React application entry point
├── index.html                    # HTML entry with Google Fonts & metadata
├── package.json
└── README.md                     # Project documentation & guide
```

---

## 🎓 OOAD Concepts Implemented

1. **Encapsulation:** Class state is protected through instance properties and mutated only via domain methods like `assignTo()`, `updateStatus()`, and `acceptJob()`.
2. **Inheritance:** `ResidentUser`, `Administrator`, and `Technician` inherit from abstract base `User`.
3. **Polymorphism:** Subclasses override permission queries (`canCreateRequest()`, `canAssignTechnician()`, `canUpdateRepairStatus()`).
4. **Association & Composition:** `MaintenanceRequest` owns a collection of `TimelineEvent` objects (composition) and holds a reference to an `Assignment` (association).
5. **State Machine Lifecycle:** Requests progress through:
   `Submitted → Pending → Assigned → In Progress → Completed`
   (also supporting `On Hold` and `Rejected`).
6. **Repository Pattern:** `storageService.js` isolates LocalStorage data operations from UI rendering.

---

## 🧪 Testing Verification
All 14 test cases spanning authentication, role access control, request creation, technician dispatch, status updates, cancellation, search filters, and LocalStorage persistence have passed. Detailed results are cataloged in [`docs/OOAD_PROJECT_REPORT.md`](docs/OOAD_PROJECT_REPORT.md#7-comprehensive-verification--test-suite).
