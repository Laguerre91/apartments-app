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
                <label htmlFor='name'>Name:</label>
                <input type="text" id='name' value={name} onChange={handleNameChange} />

                <label htmlFor='image'>Image:</label>
                <input type="text" id='image' value={image} onChange={handleImageChange} />


                <label htmlFor='price'>Price:</label>
                <input type="number" id='price' value={price} onChange={handlePriceChange} />


                <label htmlFor='country'>Country: </label>
                <input type="text" id='country' value={country} onChange={handleCountryChange} />


                <label htmlFor='city'>City:</label>
                <input type="text" id='city' value={city} onChange={handleCityChange} />


                <label htmlFor='bedrooms'>Bedrooms:</label>
                <input type="number" id='bedrooms' value={bedrooms} onChange={handleBedroomsChange} />


                <label htmlFor='neighbourhood'>Neighbourhood:</label>
                <input type="text" id='neighbourhood' value={neighbourhood} onChange={handleNeighbourhoodChange} />

                <input type="submit" value="Add Apartment" />

            </form>

        </div>
    )
}

export default Form
