export default function Note (props) {
    // console.log(props)
    return (
        <div className="">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}