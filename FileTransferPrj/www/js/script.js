/**
 * Created by sudheergolla on 11/7/14.
 */
function successCallback(path){
    location.href=path.nativeURL;
};
function failureCallback(errorFail){
    alert("Success path:"+errorFail);
};
(function(){
    window.appRootDirName = ".myapp";
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        console.log("device is ready");
        window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }

    function fail() {
        console.log("failed to get filesystem");
    }

    function gotFS(fileSystem) {
        console.log("filesystem got");
        fileSystem.root.getDirectory(window.appRootDirName, {
            create : true,
            exclusive : false
        }, dirReady, fail);
    }

    function dirReady(entry) {
        window.appRootDir = entry;
        console.log(JSON.stringify(window.appRootDir));
    }
})();
function downloadFileImg() {
    var fileName = "index.html";
    var transfer = new FileManager();
    transfer.download_file('http://localhost:8080/FileDownload/index.html', window.appRootDir.fullPath + "/", fileName, successCallback, failureCallback);
};