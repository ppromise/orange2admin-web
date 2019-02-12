var currindex=0;
var $leftul=$('#left_ul>li');
$leftul.click(function () {
    $($leftul.eq(currindex).children('.collapse.in')).collapse('hide');
    $($leftul.eq(currindex).children('.active')).removeClass("active");
    currindex=$(this).index();
});