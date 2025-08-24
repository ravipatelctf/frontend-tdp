import { useState } from "react"
import { toast } from "react-toastify";
import { getAllTutors } from "../api/getAllTutors";
import { statesAndUTs } from "../dataForForm/statesOrUT";
import {districtsByStates} from "../dataForForm/districtsByStates"


export default function Home() {
    const [tutorsData, setTutorsData] = useState([]);
    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [district, setDistrict] = useState("");    
    
    const districtsArray = country && state && districtsByStates && districtsByStates.find(element => (element.state === state))
    // console.log("country:", country)
    // console.log("state:", state)
    // console.log("districtsArray:", districtsArray);
    // console.log("district:", district)

    async function handleBtnClick() {
        try {
            if (country && state && district) {
                const data = await getAllTutors({"country": country, "stateOrUT": state, "district": district})

                if (data.length === 0) {
                    setLoading(false)
                    setMessage("Data Not Found!")
                    return;
                }

                if (data) {
                    setMessage(null)
                    setLoading(false)
                    setError(false)
                    setTutorsData(data)
                } else {
                    setMessage("Data Not Found!")
                }
                // console.log("data:", data)
            }
        } catch (error) {
            setLoading(false);
            setError(true);
        }

             

    }

    return (
        <div className="container py-4 ">
            <div className="text-center">
            <h1 className="fw-bold display-1">Tutor Directory</h1>
            <div className="row">
                <div className="col-md-4 my-1">
                    <select 
                        id="country" 
                        className="form-select"
                        required
                        defaultValue={country}
                        onChange={(event) => setCountry(event.target.value)}
                    >
                        <option value="" disabled>Select Country</option>
                        <option value="India">India</option>
                    </select>
                </div>
                <div className="col-md-4 my-1">
                    <select 
                        id="state" 
                        className="form-select"
                        required
                        defaultValue={state}
                        onChange={(event) => setState(event.target.value)}
                    >
                        <option value="" disabled>Select State / Union Territory</option>

                        {
                            country && statesAndUTs && statesAndUTs.map((state) => (
                                <option key={state} value={state}>{state}</option>
                            ))
                        }
                        
                    </select>
                </div>
                <div className="col-md-4 my-1">
                    <select 
                        id="district" 
                        className="form-select"
                        required
                        defaultValue={district}
                        onChange={(event) => setDistrict(event.target.value)}
                    >
                        <option value="" disabled>Select District</option>

                        {
                            country && state && districtsArray && districtsArray.districts?.map((element) => (
                                    <option key={element} value={element}>{element}</option> 
                                )
                            )
                        }
                        
                    </select>
                </div>
                <div>
                    <button 
                        className="btn btn-dark fw-bold text-light p-2 px-4 my-4"
                        onClick={() => {
                            setTutorsData([])
                            if (country && state && district) {
                                setError(false)
                                setMessage(null)
                                setLoading(true)
                                handleBtnClick()
                            } else {
                                toast.warn("All fields are required!")
                                return;
                            }                            
                        }}    
                    >
                        Find Tutor
                    </button>
                </div>
            </div>

            </div>
                {
                    message && <p className="text-center">{message}</p>
                }
                {
                    loading && <p className="text-center">Loading...</p>
                }
                {
                    error && <p className="text-center">An error occurred...Please refresh the page...</p>
                }
            
                <div className="row gap-2 justify-content-center mx-1">
                {
                    tutorsData ? (tutorsData.map((tutor) => (
                        <div key={tutor._id} className="card col-md-5 p-4 mb-4">
                            <h3 className="fw-bold mb-4">{tutor.name}</h3>
                            <p>
                                <span className="fw-bold">Country: </span>
                                <span>{tutor.country}</span>
                            </p>
                            <p>
                                <span className="fw-bold">State: </span>
                                <span>{tutor.stateOrUT}</span>
                            </p>
                            <p>
                                <span className="fw-bold">District: </span>
                                <span>{tutor.district}</span>
                            </p>
                            <p>
                                <span className="fw-bold">Landmark: </span>
                                <span>{tutor.landmark}</span>
                            </p>
                            <p className="card-footer d-flex justify-content-center bg-white">
                                <button className="fw-bold btn btn-outline-success mt-4">📞 {tutor.phoneNumber}</button>
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center py-4">{message}</p>
                )
                }
                </div>
            
        </div>
    )
}



