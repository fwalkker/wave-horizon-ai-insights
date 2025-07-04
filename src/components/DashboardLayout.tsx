import { WaveSidebar } from "./WaveSidebar";
import { WaveHeader } from "./WaveHeader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans">
      <div className="flex w-full">
        <WaveSidebar />
        <div className="flex-1 flex flex-col lg:ml-64">
          <WaveHeader />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}