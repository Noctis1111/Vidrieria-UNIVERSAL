document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand brand-destello" href="index.html">VIDRIERÍA UNIVERSAL</a>
            
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
                <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto text-center">
                    <li class="nav-item"><a class="nav-link" href="ventanas.html">VENTANAS</a></li>
                    <li class="nav-item"><a class="nav-link" href="puertas.html">PUERTAS</a></li>
                    <li class="nav-item"><a class="nav-link" href="vidrio.html">VIDRIO</a></li>
                    <li class="nav-item"><a class="nav-link" href="vidriopulido.html">VIDRIO PULIDO</a></li>
                    <li class="nav-item"><a class="nav-link" href="vitrinas.html">VITRINAS</a></li>
                    <li class="nav-item"><a class="nav-link" href="aluminio.html">ALUMINIO</a></li>
                    <li class="nav-item"><a class="nav-link" href="galeria.html">GALERÍA</a></li>
                    <li class="nav-item">
                        <a class="nav-link nav-config-aura" href="config.html" title="Configurar Precios">
                            <i class="fas fa-cog"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <style>

        /* NAVBAR INICIAL */
        #mainNav {
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.3) 60%,
                rgba(0, 0, 0, 0) 100%
            ) !important;
            transition: all 0.3s ease-in-out;
        }

        #mainNav .navbar-brand,
        #mainNav .nav-link {
            color: #ffffff !important;
        }

        /* LINKS */
        #mainNav .nav-link {
            font-size: 1rem !important;
            padding: 1rem 1rem !important;
        }

        /* EFECTO LOGO */
        .brand-destello {
            transition: all 0.5s ease !important;
        }

        .brand-destello:hover {
            text-shadow: 0 0 10px rgba(135, 206, 235, 0.8),
                         0 0 20px rgba(135, 206, 235, 0.4) !important;
        }

        /* ICONO CONFIG */
        .nav-config-aura {
            color: #64a19d !important;
            transition: all 0.4s ease !important;
        }

        .nav-config-aura:hover {
            color: #ffffff !important;
            transform: scale(1.3) rotate(120deg) !important;
        }

        /* SCROLL */
        #mainNav.navbar-shrink {
            background: linear-gradient(to bottom, 
                rgba(0, 0, 0, 0.95) 0%, 
                rgba(0, 0, 0, 0.6) 70%, 
                rgba(0, 0, 0, 0) 100%) !important;
        }

        /* ========================= */
        /* 🔥 MOBILE */
        /* ========================= */
        @media (max-width: 991px) {

            #navbarResponsive {
                background: linear-gradient(
                    to bottom,
                    rgba(255, 255, 255, 0.85) 0%,
                    rgba(255, 255, 255, 0.4) 60%,
                    rgba(255, 255, 255, 0) 100%
                );
                backdrop-filter: blur(8px);
                padding: 1rem;
                border-radius: 10px;
                margin-top: 10px;
                box-shadow: 0 8px 25px rgba(0,0,0,0.2);
            }

            #mainNav .nav-link {
                padding: 0.6rem !important;
                font-size: 0.95rem !important;
                border-radius: 8px;
                transition: all 0.3s ease;
            }

            /* 🔥 HOVER / TOUCH */
            #navbarResponsive .nav-link:hover,
            #navbarResponsive .nav-link:active {
                background: rgba(0, 0, 0, 0.4);
            }

            /* 🔥 ACTIVO (PÁGINA ACTUAL) */
            #navbarResponsive .nav-link.active {
                background: rgba(0, 0, 0, 0.6);
                color: #fff !important;
            }

            .navbar-toggler i {
                color: #fff;
                font-size: 1.3rem;
            }
        }

    </style>
    `;

    const contenedor = document.getElementById("contenedor-menu");
    if (contenedor) {
        contenedor.innerHTML = menuHTML;
    }

    /* 🔥 DETECTAR PÁGINA ACTUAL */
    const links = document.querySelectorAll("#navbarResponsive .nav-link");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });

    const navbarShrink = function () {
        const mainNav = document.body.querySelector('#mainNav');
        if (!mainNav) return;
        
        if (window.scrollY === 0) {
            mainNav.classList.remove('navbar-shrink');
        } else {
            mainNav.classList.add('navbar-shrink');
        }
    };

    navbarShrink();
    document.addEventListener('scroll', navbarShrink);
});