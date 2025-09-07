
import { useState } from "react";
import { Link } from "react-router-dom";
import { statesAndUTs } from "../dataForForm/statesOrUT";
import {districtsByStates} from "../dataForForm/districtsByStates"
import { addNewTutor } from "../api/data";
import { toast } from "react-toastify";


export default function AddNewTutor() {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [stateOrUT, setStateOrUT] = useState("");
    const [district, setDistrict] = useState("");
    const [pincode, setPincode] = useState("");
    const [landmark, setLandmark] = useState("");
 
    const districtsArray = country && stateOrUT && districtsByStates && districtsByStates.find(element => (element.state === stateOrUT))

    async function handleTutorRegistration(e) {
        e.preventDefault()

        console.log("name:", name);
        console.log("phoneNumber:", phoneNumber);
        console.log("country:", country);
        console.log("stateOrUT:", stateOrUT);
        console.log("district:", district);
        console.log("pincode:", pincode);
        console.log("landmark:", landmark);
        
        try {
            const newTutor = await addNewTutor({
                "name": name,
                "phoneNumber": Number(phoneNumber),
                "country": country,
                "stateOrUT": stateOrUT,
                "district": district,
                "pincode": Number(pincode),
                "landmark": landmark
            });
            if (newTutor) {
                toast.success(`You are now registered as a home tutor in ${district}. You will soon be contacted by parents regarding home tuition service.`)
            }               
        } catch (error) {
            toast.error("Tutor Registration Failed. Please Try again later...")
        }


        setName("");
        setPhoneNumber("");
        setCountry("");
        setStateOrUT("");
        setDistrict("");
        setPincode("");
        setLandmark("");
    }

    return (
        <main className="container pt-2 pb-4">
            <Link to="/" className="btn btn-outline-dark btn-sm fw-bold text-center w-100">Find a Home Tutor in your area</Link>
            <h1 className="text-center fw-bold mt-1">Register as a Tutor</h1>
            <form onSubmit={(e) => handleTutorRegistration(e)}>
            <label htmlFor="name" className="form-label">Name:</label>
            <input 
                type="text"
                id="name"
                placeholder="Enter your name" 
                className="form-control" 
                value={name} 
                required
                onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
            <input 
                type="number"
                id="phoneNumber"
                placeholder="Enter your phone number" 
                className="form-control" 
                value={phoneNumber} 
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />

            <label htmlFor="country" className="form-label">Country:</label>
            <select 
                type="text"
                id="country"
                className="form-select" 
                value={country} 
                required
                onChange={(e) => setCountry(e.target.value)}
            >
                <option value="" disabled>Enter name of your country</option>
                <option value="India">India</option>
            </select>
            <br />

            <label htmlFor="stateOrUT" className="form-label">State/Union Territory:</label>
            <select 
                type="text"
                id="stateOrUT"
                className="form-select" 
                value={stateOrUT} 
                required
                onChange={(e) => setStateOrUT(e.target.value)}
            >
                <option value="">State/Union Territory</option>
                    {
                        country && statesAndUTs && statesAndUTs.map((stateName) => (
                            <option key={stateName} value={stateName}>{stateName}</option>
                        ))
                    }
            </select>
            <br />

            <label htmlFor="district" className="form-label">District:</label>
            <select 
                type="text"
                id="district" 
                className="form-select"
                value={district} 
                required
                onChange={(e) => setDistrict(e.target.value)}
            >
                <option value="">District</option>
                    {
                        country && stateOrUT && districtsArray && districtsArray.districts?.map((element) => (
                                <option key={element} value={element}>{element}</option> 
                            )
                        )
                    }
            </select>
            <br />

            <label htmlFor="pincode" className="form-label">Pincode:</label>
            <input 
                type="number" 
                placeholder="Enter pincode of your postal area" 
                className="form-control"
                value={pincode} 
                required
                onChange={(e) => setPincode(e.target.value)}
            />
            <br />

            <label htmlFor="landmark" className="form-label">Landmark:</label>
            <input 
                type="text" 
                placeholder="Enter a landmark near you" 
                className="form-control" 
                value={landmark} 
                required
                onChange={(e) => setLandmark(e.target.value)}
            />
            <div className="d-flex justify-content-end"> 
                <button type="submit" className="btn btn-dark mt-2 px-5 fw-bold">Register</button>
            </div>
            </form>
        </main>
    );
}