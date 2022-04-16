var x = 10;

function a() {
    return x+5;

}

function b(){
    var x = 5;
    return a();
}
b();