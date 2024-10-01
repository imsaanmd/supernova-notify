fx_version "cerulean"
game "gta5"

ui_page "nui/build/index.html"

files {
    "nui/build/**/*",
}

client_scripts {
    "@vrp/lib/utils.lua",
    "client/main.lua"
}

server_scripts {
    "@vrp/lib/utils.lua",
    "server/server.lua",
}