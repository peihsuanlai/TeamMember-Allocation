const Footer =()=>{
  const today=new Date();
  return(
    <footer className="container-fluid fixed-bottom bg-light">
      <div className="row justify-content-center mb-3 mt-3">
      <div className="col-8">
    <h5 style={{color:"rgba(0,0,0,0.65"}}>Team Member Allocation App—{today.getFullYear()}</h5>
        </div>
        </div>
    </footer>
  )
}

export default Footer