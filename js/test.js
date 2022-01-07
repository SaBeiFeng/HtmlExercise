
var arr = [1,2,3];
var str = arr.join(",");
console.log(str);
var a = function () {
    document.write("函数双被调用了")
}
test();
function test() {
    // alert("乖乖虎,你过来啊");
    document.write("乖乖虎,你过来啊!<br/>")
    a();
}
