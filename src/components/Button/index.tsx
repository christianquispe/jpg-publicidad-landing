interface IButtonProps {
  theme?: "light" | "dark";
}

export const Button: React.FC<IButtonProps> = (props) => {
  const { theme, children } = props;
  return (
    <button className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-indigo-600 rounded hover:bg-indigo-500">
      {children}
    </button>
  );
};
