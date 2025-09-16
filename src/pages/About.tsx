import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe,
  Award,
  Lightbulb
} from "lucide-react";

const About = () => {
  const objectives = [
    {
      icon: Zap,
      title: "Automate Complaint Processing",
      description: "Reduce manual effort through intelligent AI-powered classification and routing systems."
    },
    {
      icon: BarChart3,
      title: "Provide Actionable Insights", 
      description: "Enable data-driven decision making with comprehensive analytics and performance metrics."
    },
    {
      icon: Shield,
      title: "Ensure Complete Transparency",
      description: "Implement blockchain technology for tamper-proof logging and full accountability."
    },
    {
      icon: Users,
      title: "Enhance Citizen Engagement",
      description: "Create user-friendly interfaces that encourage active participation in civic processes."
    },
    {
      icon: Globe,
      title: "Scale Across Jurisdictions",
      description: "Build a flexible platform that adapts to different cities and governance structures."
    },
    {
      icon: Award,
      title: "Improve Service Quality",
      description: "Implement SLA monitoring and performance tracking to ensure timely resolutions."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Every action is logged and visible to maintain public trust and accountability."
    },
    {
      icon: Zap,
      title: "Efficiency",
      description: "Streamlined processes that reduce resolution times and administrative burden."
    },
    {
      icon: Users,
      title: "Accessibility",
      description: "User-friendly design that works for citizens of all technical backgrounds."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology applied to solve real-world governance challenges."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About SamadhanX
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're transforming civic engagement through intelligent technology, creating a more 
            responsive, transparent, and accountable governance system for citizens and officials alike.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-16 shadow-hero bg-gradient-card">
          <CardContent className="pt-12 pb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Empowering citizens with transparent, accountable, and smart grievance redressal systems 
              that bridge the gap between communities and governance through innovative technology solutions.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
              <Eye className="w-6 h-6 text-civic-blue" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              To create citizen-first e-governance platforms that make cities smarter, more livable, 
              and truly responsive to their residents' needs.
            </p>
          </div>
        </div>

        {/* Objectives */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-growth-green-light rounded-lg mb-4">
              <Target className="w-6 h-6 text-growth-green" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Objectives</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform is built around these core objectives that drive every feature and decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-civic-blue-light rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-civic-blue" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {objective.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {objective.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide our approach to building technology solutions for civic engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-civic-blue to-growth-green rounded-2xl mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Statement */}
        <Card className="shadow-hero bg-gradient-to-br from-civic-blue-light/10 to-growth-green-light/10 border-civic-blue-light">
          <CardContent className="pt-12 pb-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Making a Difference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-civic-blue mb-2">90%</div>
                <p className="text-muted-foreground">Faster Issue Classification</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-growth-green mb-2">100%</div>
                <p className="text-muted-foreground">Transparent Tracking</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-urgent-orange mb-2">24/7</div>
                <p className="text-muted-foreground">Citizen Support</p>
              </div>
            </div>
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Together, we're building smarter cities where every citizen's voice is heard, 
              every complaint is tracked, and every resolution is transparent.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;