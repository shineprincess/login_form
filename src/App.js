import React , {useState} from 'react'

const App  = () => {
  const [fullName , setfullName] = useState( {
    fname :"" ,
    lname : "",
    email : "",
    phone : "",
    qua : "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    
    const name = event.target.name
    const value = event.target.value

    setfullName((preValue) => {
      console.log(preValue) 

      return {
        ...preValue,
        [name]: value  // if there is a name then set its value as it is 
      };



      // if(name === "fName") {
      //   return {
      //     fname : value ,
      //     lname : preValue.lname,
      //   };
      // } else if(name === "lName") {
      //   return {
      //     fname : preValue.fname ,
      //     lname : value,
      //   };
      // } else if(name === "email") {
      //   return {
      //     fname : preValue.fname ,
      //     lname : preValue.lname,
      //     email : value ,
      //     phone : preValue.phone,
      //   };
      // } else if(name === "phone") {
      //   return {
      //     fname : preValue.fname ,
      //     lname : preValue.lname,
      //     email : preValue.email ,
      //     phone : value,
      //   };
      // }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault()
    alert("Form submitted");
  }

  return(
    <>
    <div className="main_div">
      <form onSubmit={onSubmits}>
      <div>
        <h1> Hey {fullName.fname}  {fullName.lname}</h1>
        <p> {fullName.email} </p>
        <p id = "para__num"> {fullName.phone}</p>
        <p id = "para__qua"> {fullName.qua} </p>
        <input 
          type="text" 
          placeholder="Enter Your first name " 
          name="fname"
          onChange = {inputEvent} 
          value ={fullName.fname}
          />
     {/* Controlled Component*/}
        <input 
          type="text" 
          placeholder="Enter Your last name " 
          name="lname"
          onChange = {inputEvent} 
          value ={fullName.lname} 
          /> 

        <input 
          type="email" 
          placeholder="Enter Your email-address " 
          name="email"
          onChange = {inputEvent} 
          value ={fullName.email} 
          autoComplete="off"
          />

        <input 
          type="text" 
          placeholder="Enter Your Qualification " 
          name="qua"
          onChange = {inputEvent} 
          value ={fullName.qua} 
        />  

        <input 
          type="number" 
          placeholder="Enter Your Phone Number " 
          name="phone"
          onChange = {inputEvent} 
          value ={fullName.phone} 
          /> 
        <button type="submit" > Submit 😋</button>   
      </div>
      </form>
    </div>
    </>
  )
}

export default App