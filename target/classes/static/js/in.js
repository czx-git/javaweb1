




// 点击关闭
document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("myDiv").style.display = "none";
});





// 热点推荐显现
window.addEventListener('scroll', function () {
    var div = document.getElementById('Div');
    if (window.scrollY > 500) {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
});




// 热点推荐滚动
var Mar = document.getElementById("Marquee");
var child_div = Mar.getElementsByTagName("div")
var picH = 90;//移动高度
var scrollstep = 3;//移动步幅,越大越快
var scrolltime = 20;//移动频度(毫秒)越大越慢
var stoptime = 3000;//间断时间(毫秒)
var tmpH = 0;
Mar.innerHTML += Mar.innerHTML;

function start() {
    if (tmpH < picH) {
        tmpH += scrollstep;
        if (tmpH > picH) tmpH = picH;
        // Mar.scrollTop = tmpH;
        Mar.scrollLeft = tmpH;

        setTimeout(start, scrolltime);
    } else {
        tmpH = 0;
        Mar.appendChild(child_div[0]);
        Mar.scrollLeft = 0;


        // Mar.scrollTop = 0;
        setTimeout(start, stoptime);
    }
}

onload = function () {
    setTimeout(start, stoptime)
};

Mar.innerHTML += Mar.innerHTML;


onload = function () {
    setTimeout(start, stoptime)
};











// 锚点
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");
    const content = document.querySelector(".content");
    const scrollPosition = window.scrollY;

    function showBackToTop() {
        if (scrollPosition < 1000) {  // 根据需要调整阈值
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    window.addEventListener("scroll", showBackToTop);
    showBackToTop();  // 初始化时显示按钮（如果满足条件）

    backToTopButton.addEventListener("click", function () {
        window.scrollTo({top: 0, behavior: "smooth"});
    });

    // 保存和恢复滚动位置
    window.addEventListener("pagehide", function () { // 也可以使用 "unload" 事件
        localStorage.setItem("scrollPosition", window.scrollY);
    });
    window.addEventListener("load", function () {
        const savedScrollPosition = localStorage.getItem("scrollPosition");
        if (savedScrollPosition) {
            window.scrollTo({top: savedScrollPosition, behavior: "smooth"});
        }
    });
});









// 保存原始颜色
const links = document.getElementsByClassName('nav-link');
for (let i = 0; i < links.length; i++) {
    const link = links[i];
    const originalColor = link.style.color;

    // 设置点击事件
    link.addEventListener('click', function () {
        this.style.color = 'yellow'; // 改变链接的颜色为红色
    });

    // 设置页面关闭事件，恢复原始颜色并去除下划线

    window.addEventListener('beforeunload', function () {
        link.style.color = originalColor; // 恢复链接的原始颜色
        // link.classList.remove('.nav-link:active'); // 移除 no-underline 类，恢复下划线
    });
}









// 轮播图
$(function () {
    var index = 0;
    var f;
    d();

    function d() {
        f = setInterval(function () {
            if (index == $(".box-img").length - 1) {
                index = 0;
                $(".box-img").css("opacity", "0")
                $(".box-img").eq(index).css("opacity", "1.2")
                // $(".box-img").eq(index).css("opacity", "1")
                // $(".box-img").eq(index).find('.indicator').css('background-image', 'url("img/rq.png")'); // 添加这一行来改变图标
                $(".botton").css("transform", "scale(1)")
                $(".botton").eq(index).css("transform", "scale(1.2)");
                // $(".botton").css("background-color", "#ccc")
                // $(".botton").eq(index).css("background-color", "#fff");
            } else {//滚动时
                index++;
                $(".box-img").css("opacity", "0")
                $(".box-img").eq(index).css("opacity", "1")
                $(".box-img").eq(index).css("opacity", "1")
                // $(".box-img").eq(index).find('.indicator').css('background-image', 'url("img/rq.png")'); // 添加这一行来改变图标
                $(".botton").css("transform", "scale(1)")
                $(".botton").eq(index).css("transform", "scale(1.2)");
                // $(".botton").css("background-color", "#ccc")
                // $(".botton").eq(index).css("background-color", "#fff");
            }

        }, 2000)

    }

    $(".box-left").click(function () {
        clearInterval(f);
        if (index == 0) {
            index = $(".box-img").length - 1;
            $(".box-img").css("opacity", "0")
            $(".box-img").eq(index).css("opacity", "1")
            // $(".botton").css("transform","scale(1.2)")
            // $(".botton").eq(index).css("transform","scale(1)");
            // $(".botton").css("background-color", "#ccc")
            // $(".botton").eq(index).css("background-color", "#fff");
            d();
        } else {
            index--;
            $(".box-img").css("opacity", "0")
            $(".box-img").eq(index).css("opacity", "1")
            // $(".botton").css("transform","scale(1.2)")
            // $(".botton").eq(index).css("transform","scale(1)");
            // $(".botton").css("background-color", "#ccc")
            // $(".botton").eq(index).css("background-color", "#fff");
            d();
        }

    })
    $(".box-right").click(function () {
        clearInterval(f);
        if (index = $(".box-img").length - 1) {
            index = 0;
            $(".box-img").css("opacity", "0")
            $(".box-img").eq(index).css("opacity", "1")
            // $(".botton").css("transform","scale(1.2)")
            // $(".botton").eq(index).css("transform","scale(1)");
            // $(".botton").css("background-color", "#ccc")
            // $(".botton").eq(index).css("background-color", "#fff");
            d();
        } else {
            index++;
            $(".box-img").css("opacity", "0")
            $(".box-img").eq(index).css("opacity", "1")
            // $(".botton").css("transform","scale(1.2)")
            // $(".botton").eq(index).css("transform","scale(1)");
            // $(".botton").css("background-color", "#ccc")
            // $(".botton").eq(index).css("background-color", "#fff");
            d();
        }
    })

    $(".botton").click(function () {
        clearInterval(f);
        var indexx = $(this).index();
        // alert(indexx)
        index = indexx;
        $(".box-img").css("opacity", "0")
        $(".box-img").eq(index).css("opacity", "1")
        // $(".box-img").eq(index).css("opacity", "1")
        // $(".box-img").eq(index).find('.indicator').css('background-image', 'url("img/rq.png")'); // 添加这一行来改变图标
        $(".botton").css("transform", "scale(1)")
        $(".botton").eq(index).css("transform", "scale(1.2)");
        // $(".botton").css("background-color", "#ccc")
        // $(".botton").eq(index).css("background-color", "#fff");
        d();
    })
})







