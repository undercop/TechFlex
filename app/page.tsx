import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs';
import React from 'react'

const Homepage = () => {
  return (
    <div>
<SignedOut>
      <SignInButton/>

</SignedOut>


<SignedIn>




      <SignOutButton/>
</SignedIn>
    </div>
  )
}

export default Homepage;
