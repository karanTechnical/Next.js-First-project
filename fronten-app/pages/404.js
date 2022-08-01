
import {useEffect} from 'react';
import {useRouter} from "next/router"

const Errorpage = () => {
  const router = useRouter();


  const hadleinput = ()=>{
    router.push("/");
  }
  useEffect(() => {
    setTimeout(()=>{
      router.push("/");
    },3000)
   
  }, []);
  return (
    <>
      <div id='notfound'>
      <div className='notfound'>
      <div className='notfound-404'>
      <h1>404</h1>
      </div>
      <h2> We are sorry, page not found</h2>

      <p>
        The page you are looking for might have been removed had isolation: 
        name changed or temporarily unavilable
      </p>
      {/* <a onClick={() => router.push("/")} >Back To Homepage</a>       this is internal function*/}

      <a onClick={hadleinput} >Back To Homepage</a>

      </div>

      </div>
    </>
  );
}

export default Errorpage;
