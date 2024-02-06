import { useState } from 'react'
import housesData from './../../Data/Data.json'
import HouseCard from '../HouseCard/HouseCard'
import './HousesList.css'



const HousesList = () => {

    const [houses, setHouses] = useState(housesData)

    const deleteHouse = houseIdToDelete => {

        const filteredHouses = houses.results.filter(elm => {

            return elm.id !== houseIdToDelete
        })

        setHouses({ results: filteredHouses })

    }


    return (

        <article className='HousesList' >

            {
                houses.results.map(house => {

                    return <HouseCard key={house.id} houseInfo={house} deleteHouse={deleteHouse} />

                })
            }

        </article>


    )

}

export default HousesList