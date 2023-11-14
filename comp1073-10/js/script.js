/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
let header = document.querySelector('header');
let section = document.querySelector('section');
/* STEP 3: Store the URL of a JSON file in a variable */
let requestURL = 'https://raw.githubusercontent.com/Leverc/week10JSpractice/main/comp1073-10/js/i-scream.json';

/* STEP 4: Create a new XHR object */
let request = new XMLHttpRequest();
/* STEP 5: Open a new request using the request() method */
request.open('GET', requestURL);
/* STEP 6: Set JavaScript to accept JSON from the server */
request.responseType = 'json';
/* STEP 7: Send the request with the send() method */
request.send()
/* STEP 8: Add an event handler that listens for the onload event of the JSON file/object */
request.onload = function() {
	let iScreamInc = request.response;
	populateHeader(iScreamInc);
	topFlavors(iScreamInc);
	console.log(iScreamInc);
}
/* STEP 9: Build out the populateHeader() function */
function populateHeader(jsonObj) {
	// Grab the company Name
	var headerH1 = document.createElement('h1');
	headerH1.textContent = jsonObj['companyName'];
	header.appendChild(headerH1);
	// Grab the company location and established date
	var headerPara = document.createElement('p');
	headerPara.textContent = 'Head Office: ' + jsonObj['headOffice'] + ', Established: ' + jsonObj['established'];
	header.appendChild(headerPara);
}
/* STEP 10a: Assemble the showTopFlavors() function */
function topFlavors(jsonObj){
	// STEP 10b: Bind the JSON topFlavors object to a var
	var topFlavors = jsonObj['topFlavors'];
	// STEP 10c: Loop through the topFlavors object
	for (var i = 0; i < topFlavors.length; i++) {
		// STEP 10d: build HTML elements for the content
		var article = document.createElement('article');
		var h2 = document.createElement('h2');
		var img = document.createElement('img');
		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var list = document.createElement('ul');
		// STEP 10e: Set the textContent property for each of the above elements (except the UL), based on the JSON content
		img.setAttribute('src', 'https://raw.githubusercontent.com/Leverc/week10JSpractice/main/comp1073-10/images/' + topFlavors[i].image);
		img.setAttribute('alt', topFlavors[i].name);
		h2.textContent = topFlavors[i].name;
		p1.textContent = 'Calories: ' + topFlavors[i].calories;
		p2.textContent = 'Type: ' + topFlavors[i].type;
		// STEP 10f: Build a loop for the ingredients array in the JSON
		var ingredients = topFlavors[i].ingredients;
		for (var j = 0; j < ingredients.length; j++) {
			var listItem = document.createElement('li');
			// Set text for each list item
			listItem.textContent = ingredients[j];
			list.appendChild(listItem);
		}
		// STEP 10g: Append each of the above HTML elements to the ARTICLE element

		// STEP 10h: Append each complete ARTICLE element to the SECTION element
		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(list);
		section.appendChild(article);
		}
	}

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations