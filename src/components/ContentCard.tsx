import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Bookmark, ExternalLink, Clock } from "lucide-react";
import { useState } from "react";

interface ContentCardProps {
  title: string;
  source: string;
  summary: string;
  timeAgo: string;
  category: string;
  isLiked?: boolean;
  isSaved?: boolean;
}

export function ContentCard({ 
  title, 
  source, 
  summary, 
  timeAgo, 
  category,
  isLiked = false,
  isSaved = false 
}: ContentCardProps) {
  const [liked, setLiked] = useState(isLiked);
  const [saved, setSaved] = useState(isSaved);

  return (
    <Card className="bg-card hover:bg-card/80 transition-smooth border-border shadow-card hover:shadow-glow group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2 text-xs">
              {category}
            </Badge>
            <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-smooth leading-tight">
              {title}
            </h3>
            <div className="flex items-center space-x-2 mt-2 text-xs text-muted-foreground">
              <span>{source}</span>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{timeAgo}</span>
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-smooth">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLiked(!liked)}
              className={`transition-smooth ${
                liked ? 'text-red-500 hover:text-red-600' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              <span className="ml-1 text-xs">Like</span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSaved(!saved)}
              className={`transition-smooth ${
                saved ? 'text-primary hover:text-primary/80' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${saved ? 'fill-current' : ''}`} />
              <span className="ml-1 text-xs">Save</span>
            </Button>
          </div>
          
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-success rounded-full" />
            <span className="text-xs text-muted-foreground">AI Verified</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}