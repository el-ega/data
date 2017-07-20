function getSortedKeys(obj) {
    var keys = []; for(var key in obj) keys.push(key);
    return keys.sort(function(a,b){return obj[b]-obj[a]});
}

function titleFromFilename(filename) {
    var fragments = filename.split('.');
    var title = '<b>#' + fragments[0] + ' / </b>' + fragments.slice(1, -1).join(' ');
    return title;
}

function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^]*)').exec(window.location.href);
    if (results==null) {
       return null;
    } else {
       return results[1] || 0;
    }
}
