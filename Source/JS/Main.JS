var Asset_Controller = new AssetControl();

//Sprites
Asset_Controller.downloadQueue("./Assets/Sprites/bat.png");

Asset_Controller.downloadAll(function () {});
