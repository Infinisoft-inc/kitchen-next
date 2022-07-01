
export type ThemeMode = "dark" | "light";
export const themeMode: ThemeMode = "light";


export const toggleThemeMode = () => {
    const _mode = localStorage.getItem('__theme__') || 'dark';
    localStorage.setItem('__theme__', _mode === 'dark' ? 'light' : "dark");
};
