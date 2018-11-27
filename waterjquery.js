
    window.onload=function(){
        var boxWidth=$('.box').eq(0).outerWidth();   //outWidth:+padding+border 不带单位
        var col=Math.floor($(window).width()/boxWidth);
        $('#contain').width(col*boxWidth).css('margin','0 auto');
        var i=0;
        var inxx=0;
        var arrH=[];
        arrange();

        function arrange(){

            $('.box').each(function(index,value){
                if(index<col){
                    arrH[index]=$('.box').eq(index).outerHeight();
                }else{
                    var minH=Math.min.apply(null,arrH);
                    var where=$.inArray(minH,arrH);
                    $(value).css({
                        'position':'absolute',
                        'left':$('.box').eq(where).position().left,
                        'top':minH+'px',
                    });
                    arrH[where]+=$('.box').eq(index).outerHeight();
                }
                // inxx=index;

            });
            inxx=$('.box:last').index();

        }

        function reArrg(){

            for(var j=inxx+1;j<inxx+1+imgDate.data.length;j++){
                var minH=Math.min.apply(null,arrH);
                var where=$.inArray(minH,arrH);


                $('.box').eq(j).css({
                    'position':'absolute',
                    'left':where*boxWidth+'px',
                    'top':minH+'px',
                });
                arrH[where]+=$('.box').eq(j).outerHeight();
            }
            inxx=$('.box:last').index();
        }
        function check(){
            var lastH=$('.box').last().get(0).offsetTop;
            var scrollH=$(window).scrollTop();
            var clientH=$(window).height();
            if(lastH<clientH+scrollH){
                return true;
            }
        }
        window.onscroll=function(){
            if(check){
                $.each(imgDate.data,function(index,value){
                    var box= $('<div></div>').addClass('box').appendTo($('#contain'));
                    var pic=$('<div>').addClass('pic').appendTo(box);
                    $('<img>').attr('src','imges/'+value.src).appendTo(pic);
                });
                reArrg();
            }
        };

        imgDate={'data':[{'src':'111.jpg'},{'src':'222.jpg'},{'src':'333.jpg'},{'src':'444.jpg'}]};


    };

