import skills from "../../service/skills.json";

export const HomeSkills: React.FC = () => {
  return (
    <div className="border-t border-slate-600">
      <h1 className="mt-16 font-mono font-semibold text-xl">Skills Tech</h1>
      <p className="mb-4">My Skills Code</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-1 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="grid justify-center text-center bg-slate-200 dark:bg-slate-800 rounded-xl py-2">
            <img src={skill.src} alt={skill.name} />
            <h1 className="font-mono font-semibold mt-2">{skill.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
