console.log("welcome to tic tac toe")

// new Audio
let music=  new Audio("music.mp3")
let audiotrun=  new Audio("ting.mp3")
let gameOver=  new Audio("win.mp3")
let gameDraw=  new Audio("gamedraw.mp3")

let turn = "X"
var win =  false
let reset = document.getElementById("reset")


reset.addEventListener('click',()=>{
  window.location.reload();
  win =false

})
 // funtion to change the turn

const changeturn = () =>{
    return turn === "X" ? "0" : "X"
}
let value = 0
// function to check for a win
const checkWin =(e) =>{
    let boxtexts = document.getElementsByClassName("boxtext") 
  let wins = [
    [0,1,2],[3,4,5],[6,7,8],[1,4,7],[0,3,6],[0,3,5],[0,4,8],[2,4,6],[2,5,8]
  ]
//   console.log("boxtexts =====",boxtexts[0].innerText)
  wins.forEach(e =>{
    // console.log(e[0],e[1],e[2])
    if(  (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText)  && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)  && boxtexts[e[0]].innerText!== "" && boxtexts[e[1]].innerText!== "" && boxtexts[e[2]].innerText!== ""){
        document.getElementsByClassName('info')[0].innerText = boxtexts[e[0]].innerText+ " Win"
        gameOver.play()
        document.querySelector('.imagebox').getElementsByTagName('img')[0].style.display = "flex"
        
        win = true
    }

    
  })
}

// Game Logic

let boxes = document.getElementsByClassName("box")

Array.from(boxes).forEach(element =>{
    
    
    let boxtext = element.querySelector(".boxtext")
    // console.log("boxtext ===> ", boxtext)
    element.addEventListener('click', ()=>{
      // console.log("win =====>",win )
      if( win ){
            
      }else{
        if(boxtext.innerText === '' ){
          boxtext.innerText = turn
         turn = changeturn()
          // console.log("changeturn() ====",changeturn())
          audiotrun.play()
          // if(!gameOver){
            document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
          // }

          checkWin()
          // console.log("e ======>")

        var count = 0
        
          for (let i = 0; i<Array.from(boxes).length ; i++) {
            console.log("x ======>",Array.from(boxes)[i].innerText, i)
            if(Array.from(boxes)[i].innerText === ""){
              count = count + 1
            }
          }
          if (count === 0){
            document.getElementsByClassName('info')[0].innerText = "Game Draw"
            gameDraw.play()
          }



      }
      }
        
        
    })
})