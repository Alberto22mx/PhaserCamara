import Bootloader from './Bootloader.js';

const config = {
    title: "Camara",
    type: Phaser.AUTO,
    scale: {
        parent: "phaser_container",
        width: 400,
        height: 200,
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: "#c7ecee",
    pixelArt: true,
    scene: [
        Bootloader
    ]
};

new Phaser.Game(config);