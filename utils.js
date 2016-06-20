
function animate(ele, obj, duration) {
    var obegin = {}
    var ochange = {}
    var flag = 0;
    for (var attr in obj) {
        var target= obj[attr]
        var  begin = animate.getCss(ele, attr)
        var change = target - begin
        if (change) {
            obegin[attr] = begin
            ochange[attr] = change
            flag++
        }
    }
        if (!flag)return;
        var interval = 15;
        var times = 0
        clearInterval(ele.timer)
    function step() {
       times+=interval
        if (times < duration) {

            for (var attr in ochange) {
                var begin = obegin[attr]
                var change = ochange[attr]
                var val = times/duration * change + begin
                animate.setCss(ele, attr, val)
            }
        } else {

            for (var attr in ochange) {
                var target = obj[attr]
                clearInterval(ele.timer);
                ele.timer = null
                animate.setCss(ele, attr, target)
            }


        }
    }
    ele.timer = setInterval(step, interval)
}
animate.setCss = function (ele, attr, val) {

        ele.style[attr] = val + "rem"

}
animate.getCss = function (ele, attr) {
    if (window.getComputedStyle) {
        return parseFloat(window.getComputedStyle(ele, null)[attr])
    }
    else {
        return parseFloat(ele.currentStyle[attr])
    }
}


