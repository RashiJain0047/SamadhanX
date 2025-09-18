import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, Clock, CheckCircle, MessageSquare, Settings } from "lucide-react";

// Dummy notifications data
const notificationsData = [
  {
    id: 1,
    type: "sla_breach",
    title: "SLA Breach Alert",
    message: "Complaint CMP001 has exceeded the 48-hour SLA deadline",
    severity: "high",
    time: "5 minutes ago",
    read: false,
    action: "View Complaint",
    details: {
      complaintId: "CMP001",
      citizen: "Rajesh Kumar",
      department: "Roads",
      overdue: "6 hours"
    }
  },
  {
    id: 2,
    type: "escalation",
    title: "Complaint Escalated",
    message: "Water supply complaint has been escalated to Department Head",
    severity: "medium",
    time: "15 minutes ago",
    read: false,
    action: "Review Escalation",
    details: {
      complaintId: "CMP002",
      citizen: "Priya Sharma",
      department: "Water Supply",
      escalatedBy: "Officer A. Patel"
    }
  },
  {
    id: 3,
    type: "feedback",
    title: "New Citizen Feedback",
    message: "Citizen rated their experience: 5 stars with positive comments",
    severity: "low",
    time: "1 hour ago",
    read: true,
    action: "View Feedback",
    details: {
      complaintId: "CMP003",
      citizen: "Amit Kumar",
      rating: 5,
      comment: "Very quick resolution. Thank you!"
    }
  },
  {
    id: 4,
    type: "system",
    title: "System Maintenance",
    message: "Scheduled maintenance window tonight from 2 AM to 4 AM",
    severity: "medium",
    time: "2 hours ago",
    read: true,
    action: "View Details",
    details: {
      scheduledTime: "2:00 AM - 4:00 AM",
      services: "Database backup and updates",
      impact: "Limited functionality during maintenance"
    }
  },
  {
    id: 5,
    type: "sla_breach",
    title: "Multiple SLA Breaches",
    message: "5 complaints in Electricity dept. have exceeded deadlines",
    severity: "high",
    time: "3 hours ago",
    read: false,
    action: "Review Department",
    details: {
      department: "Electricity",
      count: 5,
      averageDelay: "2.3 days"
    }
  }
];

const Notifications = () => {
  const getSeverityBadge = (severity: string) => {
    const variants = {
      high: "bg-red-100 text-red-800 border-red-200",
      medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      low: "bg-blue-100 text-blue-800 border-blue-200"
    };
    return variants[severity as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sla_breach":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case "escalation":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "feedback":
        return <MessageSquare className="h-5 w-5 text-blue-500" />;
      case "system":
        return <Settings className="h-5 w-5 text-gray-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  const unreadCount = notificationsData.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-bold text-gray-900">Notifications Center</h2>
          <Badge className="bg-red-100 text-red-800">
            {unreadCount} unread
          </Badge>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">Mark All Read</Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      {/* Notification Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">SLA Breaches</p>
                <p className="text-3xl font-bold text-red-600">6</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Escalations</p>
                <p className="text-3xl font-bold text-yellow-600">3</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">New Feedback</p>
                <p className="text-3xl font-bold text-blue-600">12</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">System Alerts</p>
                <p className="text-3xl font-bold text-gray-600">1</p>
              </div>
              <Settings className="h-8 w-8 text-gray-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notificationsData.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  !notification.read 
                    ? "bg-blue-50 border-blue-200" 
                    : "bg-white border-gray-200"
                } hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="mt-1">
                      {getTypeIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-medium text-gray-900">
                          {notification.title}
                        </h4>
                        <Badge className={getSeverityBadge(notification.severity)}>
                          {notification.severity}
                        </Badge>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{notification.message}</p>
                      <div className="text-sm text-gray-500">
                        {notification.time}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    {notification.action}
                  </Button>
                </div>

                {/* Details Section */}
                {notification.type === "sla_breach" && notification.details && (
                  <div className="mt-3 p-3 bg-red-50 rounded border border-red-100">
                    <div className="text-sm space-y-1">
                      <div><strong>Complaint ID:</strong> {notification.details.complaintId}</div>
                      {notification.details.citizen && (
                        <div><strong>Citizen:</strong> {notification.details.citizen}</div>
                      )}
                      {notification.details.department && (
                        <div><strong>Department:</strong> {notification.details.department}</div>
                      )}
                      {notification.details.overdue && (
                        <div><strong>Overdue by:</strong> {notification.details.overdue}</div>
                      )}
                    </div>
                  </div>
                )}

                {notification.type === "escalation" && notification.details && (
                  <div className="mt-3 p-3 bg-yellow-50 rounded border border-yellow-100">
                    <div className="text-sm space-y-1">
                      <div><strong>Complaint ID:</strong> {notification.details.complaintId}</div>
                      <div><strong>Escalated by:</strong> {notification.details.escalatedBy}</div>
                    </div>
                  </div>
                )}

                {notification.type === "feedback" && notification.details && (
                  <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-100">
                    <div className="text-sm space-y-1">
                      <div><strong>Rating:</strong> {"⭐".repeat(notification.details.rating)}</div>
                      <div><strong>Comment:</strong> "{notification.details.comment}"</div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;