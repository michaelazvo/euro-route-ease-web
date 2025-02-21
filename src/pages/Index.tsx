
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 animate-fadeIn">
      <div className="max-w-3xl w-full text-center space-y-6">
        <span className="px-3 py-1 text-sm bg-secondary inline-block rounded-full">
          Welcome to our project
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
          Simple Sparkling Presentations
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A minimalist approach to creating and sharing beautiful presentations. 
          Explore our assignments and meet the team behind this project.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <a 
            href="/assignments" 
            className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            View Assignments
          </a>
          <a 
            href="/about" 
            className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            Meet the Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
