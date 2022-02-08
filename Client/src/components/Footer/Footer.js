import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4>Header 1</h4>
                        <ul>
                            <li>Text 1</li>
                            <li>Text 2</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Header 2</h4>
                        <ul>
                            <li>Text 1</li>
                            <li>Text 2</li>
                        </ul>
                    </div>
                    <div className='col'>
                        <h4>Header 3</h4>
                        <ul>
                            <li>Text 1</li>
                            <li>Text 2</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()} PhiliFIND | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>            
        </div>
    )
};

export default Footer;
