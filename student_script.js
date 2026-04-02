const apiURL = 'http://localhost/Student-CRUD/databaseApi.php';




fetch(apiURL)
   .then(response =>{
      if(!response.ok){
        throw new Error("Error Fetching Url")
      } else {
        console.log("Fetching Successfully")
        return response.json();
      }
       
   })
   .then(students => {
     
    console.log(students)
    displayStudents(students);
   
   })

   


  editBtn.textContent = 'Edit';


 function displayStudents(students){
    const tableBody = document.getElementById('table-body');

    tableBody.innerHTML = '';


     students.forEach(e => {
         const row = tableBody.insertRow();
      
        row.insertCell(0).textContent = e.id;
        row.insertCell(1).textContent = e.last_name;
        row.insertCell(2).textContent = e.first_name;
        row.insertCell(3).textContent = e.status;
          const cell4 = row.insertCell(4);

        cell4.appendChild(editBtn);
        
                            
     })
 }


