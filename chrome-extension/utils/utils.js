function waitForElement(selector, callback, errCallback, maxRetries){
    if(!maxRetries){
        maxRetries = 5;
    }
    if(!errCallback){
        errCallback = function(){
            console.error('Failed to detect element, please refresh');
            alert('failed to detect element');
        }
    }
    let currentTries = 0;
    var exists = setInterval(function() {
        let domobj = document.querySelector(selector);
        if (domobj) {
           callback(domobj);
           clearInterval(exists);
        }
        else{
            if(currentTries === maxRetries){
                clearInterval(exists);
                errCallback();
                return;
            }
            currentTries++;
        }
     }, 100);
}