"use client";
import { Card } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Stat {
  value: string;
  title: string;
  description: string;
}

interface StatsGridProps {
  stats: Stat[];
}

const StatisticCard: React.FC<Stat> = ({ value, title, description }) => (
  <div className="space-y-2 static-card">
    <div className="text-4xl font-bold">{value}</div>
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <StatisticCard key={index} {...stat} />
    ))}
  </div>
);

const Stats = () => {
  useGSAP(() => {
    gsap.from(".static-card", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".statics-container",

        start: "10% center",
      },
      duration: 1.2,
      filter: "blur(20px)",
      ease: "power1.inOut",
      yPercent: 50,
      stagger: 0.3,
    });
  });

  const statsData: Stat[] = [
    {
      value: "3X",
      title: "Load speed",
      description: "Increase the load of websites 3x faster",
    },
    {
      value: "4",
      title: "Total projects",
      description:
        "Have +4 projects using React and Next.js and accomplished animations with GSAP",
    },
    {
      value: "60%",
      title: "Accessbility score",
      description: "Ensured Accessbility over projects with 60% accuracy",
    },
    {
      value: "2",
      title: "Total Positions",
      description:
        "Worked as a frontend developer then a senior frontend developer",
    },
  ];

  return (
    <div className="main-container statics-container mb-20 space-y-8 py-4 px-2">
      <Card className="  border-none  shadow-none p-8 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-primary">
              I only deliver results.
            </h2>
            <p className="text-muted-foreground">
              I don&apos;t use excuses or something. Okay maybe sometimes.
            </p>
          </div>
        </div>
        <StatsGrid stats={statsData} />
      </Card>
    </div>
  );
};

export default Stats;
