
const PersonCard = (props) => {
    const {name, lastName, age, hair} = props;


    return (
        <div>
            <h1>{lastName}, {name}</h1>
            <div>
                <p>age: {age}</p>
                <p>Hair color: {hair}</p>
            </div>
        </div>
    )
}

export default PersonCard
