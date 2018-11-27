window.onload=function(){
    arrange();
    function arrange(){     //图片排列
        var boxArr=document.getElementsByClassName('box');
        var main=document.getElementById('contain');
        var boxWi=boxArr[0].offsetWidth;
        var cols=Math.floor(document.documentElement.clientWidth/boxWi);
        main.style.width=cols*boxWi+'px';
        main.style.margin='0 auto';
        var arrH=[];
        for(var i=0;i<boxArr.length;i++) {
            if (i < cols) {
                arrH[i] = boxArr[i].offsetHeight;
            }
            else {
                var minH = Math.min.apply(null, arrH);  //找出数组中最小的数
                var where=index(arrH,minH);

                boxArr[i].style.position='absolute';
                boxArr[i].style.top=minH+'px';
                boxArr[i].style.left=where*boxWi+'px';
                arrH[where]+=boxArr[i].offsetHeight;
            }

        }

    }

    function index(arr,min){
        for (var j in arr){
            if(arr[j]==min){
                return j;
            }

        }
    }
    window.onscroll=function(){
        if(checkFlag()){
            var main=document.getElementById('contain');
            var fra=document.createDocumentFragment();
            for(var k=0;k<imgData.data.length;k++){
                var box=document.createElement('div');
                box.className='box';
                fra.appendChild(box);
                var pic=document.createElement('div');
                pic.className='pic';
                box.appendChild(pic);
                var img=document.createElement('img');
                img.src='imges/'+imgData.data[k].src;
                pic.appendChild(img);

            }
            main.appendChild(fra);
            arrange();
        }
    };
    var imgData={
        'data':[{'src':'111.jpg'},{'src':'222.jpg'},{'src':'333.jpg'
        },{'src':'444.jpg'}]
    };
    function checkFlag(){
        var boxArr=document.getElementsByClassName('box');
        // var dog=document.getElementById('contain');
        var lastH=boxArr[boxArr.length-1].offsetTop;
        var scrollH=document.documentElement.scrollTop||document.body.scrollTop;
        var clientH=document.documentElement.clientHeight||document.body.clientHeight;
        if(lastH<scrollH+clientH){
            return true;
        }
    }
};
