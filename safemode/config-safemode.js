let config = {}

function saveConfig(callback) {
    config.wallpaper = xp.wallpaper.href;
    config.profile = xp.profile;
    config.theme = xp.theme.name;
    xp.filesystem.writeFile(configFile, new Blob([JSON.stringify(config)], { type: 'text/plain' }), (e) => {
        if (e) xp.error(e);
        else if (callback !== undefined) callback()
    });
}