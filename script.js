console.log("Trying to connect")

const boxes = document.querySelectorAll('.box')
console.log(boxes)

boxes.forEach(function(box){
    box.addEventListener('mouseover', e => {
        console.log("mousedOver")
        box.setAttribute('class', 'box')
        console.log(box)
        let ranNum1 = Math.floor(Math.random()*255)
        let hexNum1 = ranNum1.toString(16)
        let ranNum2 = Math.floor(Math.random()*255)
        let hexNum2 = ranNum2.toString(16)
        let ranNum3 = Math.floor(Math.random()*255)
        let hexNum3 = Math.floor(Math.random()*255)
        
        let hexDecNum = "#" + hexNum1 + hexNum2 + hexNum3
        console.log(hexDecNum)
        box.style.backgroundColor = hexDecNum
    })
})

// THIS WORKS BELOW!
// const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "teal", "grey", "black"]
// const boxes = document.querySelectorAll('.box')
// console.log(boxes)

// boxes.forEach(function(box){
//     box.addEventListener('mouseover', e => {
//     console.log("Button Clicked")
//     box.setAttribute("class", "box")
//     console.log(box)
//     let index = Math.floor(Math.random()*10)
//     console.log(index)
//     let color = colors[index]
//     console.log(color)
//     // box.classList.add(color)
//     box.style.backgroundColor = color
//     })
// })

