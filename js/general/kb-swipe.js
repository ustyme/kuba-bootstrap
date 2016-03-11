var swipeFlag = false;

(function(){
    'use strict';

    var downEventS = 'touchstart ' + 'mousedown ',
        moveEventS = 'touchmove ' + 'mousemove ',
        upEventS = 'touchend ' + 'mouseup ';

    $.fn.swipe = function(){
        var args = arguments[0] || { swipeTime: 900, swipeX: 200, left: left, right: right, leftProp: null, rightProp: null };

        var startX = 0,
            startTime = 0;

        this.on(downEventS, function(e){
                startTime = e.timeStamp;
                startX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX;
            })
            .on(upEventS, function(e){

                swipeFlag = false;

                startTime = 0;
                startX = 0;
            })
            .on(moveEventS, function(e){
                var currentX = e.originalEvent.touches ? e.originalEvent.touches[0].pageX : e.pageX,
                    currentDistance = (startX === 0) ? 0 : Math.abs(currentX - startX),
                    currentTime = e.timeStamp;
                if (startTime !== 0 && currentTime - startTime < args.swipeTime && currentDistance > args.swipeX) {
                    if (currentX < startX) {
                        e.preventDefault();

                        swipeFlag = true;

                        if(args.leftProp != null){
                            args.left(args.leftProp);
                        }else{
                            args.left();
                        }
                    }
                    if (currentX > startX) {
                        e.preventDefault();

                        swipeFlag = true;

                        if(args.rightProp != null){
                            args.right(args.rightProp);
                        }else{
                            args.right();
                        }
                    }
                    startTime = 0;
                    startX = 0;
                }
            });

        return this;
    };

    // Safety when null

    function left(){
        console.log('swipe left');
    }

    function right(){
        console.log('swipe right');
    }
})();