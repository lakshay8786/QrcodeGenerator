import React, { useRef, useState } from 'react'
import './App.css';
import Qrcode from 'qrcode';



function App() {
  
  const [text,setText]=useState('');
  const [imageUrl,setImageUrl]= useState('');
  
  const qrRef = useRef(null);
  const generateQrCode = async() =>{
try {
   const response = await Qrcode.toDataURL(text);
setImageUrl(response)
} catch (error) {
  console.log(error)
}
  }


const onScanFile =()=>{
  qrRef.current.openImageDialog();
}

  
  return (
    <div className="App">
   <div className="jumbotron">
  <h1 className="display">Generate Qr code</h1>
  
  <hr className="my" />
 <div className='container-fluid '>
   <div className='row'>



<div className='col'>
  <label >Generate Qr code</label>
    <input
     type="text"
      class="form-control" 
       placeholder="Enter the text here"
        onChange={(e)=>{
setText(e.target.value)
    }
    }
    >
    </input>


    <div className="btn-group-toggle"
     id='btn'
      data-toggle="buttons"
       onClick={() => generateQrCode()}
       >
  <label className="btn btn-secondary active">
     Generate Qr Code
  </label>
  <hr />
   <div>
  { imageUrl ?
   (
     < a href={imageUrl} download>
      <img src={imageUrl} alt="img" />
      </a>
      )
      : null
    }
    </div>
 
</div>
</div>





   </div>
 </div>
</div>
    </div>
  );
}


export default App;
