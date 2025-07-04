import { DashboardLayout } from "@/components/DashboardLayout";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ContentCard } from "@/components/ContentCard";

// Sample data for recent content
const recentContent = [
  {
    title: "The Future of AI in Content Curation: Trends and Predictions",
    source: "TechCrunch",
    summary: "Exploring how artificial intelligence is revolutionizing content discovery and personalization across digital platforms.",
    timeAgo: "2 hours ago",
    category: "Technology",
    isLiked: true,
    isSaved: false
  },
  {
    title: "Understanding Media Bias: A Data-Driven Approach",
    source: "Harvard Business Review",
    summary: "New research reveals patterns in media bias and introduces frameworks for objective content analysis.",
    timeAgo: "4 hours ago",
    category: "Research",
    isLiked: false,
    isSaved: true
  },
  {
    title: "Building Trust in Automated Content Systems",
    source: "MIT Technology Review",
    summary: "How transparency and user feedback loops are essential for creating reliable AI-driven content platforms.",
    timeAgo: "6 hours ago",
    category: "AI Ethics",
    isLiked: false,
    isSaved: false
  }
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <WelcomeSection />
        
        {/* Recent Content Section */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Recent Content</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {recentContent.map((content, index) => (
              <ContentCard
                key={index}
                title={content.title}
                source={content.source}
                summary={content.summary}
                timeAgo={content.timeAgo}
                category={content.category}
                isLiked={content.isLiked}
                isSaved={content.isSaved}
              />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
