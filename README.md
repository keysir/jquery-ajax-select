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
            name: '默认值',
            value: 0
        },
        callbackData: {//返回值格式化 
            list: 'rows',
            name: 'name',
            value: 'id'
        }
    })
 ```
