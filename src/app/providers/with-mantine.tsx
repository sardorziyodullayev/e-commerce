import { createTheme, List, MantineProvider } from "@mantine/core";
import "@mantine/notifications/styles.css";
import { emotionTransform, MantineEmotionProvider } from "@mantine/emotion";
import { Notifications } from "@mantine/notifications";
import { ComponentType, createElement } from "react";

export const withMantine = (component: ComponentType) => () => {
    const theme = createTheme({
        components: {
            List: List.extend({
                styles: () => ({
                    root: {
                        listStyle: "none",
                    },
                }),
            }),
        },
    });

    return (
        <MantineProvider
            theme={theme}
            withCssVariables
            defaultColorScheme="light"
            stylesTransform={emotionTransform}>
            <MantineEmotionProvider>
                <Notifications limit={3} position="bottom-center" zIndex={100000} />
                {createElement(component)}
            </MantineEmotionProvider>
        </MantineProvider>
    );
};
