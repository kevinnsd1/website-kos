import { Button } from "@/components/ui/button"


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="p-8 border rounded-xl shadow-sm bg-card text-card-foreground">
        <h1 className="text-3xl font-bold mb-4">Vite + React + Tailwind + Shadcn UI</h1>
        <p className="text-muted-foreground mb-6">
          Your project is successfully set up! Start building something amazing.
        </p>
        <div className="flex gap-4">
          <Button variant="default">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  )
}

export default App
