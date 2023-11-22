import {useState,useEffect} from 'react'

export default function ApiComponentCart() {
  
  const [marsPhoto,setMarsPhoto]=useState([]);

  useEffect(()=>{   

    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then(response=> response.json())
    .then(data=>{
      setMarsPhoto(data.photos);
    })
  },[])

  return (
    <div className='container'>
      <h2>Mars Photos</h2>
      <div className='d-flex flex-wrap'>
        {
          marsPhoto.map(photo=>{
            return(
            <div className='card p-2 m-2 w-23'>
              <img src={photo.img_src} className='card-img-top' height='150'/>
              <div className='card-header'>{photo.camera.full_name}</div>
              <div className='card-body'>
                <p>{photo.rover.name}</p>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}
