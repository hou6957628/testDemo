var indexController = {
    getPhoneBool: true,
    init: function () {
        this.productsListView();
        localStorage.removeItem('codeSign');
        this.numberGrow($('#number-grow'), 0, 200000, 2);
    },

    data: {
        isNewUsers: true,  //判断是否为新用户， true-新用户
        comment_list: [{
            'name': '陈*明',
            'time': '',
            'content': "恭喜张先生 135***8863成功到账5万。"
        }, {
            'name': '李*慧',
            'time': '',
            'content': "恭喜王女士 182***8721成功到账20万。"
        }, {
            'name': '周*',
            'time': '',
            'content': '恭喜李先生 186***1284成功到账10万。'
        }, {
            'name': '丁*',
            'time': '',
            'content': '恭喜柳先生 136***5672成功到账15万'
        }, {
            'name': '邱*贝',
            'time': '',
            'content': '恭喜单女士 136***2314成功到账6万'
        }, {
            'name': '刘*彻',
            'time': '',
            'content': '恭喜陈先生 132***6481成功到账10万'
        }, {
            'name': '赵*豪',
            'time': '',
            'content': '恭喜田女士 158***2313成功到账8万'
        }],

    },
    numberGrow(ele, startValue, value, time) {
        var step = (value * 60) / (time * 1000);
        var current = 0;
        var start = startValue;
        var t = setInterval(function () {
            start += step;
            if (start > value) {
                clearInterval(t);
                start = value;
                t = null;
            }
            if (current === start) {
                return;
            }
            current = parseInt(start);
            ele.html(current.toString().replace(/(\d)(?=(?:\d{3}[+]?)+$)/g, "$1,")) //添加“,”号
        }, 60);
    },
    getTime: function () {
        function p(s) {
            return s < 10 ? '0' + s : s;
        }
        var myDate = new Date(),
            h = myDate.getHours(),
            m = myDate.getMinutes();
        var time = h * 60 + m;
        var timeData = [],
            i = 0;
        for (; i < 15; i++) {
            var randomNumber = Math.floor(Math.random() * 10 + 1);
            time -= randomNumber;
            var timeH = parseInt(time / 60),
                timeM = time % 60;
            timeData.push(p(timeH) + ':' + p(timeM));
        };
        return timeData;
    },
    productsListView: function () {
        var _this = this,
            getTime = this.getTime(),
            html = '';
        $.each(indexController.data.comment_list, function (i, b) {
            html += '<li><p style="text-align: center">' + b.content + '</p></li>';
        });
        $('#comment_list').html(html);
        this.poster();
    },
    poster: function () {
        var liHeight = $("ul li").height();
        setInterval(function () {
            $("ul").animate({
                top: -liHeight
            }, 500, function () {
                $("ul li").eq(0).appendTo($("ul"));
                $("ul").css({
                    "top": 0
                });
            })
        }, 4000)
    },
}
$(function () {
    indexController.init();
})
