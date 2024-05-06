import { useState } from "react";
import Table from "./Component/Table";

const App = () => {

  const [formData, setFormData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const roll = event.target.roll.value;
    const age = event.target.age.value;

    setFormData(prevFormData => {
      const newData = [...prevFormData, { name, roll, age }];
      console.log(newData); 
      return newData;
    });
    event.target.reset();
  };


  return (

    
    <div className="">
      <h2 className="text-center font-semibold text-2xl py-4">Submit Form</h2>
      <div className="flex-col flex justify-center items-center">
        

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" className="bg-gray-300 w-[300px] py-2 rounded-md" /><br />

          <label htmlFor="roll">Roll:</label><br />
          <input type="text" id="roll" name="roll" className="bg-gray-300 w-[300px]  py-2 rounded-md"  /><br />

          <label htmlFor="age">Age:</label><br />
          <input type="text" id="age" name="age" className="bg-gray-300 w-[300px]  py-2 rounded-md"/><br /><br />

          <button type="submit" className="bg-gray-600 text-white py-1 rounded-sm hover:bg-gray-400 w-full">Submit</button>
        </form>

        <Table formData={formData}/>
      </div>
    </div>
  );
};

export default App;