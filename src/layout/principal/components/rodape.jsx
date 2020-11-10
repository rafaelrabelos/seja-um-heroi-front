import React from 'react';
import logoImg from 'img/logo.png';
import 'layout/principal/styles/rodape.css';

export default function Rodape() {
    
    return(
        <>
        <footer class="footer-distributed">
            <hr />
			<div class="footer-left">
				<span><img src={logoImg} width="100" height="30" alt="" /></span>
				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					<a href="/auth/blog">Blog</a>
						<a href="/auth/cases">Cases</a>
						<a href="/auth/numeros">Números</a>
						<a href="/auth/contribuir">Contribuir</a>
						<a href="/auth/sobre">Sobre-nos</a>
						<a href="/auth/contato">Contato</a>
				</p>
				<p class="footer-company-name">seja um herói © 2020 Todos os direitos reservados</p>
			</div>

			<div class="footer-center">
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">contato@sejaumheroi.com.br</a></p>
				</div>
			</div>

			<div class="footer-right">
				<p class="footer-company-about">
					<span>Sobre</span>
					Seja um herói! Adote um pet e seja o herói dele. Ele vai ser seu fâ para sempre.<br />
					Buscamos facilitar o trabalho dos heróis.
				</p>
				<div class="footer-icons">
                    <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
				</div>
			</div>
		</footer>
        <hr />
        </>
    );
}

