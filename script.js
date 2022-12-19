 function fetchou() {fetch("liste.json") 
    .then((response) => response.json()) // .json convertir
	.then((text) => 
    {
		const ul = document.createElement("ul");
		//ul.textContent = text.collection[0].name;
        ul.textContent = "Collection";

        for (let elem of text.collection)
            {
                newElem = document.createElement("li");
                newElem.appendChild(document.createTextNode(elem.name));
                ul.appendChild(newElem);
                console.log(elem.name);
            }


		document.body.appendChild(ul);
	});}

    document.getElementById('check').addEventListener('click', fetchou)