import { AlertTriangle, Clock, FileQuestion, BarChart3 } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Delayed Response Times",
      description: "Citizens wait weeks or months for basic civic issues to be addressed, leading to frustration and lost trust.",
    },
    {
      icon: FileQuestion,
      title: "Poor Issue Classification", 
      description: "Manual categorization leads to misrouted complaints and inefficient resource allocation.",
    },
    {
      icon: AlertTriangle,
      title: "No Urgency Detection",
      description: "Critical issues get buried in queues while minor complaints receive equal priority.",
    },
    {
      icon: BarChart3,
      title: "Limited Transparency",
      description: "Citizens have no visibility into complaint status, creating distrust in the system.",
    },
  ];

  return (
    <section className="py-20 bg-soft-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Challenge in Today's Cities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Traditional grievance systems struggle with efficiency, transparency, and citizen satisfaction.
            Here's what needs to change:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-feature transition-smooth animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-destructive/10 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;