class AssetControl {
    constructor() {
        this.downloadQueue = [];
        this.SuccessfulLoad = 0;
        this.UnsuccessfullLoad = 0;
        this.cache = {};
    }

    AddTodownloadQueue(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    }

    downloadAll(downloadCallBack) {
        if (this.downloadQueue.length === 0) { 
            downloadCallBack();
        }
        for (var i = 0; i < this.downloadQueue.length; i++) {
            var path = this.downloadQueue[i];
            var that = this;

            var GetExtension = path.substring(path.length - 3).toLowerCase();

            switch (GetExtension) {
                case 'png':
                case 'jpg':
                case 'jpeg':
                    var img = new Image();
                    img.addEventListener("load", function () {
                        console.log(this.src + ' has loaded');
                        that.SuccessfulLoad++;
                        if (that.isDone()) { downloadCallBack(); }
                    }, false);
        
                    img.addEventListener("Error", function () {
                        console.log(this.src + ' has failed to load.');
                        that.UnsuccessfullLoad++;
                        if (that.isDone()) { downloadCallBack(); }
        
                    }, false);
                    img.src = path;
                    this.cache[path] = img;
                    break;

                case 'mp3':
                case 'wav':
                    var aud = new Audio();
                    aud.addEventListener("load", function () {
                        console.log(this.src + ' has loaded');
                        that.SuccessfulLoad++;
                        if (that.isDone()) {downloadCallBack(); }
                    }, false);

                    aud.addEventListener("Error", function() {
                        console.log(this.src + ' has failed to load.');
                        that.UnsuccessfullLoad++;
                        if (that.isDone()) {downloadCallBack(); }
                    }. false);
                    aud.src = path;
                    this.cache[path] = aud;
                    break;
            } 
        }
    }

    isDone() {
        return (this.downloadQueue.length == this.SuccessfulLoad + this.UnsuccessfullLoad);
    }

    getAsset(path) {
        return this.cache[path];
    }
} 
