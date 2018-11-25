# jquery-ajax-select
基于 jquery 简单的select 选项加载插件
没有UI侵入 只依赖jQuery
提供默认值选择 

###初始化方法

```
$("#deptId").ajaxSelect({
        url: '/dept/list',
        queryParams: {limit: 1000, offset: 0},//请求参数
        defOption: {
            name: '请选择',
            value: 0
        },
        callbackData: {
            list: 'rows',
            name: 'name',
            value: 'id'
        }
    })
 ```

> # 参数
> 一、url 访问的url
>
> 二、queryParams 请求参数 默认：{}
>
> 三、defOption 默认选项 比如 默认  {name: '请选择', value: 0}
>
> 四、callbackData ajax 返回值格式默认格式 {rows：[{name:"aaaaa",value:1},{name:"bbbb",value:2}]} 
>
> 五、selected 默认选中的 value  也可以设置 select 的 value 属性 这里会自动取值选中
>
> # 方法
> 一、getSelected 获取选中的值 
```
$("#deptId").ajaxSelect("getSelected");
```
>
> 二、setSelected 设置选中的选项
>
```
$("#deptId").ajaxSelect("setSelected",1);
```
















