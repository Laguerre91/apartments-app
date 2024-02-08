import './HouseCard.css'


const HouseCard = props => {


    const house = props.houseInfo
    const deleteHouse = props.deleteHouse

    return (

        <article className='HouseCard' >
            <img src={house.picture_url.url} alt="house picture" />



            <h2>{house.name}</h2>
            <p> {house.city} </p>
            <p> {house.country} </p>
            <p> {house.price} </p>

            <button className='btn-delete' onClick={() => deleteHouse(house.id)}>Delete</button>

        </article>

    )
}

export default HouseCard
