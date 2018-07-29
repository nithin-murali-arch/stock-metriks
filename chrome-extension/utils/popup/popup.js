$('.message a').click(function () {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

function createUser(){
    let username = document.querySelector('#stk-met-user').value;
    let password = document.querySelector('#stk-met-pass').value;
};

function login(){
    let username = document.querySelector('#stk-met-user').value;
    let password = document.querySelector('#stk-met-pass').value;
}