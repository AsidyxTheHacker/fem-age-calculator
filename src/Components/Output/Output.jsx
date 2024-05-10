import './Output.css';

export default function Output({num, date}) {

    return (
        <div className="output-container">
            <p>{num}<span>{date}</span></p>
        </div>
    );
};