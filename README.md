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
> ###初始化方法 参数
> 1 
>
> 2 queryParams 
>
> 3 defOption
>
> 4 callbackData //返回值格式化 请求数据格式 {默认为 {rows:[{name:"aaaa",value:1},{name:"bbb",value:2}]}}]

> # 初始化方法-参数
> 一、url 访问的url
>
> 二、queryParams 请求参数 默认：{}
>
> 三、defOption 默认选项 比如 默认  {name: '请选择', value: 0}
>
> 四、callbackData ajax 返回值格式默认格式 {rows：[{name:"aaaaa",value:1}]}
>
> 五、提供了多条件查询的页面和相关接口
>
> 六、提供了查询结果匹配高亮显示，分页查询等功能
