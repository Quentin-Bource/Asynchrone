async function cit () {
    
    let response = await fetch("https://thatsthespir.it/api", {
      method: 'GET'
    });
    let json = await response.json()


   
        //createquota
        let newDiv = document.createElement('div')
        newDiv.classList.add("quota")
        newDiv.appendChild(document.createTextNode('"'+ json.quote +'"   ' + json.author ))
        document.getElementById('citation').appendChild(newDiv) 

      //createimage
        let newPhoto = document.createElement('div')
        newPhoto.classList.add("picture")
        if (json.photo){
        newPhoto.style.background = ("url(" + json.photo + ") center no-repeat")
      }
        else 
        {
        newPhoto.style.background = ("url(/no_picture.png) center no-repeat")
      }
        newPhoto.style.backgroundSize = ("cover")
        newDiv.appendChild(newPhoto)
        

  document.getElementById('click').addEventListener('click', cit)
  //Retirer la citation précédente
  if
  //document.getElementById('citation').firstChild.remove()


}

  cit() 