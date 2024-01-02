import React, { useEffect } from 'react';
import { useReducer,useState } from 'react';
import { useFetchData } from '../customHooks/useFetchData';

var initialState={likes:0, dislikes:0};

function reducer(state,action){
  switch(action.type){

    case 'like':
      return {likes: state.likes + 1 , dislikes:state.dislikes}
    case 'dislike':
      return {likes:state.likes , dislikes: state.dislikes + 1}
      
  }
}

export default function ReducerDispatcher() {

  const [state,dispatch]=useReducer(reducer,initialState)
 // const [product,setProduct] = useState({});

  const data = useFetchData('http://fakestoreapi.com/products/3')

  function handleLikeClick(){
    dispatch({type:'like'})
  }
  function handleDislikeClick(){
    dispatch({type:'dislike'})
  }

  return (
    <div className='container-fluid'>
      <h2>Product Details</h2>
      <div className='card p-2' style={{width:'300px'}}>
        <img src={data.data.image} className='card-img-top' height='160px' />
        <div className='card-header'>
          <p>{data.data.title}</p>
        </div>
        <div className='card-footer'>
          [{state.likes}] <button className='btn btn-primary' onClick={handleLikeClick}><span className='bi bi-hand-thumbs-up'></span></button>
          [{state.dislikes}] <button className='btn btn-danger' onClick={handleDislikeClick} ><span className='bi bi-hand-thumbs-down'></span></button>
        </div>
      </div>
      
    </div>
  )
}
