//labo6 team4
function getAllDataTable(){
	url1 = "http://localhost:8080/employe";
	url2 = "http://127.0.0.1:8080/employe";
	url3 = "/employe";
  
	fetch(url1)
	.then(response => response.json())
	.then(json => {

				
		let line = `<tr>
						<th>Id</th>
						<th>Prenom</th>
						<th>Nom</th>
						<th>Telephone</th>
					</tr>`;
	
		json.forEach(emp => {
			line += `<tr>
						<td>${emp.id} </td>
						<td>${emp.nom} </td>
						<td>${emp.prenom}</td>
						<td>${emp.telephone}</td>			
					</tr>`;
		});

	
	document.getElementById("emp").innerHTML = line;
   });
}//
//********************************json**************************************** */
  async function getAllDataJ() {
	url1 = "http://localhost:8080/employe";
	let resultElement = document.getElementById("getResult");
	resultElement.innerHTML = "";
  
	try {
	  const res = await fetch(`${url1}`);  	    
	  const data = await res.json();  	   
	  resultElement.innerHTML = resHtml(data);
	} catch (e) {
	  resultElement.innerHTML = "trouve l'erreur getAllDataJ";
	}
  }//


  
async function getDataById() {
	url1 = "http://localhost:8080/employe";
	let resultElement = document.getElementById("getResultId");
	resultElement.innerHTML = "";
  
	const id = document.getElementById("get-id").value;
  
	if (id) {
	  try {
		const res = await fetch(`${url1}/${id}`);  		
  		const data = await res.json(); 	
		  
		  const dataPlus = {
			data: data,
			status: res.status,			
			headers: {
			  "Content-Type": res.headers.get("Content-Type")			  
			},
		  };

		resultElement.innerHTML = resHtml(data);
	  } catch (e) {
		resultElement.innerHTML = "trouve l'erreur getById";
	  	}
	}
  }//

  async function postData() {
	url1 = "http://localhost:8080/employe";
	url2 = "http://127.0.0.1:8080/employe";
	let resultElement = document.getElementById("postResult");
	resultElement.innerHTML = "";
  
	const nom = document.getElementById("post-nom").value;
	const prenom = document.getElementById("post-prenom").value;
	const telephone = document.getElementById("post-telephone").value;
  
	const postData = {
	 // id:null,
	  nom: nom,
	  prenom: prenom,
	  telephone: telephone
	};
  
	try {
	  const res = await fetch(`${url1}`, {
		method: "post",
		mode: 'cors',
		headers: {
		  "Content-Type": "application/json",		  
		  'Access-Control-Allow-Origin':'*'
		},
		body: JSON.stringify(postData),
	  });
  
	   
	  const data = await res.json();
  
	  const result = {	
		data: data,
	  };
  
	  resultElement.innerHTML = resHtml(result);
	} catch (e) {
	  resultElement.innerHTML = "trouve l'erreur post";
	}
  }//post

 
  function resHtml(res) {
	return (
	  `<div >` +
	  JSON.stringify(res) +
	  "</div>"
	);
  }//

  










