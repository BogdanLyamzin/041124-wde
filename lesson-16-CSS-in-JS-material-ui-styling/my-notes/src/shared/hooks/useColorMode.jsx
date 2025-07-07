import { useContext } from "react";

import { colorModeContext } from "../../context/AppThemeProvider";

const useColorMode = ()=> {
    const context = useContext(colorModeContext);

    return context;
}

export default useColorMode;