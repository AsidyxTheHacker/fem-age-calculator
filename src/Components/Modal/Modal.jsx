import './Modal.css';
import Input from '../Input/Input.jsx';
import Image from '../../assets/icon-arrow.svg';
import Output from '../Output/Output.jsx';
import { useState } from 'react';

export default function Modal() {

    const [year, setYear] = useState("--");
    const [month, setMonth] = useState("--");
    const [day, setDay] = useState("--");
    let inputYear = document.getElementById('inputYear');
    let inputMonth = document.getElementById('inputMonth');
    let inputDay = document.getElementById('inputDay');
    let inputs = document.querySelectorAll('input');
    let titles = document.querySelectorAll('.input-title');
    let errors = document.querySelectorAll('.error-msg');

    function handleDate() {

        let bday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        let bdayObj = new Date(bday);
        let ageDif = Date.now() - bdayObj;
        let ageDate = new Date(ageDif);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;

        setYear(ageYears);
        setMonth(ageMonth);
        setDay(ageDay);

        inputs.forEach(i => i.style.border = 'hsl(0, 0%, 86%) solid 1px');
        titles.forEach(t => t.style.color = 'hsl(0, 1%, 44%)');
        errors.forEach(e => e.style.opacity = '0');

        document.querySelectorAll('.output-container').forEach(o => {
            o.style.animation = 'slideIn ease .7s';
            document.querySelector('img').style.zIndex = '-2';
            setTimeout(() => {
                o.style.animation = '';
                document.querySelector('img').style.zIndex = '1';
            }, 700);
        });
    };

    function handleInput() {

        let currentYear = new Date().getUTCFullYear();
        setYear('--');
        setMonth('--');
        setDay('--');

        if (inputYear.value == '' || inputMonth.value == '' || inputDay.value == '') {
            inputs.forEach(i => i.style.border = 'hsl(0, 100%, 67%) solid 1px');
            titles.forEach(t => t.style.color = 'hsl(0, 100%, 67%)');
            errors.forEach(e => e.style.opacity = '1');

        } else if (inputYear.value > currentYear ||
            inputMonth.value > 12 ||
            inputMonth.value <= 0 ||
            inputDay.value <= 0 ||
            inputDay.value > 31) {
                inputs.forEach(i => i.style.border = 'hsl(0, 100%, 67%) solid 1px');
                titles.forEach(t => t.style.color = 'hsl(0, 100%, 67%)');
                errors.forEach(e => {
                    e.style.opacity = '1';
                    e.textContent = 'One or more invalid inputs';
                });
        } else {
            handleDate();
        };


    };

    return (
        <div className="modal-container">
            <div className="header">
                <Input name="DAY" max="2" placeholder="DD" id="inputDay" />
                <Input name="MONTH" max="2" placeholder="MM" id="inputMonth" />
                <Input name="YEAR" max="4" placeholder="YYYY" id="inputYear" />
            </div>
            <div className="body">
                <div className='line'></div>
                <img
                    src={Image}
                    alt="Arrow Icon Button"
                    onClick={() => handleInput()} />
            </div>
            <div className="footer">
                <Output num={year} date={year == 1 ? "year" : "years"} />
                <Output num={month} date={month == 1 ? "month" : "months"} />
                <Output num={day} date={day == 1 ? "day" : "days"} />
            </div>
        </div>
    );
};