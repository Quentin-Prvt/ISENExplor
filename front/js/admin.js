v.getConfig().hotSpotDebug = true;
let img = document.getElementById("nomImg");

function upload(files) {
    let nomImg = img.value;
    if (nomImg != '') {
        socket.emit("upload", [files[0], nomImg]);
    }
};

let j = 26;  // variable j pour avoir des id de hotspot et scene dynamique
let admin = document.getElementById('admin-button');
admin.addEventListener('click', function () {
    nomImg = img.value;
    currentPitch = v.getPitch();
    currentYaw = v.getYaw();  // On prend la position du curseur
    v.addScene("scene-" + j, {
        "autoRotate": "-1",
        "autoRotate": false,
        "showZoomCtrl": false,
        "compass": false,
        "panorama": "../images/" + nomImg
    });
    v.addHotSpot({ "pitch": currentPitch, "yaw": currentYaw, "type": "scene", "text": "Nouvelle pièce", "id": "hotspot-" + j, "sceneId": "scene-" + j }, v.getScene());
    j++;
    let table = [];
    table = [nomImg, 'Nouvelle pièce', currentPitch, currentYaw, 'hotspot-' + j, 'scene-' + j];
    socket.emit('uploadImageInfos', table);
});

let lastScene = v.getConfig().scene;

window.addEventListener('click', function () {
    verifHotSpotsbdd();
    verifHotSpots();
    console.log(verifHotSpots())
    lastScene = v.getConfig().scene
})

function verifHotSpotsbdd() {
    let i = 0;
    let arrayPitch = [];
    let arrayYaw = [];
    let arraySceneId = [];
    let arrayText = []
    let arrayId = [];
    let hotSpotsinfo = v.getConfig().hotSpots
    if (v.getConfig().scene == lastScene) {
        while (i < hotSpotsinfo.length) {

            arrayPitch[i] = hotSpotsinfo[i].pitch
            arrayYaw[i] = hotSpotsinfo[i].yaw
            arraySceneId[i] = hotSpotsinfo[i].sceneId
            arrayId[i] = hotSpotsinfo[i].id
            arrayText[i] = hotSpotsinfo[i].text
            i++;
        }
        return [arrayId, arrayText];
    } else {
        arrayPitch.length = 0;
        arrayYaw.length = 0;
        arraySceneId.length = 0;
        arrayId.length = 0;
        arrayText.length = 0;
    }
}

function verifHotSpots() {
    let i = 0;
    let arrayText = []
    let arrayId = [];
    let hotSpotsinfo = v.getConfig().hotSpots
    if (v.getConfig().scene == lastScene) {
        while (i < hotSpotsinfo.length) {
            arrayId[i] = hotSpotsinfo[i].id
            arrayText[i] = hotSpotsinfo[i].text
            i++;
        }
        return [arrayId, arrayText];
    } else {
        console.log("Changement de scène, recliquez une fois")
        arrayId.length = 0;
        arrayText.length = 0;
    }
}

function delHotSpot() {
    const input = document.getElementById('hotSpotDel');
    v.removeHotSpot(input.value);
}

const del = document.getElementById('delHotSpot');
del.addEventListener('click', function(){
    delHotSpot();
})