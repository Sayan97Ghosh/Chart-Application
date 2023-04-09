import React,{useState,useEffect} from 'react'
import { Button, Select } from '@chakra-ui/react';
import { getEndyeardata } from '../newdata';
import"./Filter.css"
function Filter({setMainData}) {
    const[endYear,setendYear] = useState("");
     const[seCtor,setseCtor] = useState("");
     const[toPic,settoPic] = useState("");
     const[counTry,setcounTry] = useState("");
     const[reGion,setreGion] = useState("");
     const[pesTle,setpesTle] = useState("");
     const[souRce,setsouRce] = useState("");

    const handleSubmit1 = async() =>{
        const response = await fetch(`http://localhost:1234?end_year=${endYear}`); 

        var res = await response.json();
      
        setMainData(res);

    }
    const handleSubmit2 = async() =>{
        const response = await fetch(`http://localhost:1234?sector=${seCtor}`); 

        var res = await response.json();
      
        setMainData(res);

    }
    const handleSubmit3 = async() =>{
        const response = await fetch(`http://localhost:1234?topic=${toPic}`); 

        var res = await response.json();
      
        setMainData(res);

    }
    const handleSubmit4 = async() =>{
        const response = await fetch(`http://localhost:1234?country=${counTry}`); 

        var res = await response.json();
      
        setMainData(res);

    }
    const handleSubmit5 = async() =>{
        const response = await fetch(`http://localhost:1234?region=${reGion}`); 

        var res = await response.json();
      
        setMainData(res);

    }
    const handleSubmit6 = async() =>{
        const response = await fetch(`http://localhost:1234?pestle=${pesTle}`); 

        var res = await response.json();
      
        setMainData(res);

    }
    const handleSubmit7 = async() =>{
        const response = await fetch(`http://localhost:1234?source=${souRce}`); 

        var res = await response.json();
      
        setMainData(res);

    }
  return (
    <div className='filter-main'>
       {/* this is end year filtering */}


    <div>
<select  value={endYear} onChange={(e)=>setendYear(e.target.value)} placeholder='Select option'>
  <option value='2027'>2027</option>
  <option value='2018'>2018</option>
  <option value='2019'>2019</option>
  <option value='2025'>2025</option>
  <option value=''>--end_year--</option>
  
  
</select>
  <Button onClick={handleSubmit1} size={"xs"} colorScheme='green'>Submit</Button>
    </div>

    {/* this is for filtering sector */}
    <div>
<select  value={seCtor} onChange={(e)=>setseCtor(e.target.value)} placeholder='Select option'>
  <option value='Environment'>Environment</option>
  <option value='Energy'>Energy</option>
  <option value='Financial services'>Financial services</option>
  <option value='Support services'>Support services</option>
  <option value=''>--sector--</option>
  
  
</select>
  <Button onClick={handleSubmit2} size={"xs"} colorScheme='green'>Submit</Button>
    </div>

    {/* this is for topic */}
    <div>
<select  value={toPic} onChange={(e)=>settoPic(e.target.value)} placeholder='Select option'>
  <option value='oil'>oil</option>
  <option value='market'>market</option>
  <option value='war'>war</option>
  <option value='production'>production</option>
  <option value='biofuel'>biofuel</option>
  <option value='policy'>policy</option>
  <option value=''>--topic--</option>
</select>
  <Button onClick={handleSubmit3} size={"xs"} colorScheme='green'>Submit</Button>
    </div>

    {/* this is for country*/}
    <div>
<select  value={counTry} onChange={(e)=>setcounTry(e.target.value)} placeholder='Select option'>
  <option value='United States of America'>United States of America</option>
  <option value='Maxico'>Maxico</option>
  <option value='Lebanon'>Lebanon</option>
  <option value='India'>India</option>
  <option value='Azerbaijan'>Azerbaijan</option>
  
  <option value=''>--country--</option>
</select>
  <Button onClick={handleSubmit4} size={"xs"} colorScheme='green'>Submit</Button>
    </div>
    {/* this is for region */}
    <div>
<select  value={reGion} onChange={(e)=>setreGion(e.target.value)} placeholder='Select option'>
  <option value='Northern America'>Northern America</option>
  <option value='Central America'>Central America</option>
  <option value='World'>World</option>
  <option value='Western Asia'>Western Asia</option>
  <option value='Southern Asia'>Southern Asia</option>
  
  <option value=''>--region--</option>
</select>
  <Button onClick={handleSubmit5} size={"xs"} colorScheme='green'>Submit</Button>
    </div>


    {/* This is for pestel */}
    <div>
<select  value={pesTle} onChange={(e)=>setpesTle(e.target.value)} placeholder='Select option'>
  <option value='Economic'>Economic</option>
  <option value='Industries'>Industries</option>
  <option value='Political'>Political</option>

  <option value=''>--pestle--</option>
</select>
  <Button onClick={handleSubmit6} size={"xs"} colorScheme='green'>Submit</Button>
    </div>
    {/* This is for source */}
    <div>
<select  value={souRce} onChange={(e)=>setsouRce(e.target.value)} placeholder='Select option'>
  <option value='Resilience'>Resilience</option>
  <option value='Yes Bank'>Yes Bank</option>
  <option value='PDQFX news'>PDQFX news</option>
  <option value='Abq'>Abq</option>
  <option value='EIA'>EIA</option>
  
  <option value=''>--source--</option>
</select>
  <Button onClick={handleSubmit7} size={"xs"} colorScheme='green'>Submit</Button>
    </div>


    </div>
  )
}

export default Filter
