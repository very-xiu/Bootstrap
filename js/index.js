var li = $('.navbar-nav>li')
var index = 0;
// console.log(ulNav);
for(var i=0; i < li.length;i++){
    li[i].num=i;
    // console.log(li[1]);
    li[i].onclick=function(){
        index = this.num;
        // console.log(index);
        for (var j = 0; j < li.length; j++) {
            li[j].className = "";
        }
        li[index].className = "active";
    }
}
$('.carousel').carousel({
    pause:"hover",
    interval:1500
});
$("#wfw-nav>li>a").click(function(e){
    e.preventDefault(); //第一种
    var href = $(this).attr("href");
    // console.log(href);
    $("#wfw-list>li>a[href='"+(href)+"']").tab('show');
    $(document).scrollTop($("#wfw-tab").offset().top);  //两种方法中的第二种
})