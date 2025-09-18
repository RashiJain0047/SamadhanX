import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Eye, UserCheck, AlertTriangle, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Dummy complaints data
const complaintsData = [
  {
    id: "CMP001",
    citizen: "Rajesh Kumar",
    phone: "+91 9876543210",
    email: "rajesh@email.com",
    department: "Roads",
    status: "pending",
    priority: "high",
    date: "2024-01-15",
    title: "Pothole on MG Road",
    description: "Large pothole causing traffic issues and vehicle damage",
    aiClassification: "Infrastructure - Road Maintenance",
    urgency: "High - Safety Risk",
    images: ["road1.jpg", "road2.jpg"],
    location: { lat: 28.6139, lng: 77.2090 },
    address: "MG Road, Near Metro Station"
  },
  {
    id: "CMP002",
    citizen: "Priya Sharma",
    phone: "+91 9876543211",
    email: "priya@email.com",
    department: "Water Supply",
    status: "in-progress",
    priority: "medium",
    date: "2024-01-14",
    title: "Water Supply Disruption",
    description: "No water supply for 3 days in Sector 15",
    aiClassification: "Utilities - Water Supply",
    urgency: "Medium - Service Disruption",
    images: ["water1.jpg"],
    location: { lat: 28.6129, lng: 77.2095 },
    address: "Sector 15, Block A"
  },
  {
    id: "CMP003",
    citizen: "Amit Patel",
    phone: "+91 9876543212",
    email: "amit@email.com",
    department: "Electricity",
    status: "resolved",
    priority: "low",
    date: "2024-01-13",
    title: "Street Light Not Working",
    description: "Street light pole #45 has been non-functional for a week",
    aiClassification: "Utilities - Street Lighting",
    urgency: "Low - Maintenance Required",
    images: ["light1.jpg"],
    location: { lat: 28.6149, lng: 77.2085 },
    address: "Park Street, Near School"
  }
];

const ComplaintManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "bg-yellow-100 text-yellow-800",
      "in-progress": "bg-blue-100 text-blue-800",
      resolved: "bg-green-100 text-green-800",
      escalated: "bg-red-100 text-red-800"
    };
    return variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  const getPriorityBadge = (priority: string) => {
    const variants = {
      high: "bg-red-100 text-red-800",
      medium: "bg-yellow-100 text-yellow-800",
      low: "bg-green-100 text-green-800"
    };
    return variants[priority as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  const filteredComplaints = complaintsData.filter(complaint => {
    const matchesSearch = complaint.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.citizen.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         complaint.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || complaint.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Complaint Management</h2>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by ID, citizen name, or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Complaints Table */}
      <Card>
        <CardHeader>
          <CardTitle>Complaints ({filteredComplaints.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Citizen</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredComplaints.map((complaint) => (
                <TableRow key={complaint.id}>
                  <TableCell className="font-medium">{complaint.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{complaint.citizen}</div>
                      <div className="text-sm text-gray-500">{complaint.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>{complaint.department}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(complaint.status)}>
                      {complaint.status.replace('-', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityBadge(complaint.priority)}>
                      {complaint.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>{complaint.date}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedComplaint(complaint)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Complaint Details - {selectedComplaint?.id}</DialogTitle>
                          </DialogHeader>
                          {selectedComplaint && (
                            <div className="space-y-6">
                              {/* Citizen Info */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card>
                                  <CardHeader>
                                    <CardTitle className="text-lg">Citizen Information</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    <div><strong>Name:</strong> {selectedComplaint.citizen}</div>
                                    <div><strong>Phone:</strong> {selectedComplaint.phone}</div>
                                    <div><strong>Email:</strong> {selectedComplaint.email}</div>
                                    <div><strong>Address:</strong> {selectedComplaint.address}</div>
                                  </CardContent>
                                </Card>

                                <Card>
                                  <CardHeader>
                                    <CardTitle className="text-lg">Complaint Details</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-2">
                                    <div><strong>Title:</strong> {selectedComplaint.title}</div>
                                    <div><strong>Department:</strong> {selectedComplaint.department}</div>
                                    <div><strong>Date:</strong> {selectedComplaint.date}</div>
                                    <div>
                                      <strong>Status:</strong> 
                                      <Badge className={`ml-2 ${getStatusBadge(selectedComplaint.status)}`}>
                                        {selectedComplaint.status.replace('-', ' ')}
                                      </Badge>
                                    </div>
                                  </CardContent>
                                </Card>
                              </div>

                              {/* AI Analysis */}
                              <Card>
                                <CardHeader>
                                  <CardTitle className="text-lg">AI Analysis</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                  <div><strong>Classification:</strong> {selectedComplaint.aiClassification}</div>
                                  <div><strong>Urgency Level:</strong> {selectedComplaint.urgency}</div>
                                  <div><strong>Description:</strong> {selectedComplaint.description}</div>
                                </CardContent>
                              </Card>

                              {/* Actions */}
                              <div className="flex space-x-4">
                                <Button variant="outline">
                                  <UserCheck className="h-4 w-4 mr-2" />
                                  Assign
                                </Button>
                                <Button variant="outline">
                                  Update Status
                                </Button>
                                <Button variant="outline">
                                  <AlertTriangle className="h-4 w-4 mr-2" />
                                  Escalate
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComplaintManagement;