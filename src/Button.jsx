import "./index.css"
export default function Button({action}){
    return(
        <button className="btn" onClick={action}>Regenerate Number</button>
        );
}

