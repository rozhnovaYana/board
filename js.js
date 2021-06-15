'use strict'
document.addEventListener("DOMContentLoaded", ()=>{
    const board=document.querySelector("#board"),
    SQUARES_NUMBER=500
    for(let i=0; i<SQUARES_NUMBER; i++){
        const square=document.createElement('div')
        square.classList.add("square")
        board.append(square)
        square.addEventListener("mouseover", ()=>{
            setColor(square)
        })
        square.addEventListener("mouseleave", ()=>{
            removeColor(square)
        })
    }
    function setColor(elem){
        const color=getRandonColor()
        elem.style.backgroundColor=color
        elem.style.boxShadow=`0 0 2px ${color} 0 0 10px ${color}`
    }
    function removeColor(elem){
        elem.style.backgroundColor="rgb(54, 54, 54)"
        elem.style.boxShadow=`0 0 2px rgb(0,0,0)`

    }
    function getRandonColor(){
        const red=Math.floor(Math.random()*255),
        green=Math.floor(Math.random()*255),
        blue=Math.floor(Math.random()*255)
        const color=`rgb(${red}, ${green}, ${blue})`
        return color
    }
    

})