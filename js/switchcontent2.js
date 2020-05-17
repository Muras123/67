
function drop(){
    var bobexample=new switchcontent("switchgroup1","div")
    bobexample.setStatus('<img src="images/close.png">','<img src="images/open.png">')
    bobexample.setColor("darkred","black")
    bobexample.setPersist(true)
    bobexample.collapsePrevious(true)
    bobexample.init()

    var bobexample=new switchcontent("switchgroup2","div")
    bobexample.setStatus('<img src="images/close.png">','<img src="images/open.png">')
    bobexample.setColor("darkred","black")
    bobexample.setPersist(true)
    bobexample.collapsePrevious(true)
    bobexample.init()
}