# 📘 Tutor Directory

**Tutor Directory** is a web portal that connects **parents/students** with **home tutors** for FREE.

* Students/Parents can **search for tutors** by selecting `Country → State → District`.
* Home Tutors can **register** by submitting their details via a form.

🔗 **Live URL:** [Tutor Directory](https://tutordirectory.vercel.app/)<br>
🎥 **Walkthrough:** [Watch here](https://drive.google.com/drive/folders/1Hh7WilsfZil5iyod2ysEVu06Y7597LV8?usp=sharing)

## ⚙️ Setup Instructions

1. Clone repo & install dependencies:

```bash
git clone https://github.com/ravipatelctf/frontend-tdp.git
cd frontend-tdp
npm install
npm run dev
```

## 🚀 Features

* 🌍 Location-based search (Country → State → District).
* 📝 Tutor registration with required details.
* ⚡ Blazingly fast API powered by **Express.js** and **MongoDB**.
* 🔄 CORS enabled for frontend-backend communication.

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router DOM
* **Backend:** Express.js, Node.js
* **Database:** MongoDB (Mongoose ODM)
* **Other:** CORS, dotenv

## 📂 API References

### ✅ Home Route

`GET /`

* Returns a welcome message:

```json
"This is tutor directory backend api."
```

### ✅ Get Tutors by Location

`GET /api/tutors?country=India&stateOrUT=STATE&district=DISTRICT`

* **Query Params (all required):**

  * `country` → e.g. `India`
  * `stateOrUT` → e.g. `Uttar Pradesh`
  * `district` → e.g. `Varanasi`
* **Response:** Returns a list of tutors.
* **Error:**

  * `400` → Missing query params.
  * `404` → No tutors found.

### ✅ Add a New Tutor

`POST /api/tutors`

* **Request Body Example:**

```json
{
  "name": "Ravi Kumar",
  "phoneNumber": "9876543210",
  "country": "India",
  "stateOrUT": "Uttar Pradesh",
  "district": "Varanasi",
  "pincode": "221001",
  "landmark": "Near BHU"
}
```

* **Response:** Returns saved tutor object.
* **Error:**

  * `400` → Missing fields.
  * `500` → Failed to create data.

## Contact

For bug reports or feature request please do reachout to me at ravipatelctf@gmail.com
