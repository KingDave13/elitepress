import { BsWhatsapp } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

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

export const values = [
{
    name: 'quality',
    title: 'Quality',
    description: 'Our products are of the best quality available in the market so you can be assured of the best when dealing with us.',
    image: vector
},
{
    name: 'reliability',
    title: 'Reliability',
    description: 'You can always bank on us to always be apprised and be fully stocked with all the best items, round the clock, all year.',
    image: vector2
},{
    name: 'security',
    title: 'Security',
    description: 'Security is also one of our watchwords as we prioritize absolute security of transactions between us and our customers.',
    image: vector3
},
];

export const testimonials = [
{
    testimonial: "Anayo Okpala Global Concept has been our trusted partner for years. Their top-notch clothing materials for mattress making have significantly improved the quality of our products. The consistency in the quality of their materials is impressive, and their customer service is second to none.",
    image: pic1,
    name: "Hassan Jamal",
    designation: "Mattress Manufacturer",
},
{
    testimonial: "I've been sourcing PVC Transparent from Anayo Okpala Global Concept, and I must say, their product quality is unmatched. It's crystal clear, durable, and perfect for our packaging needs. The reliability and professionalism of their team keep us coming back.",
    image: pic2,
    name: "Anita Chika Aniedu",
    designation: "Entrepreneur",
},
{
    testimonial: "Anayo Okpala Global Concept is my go-to supplier for all things tape-related. Their range of tapes and cellotapes is extensive, and the quality is consistently excellent. Fast delivery and competitive prices make them a reliable partner for our packaging needs.",
    image: pic3,
    name: "Ebiere Alfred Johnson",
    designation: "Tape Enthusiast",
},
{
    testimonial: "Our industrial facility relies on Anayo Okpala Global Concept for various industrial accessories, and they never disappoint. From tapes to specialized tools, they have it all. Their products have enhanced our efficiency and productivity. Highly recommended!",
    image: pic4,
    name: "Olajide Babatunde",
    designation: "Industrial Supplies Manager",
},
];

export const socialMedia = [
{
    id: "social-media-1",
    Icon: BsWhatsapp,
    link: "https://wa.me/2348037002296"
},
{
    id: "social-media-2",
    Icon: GrMail,
    link: "mailto:Anasconigltd@yahoo.com"
}
];

export const footerLinks = [
{
    title: "Products",
    links: [
    {
        name: "Clothing Materials",
        route: "https://wa.link/n4v0ws",
    },
    {
        name: "Tape",
        route: "https://wa.link/2loufh",
    },
    {
        name: "PVC Transparent",
        route: "https://wa.link/gcvjmu",
    },
    {
        name: "PVC Leather",
        route: "https://wa.link/2e948h",
    },
    {
        name: "Cellotape",
        route: "https://wa.link/nffx29",
    },
    {
        name: "Sewing Thread",
        route: "https://wa.link/oghwza",
    },
    ],
},
{
    title: "Company",
    links: [
    {
        name: "About",
        route: "/about",
    },
    {
        name: "Products",
        route: "/products",
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