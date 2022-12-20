function cit () {
    
    const fetchQuote = () => fetch("https://thatsthespir.it/api");

  fetchQuote()
	.then((response) => response.json())
	.then((json) => {
        
        let newDiv = document.createElement('div')
        newDiv.classList.add("quota")
        newDiv.appendChild(document.createTextNode('"'+ json.quote +'"' + json.author))
        document.body.appendChild(newDiv) 
        let newPhoto = document.createElement('div')
        newPhoto.classList.add("picture")
        newPhoto.style.background = ("url(" + json.photo + ") center no-repeat")
        newDiv.appendChild(newPhoto)
        console.log(newPhoto)
        


	})
	.catch((error) => {
		console.log("There was an error!", error);
	});}

    document.getElementById('click').addEventListener('click', cit)