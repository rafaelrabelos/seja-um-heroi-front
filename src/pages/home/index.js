import React from 'react';
import './styles.css';
import bulldog from '../../img/bulldog.jpg';
import corgi from '../../img/corgi.jpg';
import lulu from '../../img/lulu.jpg';
import pug from '../../img/pug.jpg';
import salsicha from '../../img/salsicha.jpg';
import shitsu from '../../img/shitsu.jpg';


export default function Home() {

    return(
        <>
        <div class="container form-inline">
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img alt="topo" src={bulldog} class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Bulldog</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="/hero" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img alt="dog" src={corgi} class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Corgi</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="/hero" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img alt="dog" src={salsicha} class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Salsicha</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="/hero" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img alt="dog" src={shitsu} class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Shitsu</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="/hero" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img alt="dog" src={pug} class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Pug</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="/hero" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
            <div class="card" style={{width: "18rem", margin:"1%"}}>
            <img alt="dog" src={lulu} class="card-img-top" width="30px" height="200px" />
            <div class="card-body">
                <h5 class="card-title">Lulu</h5>
                <p class="card-text">Cachorro fofo, com nenhum problema de comportamento e muito bem criado.</p>
                <a href="/hero" class="btn btn-primary">Mais Informações</a>
            </div>
            </div>
        </div>
        </>
    );
}