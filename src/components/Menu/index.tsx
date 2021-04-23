import classNames from "classnames";
import MenuContext from "./MenuContext";

interface IMenu extends React.HTMLAttributes<HTMLUListElement> {
  theme?: "light" | "dark";
  layout?: "vertical" | "horizontal";
}

const Menu: React.FC<IMenu> = ({
  children,
  className,
  theme = "light",
    layout = "horizontal",
    ...rest
}) => {
  const classes = classNames({
    [`flex`]: layout === "horizontal",
    [`block`]: layout === "vertical",
    [`bg-gray-800`]: theme === "dark",
    [`white`]: theme === "light"
  }, className);
  return (
    <MenuContext.Provider value={{ menuTheme: theme, inlineCollapsed: false }}>
      <ul className={classes} {...rest} >
        {children}
      </ul>
    </MenuContext.Provider>
  );
};

export * from "./Item";

export default Menu;
