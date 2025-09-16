xp.controlpanel.add("Startup Repair", () => {
    openApp("startup-repair")
})

xp.controlpanel.add('Factory Reset', () => {
    xp.dialog("FINAL WARNING", "Are you sure you want to factory reset? ALL DATA WILL BE LOST", () => {
        xp.filesystem.listDir("/", (e) => {
            if (e[e.length - 1] === "/") {
                xp.filesystem.deleteDir(e, () => { });
            } else {
                xp.filesystem.deleteFile(e, () => { });
            }
        });
        location.href = location.href.split("#")[0];
        localStorage.clear();
    }, true);
});

var event = new Event('xpboot');
window.dispatchEvent(event);
console.log('Dispatched boot event');

xp.controlpanel.add('Explorer window', () => {
    openLocation("My Computer")
});

xp.controlpanel.add('Terminal', () => {
    openApp("terminal")
});

xp.controlpanel.add('Desktop UI', () => {
    $('windows').initWindows();
    xp.startmenu.update();
})

openLocation("Control Panel")
