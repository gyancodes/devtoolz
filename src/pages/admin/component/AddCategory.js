import React from 'react'
import Sidebar from './Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
const AddCategory = () => {
    const[loading, setLoading]=useState(false);
  const [id,setId]=useState('');
  const [text,setText]=useState('');
  const[image,setImage]=useState("");
  const [ url, setUrl ] = useState("");
  const handleChange=(e)=>{
    if(e.target.name=="text"){
   setText(e.target.value);
    }
    else if (e.target.name === "image") {
      setImage(e.target.files[0]);
    }
    }
    const uploadImage = () => {
      setLoading(true)
      const data = new FormData()
      data.append("file", image)
      data.append("upload_preset", "dgdea2n8")
      data.append("cloud_name","dawzncoau")
      fetch("https://api.cloudinary.com/v1_1/dawzncoau/image/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
        setLoading(false);
        toast.success("Successfully Upload Your Profile Picture", {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      setUrl(data.url)
      })
      .catch(err => {
      toast.error("Sorry some error occured please try again after some time", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      })
      }
      const handleSubmit=()=>{
        
      }
  return (
    
    <div className='min-h-screen'>
         <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
        <Sidebar/>
        <style jsx global>{`
        .footer {
          display: none;
        }
        .Navbar {
          display: none;
        }
      `}</style>
      <div className="max-w-2xl mx-auto text-center mt-8" id="Devresources ">
        <span className="font-semibold text-3xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
          Add Your Tools Category
        </span>
      </div>
      <div className= 'flex justify-center items-center flex-col py-28'>
      <label htmlFor='pass-basic1' className='font-bold text-white mt-6'>Upload Your Category Pic or Icon </label>
    <input
            onChange={handleChange}
              id="image"
              name="image"
              type="file"
              className='mt-6 border-2 border-blue-300 p-2 rounded w-80 focus:outline-none focus:border-blue-600 bg-gray-100'
            />
           
            <button onClick={uploadImage} className='my-2 flex w-80 justify-center rounded-md bg-purple-600  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'>
            Upload Now
          </button>
          <input
            onChange={handleChange}
              id="text"
              name="text"
              type="text"
              placeholder='Enter your Category Name'
              className='border-2 border-blue-300 p-2 rounded w-80 focus:outline-none focus:border-blue-600 bg-gray-100'
            />
            <button onClick={handleSubmit} className='my-2 flex w-80 justify-center rounded-md bg-purple-600  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600'>
            Add Now
          </button>
      </div>
      
    </div>
  )
}

export default AddCategory
