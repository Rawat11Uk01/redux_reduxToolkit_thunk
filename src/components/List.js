import React from 'react'
import { addData } from './redux/actions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
const List = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(addData());
  },[dispatch])
  const data = useSelector(state => state.item)
  console.log('hi',data)
  // const data = useSelector(state => state.item)
    return (
        <div>
         {data.map((apidata)=> 
         <div>
           <h1>{apidata.title}</h1>
         </div>)}
        </div>
    )
}

export default List