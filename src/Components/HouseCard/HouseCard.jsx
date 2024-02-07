import './HouseCard.css'


const HouseCard = props => {


    const house = props.houseInfo
    const deleteHouse = props.deleteHouse

    return (

        <article className='HouseCard' >
            <figure className='image-container'>
                <img src={house.picture_url.url} alt={house.name} />
            </figure>
            <div className='info'>
                <h2>{house.name}</h2>
                <p> {house.city} - {house.country} </p>
                <p> {house.price}€/noche | {house.bedrooms} habitaciones</p>
                <button className='btn-delete' onClick={() => deleteHouse(house.id)}>Delete property</button>
            </div>

        </article>

    )
}

export default HouseCard
