export const HomeHeader: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 border-b border-slate-700 pb-4">
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-mono font-bold">Hi, I'm Maulana</h1>
        <img src="/images/hand.png" alt="hand" className="animate-hand" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-12">
        <div className="flex items-center gap-2 font-mono font-semibold text-sm lg:text-lg">
          <div className="w-[6px] h-[6px] rounded-full bg-slate-900 dark:bg-white" />
          <h1>Frontend Developer</h1>
        </div>
        <div className="flex items-center gap-2 font-mono font-semibold text-sm lg:text-lg">
          <div className="w-[6px] h-[6px] rounded-full bg-slate-900 dark:bg-white" />
          <h1>Based In Jakarta ID</h1>
        </div>
      </div>
      <p>
        I am a passionate and seasoned frontend developer with a strong focus on frontend development. I am highly skilled in using TypeScript and well-versed in all aspects of web technologies. I am also a collaborative team player
        dedicated to delivering efficient, scalable, and visually appealing web applications.
      </p>
    </div>
  );
};
