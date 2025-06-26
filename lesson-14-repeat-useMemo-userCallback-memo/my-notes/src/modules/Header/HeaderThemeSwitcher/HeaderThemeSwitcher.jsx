import useTheme from "../../../shared/hooks/useTheme";

const HeaderThemeSwitcher = ()=> {
    const {theme, toggleTheme} = useTheme();

    return (
        <select defaultValue={theme} onChange={toggleTheme}>
            <option value="dark">dark mode</option>
            <option value="light">light mode</option>
        </select>
    )
}

export default HeaderThemeSwitcher;