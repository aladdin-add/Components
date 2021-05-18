import React, { useEffect, useState, createContext } from "react";
import addons from "@storybook/addons";
import { ThemeProvider } from "styled-components";
import { ThemeModeEnum } from "@aw-web-design/theme/enums/themeModeEnum"

import { ConfigContext } from "../packages/utils/context/config";
import modeTheme from "../packages/theme";
import config from "../orchard.theme.config.json";

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
        <ConfigContext.Provider value={config}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ConfigContext.Provider>
    )
}

export default ThemedWrapper;