// GO!

document.querySelector("#hide-nav button").addEventListener('click',function(){
// TASK 1 -- Show/Hide Nav
var navMenu = document.querySelector('.nav-menu')

var menuStyle = window.getComputedStyle(navMenu)
// console.log(menuStyle)

if(navMenu.style.visibility === 'visible'){
  navMenu.style.visibility  = "hidden"
} else {
  navMenu.style.visibility  = "visible"
}
})




// ---------------------------------------------------
// ---------------------------------------------------
// TASK 2 -- Select an Icon
var wishList = document.querySelectorAll('.wish-list .option')

  forEach(wishList, function(listEl, index, theArray){
    listEl.addEventListener('click', function(evt){
      // console.log(evt.currentTarget)
      if (listEl.className === 'option'){
        listEl.className = 'option selected'
      } else {
        listEl.className = 'option'
      }
      // console.log(listEl)
    })
})



// ---------------------------------------------------
// ---------------------------------------------------
// TASK 3 -- Move Item From List to List
var pointNum = document.querySelectorAll('#add-vals .point')
// console.log(pointNum)

var totalPoints = document.querySelector('.total-points')
var totalPointsNumOnly = totalPoints.textContent
// console.log(totalPointsNumOnly)

  forEach(pointNum, function(buttonEl, index, theArray){
  buttonEl.addEventListener('click', function(){
    // console.log(buttonEl)
    var pointNumOnly = buttonEl.textContent
    // console.log(pointNumOnly)
    totalPointsNumOnly = parseInt(totalPointsNumOnly) + parseInt(pointNumOnly)
    // console.log(totalPointsNumOnly)
    totalPoints.textContent = totalPointsNumOnly
  })
})



// ---------------------------------------------------
// ---------------------------------------------------
// TASK 4 -- Add Guest to List

var fullList = document.querySelectorAll('#list-2-list .li')
// console.log(fullList);

forEach(fullList, function(liEl, index, theArray){
  listEl.addEventListener('click', function(){
    // console.log(liEl);

    var goodList = document.querySelector('.good-standing-list')
    var probationList = document.querySelector('.probation-list')
    // console.log(goodList)
    // console.log(probationList)

    if (liEl.parentNode.className === 'good-standing-list') {
        goodList.removeChild(liEl)
        probationList.appendChild(liEl)
    } if (liEl.parentNode.className === 'probation-list') {
        probationList.removeChild(liEl)
        goodList.appendChild(liEl)
    }
  })
})



// ---------------------------------------------------
// ---------------------------------------------------
// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List






// ---------------------------------------------------
// ---------------------------------------------------
