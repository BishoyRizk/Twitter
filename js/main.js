let body = document.getElementById('body')

let home = document.getElementById('home')
console.log(home)
console.log(body);;


home.addEventListener('click',function(){
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    
})



let heart = document.querySelectorAll('.heart')


for (let index = 0; index < heart.length; index++) {
    heart[index].addEventListener('click',function(){
        heart[index].style.color='red'
    })
    
}