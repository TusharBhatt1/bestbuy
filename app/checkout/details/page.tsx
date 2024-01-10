import Heading from '@/app/Components/Heading'
import UserDetailsForm from '../../Components/forms/UserDetailsForm'

export default function page() {
  return (
    <div>
  <span className='block sm:absolute'>
    <Heading
    title='Enter Your Details'
    />
    </span>
    <UserDetailsForm/>
    </div>
  )
}


