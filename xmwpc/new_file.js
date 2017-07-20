var swiper=new Swiper('.swiper-container',{
				autoplay:1000,
				loop:true,
				autoplayDisableOnInteraction:false,
				pagination:".swiper-pagination",
				prevButton:".swiper-button-prev",
				nextButton:".swiper-button-next"
	})


$(".shop-empty").hide()
$(".shop").hover(function() {
	$(".shop-empty").stop().slideToggle()
})

$(".nav-down,.nav-down ul").hide()
$("#nav>ul>li").hover(function() {
	$(this).find(".nav-down,.nav-down ul").stop().slideToggle()
})
$(".phone-show,.phone-show>ul").hide()
$(".tou>li").hover(function() {
	$(this).find(".phone-show,.phone-show ul").stop().toggle()
})

$(".hua").hide()
$(".jiadian_right>ul>li").hover(function() {
	$(this).find(".hua").stop().slideToggle()
})

$(".bgm").hover(function() {
	$(this).addClass("bgm_shadow")
},function() {
	$(this).removeClass("bgm_shadow")
})

$(".jiadian_right>ul>li").hover(function() {
	$(this).addClass("bgm_shadow")
	$(".jiadian_right>ul:last-child>li:last-child").removeClass("bgm_shadow")
},function() {
	$(this).removeClass("bgm_shadow")
})
$(".jiadian_left>img").hover(function() {
	$(this).addClass("bgm_shadow")
},function() {
	$(this).removeClass("bgm_shadow")
})
$("#content>ul>li").hover(function() {
	$(this).addClass("bgm_shadow")
},function() {
	$(this).removeClass("bgm_shadow")
})
