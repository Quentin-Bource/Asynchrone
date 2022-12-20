async function cit () {
    
    let response = await fetch("https://thatsthespir.it/api", {
      method: 'GET'
    });
    let json = await response.json();

    let age = await fetch("https://api.agify.io/?name=" +  json.author.split(' ')[0], {
      method: 'GET'
    });

    
    age = await age.json();
    console.log(json.author.split(' ')[0])

   
        //createquota
        let newDiv = document.createElement('div')
        newDiv.classList.add("quota")
        newDiv.appendChild(document.createTextNode('"'+ json.quote +'"   ' + json.author + "(" + age.age + ')' ))
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

  //document.getElementById('citation').firstChild.remove()


}

  cit() 