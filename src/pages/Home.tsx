import { ContainerPages } from "../components/ContainerPages";

export const Home = () => {
  return (
    <ContainerPages>
      <div className="flex gap-2 items-center">
        <h1 className="text-2xl font-mono font-bold">Hi, I'm Maulana</h1>
        <img src="/images/hand.png" alt="hand" />
      </div>
    </ContainerPages>
  );
};
