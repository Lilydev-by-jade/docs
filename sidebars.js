module.exports = {
    docs: [
        "Docs",
        "My Projects",
        "Contributing",
        {
            type: "category",
            label: "Mods",
            collapsed: false,
            items: ["Mods/Rules"],
        },
        {
            Modpacks: [
                [
                    {
                        type: "doc",
                        id: "Modpacks/Installing",
                    },
                    {
                        type: "category",
                        label: "Jade's Parity Plus",
                        collapsed: false,
                        link: {
                            type: "doc",
                            id: "Modpacks/Jades Parity Plus/index",
                        },
                        items: ["Modpacks/Jades Parity Plus/Contributing"],
                    },
                ],
            ],
            "Resource Packs": ["Resource Packs/General Info"],
        },
    ],
}
