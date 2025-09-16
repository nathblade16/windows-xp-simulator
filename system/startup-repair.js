xp.applications.add("startup-repair", () => {
    var win = new Window({
        width: 594,
        height: 434,
        title: 'Startup Repair',
        canClose: false,
        canResize: false,
        canMinimize: false,
        center: true
    });

    win.content(`
<style>
.userimg {
    width: 64px;
    height: 64px;
}
.userimgopt {
    border: 1px solid transparent;
    width: 48px;
    height: 48px;
    padding: 4px;
    border-radius: 5px;
}
.userimgopt.selected {
    border: 1px solid #68b3db;
    background-color: #e1f2fb;
}
</style>
<div style="margin-left:32px;">
    <h1 style="font-weight:normal;">Startup Repair</h1>
    <h2 style="font-weight:normal;">Automaticaly repair your computer</h2>
    <p>
        Startup repair will now find issues preventing your computer from starting and attempt to fix them
    </p>
    <br/>
    <br/><br/>
    <div style="position:absolute;right:8px;bottom:8px;">
        <button class="next">Next</button>
    </div>
</div>
`);

    win.el.find('.next').on('click', async function () {
        let users = [];
        await xp.filesystem.listDir("/Documents and Settings", (user) => {
            users.push(user);
        });

        if (users.length === 0) {
                xp.dialog("Info", "You are missing a user, please create one", () => {
                    openApp("uac_app");
                    win.close()
                })
            }
            else {
                xp.error("We can't find the problem, try a factory reset or clearing your boot modules");
                win.close()
            }
    })
});