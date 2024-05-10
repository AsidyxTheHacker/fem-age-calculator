import './Input.css';

export default function Input({ name, max, placeholder, id, action }) {

    function handleError() {

        let input1 = document.getElementById('inputDay').value;
        let input2 = document.getElementById('inputMonth').value;
        let input3 = document.getElementById('inputYear').value;

            if(!input1 == ''){
                input1.style.border = 'hsl(0, 0%, 86%) solid 1px';
            } else {
                input1.style.border = 'hsl(0, 100%, 67%) solid 1px';
            }
    };

    return (
        <div className="input-container">
            <p className='input-title'>{name}</p>
            <input
                type="text"
                placeholder={placeholder}
                required
                id={id}
                maxLength={max} />
                <p className="error-msg">This field is required</p>
        </div>
    );
};