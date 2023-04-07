import { useContext, useEffect } from "react";

import { ThemeContext } from "@/ui-library/themeContext/themeContext";
import { themeMap } from "@/ui-library";

export type ThemeName = "Theme 1" | "Theme 2";

const useThemeChange = (themeName: ThemeName) => {
	const themeContext = useContext(ThemeContext);

	useEffect(() => {
		themeContext.setCurrentTheme(themeMap[themeName]);
	}, []);
};

export default useThemeChange;
