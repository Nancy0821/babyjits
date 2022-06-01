import { useEffect, useState, useRef } from "react";
import babyjitsAngel from "../../assets/icons/babyjits.gif"
import stage from "../../assets/icons/stage.png"
import $ from "jquery";

import "./style.css"

const Roadmap = () => {
    const present = useRef(26.9995);
    const [posX, setPosX] = useState(26.9995);
    const [posY, setPosY] = useState(108);
    const [direction, setDirection] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        };
    }, []);

    const handleScroll = (e) => {
        positionbabyjitsAngel();
    };

    const positionbabyjitsAngel = () => {
        // var scrollY = $("#roadmapsection")[0].offsetTop;
        var scrollY = window.scrollY - $("#roadmapsection")[0].offsetTop;
        var maxScrollY = $("#roadmapsection")[0].offsetWidth;
        var path = $("#travelPath")[0];

        var pathLen = path.getTotalLength();
        var dist = pathLen * scrollY / maxScrollY;
        var pos = path.getPointAtLength(dist);
        // var angle = calculateAngle(path, pathLen, dist, pos)
        if (pos.x - present.current >= 0) {
            setDirection(true);
        } else {
            setDirection(false);
        }

        present.current = pos.x;
        setPosX(pos.x);
        setPosY(pos.y);

    }

    return (
        <>
            <div className="roadmap"  >
                <div className="container" id="roadmapsection">
                    <h2>The Roadmap</h2>
                    <svg id="svgpath" preserveAspectRatio="none" width="931" height="1319" viewBox="0 0 931 1319" fill="none" xmlns="http://www.w3.org/2000/svg" className="path"><path id="travelPath" d="M1.99946 97.9999C181.775 -216.971 930.639 317.716 929.499 580C743.907 297.349 0.0431749 862.581 1.99946 914C44.4229 816.149 945 1112 929.499 1318" stroke="black" strokeWidth="2" strokeDasharray="10 10"></path></svg>
                    <div className="babyjits-angel">
                        <img src={babyjitsAngel} className="angel" id="angelist" alt="babyjitsangel" style={{ transform: `translateX(${posX}px) translateY(${posY}px) scaleX(${direction ? 1 : -1})` }} />
                        {/* <img src={babyjitsAngel} className="angel" id="angelist" alt="babyjitsangel" /> */}
                    </div>
                    <div className="roadmap-items" >
                        <div className="milestone m1">
                            <img src={stage} className="stage" alt="stage" />
                            <h3>Newborns</h3>
                            <ul>
                                <p>
                                    <span>Baby Jits are unleashed into the world.</span>
                                </p>
                                <p>
                                    <span>The future now starts with you, the community! We’ll be focused on building a strong community and relationship with our community, so that we can build a decentralized future together.</span>
                                </p>
                            </ul>
                        </div>
                        <div className="milestone m2">
                            <img src={stage} className="stage" alt='stage' />
                            <h3>NFT x Real World Fabric</h3>
                            <p>
                                <span>Exclusive event accesses are raffled to holders.</span>
                            </p>
                            <p>
                                <span>Merchandise.</span>
                            </p>
                        </div>
                        <div className="milestone m3">
                            <img src={stage} className="stage" alt="stage" />
                            <h3>Growing Up</h3>
                            <p>
                                <span>Baby Jits don't stop here; they are just the beginning of a greater Jits collection. Your Baby Jit is your mint pass for future projects and collections.</span>
                            </p>
                            <p>
                                <span>A treasury budget will be set aside to continue to tell the Jits story and build this artistic vision.</span>
                            </p>
                        </div>
                        <div className="milestone m4">
                            <img src={stage} className="stage" alt="stage" />
                            <h3>Ascension</h3>
                            <p>
                                <span>Baby Jits are actively exploring the metaverse and opportunities for holders to receive regular dividends. Stay tuned!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Roadmap;