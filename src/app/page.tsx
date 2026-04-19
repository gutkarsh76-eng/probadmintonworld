import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const features = [
  {
    title: "Live Tournaments",
    description: "Follow world-class badminton tournaments in real time with live scores and stats.",
    badge: "Live",
    badgeVariant: "green" as const,
  },
  {
    title: "Player Profiles",
    description: "Deep-dive into career statistics, rankings, and match histories of top players.",
    badge: "Pro",
    badgeVariant: "yellow" as const,
  },
  {
    title: "Training Hub",
    description: "Access drills, technique videos, and coaching guides curated by professionals.",
    badge: "New",
    badgeVariant: "gray" as const,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <span className="text-xl font-bold tracking-tight text-brand-700">
            Pro<span className="text-gray-900">Badminton</span>World
          </span>
          <div className="hidden gap-8 text-sm font-medium text-gray-600 sm:flex">
            <a href="#" className="hover:text-brand-700 transition-colors">Tournaments</a>
            <a href="#" className="hover:text-brand-700 transition-colors">Players</a>
            <a href="#" className="hover:text-brand-700 transition-colors">Training</a>
            <a href="#" className="hover:text-brand-700 transition-colors">News</a>
          </div>
          <Button size="sm">Get Started</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="section text-center">
        <Badge variant="green" className="mb-6">World-Class Badminton Platform</Badge>
        <h1 className="mx-auto max-w-3xl text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
          The Home of{" "}
          <span className="text-brand-600">Professional</span>{" "}
          Badminton
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
          Follow live tournaments, explore player stats, and elevate your game with
          world-class training resources — all in one place.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg">Explore Tournaments</Button>
          <Button size="lg" variant="secondary">Browse Players</Button>
        </div>

        {/* Shuttle animation */}
        <div className="mt-16 flex justify-center">
          <div className="relative h-24 w-64 overflow-hidden rounded-full bg-brand-50">
            <span className="absolute top-1/2 -translate-y-1/2 animate-shuttle-arc text-4xl">🏸</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section pt-0">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
          Everything you need
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Badge variant={f.badgeVariant} className="w-fit mb-2">{f.badge}</Badge>
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="w-full">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-3xl bg-brand-600 px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold">Ready to dominate the court?</h2>
          <p className="mt-4 text-brand-100">
            Join thousands of players and fans on Pro Badminton World today.
          </p>
          <Button size="lg" className="mt-8 bg-white text-brand-700 hover:bg-brand-50">
            Sign up free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pro Badminton World. All rights reserved.
      </footer>
    </main>
  );
}
