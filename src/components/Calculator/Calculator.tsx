import React, { useState } from 'react'
import s from './Buttons.module.css'
import d from './Display.module.css'
import { calculate, parseCalculationString } from '../../logic'

const Calculator = ( ) => {
    
    const [expression, setNumber] = useState('0')
    const [memory, setMemory] = useState('')

    const numClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let val = (e.target as HTMLButtonElement).value
        setNumber((expression) => { 
            let exp =  expression + val
            if ( exp[0] === '0' && exp[1] !== '.' ) {
                return exp.replace('0', '')
            }
            return exp})
    }

    const operatorClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault()
        let val = (e.target as HTMLButtonElement).value
        if(val === '=') {
            setNumber(calculate(parseCalculationString(expression)))
            console.log(parseCalculationString(expression)) 
        } else {
        setNumber((expression) => { 
           
            return expression + val})
        }     
    }

    const plusMinusClick = () => {
        setNumber((expression) => { 
           if (expression[0] !== '-') {
                return '-' + expression
           } else if ( expression[0] === '-') {
                return expression.replace('-', '')
           }
            return  expression})
    }

    const clearClick = () => {
        setNumber('0')
    }

    const memoClearClick = () => {
        setMemory('')
    }

    const memoReadClick = () => {   
        //setNumber(() => number + memory)
        setNumber(() => (expression + memory).replace(/^0/, ''))
    }

    const memoMinusClick = () => {
       // @ts-ignore
        setMemory(() => memory - expression)
    }

    const memoPlusClick = () => {
        setMemory(() => memory + expression)
    }


    return(
    <div>
        <div className={d.display}>
            <output> {expression}</output>
        </div>

        <div className={s.wrapper}>
            <button className={s.grey} onClick={ clearClick} >AC</button>
            <button className={s.grey} onClick={ plusMinusClick}>+/-</button>
            <button className={s.grey} value='%' onClick={ operatorClick}>%</button>
            <button className={s.orange} value='/' onClick={ operatorClick}>&divide;</button>
            <button className={s.dark} onClick={ memoClearClick}>mc</button>
            <button className={s.dark} onClick={ memoReadClick}>mr</button>
            <button className={s.dark} onClick={ memoMinusClick}>m-</button>
            <button className={s.orange} onClick={ memoPlusClick}>m+</button>
            <button className={s.dark} value='7' onClick={ numClick}>7</button>
            <button className={s.dark} value='8' onClick={ numClick}>8</button>
            <button className={s.dark} value='9' onClick={ numClick}>9</button>
            <button className={s.orange} value='*' onClick={ operatorClick}>x</button>
            <button className={s.dark} value='4' onClick={ numClick}>4</button>
            <button className={s.dark} value='5' onClick={ numClick}>5</button>
            <button className={s.dark} value='6' onClick={ numClick}>6</button>
            <button className={s.orange} value='-' onClick={ operatorClick}>-</button>
            <button className={s.dark} value='1' onClick={ numClick}>1</button>
            <button className={s.dark} value='2' onClick={ numClick}>2</button>
            <button className={s.dark} value='3' onClick={ numClick}>3</button>
            <button className={s.orange} value='+' onClick={ operatorClick}>+</button>       
        </div>
        <div className={s.lastRow}>
            <button className={s.null} value='0' onClick={ numClick}>0</button>
            <button className={s.coma} value='.' onClick={ numClick}>,</button>
            <button className={s.equal } value='=' onClick={ operatorClick}>=</button>
        </div>
        
    </div>
    )
}

export default Calculator