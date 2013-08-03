p5pkg.CORE.print = function(List__) {
    var i;
    for (i = 0; i < List__.length; i++) {
        document.getElementById('output').innerHTML += p5str(List__[i]);
    }
    return true;
};

p5pkg.CORE.warn = function(List__) {
    var i;
    List__.push("\n");
    for (i = 0; i < List__.length; i++) {
        document.getElementById('output').innerHTML += '<span class="warning">' + p5str(List__[i]) + '</span>';
    }
    return true;
};


p5pkg["main"]["v_^O"] = "browser";
p5pkg["main"]["Hash_INC"]["Perlito5/strict.pm"] = "Perlito5/strict.pm";
p5pkg["main"]["Hash_INC"]["Perlito5/warnings.pm"] = "Perlito5/warnings.pm";

function execute() {
    var source = editor.getValue();
    document.getElementById('output').innerHTML = "";
    try {
        var js_source = p5pkg["Perlito5"].compile_p5_to_js([source]);
        eval(js_source);
    }
        
    catch(err) {
        document.getElementById('output').innerHTML += '<span class="error">' + err.v + '</span>';
    }
}


var editor = CodeMirror.fromTextArea(document.getElementById("source"), {
    theme: "default"
});

