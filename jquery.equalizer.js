;(function($){

    var defaults = {
        timeout: 1,
        colWidth: 2,
    };

    function Equalizer (element,options) {
        this.config = $.extend({},defaults,options);
        this.element = element;
        this.init();
    }

    Equalizer.prototype.init = function() {

        var colQuantity = Math.ceil(this.element.width()/this.config.colWidth),
            cols = new Array(colQuantity),
            colsLength = cols.length,
            spans = [];


        for (var i = 0; i < colsLength; i++) {
            var span = $('<span></span>');
            span.css({width: this.config.colWidth});
            spans.push(span[0]);
        }

        $(spans).appendTo(this.element);
    }

    Equalizer.prototype.runEqualizer = function() {
        var widget = this;
            spans = widget.element.find('span'),
            elementHeight = widget.element.height();

        spans.each(function (value,key) {
            var colHeight = Math.round(elementHeight * Math.random());
            $(this).animate(
                {height: colHeight},
                widget.config.timeout,
                'linear'
            );
        });

        spans.animate(
            {height: elementHeight/2},
            widget.config.timeout,
            'linear'
        );
    }


    $.fn.equalizer = function(options){
        return new Equalizer(this.first(), options); 
    };

}(jQuery));