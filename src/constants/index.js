import Discord from '../assets/icons/Discord.svg';
import Opensea from '../assets/icons/Opensea.svg';
import Twitter from '../assets/icons/Twitter.svg';
import Zero from '../assets/NFTs/collection/1.png';
import One from "../assets/NFTs/collection/2.png";
import Two from "../assets/NFTs/collection/3.png";
import Three from "../assets/NFTs/collection/4.png";
import Five from "../assets/NFTs/members/1.png";
import Six from "../assets/NFTs/members/2.png";
import Seven from "../assets/NFTs/members/3.png";
import Instagram_icon from '../assets/icons/Instagram.png';


export const HEADER_MENU_TOP = [
    { id: 0, link: 'https://opensea.io/collection/babyjitsnft ', image: Opensea, name: 'Opensea' },
    { id: 1, link: 'https://discord.gg/babyjitsnft', image: Discord, name: 'Discord' },
    { id: 2, link: 'https://twitter.com/babyjitsnft', image: Twitter, name: 'Twitter' },
];

export const COLLECTION_IMAGE = [
    { id: 0, image: Zero },
    { id: 1, image: One },
    { id: 2, image: Two },
    { id: 3, image: Three },
];

export const TEAM_MEMBERS = [
    { id: 0, image: Six, title: "Reez", role: "Founder\nStrategy & Coordination", instagram: "https://www.instagram.com/monreezee", icon: Instagram_icon },
    { id: 1, image: Five, title: "Deeds", role: "Founder\nOperations", instagram: "https://www.instagram.com/lambodeeds", icon: Instagram_icon },
    { id: 2, image: Seven, title: "Bk", role: "Founder\nBusiness Development", instagram: "https://www.instagram.com/brianjaesungkim", icon: Instagram_icon },

]