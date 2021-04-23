import classNames from "classnames";
import { useContext } from "react";
import MenuContext from "./MenuContext";

export interface IItem extends React.HTMLAttributes<HTMLLIElement> {
  theme?: "light" | "dark";
}

export const Item: React.FC<IItem> = ({
  children,
  theme,
  className,
  ...rest
}) => {
  const { menuTheme } = useContext(MenuContext);
  const currentTheme = menuTheme || theme;
  const classes = classNames(
    className,
    "text-base rounded cursor-pointer	 px-2 block px-3 py-2 font-medium",
    {
      [`text-gray-300 bg-gray-800 hover:bg-gray-700 hover:text-white`]:
        currentTheme === "dark",
      [`text-gray-700 bg-white hover:text-gray-900`]: currentTheme === "light"
    }
  );
  return (
    <li className={classes} {...rest}>
      {children}
    </li>
  );
};
