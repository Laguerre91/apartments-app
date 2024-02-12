import { useState } from 'react'


const FormEditApartment = ({ houseToEdit }) => {

    const [formData, setFormData] = useState({
        name: houseToEdit.name,
        image: houseToEdit.picture_url.url,
        price: houseToEdit.price,
        country: houseToEdit.country,
        city: houseToEdit.city,
        bedrooms: houseToEdit.bedrooms,
        neighbourhood: houseToEdit.neighbourhood,
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };


    return (
        <div className="FormEditApartment">
            <h2>Edit an Apartment</h2>

            <form onSubmit={handleFormSubmit}>
                <label htmlFor='name'>Name:</label>
                <input
                    type="text"
                    id='name'
                    placeholder={houseToEdit.name}
                    value={formData.name}
                    onChange={handleChange} />

                <label htmlFor='image'>Image:</label>
                <input
                    type="text"
                    id='image'
                    placeholder={houseToEdit.image}
                    value={formData.image}
                    onChange={handleChange} />


                <label htmlFor='price'>Price:</label>
                <input
                    type="number"
                    id='price'
                    placeholder={houseToEdit.price}
                    value={formData.price}
                    onChange={handleChange} />


                <label htmlFor='country'>Country: </label>
                <input
                    type="text"
                    id='country'
                    placeholder={houseToEdit.country}
                    value={formData.country}
                    onChange={handleChange} />


                <label htmlFor='city'>City:</label>
                <input
                    type="text"
                    id='city'
                    placeholder={houseToEdit.city}
                    value={formData.city}
                    onChange={handleChange} />


                <label htmlFor='bedrooms'>Bedrooms:</label>
                <input
                    type="number"
                    id='bedrooms'
                    placeholder={houseToEdit.bedrooms}
                    value={formData.bedrooms}
                    onChange={handleChange} />

                <label htmlFor='neighbourhood'>Neighbourhood:</label>
                <input
                    type="text"
                    id='neighbourhood'
                    placeholder={houseToEdit.neighbourhood}
                    value={formData.neighbourhood}
                    onChange={handleChange} />

                <input type="submit" value="Edit Apartment" />

            </form>
        </div>
    )
}

export default FormEditApartment