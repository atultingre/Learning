
const Greet =(props)=>{
  const {name, city} = props
  return(
    <div>
      <h1>Hello {name}, <br></br> where are you from ? {city}</h1>
    </div>
  )
}

export default Greet