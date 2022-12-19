function ex2 () {
    let inputName = document.getElementById('name').value
    let checkCountry = document.getElementById('pays').value

    const fetchName = (name, pays) => fetch("https://api.agify.io/?name=" + name + "&country_id=" + pays);

  fetchName(inputName, checkCountry)
	.then((response) => response.json())
	.then((json) => {
        let newDiv = document.createElement('div')
        newDiv.appendChild(document.createTextNode( checkCountry + "= Une moyenne de " + json.age + " ans et vous êtes " + json.count + " personnes."))
        document.body.appendChild(newDiv) 
	})
	.catch((error) => {
		console.log("There was an error!", error);
	});}

    document.getElementById('check').addEventListener('click', ex2)