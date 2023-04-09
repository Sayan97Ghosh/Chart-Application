import React,{useState,useEffect} from "react";
import axios from "axios";
// import Barchart from "./Components/Barchart";
import { data } from "./data";
import IntensityChart from "./Components/Barchart";
import LikeliChart from "./Components/LikelyChart";
import Relevencechart from "./Components/Relevencechart";
import YearChart from "./Components/YearChart";
import CountryChart from "./Components/CountryChart";
import TopicChart from "./Components/TopicChart";
import RegionChart from "./Components/RegionChart";
import CityChart from "./Components/CityChart";
import Navbar from "./Components/Navbar/Navbar";
import { Heading } from "@chakra-ui/react";
import { newData } from "./Components/newdata";
import Filter from "./Components/Filtering/Filter";



// get data from api server



// const getData2 = async() =>{

//   // Storing response
//   const response = await fetch("http://localhost:1234/");
      
//   // Storing data in form of JSON
//   var data = await response.json();
//   console.log("get2",data);
  
//   }



// getData2()

  




function App() {
 
 const [mainData,setMainData] = useState(newData[0]);
//  console.log(mainData)





    
  const [userData,setUserData] = useState({
    
    labels:mainData.map((el)=>el.end_year),
    datasets: [
      {
        label: "Intensity",
        data:mainData.map((el)=>el.intensity),
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
        borderWidth: 2,
      },

    ],
    
  })





  // this is for likelihood
  
  const [likeliData,uselikeliData] = useState({

    labels:newData[0].map((el)=>el.end_year),


    datasets: [
      {
        label: "Likely",
        data:newData[0].map((el)=>el.likelihood),
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
        borderWidth: 2,
      },

    ],

  });

  // Relevence chart


  const [relevencedata,useRelevencedata] = useState({

    labels:newData[0].map((el)=>el.end_year),
    datasets: [
      {
        label: "Relevencedata",
        data:newData[0].map((el)=>el.relevance),
        
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
        borderWidth: 2,

      },

    ],

  });


// this is for year

const [yeardata,useyeardata] = useState({

  labels:newData[0].map((el)=>el.start_year),
  datasets: [
    {
      label: "Yeardata",
      data:newData[0].map((el)=>el.likelihood),
      
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderWidth: 2,
    },

  ],

});
// this is for country

const [countrydata,usecountrydata] = useState({

  labels:newData[0].map((el)=>el.country),
  datasets: [
    {
      label: "Country",
      data:newData[0].map((el)=>el.relevance),
      
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderWidth: 2,
    },

  ],

});
// Data for topics
const [topicdata,usetopicsdata] = useState({

  labels:newData[0].map((el)=>el.topic),
  datasets: [
    {
      label: "Topic",
      data:data.map((el)=>el.intensity),
      
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderWidth: 2,
    },

  ],

});
// This is for region  stat
const [regiondata,useregiondata] = useState({

  labels:newData[0].map((el)=>el.region),
  datasets: [
    {
      label: "Region",
      data:newData[0].map((el)=>el.intensity),
      
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderWidth: 2,
    },

  ],

});
// This is for city
const [citydata,usecitydata] = useState({

  labels:newData[0].map((el)=>el.source),
  datasets: [
    {
      label: "City",
      data:newData[0].map((el)=>el.relevance),
      
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
      borderWidth: 2,
    },

  ],

});









  return (
    <>
    
      {/* <DynamicChart/> */}
      <div  className="App">

    <Navbar/>
       {/* All filtering in navbar  */}

       <Filter setMainData={setMainData}/>

       <div  style={{width:"50%",margin:"auto",marginTop:"20px"}}>

        {/* all the bars  */}
        <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>Intersity Chart</Heading>
        <div style={{width:700}}>
           <IntensityChart chartData={userData}/>
        </div>
        <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>Like Chart</Heading>
         <div style={{width:700}}>
          <LikeliChart chartData={likeliData} />
         </div>
         <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>Relavence Chart</Heading>
         <div style={{width:700}}>
          <Relevencechart chartData={relevencedata} />
         </div>
         <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>Year Chart</Heading>
         <div style={{width:700}}>
          <YearChart chartData={yeardata} />
         </div>
         <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>Country Chart</Heading>
         <div style={{width:700}}>
          <CountryChart chartData={countrydata} />
         </div>
         <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>Topic Chart</Heading>
         <div style={{width:700}}>
          <TopicChart chartData={topicdata} />
         </div>
         <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>Region Chart</Heading>
         <div style={{width:700}}>
          <RegionChart chartData={regiondata} />
         </div>
         <Heading bgGradient='linear(to-l, #7928CA, #FF0080)' color="white" p={2} textAlign={"center"}>City Chart</Heading>
         <div style={{width:700}}>
          <CityChart chartData={citydata} />
         </div>

       </div>

    </div>
   
    </>
  );
}

export default App;
