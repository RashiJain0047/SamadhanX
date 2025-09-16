import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Camera, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SubmitComplaint = () => {
  const [submitted, setSubmitted] = useState(false);
  const [trackingId] = useState("SMX-" + Math.random().toString(36).substr(2, 8).toUpperCase());
  const { toast } = useToast();

  const complaintCategories = [
    "Road & Transportation",
    "Water Supply",
    "Electricity",
    "Waste Management",
    "Public Safety", 
    "Street Lighting",
    "Drainage & Sewerage",
    "Parks & Recreation",
    "Public Health",
    "Others"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Complaint Submitted Successfully!",
        description: `Your tracking ID is ${trackingId}`,
      });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <Card className="text-center shadow-hero">
            <CardContent className="pt-12 pb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-growth-green-light rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-growth-green" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Complaint Submitted Successfully!
              </h1>
              <p className="text-muted-foreground mb-6">
                Your complaint has been received and is being processed by our AI system.
              </p>
              <div className="bg-civic-blue-light/20 rounded-lg p-4 mb-6 inline-block">
                <p className="text-sm text-muted-foreground mb-1">Your Tracking ID:</p>
                <p className="text-2xl font-mono font-bold text-civic-blue">{trackingId}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                Save this ID to track your complaint status. You will also receive SMS and email updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="civic" onClick={() => window.location.href = '/track'}>
                  Track This Complaint
                </Button>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit Another Complaint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Submit Your Complaint
          </h1>
          <p className="text-lg text-muted-foreground">
            Help us serve you better by providing detailed information about your civic issue
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="w-5 h-5 text-civic-blue" />
              Complaint Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div>
                  <Label htmlFor="category">Complaint Category *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {complaintCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Complaint Description */}
              <div>
                <Label htmlFor="description">Complaint Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your issue in detail. Include what happened, when it occurred, and any other relevant information..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              {/* Location */}
              <div>
                <Label htmlFor="location">Location/Address *</Label>
                <div className="flex gap-2">
                  <Input
                    id="location"
                    placeholder="Enter the exact location of the issue"
                    className="flex-1"
                    required
                  />
                  <Button type="button" variant="outline" size="icon">
                    <MapPin className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Click the map icon to select location or enter address manually
                </p>
              </div>

              {/* Photo Upload */}
              <div>
                <Label>Upload Photos (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-civic-blue transition-colors">
                  <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-2">
                    Click to upload photos or drag and drop
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Photos help us understand and resolve your issue faster
                  </p>
                  <Button type="button" variant="outline" className="mt-4">
                    Choose Files
                  </Button>
                </div>
              </div>

              {/* Priority Indicator */}
              <div className="bg-urgent-orange-light/10 border border-urgent-orange-light rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-urgent-orange rounded-full animate-pulse"></div>
                  <span className="font-medium text-urgent-orange">AI Priority Detection</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our AI will automatically analyze your complaint and assign appropriate priority based on urgency, sentiment, and impact.
                </p>
              </div>

              <Button type="submit" variant="civic" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Submit Complaint
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubmitComplaint;