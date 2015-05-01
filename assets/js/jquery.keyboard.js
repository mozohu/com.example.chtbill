(function( $ ) {
    $.fn.keyboard = function(set) {
        this.config={};
        if(set){
            this.config.show=set.show;
        }
        var dom="<div class='keyboard'>";
        dom+=" <div class='number'></div>";
        dom+=" <div class='letter'>";
        dom+="  <div class='letter-uc'></div>";
        dom+="  <div class='letter-lc'></div>";
        dom+=" </div>";
        dom+="</div>";
        this.after(dom);
        var kb=$(this).next();
        var dn="<div>";
        dn+="<button>1</button>";
        dn+="<button>2</button>";
        dn+="<button>3</button>";
        dn+="<button>4</button>";
        dn+="<button>5</button>";
        dn+="<button>6</button>";
        dn+="<button>7</button>";
        dn+="<button>8</button>";
        dn+="<button>9</button>";
        dn+="<button>0</button>";
        dn+="<button id='bs'>&lt;-</button>";
        dn+="<button id='cl'>Clear</button>";
        dn+="</div>";
        kb.find(".number").append(dn);
        var dlu="<div>";
        dlu+="<button>A</button>";
        dlu+="<button>B</button>";
        dlu+="<button>C</button>";
        dlu+="<button>D</button>";
        dlu+="<button>E</button>";
        dlu+="<button>F</button>";
        dlu+="<button>G</button>";
        dlu+="<button>H</button>";
        dlu+="<button>I</button>";
        dlu+="<button>J</button>";
        dlu+="<button>K</button>";
        dlu+="<button>L</button>";
        dlu+="<button>M</button>";
        dlu+="</div>";
        dlu+="<div>";
        dlu+="<button>N</button>";
        dlu+="<button>O</button>";
        dlu+="<button>P</button>";
        dlu+="<button>Q</button>";
        dlu+="<button>R</button>";
        dlu+="<button>S</button>";
        dlu+="<button>T</button>";
        dlu+="<button>U</button>";
        dlu+="<button>V</button>";
        dlu+="<button>W</button>";
        dlu+="<button>X</button>";
        dlu+="<button>Y</button>";
        dlu+="<button>Z</button>";
        dlu+="<button id='lc'>LC</button>";
        dlu+="</div>";
        kb.find(".letter-uc").append(dlu);
        var dll="<div>";
        dll+="<button>a</button>";
        dll+="<button>b</button>";
        dll+="<button>c</button>";
        dll+="<button>d</button>";
        dll+="<button>e</button>";
        dll+="<button>f</button>";
        dll+="<button>g</button>";
        dll+="<button>h</button>";
        dll+="<button>i</button>";
        dll+="<button>j</button>";
        dll+="<button>k</button>";
        dll+="<button>l</button>";
        dll+="<button>m</button>";
        dll+="</div>";
        dll+="<div>";
        dll+="<button>n</button>";
        dll+="<button>o</button>";
        dll+="<button>p</button>";
        dll+="<button>q</button>";
        dll+="<button>r</button>";
        dll+="<button>s</button>";
        dll+="<button>t</button>";
        dll+="<button>u</button>";
        dll+="<button>v</button>";
        dll+="<button>w</button>";
        dll+="<button>x</button>";
        dll+="<button>y</button>";
        dll+="<button>z</button>";
        dlu+="<button id='uc'>UC</button>";
        dll+="</div>";
        kb.find(".letter-lc").append(dll);
        var input=this;
        kb.find("button").click(function(){
            var t=input.val();
            if($(this).attr('id')=='bs'){
                t=t.substring(0,t.length-1);
            }else if($(this).attr('id')=='cl'){
                t="";
            }else if($(this).attr('id')=='lc'){
                kb.find(".letter-uc").css("display","none");
                kb.find(".letter-lc").css("display","");
                return;
            }else if($(this).attr('id')=='uc'){
                kb.find("div.letter-uc").css("display","");
                kb.find("div.letter-lc").css("display","none");
                return;
            }else{
                t+=$(this).text();
            }
            input.val(t);
            input.trigger("change");
        });
        return this;
    };
    $.fn.show = function() {
        this.find(".keyboard").show();
        return this;
    };
    $.fn.hide = function() {
        this.find(".keyboard").hide();
        return this;
    };
}( jQuery ));

