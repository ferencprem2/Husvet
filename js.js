function hatter(){
    var asd = new Date()
    if(asd.getSeconds() == 1){
    document.body.style.backgroundImage = "url('Ármin1.jpg')"}
    else{
    console.log(asd.getSeconds())
    document.body.style.backgroundImage = "url('fú.jpg')"}
}
setInterval(hatter,1000)
document.body.style.backgroundImage = "url('fú.jpg')"