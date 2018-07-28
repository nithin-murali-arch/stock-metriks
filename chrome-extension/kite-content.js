
function init(){
    // waitForElement('.app-nav', function(navBar){
    //     navBar.children[2].click();
        waitForElement('.data-table table tbody', function(tbody){
            if (tbody && tbody.children.length) {
                collectData(tbody);
             }
        });
    // });
}

function collectData(tbody){
    let processedData = [];
    for(let i = 0; i < tbody.children.length; i++){
        let item = tbody.children[i];
        let obj = {};
        let children = item.children;
        obj.scrip = children[0].innerHTML.replace(/<(?:.|\n)*?>/gm, '').replace(/\s/g, '');
        obj.qty = children[1].innerHTML.replace(/<(?:.|\n)*?>/gm, '').replace(/\s/g, '');
        obj.avgPrice = children[2].innerHTML.replace(/<(?:.|\n)*?>/gm, '').replace(/\s/g, '');
        processedData.push(obj);
    }
    pushToServer(processedData);
}

init();