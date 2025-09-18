import { 
  Brain, 
  Shield, 
  MapPin, 
  MessageSquare, 
  Bell, 
  BarChart3,
  Smartphone,
  Eye,
  Zap,
  Users,
  Target,
  Award
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Classification",
      description: "Intelligent categorization, priority detection, and duplicate identification using advanced machine learning.",
      gradient: "from-civic-blue to-civic-blue-dark",
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Immutable logging, smart contracts for SLA enforcement, and complete transparency through distributed ledger.",
      gradient: "from-growth-green to-growth-green/80",
    },
    {
      icon: MapPin,
      title: "Google Maps Integration",
      description: "Precise location tracking, geofencing for jurisdictions, and hotspot visualization for better resource allocation.",
      gradient: "from-urgent-orange to-urgent-orange/80",
    },
    {
      icon: MessageSquare,
      title: "Smart Chatbot",
      description: "24/7 AI assistant for complaint submission, status updates, and frequently asked questions.",
      gradient: "from-civic-blue to-growth-green",
    },
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description: "SMS, email, and push notifications for status updates, escalations, and completion alerts.",
      gradient: "from-growth-green to-urgent-orange",
    },
    {
      icon: BarChart3,
      title: "Interactive Dashboards",
      description: "Comprehensive analytics for citizens and officials with performance metrics and trend analysis.",
      gradient: "from-urgent-orange to-civic-blue",
    },
    // {
    //   icon: Smartphone,
    //   title: "Mobile-First Design",
    //   description: "Responsive interface optimized for smartphones with offline capability and progressive web app features.",
    //   gradient: "from-civic-blue-dark to-civic-blue",
    // },
    // {
    //   icon: Eye,
    //   title: "Complete Transparency",
    //   description: "Full visibility into complaint lifecycle, officer assignments, and resolution timelines for accountability.",
    //   gradient: "from-growth-green/80 to-growth-green",
    // },
    // {
    //   icon: Zap,
    //   title: "Automated Workflows",
    //   description: "Smart routing based on complaint type, automatic escalation, and SLA monitoring for timely resolution.",
    //   gradient: "from-urgent-orange/80 to-urgent-orange",
    // },
  ];

  return (
    <section className="py-20 bg-soft-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powerful Features for Modern Governance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technology to deliver the transparency, efficiency, 
            and accountability that citizens deserve from their government.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-feature transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-civic-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Future Scope Section */}
        {/* <div className="bg-gradient-card border border-border rounded-2xl p-8 shadow-hero">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Future Enhancements
            </h3>
            <p className="text-muted-foreground">
              Planned features to further enhance citizen engagement and governance efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-civic-blue to-civic-blue-dark rounded-lg mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Gamification</h4>
              <p className="text-sm text-muted-foreground">Citizen badges, leaderboards, and community challenges</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-growth-green to-growth-green/80 rounded-lg mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Predictive Analytics</h4>
              <p className="text-sm text-muted-foreground">AI-powered predictions for proactive issue prevention</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-urgent-orange to-urgent-orange/80 rounded-lg mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Performance Scoring</h4>
              <p className="text-sm text-muted-foreground">Department rankings and citizen satisfaction metrics</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturesSection;