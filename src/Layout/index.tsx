import classNames from "classnames";
import Header from "./Header";

interface ILayout extends React.HTMLAttributes<HTMLDivElement> {
  width?: "full" | "normal";
}

const Layout: React.FC<ILayout> = ({
  children,
  width = "full",
  className,
  ...rest
}) => {
  const classes = classNames(
    className,
    "text-base block font-medium",
    {
      [`w-full`]: width === "full",
      [`w-full max-w-6xl ml-auto mr-auto`]: width === "normal",
    }
  );
  return (
    <div className={classes} {...rest}>
      <Header theme="dark" />
      {children}
    </div>
  );
};
export default Layout;
