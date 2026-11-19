import React from 'react'
import Task1_1 from './components/Task1_1Component/Task1_1'
import Task1_2 from './components/Task1_2Component/Task1_2';
import RegistrationForm from './components/RegistrationFormComponent/RegistrationForm';


const App = () => {
  const show = false;

  return (
    <div>
      <Task1_1 />
      <Task1_2 />
      <RegistrationForm />
    </div >
  )
}

export default App;