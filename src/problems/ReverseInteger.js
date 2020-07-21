import React, { useState } from 'react';

export default function ReverseInteger() {
    const [ integer , setInteger] = useState('');
    const [reversedInteger,setReversedInteger]=useState();
    let text = 'The reverse of the inputted integer is ';
    text += reversedInteger;    text += '.';
    function handleInputChange( { target } )
    {   const { value } = target; setInteger(value);
        setReversedInteger(reverse(value));        }
    function reverse(integer)
    {   const max = 214748364;
        const min = 0 - max;               let i = 0;
        while (integer !== 0)
        {   let nextDigitToReverse = integer % 10;
            integer = Math.trunc(integer/10);
            if (i > max || i < min)
                return 'too large to compute';
            if (i === max && nextDigitToReverse > 7)
                return 'too large to compute';
            if (i === min && nextDigitToReverse <-8)
                return 'too large to compute';
            i *= 10;  i += nextDigitToReverse;     }
        return i;                                   }
    return ( <h1> <input type = 'number'
        onChange={handleInputChange} value={integer}/>
        <br /> <br /> {integer && text} </h1>);       }