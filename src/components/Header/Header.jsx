import { useState } from "react";

import { NavLink } from "react-router-dom";
import { HEADER_MENU_TOP } from "../../constants";
import rapper from '../../assets/icons/rapper.png';
import voiceController from '../../assets/icons/voiceController.gif';
import danceboy1 from '../../assets/icons/danceboy.gif';
import discoBall from '../../assets/icons/discoball.gif';
import floor from '../../assets/icons/floor.svg';
import logo from '../../assets/icons/logo.png'

import "./style.css";

const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="hero">
            <div className="container">
                <div className="disco">
                    <img src={discoBall} className="discoball" />
                </div>
                <div className="navbar">
                    <div className="mobile-nav">
                        <h3 className="brand">
                            <img src={logo} />
                        </h3>
                        <button href="#" className="burger-menu" onClick={() => setShow(true)}>
                            <span></span>
                        </button>
                    </div>
                    <div className={show ? 'links mobile' : 'links'}>
                        <h2 className="brand">
                            <img src={logo} />
                        </h2>
                        <div className="close" onClick={() => setShow(false)}>&times;</div>
                        <div className="links-container">
                            <div className="left">
                                <a href={'https://www.babyjitsnft.com'} className="navbar-links" rel="navbarlinks">
                                    Home
                                </a>
                                <a href={'https://www.babyjitsnft.com/mint'} className="navbar-links" rel="navbarlinks" style={{ pointerEvents: "none" }}>
                                    Mint
                                </a>
                            </div>
                            <div className="right">
                                {HEADER_MENU_TOP.map((menu) => (
                                    <a href={menu.link} target="_blank" key={menu.id} className="website_link" rel="link">
                                        <img src={menu.image} alt={menu.image} className='website_logo' />
                                        <span>{menu.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                    <div className="card brand">
                        <div className="card-title">
                            <img src={logo} />
                        </div>
                        <div className="card-body">
                            <p>
                                Baby Jits is the first collection of Jits and a mesh of essences from different pop culture realms from the entertainment world. <br />This community is focused on bringing people together through art, experiences, and interaction.
                            </p>
                            <p>
                                Supply: 4444
                                <br />
                                Price: 0.25 ETH
                            </p>
                        </div>
                    </div>
                    <div className="disco-mobile">
                        <img src={discoBall} className="discoball-mobile" />
                    </div>
                    <div className="card public">
                        <img alt="rapper" src={rapper} draggable="false" className="rapper" data-xblocker="passed" style={{ visibility: 'visible' }} />
                        <img alt="danceboy1" src={danceboy1} draggable="false" className="danceboy" data-xblocker="passed" style={{ visibility: 'visible' }} />
                    </div>
                </div>
                <div className="graphic">
                    <img alt="rapper" src={rapper} draggable="false" className="rapper" data-xblocker="passed" style={{ visibility: 'visible' }} />
                    <img alt="danceboy" src={danceboy1} draggable="false" className="danceboy" data-xblocker="passed" style={{ visibility: 'visible' }} />
                    <img alt="claw" src={voiceController} draggable="false" className="claw" data-xblocker="passed" style={{ visibility: 'visible' }} />
                </div>
            </div>
            <img alt="floor" src={floor} draggable="false" className="floor" data-xblocker="passed" style={{ visibility: 'visible' }} />
        </div>
    )
}

export default Header;