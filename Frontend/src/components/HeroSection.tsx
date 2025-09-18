import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-civic-tech.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-civic-blue-light/10 to-growth-green-light/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart City Technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-civic-blue-light/20 text-civic-blue text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI + Blockchain Powered Civic Platform
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            SamadhanX
            <span className="block text-2xl md:text-3xl lg:text-4xl text-foreground mt-2">
              Smart Grievance Redressal
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform civic engagement with AI-powered complaint classification, blockchain transparency, 
            and real-time tracking for faster, smarter public issue resolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild variant="hero" size="lg" className="group">
              <Link to="/submit">
                Submit a Complaint
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/track">
                Track Your Issue
              </Link>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-hero transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
                  <Zap className="w-6 h-6 text-civic-blue" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">90%</h3>
                <p className="text-muted-foreground">Faster Classification</p>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-hero transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-growth-green-light rounded-lg mb-4">
                  <Shield className="w-6 h-6 text-growth-green" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
                <p className="text-muted-foreground">Tamper-Proof Tracking</p>
              </div>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 shadow-card hover:shadow-hero transition-smooth">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-urgent-orange-light rounded-lg mb-4">
                  <Eye className="w-6 h-6 text-urgent-orange" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">24/7</h3>
                <p className="text-muted-foreground">Real-Time Updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;