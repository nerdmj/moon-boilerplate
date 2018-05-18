import React, {Component} from 'react'
import './styles/appStyles.scss';
import './styles/common.scss';
import './styles/manny.css';
import homeIcon from '../images/setting.svg';
import natureImg from '../images/nature.jpg';

//https://gist.github.com/chrissimpkins/5bf5686bae86b8129bee#atom_autocomplete
// ATOM Shortcuts


var homeImg = document.getElementById('home');
homeImg.src = homeIcon;


var frontImg = document.getElementById('frontImg');
frontImg.src = natureImg;

export default class App extends Component {
    render() {
        return (
                 <div>
                <h1>Webpack Dev server </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <h3> This is Heading level 3 </h3>
              </div>
            );
    }
}
