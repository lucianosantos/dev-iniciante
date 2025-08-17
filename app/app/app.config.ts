export default defineAppConfig({
    // https://ui.nuxt.com/getting-started/theme#design-system
    ui: {
        colors: {
            primary: 'teal',
            neutral: 'slate',
        },
        button: {
            defaultVariants: {
                color: 'neutral',
            },
        },
    },
    uiColors: {
        primary: 'teal',
        neutral: 'slate',
    },
    colorMode: {
        preference: 'dark',
    },
});
