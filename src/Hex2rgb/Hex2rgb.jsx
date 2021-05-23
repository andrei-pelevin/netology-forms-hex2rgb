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

        setForm(prevForm => ({ ...prevForm, result: `rgb(${r}, ${g}, ${b})`, color: `rgb(${r}, ${g}, ${b})` }));        

        digit.map(item => {
            if(isNaN(parseInt(item, 16))) {
                setForm(prevForm => ({ ...prevForm, result: `Ошибка!`, color: 'red' }))
            }
           return ''
        })
        return `rgb(${r}, ${g}, ${b})`;
    }

    const [form, setForm] = useState({ value: '#' });


    const handleSubmit = (event) => {
        event.preventDefault();
        hex(form.value);
    };


    function handleColorChange(event) {
        let color = event.target.value
        setForm(prevForm => ({ ...prevForm, value: color }))

        if (color.length === 7) {
            hex(color);
            
        } else if (color.length > 7) {
            color = color.slice(0, -1);
            setForm(prevForm => ({ ...prevForm, value: color }))
        } else if (color.length === 0) {
            color = '#';
            setForm(prevForm => ({ ...prevForm, value: color }))
        } 

        
    };




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