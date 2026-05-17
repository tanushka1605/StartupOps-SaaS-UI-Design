import { TrendingUp, Users, CheckCircle2, Clock, Target, Zap, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const weeklyProgress = [
  { day: 'Mon', completed: 12, planned: 15 },
  { day: 'Tue', completed: 14, planned: 15 },
  { day: 'Wed', completed: 11, planned: 13 },
  { day: 'Thu', completed: 16, planned: 16 },
  { day: 'Fri', completed: 13, planned: 14 },
];

const burnData = [
  { month: 'Aug', amount: 142 },
  { month: 'Sep', amount: 156 },
  { month: 'Oct', amount: 148 },
  { month: 'Nov', amount: 165 },
  { month: 'Dec', amount: 159 },
  { month: 'Jan', amount: 165 },
];

export function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">Welcome back, Jane</h1>
          <p className="text-muted-foreground">
            Here's what's happening with TechVenture today
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Export Report</Button>
          <Button>Schedule Investor Update</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-5 border-primary/20 bg-primary/5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <Badge variant="outline" className="text-xs">This week</Badge>
          </div>
          <p className="text-2xl font-medium mb-1">87%</p>
          <p className="text-sm text-muted-foreground">Goal completion</p>
          <div className="mt-3 flex items-center gap-1 text-xs text-success">
            <TrendingUp className="w-3 h-3" />
            <span>+12% from last week</span>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Users className="w-5 h-5 text-foreground" />
            </div>
            <Badge variant="outline" className="text-xs">Active</Badge>
          </div>
          <p className="text-2xl font-medium mb-1">24</p>
          <p className="text-sm text-muted-foreground">Team members</p>
          <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
            <span>2 roles open</span>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-foreground" />
            </div>
            <Badge variant="outline" className="text-xs">Today</Badge>
          </div>
          <p className="text-2xl font-medium mb-1">18/22</p>
          <p className="text-sm text-muted-foreground">Tasks completed</p>
          <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
            <span>4 in progress</span>
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <Clock className="w-5 h-5 text-foreground" />
            </div>
            <Badge variant="outline" className="text-xs">Runway</Badge>
          </div>
          <p className="text-2xl font-medium mb-1">18 mo</p>
          <p className="text-sm text-muted-foreground">Cash runway</p>
          <div className="mt-3 flex items-center gap-1 text-xs text-success">
            <TrendingUp className="w-3 h-3" />
            <span>Healthy position</span>
          </div>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="mb-6">
            <h3 className="mb-1">Weekly Task Completion</h3>
            <p className="text-sm text-muted-foreground">Planned vs completed tasks this week</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%" minHeight={256}>
              <BarChart data={weeklyProgress}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#737373" />
                <YAxis tick={{ fontSize: 12 }} stroke="#737373" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="planned" fill="#e5e5e5" radius={[4, 4, 0, 0]} />
                <Bar dataKey="completed" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="mb-6">
            <h3 className="mb-1">Monthly Burn Rate</h3>
            <p className="text-sm text-muted-foreground">Operating expenses over time</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%" minHeight={256}>
              <LineChart data={burnData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="#737373" />
                <YAxis 
                  tick={{ fontSize: 12 }} 
                  stroke="#737373"
                  tickFormatter={(value) => `$${value}K`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e5e5',
                    borderRadius: '8px',
                  }}
                  formatter={(value: number) => [`$${value}K`, 'Burn']}
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Activity Feed & Quick Actions */}
      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2 p-6">
          <h3 className="mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              { icon: CheckCircle2, color: 'success', text: 'Marketing team completed Q4 campaign launch', time: '2 hours ago' },
              { icon: Users, color: 'primary', text: 'Sarah Chen joined as Senior Product Designer', time: '5 hours ago' },
              { icon: Award, color: 'warning', text: 'Reached 1,000 active users milestone', time: '1 day ago' },
              { icon: Zap, color: 'primary', text: 'AI Budget Optimizer suggested 3 cost improvements', time: '1 day ago' },
              { icon: Target, color: 'success', text: 'Engineering sprint #12 completed ahead of schedule', time: '2 days ago' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    item.color === 'success' ? 'bg-success/10' :
                    item.color === 'warning' ? 'bg-warning/10' :
                    'bg-primary/10'
                  }`}>
                    <Icon className={`w-4 h-4 ${
                      item.color === 'success' ? 'text-success' :
                      item.color === 'warning' ? 'text-warning' :
                      'text-primary'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{item.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Create Task
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Invite Team Member
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Target className="w-4 h-4 mr-2" />
              Set Milestone
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Zap className="w-4 h-4 mr-2" />
              Run Budget Analysis
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="text-sm mb-3">AI Insights</h4>
            <div className="p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm">
                Your team velocity is <strong>23% above average</strong>. Consider allocating more resources to product development.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}