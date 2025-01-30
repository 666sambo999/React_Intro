import React from "react";

class Convert extends React.Component
{
    state = {number: ""};
    update = (event) => this.setState({number: event.target.value});

    toDecimal = (bynary)=> parseInt(bynary,2).toString(10);
    hexDecimal =(hex) => parseInt(hex,10).toString(16).toUpperCase();
    render()
    {
        const {number} =this.state;
        const decimal = this.toDecimal(number);
        const hexDec = this.hexDecimal(decimal);
        return(
            <>
                <div>
                    <form>
                        Number: <input value={number} name="number" onChange={this.update}
                        ></input>

                        <p>Двоичное число: {number};</p>
                        <p>Десятичное число: {decimal}</p>
                        <p>Шеснатиричное число: {hexDec}</p>
                    </form>
                </div>
            </>
        );
    }
}
export default Convert;