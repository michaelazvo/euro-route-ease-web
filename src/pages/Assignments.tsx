
const AssignmentCard = ({ title, description, date }: { title: string; description: string; date: string }) => (
  <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-shadow duration-300">
    <span className="text-sm text-muted-foreground">{date}</span>
    <h3 className="text-xl font-semibold mt-2">{title}</h3>
    <p className="mt-2 text-muted-foreground">{description}</p>
    <button className="mt-4 text-primary hover:underline">Read more →</button>
  </div>
);

const Assignments = () => {
  const assignments = [
    {
      title: "Assignment 1",
      description: "Introduction to web development fundamentals and basic concepts.",
      date: "March 15, 2024"
    },
    {
      title: "Assignment 2",
      description: "Advanced CSS techniques and responsive design principles.",
      date: "March 22, 2024"
    },
    {
      title: "Assignment 3",
      description: "JavaScript fundamentals and DOM manipulation.",
      date: "March 29, 2024"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 animate-fadeIn">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-sm bg-secondary inline-block rounded-full">
            Course Materials
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-4">Assignments</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully crafted assignments designed to help you master web development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment, index) => (
            <AssignmentCard key={index} {...assignment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;
