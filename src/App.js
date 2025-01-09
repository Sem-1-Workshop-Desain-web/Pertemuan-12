import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// percobaan
// Komponen utama aplikasi
function App() {
    return (
      <div>
        {/* Komponen untuk Tugas dan Latihan */}
        <Tugas />
        <Latihan />
        
        {/* Parent Box untuk Produk */}
        <div className="Parentbox row">
          <FotoProduk />
          <ProdukInfo isDiscount="coming" category="SIKIL" judul="Pinky Sweet" />
        </div>
      </div>
    );
  }
  
  // Komponen untuk menampilkan gambar produk
  function FotoProduk() {
    return (
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        {/* Gambar produk dengan styling Bootstrap */}
        <img 
          src="headphones.png" 
          className="img-fluid rounded shadow" 
          alt="Headphones" 
        />
      </div>
    );
  }
  
  // Komponen untuk menampilkan informasi produk
  function ProdukInfo(props) {
    const { isDiscount, category, judul } = props;
  
    // Daftar manfaat produk
    const benefits = ["Anti luntur", "Alas empuk", "Mudah dibersihkan"];
    const listbenefits = benefits.map((itembenefits, index) => (
      <li key={index} className="list-group-item">
        {itembenefits}
      </li>
    ));
  
    return (
      <div className="col-md-6">
        <div className="p-4">
          {/* Informasi produk */}
          <p className="text-muted fw-bold">{category}</p>
          <h1 className="display-5 fw-bold">{judul}</h1>
          <p className="h3 text-danger">IDR 73.309.399</p>
          <CheckDiscount isDiscount={isDiscount} />
          <p className="mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
  
          {/* Manfaat produk */}
          <ul className="list-group list-group-flush my-4">{listbenefits}</ul>
  
          {/* Tombol tambah ke keranjang */}
          <a
            onClick={(e) => Tambahcart(judul, e)}
            href="#"
            className="btn btn-primary btn-lg text-uppercase"
          >
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
  
  // Fungsi untuk menangani event penambahan produk ke keranjang
  function Tambahcart(namaProduk, e) {
    e.preventDefault(); // Mencegah reload halaman
    console.log("Membeli produk: " + namaProduk);
  }
  
  // Komponen untuk menampilkan status diskon
  function CheckDiscount(props) {
    const { isDiscount } = props;
  
    if (isDiscount === "yes") {
      return <p className="text-success">Diskon 50% off</p>;
    } else if (isDiscount === "coming") {
      return <p className="text-warning">Akan ada diskon ...</p>;
    } else {
      return <p className="text-muted">Belum ada diskon</p>;
    }
  }

// Komponen utama untuk tugas
function Tugas() {
    // State untuk menentukan form aktif (signin, forgot, atau signup)
    const [activeForm, setActiveForm] = useState('signin');

    // Fungsi untuk menampilkan form Sign In
    const showSignInForm = () => {
        setActiveForm('signin');
    };

    // Fungsi untuk menampilkan form Forgot Password
    const showForgotPasswordForm = () => {
        setActiveForm('forgot');
    };

    // Fungsi untuk menampilkan form Sign Up
    const showSignUpForm = () => {
        setActiveForm('signup');
    };

    return (
        // Container utama dengan layout vertikal
        <div className="d-flex flex-column flex-root">
            {/* Bagian utama login dengan ID unik */}
            <div
                className="login login-2 login-signin-on d-flex flex-column flex-column-fluid bg-white position-relative overflow-hidden"
                id="kt_login"
            >
                {/* Header login */}
                <LoginHeader showSignUpForm={showSignUpForm} />

                {/* Body login yang menampilkan form sesuai dengan state aktif */}
                <LoginBody
                    activeForm={activeForm}
                    showSignInForm={showSignInForm}
                    showForgotPasswordForm={showForgotPasswordForm}
                />

                {/* Footer login */}
                <LoginFooter />
            </div>
        </div>
    );
}

// Komponen untuk header login
function LoginHeader({ showSignUpForm }) {
    return (
        // Bagian header dengan padding
        <div className="login-header py-3 flex-column-auto">
            {/* Kontainer untuk konten header */}
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
                {/* Logo perusahaan */}
                <a href="#" className="flex-column-auto py-5 py-md-0">
                    <img
                        src="https://keenthemes.com/keen/assets/media/logos/landing.png"
                        alt="logo"
                        className="h-50px"
                    />
                </a>
                {/* Teks undangan untuk membuat akun baru */}
                <span className="text-muted font-weight-bold font-size-h4">
                    New Here?{' '}
                    <a
                        href="#"
                        onClick={showSignUpForm}
                        id="kt_login_signup"
                        className="text-primary font-weight-bolder"
                    >
                        Create an Account
                    </a>
                </span>
            </div>
        </div>
    );
}

// Komponen untuk body dari halaman login
function LoginBody({ activeForm, showSignInForm, showForgotPasswordForm }) {
    return (
        // Kontainer utama body login
        <div className="login-body d-flex flex-column-fluid align-items-stretch justify-content-center">
            <div className="container row">
                {/* Kolom kiri untuk form login */}
                <div className="col-lg-6 d-flex align-items-center">
                    {/* Form untuk Sign In */}
                    <div className="login-form login-signin">
                        {activeForm === 'signin' && (
                            <form
                                className="form w-xxl-550px rounded-lg p-20"
                                noValidate="novalidate"
                                id="kt_login_signin_form"
                            >
                                {/* Header form */}
                                <div className="pb-13 pt-lg-0 pt-5">
                                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                                        Welcome to Keen
                                    </h3>
                                </div>

                                {/* Input email */}
                                <div className="form-group">
                                    <label className="font-size-h6 font-weight-bolder text-dark">Email</label>
                                    <input
                                        className="form-control form-control-solid h-auto p-6 rounded-lg"
                                        type="text"
                                        name="username"
                                        autoComplete="off"
                                    />
                                </div>

                                {/* Input password */}
                                <div className="form-group">
                                    <div className="d-flex justify-content-between mt-n5">
                                        <label className="font-size-h6 font-weight-bolder text-dark pt-5">
                                            Password
                                        </label>
                                        <a
                                            href="#"
                                            onClick={showForgotPasswordForm}
                                            className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                                            id="kt_login_forgot"
                                        >
                                            Forgot Password?
                                        </a>
                                    </div>
                                    <input
                                        className="form-control form-control-solid h-auto p-6 rounded-lg"
                                        type="password"
                                        name="password"
                                        autoComplete="off"
                                    />
                                </div>

                                {/* Tombol Sign In */}
                                <div className="pb-lg-0 pb-5">
                                    <button
                                        type="button"
                                        id="kt_login_signin_submit"
                                        className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                                    >
                                        Sign In
                                    </button>
                                    {/* Tombol untuk Sign In via Google */}
                                    <button
                                        type="button"
                                        className="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
                                    >
                                        <span className="svg-icon svg-icon-md">
                                            {/* Ikon Google */}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                                                    fill="#4285F4"
                                                />
                                                {/* Ikon Google lainnya */}
                                                <path
                                                    d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                                                    fill="#34A853"
                                                />
                                            </svg>
                                        </span>
                                        Sign in with Google
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>

                    {/* Form untuk Sign Up */}
                    <div className="login-form login-signup">
                        {activeForm === 'signup' && (
                            <form
                                className="form w-xxl-550px rounded-lg p-20"
                                noValidate="novalidate"
                                id="kt_login_signup_form"
                            >
                                {/* Header form Sign Up */}
                                <div className="pb-13 pt-lg-0 pt-5">
                                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                                        Sign Up
                                    </h3>
                                    <p className="text-muted font-weight-bold font-size-h4">
                                        Enter your details to create your account
                                    </p>
                                </div>

                                {/* Input nama, email, password */}
                                <div className="form-group">
                                    <input
                                        className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                        type="text"
                                        placeholder="Fullname"
                                        name="fullname"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        autoComplete="off"
                                    />
                                </div>

                                {/* Checkbox untuk persetujuan */}
                                <div className="form-group">
                                    <div className="checkbox-inline">
                                        <label className="checkbox">
                                            <input type="checkbox" name="agree" />
                                            <span></span>I Agree the{' '}
                                            <a href="#" className="ml-1">
                                                terms and conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>

                                {/* Tombol Submit */}
                                <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                                    <button
                                        type="button"
                                        id="kt_login_signup_submit"
                                        className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <span className="text-muted font-weight-bold font-size-h4">
                                    Have Account?{' '}
                                    <a
                                        href="#"
                                        onClick={showSignInForm}
                                        id="kt_login_signup"
                                        className="text-primary font-weight-bolder"
                                    >
                                        Login Your Account
                                    </a>
                                </span>
                            </form>
                        )}
                    </div>

                    {/* Form untuk Forgot Password */}
                    <div className="login-form login-forgot">
                        {activeForm === 'forgot' && (
                            <form
                                className="form w-xxl-550px rounded-lg p-20"
                                noValidate="novalidate"
                                id="kt_login_forgot_form"
                            >
                                {/* Header */}
                                <div className="pb-13 pt-lg-0 pt-5">
                                    <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                                        Forgotten Password?
                                    </h3>
                                    <p className="text-muted font-weight-bold font-size-h4">
                                        Enter your email to reset your password
                                    </p>
                                </div>

                                {/* Input Email */}
                                <div className="form-group">
                                    <input
                                        className="form-control form-control-solid h-auto p-6 rounded-lg font-size-h6"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        autoComplete="off"
                                    />
                                </div>

                                {/* Tombol Submit dan Cancel */}
                                <div className="form-group d-flex flex-wrap pb-lg-0">
                                    <button
                                        type="button"
                                        id="kt_login_forgot_submit"
                                        className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={showSignInForm}
                                        id="kt_login_forgot_cancel"
                                        className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
                {/* Placeholder kolom kanan */}
                <div className="col-lg-6"></div>
            </div>
        </div>
    );
}

// Komponen untuk menampilkan gambar latar belakang di halaman login
function BackgroundImage() {
    return (
        <div className="col-lg-6 bgi-size-contain bgi-no-repeat bgi-position-y-center bgi-position-x-center min-h-150px mt-10 m-md-0 gambar">
        </div>
    );
}

// Komponen untuk menampilkan footer pada halaman login
function LoginFooter() {
    return (
        <div className="login-footer py-5 flex-column-auto">
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between">
                {/* Informasi hak cipta */}
                <div className="font-size-h6 font-weight-bolder order-2 order-md-1 py-2 py-md-0">
                    <span className="text-muted font-weight-bold mr-2">2021©</span>
                    {/* Link ke website Keenthemes */}
                    <a
                        href="https://keenthemes.com/keen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-50 text-hover-primary"
                    >
                        Keenthemes
                    </a>
                </div>

                {/* Link ke halaman Terms, Plans, dan Contact Us */}
                <div className="font-size-h5 font-weight-bolder order-1 order-md-2 py-2 py-md-0">
                    <a href="#" className="text-primary">Terms</a>
                    <a href="#" className="text-primary ml-10">Plans</a>
                    <a href="#" className="text-primary ml-10">Contact Us</a>
                </div>
            </div>
        </div>
    );
}


// Komponen utama untuk latihan
function Latihan() {
    return (
        // Container utama dengan latar belakang terang
        <div className="bg-light">
            {/* Container dengan padding dan latar belakang */}
            <div className="container-fluid py-5 bg-light">
                <div className="row w-75 mx-auto">
                    {/* Memanggil komponen gambar perusahaan */}
                    <ImgCompany />
                    {/* Memanggil komponen login */}
                    <Login />
                </div>
            </div>
        </div>
    );
}

// Komponen untuk menampilkan gambar perusahaan dan deskripsi singkat
function ImgCompany() {
    return (
        // Kolom dengan gaya bayangan, latar belakang info, dan konten terpusat
        <div className="col-4 flex shadow-lg bg-info bg-gradient h-auto text-center px-5 py-5 align-content-center">
            {/* Area untuk gambar */}
            <div className="d-flex justify-content-center mx-auto w-100">
                {/* Gambar dengan skala responsif */}
                <img src="racing.png" className="w-50 md:w-75 lg:w-100 img-fluid hover-scale" />
            </div>
            {/* Judul perusahaan */}
            <h1 className="fs-2 fw-bold fst-italic my-4">CleanMyCar</h1>
            {/* Deskripsi perusahaan */}
            <p className="fs-6 fw-semibold">India's first Waterless car cleaning company</p>
        </div>
    );
}

// Komponen untuk form login
function Login() {
    return (
        // Kolom dengan gaya bayangan dan latar belakang terang
        <div className="col shadow-lg bg-light bg-gradient w-50 p-5">
            {/* Teks bantuan di bagian atas */}
            <div className="float-end fs-6 mt-n4">
                <p>Need help?</p>
            </div>
            {/* Area utama form login */}
            <div className="d-grid py-5 my-5 px-5 ms-3 me-5">
                {/* Header login */}
                <div className="d-grid justify-content-center mt-5">
                    <h1 className="fs-3 fw-bold">Log in</h1>
                </div>

                {/* Form untuk login */}
                <form className="mt-5 w-100">
                    {/* Input email */}
                    <div className="mb-4">
                        <div className="mb-2">
                            <label className="fs-5 fw-bold form-label">Email</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="bg-light fs-5 rounded border ps-2 py-2 w-75 hover-form"
                                placeholder="email"
                            />
                        </div>
                    </div>

                    {/* Input password */}
                    <div className="mb-4">
                        <div className="mb-2">
                            <label className="fs-5 fw-bold form-label">Password</label>
                        </div>
                        <div>
                            <input
                                type="password"
                                className="bg-light fs-5 rounded border ps-2 py-2 w-75 hover-form"
                                placeholder="password"
                            />
                        </div>
                    </div>

                    {/* Tombol untuk submit */}
                    <div className="d-flex justify-content-center mt-5">
                        <button className="rounded-pill bg-info hover-button px-5 py-3 fs-5 fw-bold">
                            <p className="mx-4 mb-0">Save Changes</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default App;

