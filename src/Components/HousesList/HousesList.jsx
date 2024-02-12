import { useState } from 'react'
import housesData from './../../Data/Data.json'
import HouseCard from '../HouseCard/HouseCard'
import Form from '../Form/NewForm'
import FormEditApartment from '../FormEditApartment/FormEditApartment'
import './HousesList.css'




const HousesList = () => {

    const [houses, setHouses] = useState(housesData.results)
    const [editingHouse, setEditingHouse] = useState();

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

    const editHouse = houseIdToEdit => {

        const houseToEdit = houses.find((elm) => elm.id === houseIdToEdit);
        setEditingHouse(houseToEdit);
    }

    return (


        <article className='HousesList' >

            <div className='form-container'>
                <section className='edit-form'>
                    {editingHouse && <FormEditApartment houseToEdit={editingHouse} />}
                </section>
                <section className='apart-form'>
                    <Form addNewApartments={addNewApartments} />
                </section>
            </div>

            {
                houses.map(house => {

                    return <HouseCard key={house.id} houseInfo={house} deleteHouse={deleteHouse} editHouse={editHouse} />

                })
            }

        </article>

    )
}

export default HousesList