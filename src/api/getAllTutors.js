
export async function getAllTutors(queryData) {
    try {
        const response = await fetch(`https://backend-tdp.vercel.app/api/tutors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(queryData)
        })

        if (!response.ok) {
            throw new Error("Failed to fetch data!")
        }

        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }
}