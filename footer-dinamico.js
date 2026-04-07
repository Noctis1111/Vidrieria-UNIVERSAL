const footerHTML = `

<!-- Signup (ESTA ES LA PARTE DEL FONDO) -->
<section class="signup-section">
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
                <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                <h2 class="text-white mb-5">Consultas</h2>

                <form class="form-signup">
                    <div class="row input-group-newsletter">
                        <div class="col">
                            <input class="form-control" type="email" placeholder="Consultenos ....." />
                        </div>
                        <div class="col-auto">
                            <button class="btn btn-primary" type="submit">Notificarme!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- Contact -->
<section class="contact-section bg-black">
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
            <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                        <h4 class="text-uppercase m-0">Dirección</h4>
                        <hr class="my-4 mx-auto" />
                        <div class="small text-black-50">Jr. Bolognesi N°527, Cajabamba</div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-envelope text-primary mb-2"></i>
                        <h4 class="text-uppercase m-0">Gmail</h4>
                        <hr class="my-4 mx-auto" />
                        <div class="small text-black-50">
                            <a href="mailto:VidrieriaUniversal@gmail.com">
                                VidrieriaUniversal@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                    <div class="card-body text-center">
                        <i class="fas fa-mobile-alt text-primary mb-2"></i>
                        <h4 class="text-uppercase m-0">Teléfono</h4>
                        <hr class="my-4 mx-auto" />
                        <div class="small text-black-50">+51 988639458</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="social d-flex justify-content-center">
            <a class="mx-4" href="#!"><i class="fab fa-twitter"></i></a>
            <a class="mx-4" href="#!"><i class="fab fa-facebook-f"></i></a>
            <a class="mx-4" href="#!"><i class="fab fa-github"></i></a>
        </div>
    </div>
</section>

<!-- Footer -->
<footer class="footer bg-black small text-center text-white-50">
    <div class="container px-4 px-lg-5">
        Copyright &copy; VIDRIERÍA UNIVERSAL 2024
    </div>
</footer>

`;

document.getElementById('contenedor-footer').innerHTML = footerHTML;