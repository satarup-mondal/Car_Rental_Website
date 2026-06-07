# 🚗 DriveEasy - Full Stack Car Rental Platform

A modern full-stack car rental web application where users can explore cars, create accounts, book vehicles, manage their bookings, and receive booking confirmations through WhatsApp notifications.

The platform is designed with a clean user interface, secure authentication, database integration, and a complete booking management system.

---

## 📸 Project Preview

### 🏠 Home Page

<img width="1919" height="1075" alt="image" src="https://github.com/user-attachments/assets/b76b2168-c510-4ffb-a996-1b78dbd96ee7" />


The landing page provides a clean and modern interface with featured cars and easy navigation for users.

---

### 🚘 Car Listing Page

<img width="1919" height="1075" alt="image" src="https://github.com/user-attachments/assets/7dbf7b4f-0875-411e-a98a-f0bba2cbe694" />


Users can browse available rental cars with details like:
- Car brand
- Model
- Images
- Rental price
- Availability

---

### 🚙 Car Details Page

<img width="1919" height="1075" alt="image" src="https://github.com/user-attachments/assets/604201c0-5961-4f9f-b087-d7bb1fe7ef54" />


Detailed information page for each vehicle where users can view car information before making a booking.

---

### 📅 Booking System

<img width="1919" height="1075" alt="image" src="https://github.com/user-attachments/assets/7beb9ed9-8ed1-477a-a370-d1230ff684ae" />


Users can select:
- Pickup date
- Return date

The system automatically creates a booking and stores it securely inside the database.

---

### 📋 My Bookings Dashboard

<img width="1919" height="1075" alt="image" src="https://github.com/user-attachments/assets/9f166dc0-d07f-4e73-b224-080aa6ca8300" />


Users can manage all their bookings:
- View booked cars
- Check booking dates
- See total price
- Cancel existing bookings

---

## ✨ Features

### 🔐 User Authentication

- User registration
- Secure login system
- JWT based authentication
- Protected user routes


### 🚗 Car Management

- Dynamic car listing
- Individual car details pages
- Car images and pricing information


### 📅 Booking Management

- Create bookings
- View user-specific bookings
- Cancel bookings
- Real-time database updates


### 📲 WhatsApp Notification System

Integrated WhatsApp messaging using Twilio API.

After successful booking:
- User receives confirmation message
- Booking details are sent automatically

Includes:
- Car details
- Pickup date
- Return date
- Price details


---

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS


### Backend

- Next.js API Routes
- Node.js


### Database

- MongoDB
- Mongoose


### Authentication

- JWT (JSON Web Token)


### Third Party Integration

- Twilio WhatsApp API


---

## 📂 Project Structure


car_rental/

├── src/

│   ├── app/

│   ├── components/

│   ├── models/

│   └── lib/

│

├── public/

│   └── cars/

│

├── package.json

└── README.md


---

## ⚙️ Installation & Setup

Clone the repository

```bash
git clone repository-url
```

Install dependencies

```bash
npm install
```

Create `.env.local`

```env
MONGODB_URI=your_mongodb_url

JWT_SECRET=your_secret_key

TWILIO_ACCOUNT_SID=your_sid

TWILIO_AUTH_TOKEN=your_token

TWILIO_WHATSAPP_NUMBER=your_number
```

Run development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔒 Security Features

- Password protection
- JWT authentication
- Environment variable protection
- Protected API routes


---

## 🚀 Future Improvements

- Online payment integration
- Admin dashboard
- Car availability calendar
- User profile management
- Advanced filtering system


---

## 👨‍💻 Developer

Built with ❤️ using Next.js and MongoDB.
