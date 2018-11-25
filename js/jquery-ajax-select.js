/* 
 * jquery-ajax-select.js v1.0.0
 * @author keysir
*/
(function ($) {
    $.fn.ajaxSelect = function (options, param, optionsSelect, callback) {
        // 如果是调用方法
        if (typeof options == 'string') {
            return $.fn.ajaxSelect.methods[options](this, param, optionsSelect, callback);
        }
        // 如果是初始化组件
        options = $.extend(true,{}, $.fn.ajaxSelect.defaults, options || {});
        console.debug($(this).attr("value"));
        if(options.selected==null && $(this).attr("value")!=null){
            options.selected=$(this).attr("value");
        }
        var html = "";
        $.ajax({
            url: options.url,
            data: options.queryParams,
            success: function (data) {
                if(options.defOption!=null){
                    html = '<option value="'+options.defOption.value+'">'+options.defOption.name+'</option>';
                }
                var rows= data[options.callbackData.list];
                if (rows && rows.length > 0) {
                    for (var i = 0; i < rows.length; i++) {
                        if (options.selected != null && options.selected == rows[i][options.callbackData.value]) {
                            html += '<option value="' + rows[i][options.callbackData.value] + '" selected>' + rows[i][options.callbackData.name]  + '</option>'
                        } else {
                            html += '<option value="' + rows[i][options.callbackData.value]  + '">' + rows[i][options.callbackData.name]  + '</option>'
                        }
                    }
                }
                target.append(html);
                if(typeof(options.onChange)==='function'){
                    target.on('change', options,function (e) {
                        options.onChange($(this).val(),$(this).find("option:selected"),options);
                    });
                }
                if (callback && typeof(callback) === "function") {
                    callback();
                }
            }
        });
        var target = $(this);
        return target;
    };
    $.fn.ajaxSelect.methods = {
        //获取值
        getSelected: function (target, param, optionsSelect, callback) {
         return  $(target).val();
        },
        //设置选中值
        setSelected: function (target, param, optionsSelect, callback) {
            $(target).find("option[value="+param+"]").attr("selected",true);
            return  $(target).val();
        }
    };
    $.fn.ajaxSelect.defaults = {
        url: '/common/dict/list',//请求url
        queryParams:{},//请求参数
        callbackData:{//返回值格式化
            list:'rows',
            name: 'name',
            value: 'value'
        },
        selected: null,//默认选中值
        defOption: {//默认选项
            name: '请选择',
            value: 0
        },
        onChange:null //选中事件
    };
})(jQuery);