function ex2 () {
    let inputName = document.getElementById('name').value
    let checkCountry = document.getElementById('pays').value
    let save = []
    const fetchName = (name, pays) => fetch("https://api.agify.io/?name=" + name + "&country_id=" + pays);

  fetchName(inputName, checkCountry)
	.then((response) => response.json())
	.then((json) => {
        
        let newDiv = document.createElement('div')
        newDiv.appendChild(document.createTextNode( inputName +" "+ checkCountry + "= Une moyenne de " + json.age + " ans et vous êtes " + json.count + " personnes."))
        document.body.appendChild(newDiv) 

        save = JSON.parse(localStorage.getItem("DAVE"))
        if(!save)
        save = []
        save.push(json); 
        localStorage.setItem("DAVE" , JSON.stringify(save) )

        console.log(save)




	})
	.catch((error) => {
		console.log("There was an error!", error);
	});}

    document.getElementById('check').addEventListener('click', ex2)

    save = JSON.parse(localStorage.getItem("DAVE"))

    if (save)
{
    for (let elem of save)
    {
        let newDiv = document.createElement("div");
        newDiv.appendChild(document.createTextNode( elem.name +" "+ elem.country_id + "= Une moyenne de " + elem.age + " ans et vous êtes " + elem.count + " personnes."));
        document.body.appendChild(newDiv);
    }
}





