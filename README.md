# Event Registration System

Sebuah sistem pendaftaran event dengan fitur lengkap untuk manajemen event, pendaftaran peserta, dan proses check-in.

## 📋 Fitur Utama

### 1. Autentikasi Pengguna
- **Registrasi** dengan email & password
- **Login & Logout** sistem
- **Detail & Update** profil pengguna

### 2. Informasi Event
- **Detail Event** tunggal
- Informasi tanggal, lokasi, dan deskripsi event

### 3. Sistem Pendaftaran
- Pendaftaran pengguna untuk event
- **Generate QR Code** untuk e-ticket
- **Check-in pengguna** (admin)

### 4. Dashboard
- **Dashboard User**: status pendaftaran & e-ticket
- **Dashboard Admin**: daftar pengguna & check-in

## 🚀 API Endpoints

### Authentication
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/auth/register` | Registrasi pengguna baru |
| POST | `/api/auth/login` | Login pengguna |
| POST | `/api/auth/logout` | Logout pengguna |
| GET | `/api/auth/me` | Dapatkan profil pengguna saat ini |
| PUT | `/api/auth/me` | Update profil pengguna |

### Events
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/events` | Dapatkan semua event |

### Registrations
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| POST | `/api/registrations` | Daftar ke event |
| GET | `/api/registrations/my` | Dapatkan pendaftaran user |
| GET | `/api/registrations/:id` | Detail pendaftaran (e-ticket) |

### Admin
| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/api/admin/registrations` | Daftar semua pendaftaran |
| PUT | `/api/admin/registrations/:id/check-in` | Check-in peserta |

## 📄 Halaman Aplikasi

### A. Halaman Publik
#### 1. **Landing Page** (`/`)
- Informasi singkat event
- Tanggal & lokasi
- CTA: Register / Login

#### 2. **Events Detail** (`/events`)
- Detail lengkap event
- Deskripsi & manfaat
- Tombol pendaftaran

#### 3. **Login/Register** (`/login`, `/register`)
- Form login
- Form registrasi

### B. Halaman User
#### 1. **User Dashboard** (`/dashboard`)
- Status pendaftaran
- Akses e-ticket (QR Code)

#### 2. **Registration Detail** (`/registrations/:id`)
- E-ticket dengan QR Code
- Informasi event
- Status check-in

#### 3. **Profile Page** (`/profile`)
- Edit nama
- Edit email

### C. Halaman Admin
#### 1. **Admin Dashboard** (`/admin`)
- Statistik overview
- Pendaftaran terbaru
- Akses cepat manajemen event

#### 2. **Participants Management** (`/admin/participants`)
- Daftar peserta
- Pencarian berdasarkan nama/email
- Check-in peserta

## 🛠️ Teknologi yang Digunakan

### Backend
- **Framework**: Node.js dengan Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **QR Code Generation**: qrcode

### Frontend
- **Framework**: React.js
- **Styling**: Tailwind CSS 
- **HTTP Client**: Axios


## 🔧 Instalasi & Setup

### Prasyarat
- Node.js (v14 atau lebih baru)
- npm atau yarn
- Database (PostgreSQL/MySQL)

### Langkah-langkah

1. **Clone repository**
```sh
git clone <repository-url>
cd event-registration
```

2. **Setup Backend**
```sh
cd backend
npm install
cp .env.example .env
# Edit file .env dengan konfigurasi database
npm run dev
```

3. **Setup Frontend**
```sh
cd frontend
npm install
cp .env.example .env
npm start
```
