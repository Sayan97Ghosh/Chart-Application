 export const newData = [];
 export const filteredData = [];
 



 export const getData = async() =>{

// Storing response
const response = await fetch("http://localhost:1234/");
    
// Storing data in form of JSON
var data = await response.json();
newData.push(data);

}
getData();

 export const getData2 = async() =>{

// Storing response
const response = await fetch("http://localhost:1234/");
    
// Storing data in form of JSON
var data = await response.json();
return (data);

}



 


// this is for in tensity


// this is end_year filtering function

export const getEndyeardata = async(data) =>{
  const response = await fetch(`http://localhost:1234?end_year=${data}`); 
  // Storing data in form of JSON
  var res = await response.json();
  // console.log(res);

  filteredData.push(res);



}

// console.log(newData)





