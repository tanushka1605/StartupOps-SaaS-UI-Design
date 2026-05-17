import { 
  LayoutDashboard, 
  Presentation, 
  DollarSign, 
  Users, 
  CheckSquare, 
  BarChart3, 
  Eye, 
  Settings,
  ChevronLeft
} from 'lucide-react';

interface AppSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
  currentView: string;
  onNavigate: (view: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pitch-desk', label: 'Pitch Desk', icon: Presentation },
  { id: 'funding', label: 'Funding', icon: DollarSign },
  { id: 'teams', label: 'Teams', icon: Users },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'investor-view', label: 'Investor View', icon: Eye },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export function AppSidebar({ isCollapsed, onToggle, currentView, onNavigate }: AppSidebarProps) {
  return (
    <aside
      className={`h-screen bg-card border-r border-border transition-all duration-300 flex flex-col shadow-sm ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground">SO</span>
            </div>
            <span className="font-medium">StartupOps</span>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-1.5 hover:bg-muted rounded-lg transition-colors"
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronLeft className={`w-4 h-4 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted text-foreground'
              }`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}