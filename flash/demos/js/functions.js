function htmlEntities(str) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
(function() {
    var codeContainer = document.getElementById("page-source");
    codeContainer.innerHTML = '<code>' + htmlEntities(document.documentElement.innerHTML) + '</code>';
    var filename = document.location.href.replace(/^.*[\\\/]/, '')
    document.getElementById("filename").innerHTML += filename;
    if(iframe){
        console.log(iframe.contentDocument.body.getElementsByTagName('body'));
    }
})();
