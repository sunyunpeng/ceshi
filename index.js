(function () {
    var main = document.querySelector("#main");
    var oLis = document.querySelectorAll("#main>ul>li");
    var winW = window.innerWidth;
    /*�豸�Ŀ�*/
    var winH = window.innerHeight;
    /*�豸�ĸ�*/
    var desW = 640;
    /*��Ƹ�Ŀ�*/
    var desH = 1008;
    /*��Ƹ�ĸ�*/

    if (winW / winH <= desW / desH) {
        main.style.webkitTransform = "scale(" + winH / desH + ")";
    } else {
        main.style.webkitTransform = "scale(" + winW / desW + ")";
    }

    /*
     cover����ԭ��:
     ������(�豸��)/������(�豸��)<=����ͼ��(��Ƹ��)/����ͼ��(��Ƹ��)  ���ո�������
     ����ֵ = �����ĸ�/����ͼ��

     ������/������>����ͼ��/����ͼ��  ���տ�������
     ����ֵ = �����Ŀ�/����ͼ��
     * */
    //ʵ�����»�����Ч��
    [].forEach.call(oLis, function () {
        var oLi = arguments[0];
        oLi.index = arguments[1];
        oLi.addEventListener("touchstart", start, false);
        oLi.addEventListener("touchmove", move, false);
        oLi.addEventListener("touchend", end, false);
    })
    function start(e) {
        this.startY = e.changedTouches[0].pageY;
    }

    function move(e) {
        var moveY = e.changedTouches[0].pageY;
        var movePos = moveY - this.startY;//�ƶ��ľ���
        var index = this.index;
        [].forEach.call(oLis,function(){
            if(arguments[1]!=index){
                arguments[0].style.display = "none";
            }
            arguments[0].className = "";
        })
        if (movePos > 0) {/*�»�*/
            //��ȡ��һ������
            this.prevsIndex = index == 0 ? oLis.length - 1 : index - 1;
            var duration = -desH+movePos;
        } else if (movePos < 0) {/*�ϻ�*/
            //��ȡ��һ������
            this.prevsIndex = index == oLis.length - 1 ? 0 : index + 1;
            var duration = desH+movePos

        }

        oLis[this.prevsIndex].className = "zIndex";
        oLis[this.prevsIndex].style.display = "block";
        oLis[this.prevsIndex].style.webkitTransform = "translate(0,"+duration+"px)";
    }

    function end(e) {
        oLis[this.prevsIndex].style.webkitTransform = "translate(0,0)";
        oLis[this.prevsIndex].style.webkitTransition = "1s";
        oLis[this.prevsIndex].addEventListener("webkitTransitionEnd",function(){
            this.style.webkitTransition = "";//�����������
        })
    }


})();
