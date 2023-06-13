# Rules

Rules is a highly-configurable server-side Fabric mod that allows you to create and customize a `/rules` command.
For customization, Rules uses [Simplified Text Format](https://placeholders.pb4.eu/user/text-format/),
which means you can customize your rules pretty much **_any_** way you want, as long as it's in that format!

## Configuration

You can find the configuration file for Rules under `config/rules.json`, which is also where you'll write your rules!

If you're looking for a list of variables, you can find them [here](#rules-schema).

### Default Configuration

The first time the mod is run, it generates a config file that looks something like this:

```json
{
	"rules_header": "",
	"rule_schema": "%rule_description%",
	"rules": [
		{
			"title": "Rule Title",
			"description": "This server does not have a configured rules.json file yet!\n<gray>Learn how to create one <underline><blue><url:'https://github.com/Lilydev-by-jade/Rules'>here</url></blue></underline>.</gray>"
		}
	]
}
```

In game, it looks like this:

![default rules config in-game](/img/custom/default_rules.png)

### Custom Configuration

An example of a more highly-configured config would look something like this:

```json
{
	"rules_header": "<bold><italic><green>Modrinth</green> SMP<reset>\n",
	"rule_schema": "<bold>%rule_number%. <green>%rule_title%</green></bold>\n%rule_description%\n",
	"rules": [
		{
			"title": "No hacking.",
			"description": "This isn't an anarchy server. No one wants you to cheat here!"
		},
		{
			"title": "Punishment evasion.",
			"description": "Punishment evasion (attempting to evade punishment for breaking the rules) will be met with a permanent ban."
		},
		{
			"title": "Don't exploit mods.",
			"description": "Do not use bugs in mods to exploit the server."
		},
		{
			"title": "English only.",
			"description": "Unfortunately, our moderators can only reliably moderate in English."
		}
	]
}
```

With the in-game counterpart looking like this:

![customized rules config in-game](/gif/modrinth_smp_rules.gif)

## Properties

| Property       | Description                                                                                                                                                                         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `rules_header` | This is the header that goes above all of the other text when you use this command. If you don't want to use it, leave it as an empty string or set it to null.                     |
| `rules_schema` | This is how each rule will be formatted. You can add new lines with `\n`, and you also have a few variables at your disposal, the list of which you can find [here](#rules-schema). |
| `rules`        | This is an array of JSON objects, all of which will have `title` and `description` properties.                                                                                      |

## Rules Schema

The most important thing in `rules_schema` is the inclusion of variables.
Variables in the config file are always in the format of `%VARIABLE_NAME%`.
For now, variables are exclusive to the `rules_schema` property.

-   `rule_number` - This is the number of each rule, in the order it's listed in the config.
-   `rule_title` - This is the title of your rules, from the `title` property in each rule's JSON object.
-   `rule_description` - This is the description of your rules, from the `description` property in each rule's JSON object.

One of the most basic examples of `rules_schema`, using all available variables, looks like this:

```json
"rules_schema": "%rule_number%. %rule_title%\n%rule_description%"
```
