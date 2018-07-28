let navBar = document.querySelector('.app-nav');

if(navBar){
    navBar[2].click();
    var checkHoldingsExist = setInterval(function() {
        let tbody = document.querySelector('.data-table table tbody');
        if (tbody && tbody.length) {

           collectData(tbody);
           clearInterval(checkHoldingsExist);
        }
     }, 100);
}

function collectData(tbody){
    let processedData = [];
    tbody.children.forEach(function(item){
        let obj = {};

    });
}