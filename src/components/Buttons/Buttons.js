import React, { useState } from 'react'
import s from './Buttons.module.css'
import d from '../Display/Display.module.css'

const Buttons = ( ) => {
    
    const [number, setNumber] = useState('0')
    const [memory, setMemory] = useState('0')

    
    const numClick = (e) => {
        e.preventDefault()
        let val = e.target.value
        setNumber((number) => {           
            return (number + val).replace(/^0/, '')})

    }

    const operatorClick = (e) => {
        e.preventDefault()
        let val = e.target.value
        if(val === '=') {
            
            console.log('good') 
            console.log(number) 
        } else {
        setNumber((number) => { 
           
            return number + val})
        }

       
    }

    const clearClick = () => {
        setNumber('0')
    }
    const mcClick = () => {
        setMemory('0')
    }


    return(
    <div>
        <div className={d.display}>
            <output> {number}</output>
        </div>

        <div className={s.wrapper}>
            <button className={s.g} onClick={ clearClick} >AC</button>
            <button className={s.g}>+/-</button>
            <button className={s.g}>%</button>
            <button className={s.b} value='/' onClick={ operatorClick}>&divide;</button>
            <button className={s.d} onClick={ mcClick}>mc</button>
            <button className={s.d} >mr</button>
            <button className={s.d}>m-</button>
            <button className={s.b}>m+</button>
            <button className={s.d} value='7' onClick={ numClick}>7</button>
            <button className={s.d} value='8' onClick={ numClick}>8</button>
            <button className={s.d} value='9' onClick={ numClick}>9</button>
            <button className={s.b} value='*' onClick={ operatorClick}>x</button>
            <button className={s.d} value='4' onClick={ numClick}>4</button>
            <button className={s.d} value='5' onClick={ numClick}>5</button>
            <button className={s.d} value='6' onClick={ numClick}>6</button>
            <button className={s.b} value='-' onClick={ operatorClick}>-</button>
            <button className={s.d} value='1' onClick={ numClick}>1</button>
            <button className={s.d} value='2' onClick={ numClick}>2</button>
            <button className={s.d} value='3' onClick={ numClick}>3</button>
            <button className={s.b} value='+' onClick={ operatorClick}>+</button>       
        </div>
        <div className={s.lastRow}>
            <button className={s.null} value='0' onClick={ numClick}>0</button>
            <button className={s.coma}>,</button>
            <button className={s.equal } value='=' onClick={ operatorClick}>=</button>
        </div>
        <p> {} </p>
    </div>
    )
}

export default Buttons