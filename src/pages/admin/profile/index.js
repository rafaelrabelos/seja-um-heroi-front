import React from 'react';
import './styles.css';

export default class AdminProfile extends React.Component {

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
        <div className="container form-inline">
            <div className="card" style={{width: "100%"}}>
            
            <div className="card-header">
            <div className="row">
                <div className="col col-md-8" style={{margin:"1%"}}>
                    <img 
                    alt="avatar"
                    className="circle-img rounded-circle" 
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" 
                    data-holder-rendered="true" 
                    />
                </div>
                <div className="col col-md-12" >
                <h5>{ this.state.userName }</h5>{ this.state.userEmail }
                </div>
                
            </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">Bio</h5>
                <p className="card-text"> -- </p>
                <a href="/#" className="btn btn-primary">Editar</a>
                
            </div>
            </div>
        </div>
        </>
    );
}
}