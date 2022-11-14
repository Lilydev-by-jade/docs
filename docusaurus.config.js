// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Lilydev Docs",
    tagline:
        "Documentation for all of my projects, including mods, resource packs, modpacks, etc.",
    url: "https://docs.lilydev.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    plugins: ["docusaurus-plugin-sass"],

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    // organizationName: 'facebook', // Usually your GitHub org/user name.
    // projectName: 'docusaurus', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/Lilydev-by-jade/docs/tree/master",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "dark",
            },
            navbar: {
                title: "Lilydev Docs",
                logo: {
                    alt: "Lilydev Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    {
                        type: "doc",
                        docId: "Docs",
                        position: "left",
                        label: "Docs",
                    },
                    {
                        href: "https://lilydev.com",
                        label: "Main Site",
                        position: "right",
                    },
                    {
                        href: "https://github.com/Lilydev-by-jade/docs",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Mods",
                                to: "/docs/Mods/General%20Info",
                            },
                            {
                                label: "Modpacks",
                                to: "/docs/Modpacks/Installing",
                            },
                            {
                                label: "Resource Packs",
                                to: "/docs/Resource%20Packs/General%20Info",
                            },
                        ],
                    },
                    {
                        title: "Socials",
                        items: [
                            {
                                label: "Modrinth",
                                href: "https://modrinth.com/user/jade",
                            },
                            {
                                label: "Discord",
                                href: "https://discord.gg/TZAt4PA5av",
                            },
                            {
                                label: "Twitter",
                                href: "https://twitter.com/jadelily18",
                            },
                            {
                                label: "Mastodon",
                                href: "https://blobfox.coffee/@jade",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Ko-fi",
                                href: "https://ko-fi.com/jadelily",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/Lilydev-by-jade/docs",
                            },
                        ],
                    },
                ],
                copyright: `Licensed under <a href="https://github.com/Lilydev-by-jade/docs/blob/master/LICENSE">GNU GPLv3</a>, ${new Date().getFullYear()}. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
}

module.exports = config
