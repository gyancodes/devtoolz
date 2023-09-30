
import Sidebar from './component/Sidebar'
const Index = () => {
  return (
    <>
     <style jsx global>{`
        .footer {
          display: none;
        }
        .Navbar {
          display: none;
        }
      `}</style>
    <div className='text-white'>
      <Sidebar/>
    </div>
    </>
  )
}

export default Index
