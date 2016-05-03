  /*较数组中最大值是什么的方法*/
  //获取数组中的最大值
  var arr1 = [2, 4, -45, 23, 2.4, 500, -2903];
  var getMax = function (arr) {
    //形参我们就能把数组传进来,max可以先接住arr1中的第一个数字也就是2
    var max = arr[0];
    //开始循环
    for (var i = 0; i < arr.length; i++) {
      //判断一下,如果arr[1]>arr[0]
      if (arr[i] > max) {
        //那么就把arr[1]的值给max替换掉原来的值
        max = arr[i];
      }
    }
    //当然啦,到这里只能剩下一个值,将它return出去
    return max;
  };
  //调用这个函数,将实参传进去
  console.log(getMax(arr1));

  //通过数组中的脚标获取最大值
  var arr2 = [-3, -0.45, -23, -900, -0.1];
  var getMaxIndex = function (arr) {
    var maxIndex = 0;
    for (var k = 0; k < arr2.length; k++) {
      if (arr[k] > arr[maxIndex]) {
        maxIndex = k;
      }
    }
    return maxIndex;
  };
  console.log(getMaxIndex(arr2));
