
const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="group relative overflow-hidden rounded-lg bg-card border p-6 hover:shadow-lg transition-shadow duration-300">
    <div className="aspect-square rounded-full overflow-hidden mb-4 bg-muted">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-muted-foreground">{role}</p>
  </div>
);

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "Project Lead",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      role: "UI Designer",
      image: "/placeholder.svg"
    },
    {
      name: "Michael Brown",
      role: "Developer",
      image: "/placeholder.svg"
    },
    {
      name: "Emma Wilson",
      role: "Content Strategist",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 animate-fadeIn">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="px-3 py-1 text-sm bg-secondary inline-block rounded-full">
            Our Team
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-4">Meet the Team</h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We're a dedicated group of professionals passionate about creating exceptional web experiences.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
