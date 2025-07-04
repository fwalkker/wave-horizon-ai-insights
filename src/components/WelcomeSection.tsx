import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "AI-Powered Curation",
    description: "Advanced algorithms analyze and curate content tailored to your interests"
  },
  {
    icon: Shield,
    title: "Bias Analysis",
    description: "Comprehensive bias detection to ensure balanced perspective on topics"
  },
  {
    icon: MessageSquare,
    title: "Feedback System",
    description: "Interactive feedback loop to continuously improve content recommendations"
  }
];

const stats = [
  { label: "Articles Curated", value: "2,847", trend: "+12%" },
  { label: "Sources Analyzed", value: "156", trend: "+8%" },
  { label: "Accuracy Score", value: "94.2%", trend: "+2.1%" },
];

export function WelcomeSection() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative">
        <div className="bg-gradient-hero rounded-xl p-8 border border-border shadow-elegant">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-3 w-3 mr-1" />
              AI-Powered Platform
            </Badge>
            <h1 className="text-4xl font-bold text-foreground mb-4 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-primary">Wave</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Discover intelligently curated content with our advanced AI system. 
              Get personalized recommendations, bias analysis, and comprehensive 
              insights from trusted sources across the web.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="hero" size="lg" className="group">
                Go to Feed
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Analytics
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card border-border shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                </div>
                <Badge variant="secondary" className="text-success bg-success/10">
                  {stat.trend}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-6">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border shadow-card hover:shadow-glow transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}