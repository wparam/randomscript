(function($){
    'use strict';
    
    $.widget('my.star', {
        options:{
            rate: 0 //from 0 to 5

        },
        _create: function(){
            var template = this._template();
            this.element.append(template);
        },
        _template: function(){
            return [
                '<div>template</div>'
            ].join('');
        },
        _destroy: function(){
            
        }
    });

}(jQuery));