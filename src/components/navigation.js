import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul class="navbar-nav">
                    <li  class="nav-item">
                        <a class="nav-link" href="#">Link1</a>
                    </li>
                    <li  class="nav-item">
                        <a class="nav-link" href="#">Link2</a>
                    </li>
                    <li  class="nav-item">
                        <a class="nav-link" href="#">Link3</a>
                    </li>
                </ul>

            </nav>
        );        
    }
}
export default Navigation;