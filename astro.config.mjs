// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "starlight-theme-catppuccin";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Lilydev Docs",
			social: {
				github: "https://github.com/Lilydev-by-jade",
			},
			sidebar: [
				{
					label: "Documentation",
					link: "/docs",
				},
				{
					label: "Minecraft Modpacks",
					items: [
						{
							label: "Modpacks",
							link: "/modpacks",
						},
						{
							label: "Hana's Cobblemon Pack",
							items: [
								{
									label: "Overview",
									link: "/modpacks/hanas-cobblemon-pack",
								},
								{
									label: "Eevee",
									items: [
										{
											label: "Regional Forms",
											link: "/modpacks/hanas-cobblemon-pack/eevee/regional",
										},
										{
											label: "Eeveelutions",
											autogenerate: {
												directory:
													"/modpacks/hanas-cobblemon-pack/eevee/eeveelutions",
											},
										},
									],
								},
							],
						},
					],
				},
				{
					label: "Tools",
					autogenerate: { directory: "tools" },
				},
			],
			plugins: [catppuccin({ dark: "mocha-pink", light: "latte-pink" })],
		}),
	],
});
