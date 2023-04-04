Config = {}

Config.Debug = true -- Shows Zone debug and other debug related items

Config.ImagePath = 'qb-inventory/html/images/'

Config.DefaultEmote = 'mechanic'

Config.Styles = {
    PrimaryColor = "#232833",
    SecondaryColor = "#374151",
    SecondaryColorHover = "4424e61",
    TextColor = "#ffffff",
    InvalidTextColor = "#ff0000",
    SubmitColor = "#45d368",
    SubmitHoverColor = "#3ecf5f",
    SubmitTextColor = "#000000",
    CloseButtonColor = "#e74c3c",
    CloseButtonHoverColor = "#e43f2d"
}

Config.CraftingLocations = {
    ['example'] = {
        label = 'Craft',
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
}
