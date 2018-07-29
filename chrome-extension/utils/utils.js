let StockMetrics = {};
StockMetrics.utils = (function (utils) {
    utils.waitForElement = function (selector, callback, errCallback, maxRetries) {
        if (!maxRetries) {
            maxRetries = 5;
        }
        if (!errCallback) {
            errCallback = function () {
                console.error('Failed to detect element, please refresh');
                alert('failed to detect element');
            }
        }
        let currentTries = 0;
        var exists = setInterval(function () {
            let domobj = document.querySelector(selector);
            if (domobj) {
                callback(domobj);
                clearInterval(exists);
            }
            else {
                if (currentTries === maxRetries) {
                    clearInterval(exists);
                    errCallback();
                    return;
                }
                currentTries++;
            }
        }, 100);
    };

    utils.pushToServer = function (data) {
        //TODO STUB
        console.log(data);
    }

    utils.showLoginPopup = function (cb) {
        let template = `
        <div class='stock-metriks-container'>
            <div class="popup">
                <div class="login-page">
                    <div class="form">
                        <form class="register-form">
                        <input id="stk-met-user" type="text" placeholder="Email address"/>
                        <input id="stk-met-pass" type="password" placeholder="password"/>
                        <button onclick="createUser()">Create</button>
                        <p class="message">Already registered? <a href="javascript:void(0)">Sign In</a></p>
                        </form> 
                        <form class="login-form">
                            <input id="stk-met-user" type="text" placeholder="username"/>
                            <input id="stk-met-pass" type="password" placeholder="password"/>
                            <button onclick="login()">Login</button>
                            <p class="message">Not registered? <a href="javascript:void(0)">Create an account</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>`;
        let div = document.createElement("div");
        div.innerHTML = template;
        let anotherDiv = document.createElement("div");
        anotherDiv.classList.add('covering-layer');
        document.body.appendChild(anotherDiv);
        document.body.appendChild(div);
        utils.waitForElement('.message a', function () {
            $('.message a').click(function () {
                $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
            });
        })
    };
    utils.checkUserLogin = function (cb) {
        chrome.storage.sync.get(['user', 'pass'], function (result) {
            if (result.user && result.pass) {
                cb(result.user, result.pass);
            }
            else {
                utils.showLoginPopup(cb);
            }
        });
    };
    return utils;
})({});

console.log(StockMetrics.utils);

