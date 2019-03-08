/*左导航栏之展开一个菜单*/
var currindex=0;
var $leftul=$('#left_ul>li');
$leftul.click(function () {
    $($leftul.eq(currindex).children('.collapse.in')).collapse('hide');
    $($leftul.eq(currindex).children('.active')).removeClass("active");
    currindex=$(this).index();
});
let pageNum=1;
let pageSize=5;
/*为每个菜单设置点击事件*/
$("#DA").on("click",function () {
   alert("你好");
});
$("#dev_info").on("click",function () {
    load_main("dev-info.html");
    build_devInfo(pageNum,pageSize);
});
$("#dev_custom").on("click",function () {

    load_main("dev-custom.html");
    build_devCustom(pageNum,pageSize);
});
$("#dev_favorite").on("click",function () {

    load_main("dev-favorite.html");
    build_devFavorite(pageNum,pageSize);
});
$("#dev_batch").on("click",function () {
    load_main("dev-batch.html");
    build_devBatch(pageNum,pageSize);
});