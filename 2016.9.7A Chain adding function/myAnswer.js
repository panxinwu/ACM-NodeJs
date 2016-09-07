// 首先要一个数记住每次的计算值，所以使用了闭包，在tmp中记住了x的值，第一次调用add(),初始化了tmp，并将x保存在tmp的作用链中，然后返回tmp保证了第二次调用的是tmp函数，后面的计算都是在调用tmp, 因为tmp也是返回的自己，保证了第二次之后的调用也是调用tmp，而在tmp中将传入的参数与保存在作用链中x相加并付给sum，这样就保证了计算；

// 但是在计算完成后还是返回了tmp这个函数，这样就获取不到计算的结果了，我们需要的结果是一个计算的数字那么怎么办呢，首先要知道JavaScript中，打印和相加计算，会分别调用toString或valueOf函数，所以我们重写tmp的toString和valueOf方法，返回sum的值；
// http://www.css88.com/archives/5147
function add(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = function () {
        return sum;
    };
    return tmp;
}