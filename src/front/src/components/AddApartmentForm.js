import React, {useState} from 'react';

const AddApartmentForm = () => {
    const [apartmentData, setApartmentData] = useState({
        name: '',
        description: '',
        address: '',
        city: '',
        postcode: '',
        energyRating: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setApartmentData({...apartmentData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/addApartment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apartmentData),
            });

            if (response.ok) {
                // Apartment added successfully
                console.log('Apartment added successfully');
            } else {
                // Handle error
                const errorMessage = await response.text();
                console.error(`Failed to add apartment: ${errorMessage}`);
            }
        } catch (error) {
            console.error('An error occurred while adding the apartment:', error);
        }
    };

    return (
        <div>
            <h1>Add a new apartment</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={apartmentData.name} onChange={handleInputChange}/>
                </label>
                <br/>
                <label>
                    Description:
                    <input type="text" name="description" value={apartmentData.description}
                           onChange={handleInputChange}/>
                </label>
                <br/>
                <label>
                    Address:
                    <input type="text" name="address" value={apartmentData.address} onChange={handleInputChange}/>
                </label>
                <br/>
                <label>
                    City:
                    <input type="text" name="city" value={apartmentData.city} onChange={handleInputChange}/>
                </label>
                <br/>
                <label>
                    Postcode:
                    <input type="text" name="postcode" value={apartmentData.postcode} onChange={handleInputChange}/>
                </label>
                <br/>
                <label>
                    Energy Rating:
                    <input type="text" name="energyRating" value={apartmentData.energyRating}
                           onChange={handleInputChange}/>
                </label>
                <br/>
                <button type="submit">Add Apartment</button>
            </form>
        </div>
    );
};

export default AddApartmentForm;
