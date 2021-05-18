import { useState } from "react";

export default function Hex2rgb() {

    function hex(hex) {
        
        if (/^#/.test(hex)) {
            hex = hex.slice(1);
        }
        

        var digit = hex.split("");
        if (digit.length === 3) {
            digit = [digit[0], digit[0], digit[1], digit[1], digit[2], digit[2]]
        }
        var r = parseInt([digit[0], digit[1]].join(""), 16);
        var g = parseInt([digit[2], digit[3]].join(""), 16);
        var b = parseInt([digit[4], digit[5]].join(""), 16);


        setForm(prevForm => ({ ...prevForm, result: `rgb(${r}, ${g}, ${b})`, color: `rgb(${r}, ${g}, ${b})` }))

        if (isNaN(r) || isNaN(g) || isNaN(b)) {
            setForm(prevForm => ({ ...prevForm, result: `Ошибка!`, color: 'red' }))
        }
        return `rgb(${r}, ${g}, ${b})`;
    }

    const [form, setForm] = useState({ value: '#' })


    const handleSubmit = (event) => {
        event.preventDefault();
        hex(form.value);
    }


    function handleColorChange(event) {
        const color = event.target.value
        setForm(prevForm => ({ ...prevForm, value: color }))

        if (color.length === 7) {
            hex(color);
            
        }
    }




    return (
        <div className='Hex2rgb' style={{backgroundColor:form.color}}>
            <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                
                    
                    <input id='color'
                        name='color'
                        type="text"
                        className='Hex2rgb__element Hex2rgb__element__item'
                        value={form.value}
                        onChange={handleColorChange}
                        placeholder="Введите значение" />
                        
                
                <div className='Hex2rgb__element Hex2rgb__element__output'>{form.result ? form.result : 'rgb( )'}</div>

            </form>
            </div>
        </div>
    )
}