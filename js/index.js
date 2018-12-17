/**
* only support #id, tagName, .className
* and it's simple single, no combination
*/
function matchSelector(ele, selector) {
    // if use id
    if (selector.charAt(0) === '#') {
    return ele.id === selector.slice(1);
    }
    
    // if use class
    if (selector.charAt(0) === '.') {
    return (' ' + ele.className + ' ').indexOf(' ' + selector.slice(1) + ' ') != -1;
    }
    
    // if use tagName
    return ele.tagName.toLowerCase() === selector.toLowerCase();
}

// 获取距离 ele 最近的符合 selector 的父/组级元素
// selector 只能用简单的选择器，#id, tagName, .className，单个无组合
function closest(ele, selector) {
    var result,
    tmp = ele.parentNode;
    while (tmp) {
        if (matchSelector(tmp, selector)) {
            result = tmp;
            break;
        }
        tmp = tmp.parentNode;
    }
    return result;
}

// 隐藏百度广告
const removeBaiduAd = function() {
    let content_left = document.querySelector('#content_left');
    if (!content_left) {
        return;
    }
    let childs = content_left.childNodes;
    childs.forEach(function(item){
        if(item.nodeName === 'DIV' && !item.classList.contains('c-container')){
            content_left.removeChild(item);
        }
    })
}

removeBaiduAd();

// Dragonfly日志系统格式化
const formatDragonflyLogs = function() {
    document.addEventListener('click', function(e) {
        let target = e.target || e.srcElement;
        let discover_table_row = target.closest('.discover-table-row');
        if(discover_table_row){
            let nextSibling = discover_table_row.nextSibling;
            let viewer_span;
            if(nextSibling) {
                viewer_span = nextSibling.querySelectorAll('.doc-viewer-value');
            }
            if(viewer_span[6]) {
                let value = viewer_span[6].innerHTML;
                // console.log(value)
                viewer_span[6].innerHTML = decodeURIComponent(value);
                // let html = viewer_span[6].innerHTML;
                // if(html) {
                //     html = html.replace(/\s{1,}/ig, '\n');
                // };
                // viewer_span[6].innerHTML = html;
                
            }
        }
    })
}
formatDragonflyLogs();