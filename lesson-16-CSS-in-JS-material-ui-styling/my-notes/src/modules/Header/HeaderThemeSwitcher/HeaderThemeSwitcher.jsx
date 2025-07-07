import useColorMode from "../../../shared/hooks/useColorMode";

const HeaderThemeSwitcher = ()=> {
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <select defaultValue={colorMode} onChange={toggleColorMode}>
            <option value="dark">dark mode</option>
            <option value="light">light mode</option>
        </select>
    )
}

export default HeaderThemeSwitcher;