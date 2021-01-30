
const Logo = () => {
    return (
    <div className='container'>
    <img src='/img/obama.png' alt='image'></img>

  <style>{`
  .container {
      width: 100%;
      padding-right: 1px;
      padding-left: 1px;
      padding-top: 25px;
      margin-right: auto;
      margin-left: auto;
      text-align: center;
    }
    
    img {
      vertical-align: middle;
      padding-right: 10px;
      padding-left: 10px;
    }
            
    `} 
  </style>
  </div>
    )
}

export default Logo
