import { useState } from 'react'
import housesData from './../../Data/Data.json'
import HouseCard from '../HouseCard/HouseCard'
import './HousesList.css'



const HousesList = () => {

    const [houses, setHouses] = useState(housesData.results)

    const deleteHouse = houseIdToDelete => {

        const filteredHouses = houses.filter(elm => {

            return elm.id !== houseIdToDelete
        })

        setHouses(filteredHouses)

    }

    return (

        <article className='HousesList' >

            {
                houses.map(house => {

                    return <HouseCard key={house.id} houseInfo={house} deleteHouse={deleteHouse} />

                })
            }

        </article>
    )
}

export default HousesList