
// deployed URL : https://backend-tdp.vercel.app/

// localhost URL : http://localhost:3000/

//-------------------------------------------------------------------------------------------
export async function getAllTutors(formData) {
    try {
        const params = new URLSearchParams(formData).toString();
        const response = await fetch(`https://backend-tdp.vercel.app/api/tutors?${params}`);

        if (!response.ok) {
            throw new Error("Failed to fetch data!")
        }

        const data = await response.json()
        // console.log(data);
        return data
    } catch (error) {
        throw error
    }
}

//-------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
export async function addNewTutor(formData) {
    try {
        const response = await fetch(`https://backend-tdp.vercel.app/api/tutors`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data!")
        }

        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        throw error
    }
}
//-------------------------------------------------------------------------------------------