class AssetControl {
    constructor() {
        this.downloadQueue = [];
        this.SuccessfulLoad = 0;
        this.UnsuccessfullLoad = 0;
        this.cache = {};
    }

    downloadQueue(path) {
        console.log("Queueing " + path);
        this.downloadQueue.push(path);
    }

    downloadAll(downloadCallBack) {
        if (this.downloadQueue.length === 0) {
            downloadCallBack;
        }
        for (var i = 0; i < this.downloadQueue.length; i++) {
            var path = this.downloadQueue[i];
            var img = new Image();
            var that = this;

            img.addEventListener("load", function () {
                console.log(this.src + 'has loaded');
                that.SuccessfulLoad++;
                if (that.isDone()) { downloadCallBack(); }
            }, false);

            Image.addEventListener("Error", function () {
                console.log(this.src + 'has failed to load.');
                that.UnsuccessfullLoad++;

                

                if (that.isDone()) { downloadCallBack(); }

            }, false);
            img.src = path;
        }
    }

    isDone() {
        return (this.downloadQueue.length == this.SuccessfulLoad + this.UnsuccessfullLoad);
    }

    getAsset(path) {
        return this.cache[path];
    }
} 

        



    

// 