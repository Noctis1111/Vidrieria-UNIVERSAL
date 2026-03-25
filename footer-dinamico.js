const footerHTML = `
<style>
    .footer-personalizado {
        position: relative;
        /* Degradado: Negro -> Imagen -> Negro */
        background: linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.4) 70%, #000 100%), 
                    url("assets/img/bg-masthead.jpg");
        background-size: cover;
        background-position: center;
        background-attachment: fixed; /* Efecto de movimiento elegante */
        padding: 6rem 0 3rem 0; /* Espacio para que se vea la imagen */
        border-top: none !important;
        color: rgba(255, 255, 255, 0.5);
    }

    .footer-personalizado h2 {
        letter-spacing: 0.2rem;
        text-shadow: 0 0 15px rgba(0,0,0,0.8);
    }

    .social-icons-footer a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
        width: 3rem;
        background-color: rgba(255, 255, 255, 0.1);
        color: white;
        border-radius: 100%;
        margin: 0 1rem;
        text-decoration: none;
        transition: all 0.3s;
    }

    .social-icons-footer a:hover {
        background-color: #64a19d; /* El color de tu marca */
        transform: scale(1.1);
    }
</style>

<footer class="footer-personalizado text-center">
    <div class="container px-4 px-lg-5">
        <div class="mb-5">
            <h2 class="text-white text-uppercase mb-4">Consultas</h2>
            <div class="social-icons-footer">
                <a href="#!"><i class="fab fa-whatsapp"></i></a>
                <a href="#!"><i class="fab fa-facebook-f"></i></a>
                <a href="#!"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="small mt-5">
            Copyright &copy; VIDRIERÍA UNIVERSAL 2026 <br>
        </div>
    </div>
</footer>
`;

document.getElementById('contenedor-footer').innerHTML = footerHTML;