document.addEventListener("DOMContentLoaded", function() {
    const menuHTML = `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand brand-destello" href="index.html">VIDRIERÍA UNIVERSAL</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive">
                Menu <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto text-center align-items-center">
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
        /* Candado de tamaño y espacio */
        #mainNav .nav-link {
            font-size: 1rem !important;
            padding: 1rem 1rem !important;
        }

        /* EFECTO DESTELLO CELESTE PARA EL LOGO */
        .brand-destello {
            transition: all 0.5s ease !important;
            text-shadow: 0 0 0px rgba(173, 216, 230, 0); /* Invisible al inicio */
        }

        .brand-destello:hover {
            color: #ffffff !important;
            /* Destello celeste sutil */
            text-shadow: 0 0 10px rgba(135, 206, 235, 0.8), 
                         0 0 20px rgba(135, 206, 235, 0.4) !important;
            letter-spacing: 1px; /* Un pequeño estiramiento elegante */
        }

        /* Aura reforzada para el icono de engranaje */
        .nav-config-aura {
            color: #64a19d !important;
            display: inline-block;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
            filter: drop-shadow(0 0 2px #64a19d) 
                    drop-shadow(0 0 8px rgba(100, 161, 157, 0.8));
        }

        .nav-config-aura:hover {
            color: #ffffff !important;
            transform: scale(1.3) rotate(120deg) !important;
            filter: drop-shadow(0 0 5px #fff)
                    drop-shadow(0 0 15px #64a19d) 
                    drop-shadow(0 0 30px #64a19d);
        }

        /* Estilo del degradado al bajar */
        #mainNav.navbar-shrink {
            background: linear-gradient(to bottom, 
                rgba(0, 0, 0, 0.95) 0%, 
                rgba(0, 0, 0, 0.6) 70%, 
                rgba(0, 0, 0, 0) 100%) !important;
            transition: all 0.3s ease-in-out;
            border: none !important;
        }

        #mainNav.navbar-shrink .navbar-brand {
            color: #ffffff !important;
        }

        #mainNav.navbar-shrink .nav-link {
            color: rgba(255, 255, 255, 0.9) !important;
        }
        
        #mainNav.navbar-shrink .nav-link:hover {
            color: #64a19d !important;
        }
    </style>`;

    const contenedor = document.getElementById("contenedor-menu");
    if (contenedor) {
        contenedor.innerHTML = menuHTML;
    }

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