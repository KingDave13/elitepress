import { GrMail } from 'react-icons/gr';

import { EJH, EJHS, EJM, EJMS, EJI, EJPH, EJLM, EJNHS, EJSRR, EJHIV, 
    EJPHVOL2ISS103, EJPHVOL2ISS104, EJPHVOL2ISS105, EJPHVOL2ISS106, 
    EJPHVOL1ISS102, EJPHVOL1ISS101, EJMVOL2ISS102, EJMVOL2ISS103, 
    EJMVOL2ISS104, EJMVOL2ISS105, EJMVOL1ISS101, EJHSVOL2ISS103, 
    EJMSVOL2ISS104, EJHSVOL2ISS104, EJHSVOL2ISS105, EJMSVOL2ISS105, 
    EJHIVVOL2ISS101, EJHIVVOL2ISS102, EJHIVVOL2ISS103, EJHIVVOL2ISS104, 
    EJHIVVOL2ISS105, EJNHSVOL2ISS104, EJNHSVOL2ISS105, EJNHSVOL2ISS106, 
    EJLMVOL2ISS101, EJLMVOL2ISS102, EJLMVOL2ISS103, EJLMVOL2ISS104, 
    EJLMVOL2ISS105, EJIVOL2ISS101, EJIVOL2ISS102, EJSRRVOL2ISS101, 
    EJSRRVOL2ISS102, EJSRRVOL2ISS105, EJSRRVOL2ISS104, EJSRRVOL2ISS103, 
    EJIVOL2ISS103, EJIVOL2ISS104, EJIVOL2ISS105, EJHVOL2ISS201, 
    EJHVOL2ISS202, EJMVOL2ISS201, EJMVOL2ISS202, EJHSVOL2ISS201, EJNHSVOL2ISS201, EJMVOL2ISS203, EJMVOL2ISS204, EJMVOL2ISS205, EJMVOL2ISS206, EJMVOL2ISS207, EJHSVOL2ISS202, EJMVOL2ISS208, EJPHVOL2ISS201, EJLMVOL2ISS201, EJHVOL2ISS203, EJHVOL2ISS204, EJHVOL2ISS205, EJHVOL2ISS206, EJMVOL2ISS209, EJPHVOL2ISS202, EJPHVOL2ISS203, EJNHSVOL2ISS202, EJMVOL2ISS210, EJHVOL2ISS207, } 
from '../assets';

import { EJPHVOL2ISS101, EJPHVOL2ISS102, EJHVOL2ISS101, EJHVOL2ISS102,
 EJMSVOL2ISS101, EJMSVOL2ISS102, EJHSVOL2ISS101, EJMVOL2ISS101,
 EJHVOL2ISS103, EJHVOL2ISS104, EJHVOL2ISS105, EJHSVOL2ISS102,
 EJMSVOL2ISS103, EJNHSVOL2ISS101, EJNHSVOL2ISS102, EJNHSVOL2ISS103,
  } from '../assets';

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

export const ejhSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 2. (2024)",
                route: "/journals/EJH/VOL2ISS2",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJH/VOL2",
            },
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejh@epjournals.com",
                route: "mailto:ejh@epjournals.com",
            }, 
        ],
    },
];

export const ejmSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 2. (2024)",
                route: "/journals/EJM/VOL2ISS2",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 1 (2023)",
                route: "/journals/EJM/VOL1",
            },
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJM/VOL2",
            },
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejm@epjournals.com",
                route: "mailto:ejm@epjournals.com",
            }, 
        ],
    },
];

export const ejhsSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 2. (2024)",
                route: "/journals/EJHS/VOL2ISS2",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJHS/VOL2",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejhs@epjournals.com",
                route: "mailto:ejhs@epjournals.com",
            }, 
        ],
    },
];

export const ejmsSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 1. (2024)",
                route: "/journals/EJMS/VOL2ISS1",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                // name: "lorem ipsum",
                // route: "",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejms@epjournals.com",
                route: "mailto:ejms@epjournals.com",
            }, 
        ],
    },
];

export const ejphSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 2. (2024)",
                route: "/journals/EJPH/VOL2ISS2",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 1 (2023)",
                route: "/journals/EJPH/VOL1",
            },
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJPH/VOL2",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejph@epjournals.com",
                route: "mailto:ejph@epjournals.com",
            }, 
        ],
    },
];

export const ejiSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 1. (2024)",
                route: "/journals/EJI/VOL2ISS1",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                // name: "lorem ipsum",
                // route: "",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "eji@epjournals.com",
                route: "mailto:eji@epjournals.com",
            }, 
        ],
    },
];

export const ejlmSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 2. (2024)",
                route: "/journals/EJLM/VOL2ISS2",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJLM/VOL2",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejlm@epjournals.com",
                route: "mailto:ejlm@epjournals.com",
            }, 
        ],
    },
];

export const ejnhsSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 2. (2024)",
                route: "/journals/EJNHS/VOL2ISS2",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJNHS/VOL2",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejnhs@epjournals.com",
                route: "mailto:ejnhs@epjournals.com",
            }, 
        ],
    },
];

export const ejsrrSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 1. (2024)",
                route: "/journals/EJSRR/VOL2ISS1",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                // name: "lorem ipsum",
                // route: "",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejsrr@epjournals.com",
                route: "mailto:ejsrr@epjournals.com",
            }, 
        ],
    },
];

export const ejhivSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 1. (2024)",
                route: "/journals/EJHIV/VOL2ISS1",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                // name: "lorem ipsum",
                // route: "",
            }, 
        ],
    },
    {
        id: "indexings",
        title: "Indexings",
        links: [
            {
                name: "Google Scholar",
                route: null,
            },
            {
                name: "Research Gate",
                route: null,
            },
            {
                name: "Academia Edu",
                route: null,
            },
            {
                name: "ISI Indexing",
                route: null,
            },
            {
                name: "Cosmo Impact Factor",
                route: null,
            },
        ],
    },
    {
        id: "editors",
        title: "Editors",
        links: [
            {
                name: "Prof. Muhammad Akram",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Muhammad-Akram-88", 
                route: null,
            },
            {
                name: "Dr. Rida Zainab",
                school: "Department of Eastern Medicine, Government College University, Faisalabad, Pakistan.",
                profileLink: "https://www.researchgate.net/profile/Rida_Zainab5",
                route: null,
            },
        ],
        special: true,
    },
    {
        id: "frequency",
        title: "Frequency: 12",
        links: [
            {
                name: "Each month of the year",
                route: null,
            },
        ],
    },
    {
        id: "authors",
        title: "Author's Instructions",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "article",
        title: "Article Processing Charge",
        links: [
            {
                // name: "lorem ipsum",
                // route: null,
            },
        ],
    },
    {
        id: "contact",
        title: "Contact",
        links: [
            {
                name: "ejhiv@epjournals.com",
                route: "mailto:ejhiv@epjournals.com",
            }, 
        ],
    },
];

export const vol1iss1 = [
    {
        title: "Harnessing Technology for Effective Sickle Cell Disease Awareness Among Ugandan Adolescents: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Christiana Uchenna Ezeanya and Getrude Uzoma Obeagu",
        abstract: "Sickle Cell Disease (SCD) poses a significant health challenge among adolescents in Uganda, necessitating innovative approaches for awareness and education. This review examines the role of technology in enhancing SCD awareness, with a focus on mobile applications, social media, telemedicine, and educational games.",
        route: EJPHVOL1ISS101,
        pages: "1-11",
    },
    {
        title: "Strategies to Combat Mother-to-Child Transmission of HIV in Uganda: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Mother-to-Child Transmission (MTCT) of HIV remains a significant public health concern in Uganda, demanding effective strategies to prevent and mitigate its impact. This comprehensive review critically examines the various approaches and interventions implemented to combat MTCT in the Ugandan context.",
        route: EJPHVOL1ISS102,
        pages: "12-24",
    },
];

export const vol2iss1 = [
    {
        title: "Malaria's Silent Partner: Anemia in Children",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This review explores the often-overlooked but critical relationship between malaria and anemia in children. While malaria's immediate symptoms are well-documented, its silent partner, anemia, significantly impacts the health and development of affected children. The consequences of malarial anemia on child health, including fatigue, stunted growth, and cognitive impairments, are discussed.",
        route: EJPHVOL2ISS101,
        pages: "1-7",
    },
    {
        title: "Unmasking the Truth: Addressing Stigma in the Fight Against HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The persistent stigma surrounding HIV remains a significant obstacle in the global efforts to combat the epidemic effectively. This review article aims to dissect the multifaceted dimensions of HIV stigma and explore strategies to unmask the truth about its detrimental impact on prevention, care, and support for those affected by the virus.",
        route: EJPHVOL2ISS102,
        pages: "8-22",
    },
    {
        title: "Tuberculosis: Current Diagnosis and Management",
        authors: "Hamisi Mahanga Swalehe and Emmanuel Ifeanyi Obeagu",
        abstract: "Tuberculosis is an airborne disease caused by the bacterium Mycobacterium tuberculosis (M. tuberculosis). Mycobacterium tuberculosis is carried in airborne particles, called droplet nuclei, of 1-5 microns in diameter. Infectious droplet nuclei are generated when persons who have pulmonary or laryngeal TB disease cough, sneeze, shout, or sing.",
        route: EJPHVOL2ISS103,
        pages: "23-33",
    },
    {
        title: "Awareness and Utilization of Reproductive Health Right among Women of Childbearing Age Attending Welfare Clinic in University Of Calabar Teaching Hospital, Calabar",
        authors: "Nwanganga Ihuoma Ubosi, Nancy Aje Okune and Emmanuel Ifeanyi Obeagu",
        abstract: "The study was carried out on awareness and utilization of reproductive health right among women of childbearing age attending welfare clinic at University of Calabar Teaching Hospital, Calabar. This study employed a descriptive design (survey) to determine the awareness and utilization of reproductive rights among the women of childbearing age.",
        route: EJPHVOL2ISS104,
        pages: "34-51",
    },
    {
        title: "Early Infant Diagnosis: Key to Breaking the Chain of HIV Transmission",
        authors: "Emmanuel Ifeanyi Obeagu, Nwanganga Ihuoma Ubosi, Getrude Uzoma Obeagu and Muhammad Akram",
        abstract: "Early Infant Diagnosis (EID) stands as a cornerstone in the global strategy to eradicate pediatric Human Immunodeficiency Virus (HIV) infections. This review delves into the pivotal role of EID in preventing the transmission of HIV from mothers to infants, emphasizing its significance in breaking the chain of transmission.",
        route: EJPHVOL2ISS105,
        pages: "52-61",
    },
    {
        title: "Anthropometric Parameters in Health and Diseases: A Review",
        authors: "I.S.I. Ogbu and Emmanuel Ifeanyi Obeagu",
        abstract: "Anthropometric parameters play a pivotal role in assessing human health and disease states. This paper aims to comprehensively explore the significance of various anthropometric measurements in understanding health outcomes and identifying potential disease risks.",
        route: EJPHVOL2ISS106,
        pages: "62-70",
    },
];

export const vol2iss2 = [
    {
        title: "Prevalence of Brucellosis among Febrile Patients Attending Kampala International University Teaching Hospital, Southwestern Uganda",
        authors: "Benard Bushoborozi, Ezera Agwu, Emmanuel Ifeanyi Obeagu, Samson Adewale Oyebadejo, Yakubu Sunday Bot, Mary Gorret Abalinda, Pius Theophilus, Onyekachi Splendid Uwakwe, Kenedy Kyaluzi and Sarah Nakyeyune",
        abstract: "Brucellosis is a zoonotic disease mainly acquired through consumption of infected animal products such as milk and meat. It is one of the leading zoonotic diseases and is a serious public health concern in endemic areas. Specifically, the study aimed at determining the prevalence, antibiogram, comorbidities and factors associated with Brucellosis among febrile patients attending Kampala International University Teaching Hospital.",
        route: EJPHVOL2ISS201,
        pages: "1-14",
    },
    {
        title: "The Role of Parents: Strengthening Adolescent Education for Sickle Cell Disease Prevention",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This review article explores the critical role parents play in strengthening adolescent education for the prevention of Sickle Cell Disease (SCD). SCD, a genetic blood disorder, places a disproportionate burden on populations with a high prevalence of carriers, necessitating comprehensive prevention strategies.",
        route: EJPHVOL2ISS202,
        pages: "15-21",
    },
    {
        title: "Understanding Hematocrit Fluctuations in HIV-Malaria Coinfection for Improved Management",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This review explores the intricate dynamics of hematocrit fluctuations in individuals experiencing concurrent HIV and malaria infections, highlighting the challenges and clinical implications of these hematological changes. Hematocrit levels, a critical indicator of red blood cell mass, are significantly influenced by the synergistic interaction of these two prevalent diseases, leading to diagnostic complexities and impacting therapeutic strategies.",
        route: EJPHVOL2ISS203,
        pages: "22-34",
    },
];

export const Ejmvol2iss1 = [
    {
        title: "Association between Socio-demographic and Economic characteristics and Packed Cell Volume of the Expectant Mothers Attending Antenatal Clinic in FMC, Abuja.",
        authors: "Nwanganga Ihuoma Ubosi, Gideon Ikechukwu Anyaegbusim Okoroiwu, Golden Njideka Aguzie and Emmanuel Ifeanyi Obeagu.",
        abstract: "The study aimed to assess the nutritional knowledge, practices and packed cell volume of expectant mothers attending antenatal clinic in FMC Abuja. A structured interviewer-administered questionnaire was used. The questionnaire was adequately checked and validated.",
        route: EJMVOL2ISS101,
        pages: "1-9",
    },
    {
        title: "The Role of Blood Transfusion Strategies in HIV Management: Current Insights and Future Directions",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The coexistence of Human Immunodeficiency Virus (HIV) and anemia presents a multifaceted challenge in patient management. Anemia, prevalent in individuals with HIV, stems from diverse etiologies, including direct viral impact, medication side effects, and opportunistic infections.",
        route: EJMVOL2ISS102,
        pages: "10-22",
    },
    {
        title: "Antioxidant Supplementation in Pregnancy: Effects on Maternal and Infant Health",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Antioxidant supplementation during pregnancy has garnered significant attention due to its potential impact on mitigating oxidative stress and improving maternal and infant health outcomes. This comprehensive review explores the current literature on antioxidant supplementation during pregnancy, examining its effects on maternal well-being, pregnancy complications, and neonatal outcomes.",
        route: EJMVOL2ISS103,
        pages: "23-34",
    },
    {
        title: "Understanding B Lymphocyte Functions in HIV Infection: Implications for Immune Dysfunction and Therapeutic Strategies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Human Immunodeficiency Virus (HIV) infection poses a significant challenge to the immune system, with B lymphocytes playing a central role in orchestrating humoral immune responses. This comprehensive review explores the intricate dynamics of B lymphocyte functions in the context of HIV infection, aiming to elucidate the implications for immune dysfunction and therapeutic strategies.",
        route: EJMVOL2ISS104,
        pages: "35-46",
    },
    {
        title: "Dual Management: Diabetes and Sickle Cell Anemia in Patient Care",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The coexistence of diabetes mellitus (DM) and sickle cell anemia (SCA) presents a complex medical challenge, necessitating an integrated approach to patient care. This review explores the interplay between diabetes and sickle cell anemia, addressing the epidemiology, pathophysiological intricacies, and the compounded complications associated with these comorbidities.",
        route: EJMVOL2ISS105,
        pages: "47-56",
    },
];

export const Ejmvol2iss2 = [
    {
        title: "Platelet Dysfunction in Diabetes Mellitus",
        authors: "Festus Uchechukwu Onuigwe, Helen Ambi, Nkechi Judith Uchechukwu and Emmanuel Ifeanyi Obeagu",
        abstract: "Platelet dysfunction in diabetes mellitus is a multifaceted issue with significant implications for vascular health. The interplay of hyperglycemia, oxidative stress, abnormal lipid profiles, endothelial dysfunction, inflammation, and medications can collectively disrupt platelet function.",
        route: EJMVOL2ISS201,
        pages: "1-17",
    },
    {
        title: "Knowledge of Glycemic Control among Diabetic Patients in Federal University Teaching Hospital, Owerri",
        authors: "Charles Uyiosa Iyabor, Chinelo C.N. Vincent, Chinonso Adaku Korie and Felicia Anyim",
        abstract: "The researchers investigated the knowledge, attitude, practices and hindrances to glycemic control among diabetic patients in Federal University Teaching Hospital, Owerri, Nigeria. The study adopted a descriptive survey research design. The study was guided by four research questions and two hypotheses.",
        route: EJMVOL2ISS202,
        pages: "18-25",
    },
    {
        title: "Immune Checkpoint Inhibitors in Type 1 Diabetes: A New Frontier in Therapy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Type 1 Diabetes (T1D) is a chronic autoimmune disease characterized by the immune-mediated destruction of insulin-producing beta cells in the pancreas. Current therapeutic strategies primarily focus on glycemic control through exogenous insulin administration.",
        route: EJMVOL2ISS203,
        pages: "26-41",
    },
    {
        title: "Breaking Ground: PARP Inhibitors and Their Efficacy in Breast Cancer Stages",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Breast cancer remains a formidable challenge in healthcare, necessitating innovative therapeutic strategies to improve patient outcomes. This abstract provides a comprehensive overview of the groundbreaking role played by Poly (ADP-ribose) polymerase (PARP) inhibitors in the context of breast cancer treatment across different stages.",
        route: EJMVOL2ISS204,
        pages: "42-54",
    },
    {
        title: "BRCA Mastery: Redefining Breast Cancer Care through Cutting-edge Diagnosis and Management",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The discovery of BRCA mutations has revolutionized the landscape of breast cancer care, offering profound insights into its diagnosis and management. This paper aims to summarize the pivotal role of BRCA mutations in reshaping precision medicine approaches and personalized therapies for breast cancer patients.",
        route: EJMVOL2ISS205,
        pages: "55-66",
    },
    {
        title: "Unraveling the Role of Transforming Growth Factor-Beta (TGF-β) in the Progression of Fibroids",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Fibroids, or uterine leiomyomas, represent a prevalent gynecological condition impacting women of reproductive age worldwide. Transforming Growth Factor-Beta (TGF-β) emerges as a critical mediator in the intricate landscape of fibroid development and progression. This abstract encapsulates a comprehensive review elucidating the multifaceted roles of TGF-β in the context of fibroid pathogenesis, encompassing molecular mechanisms and clinical implications.",
        route: EJMVOL2ISS206,
        pages: "67-77",
    },
    {
        title: "Serum Bilirubin Levels in Patients with Acute Appendicitis in Western Uganda: A Multicenter Study",
        authors: "Cikuru Rodrigue Buhendwa, Edyedu Isaac, Idania Hidalgo, Simba Lionel Msafiri, Olivier Iyivuze, Kumbakulu Patrick Kumbowi, Maxwel Duncan Okuku, Khodolwa Stephen Angira, M'mebwa Mtende Luc and Emmanuel Ifeanyi Obeagu",
        abstract: "Globally, acute appendicitis, requiring emergency surgery, occurs in 7 to 22 cases per 10,000 persons. The study aimed to assess the correlation between acute appendicitis and serum bilirubin. This was observational prospective cohort study, conducted in Western Uganda from November 2023 to January 2024, involved 62 adult patients diagnosed with acute appendicitis.",
        route: EJMVOL2ISS207,
        pages: "78-84",
    },
    {
        title: "Effect of Metformin on Vitamin B12 and Homocysteine Levels Among Sudanese with Type 2 Diabetes Mellitus",
        authors: "Sumaia Mohammed Ali AL-Ghaili, Eltayeb Mohammed Ahmed Tayrab, and Emmanuel Ifeanyi Obeagu",
        abstract: "Metformin is the first-line treatment for type 2 diabetes mellitus (T2DM), and hyperglycemia. When taken in high doses or for an extended period, metformin may decrease vitamin B12 (VitB12) level and may increase homocysteine (Hcy) level. There has been no research conducted in Sudan to determine whether metformin has an impact on VitB12 and Hcy levels in individuals with T2DM.",
        route: EJMVOL2ISS208,
        pages: "85-103",
    },
    {
        title: "Interactions between Blood Transfusion and Antiretroviral Medications: Implications for Patient Care",
        authors: "Emmanuel Ifeanyi Obeagu, Ebere Emilia Ayogu and Getrude Uzoma Obeagu",
        abstract: "This review examines the intricate interplay between blood transfusion and antiretroviral medications, shedding light on the implications for patient care in individuals living with HIV. The coexistence of these two critical interventions introduces complexities that extend beyond routine considerations in both transfusion medicine and HIV management.",
        route: EJMVOL2ISS209,
        pages: "104-115",
    },
    {
        title: "Serum Cortisol, Lipid Profile and Microalbumin Levels in Newly Diagnosed Adult Hypertensive with and without Malaria Infection in Nnewi, Nigeria",
        authors: "Nkiruka R Ukibe, Chinedum C Onyenekwe, Emmanuel Ifeanyi Obeagu, Ofia A Kalu, Chinaemelum A Ezeh, Ezinne G Ukibe, Blessing C Ukibe",
        abstract: "Malaria and Hypertension are among the important public health challenges in sub-Saharan Africa including Nigeria. Microalbuminuria and dyslipidemia have been regarded as two predictors of cardiovascular and renal dysfunction.",
        route: EJMVOL2ISS210,
        pages: "116-131",
    },
];

export const Ejmvol1iss1 = [
    {
        title: "Strength in Unity: Building Support Networks for HIV Patients in Uganda",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: 'This comprehensive review delves into the imperative role of building support networks for HIV patients in Uganda, emphasizing the pivotal concept of "Strength in Unity." By examining keywords such as "HIV patients," "support networks," and "strength in unity," the article offers a nuanced exploration of the unique challenges faced by individuals living with HIV/AIDS in the Ugandan context.',
        route: EJMVOL1ISS101,
        pages: "1-16",
    },
];

export const Ejmsvol2iss1 = [
    {
        title: "Ameliorative Tendency of Methanol Leaf Extract of Anthocleista Vogelli on Mercury Chloride Induced Neurotoxicity",
        authors: "Simeon Ikechukwu Egba, Chibuzor Onyinye Okonkwo, Emmanuel Nnaemeka Uhuo, Humphery Chukwudi Omeoga, Uguru Grace Kalu and Emmanuel Ifeanyi Obeagu.",
        abstract: "This study investigated the effects of methanol leaf extract of A. vogelli on some neurotoxicity indices in Wistar rats. Sixteen (16) male rats were randomly grouped into four (4); Group 1: normal control, Group 2: mercury (II) chloride, Group 3: mercury (II) chloride + Diazepam 5 mg/kg and Group 4: mercury (II) chloride + plant extract 400 mg/kg bw.",
        route: EJMSVOL2ISS101,
        pages: "1-9",
    },
    {
        title: "Association between Socio-demographic and Economic characteristics and Packed Cell Volume of the Expectant Mothers Attending Antenatal Clinic in FMC, Abuja.",
        authors: "Nwanganga Ihuoma Ubosi, Gideon Ikechukwu Anyaegbusim Okoroiwu, Golden Njideka Aguzie and Emmanuel Ifeanyi Obeagu.",
        abstract: "The study aimed to assess the nutritional knowledge, practices and packed cell volume of expectant mothers attending antenatal clinic in FMC Abuja. A structured interviewer-administered questionnaire was used. The questionnaire was adequately checked and validated. It was also pretested for sensitivity of questions, ambiguity and suitability of language.",
        route: EJMSVOL2ISS102,
        pages: "10-18",
    },
    {
        title: "Genetic Influence on Breast Cancer Progression: A Molecular Perspective",
        authors: "Abdirizak Farhan Mohamed and Emmanuel Ifeanyi Obeagu",
        abstract: "Breast cancer is a complex and heterogeneous disease with various clinical outcomes, and its progression is influenced by a multitude of factors, including genetic components. This paper explores the molecular perspective of genetic influences on breast cancer progression, aiming to enhance our understanding of the underlying mechanisms driving the disease.",
        route: EJMSVOL2ISS103,
        pages: "19-22",
    },
    {
        title: "Effects of different Extracts of Phyllantus amarus on selected haematological and haemostatic parameters of Leukemic Wistar Rats",
        authors: "Arinze Favour Anyiam, Musa Abidemi Muhibi, Godfrey Iyare, Pius Omoruyi Omosigho, Matthew Folaranmi Olaniyan, Onyinye Cecilia Arinze-Anyiam, Oluwafemi Emmanuel and Emmanuel Ifeanyi Obeagu",
        abstract: "The use of plants, plant extracts or plant-derived chemicals in the treatment of diseases is a therapeutic modality that has been explored for centuries. Cancer is the leading cause of mortality worldwide and most of the chemotherapeutic agents have been reported to exhibit several normal tissue toxicities, accompanied by undesirable side effects.",
        route: EJMSVOL2ISS104,
        pages: "23-43",
    },
    {
        title: "Effects of Long-Term Omeprazole Use on Red Blood Cells: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Omeprazole, a proton pump inhibitor (PPI), stands as a cornerstone in managing acid-related disorders like gastroesophageal reflux disease (GERD) and peptic ulcers. However, the widespread use of omeprazole has raised concerns regarding its potential impact on various physiological systems, including hematological parameters, particularly red blood cells (RBCs).",
        route: EJMSVOL2ISS105,
        pages: "44-52",
    },
];

export const Ejhsvol2iss1 = [
    {
        title: "Assessment of Nutritional Knowledge, Practices and Packed Cell Volume (PCV) of Expectant Mothers Attending Antenatal Clinic in FMC, Abuja.",
        authors: "Nwanganga Ihuoma Ubosi, Gideon Ikechukwu Anyaegbusim Okoroiwu, Golden Njideka Aguzie and Emmanuel Ifeanyi Obeagu",
        abstract: "The study aimed to assess the nutritional knowledge, practices and packed cell volume of expectant mothers attending antenatal clinic in FMC Abuja. A structured interviewer-administered questionnaire was used.",
        route: EJHSVOL2ISS101,
        pages: "1-19",
    },
    {
        title: "Genetic Heterogeneity in Breast Cancer: Implications",
        authors: "Qali Hassan Mohamed and *Emmanuel Ifeanyi Obeagu",
        abstract: "Breast cancer, a heterogeneous disease with diverse molecular subtypes, presents a complex challenge in the realm of oncology. The recognition of genetic heterogeneity within breast cancer has revolutionized our understanding of its etiology and progression.",
        route: EJHSVOL2ISS102,
        pages: "20-24",
    },
    {
        title: "Toxicological Evaluation of Methanol Extract of Securidaca longepedunculata",
        authors: "Abonyi, O, Egba S.I. and Uzoegwu, P.N. and Emmanuel Ifeanyi Obeagu",
        abstract: "The inadequate information on the phytochemistry, toxicity and pharmacological profiles of many medicinal plants has been a major challenge. The present study was undertaken to ascertain the level of toxicity of Securidaca longepedunculata in order to have an informed knowledge of this medicinal plant thereby avoiding the deleterious effects often associated with some of these herbal remedies.",
        route: EJHSVOL2ISS103,
        pages: "25-32",
    },
    {
        title: "Eosinophil-Associated Changes in Neonatal Thymic T Regulatory Cell Populations in HIV-Infected Pregnancies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Human Immunodeficiency Virus (HIV) infection during pregnancy introduces unique challenges to the developing immune system of neonates, influencing various cellular components, including thymic T regulatory (Treg) cells. This review synthesizes existing literature on the intricate relationship between HIV infection, neonatal thymic Tregs, and the potential influence of eosinophils in this context.",
        route: EJHSVOL2ISS104,
        pages: "33-42",
    },
    {
        title: "Maternal Malaria and Neonatal Developmental Outcomes: A Life course Perspective",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Maternal malaria, a pervasive health challenge in malaria-endemic regions, extends its impact beyond immediate maternal and perinatal outcomes. This review explores the life course perspective of maternal malaria and its intricate influence on neonatal developmental outcomes.",
        route: EJHSVOL2ISS105,
        pages: "43-50",
    },
];

export const Ejhsvol2iss2 = [
    {
        title: "Attitude to Glycemic Control among Diabetic Patients in Federal University Teaching Hospital, Owerri",
        authors: "Charles Uyiosa Iyabor, Olayinka Abolore Onasoga and Emmanuel Ifeanyi Obeagu",
        abstract: "The researchers investigated the knowledge, attitude, practices and hindrances to glycemic control among diabetic patients in Federal University Teaching Hospital, Owerri, Nigeria. The study adopted a descriptive survey research design. The study was guided by four research questions and two hypotheses.",
        route: EJHSVOL2ISS201,
        pages: "1-6",
    },
    {
        title: "Addressing Myths and Stigmas: Breaking Barriers in Adolescent Sickle Cell Disease Education",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle Cell Disease (SCD) poses unique challenges for adolescents, encompassing both physical and psychosocial dimensions. Despite its prevalence, pervasive myths and stigmas surrounding SCD persist, contributing to healthcare disparities and impeding proper education. This review article critically examines prevalent misconceptions associated with SCD and explores the resulting stigmas, particularly as they affect adolescents.",
        route: EJHSVOL2ISS202,
        pages: "7-15",
    },

];

export const Ejhvol2iss1 = [
    {
        title: "Assessment of Haemostatic Parameters on Preeclampsia Subjects in Aba, Abia State",
        authors: "Ukamaka C. Edward, Stella Ijeoma Henry and Emmanuel Ifeanyi Obeagu",
        abstract: "The present study assessed the haemostatic parameters in preeclampsia subjects in Aba, Abia state Nigeria. A total of sixty subjects between the ages of eighteen to forty – four years were used for this study. Thirty were preeclampsia subjects who were medically diagnosed while thirty were apparently healthy individuals who served as control subjects.",
        route: EJHVOL2ISS101,
        pages: "1-9",
    },
    {
        title: "Assessment of the Serum Iron Status of Preeclampsia Subjects in Aba, Abia State",
        authors: "Ukamaka C. Edward, Stella Ijeoma Henry and Emmanuel Ifeanyi Obeagu",
        abstract: "The present study assessed the levels of iron status and haemostatic parameters in preeclampsia subjects in Aba, Abia state Nigeria. A total of sixty subjects between the ages of eighteen to forty – four years were used for this study. Thirty were preeclampsia subjects who were medically diagnosed while thirty were apparently healthy individuals who served as control subjects.",
        route: EJHVOL2ISS102,
        pages: "10-18",
    },
    {
        title: "Molecular Basis of Diabetes: A Focus on Red Blood Cells Morphology",
        authors: "Dahir Farax Fartuun and Emmanuel Ifeanyi Obeagu",
        abstract: "Diabetes mellitus, a chronic metabolic disorder characterized by elevated blood glucose levels, poses a significant global health challenge. While much research has centered on the impact of diabetes on major organs such as the pancreas, liver, and kidneys, the intricate relationship between diabetes and red blood cells (RBCs) morphology has gained recognition as a crucial aspect of the disease's pathophysiology.",
        route: EJHVOL2ISS103,
        pages: "19-25",
    },
    {
        title: "Advances in Understanding the Impact of Blood Transfusion on Anemia Resolution in HIV-Positive Children with Severe Malaria: A Comprehensive Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia remains a significant and multifaceted complication in pediatric severe malaria, particularly in the context of coexisting HIV infection. This review critically examines the impact of blood transfusion on anemia resolution in HIV-positive children with severe malaria.",
        route: EJHVOL2ISS104,
        pages: "26-41",
    },
    {
        title: "Genetic Determinants of Red Blood Cell Morphology in Diabetes",
        authors: "Abdirizak Farhan Mohamed and Emmanuel Ifeanyi Obeagu",
        abstract: "This paper explores the genetic determinants of red blood cell (RBC) morphology in diabetes, highlighting their significance in disease progression and complications. Through genetic studies, several variants impacting hemoglobin glycation, oxidative stress response, and RBC membrane structure have been identified.",
        route: EJHVOL2ISS105,
        pages: "42-47",
    },
];

export const Ejhvol2iss2 = [
    {
        title: "Iron Chelators in The Management of Hereditary Hemochromatosis",
        authors: "Festus Uchechukwu Onuigwe, Raphael Aseku Odeh, Nkechi Judith Uchechukwu and Emmanuel Ifeanyi Obeagu",
        abstract: "Hereditary Hemochromatosis (HH) is a genetic disorder characterized by abnormal iron metabolism, leading to excessive iron absorption and deposition in various organs. This iron overload can result in severe complications, including liver cirrhosis, diabetes, and cardiomyopathy.",
        route: EJHVOL2ISS201,
        pages: "1-19",
    },
    {
        title: "The Role of Platelets in Host Defence Against Pathogens",
        authors: "Festus Uchechukwu Onuigwe, Nasiru Maniru, Nkechi Judith Uchechukwu and Emmanuel Ifeanyi Obeagu",
        abstract: "Platelets are a type of inflammatory cell. As a result, they exhibit characteristics similar to those of a traditional cell-mediated immune effector cell. Platelets are known to contain and can be stimulated to release a variety of bioactive molecules.",
        route: EJHVOL2ISS202,
        pages: "20-33",
    },
    {
        title: "Anaemia and Plasmodiasis among children below five years attending OPD at Ishaka Adventist Hospital, Bushenyi District",
        authors: "Anslem O. Ajugwo, Yakubu Sunday Bot, Emmanuel Ifeanyi Obeagu and Moses Mugabiza",
        abstract: "Anaemia impacts on the quality of life of people by inducing such symptoms as loss of stamina, rapid heart rate and shortness of breath. This work was carried out to determine the risk factors and prevalence of anaemia in malaria positive children below five years attending outpatient department at Ishaka Adventist Hospital Bushenyi District.",
        route: EJHVOL2ISS203,
        pages: "34-45",
    },
    {
        title: "Erythropoietin Receptor Signaling in HIV: Implications for Therapy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Human Immunodeficiency Virus (HIV) remains a global health challenge, necessitating continuous exploration of novel therapeutic avenues. Erythropoietin (EPO), traditionally recognized for its role in erythropoiesis, has emerged as a multifaceted cytokine with immunomodulatory properties.",
        route: EJHVOL2ISS204,
        pages: "46-62",
    },
    {
        title: "Integrated Approaches to Anemia and Malaria Care in Children: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia and malaria continue to pose significant health challenges globally, particularly among children in resource-limited settings. This review aims to explore integrated approaches to addressing these interconnected health issues, focusing on the unique challenges they present, the existing interventions, and emerging strategies to enhance care delivery.",
        route: EJHVOL2ISS205,
        pages: "63-69",
    },
    {
        title: "Hematological Horizons: Diabetes Care Considerations in Sickle Cell Anemia - A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This review delves into the intricate relationship between sickle cell anemia and diabetes, shedding light on the unique challenges and considerations in diabetes care for individuals affected by this hemoglobinopathy. Sickle cell anemia, a hereditary blood disorder characterized by abnormal hemoglobin, introduces complexities in managing diabetes that extend beyond those encountered in the general population.",
        route: EJHVOL2ISS206,
        pages: "70-79",
    },
    {
        title: "Assessment of some Haemostatic and Inflammatory Markers in Renal Disease Patients in Specialist Hospital, Sokoto",
        authors: "Hauwa Ali Buhari, Moses Obinna Ike and Emmanuel Ifeanyi Obeagu",
        abstract: "There is a continuous increase in the prevalence of renal disease worldwide as well as in Nigeria and the patient with severe renal failure are at risk of bleeding diathesis. This study was designed to investigate the status of some haemostatic and inflammatory parameters in patients with kidney disease and to compare their effect on different types of kidney disease.",
        route: EJHVOL2ISS207,
        pages: "80-90",
    },
];

export const Ejivol2iss1 = [
    {
        title: "CD8 Dynamics in HIV Infection: A Synoptic Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The complex interplay between CD8 T cells and Human Immunodeficiency Virus (HIV) infection is a pivotal determinant of disease progression and immune responses. This synoptic review provides an in-depth analysis of CD8 dynamics during HIV infection, elucidating key mechanisms, implications for disease progression, and potential therapeutic interventions.",
        route: EJIVOL2ISS101,
        pages: "1-12",
    },
    {
        title: "Optimizing Immune Health in HIV Patients through Nutrition: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Getrude Uzoma Obeagu and Chetachi Blessing Okwuanaso",
        abstract: "Human Immunodeficiency Virus (HIV) infection poses a continual challenge to global health, affecting the immune system and rendering individuals susceptible to opportunistic infections. With the advancements in Antiretroviral Therapy (ART), increasing attention is being directed towards holistic approaches, including nutritional interventions, to optimize immune health in people living with HIV.",
        route: EJIVOL2ISS102,
        pages: "13-33",
    },
    {
        title: "Implications of B Lymphocyte Dysfunction in HIV/AIDS",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The ongoing battle against Human Immunodeficiency Virus (HIV) necessitates a comprehensive understanding of the intricate interplay between various components of the immune system. While the role of T lymphocytes has been extensively explored, recent research has illuminated the critical involvement of B lymphocytes and their dysfunction in the context of HIV/AIDS.",
        route: EJIVOL2ISS103,
        pages: "34-46",
    },
    {
        title: "Maternal Eosinophilic Responses in HIV-Positive Pregnant Women: Unraveling Immunological Dynamics for Improved Maternal-Fetal Health",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Human Immunodeficiency Virus (HIV) infection during pregnancy introduces a complex interplay between the maternal immune system and the imperative need for fetal development. This review delves into the nuanced relationship between maternal eosinophilic responses and HIV infection during pregnancy, offering insights into the immunological dynamics that influence both maternal and fetal outcomes.",
        route: EJIVOL2ISS104,
        pages: "47-64",
    },
    {
        title: "Cytokine Modulation as a Strategy for Type 1 Diabetes Intervention: Unraveling Immunological Complexities for Therapeutic Advancements",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Type 1 diabetes (T1D) stands as a formidable autoimmune challenge, marked by the progressive destruction of insulin-producing pancreatic beta cells. This review explores the potential of cytokine modulation as a strategic intervention in T1D, acknowledging the complex interplay between cytokines, immune cells, and the pancreatic microenvironment.",
        route: EJIVOL2ISS105,
        pages: "65-75",
    },
];

export const Ejlmvol2iss1 = [
    {
        title: "A Critical Appraisal of Erythropoietin Levels in HIV: Clinical Relevance",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This review critically evaluates the intricate relationship between erythropoietin levels and HIV infection, shedding light on its clinical relevance, particularly in the context of anemia and hematopoiesis. Erythropoietin, a key regulator of red blood cell production, plays a pivotal role in maintaining hematological homeostasis.",
        route: EJLMVOL2ISS101,
        pages: "1-13",
    },
    {
        title: "Eosinophilic Changes in Placental Tissues of HIV-Positive Pregnant Women: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection during pregnancy introduces unique challenges to maternal-fetal health, influencing the intricate dynamics of placental tissues. Eosinophilic changes, characterized by alterations in eosinophil numbers, distribution, and functionality, have emerged as significant contributors to the complex immunological landscape of HIV-positive pregnancies.",
        route: EJLMVOL2ISS102,
        pages: "14-32",
    },
    {
        title: "Hematological Changes Following Blood Transfusion in Young Children with Severe Malaria and HIV: A Critical Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This critical review explores the intricate landscape of hematological changes following blood transfusion in young children afflicted by severe malaria and HIV. Severe malaria and HIV individually contribute to hematological abnormalities in pediatric patients, with anemia being a common denominator.",
        route: EJLMVOL2ISS103,
        pages: "33-45",
    },
    {
        title: "Maternal Influence on Infant Immunological Responses to HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This paper critically examines the complex interplay between maternal factors and infant immunological responses to Human Immunodeficiency Virus (HIV). The transmission of HIV from mother to child presents unique challenges that span the prenatal period, labor and delivery, and the postnatal phase, particularly during breastfeeding.",
        route: EJLMVOL2ISS104,
        pages: "46-58",
    },
    {
        title: "Overcoming Hurdles: Anemia Management in Malaria-Affected Childhood",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia and malaria, prevalent health challenges in childhood, often coexist in regions where the burden of these conditions intersects. This review explores the complexities of managing anemia in the context of malaria-affected childhood, investigating the interplay between these two conditions.",
        route: EJLMVOL2ISS105,
        pages: "59-69",
    },
];

export const Ejlmvol2iss2 = [
    {
        title: "Evaluation of Thyroid Hormones in Congestive Heart Failure Subjects Attending Federal University Teaching Hospital Owerri, Imo State",
        authors: "Ukamaka Edward, Esther E. Iwuajoku and Emmanuel Ifeanyi Obeagu",
        abstract: "This study was carried out to evaluate levels of thyroid hormones in patients with congestive heart failure. A total of sixty (60) subjects aged forty-five (45) – sixty-five (65) years were recruited for the study and were divided into two groups subjects with congestive heart failure and control subjects. The data was analysed using SPSS version 21.0. The probability P < 0.05 was statistically significant.",
        route: EJLMVOL2ISS201,
        pages: "1-7",
    },
];

export const Ejsrrvol2iss1 = [
    {
        title: "Quantifying Compliance: Quantity Surveyors as Guardians of Public Funds in Construction Projects: A Comprehensive Review",
        authors: "Ezekiel Oluwaseun Ejiofor Nnadi, George Chinonye Obiechefu and Onyekachi M. Egwuagu",
        abstract: "This study examines the role of Quantity Surveyors (QS) in ensuring compliance and safeguarding public funds in construction projects. QS professionals are responsible for cost estimation, budgeting, tendering, contract management, risk management, and value engineering.",
        route: EJSRRVOL2ISS101,
        pages: "1-12",
    },
    {
        title: "Navigating the Economic Recession: A Comprehensive Examination of The Impact on Nigeria's Construction Industry",
        authors: "Chinonyelum Obainuju Nancy Nze and Ezekiel Oluwaseun Ejiofor Nnadi",
        abstract: "A recession is a significant decline in economic activity that lasts for months or even years, experts equally declare recession as when a nation's economy experiences negative gross domestic product (GDP), rising levels of unemployment, falling retail sales, and contracting measures of income and manufacturing for an extended period.",
        route: EJSRRVOL2ISS102,
        pages: "13-23",
    },
    {
        title: "The Crucial Role of Erythropoietin in Managing Anemia in HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia is a pervasive complication in individuals living with HIV/AIDS, significantly diminishing their well-being and overall health. This comprehensive review explores the intricate relationship between anemia and HIV, emphasizing the pivotal role of erythropoietin (EPO) in managing this hematologic challenge.",
        route: EJSRRVOL2ISS103,
        pages: "24-36",
    },
    {
        title: "Counting Cells, Shaping Fates: CD4/CD8 Ratios in HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The dynamic interplay between CD4 and CD8 T-cell populations stands as a pivotal aspect of immune function, particularly in the context of HIV infection. The balance between CD4 and CD8 T-cell subsets is fundamental for orchestrating an effective immune response. In the realm of HIV, where the virus specifically targets CD4 T cells, understanding the nuances of CD4/CD8 ratios becomes paramount.",
        route: EJSRRVOL2ISS104,
        pages: "37-50",
    },
    {
        title: "Synergistic Care Approaches: Integrating Diabetes and Sickle Cell Anemia Management",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Diabetes mellitus and sickle cell anemia are both complex and chronic conditions that pose significant challenges to healthcare providers and individuals alike. The coexistence of these two conditions, known as sickle cell trait-related diabetes (SCTD), presents a unique set of clinical considerations and management challenges.",
        route: EJSRRVOL2ISS105,
        pages: "51-64",
    },
];

export const Ejnhsvol2iss1 = [
    {
        title: "Genetic And Hormonal Influence; Unraveling Breast Cancer Complexity",
        authors: "Debrah Asiimwe and Emmanuel Ifeanyi Obeagu",
        abstract: "Breast cancer is a disease in which abnormal breast cells grow out of control and form tumors which when not treated tumors spread throughout the body and become fatal. Breast cancer has been the most frequent disease in women worldwide, represents a significant public health concern on a global scale.",
        route: EJNHSVOL2ISS101,
        pages: "1-5",
    },
    {
        title: "Intersection of Genetics and Diabetes Based on Red Blood Cell Morphology",
        authors: "Debrah Asiimwe and Emmanuel Ifeanyi Obeagu",
        abstract: "Diabetes, a complex metabolic disorder, has long been associated with genetic predisposition. Recent research has uncovered intriguing connections between genetic variations and alterations in red blood cell structure and function in individuals with diabetes.",
        route: EJNHSVOL2ISS102,
        pages: "6-12",
    },
    {
        title: "Perception to Computer Based Test Professional Nursing Examination among Nursing Students and Nurse Educators in Imo State",
        authors: "Christiana Ogochukwu Mbama and Chinelo C. N. Vincent",
        abstract: "This research work was carried out to ascertain the perception, attitude and constraints to computer-based test professional nursing examination among nursing students and nurse educators in Imo State. The study pinpointed on the various ways of limiting the constraints to CBT.",
        route: EJNHSVOL2ISS103,
        pages: "13-20",
    },
    {
        title: "The Impact of Erythropoietin on Preeclampsia in HIV-Positive Women: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Preeclampsia, a hypertensive disorder of pregnancy, presents unique challenges for women living with HIV. This review explores the potential impact of erythropoietin (EPO) in managing and preventing preeclampsia among HIV-positive women.",
        route: EJNHSVOL2ISS104,
        pages: "21-31",
    },
    {
        title: "Maternal Eosinophilic Responses in HIV-Positive Pregnant Women: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Human Immunodeficiency Virus (HIV) infection during pregnancy introduces complex alterations in the maternal immune system, impacting various facets of the host response. This comprehensive review focuses on the distinctive role of eosinophils in the immune milieu of HIV-positive pregnant women and explores the implications for vertical transmission and perinatal outcomes.",
        route: EJNHSVOL2ISS105,
        pages: "32-47",
    },
    {
        title: "The Impact of Antioxidants on Ovulation and Conception: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The journey towards conception is a complex and intricate process involving numerous physiological events. Ovulation, the release of a mature egg from the ovary, plays a crucial role in fertility, and disruptions in this process can hinder successful conception.",
        route: EJNHSVOL2ISS106,
        pages: "48-54",
    },
];

export const Ejnhsvol2iss2 = [
    {
        title: "Comparison of the Academic Performance of Nursing Students in Imo State University and Madonna University in 2018 Nursing and Midwifery Council Examination",
        authors: "Chioma Ibe, Clementina Ezenwuba, Chinelo C.N. Vincent, Julia Ibebuike and Solomon Adanma J. Nwagwu",
        abstract: "This study was conducted to compare the influence of social media on academic performance of nursing students in two selected tertiary institutions in Nigeria. A retrospective comparative design was adopted for the study. Relevant literatures were reviewed. The total population of the study is 1,752. Census sampling technique was employed.",
        route: EJNHSVOL2ISS201,
        pages: "1-4",
    },
    {
        title: "Impact on Viral Load Dynamics: Understanding the Interplay between Blood Transfusion and Antiretroviral Therapy in HIV Management",
        authors: "Emmanuel Ifeanyi Obeagu, Ebere Emilia Ayogu and Getrude Uzoma Obeagu",
        abstract: "This review delves into the intricate relationship between blood transfusion and antiretroviral therapy (ART) in the context of HIV management, specifically focusing on their impact on viral load dynamics. Viral load, a critical marker of HIV replication, serves as a key parameter guiding treatment decisions and prognosis.",
        route: EJNHSVOL2ISS202,
        pages: "5-15",
    },
];

export const Ejhivvol2iss1 = [
    {
        title: "Unveiling B Cell Mediated Immunity in HIV Infection: Insights, Challenges, and Potential Therapeutic Avenues",
        authors: "Emmanuel Ifeanyi Obeagu, Arinze Favour Anyiam and Getrude Uzoma Obeagu",
        abstract: "Human Immunodeficiency Virus (HIV) poses a significant global health challenge, necessitating a deeper comprehension of the immune responses engaged in infection. B cell mediated immunity emerges as a pivotal aspect in the battle against HIV, with this review aiming to elucidate the intricacies of antibody responses, viral escape mechanisms, and their implications for vaccine development.",
        route: EJHIVVOL2ISS101,
        pages: "1-15",
    },
    {
        title: "Managing Anemia in HIV through Blood Transfusions: Clinical Considerations and Innovations",
        authors: "Emmanuel Ifeanyi Obeagu, Arinze Favour Anyiam and Getrude Uzoma Obeagu",
        abstract: "Anemia represents a prevalent and multifaceted complication in individuals living with Human Immunodeficiency Virus (HIV), necessitating a comprehensive understanding of its mechanisms and tailored management strategies. This review explores the clinical considerations and innovative approaches in the management of anemia in the context of HIV, with a specific focus on blood transfusions.",
        route: EJHIVVOL2ISS102,
        pages: "16-30",
    },
    {
        title: "Synergistic Effects of Blood Transfusion and HIV in Children Under 5 Years with Severe Malaria: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Arinze Favour Anyiam and Getrude Uzoma Obeagu",
        abstract: "Severe malaria remains a major global health concern, particularly in children under the age of 5. The co-occurrence of Human Immunodeficiency Virus (HIV) adds a layer of complexity to the clinical landscape, often necessitating blood transfusions as a critical intervention.",
        route: EJHIVVOL2ISS103,
        pages: "31-50",
    },
    {
        title: "Erythropoietin Therapy in HIV-Infected Individuals: A Critical Review",
        authors: "Emmanuel Ifeanyi Obeagu, Arinze Favour Anyiam and Getrude Uzoma Obeagu",
        abstract: "Erythropoietin (EPO) therapy has emerged as a promising avenue in addressing anemia associated with HIV infection, a prevalent and clinically significant complication. This critical review examines the current state of knowledge regarding EPO therapy in HIV-infected individuals, aiming to provide a nuanced understanding of its physiological mechanisms, prevalence and etiology of HIV-related anemia, and the impact of EPO administration on clinical outcomes.",
        route: EJHIVVOL2ISS104,
        pages: "51-64",
    },
    {
        title: "Managing Hematological Complications in HIV: Erythropoietin Considerations",
        authors: "Emmanuel Ifeanyi Obeagu, Arinze Favour Anyiam and Getrude Uzoma Obeagu",
        abstract: "Hematological complications, prominently anemia, pose a multifaceted challenge in the healthcare landscape for individuals living with Human Immunodeficiency Virus (HIV). This critical review critically examines the complexities of managing hematological complications in the context of HIV, with a particular emphasis on the considerations and potential benefits of erythropoietin (EPO) therapy.",
        route: EJHIVVOL2ISS105,
        pages: "65-78",
    },
];

export const journals = [
    {
        title: 'Elite Journal of Haematology (EJH)',
        desc: 'Embark on a journey into the intricate world of blood-related issues. EJH is your guide to exploring the forefront of haematological research, unraveling its complexities. Dive into groundbreaking studies that pave the way for advancements in this field.',
        icon: EJH,
        route: "/journals/EJH",
    },
    {
        title: 'Elite Journal of Medicine (EJM)',
        desc: 'At the crossroads of innovation and holistic healthcare, EJM stands as a beacon of breakthroughs in general medicine. Navigate through an impressive landscape of medical advancements, cutting-edge technologies to various treatment modalities.',
        icon: EJM,
        route: "/journals/EJM",
    },
    {
        title: 'Elite Journal of Health Sciences (EJHS)',
        desc: 'EJHS is your gateway to an expansive exploration of health sciences. From unraveling the threads of epidemiology to deciphering the intricacies of healthcare management, this journal offers a multidimensional perspective.',
        icon: EJHS,
        route: "/journals/EJHS",
    },
    {
        title: 'Elite Journal of Medical Sciences (EJMS)',
        desc: 'Discover the pulse of medical knowledge with EJMS. Unveiling the latest findings and trends across various medical specialties and subspecialties, this elite journal is a comprehensive resource for healthcare professionals and researchers.',
        icon: EJMS,
        route: "/journals/EJMS",
    },
    {
        title: 'Elite Journal of Public Health (EJPH)',
        desc: 'EJPH takes on the mantle of addressing public health challenges head-on. Navigate through research dedicated to promoting strategies for community well-being. From preventive measures to community engagement, this journal is a reservoir of knowledge aimed at fostering a healthier society.',
        icon: EJPH,
        route: "/journals/EJPH",
    },
    {
        title: 'Elite Journal of Immunology (EJI)',
        desc: 'Journey into the intricate world of the immune system with this journal. EJI brings together studies that delve into the interesting molecular mechanisms, therapeutic interventions and emerging trends in immunology, shaping the future of immune-related healthcare.',
        icon: EJI,
        route: "/journals/EJI",
    },
    {
        title: 'Elite Journal of Laboratory Medicine (EJLM)',
        desc: 'From groundbreaking methodologies to best practices, this journal is a compendium of advancements in laboratory sciences. Stay informed about the latest techniques and technologies that drive precision in diagnostics and contribute to the evolution of laboratory medicine.',
        icon: EJLM,
        route: "/journals/EJLM",
    },
    {
        title: 'Elite Journal of Nursing and Health Sciences (EJNHS)',
        desc: 'Explore the forefront of nursing science and advancements in health sciences. From evidence-based practices to transformative healthcare delivery models, EJNHS contributes to the ongoing evolution of nursing and its vital role in modern healthcare.',
        icon: EJNHS,
        route: "/journals/EJNHS",
    },
    {
        title: 'Elite Journal of Scientific Research and Review (EJSRR)',
        desc: 'Engage with in-depth explorations of  research methodologies and theories. EJSRR fosters a scholarly environment where rigorous analysis and insightful reviews converge to shape the discourse in scientific research.',
        icon: EJSRR,
        route: "/journals/EJSRR",
    },
    {
        title: 'Elite Journal of HIV (EJHIV)',
        desc: 'This journal focuses on research, prevention and treatment strategies. Navigate through studies that contribute to the global effort to combat the virus(HIV), exploring innovative approaches, breakthroughs and critical insights into the multifaceted dimensions of this public health challenge.',
        icon: EJHIV,
        route: "/journals/EJHIV",
    },
];

export const socialMedia = [
{
    id: "social-media-2",
    Icon: GrMail,
    link: "mailto:contact@epjournals.com"
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