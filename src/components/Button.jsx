export default function Button(props) {
        return (
                <button className={props.class} onClick={props.onClick} style={props.style}>
                {props.text}
                </button>
        )
}