$(document).ready(function () {
        mobileResizePosition('#promo2', '.change1', '.change2', 1);
        mobileResizePosition('#promo3', '.change1', '.change2', 0);
        mobileResizePosition('#promo4', '.change1', '.change2', 1);
        mobileResizePosition('#promo5', '.change1', '.change2', 0);

        $(window).resize(function () {
            mobileResizePosition('#promo2', '.change1', '.change2', 1);
            mobileResizePosition('#promo3', '.change1', '.change2', 0);
            mobileResizePosition('#promo4', '.change1', '.change2', 1);
            mobileResizePosition('#promo5', '.change1', '.change2', 0);
        });

        function mobileResizePosition(parent, prev, next, type) {
            var width = window.innerWidth;
            var pa = $(parent);
            var c1 = pa.find(prev);
            var c2 = pa.find(next);
            var before_type = type;
            if (typeof width != 'number') {
                if (document.compatMode == 'CSS1Compat') {
                    width = document.documentElement.clientWidth;
                } else {
                    width = document.body.clientWidth;
                }
            }

            //console.log(width);
            if (width <= 768) {
                c1.after(c2);

            } else {
                if (before_type == 0) {
                    pa.find('.section-left').before(c2);
                } else if (before_type == 1) {
                    pa.find('.section-left').after(c2);
                }

            }
        }
    }
);

//设置随屏幕缩放居中
function center(element) {
    var $w = $(window).innerWidth();
    var $h = $(window).innerHeight();
    var $b_w = $(element).innerWidth();
    var $b_h = $(element).innerHeight();
    var $left = ($w - $b_w) / 2 + $(document).scrollLeft() + 'px';
    var $top = ($h + -$b_h) / 2 + $(document).scrollTop() + 'px';
    $(element).css('left', $left);
    $(element).css('top', $top);
}

//遮罩锁屏
function lock(element) {
    var $w = $(window).innerWidth();
    var $h = $(window).innerHeight();
    $(element).css('width', $w + $(document).scrollLeft() + 'px');
    $(element).css('height', $h + $(document).scrollTop() + 'px');
    document.documentElement.style.overflow = "hidden";
}
$(function () {
    //点击查看原图
    $("body").delegate(".img_click img", "click", function (evt) {
        evt.stopPropagation();
        //获取img的src
        var $img_src = $('.img_click img').attr('src');
        //创建新的img
        var $big_img_ele = $('<img>');
        //防止重复添加img元素
        $('#big_img').empty();
        $big_img_ele.attr('src', $img_src).addClass('zoom-out').appendTo('#big_img');
        var h=$(window).innerHeight();
        $('#big_img').css('height',h);
        lock('#big_img_bg');
        center('#big_img');
        $('#big_img_bg').css('display', 'block');
        $('#big_img').css('display', 'block');
    });
    //点击原图消失
    $("body").delegate("#big_img", "click", function (evt) {
        evt.stopPropagation();
        $('#big_img').css('display', 'none');
        $('#big_img_bg').css('width', 0 + 'px');
        $('#big_img_bg').css('height', 0 + 'px');
        document.documentElement.style.overflow = 'auto';
    });

    //窗口大小改变时自适应
    $(window).resize(function () {
        if ($('#big_img').css('display') == 'block') {
            $('#big_img_bg').css('display', 'block');
            center('#big_img');
            lock('#big_img_bg');
        }
    });

});