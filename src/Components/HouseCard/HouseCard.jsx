import { Link } from 'react-router-dom'
import './HouseCard.css'


const HouseCard = props => {

    const house = props.houseInfo
    const deleteHouse = props.deleteHouse
    const editHouse = props.editHouse

    const greatDeal = 60
    const premium = 100

    return (

        <article className='HouseCard' >
            <figure className='image-container'>
                <img src={house.picture_url.url} alt={house.name} />
            </figure>
            <div className='info'>
                <Link to={`/detail-info/${house.id}`}>
                    <h2>{house.name}</h2>
                </Link>
                {house.price <= greatDeal && (
                    <p className='greatDeal conditional'>Great Deal!</p>
                )}
                {house.price >= premium && (
                    <p className='premium conditional'>Premium</p>
                )}
                <p> {house.city} - {house.country} </p>
                <p> {house.price}€/noche | {house.bedrooms} habitaciones</p>
                <p>{house.neighbourhood}</p>
                <div className='buttons-container'>
                    <button className='btn-delete' onClick={() => deleteHouse(house.id)}>❌ </button>
                </div>
            </div>

        </article>
    )
}

export default HouseCard
