'use strict';

const answer = ['c) Hong Kong', 'b) Rome', 'a) Spanish', 'b) Rockstar Games', 'd) 1964']

var option = function(ques, opt){
    let op = document.querySelector(`label[for="${ques}-option-${opt}"]`);
    verifyOption(op.textContent, op);
}

const verifyOption = function(ans, op){
    if (answer.includes(ans)){
        verified(op);
    }else{
        notVerified(op);
    }
}

const verified = function(op){
    op.classList.toggle("verfied");
}

const notVerified = function(op){
    op.classList.toggle("notVerified");
}