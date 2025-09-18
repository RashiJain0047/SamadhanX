import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Users, 
  Bell, 
  Menu,
  LogOut,
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Complaint Management", href: "/admin/complaints", icon: FileText },
    { name: "Analytics & Reports", href: "/admin/analytics", icon: BarChart3 },
    { name: "User Management", href: "/admin/users", icon: Users },
    { name: "Notifications", href: "/admin/notifications", icon: Bell },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={cn(
        "bg-white shadow-lg transition-all duration-300 flex flex-col",
        sidebarOpen ? "w-64" : "w-16"
      )}>
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <Link to="/" className={cn("flex items-center space-x-2", !sidebarOpen && "justify-center")}>
              <Home className="h-6 w-6 text-civic-blue" />
              {sidebarOpen && <span className="font-bold text-civic-blue">SamadhanX</span>}
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="h-8 w-8 p-0"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                  isActive
                    ? "bg-civic-blue text-white"
                    : "text-gray-700 hover:bg-gray-100",
                  !sidebarOpen && "justify-center"
                )}
              >
                <item.icon className="h-5 w-5" />
                {sidebarOpen && <span className="font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <Link
            to="/"
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors",
              !sidebarOpen && "justify-center"
            )}
          >
            <LogOut className="h-5 w-5" />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">
              Admin Portal
            </h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                Welcome, Admin User
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;