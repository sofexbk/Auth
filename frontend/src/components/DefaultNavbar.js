import { Button } from 'flowbite-react'
import {Link} from 'react-router-dom'
const DefaultNavbar = () => {
  return (

        <div className="container">
        <Link to="/">
            <h1 className="text-center text-4xl font-poppins">Workout Buddy</h1>
        </Link>
        <Link to='/work'>
             <Button className="ml-auto text-center text-4xl font-poppins">Add a workout</Button>
        </Link>
       </div>
  )
}

export default DefaultNavbar



   