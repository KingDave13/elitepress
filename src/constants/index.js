import { GrMail } from 'react-icons/gr';
import { EJH, EJHS, EJM, EJMS, EJI, EJPH, EJLM, EJNHS, EJSRR, EJHIV, EJPHVOL2ISS103, EJPHVOL2ISS104, EJPHVOL2ISS105, EJPHVOL2ISS106, EJPHVOL1ISS102, EJPHVOL1ISS101, EJMVOL2ISS102, EJMVOL2ISS103, EJMVOL2ISS104, EJMVOL2ISS105, EJMVOL1ISS101, EJHSVOL2ISS103, EJMSVOL2ISS104, EJHSVOL2ISS104, EJHSVOL2ISS105, EJMSVOL2ISS105, EJHIVVOL2ISS101, EJHIVVOL2ISS102, EJHIVVOL2ISS103, EJHIVVOL2ISS104, EJHIVVOL2ISS105, EJNHSVOL2ISS104, EJNHSVOL2ISS105, EJNHSVOL2ISS106, EJLMVOL2ISS101, EJLMVOL2ISS102, EJLMVOL2ISS103, EJLMVOL2ISS104, EJLMVOL2ISS105, } 
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
                name: "Volume 2, Issue 1, 2024",
                route: "/journals/EJH/VOL2ISS1",
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
                name: "Volume 2, Issue 1, 2024",
                route: "/journals/EJM/VOL2ISS1",
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
                name: "Volume 2, Issue 1, 2024",
                route: "/journals/EJHS/VOL2ISS1",
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
                name: "Volume 2, Issue 1, 2024",
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
                name: "Volume 2, Issue 1, 2024",
                route: "/journals/EJPH/VOL2ISS1",
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
                // name: "Volume 2, Issue 1, 2024",
                // route: "/journals/EJPH/VOL2ISS1",
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
                name: "Volume 2, Issue 1, 2024",
                route: "/journals/EJLM/VOL2ISS1",
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
                name: "Volume 2, Issue 1, 2024",
                route: "/journals/EJNHS/VOL2ISS1",
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
                // name: "Volume 2, Issue 1, 2024",
                // route: "/journals/EJPH/VOL2ISS1",
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
                name: "Volume 2, Issue 1, 2024",
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

export const Ejmvol1iss1 = [
    {
        title: "Strength in Unity: Building Support Networks for HIV Patients in Uganda",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: 'This comprehensive review delves into the imperative role of building support networks for HIV patients in Uganda, emphasizing the pivotal concept of "Strength in Unity." By examining keywords such as "HIV patients," "support networks," and "strength in unity," the article offers a nuanced exploration of the unique challenges faced by individuals living with HIV/AIDS in the Ugandan context.',
        route: EJMVOL1ISS101,
        pages: "1-16",
    },
    // {
    //     title: "Strategies to Combat Mother-to-Child Transmission of HIV in Uganda: A Review",
    //     authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
    //     abstract: "Mother-to-Child Transmission (MTCT) of HIV remains a significant public health concern in Uganda, demanding effective strategies to prevent and mitigate its impact. This comprehensive review critically examines the various approaches and interventions implemented to combat MTCT in the Ugandan context.",
    //     route: EJPHVOL1ISS102,
    //     pages: "12-24",
    // },
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
    // {
    //     title: "Anthropometric Parameters in Health and Diseases: A Review",
    //     authors: "I.S.I. Ogbu and Emmanuel Ifeanyi Obeagu",
    //     abstract: "Anthropometric parameters play a pivotal role in assessing human health and disease states. This paper aims to comprehensively explore the significance of various anthropometric measurements in understanding health outcomes and identifying potential disease risks.",
    //     route: EJPHVOL2ISS106,
    //     pages: "62-70",
    // },
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