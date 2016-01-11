var iu = iu || {};
iu.touch = function(element, etag, listener) {

};
iu.touch = function(obj, type, func) {
    var init = {
        startx: 0,
        starty: 0,
        endx: 0,
        endy: 0
    };
    var start_time = 0,
    end_time = 0;
    //direction记录滑动时候的方向
    var direction = '';
    //click容许移动的距离
    //swipe结束（但没有到达touchend）容许移动的距离
    var click_length = 5, swipe_length = 30;
    var handler_touchstart = function(event) {
        start_time = new Date().getTime();
        init.startx = event.targetTouches[0].pageX;
        init.starty = event.targetTouches[0].pageY;
        init.endx = init.startx;
        init.endy = init.starty;
        if (type == "touchstart") func.call(this, event);
        obj.addEventListener("touchmove", handler_touchmove, false);//添加touchmove事件
    };
    var handler_touchmove = function(event) {
        event.preventDefault();//阻止触摸时浏览器的缩放、滚动条滚动
        init.endx = event.targetTouches[0].pageX;
        init.endy = event.targetTouches[0].pageY;
        
        var distancex = init.endx - init.startx;
        var distancey = init.endy - init.starty;
        if (!direction) {
            // 检测是否还在圆形内
            // 在圆形内 -- 不用管
            if ((distancex * distancex) + (distancey * distancey) <= click_length*click_length) {
                return;
            } else { // 不在圆形内，赋值
                if (Math.abs(distancex) > Math.abs(distancey) && (distancex * distancex) + (distancey * distancey) > click_length*click_length) {
                    //左右事件
                    if (distancex < 0) {
                        direction = 'slideleft';
                    } else {
                        direction = 'slideright';
                    }
                } else if (Math.abs(distancey) > Math.abs(distancex) && (distancex * distancex) + (distancey * distancey) > click_length*click_length) {
                    //上下事件
                    if (distancey < 0) {
                        direction = 'slideup';
                    } else {
                        direction = 'slidedown';
                    }
                }
            }
        } else { 
            if(type == "slideleftover" && (-distancex) >= swipe_length) {
                //滑动到swipe_length的距离的时候，触发
                event.direction = direction;
                event.distancex = distancex;
                event.distancey = distancey;
                func.call(this, event);
                obj.removeEventListener("touchmove", handler_touchmove, false);  //移除touchmove事件
            }else if(type == "sliderightover" && distancex >= swipe_length) {
                //滑动到swipe_length的距离的时候，触发
                event.direction = direction;
                event.distancex = distancex;
                event.distancey = distancey;
                func.call(this, event);
                obj.removeEventListener("touchmove", handler_touchmove, false);  //移除touchmove事件
            }else if(type == "slideupover" && (-distancey) >= swipe_length) {
                //滑动到swipe_length的距离的时候，触发
                event.direction = direction;
                event.distancex = distancex;
                event.distancey = distancey;
                func.call(this, event);
                obj.removeEventListener("touchmove", handler_touchmove, false);  //移除touchmove事件
            }else if(type == "slidedownover" && distancey >= swipe_length) {
                //滑动到swipe_length的距离的时候，触发
                event.direction = direction;
                event.distancex = distancex;
                event.distancey = distancey;
                func.call(this, event);
                obj.removeEventListener("touchmove", handler_touchmove, false);  //移除touchmove事件
            }
             // type = slide, slideup, slidedown, slideright, slideleft
            else if ('slide' == type) {
                // 触发 slide 回调
                event.direction = direction;
                event.distancex = distancex;
                event.distancey = distancey;
                func.call(this, event);
            } else if (type == direction) {
                // 触发指定方向回调
                event.direction = direction;
                event.distancex = distancex;
                event.distancey = distancey;
                // if(direction == 'slideleft' && distancex < 0) func.call(this, event);
                // if(direction == 'slideright' && distancex > 0) func.call(this, event);
                // if(direction == 'slideup' && distancey < 0) func.call(this, event);
                // if(direction == 'slidedown' && distancey > 0) func.call(this, event);

                if((direction == 'slideleft' && distancex <= 0) 
                    || (direction == 'slideright' && distancex >= 0)
                    || (direction == 'slideup' && distancey <= 0) 
                    || (direction == 'slidedown' && distancey >= 0)) {
                    func.call(this, event);
                }
            }
        }
    };

    var handler_touchend = function(event) {
        var distancex = init.endx - init.startx;
        var distancey = init.endy - init.starty;
        //滑动范围在5x5内则做点击处理
        if ((distancex * distancex) + (distancey * distancey) <= click_length*click_length) {
            end_time = new Date().getTime();
            //点击事件，此处根据时间差细分下
            if ((end_time - start_time) > 300) {
                if (type == "longclick") func.call(this, event); //长按
            } else {
                if (type == "click") func.call(this, event); //当点击处理
            }
        }else if ( Math.abs(distancex) > Math.abs(distancey) && 
                (distancex * distancex) + (distancey * distancey) > (click_length*click_length) ) {
                    //左右事件
                    if (distancex < 0) {
                        direction = 'slideleftend';
                        event.direction = direction;
                        event.distancex = distancex;
                        event.distancey = distancey;
                        if (type == "slideleftend")  func.call(this, event);
                    } else {
                        direction = 'sliderightend';
                        event.direction = direction;
                        event.distancex = distancex;
                        event.distancey = distancey;
                        if (type == "sliderightend")  func.call(this, event);
                    }
        } 
        else if ( Math.abs(distancey) > Math.abs(distancex) && 
                (distancex * distancex) + (distancey * distancey) > (click_length*click_length) ) {
                    //上下事件
                    if (distancey < 0) {
                        direction = 'slideupend';
                        event.direction = direction;
                        event.distancex = distancex;
                        event.distancey = distancey;
                        if (type == "slideupend")  func.call(this, event);
                    } else {
                        direction = 'slidedownend';
                        event.direction = direction;
                        event.distancex = distancex;
                        event.distancey = distancey;
                        if (type == "slidedownend")  func.call(this, event);
                    }
        }
        if (type == "touchend") func.call(this, event);
        //初始化
        direction = '';
    };
    obj.addEventListener("touchstart", handler_touchstart, false);//添加touchstart事件
    
    //obj.addEventListener("touchmove", handler_touchmove, false);//添加touchmove事件

    //obj.removeEventListener("touchmove", handler_touchmove, false);  //移除touchmove事件

    obj.addEventListener("touchend", handler_touchend, false);//添加touchend事件
}