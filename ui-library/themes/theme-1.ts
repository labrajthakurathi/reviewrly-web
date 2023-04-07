import { ThemeOptions, createTheme } from "@mui/material/styles";

import { DefaultTheme } from "./defaultTheme";

const primary = DefaultTheme.palette.common.black;
const main = DefaultTheme.palette.common.white;

const theme: ThemeOptions = {
	name: "Theme 1",
	//@ts-ignore
	palette: {
		primary: {
			main: main,
		},
		text: {
			primary: primary,
		},
		secondary: {
			main: main,
		},
		divider: primary,
	},
	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					color: primary,
				},
			},
		},
	},
};

export const Theme1 = createTheme(DefaultTheme, theme);
