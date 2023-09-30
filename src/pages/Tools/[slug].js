import React from 'react'
import { useRouter } from 'next/router'
const Slug = () => {
    const router =useRouter()
    const {slug}=router.query;
  return (
    <div className='text-white'>
      hELLO you are searching for :-  {slug}
      jhsdjddx
    </div>
  )
}

export default Slug
