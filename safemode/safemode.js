xp.controlpanel.add("Startup Repair", () => {
    openApp("startup-repair")
})

xp.controlpanel.add('Factory Reset', () => {
    xp.dialog("FINAL WARNING", "Are you sure you want to factory reset? ALL DATA WILL BE LOST", () => {
        window.indexedDB.databases().then((r) => {
            for (var i = 0; i < r.length; i++) window.indexedDB.deleteDatabase(r[i].name);
        }).then(() => {
            localStorage.clear()
            alert('All data cleared.');
            location.reload()
        });
    });
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