import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailPhone || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate login process
    toast({
      title: "Login Successful",
      description: `Welcome back! Redirecting to ${role} portal...`,
    });

    // Redirect based on role
    setTimeout(() => {
      if (role === "citizen") {
        navigate("/");
      } else {
        navigate("/admin/dashboard");
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-civic-blue/5 to-civic-green/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-2xl font-bold text-civic-blue mb-2">SamadhanX</h1>
          </Link>
          <p className="text-muted-foreground">Sign in to your account</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="emailPhone">Email or Phone</Label>
                <Input
                  id="emailPhone"
                  type="text"
                  placeholder="Enter your email or phone number"
                  value={emailPhone}
                  onChange={(e) => setEmailPhone(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <Label>Login as</Label>
                <RadioGroup value={role} onValueChange={setRole}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="citizen" id="citizen" />
                    <Label htmlFor="citizen">Citizen/User</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="admin" id="admin" />
                    <Label htmlFor="admin">Admin/Official</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-civic-blue hover:underline">
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;