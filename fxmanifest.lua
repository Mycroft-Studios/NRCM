fx_version "cerulean"

description "Crafting Menu for New Reign Roleplay"
author "Mkeefeus & MrMark1127"
version '1.0.0'
repository 'https://github.com/New-Reign-Roleplay/nr-craftingmenu'

lua54 'yes'
game 'gta5'

ui_page 'web/build/index.html'

client_scripts {
    "framework/client/qbcore.lua", -- CHANGE THIS TO YOUR FRAMEWORK
    "client/client.lua",
    "client/utils.lua",
}

server_scripts {
    'framework/server/qbcore.lua', -- CHANGE THIS TO YOUR FRAMEWORK
    "server/server.lua"
}

dependencies {
    'ox_lib',
}

shared_scripts {
    '@ox_lib/init.lua',
    'config.lua',
}

files {
    'web/build/index.html',
    'web/build/**/*'
}
