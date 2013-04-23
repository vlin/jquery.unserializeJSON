;(function($) {
    $.fn.unserializeJSON = function(json) {
        var that = this;

        //reset the form
        this[0].reset();
        $.each(json, function(key, val) {
            var el = that.find('[name=' + key + ']');
            if (el.length > 0) {
                if ($.isArray(val)) {
                    //uncheck the all checkboxes
                    el.prop('checked', !1);
                    $.each(val, function(i, v) {
                        el.filter('[value=' + v + ']').prop('checked', !0);
                    });
                } else {
                    if (el.is(':radio')) {
                        el.filter('[value=' + val + ']').prop('checked', !0);
                    } else {
                        el.val(val);
                    }
                }
            }
        });
    };
})(jQuery);
