import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BarChart3, Home, Settings, Bookmark, Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Feed", href: "/", icon: Home },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Sources", href: "/sources", icon: Bookmark },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function WaveSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile overlay */}
      {!collapsed && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden" />
      )}
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-gradient-subtle border-r border-sidebar-border shadow-elegant z-50 transition-smooth lg:relative lg:z-auto",
          collapsed ? "w-16" : "w-64"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <span className="text-sidebar-foreground font-semibold text-lg">Wave</span>
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg transition-smooth group",
                  "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  isActive && "bg-sidebar-primary text-sidebar-primary-foreground shadow-glow",
                  collapsed && "justify-center"
                )
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && (
                <span className="font-medium">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section */}
        {!collapsed && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-sidebar-accent rounded-lg p-3">
              <p className="text-xs text-sidebar-accent-foreground opacity-80">
                AI-powered content curation
              </p>
              <p className="text-xs text-sidebar-accent-foreground mt-1">
                v1.0.0
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}