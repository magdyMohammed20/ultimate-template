$(function(){
    "use strict";
    
    $('.toggle-btn').on('click' , () => {
        $(' .side-bar ,.content').toggleClass('no-sidebar')
    })
})
