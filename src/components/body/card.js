export default function Card(props) {
    return (
        <div className="card">
            <img
                alt="Flower"
                src={props.src}
                id={props.id}
                className={props.clicked.toString()}
                onClick={props.onClick}
            />
            <span>{props.id}</span>
        </div>
    )
}
