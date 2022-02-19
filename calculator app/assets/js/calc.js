
'use strict'

const values = document.querySelectorAll('.values')
const content2 = document.querySelector('.content2')
const content1 = document.querySelector('.content1')
const deleteBtn = document.querySelector('.deleteBtn')
const btn = document.querySelectorAll('.btn')
const radioBtn =  document.querySelectorAll('.radioBtn')
const span1 = document.querySelector('.span1')
let arr =[]
let num
let res


for(let i=0; i<values.length; i++){
    values[i].addEventListener('click', function(e){

        arr.push(e.target.value)
        num = arr.join('')
        
        if(content2.innerHTML == 0){
            content2.innerHTML = ''
            content2.innerHTML = num
        }else{
            content2.innerHTML = num
        }
        // console.log(arr.join(''))
        
    })
}




    deleteBtn.addEventListener('click',function(){
        arr.splice(-2)
    
        if(arr.length == 0){
            content2.innerHTML = 0
        }else{
            content2.innerHTML = arr.join('')
        }
        
    })




    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener('click',function(e){
            content2.innerHTML=0
            let symbol = e.target.innerHTML
            arr.push(symbol)
            content2.innerHTML = arr.join('')

        })
    }




function equalto(){
    document.querySelector('.equalto').addEventListener('click',function(){

       if(content1.innerHTML == 0){

        let exp = arr.join('')
        res = eval(exp)
        console.log(res)
        content1.innerHTML = res
        content2.innerHTML = 0
        arr =[]
       }else{

        let x = String(res).concat(content2.innerHTML)
        console.log(x)
        
        let newValue = eval(x)
        history(x,newValue)
        content1.innerHTML = newValue
        content2.innerHTML = 0
        arr =[]
        res=newValue
       }
    
    })
}
equalto()



document.querySelector('.reset').addEventListener('click',function(){
    arr=[]
    content1.innerHTML = 0
    content2.innerHTML = 0
    document.querySelector('.historyItems').innerHTML = ''

})





document.querySelector('.text').addEventListener('click',() =>{
    document.querySelector('.historySec').classList.toggle('visible')
    document.querySelector('.cancel').addEventListener('click',function(){
        document.querySelector('.historySec').classList.remove('visible')
    })
})




function history(item,total){

    let html =  `<div class="historyItem">
    <p class="calc">${item}</p>
    <p class="ans">${total}</p>
  </div>`


  document.querySelector('.historyItems').insertAdjacentHTML('beforeend',html)
  console.log(html)

}




function nigthMode(){
    document.querySelector('.themeSection').addEventListener('click',function(){
        document.querySelector('.radioSection').classList.toggle('radioSectionSlide')
        document.querySelector('.calcContainer').classList.toggle('theme1')
        document.querySelector('.themeSection').classList.toggle('themeBorder')

        document.querySelectorAll('.values').forEach(e=>{
            e.classList.toggle('valuesBg')
        })
        document.querySelector('.buttons').classList.toggle('buttonsBg')
        document.querySelector('.historySec').classList.remove('visible')
        span1.classList.toggle('span1DarkMode')
        
    })
}
nigthMode()










setTimeout(function historyPopUp(){

    setInterval(function(){
        span1.classList.toggle('span1Visible')
    },6000)
    
},10000)

// span1.classList.remove('span1Visible')
