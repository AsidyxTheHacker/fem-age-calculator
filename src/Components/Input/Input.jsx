import './Input.css';

export default function Input({ name, max, placeholder, id }) {

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