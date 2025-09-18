import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Edit, Trash2, Shield, Users, UserCheck } from "lucide-react";

// Dummy users data
const usersData = [
  {
    id: 1,
    name: "Rajesh Gupta",
    email: "rajesh.gupta@city.gov.in",
    role: "Admin",
    department: "IT & Digital Services",
    status: "active",
    lastLogin: "2024-01-15 14:30",
    permissions: ["view_complaints", "manage_complaints", "view_analytics", "manage_users"]
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@roads.gov.in",
    role: "Department Head",
    department: "Roads & Infrastructure",
    status: "active",
    lastLogin: "2024-01-15 09:15",
    permissions: ["view_complaints", "manage_complaints", "view_analytics"]
  },
  {
    id: 3,
    name: "Amit Kumar",
    email: "amit.kumar@water.gov.in",
    role: "Officer",
    department: "Water Supply",
    status: "active",
    lastLogin: "2024-01-14 16:45",
    permissions: ["view_complaints", "manage_complaints"]
  },
  {
    id: 4,
    name: "Sunita Sharma",
    email: "sunita.sharma@power.gov.in",
    role: "Officer",
    department: "Electricity",
    status: "inactive",
    lastLogin: "2024-01-10 11:20",
    permissions: ["view_complaints"]
  }
];

const roles = ["Admin", "Department Head", "Officer", "Supervisor"];
const departments = ["IT & Digital Services", "Roads & Infrastructure", "Water Supply", "Electricity", "Waste Management"];
const allPermissions = [
  { id: "view_complaints", label: "View Complaints" },
  { id: "manage_complaints", label: "Manage Complaints" },
  { id: "view_analytics", label: "View Analytics" },
  { id: "manage_users", label: "Manage Users" },
  { id: "system_settings", label: "System Settings" }
];

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusBadge = (status: string) => {
    return status === "active" 
      ? "bg-green-100 text-green-800" 
      : "bg-red-100 text-red-800";
  };

  const getRoleBadge = (role: string) => {
    const variants = {
      "Admin": "bg-purple-100 text-purple-800",
      "Department Head": "bg-blue-100 text-blue-800",
      "Officer": "bg-gray-100 text-gray-800",
      "Supervisor": "bg-yellow-100 text-yellow-800"
    };
    return variants[role as keyof typeof variants] || "bg-gray-100 text-gray-800";
  };

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">User Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New User</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map(role => (
                        <SelectItem key={role} value={role.toLowerCase()}>{role}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Department</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map(dept => (
                        <SelectItem key={dept} value={dept.toLowerCase()}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Permissions</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {allPermissions.map(permission => (
                    <div key={permission.id} className="flex items-center space-x-2">
                      <Checkbox id={permission.id} />
                      <Label htmlFor={permission.id} className="text-sm">{permission.label}</Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Cancel</Button>
                <Button>Add User</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-gray-900">24</p>
              </div>
              <Users className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-3xl font-bold text-gray-900">21</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Admins</p>
                <p className="text-3xl font-bold text-gray-900">3</p>
              </div>
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Departments</p>
                <p className="text-3xl font-bold text-gray-900">5</p>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-4">
          <Input
            placeholder="Search users by name, email, or department..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Users ({filteredUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Login</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRoleBadge(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.department}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastLogin}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedUser(user)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Edit User - {selectedUser?.name}</DialogTitle>
                          </DialogHeader>
                          {selectedUser && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Full Name</Label>
                                  <Input defaultValue={selectedUser.name} />
                                </div>
                                <div>
                                  <Label>Email</Label>
                                  <Input defaultValue={selectedUser.email} />
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label>Role</Label>
                                  <Select defaultValue={selectedUser.role.toLowerCase()}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {roles.map(role => (
                                        <SelectItem key={role} value={role.toLowerCase()}>{role}</SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                                <div>
                                  <Label>Department</Label>
                                  <Select defaultValue={selectedUser.department.toLowerCase()}>
                                    <SelectTrigger>
                                      <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {departments.map(dept => (
                                        <SelectItem key={dept} value={dept.toLowerCase()}>{dept}</SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                </div>
                              </div>
                              <div>
                                <Label>Permissions</Label>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  {allPermissions.map(permission => (
                                    <div key={permission.id} className="flex items-center space-x-2">
                                      <Checkbox 
                                        id={permission.id} 
                                        defaultChecked={selectedUser.permissions.includes(permission.id)}
                                      />
                                      <Label htmlFor={permission.id} className="text-sm">{permission.label}</Label>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <div className="flex justify-end space-x-2">
                                <Button variant="outline">Cancel</Button>
                                <Button>Save Changes</Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
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

export default UserManagement;