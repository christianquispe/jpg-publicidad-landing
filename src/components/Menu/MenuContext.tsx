import { createContext } from 'react';

export type MenuTheme = 'light' | 'dark';

export interface MenuContextProps {
  inlineCollapsed: boolean;
  menuTheme?: MenuTheme;
  direction?: 'ltr' | 'rtl';
}

const MenuContext = createContext<MenuContextProps>({
  inlineCollapsed: false,
});

export default MenuContext;
