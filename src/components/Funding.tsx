import { DollarSign, TrendingUp, Calendar, FileText, Plus, Download } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const fundingRounds = [
  {
    round: 'Pre-seed',
    amount: '$500K',
    date: 'Jan 2023',
    investors: ['Y Combinator', 'Angel Investors'],
    status: 'Closed',
  },
  {
    round: 'Seed',
    amount: '$3.5M',
    date: 'Aug 2023',
    investors: ['Sequoia Capital', 'a16z', 'Individual Angels'],
    status: 'Closed',
  },
  {
    round: 'Bridge',
    amount: '$1.2M',
    date: 'Mar 2024',
    investors: ['Existing Investors'],
    status: 'Closed',
  },
  {
    round: 'Series A',
    amount: '$12M (Target)',
    date: 'Q2 2025',
    investors: ['TBD'],
    status: 'Planning',
  },
];

const allocationData = [
  { category: 'Engineering', amount: 4200, color: '#3b82f6' },
  { category: 'Product', amount: 1800, color: '#10b981' },
  { category: 'Marketing', amount: 2500, color: '#8b5cf6' },
  { category: 'Sales', amount: 1900, color: '#f59e0b' },
  { category: 'Operations', amount: 1600, color: '#ef4444' },
];

export function Funding() {
  return (
    <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl mb-2">Funding Management</h1>
          <p className="text-muted-foreground">
            Track your funding rounds, capital deployment, and prepare for your next raise
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Cap Table
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Plan Next Round
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-5 border-primary/20 bg-primary/5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
          </div>
          <p className="text-2xl font-medium mb-1">$12.0M</p>
          <p className="text-sm text-muted-foreground">Total Raised</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-foreground" />
            </div>
          </div>
          <p className="text-2xl font-medium mb-1">$3.8M</p>
          <p className="text-sm text-muted-foreground">Cash Remaining</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-foreground" />
            </div>
          </div>
          <p className="text-2xl font-medium mb-1">$165K</p>
          <p className="text-sm text-muted-foreground">Monthly Burn</p>
        </Card>

        <Card className="p-5 border-success/20 bg-success/5">
          <div className="flex items-start justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-success" />
            </div>
          </div>
          <p className="text-2xl font-medium mb-1">18 mo</p>
          <p className="text-sm text-muted-foreground">Runway Remaining</p>
        </Card>
      </div>

      {/* Capital Allocation */}
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="mb-1">Current Capital Allocation</h3>
          <p className="text-sm text-muted-foreground">Monthly spend breakdown by department</p>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%" minHeight={320}>
            <BarChart data={allocationData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis type="number" tick={{ fontSize: 12 }} stroke="#737373" tickFormatter={(value) => `$${value}K`} />
              <YAxis dataKey="category" type="category" tick={{ fontSize: 12 }} stroke="#737373" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e5e5',
                  borderRadius: '8px',
                }}
                formatter={(value: number) => [`$${value}K`, 'Monthly Spend']}
              />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Funding Rounds */}
      <Card className="p-6">
        <h3 className="mb-6">Funding History</h3>
        <div className="space-y-4">
          {fundingRounds.map((round, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{round.round}</h4>
                    <Badge
                      variant={round.status === 'Closed' ? 'outline' : 'default'}
                      className={
                        round.status === 'Closed'
                          ? 'bg-success/10 text-success border-success/20'
                          : ''
                      }
                    >
                      {round.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {round.investors.join(', ')}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{round.amount}</p>
                <p className="text-sm text-muted-foreground">{round.date}</p>
              </div>
              <Button variant="ghost" size="sm" className="ml-4">
                <FileText className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Investor Relations */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="mb-4">Key Investors</h3>
          <div className="space-y-3">
            {[
              { name: 'Sequoia Capital', stake: '18%', lead: true },
              { name: 'a16z', stake: '15%', lead: true },
              { name: 'Y Combinator', stake: '7%', lead: false },
              { name: 'Angel Investors', stake: '12%', lead: false },
            ].map((investor, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 border border-border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">
                      {investor.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">{investor.name}</p>
                    {investor.lead && (
                      <p className="text-xs text-primary">Lead Investor</p>
                    )}
                  </div>
                </div>
                <Badge variant="outline">{investor.stake}</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="mb-4">Upcoming Milestones</h3>
          <div className="space-y-3">
            {[
              { title: 'Monthly Investor Update', date: 'Feb 15, 2026', type: 'report' },
              { title: 'Series A Kickoff', date: 'Apr 1, 2026', type: 'meeting' },
              { title: 'Board Meeting', date: 'Mar 8, 2026', type: 'meeting' },
              { title: 'Cap Table Review', date: 'Feb 28, 2026', type: 'report' },
            ].map((milestone, i) => (
              <div key={i} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm font-medium">{milestone.title}</p>
                  <p className="text-xs text-muted-foreground">{milestone.date}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}