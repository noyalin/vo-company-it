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