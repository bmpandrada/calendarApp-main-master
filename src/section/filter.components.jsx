

const Filter = ({ date, status, message}) => {
        return( <div className="h-auto  w-96 bg-white rounded-lg p-4">
        <h3 className="message italic hover:not-italic">{message}</h3>
    <p >{date}</p>
    <p  className="underline decoration-sky-200-500/[.33]">{status}</p></div>)
       


}

export default Filter;
