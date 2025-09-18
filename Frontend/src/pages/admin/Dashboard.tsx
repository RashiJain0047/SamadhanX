import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { FileText, Clock, CheckCircle, AlertTriangle } from "lucide-react";

// Dummy data
const kpiData = [
  { title: "Total Complaints", value: 1247, icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Pending", value: 342, icon: Clock, color: "text-yellow-600", bg: "bg-yellow-50" },
  { title: "Resolved", value: 865, icon: CheckCircle, color: "text-green-600", bg: "bg-green-50" },
  { title: "Escalated", value: 40, icon: AlertTriangle, color: "text-red-600", bg: "bg-red-50" }
];

const trendData = [
  { month: 'Jan', complaints: 120 },
  { month: 'Feb', complaints: 150 },
  { month: 'Mar', complaints: 180 },
  { month: 'Apr', complaints: 200 },
  { month: 'May', complaints: 170 },
  { month: 'Jun', complaints: 220 }
];

const categoryData = [
  { name: 'Roads', value: 35, color: '#8884d8' },
  { name: 'Water Supply', value: 25, color: '#82ca9d' },
  { name: 'Electricity', value: 20, color: '#ffc658' },
  { name: 'Garbage', value: 15, color: '#ff7300' },
  { name: 'Others', value: 5, color: '#8dd1e1' }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleString()}</div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{kpi.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${kpi.bg}`}>
                    <Icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Complaint Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Complaint Trends (Last 6 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="complaints" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Complaints by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New complaint submitted", details: "Road pothole at MG Road", time: "2 minutes ago", status: "pending" },
              { action: "Complaint resolved", details: "Water supply issue at Sector 15", time: "15 minutes ago", status: "resolved" },
              { action: "Complaint escalated", details: "Garbage collection delay", time: "1 hour ago", status: "escalated" },
              { action: "New complaint submitted", details: "Street light not working", time: "2 hours ago", status: "pending" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    activity.status === 'resolved' ? 'bg-green-100 text-green-800' :
                    activity.status === 'escalated' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {activity.status}
                  </span>
                  <span className="text-sm text-gray-400">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;