(function($){
    'use strict';
    console.log(this);
    $.fn.starIt = function(){
        console.log('hit star it');
        console.log(this);
        console.log(arguments);
        $.widget('',{});
    };

}(jQuery));