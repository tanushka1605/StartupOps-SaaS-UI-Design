import { Bell, ChevronDown, Sparkles, Presentation, Zap } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface AppHeaderProps {
  onNavigate: (view: string) => void;
}

export function AppHeader({ onNavigate }: AppHeaderProps) {
  return (
    <header className="h-16 border-b border-border bg-card/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-10">
      {/* Left side - Startup name and round selector */}
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-lg font-medium">TechVenture Inc.</h1>
          <p className="text-xs text-muted-foreground">Early-stage SaaS Platform</p>
        </div>
        
        <Select defaultValue="seed">
          <SelectTrigger className="w-[180px] bg-background/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pre-seed">Pre-seed Round</SelectItem>
            <SelectItem value="seed">Seed Round</SelectItem>
            <SelectItem value="series-a">Series A</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Right side - AI Assistant, notifications, profile */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => onNavigate('budget-optimizer')}
        >
          <Zap className="w-4 h-4" />
          <span className="hidden md:inline">Budget AI</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => onNavigate('ai-assistant')}
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden md:inline">AI Co-Founder</span>
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          onClick={() => onNavigate('pitch-simulator')}
        >
          <Presentation className="w-4 h-4" />
          <span className="hidden md:inline">Pitch Practice</span>
        </Button>

        <button className="relative p-2 hover:bg-muted rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
          <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-destructive text-[10px]">
            3
          </Badge>
        </button>

        <button className="flex items-center gap-2 hover:bg-muted px-3 py-2 rounded-lg transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <span className="text-sm">JD</span>
          </div>
          <div className="hidden md:block text-left text-sm">
            <p className="font-medium">Jane Doe</p>
            <p className="text-xs text-muted-foreground">Founder & CEO</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}