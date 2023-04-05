This is a "all-in-one" crafting menu UI that can be infinately scaled simply by adding a new menu to a detailed configuration, making this your go-to crafting resource.

Check out the demo: https://mkeefeus.github.io/NRCM/


-INSTALLATION-  
1. Place this resource in your FiveM Server's resource folder.
2. Open the Config file in this resource's home directory.
3. Adjust the config accordingly, everything should be named appropriately.
-- Key Points to Step 3:
	- Make sure the "Image Path" is set to your server's inventory image folder. This is set to QBCore by default.
	- You can recolor the entire application, you may use HEX or RGB.
	- Be sure to follow the "Crafting Locations" example to setup all of your menus.


-CREDITS-  
Project Error - Boilerplate  
Overextended - ConfigProvider  
QW-Crafting - Original inspiration


-ISSUES & BUGS / FEATURE REQUEST-  
For now we will be maintaining all issues through our GitHub. Please submit detailed reports on any issues you may encounter.  
https://github.com/New-Reign-Roleplay/nr-craftingmenu/issues


-CHANGELOG-  
Official Release - v1.0.0

-EXAMPLE STORE-
```lua
['example'] = {
	labels = {
		header = "Crafting Bench",
		costs = "Required Materials",
		crafting = "Items Made",
		submit = "Craft",
	},
	coords = vector3(-1258.91, -369.06, 36.84),
	emote = 'mechanic',
	job = nil,
	items = {
		{
			name = 'armor',
			label = 'Armor',
			image = 'armor.png',
			requiredItems = {
				{
					name = 'plastic',
					label = 'Plastic',
					image = 'plastic.png',
					amount = 3
				},
				{
					name = 'rubber',
					label = 'Rubber',
					image = 'rubber.png',
					amount = 2
				},
				{
					name = 'steel',
					label = 'Steel',
					image = 'steel.png',
					amount = 1
				}
			}
		}
	}
}
```

-CONFGIURABLE STYLES-
```lua
Config.Styles = {
	PrimaryColor = "#232833",
	SecondaryColor = "#374151",
	SecondaryColorHover = "4424e61",
	TextColor = "rgb(255, 255, 255)",
	InvalidTextColor = "#ff0000",
	SubmitColor = "#45d368",
	SubmitHoverColor = "#3ecf5f",
	SubmitTextColor = "#000000",
	CloseButtonColor = "#e74c3c",
	CloseButtonHoverColor = "#e43f2d"
}
```