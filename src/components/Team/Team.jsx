import Instagram_icon from '../../assets/icons/Instagram.png';
import Artist from "../../assets/NFTs/members/5.png"
import { TEAM_MEMBERS } from '../../constants';

import "./style.css"

const Team = () => {
    return (
        <div className="team">
            <div className="bg"></div>
            <div className="blur"></div>
            <div className="container">
                <h2>The Team</h2>
                <div className="clover">
                    <div className="team-member">
                        <div className="card image">
                            <div className="card-title">
                                Christopher Fowler
                            </div>
                            <div className="card-body">
                                <img src={Artist} alt="nft-4" />
                            </div>
                        </div>
                        <h2 className="role">The Artist</h2>
                        <div className="socials">
                            <a href="https://www.instagram.com/cfowlart" target="_blank" className="twitter">
                                <img src={Instagram_icon} alt="twitter" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="team-grid">
                    {TEAM_MEMBERS.map((members) => (
                        <div className='team-member' key={members.id}>
                            <div className='card image'>
                                <div className='card-title'>
                                    {members.title}
                                </div>
                                <div className='card-body'>
                                    <img src={members.image} alt={'member' + members.id} />
                                </div>
                            </div>
                            <h2 className='role'>{members.role}</h2>
                            <div className='socials'>
                                <a href={members.instagram} target="_blank" className='twitter'>
                                    <img src={members.icon} alt="twitter" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Team;