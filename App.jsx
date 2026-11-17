import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { RequestProvider, useRequests } from './context/RequestContext.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import { UserDashboard } from './pages/UserDashboard.jsx';
import { AdminDashboard } from './pages/AdminDashboard.jsx';
import { TechnicianDashboard } from './pages/TechnicianDashboard.jsx';
import { ReportsPage } from './pages/ReportsPage.jsx';
import { UserManagementPage } from './pages/UserManagementPage.jsx';
import { DocumentationPage } from './pages/DocumentationPage.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Navbar } from './components/Navbar.jsx';
import { CreateRequestModal } from './components/CreateRequestModal.jsx';
import { RequestDetailModal } from './components/RequestDetailModal.jsx';
import { CampusDirectoryModal } from './components/CampusDirectoryModal.jsx';
import { NotificationToast } from './components/NotificationToast.jsx';

const MainShell = () => {
  const { isAuthenticated, isAdmin, isTechnician, isUser } = useAuth();
  const { isCreateModalOpen, setIsCreateModalOpen, toast, closeToast } = useRequests();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCampusDirOpen, setIsCampusDirOpen] = useState(false);

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // Determine current page component
  let pageContent = null;
  let pageTitle = 'Dashboard';

  if (activeTab === 'dashboard') {
    if (isAdmin) {
      pageContent = <AdminDashboard onNavigate={setActiveTab} />;
      pageTitle = 'Estate & Campus Operations Overview';
    } else if (isTechnician) {
      pageContent = <TechnicianDashboard />;
      pageTitle = 'Technician Work Orders';
    } else {
      pageContent = <UserDashboard />;
      pageTitle = 'Faculty & Resident Portal';
    }
  } else if (activeTab === 'my-requests') {
    pageContent = <UserDashboard />;
    pageTitle = 'My Maintenance Requests';
  } else if (activeTab === 'all-requests') {
    pageContent = <AdminDashboard onNavigate={setActiveTab} />;
    pageTitle = 'Central Maintenance Queue';
  } else if (activeTab === 'assigned-jobs') {
    pageContent = <TechnicianDashboard />;
    pageTitle = 'My Assigned Work Orders';
  } else if (activeTab === 'analytics') {
    pageContent = <ReportsPage />;
    pageTitle = 'Campus Operations Reports & Analytics';
  } else if (activeTab === 'users') {
    pageContent = <UserManagementPage />;
    pageTitle = 'Personnel & Technician Directory';
  } else if (activeTab === 'docs') {
    pageContent = <DocumentationPage />;
    pageTitle = 'OOAD Documentation & UML Diagrams';
  }

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenCampusDirectory={() => setIsCampusDirOpen(true)}
        isMobileOpen={isMobileOpen}
        closeMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Container */}
      <div className="main-content">
        <Navbar
          title={pageTitle}
          onToggleMobile={() => setIsMobileOpen(!isMobileOpen)}
          onOpenCampusDirectory={() => setIsCampusDirOpen(true)}
        />

        <main className="page-wrapper">
          {pageContent}
        </main>
      </div>

      {/* Global Modals */}
      <CreateRequestModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
      <RequestDetailModal />
      <CampusDirectoryModal
        isOpen={isCampusDirOpen}
        onClose={() => setIsCampusDirOpen(false)}
      />

      {/* Floating Notifications */}
      <NotificationToast toast={toast} onClose={closeToast} />
    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <RequestProvider>
        <MainShell />
      </RequestProvider>
    </AuthProvider>
  );
}

export default App;
