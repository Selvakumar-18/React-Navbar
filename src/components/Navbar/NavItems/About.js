import React,{useState} from 'react'

const About= () => {
  const [count,setCount] = useState(0);
  const [multi,setMulti] = useState(1);
  function increment()
  {
      setCount(count+1);
      console.log(setCount);
  }

 const a= ()=>
 {
    setMulti(multi*2);
    console.log(setMulti)  
}
  return (
    <div>
      

      <h1>welcome to About page.......</h1>
      <p>{count}</p>
      <button onClick={increment}>IncreaseMe</button>
      <p>{multi}</p>
      <button onClick={a}>MultipleMe</button>
    </div>
  )
}
export default About;
