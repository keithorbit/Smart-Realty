// 切换krpano场景
function krpanoLoadScene(seceneName) {
    document.getElementById("krpanoSWFObject").call("loadscene('" + seceneName + "', null, MERGE, get(blendmodes[elliptic + zoom].blend))");
    let newSceneTitle = document.getElementById("krpanoSWFObject").get('scene[' + seceneName + '].title');
    // document.title = newSceneTitle;
}

function krLoadScene() {
    const krpano = document.getElementById("krpanoSWFObject");
    let targetLink = krpano.get('scene[get(xml.scene)].name');
    if(targetLink.indexOf('diban') != -1) {
        let targetLink_result = targetLink.replace('diban', 'ditan');
        krpano.call("loadscene('" + targetLink_result + "', null, keepview, MERGE, get(blendmodes[elliptic + zoom].blend))");
        return false;
    } else if(targetLink.indexOf('ditan') != -1) {
        let targetLink_result = targetLink.replace('ditan', 'diban');
        krpano.call("loadscene('" + targetLink_result + "', null, keepview, MERGE, get(blendmodes[elliptic + zoom].blend))");
        return false;
    }
}

let _html = document.querySelector('html');
_html.addEventListener('touchend',function() {
    let itemShow = parent.document.querySelector('.item-sub.show');
    if(itemShow){
        itemShow.classList.remove('show');
    }
}, false)