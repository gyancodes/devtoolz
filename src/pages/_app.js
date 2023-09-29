import '@/styles/globals.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar';
import { useRouter } from 'next/router'
import { useEffect,useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
// import { HeroSection } from './Components/layouts/HeroSection'
export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
  const [key , setKey] = useState(0)
  const [user,setUser]=useState(false);
  const router=useRouter();
  useEffect(() => {
    import('preline')
  }, [])
  useEffect(()=>{
    
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    const myUser = JSON.parse(localStorage.getItem('e-reviveUser'));
    if(myUser){
    setUser(true)
    setKey(Math.random());
  }
 
  },[router.query])
  const logout=()=>{
    localStorage.removeItem('e-reviveUser');
    setKey(Math.random());
    toast.success("Logged out successfully", {
      position: "top-right",
    });
    setTimeout(()=>{
      router.push("/");
    },1000);
    setUser(false);
  }
  return <> 
  <LoadingBar
  color='#ff0f7b'
  waitingTime={400}
  progress={progress}
  onLoaderFinished={() => setProgress(0)}
/>
<Toaster/>
  <Navbar key={key} logout={logout} user={user}/>
  {/* <HeroSection/> */}
  
  <Component {...pageProps} /> <Footer/></>
}
