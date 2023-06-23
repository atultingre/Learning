import "./myStyles.css"

const Stylesheet = (props) => {
  const heading = {
    fontSize: '72px',
    color: "blue"
  }
  
  let className = props.primary ? 'primary': ''
  return (
    <div>
      <h1 className={className} style={heading}>Atul Tingre</h1>
    </div>
  )
}

export default Stylesheet