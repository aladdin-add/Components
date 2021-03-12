import React, { useEffect, useState } from "react";
import addons from "@storybook/addons";
import { ThemeProvider } from "styled-components";
import { ThemeModeEnum } from "@aw-web-design/theme/enums/themeModeEnum"

import modeTheme from "../packages/theme";

const channel = addons.getChannel();

function ThemedWrapper(props) {
    const [isDark, setDark] = useState(false);

    useEffect(() => {
        channel.on("DARK_MODE", setDark);
    }, [channel, setDark]);

    const theme = {
        ...modeTheme,
        colors: {
            common: modeTheme.colors.common,
            modes: modeTheme.colors.modes,
            ...modeTheme.colors.modes[isDark ? ThemeModeEnum.DARK : ThemeModeEnum.LIGHT]
        }
    }

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default ThemedWrapper;