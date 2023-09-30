import React from "react";
import { useState,useEffect } from "react";

const UserProfile = () => {
  const[fname, setfName] = useState('');
  const[lname, setlName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState('');
  const[username, setUsername] = useState('');
  const[company, setCompany] = useState('');
  const[portfolio, setPortfolio] = useState('');
  const[img, setImg] = useState('');
  const handleChange=(e)=>{
    if(e.target.name=="fname"){
      setfName(e.target.value)
    }
    else if(e.target.name=="lname"){
      setlName(e.target.value)
    }
    else if(e.target.name=="email"){
      setEmail(e.target.value)
    }
    else if(e.target.name=="phone"){
      setPhone(e.target.value)
    }
    else if(e.target.name=="username"){
      setUsername(e.target.value)
    }
    else if(e.target.name=="company"){
      setCompany(e.target.value)
    }
    else if(e.target.name=="portfolio"){
      setPortfolio(e.target.value)
    }
    else if(e.target.name=="img"){
      setImg(e.target.value)
    }
  }
  useEffect(()=>{
let email= JSON.parse(localStorage.getItem('DevToolzUser')).email;
fetchuser(email);
  },[])
 const fetchuser=async(email)=>{
  console.log(email)
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/fetchuser`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email}),
  });
  const response = await res.json();
  if(response.success){
    setfName(response.data.Fname)
    setlName(response.data.Lname)
    setEmail(response.data.email)
    setPhone(response.data.phone)
    setUsername(response.data.username)
    setCompany(response.data.company)
    setPortfolio(response.data.protfollio)
    console.log(response.data.portfolio)
    setImg(response.data.img)
  }

 }
 const handleSubmit=async(e)=>{
  e.preventDefault();
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updateuser`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email,Fname:fname,Lname:lname,username,company,portfolio,img}),
  });
  const response = await res.json();
  if(response.success){
    fetchuser(email);
    alert("User updated successfully")
  }
  else{
    alert("Something went wrong please try again later")
  }
  console.log(response)
 }
  return (
    <div>
      <section className="mx-auto flex max-w-screen-xl flex-col my-20 px-10 xl:px-20">
        <div className="flex flex-col flex-shrink bg-slate-950 p-12">
          <div className="flex lg:justify-between lg:flex-row text-white flex-col gap-8 items-center justify-center">
            <img
              class="w-24 h-24 rounded-full"
              src="https://avatars.githubusercontent.com/u/61907167?v=4"
              alt="Rounded avatar"
            />
            <div className="flex items-center gap-8 flex-col lg:flex-row">
              <button className="bg-blue-700 py-2 px-4 text-sm font-semibold rounded-md">
                Upload new picture
              </button>
              <button className="bg-red-500 py-2 px-4 font-semibold text-sm rounded-md">
                Remove
              </button>
            </div>
          </div>

          <section className="flex flex-row">
            <div className="flex flex-col gap-4">
              
            </div>
          </section>

          <section className="flex flex-col py-10">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="fname"
                    onChange={handleChange}
                    value={fname}
                    className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="lname"
                    onChange={handleChange}
                    value={lname}
                    className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Kumar"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-white"
                    required
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={username}
                    id="last_name"
                    className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="usercodes"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    onChange={handleChange}
                    value={company}
                    id="company"
                    className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="DevToolz"
                    required=""
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Portfolio
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="portfolio"
                    onChange={handleChange}
                    value={portfolio}
                    className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="https://devtoolz.tech"
                    required=""
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={email}
                  className="bg-gray-700 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@devtoolz.tech"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save Changes
              </button>
            </form>
          </section>

          <div className="flex ">
            <button className="bg-red-500 font-semibold text-sm py-2 px-4 text-white rounded-md">
              Delete Account
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
