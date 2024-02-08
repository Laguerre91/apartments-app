import { useState } from 'react'
import housesData from './../../Data/Data.json'
import HouseCard from '../HouseCard/HouseCard'
import Form from '../Form/NewForm'
import './HousesList.css'




const HousesList = () => {

    const [houses, setHouses] = useState(housesData.results)

    const addNewApartments = newApartment => {

        const housesDataCopy = [...housesData.results]
        housesDataCopy.unshift(newApartment)
        setHouses(housesDataCopy)
    }


    const deleteHouse = houseIdToDelete => {

        const filteredHouses = houses.filter(elm => {

            return elm.id !== houseIdToDelete
        })

        setHouses(filteredHouses)

    }

    return (


        <article className='HousesList' >
            <section className='apart-form'>
                <Form addNewApartments={addNewApartments} />
            </section>

            {
                houses.map(house => {

                    return <HouseCard key={house.id} houseInfo={house} deleteHouse={deleteHouse} />

                })
            }

        </article>

    )
}

export default HousesList