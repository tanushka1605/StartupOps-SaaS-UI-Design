import { useState } from 'react';
import { AppSidebar } from './components/AppSidebar';
import { AppHeader } from './components/AppHeader';
import { Dashboard } from './components/Dashboard';
import { PitchDesk } from './components/PitchDesk';
import { Funding } from './components/Funding';
import { Teams } from './components/Teams';
import { Tasks } from './components/Tasks';
import { Analytics } from './components/Analytics';
import { InvestorView } from './components/InvestorView';
import { BudgetOptimizer } from './components/BudgetOptimizer';
import { Settings } from './components/Settings';
import { PitchSimulator } from './components/PitchSimulator';
import { AIAssistant } from './components/AIAssistant';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'pitch-desk':
        return <PitchDesk />;
      case 'funding':
        return <Funding />;
      case 'teams':
        return <Teams />;
      case 'tasks':
        return <Tasks />;
      case 'analytics':
        return <Analytics />;
      case 'investor-view':
        return <InvestorView />;
      case 'budget-optimizer':
        return <BudgetOptimizer />;
      case 'settings':
        return <Settings />;
      case 'pitch-simulator':
        return <PitchSimulator />;
      case 'ai-assistant':
        return <AIAssistant />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-background to-background/95 overflow-hidden">
      {/* Sidebar */}
      <AppSidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        currentView={currentView}
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AppHeader onNavigate={handleNavigate} />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="animate-in fade-in duration-300">
            {renderView()}
          </div>
        </main>
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}