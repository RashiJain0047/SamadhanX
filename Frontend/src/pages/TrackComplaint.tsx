import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { 
  Search, 
  MapPin, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  User, 
  Calendar,
  MessageSquare,
  Phone
} from "lucide-react";

const TrackComplaint = () => {
  const [trackingId, setTrackingId] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Mock complaint data
  const complaintData = {
    id: "SMX-A7B9K3L2",
    title: "Broken Street Light on Main Road",
    category: "Street Lighting",
    status: "In Progress",
    priority: "Medium",
    submittedDate: "2024-01-15",
    expectedResolution: "2024-01-22",
    assignedOfficer: "Rajesh Kumar",
    officerContact: "+91 98765 43210",
    location: "Main Road, Sector 15, Near City Mall",
    description: "The street light pole is damaged and not working since last week, causing safety concerns for pedestrians and vehicles during night hours.",
    timeline: [
      {
        status: "Complaint Submitted",
        date: "2024-01-15 10:30 AM",
        description: "Complaint received and assigned tracking ID",
        completed: true,
      },
      {
        status: "AI Verification",
        date: "2024-01-15 10:35 AM", 
        description: "AI classified as 'Street Lighting' with Medium priority",
        completed: true,
      },
      {
        status: "Officer Assignment",
        date: "2024-01-15 02:15 PM",
        description: "Assigned to Electrical Department - Rajesh Kumar",
        completed: true,
      },
      {
        status: "Site Inspection",
        date: "2024-01-16 09:00 AM",
        description: "Field inspection completed, parts procurement initiated",
        completed: true,
      },
      {
        status: "In Progress",
        date: "2024-01-18 11:00 AM",
        description: "Repair work started, estimated completion in 2 days",
        completed: true,
        current: true,
      },
      {
        status: "Resolution",
        date: "Expected: 2024-01-22",
        description: "Complete repair and testing",
        completed: false,
      },
      {
        status: "Closure",
        date: "Pending",
        description: "Citizen feedback and complaint closure",
        completed: false,
      },
    ],
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setShowResults(true);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress":
        return "bg-urgent-orange";
      case "Resolved":
        return "bg-growth-green";
      case "Pending":
        return "bg-destructive";
      default:
        return "bg-civic-blue";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-urgent-orange text-urgent-orange-foreground";
      case "Low":
        return "bg-growth-green text-growth-green-foreground";
      default:
        return "bg-civic-blue text-civic-blue-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Track Your Complaint
          </h1>
          <p className="text-lg text-muted-foreground">
            Enter your tracking ID or mobile number to check complaint status
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8 shadow-card">
          <CardContent className="pt-6">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search" className="sr-only">
                  Tracking ID or Mobile Number
                </Label>
                <Input
                  id="search"
                  placeholder="Enter Tracking ID (e.g., SMX-A7B9K3L2) or Mobile Number"
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="text-center text-lg font-mono"
                />
              </div>
              <Button type="submit" variant="civic" size="lg" className="px-8">
                <Search className="w-5 h-5 mr-2" />
                Track Complaint
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 animate-fade-in">
            {/* Complaint Overview */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between flex-wrap gap-4">
                  <span>Complaint Details</span>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(complaintData.status)}>
                      {complaintData.status}
                    </Badge>
                    <Badge variant="outline" className={getPriorityColor(complaintData.priority)}>
                      {complaintData.priority} Priority
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <MessageSquare className="w-4 h-4" />
                      Tracking ID
                    </div>
                    <p className="font-mono text-lg font-bold text-civic-blue">
                      {complaintData.id}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Calendar className="w-4 h-4" />
                      Submitted Date
                    </div>
                    <p className="font-semibold">{complaintData.submittedDate}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">{complaintData.title}</h3>
                  <p className="text-muted-foreground mb-3">{complaintData.description}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{complaintData.location}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <User className="w-4 h-4" />
                      Assigned Officer
                    </div>
                    <p className="font-semibold">{complaintData.assignedOfficer}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                      <Phone className="w-4 h-4" />
                      Contact
                    </div>
                    <p className="font-semibold">{complaintData.officerContact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-civic-blue" />
                  Progress Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {complaintData.timeline.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            step.completed
                              ? step.current
                                ? "bg-urgent-orange"
                                : "bg-growth-green"
                              : "bg-muted"
                          }`}
                        >
                          {step.completed ? (
                            step.current ? (
                              <AlertCircle className="w-4 h-4 text-white" />
                            ) : (
                              <CheckCircle className="w-4 h-4 text-white" />
                            )
                          ) : (
                            <div className="w-3 h-3 bg-muted-foreground rounded-full" />
                          )}
                        </div>
                        {index < complaintData.timeline.length - 1 && (
                          <div
                            className={`w-0.5 h-8 ${
                              step.completed ? "bg-growth-green" : "bg-muted"
                            }`}
                          />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <div className="flex items-center justify-between mb-1">
                          <h3
                            className={`font-semibold ${
                              step.current ? "text-urgent-orange" : "text-foreground"
                            }`}
                          >
                            {step.status}
                          </h3>
                          <span className="text-sm text-muted-foreground">
                            {step.date}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expected Resolution */}
            <Card className="shadow-card bg-gradient-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
                    <Calendar className="w-6 h-6 text-civic-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Expected Resolution
                  </h3>
                  <p className="text-2xl font-bold text-civic-blue mb-2">
                    {complaintData.expectedResolution}
                  </p>
                  <p className="text-muted-foreground">
                    We'll notify you once your complaint is resolved
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackComplaint;