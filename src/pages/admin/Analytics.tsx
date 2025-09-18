import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";
import { Download, FileSpreadsheet, FileText, TrendingUp, TrendingDown, Calendar } from "lucide-react";

// Dummy data
const slaComplianceData = [
  { month: 'Jan', compliance: 85, target: 90 },
  { month: 'Feb', compliance: 88, target: 90 },
  { month: 'Mar', compliance: 82, target: 90 },
  { month: 'Apr', compliance: 91, target: 90 },
  { month: 'May', compliance: 89, target: 90 },
  { month: 'Jun', compliance: 93, target: 90 }
];

const categoryTrendsData = [
  { category: 'Roads', jan: 45, feb: 52, mar: 48, apr: 61, may: 55, jun: 67 },
  { category: 'Water', jan: 32, feb: 28, mar: 35, apr: 42, may: 38, jun: 45 },
  { category: 'Electricity', jan: 28, feb: 35, mar: 32, apr: 29, may: 33, jun: 31 },
  { category: 'Garbage', jan: 22, feb: 18, mar: 25, apr: 28, may: 24, jun: 22 }
];

const sentimentData = [
  { week: 'Week 1', positive: 65, neutral: 25, negative: 10 },
  { week: 'Week 2', positive: 58, neutral: 30, negative: 12 },
  { week: 'Week 3', positive: 72, neutral: 20, negative: 8 },
  { week: 'Week 4', positive: 68, neutral: 22, negative: 10 }
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
        <div className="flex space-x-4">
          <Select defaultValue="last-30-days">
            <SelectTrigger className="w-48">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-7-days">Last 7 Days</SelectItem>
              <SelectItem value="last-30-days">Last 30 Days</SelectItem>
              <SelectItem value="last-90-days">Last 90 Days</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline">
            <FileSpreadsheet className="h-4 w-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Resolution Time</p>
                <p className="text-3xl font-bold text-gray-900">4.2 days</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  12% faster than last month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">SLA Compliance</p>
                <p className="text-3xl font-bold text-gray-900">91%</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  3% improvement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Citizen Satisfaction</p>
                <p className="text-3xl font-bold text-gray-900">4.6/5</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  0.2 points increase
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SLA Compliance Chart */}
      <Card>
        <CardHeader>
          <CardTitle>SLA Compliance Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={slaComplianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="compliance" 
                stroke="#3b82f6" 
                fill="#3b82f6" 
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#ef4444" 
                strokeDasharray="5 5"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Category Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recurring Categories (Last 6 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryTrendsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="jun" fill="#3b82f6" name="June" />
                <Bar dataKey="may" fill="#8b5cf6" name="May" />
                <Bar dataKey="apr" fill="#10b981" name="April" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Citizen Sentiment Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={sentimentData} stackOffset="expand">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                <Bar dataKey="positive" fill="#10b981" name="Positive" />
                <Bar dataKey="neutral" fill="#f59e0b" name="Neutral" />
                <Bar dataKey="negative" fill="#ef4444" name="Negative" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Department Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Department Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Department</th>
                  <th className="text-left p-4">Total Complaints</th>
                  <th className="text-left p-4">Resolved</th>
                  <th className="text-left p-4">Avg Resolution Time</th>
                  <th className="text-left p-4">SLA Compliance</th>
                  <th className="text-left p-4">Satisfaction Score</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dept: "Roads & Infrastructure", total: 245, resolved: 218, avgTime: "3.2 days", sla: "89%", satisfaction: "4.3" },
                  { dept: "Water Supply", total: 189, resolved: 175, avgTime: "2.8 days", sla: "93%", satisfaction: "4.5" },
                  { dept: "Electricity", total: 156, resolved: 142, avgTime: "4.1 days", sla: "91%", satisfaction: "4.2" },
                  { dept: "Waste Management", total: 132, resolved: 119, avgTime: "5.2 days", sla: "85%", satisfaction: "4.0" }
                ].map((row, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 font-medium">{row.dept}</td>
                    <td className="p-4">{row.total}</td>
                    <td className="p-4">{row.resolved}</td>
                    <td className="p-4">{row.avgTime}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-sm ${
                        parseInt(row.sla) >= 90 ? 'bg-green-100 text-green-800' : 
                        parseInt(row.sla) >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {row.sla}
                      </span>
                    </td>
                    <td className="p-4">{row.satisfaction}/5</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;