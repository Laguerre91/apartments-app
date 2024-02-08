import './NewForm.css'
import { useState } from 'react'



const Form = ({ addNewApartments }) => {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [price, setPrice] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [bedrooms, setBedrooms] = useState("")
    const [neighbourhood, setNeighbourhood] = useState("")

    const handleNameChange = event => setName(event.target.value)
    const handleImageChange = event => setImage(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleCountryChange = event => setCountry(event.target.value)
    const handleCityChange = event => setCity(event.target.value)
    const handleBedroomsChange = event => setBedrooms(event.target.value)
    const handleNeighbourhoodChange = event => setNeighbourhood(event.target.value)

    const handleFormSubmit = event => {

        event.preventDefault()

        const newApartment = {
            name: name,
            picture_url: {
                url: image
            },
            price: price,
            country: country,
            city: city,
            bedrooms: bedrooms,
            neighbourhood: neighbourhood,
        }

        addNewApartments(newApartment)
    }

    return (

        <div className="NewForm">

            <h2>Add an Apartment</h2>

            <form onSubmit={handleFormSubmit}>
                <label >
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>

                <label >
                    Image:
                    <input type="text" value={image} onChange={handleImageChange} />
                </label>

                <label >
                    Price:
                    <input type="number" value={price} onChange={handlePriceChange} />
                </label>

                <label >
                    Country:
                    <input type="text" value={country} onChange={handleCountryChange} />
                </label>

                <label >
                    City:
                    <input type="text" value={city} onChange={handleCityChange} />
                </label>

                <label >
                    Bedrooms:
                    <input type="number" value={bedrooms} onChange={handleBedroomsChange} />
                </label>

                <label >
                    Neighbourhood:
                    <input type="text" value={neighbourhood} onChange={handleNeighbourhoodChange} />
                </label>

                <input type="submit" value="Add Apartment" />

            </form>

        </div>
    )
}

export default Form
