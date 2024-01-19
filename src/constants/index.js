import { GrMail } from 'react-icons/gr';
import { EJH, EJHS, EJM } from '../assets';

export const navLinks = [
{
    id: "home",
    title: "Home",
    route: "/",
},
{
    id: "about",
    title: "About Us",
    route: "/about",
},
{
    id: "journals",
    title: "Journals",
    route: "/journals",
},
{
    id: "",
    title: "Contact Us",
    route: "/contact",
    special: true,
},
];

export const journals = [
    {
        title: 'Elite Journal of Haematology (EJH)',
        desc: 'lorem ipsum bla bla',
        icon: EJH,
    },
    {
        title: 'Elite Journal of Medicine (EJM)',
        desc: 'lorem ipsum bla bla',
        icon: EJM,
    },
    {
        title: 'Elite Journal of Health Sciences (EJHS)',
        desc: 'lorem ipsum bla bla',
        icon: EJHS,
    },
];

export const socialMedia = [
{
    id: "social-media-2",
    Icon: GrMail,
    link: "mailto:Anasconigltd@yahoo.com"
}
];

export const footerLinks = [
{
    title: "Company",
    links: [
    {
        name: "About",
        route: "/about",
    },
    {
        name: "Journals",
        route: "/journals",
    },
    {
        name: "Contact",
        route: "/contact",
    }, 
    ],
},

{
    title: "Legal",
    links: [
    {
        name: "Cookies",
        link: "",
    },
    {
        name: "Privacy Policy",
        link: "",
    },
    {
        name: "Security",
        link: "",
    },
    {
        name: "Terms of Use",
        link: "",
    },
    ],
},
];