(function ($){
    $.fn.konami = function(callback, code){
        if(code === undefined) code="38,38,40,40,37,39,37,39,66,65,13";

        this.each(function (){
            let kkeys = [];
            $(this).keydown(function (e){
                kkeys.push(e.keyCode);
                if(kkeys.toString().indexOf(code) >= 0){
                    kkeys = [];
                    callback();
                }
            });
        });
    }
});


