import React from 'react'
import Link from 'next/link'

export default ()=>{
  return <div>this is homepage
    <Link href='/post/[postId]' as='/post/my-first-post'>
      <a>my first page</a>
    </Link>
  </div>
}