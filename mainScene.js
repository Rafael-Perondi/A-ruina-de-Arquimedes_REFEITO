


export class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });

        this.water
    }

    


    preload() { // Carregando os arquivos para o phaser | Loading files to phaser
        this.load.image("groundImage", "assets/map/tiles/groundTileset.png")   
        this.load.image("grassImage", "assets/map/tiles/grassTileset.png")
        this.load.image("waterImage", "assets/map/tiles/waterTileset.png")
        this.load.tilemapTiledJSON("map", "assets/map/map.json")
    }

    create() {  /* Mostrando os arquivos carregados para a tela
                * Showing loaded files to the screen
                */

        const map = this.make.tilemap({ key: "map" }) 


        /**
         * @param {string} ground - Tileset a ser preenchido | Tileset to be filled
         * @param {string} groundImage - Imagem a preencher tileset solicitado | Image to fill requested tileset 
         */

        const tilesetGround = map.addTilesetImage("ground", "groundImage")
        const tilesetGrass = map.addTilesetImage("grass", "grassImage")
        const tilesetWater = map.addTilesetImage("water", "waterImage")

        /**
         * 
         */

        const grass = map.createLayer("grass", tilesetGrass, 0, 0) 
        this.water = map.createLayer("water", tilesetWater, 0, 0)

        this.water.setCollisionByProperty({ collider: true})


        

    }

}