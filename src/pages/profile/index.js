import React from 'react';
import './styles.css';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            userEmail: ""
        };
    }

    componentDidMount(){
        this.setState({
        userName: sessionStorage.getItem("nome"),
        userEmail: sessionStorage.getItem("email")
        });
    }

     render(){return(
        <>
        <div class="container form-inline">
            <div class="card" style={{width: "100%"}}>
            
            <div class="card-header">
            <div className="row">
                <div className="col col-md-8" style={{margin:"1%"}}>
                    <img 
                    alt="avatar"
                    className="circle-img rounded-circle" 
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" 
                    data-holder-rendered="true" 
                    />
                </div>
                <div className="col col-md-12" >
                <h5>{ this.state.userName }</h5>{ this.state.userEmail }
                </div>
                
            </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">Bio</h5>
                <p class="card-text"> -- </p>
                <a href="/#" class="btn btn-primary">Editar</a>
                
            </div>
            </div>
        </div>
        </>
    );
}
}