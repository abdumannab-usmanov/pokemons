
var elList = document.querySelector(".list"); 

for (var film of pokemons){
    
    var newItem = document.createElement("li")
    var newHeading = document.createElement("h3")
    var newSpan = document.createElement("span")
    var newImg = document.createElement("img")
    var newSubList = document.createElement("ul")

    
    newHeading.textContent = film.name
    newSpan.textContent = film.num
    
    for(var weak of film.weaknesses ){

        var newSubItem = document.createElement("li")
        newSubItem.textContent = weak
        newSubList.appendChild(newSubItem)

        newSubItem.setAttribute("class", "list__subitem")



    }
    
    elList.setAttribute("class", "list")
    newItem.setAttribute("class", "list__item")
    newSpan.setAttribute("class", "list__span" )
    newImg.setAttribute("src", film.img)
    newImg.setAttribute("class","list__img")
    newSubList.setAttribute("class", "list__sublist")
    
    
    

    newItem.appendChild(newHeading)   
    newItem.appendChild(newSpan)
    newItem.appendChild(newImg)
    newItem.appendChild(newSubList)
    elList.appendChild(newItem)
    
    
}


