import React, { useEffect ,useState} from 'react'
import Link from 'next/link';
import Spinner from './components/Spinner';

const Issues = () => {
    const[loading, setLoading] = useState(false);
    const[issues, setIssues] = useState([]);
    useEffect(() => {
fetchIssues();
    },[]);
    const fetchIssues = async () => {
        setLoading(true);
        const res = await fetch(`https://api.github.com/search/issues?q=label:%22good%20first%20issue%22+language:javascript+state:open&sort=created&order=desc&per_page=100&page=1`, {
            method: "GET", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await res.json();
        setLoading(false);
        console.log(response.items)
        setIssues(response.items);
    }
  return (
   <>
   <div className="my-10 py-10">
      <div className="mx-auto flex max-w-screen-xl flex-col px-10 xl:px-20">
        <style jsx global>{`
          @import url("https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Lato:ital,wght@1,900&family=Martel+Sans:wght@200&family=Poppins&family=Ubuntu:wght@500&display=swap");

          .custom-text {
            font-family: "Dela Gothic One", cursive;
            font-family: "Lato", sans-serif;
            font-family: "Martel Sans", sans-serif;
            font-family: "Poppins", sans-serif;
            font-family: "Ubuntu", sans-serif;
          }
        `}</style>
        <section>
          <div className="flex justify-center items-center">
            <h1 className="text-5xl text-white custom-text font-semibold">
              Explore{" "}
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                {" "}
                Open Source Issues{" "}
              </span>
            </h1>
          </div>
        </section>
        <div>
        {loading?<Spinner/>:<div className="flex  justify-center items-center rounded-lg border border-gray-800 flex-wrap mt-10">
             
           {issues&&issues.map((item)=>{return <section className="px-4 mx-2 my-2 border-2 border-purple-600 rounded-md h-48 w-48 m-auto" key={item.id}>
                <span className="text-white text-sm">
                 Title:-{item.title}
                </span>

                <ul className="flex flex-row justify-start flex-wrap gap-2 mb-4 mt-4 ">
                  <Link href={item.url}>
                    <li className="flex flex-row items-center text-black bg-white py-1 px-2 rounded-xl font-bold text-sm">
                      <div className="flex font-bold mr-2">
                        <div className=" w-4 h-4 text-white flex flex-col items-center justify-center  rounded-full">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </div>
                      </div>
                      Github
                    </li>
                  </Link>
                  <a href={`${item.repository_url}`} className='bg-gray-800 rounded-md p-1 text-purple-600 font-semi-bold underline ' target='_blanck'>Repo</a>
                </ul>
              </section>})}
            </div>  }
        </div>
        </div>
        </div>
   </>
  )
}

export default Issues
