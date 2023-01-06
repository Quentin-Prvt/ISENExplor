if (window.location.href.split('/')[3] != '' && window.location.href.split('/')[4] != 'admin.html' ) {
    var scene = window.location.href.split('/')[3];
} else {
    var scene = "exterieur";
}

v = pannellum.viewer('panorama', {
    "default": {

        "firstScene": scene,
        "sceneFadeDuration": 1000,
        "autoLoad": true,
        //Pour avoir les positions
        //"hotSpotDebug": true,
    },

    "scenes": {
        "exterieur": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Dehors",
            "hfov": 110,
            "pitch": 5,
            "yaw": -160,
            "type": "equirectangular",
            "panorama": "../images/dehors.png",
            "hotSpots": [
                {
                    "pitch": 5,
                    "yaw": -160,
                    "type": "scene",
                    "text": "Rentrer dans le hall",
                    "sceneId": "hall",
                    "id": "hotspot-1",
                }
            ],
        },

        "hall": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Hall Principal",
            "hfov": 120,
            "yaw": 39,
            "pitch": -10,
            "type": "equirectangular",
            "panorama": "../images/hall.png",
            "hotSpots": [
                {
                    "pitch": -6,
                    "yaw": 183,
                    "type": "scene",
                    "text": "Sortir de l'ISEN",
                    "sceneId": "exterieur",
                    "id": "hotspot-2"
                },
                {
                    "pitch": -13,
                    "yaw": 138,
                    "type": "scene",
                    "text": "Rentrer dans l'accueil",
                    "sceneId": "accueil",
                    "id": "hotspot-3"
                },
                {
                    "pitch": -16,
                    "yaw": 55,
                    "type": "scene",
                    "text": "Avancer dans le couloir",
                    "sceneId": "couloir1",
                    "id": "hotspot-4"
                },
                {
                    "pitch": -13,
                    "yaw": -6,
                    "type": "scene",
                    "text": "Salle de repos",
                    "sceneId": "piano",
                    "id": "hotspot-5"
                }
            ]
        },
        "accueil": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Accueil",
            "hfov": 110,
            "yaw": 22,
            "pitch": -35,
            "type": "equirectangular",
            "panorama": "../images/accueil.png",

            "hotSpots": [
                {
                    "pitch": -18,
                    "yaw": -33,
                    "type": "scene",
                    "text": "Sortir de l'accueil",
                    "sceneId": "hall",
                    "id": "hotspot-6"
                },

            ]
        },
        "couloir1": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Couloir",
            "hfov": 110,
            "yaw": 217,
            "pitch": 2,
            "type": "equirectangular",
            "panorama": "../images/couloir1.png",

            "hotSpots": [
                {
                    "pitch": -9,
                    "yaw": 33,
                    "type": "scene",
                    "text": "Revenir au Hall Principal",
                    "sceneId": "hall",
                    "id": "hotspot-7"
                },
                {
                    "pitch": -10,
                    "yaw": -143,
                    "type": "scene",
                    "text": "Avancer",
                    "sceneId": "couloir2",
                    "id": "hotspot-8"
                },
                {
                    "pitch": 21,
                    "yaw": 212,
                    "type": "scene",
                    "text": "Monter",
                    "sceneId": "8eme",
                    "id": "hotspot-9"
                },
                {
                    "pitch": -8,
                    "yaw": 50,
                    "type": "scene",
                    "text": "Salle de Repos",
                    "sceneId": "piano",
                    "id": "hotspot-11"
                }

            ]
        },
        "couloir2": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Couloir",
            "hfov": 110,
            "yaw": 183,
            "pitch": -10,
            "type": "equirectangular",
            "panorama": "../images/couloir2.png",

            "hotSpots": [
                {
                    "pitch": -19,
                    "yaw": 170,
                    "type": "scene",
                    "text": "Amphithéâtre",
                    "sceneId": "jnd",
                    "id": "hotspot-12"
                },
                {
                    "pitch": -9,
                    "yaw": 74,
                    "type": "scene",
                    "text": "Reculer",
                    "sceneId": "couloir1",
                    "id": "hotspot-13"
                }

            ]
        },
        
        "jnd": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Amphithéâtre JND",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/jnd.png",

            "hotSpots": [
                {
                    "pitch": -7,
                    "yaw": 147,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "couloir2",
                    "id": "hotspot-15"
                },

            ]
        },
        "8eme": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "8ème étage",
            "hfov": 110,
            "yaw": -68,
            "pitch": -10,
            "type": "equirectangular",
            "panorama": "../images/8eme.png",

            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": 31,
                    "type": "scene",
                    "text": "Salle de Meeting",
                    "sceneId": "meeting",
                    "id": "hotspot-16"
                },
                {
                    "pitch": -6,
                    "yaw": 135,
                    "type": "scene",
                    "text": "Bibliothèque",
                    "sceneId": "biblio",
                    "id": "hotspot-17"
                },
                {
                    "pitch": -21,
                    "yaw": -69,
                    "type": "scene",
                    "text": "Descendre",
                    "sceneId": "couloir1",
                    "id": "hotspot-18"
                }

            ]
        },
        "meeting": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Salle de meeting",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/meeting.png",

            "hotSpots": [
                {
                    "pitch": -21,
                    "yaw": -207,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "8eme",
                    "id": "hotspot-19"
                },

            ]
        },
        "biblio": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Bibliothèque",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/biblio.png",

            "hotSpots": [
                {
                    "pitch": -7,
                    "yaw": -7,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "8eme",
                    "id": "hotspot-20"
                },

            ]
        },
        "piano": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Salle de repos",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/piano.png",

            "hotSpots": [
                {
                    "pitch": -13,
                    "yaw": 61,
                    "type": "scene",
                    "text": "Couloir",
                    "sceneId": "couloir1",
                    "id": "hotspot-21"
                },
                {
                    "pitch": -17,
                    "yaw": -119,
                    "type": "scene",
                    "text": "Fab Lab",
                    "sceneId": "fab",
                    "id": "hotspot-22"
                },
                {
                    "pitch": -10,
                    "yaw": 28,
                    "type": "scene",
                    "text": "Adicode",
                    "sceneId": "adicode",
                    "id": "hotspot-23"
                },

            ]
        },
        "adicode": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "Adicode",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/adicode.png",
            "hotSpots": [
                {
                    "pitch": -6,
                    "yaw": 133,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "piano",
                    "id": "hotspot-24"
                },

            ]
        },
        "fab": {
            "autoRotate": "-1",
            "autoRotate": false,
            "showZoomCtrl": false,
            "compass": false,
            "title": "FabLab",
            "hfov": 110,
            "yaw": -40,
            "pitch": -16,
            "type": "equirectangular",
            "panorama": "../images/fab.png",

            "hotSpots": [
                {
                    "pitch": -22,
                    "yaw": 133,
                    "type": "scene",
                    "text": "Sortir",
                    "sceneId": "piano",
                    "id": "hotspot-25"

                },

            ]
        },
    }
});

