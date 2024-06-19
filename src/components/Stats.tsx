import StatsCard from "./StatsCard";
import Contributors from "../assets/contributors.png";
import Pull from "../assets/pull.png";
import Github from "../assets/github.png";

export default function Stats() {
  const cards = [
    {
      title: "1,393",
      description: "Contributors",
      image: Contributors,
    },
    {
      title: "1M+",
      description: "Lines Changed Across 1353 Commits",
      image: Github,
    },
    {
      title: "503",
      description: "Pull Requests",
      image: Pull,
    },
  ];
  return (
    <div className="mt-20 mb-20">
      <h1 className="font-display mb-20 text-zinc-300 text-center text-4xl font-extrabold leading-none tracking-tight md:text-4xl lg:text-7xl">
        Statistics
      </h1>
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full flex flex-wrap justify-center">
          {cards.map((card, index) => (
            <StatsCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
