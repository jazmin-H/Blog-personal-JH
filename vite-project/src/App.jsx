import Header from './components/Header';
import Footer from './components/Footer';
import {Post} from './components/Post';
import { useEffect } from 'react';
import supabase from '../lib/helper/supabaseClient';

export default function App() {
  const[user, setUser] = useState(null)

  useEffect(() =>{
   const getSession = async () => {
    // destructuracion -> nos permite obtener la propiedad deseada, van entre llaves
     const {data, error} = await supabase.auth.getSession();
     if (error) {
      console.log(error);
     } else{
        setUser(data?.session?.user);
     }
   };

   getSession();
  },[])

  const handleLogin = async() => {
    const {error} = await supabase.auth.signInWith0Auth({
      provider: "github",
    })
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  };
  return (
    <>
     <Header/>
     <button onClick={handleLogin}>Inicio sesion</button>
     <Post
       titulo={"ono"} 
       description={"ini"} 
       link={"./src/img/luna.webp"}
       parrafo={"bbbb"}
     />
     <Footer/>
    </>
  )
}