interface FooterProps {
  isOpen: boolean;
}

export const NavbarFooter: React.FC<FooterProps> = ({ isOpen }) => {
  return (
    <footer className={`font-mono text-sm font-semibold hidden lg:block ${isOpen ? "flex" : "lg:hidden"}`}>
      <h1>
        &copy; 2023 with <span className="animate-pulse">❤️</span> by Maulana
      </h1>
    </footer>
  );
};
