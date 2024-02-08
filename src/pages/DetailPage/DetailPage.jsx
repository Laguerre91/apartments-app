import './DetailPage.css'

import { useParams } from "react-router-dom"
import housesData from './../../Data/Data.json'

const Detailpage = () => {

    const { house_id } = useParams()

    const foundHouse = housesData.results.find((elm) => {
        return elm.id === house_id
    })

    if (!foundHouse) return <Navigate to="error" />

    return (

        <div className="ItemDetails">
            <div className='titles-container'>
                <h1>{foundHouse.name}</h1>
                <h3>Hosted by {foundHouse.host_name}</h3>
                <p className='description'>{foundHouse.space}</p>
                <p> Bedrooms: {foundHouse.bedrooms} || Beds: {foundHouse.beds} 🛏️</p>
                <p>Bathrooms: {foundHouse.bathrooms}</p>
            </div>
            <figure className='image-container'>
                <img src={foundHouse.picture_url.url} alt="" />
                <p>Price: {foundHouse.price}€ per night | {foundHouse.room_type}</p>
                <p>Cleaning fee: {foundHouse.cleaning_fee}€</p>
            </figure>

        </div>
    )
}

export default Detailpage