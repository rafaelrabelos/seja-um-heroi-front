import React from "react";
import { withRouter } from "react-router";
import UserProfileItem from "components/userProfileItem";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
    };
  }

  async componentWillMount() {}

  render() {
    return (
      <>
      
        <div className="sidenav">
        
          <nav className="main-menu">
            <div>
            
            </div>
            <div className="scrollbar" id="style-1">
              <ul>
                <li>
                  <a href="/admin">
                    <i className="fa fa-home fa-lg fa-sidebar"></i>
                    <span className="nav-text">Home</span>

                    
                  </a>
                </li>
                <li className="darkerlishadow">
                  <a href="/admin">
                    <i className="fa fa-clock-o fa-lg fa-sidebar"></i>
                    <span className="nav-text">News</span>
                  </a>
                </li>
                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-desktop fa-lg fa-sidebar"></i>
                    <span className="nav-text">Technology</span>
                  </a>
                </li>
                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-plane fa-lg fa-sidebar"></i>
                    <span className="nav-text">Travel</span>
                  </a>
                </li>
                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-shopping-cart fa-sidebar"></i>
                    <span className="nav-text">Shopping</span>
                  </a>
                </li>

                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-microphone fa-lg fa-sidebar"></i>
                    <span className="nav-text">Film & Music</span>
                  </a>
                </li>

                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-flask fa-lg fa-sidebar"></i>
                    <span className="nav-text">Web Tools</span>
                  </a>
                </li>

                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-picture-o fa-lg fa-sidebar"></i>
                    <span className="nav-text">Art & Design</span>
                  </a>
                </li>

                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-align-left fa-lg fa-sidebar"></i>
                    <span className="nav-text">Magazines</span>
                  </a>
                </li>

                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-gamepad fa-lg fa-sidebar"></i>
                    <span className="nav-text">Games</span>
                  </a>
                </li>

                <li className="darkerli">
                  <a href="/admin">
                    <i className="fa fa-glass fa-lg fa-sidebar"></i>
                    <span className="nav-text">Life & Style</span>
                  </a>
                </li>

                <li className="darkerlishadowdown">
                  <a href="/admin">
                    <i className="fa fa-rocket fa-lg fa-sidebar"></i>
                    <span className="nav-text">Fun</span>
                  </a>
                </li>
              </ul>
              <li>
                <a href="/admin">
                  <i className="fa fa-question-circle fa-lg fa-sidebar"></i>
                  <span className="nav-text">Help</span>
                </a>
              </li>
              <ul className="logout">
                <li>
                  <a href="/admin">
                    <i className="fa fa-lightbulb-o fa-lg fa-sidebar"></i>
                    <span className="nav-text">BLOG</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default withRouter(SideBar);
