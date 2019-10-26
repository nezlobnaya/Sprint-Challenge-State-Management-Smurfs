import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postData } from '../../actions'

const Form = () => {
    const dispatch = useDispatch()
    const [entry, setEntry] = useState(
        {
            name: '',
            age: '',
            height: ''
        })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postData(entry))
        e.preventDefault()
        setEntry({name: '', age: '', height: ''})
    }

    const handleChange = (e) => {setEntry({...entry, [e.target.name]: e.target.value})}

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={entry.name}
                name='name'
                placeholder='Name'
                onChange={handleChange}
            /> 
            <input
                type='number'
                value={entry.age}
                name='age'
                placeholder='Age'
                onChange={handleChange}
            /> 
            <input
                type='text'
                value={entry.height}
                name='height'
                placeholder='Height'
                onChange={handleChange}
            /> 
            <button type='submit'>Add a smurf!</button>
        </form>
    )}

export default Form    
