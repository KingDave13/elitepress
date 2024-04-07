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
    EJHVOL2ISS202, EJMVOL2ISS201, EJMVOL2ISS202, EJHSVOL2ISS201, EJNHSVOL2ISS201, EJMVOL2ISS203, EJMVOL2ISS204, EJMVOL2ISS205, EJMVOL2ISS206, EJMVOL2ISS207, EJHSVOL2ISS202, EJMVOL2ISS208, EJPHVOL2ISS201, EJLMVOL2ISS201, EJHVOL2ISS203, EJHVOL2ISS204, EJHVOL2ISS205, EJHVOL2ISS206, EJMVOL2ISS209, EJPHVOL2ISS202, EJPHVOL2ISS203, EJNHSVOL2ISS202, EJMVOL2ISS210, EJHVOL2ISS207, EJMSVOL2ISS201, EJMVOL2ISS301, EJHIVVOL2ISS202, EJHIVVOL2ISS201, EJNHSVOL2ISS203, EJNHSVOL2ISS204, EJMVOL2ISS302, EJMVOL2ISS303, EJMVOL2ISS304, EJMSVOL2ISS202, EJNHSVOL2ISS205, EJNHSVOL2ISS206, EJMSVOL2ISS203, EJNHSVOL2ISS301, EJHIVVOL2ISS203, EJIVOL2ISS201, EJIVOL2ISS202, EJHVOL2ISS301, EJLMVOL2ISS202, EJHVOL2ISS302, EJIVOL2ISS203, EJHSVOL2ISS203, EJSRRVOL2ISS201, EJMVOL2ISS305, EJHSVOL2ISS204, EJLMVOL2ISS203, EJIVOL2ISS204, EJLMVOL2ISS204, EJSRRVOL2ISS202, EJHIVVOL2ISS204, EJPHVOL2ISS204, EJHVOL2ISS303, EJHVOL2ISS304, EJHVOL2ISS305, EJHVOL2ISS306, EJPHVOL2ISS205, EJHIVVOL2ISS205, EJPHVOL2ISS301, EJPHVOL2ISS302, EJMVOL2ISS306, EJHSVOL2ISS205, EJHVOL2ISS307, EJHVOL2ISS308, EJMSVOL2ISS204, EJIVOL2ISS205, EJLMVOL2ISS205, EJMSVOL2ISS205, EJHVOL2ISS309, EJHIVVOL2ISS206, EJNHSVOL2ISS302, EJNHSVOL2ISS303, EJHVOL2ISS310, EJHSVOL2ISS206, EJHVOL2ISS311, EJIVOL2ISS301, EJLMVOL2ISS301, EJPHVOL2ISS303, EJPHVOL2ISS304, EJHSVOL2ISS301, EJHSVOL2ISS302, EJHSVOL2ISS303, EJNHSVOL2ISS304, EJNHSVOL2ISS305, EJHIVVOL2ISS301, EJIVOL2ISS302, EJLMVOL2ISS302, EJSRRVOL2ISS203, EJNHSVOL2ISS306, EJNHSVOL2ISS3007, EJHIVVOL2ISS302, EJHIVVOL2ISS303, EJIVOL2ISS303, EJHVOL2ISS312, EJHSVOL2ISS304, EJMSVOL2ISS301, EJLMVOL2ISS303, EJNHSVOL2ISS308, EJHIVVOL2ISS304, EJHSVOL2ISS305, EJPHVOL2ISS305, EJPHVOL2ISS306, EJPHVOL2ISS307, EJPHVOL2ISS401, EJPHVOL2ISS308, EJMSVOL2ISS302, EJHSVOL2ISS306, EJNHSVOL2ISS401, EJHIVVOL2ISS305, EJHVOL2ISS402, EJHVOL2ISS403, EJHVOL2ISS404, EJHSVOL2ISS401, EJPHVOL2ISS402, EJHVOL2ISS401, EJHVOL2ISS405, EJHVOL2ISS406, EJHVOL2ISS407, EJHVOL2ISS408, EJHVOL2ISS409, EJIVOL2ISS304, EJIVOL2ISS305, EJIVOL2ISS401, EJSRRVOL2ISS204, EJSRRVOL2ISS205, EJNHSVOL2ISS402, EJHIVVOL2ISS306, EJHIVVOL2ISS401, EJHIVVOL2ISS402, EJHIVVOL2ISS403, EJHVOL2ISS410, EJLMVOL2ISS304, EJLMVOL2ISS305, EJSRRVOL2ISS301, EJSRRVOL2ISS302, EJNHSVOL2ISS403, EJHIVVOL2ISS404, EJIVOL2ISS402, EJIVOL2ISS403, EJHSVOL2ISS402, EJHSVOL2ISS403, EJMVOL2ISS401, EJMVOL2ISS402, EJMVOL2ISS403, EJMSVOL2ISS303, EJMSVOL2ISS304, EJNHSVOL2ISS404, EJPHVOL2ISS403, EJPHVOL2ISS404, EJLMVOL2ISS401, EJNHSVOL2ISS405, EJPHVOL2ISS405, EJMSVOL2ISS305, EJPHVOL2ISS406, EJPHVOL2ISS407, EJPHVOL2ISS408, EJHSVOL2ISS404, EJHSVOL2ISS405, EJHVOL2ISS411, EJHVOL2ISS412, EJIVOL2ISS404, EJLMVOL2ISS402, EJSRRVOL2ISS303, EJHIVVOL2ISS405, EJHIVVOL2ISS406, EJLMVOL2ISS403, EJIVOL2ISS405, } 
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJH/VOL2ISS4",
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJM/VOL2ISS4",
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJHS/VOL2ISS4",
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
                name: "Volume 2, Issue 3. (2024)",
                route: "/journals/EJMS/VOL2ISS3",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJMS/VOL2",
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJPH/VOL2ISS4",
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJI/VOL2ISS4",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJI/VOL2",
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJLM/VOL2ISS4",
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJNHS/VOL2ISS4",
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
                name: "Volume 2, Issue 3. (2024)",
                route: "/journals/EJSRR/VOL2ISS3",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJSRR/VOL2",
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJHIV/VOL2ISS4",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 2 (2024)",
                route: "/journals/EJHIV/VOL2",
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
    {
        title: "The Role of L-selectin in Tuberculosis and HIV Coinfection: Implications for Disease Diagnosis and Management",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Tuberculosis (TB) and human immunodeficiency virus (HIV) coinfection pose significant challenges for disease diagnosis and management, with immune dysfunction playing a central role in disease progression. L-selectin, a cell adhesion molecule involved in immune cell trafficking, has emerged as a key player in TB-HIV coinfection, influencing disease pathogenesis and clinical outcomes.",
        route: EJPHVOL2ISS204,
        pages: "35-51",
    },
    {
        title: "Advancements in HIV Prevention: Africa's Trailblazing Initiatives and Breakthroughs",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Africa has long borne the brunt of the global HIV/AIDS epidemic, but it has also emerged as a beacon of innovation and progress in HIV prevention. This review explores the pioneering initiatives and breakthroughs in HIV prevention strategies across the continent.",
        route: EJPHVOL2ISS205,
        pages: "52-63",
    },
];

export const vol2iss3 = [
    {
        title: "Factors that Facilitate the Tendency of Nurses being involved in Risk-Taking Behaviours. to Pathogens in Abia State University Teaching Hospital (ABSUTH) and Federal Medical Centre, Umuahia",
        authors: "Felicia Uzoaru Anyim, Solomon Adanma Nwagwu, Chinelo C.N. Vincent, Julia E. Ibebuike",
        abstract: "Nursing profession is the one that is prone to pathogen attacks Nurses get exposed to pathogens in the course of their daily clinical practices. This happens through contact with blood and other infected fluids and materials. To this end, standard precautions were provided to guide actions against risks. In spite of the guidelines, nurses still suffer illness arising from exposure to pathogens.",
        route: EJPHVOL2ISS301,
        pages: "1-7",
    },
    {
        title: "Promising Strategies for Mitigating HIV Transmission in Uganda",
        authors: "Emmanuel Ifeanyi Obeagu, Matthew Chibunna Igwe and Getrude Uzoma Obeagu",
        abstract: "HIV/AIDS remains a significant public health challenge in Uganda, necessitating effective strategies for its mitigation. This paper explores promising interventions aimed at reducing HIV transmission rates in Uganda. Drawing upon a comprehensive review of literature, the study investigates various multifaceted approaches including behavioral, biomedical, and structural interventions that have shown promise in addressing the complex dynamics of HIV transmission.",
        route: EJPHVOL2ISS302,
        pages: "8-21",
    },
    {
        title: "The Power of Unity: Collective Efforts in Confronting HIV Stigma",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV stigma remains a significant barrier to effective prevention, treatment, and care efforts worldwide. Despite advancements in medical science and increased awareness, the persistence of stigma continues to hinder progress in combating the HIV/AIDS epidemic. This review explores the transformative potential of collective efforts in addressing HIV stigma.",
        route: EJPHVOL2ISS303,
        pages: "22-36",
    },
    {
        title: "From Challenges to Solutions: Groundbreaking HIV Prevention Innovations in Africa",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV/AIDS remains a pressing public health challenge in Africa, with the continent bearing a disproportionate burden of the global epidemic. Despite efforts to curb transmission, traditional prevention strategies encounter barriers in effectively reaching key populations.",
        route: EJPHVOL2ISS304,
        pages: "37-51",
    },
    {
        title: "Culturally Tailored Education: A Key to Adolescent Sickle Cell Disease Prevention",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle cell disease (SCD) is a genetic disorder affecting millions globally, particularly among adolescents in marginalized communities. Despite medical advancements, prevention remains a paramount strategy in managing SCD. Culturally tailored education emerges as a promising approach, addressing the unique needs of adolescents and their communities.",
        route: EJPHVOL2ISS305,
        pages: "52-62",
    },
    {
        title: "Empowering Progress: Impactful Innovations in HIV Prevention in Africa",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "In the battle against HIV/AIDS, Africa has been a pivotal battleground, grappling with a disproportionate burden of the epidemic. This review delves into the landscape of HIV prevention in Africa, focusing on innovative strategies that have catalyzed progress and empowered communities in the fight against the virus.",
        route: EJPHVOL2ISS306,
        pages: "63-77",
    },
    {
        title: "Level of Awareness of Patients to Symptoms of Hypertension in Rural and Urban Hospitals in Umuahia Abia State: A Comparative Study of Rural and Urban Hospitals in Umuahia, Abia State",
        authors: "Pauline Chizomam Uroegbulam, Julia Ibebuike, C.C. Akuwudike, J. Innocent and Chinelo C.N. Vincent",
        abstract: "The research investigated the prevalence and determinants of hypertension in rural and urban hospitals in Umuahia, Abia state. Related literature was reviewed. Four research questions and two null hypotheses were formulated for the study. The descriptive survey design was adopted for the study.",
        route: EJPHVOL2ISS307,
        pages: "78-85",
    },
    {
        title: "Neutrophil Extracellular Traps (NETs) in HIV-Induced Diarrhea: Friend or Foe?",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Neutrophil extracellular traps (NETs) represent a double-edged sword in the context of HIV-induced diarrhea, serving as both defenders and perpetrators of gut mucosal integrity. This review explores the intricate interplay between NETs and HIV-induced diarrhea, shedding light on their dual roles and potential therapeutic implications.",
        route: EJPHVOL2ISS308,
        pages: "86-99",
    },
];

export const vol2iss4 = [
    {
        title: "Climate Change and HIV: Implications for Public Health Strategies",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Climate change poses significant challenges to public health, with its impacts extending far beyond environmental concerns. In recent years, research has increasingly recognized the intersection between climate change and the human immunodeficiency virus (HIV) epidemic. This paper reviews the implications of climate change on HIV transmission dynamics and the corresponding challenges and opportunities for public health strategies.",
        route: EJPHVOL2ISS401,
        pages: "1-14",
    },
    {
        title: "Investigation of Influences of Demographic Factors of Mothers on the Acceptance of COVID-19 Vaccine in Abia State, Nigeria",
        authors: "Obiageri Beatrice Nwokoma, Julia Ibebuike and Chinelo C.N. Vincent",
        abstract: "The study is a comparative study on attitudes and acceptance of Covid-19 vaccine by mothers in Urban communities of Umuahia North and Aba South Local Government Areas of Abia State. The study adopted a comparative survey. The sample size for the study was 421 respondents obtained using simple random and stratified random sampling techniques.",
        route: EJPHVOL2ISS402,
        pages: "15-21",
    },
    {
        title: "Evaluation of Prevalence of Tuberculosis in Five (5) Dots Centres in Abia State, Nigeria",
        authors: "Comfort Okorie, Julia Ibebuike and Chinelo C. N. Vincent",
        abstract: "This study evaluated the prevalence of tuberculosis (TB) in Five (5) DOTS Centres in Abia State, Nigeria. The study adopted a retrospective study design. The target population for the study comprised of 975 tuberculosis patients who registered for tuberculosis treatment (both out and in patients) and were registered in the National Tuberculosis and Leprosy Control Programme (NTBLCP) register at the five DOT facilities of Abia State from 1st January, 2017 to 31st December, 2021.",
        route: EJPHVOL2ISS403,
        pages: "22-30",
    },
    {
        title: "Exploring the Relationship Between Sleep Quality and Academic Performance among Students in Imo State University, Owerri",
        authors: "Priscella O. Chinedu-Eleonu, Somtochukwu Promise Chukwuemeka, Henry C. Amah, Chidimma N. Igwe and Adamu K. Sallau",
        abstract: "The study conducted an investigation into the Relationship Between Sleep Quality and Academic Performance. Imo State University, Owerri. The study adopted a cross-sectional descriptive study design with a population of 8,500 undergraduate students in the faculty of Heath Sciences, Imo State University, Owerri.",
        route: EJPHVOL2ISS404,
        pages: "31-40",
    },
    {
        title: "Prevalence And Anti-Microbial Susceptibility of Urinary Tract Pathogens among Female Students Visiting Kampala International University Teaching Hospital in Bushenyi, Uganda",
        authors: "Onyekachi Splendid Uwakwe, Gorret Mary Abalinda, Theophilus Pius, David Okweny, Patricia Wagana and Emmanuel Ifeanyi Obeagu",
        abstract: "The study was done to determine the prevalence of UTI among female students visiting KIU- TH, determine the etiological agents of UTIs among female students visiting KIU-TH and determine the antibiotic susceptibility patterns of bacteria associated with UTIs. The study was descriptive Cross sectional. Purposive sampling and simple random sampling techniques were used to choose students.",
        route: EJPHVOL2ISS405,
        pages: "41-55",
    },
    {
        title: "Assessment of the Prevalence of Intrauterine Fetal Death (IUFD) Among Pregnant Women Attending Hospitals and Clinics in Takai Local Government, Kano State",
        authors: "Mikail Isyaku Umar, Saidu Aliyu Adam, Hajara Jibrin Liman, Bilal Muazu Yunusa, Ibrahim Aminu, Kabiru Bilkisu Umar, Hauwa Onazasi Umar and Emmanuel Ifeanyi Obeagu",
        abstract: "Stillbirth is one of the most dreaded consequences of pregnancy and is distressing when it occurs without warning in pregnancy. The aim of study was to determine the incidence of intrauterine fetal death (IUFD) among pregnant women and relationship between the risk factors and incidence of IUFD.",
        route: EJPHVOL2ISS406,
        pages: "56-70",
    },
    {
        title: "Modulation of L-selectin Expression in Tuberculosis-HIV Coinfection: Implications for Disease Control",
        authors: "Emmanuel Ifeanyi Obeagu and Emmanuel Chinedu Onuoha",
        abstract: "Tuberculosis (TB) and human immunodeficiency virus (HIV) coinfection presents a complex challenge in global health, characterized by heightened disease severity and therapeutic complexities. Immune dysregulation plays a pivotal role in the pathogenesis of TB-HIV coinfection, influencing disease progression and clinical outcomes.",
        route: EJPHVOL2ISS407,
        pages: "56-74",
    },
    {
        title: "From Awareness to Action: Recommendations for HIV-Positive Pregnant Women",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Preventing mother-to-child transmission (PMTCT) of human immunodeficiency virus (HIV) is a critical component of maternal and child health programs worldwide. HIV-positive pregnant women face unique challenges and considerations in managing their health and preventing vertical transmission of HIV to their infants.",
        route: EJPHVOL2ISS408,
        pages: "75-93",
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

export const Ejmvol2iss3 = [
    {
        title: "Toxic outcomes of ciprofloxacin and gentamicin co-administration and possible ameliorating role for antioxidant vitamins C and E in Wistar Rats",
        authors: "Okwudiri Augustine Ogbonna, Simeon Ikechukwu Egba, Emmanuel Nnaemeka Uhuo, Humphrey Chukwudi Omeoga and Emmanuel Ifeanyi Obeagu",
        abstract: "The research aimed at evaluating the safety or toxicity outcomes of ciprofloxacin and gentamicin co-administration and the possible ameliorating role of vitamin C and E. Wistar albino rats were divided into five groups of five rats in each group. Animals were co-administered ciprofloxacin (7.14 mg/kg) and gentamicin (1.14 mg/kg) and treated with vitamin C (100 mg/kg), vitamin E (1000 iu) or a co-administration of vitamin C and E at the initial dose.",
        route: EJMVOL2ISS301,
        pages: "1-14",
    },
    {
        title: "Influence of Glycaemic Control and Microvascular Complications on Oxidative Stress in Patients with Type 2 Diabetes Mellitus: A Cross-sectional Study in Kano, Nigeria",
        authors: "J. M. Bunza, A. J. Alhassan, M. U. Sani, M. Y. Gwarzo, K. A. Ogunwale, S. Haruna, F. A. Ciroma, M. K. Dallatu, M. L. Jidda, A. A. Ngaski, I. K. Kwaifa, M. Kasimu, B. M. Yale, and K. B. Aliyu and Emmanuel Ifeanyi Obeagu",
        abstract: "Increase in oxidative stress accelerates the risk of cardiovascular events in diabetes mellitus (DM) by inducing inflammatory reactions and endothelial dysfunction This research was aimed to determine the effect of glycaemic control and microvascular complications on oxidative stress biomarkers (SOD, GPx, CAT and MDA) in patients with type 2 DM in Kano, Nigeria.",
        route: EJMVOL2ISS302,
        pages: "15-27",
    },
    {
        title: "Prevalence and Association of Microvascular Complications with some clinical Factors in Patients with Type 2 Diabetes Mellitus in Kano, Nigeria",
        authors: "J. M. Bunza1, A. J. Alhassan, M. U. Sani, M. Y. Gwarzo, K. A. Ogunwale, S. Haruna, F. A. Ciroma, M. K. Dallatu, M. H. Yeldu, M. L. Jidda, A. A. Ngaski, I. K. Kwaifa, M. Kasimu, B. M. Yale, K. B. Aliyu and S. B. Dadzie and Emmanuel Ifeanyi Obeagu",
        abstract: "Diabetes mellitus (DM) is a serious, long-term condition that occurs when raised blood glucose levels persist because the body cannot produce any or adequate insulin or cannot effectively use the insulin it produces.",
        route: EJMVOL2ISS303,
        pages: "28-40",
    },
    {
        title: "Anthropometric Comparison of Cephalic Indices Between Fulani and Hausa Ethnic Groups in Ringim Local Government Area of Jigawa State Nigeria",
        authors: "Mikail Isyaku Umar, Muhammad Ummusalma Lawal, Usman Ismail Hassan, Saadatu Garba Magaga, Aisha Shettima Uthman, Abdullahi Gudaji, Musa Abubakar and Emmanuel Ifeanyi Obeagu",
        abstract: "The Fulani and Hausa are two prominent ethnic groups in West Africa, each with distinct cultural and historical backgrounds. The aim of this study is to compare the cephalic index between two ethnic groups Hausa and Fulani in order to gain a better understanding of the diversity of cranial shapes and sizes.",
        route: EJMVOL2ISS304,
        pages: "41-47",
    },
    {
        title: "Assessment of Serum Cystatin C, Microalbumin Levels and Egfr in HIV Seropositive Individuals based on Age and Gender in NAUTH, Nnewi, Nigeria",
        authors: "Ofia A. Kalu, Nkiruka R. Ukibe, Charles C. Onyenekwe, Rejoice Chinenye Okoyeagu, Wuraola S. Nnaemeka, Amala Joy Onyenekwe, Ezinne G. Ukibe, Blessing C. Ukibe, Victory E. Ukibe and Emmanuel Ifeanyi Obeagu",
        abstract: "Human immunodeficiency virus (HIV) is now a confirmed risk factor for kidney disease with higher burden in persons of African origin. The aim of this study is to assess the renal function of HIV seropositive patients in NAUTH Nnewi using Cystatin C, Microalbuminuria and eGFR as biomarkers.",
        route: EJMVOL2ISS305,
        pages: "48-59",
    },
    {
        title: "The Impact of Hypoxia on the Progression of Uterine Fibroids: Unraveling Molecular Mechanisms and Clinical Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Uterine fibroids, prevalent benign tumors among women of reproductive age, pose significant clinical challenges due to their variable presentations and impact on quality of life. The role of hypoxia, characterized by low oxygen tension, in the progression and pathophysiology of fibroids has garnered increasing attention.",
        route: EJMVOL2ISS306,
        pages: "60-68",
    },
];

export const Ejmvol2iss4 = [
    {
        title: "GATA-1 and HIV-Associated Myelodysplastic Syndromes: Pathogenesis and Treatment Strategies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Myelodysplastic syndromes (MDS) pose a significant clinical challenge in individuals with Human Immunodeficiency Virus (HIV) infection, characterized by dysregulated hematopoiesis and an increased risk of progression to acute myeloid leukemia (AML). Emerging evidence suggests an association between MDS and HIV infection, prompting a deeper exploration of the underlying pathogenic mechanisms and treatment strategies for this hematological complication.",
        route: EJMVOL2ISS401,
        pages: "1-18",
    },
    {
        title: "GATA-1 and Hematopoietic Stem Cell Quiescence in HIV: Implications for Therapy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Hematopoietic stem cell (HSC) quiescence is crucial for maintaining the regenerative capacity of the hematopoietic system, and dysregulation of HSC quiescence has been implicated in hematological disorders, including those associated with Human Immunodeficiency Virus (HIV) infection.",
        route: EJMVOL2ISS402,
        pages: "19-36",
    },
    {
        title: "Understanding the Molecular Basis of Deep Venous Thrombosis in HIV: The GATA-1 Perspective",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Deep venous thrombosis (DVT) represents a significant complication in individuals living with Human Immunodeficiency Virus (HIV), contributing to morbidity and mortality. While the pathogenesis of DVT in HIV is multifactorial, recent research has implicated dysregulation of the transcription factor GATA-1 in mediating thrombotic risk.",
        route: EJMVOL2ISS403,
        pages: "37-54",
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

export const Ejmsvol2iss2 = [
    {
        title: "Drug-Drug Interactions in the Management of Coexisting Sickle Cell Anemia and Diabetes",
        authors: "Emmanuel Ifeanyi Obeagu, Ebere Emilia Ayogu, Chinyere Nkemjika Anyanwu and Getrude Uzoma Obeagu",
        abstract: "This review scrutinizes the intricate landscape of drug-drug interactions in the management of coexisting sickle cell anemia and diabetes, two chronic conditions that often intersect, challenging healthcare providers in their pursuit of optimal patient care.",
        route: EJMSVOL2ISS201,
        pages: "1-9",
    },
    {
        title: "Prevalence of Ankle Injuries Among Sport Participants of Federal University Dutse",
        authors: "Mikail Isyaku Umar, Usman Ismail Hassan, Muhammad Ummusalma Lawal, Usman Ismail Hassan, Saadatu Garba Magaga, Aisha Shettima Uthman, Abdullahi Gudaji, Musa Abubakar and Emmanuel Ifeanyi Obeagu",
        abstract: "Ankle pain is a common condition among sport participants, particularly in sports that involve repetitive jumping, landing, and twisting movements. A study conducted by researchers at the University of Southern California found that the prevalence of ankle injuries among sport participants is higher than previously thought.",
        route: EJMSVOL2ISS202,
        pages: "10-19",
    },
    {
        title: "Hematologic Considerations in Breast Cancer Patients with HIV: Insights into Blood Transfusion Strategies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Breast cancer and HIV coexistence presents a challenging medical landscape, necessitating a thorough exploration of hematologic considerations and blood transfusion strategies. This review delves into the intricate interplay of anemia, thrombocytopenia, neutropenia, and coagulopathy in breast cancer patients with HIV, offering insights into the management of these hematologic complications.",
        route: EJMSVOL2ISS203,
        pages: "20-35",
    },
    {
        title: "Beyond Traditional Screening: Unleashing the Potential of Cancer Antigen 27.29 for Early Breast Cancer Identification",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This paper explores the untapped potential of Cancer Antigen 27.29 (CA 27.29) as a marker for early identification of breast cancer, transcending conventional screening methods. Despite advancements in breast cancer detection, limitations persist in achieving early and accurate diagnoses.",
        route: EJMSVOL2ISS204,
        pages: "36-45",
    },
    {
        title: "A Study on the Effect of Sun Radiation on Human Health (The Skin)",
        authors: "Emmanuel William Jakheng, Queen Samsen Solomon, Shango Patience Emmanuel Jakheng and Emmanuel Ifeanyi Obeagu",
        abstract: "A considerable high number of outdoor workers worldwide are constantly exposed for majority of their working life to sun radiation (SR); this exposure is known to induce various adverse health effects, mainly related to its ultraviolet (UV) component. The skin is one of the principal target organs for both acute and long-term exposure as well as other organs of the body.",
        route: EJMSVOL2ISS205,
        pages: "46-52",
    },
];

export const Ejmsvol2iss3 = [
    {
        title: "Neutrophil-Mediated Vascular Damage and Pulmonary Hypertension in HIV-Associated Cardiovascular Diseases: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Pulmonary hypertension (PH) remains a significant complication in individuals living with human immunodeficiency virus (HIV), contributing to increased morbidity and mortality. Emerging evidence suggests a pivotal role of neutrophil-mediated vascular damage in the pathogenesis of PH in HIV-associated cardiovascular diseases.",
        route: EJMSVOL2ISS301,
        pages: "1-7",
    },
    {
        title: "Identification of Strategies for Managing Pregnancy-Induced Hypertension in Women Receiving Prenatal Care in Federal Medical Center Umuahia Abia State",
        authors: "Odochi Vivien Okoro, J. Egbuchelem, Chinelo C.N. Vincent and Julia Ibebuike",
        abstract: "The primary aim is to examine the prevalence, management, and outcomes of pregnancy-induced hypertension in Umuahia North of Abia state using women who attend antenatal care at the Obstetrics and Gynecology unit of Federal Medical Centre, Umuahia. A retrospective study design was used for the study. The study population consisted of 335 pregnant women attending antenatal care at the center.",
        route: EJMSVOL2ISS302,
        pages: "8-16",
    },
    {
        title: "GATA-1 and Inflammatory Signaling Pathways in HIV-Related Hematological Disorders: Mechanisms and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Hematological disorders are common complications of HIV infection, characterized by immune dysregulation, chronic inflammation, and aberrant hematopoiesis. GATA-1, a critical transcription factor in hematopoiesis, has emerged as a key regulator of inflammatory signaling pathways in the context of HIV-related hematological disorders.",
        route: EJMSVOL2ISS303,
        pages: "17-34",
    },
    {
        title: "GATA-1 and Coagulation Cascade Regulation in HIV-Associated Hematological Complications: Mechanisms and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Hematological complications, including thrombosis and bleeding disorders, are significant contributors to morbidity and mortality in individuals living with Human Immunodeficiency Virus (HIV) infection. Dysregulation of the coagulation cascade plays a pivotal role in the pathogenesis of these complications.",
        route: EJMSVOL2ISS304,
        pages: "35-53",
    },
    {
        title: "Analysis of Anthropometric Parameters of Type 2 Diabetic and Non-Type 2 Diabetic Patient Attending Dutse General Hospital, Jigawa State",
        authors: "Mikail Isyaku Umar, Ibrahim Aminu, Bilal Muazu Yunusa, Hajara Jibrin Liman, Saidu Aliyu Adam, Kabiru Bilkisu Umar, Hauwa Onazasi Umar and Emmanuel Ifeanyi Obeagu",
        abstract: "This study focuses on exploring the prevalence, characteristics, and management practices of type 2 and non-type 2 diabetic patients attending Dutse General Hospital. A cross-sectional study was conducted over a period of six months, involving a sample of type 2 diabetic patients attending Dutse General Hospital. Data was collected using structured questionnaires and medical records review.",
        route: EJMSVOL2ISS305,
        pages: "54-69",
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
    {
        title: "P-Selectin and Immune Activation in HIV: Clinical Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "P-Selectin, a pivotal cell adhesion molecule expressed on activated endothelial cells and platelets, plays a critical role in immune activation and inflammation. In the context of human immunodeficiency virus (HIV) infection, dysregulation of P-Selectin contributes significantly to chronic immune activation, endothelial dysfunction, and heightened cardiovascular risk.",
        route: EJHSVOL2ISS203,
        pages: "16-29",
    },
    {
        title: "Assessment of Serum Cystatin C, Microalbumin Levels and EGFR in HIV Seropositive Individuals in NAUTH, Nnewi, Nigeria",
        authors: "Ofia A. Kalu, Nkiruka R. Ukibe, Charles C. Onyenekwe, Rejoice Chinenye Okoyeagu, Wuraola S. Nnaemeka, Amala Joy Onyenekwe, Ezinne G. Ukibe, Blessing C. Ukibe, Victory E. Ukibe and Emmanuel Ifeanyi Obeagu",
        abstract: "Human immunodeficiency virus (HIV) is now a confirmed risk factor for kidney disease with higher burden in persons of African origin. The aim of this study is to assess the renal function of HIV seropositive patients in NAUTH Nnewi using Cystatin C, Microalbuminuria and eGFR as biomarkers.",
        route: EJHSVOL2ISS204,
        pages: "30-39",
    },
    {
        title: "Hemoglobin Dynamics: Unraveling the Role in Monitoring Breast Cancer Evolution",
        authors: "Emmanuel Ifeanyi Obeagu, I.S.I Ogbu and Getrude Uzoma Obeagu",
        abstract: "Breast cancer remains a complex and multifaceted disease, necessitating the identification of novel biomarkers for effective monitoring of its evolution. This paper explores the evolving role of hemoglobin variations as a potential indicator in understanding and tracking breast cancer progression.",
        route: EJHSVOL2ISS205,
        pages: "40-49",
    },
    {
        title: "Comparative Study of Body Mass Index and Academic Performance among Primary School Pupils in Dutse Local Government Area, Jigawa State",
        authors: "Mikail Isyaku Umar, Aisha Shettima Uthman, Sa'adatu Garba Magaga, Muhammad Ummusalma Lawal, Usman Ismail Hassan, Abdullahi Gudaji and Musa Abubakar",
        abstract: "The prevalence of obesity has significantly increased globally for individuals of all ages, leading to numerous health risks and lower health-related quality of life. Additionally, research has shown a correlation between obesity and academic performance, with inconsistent findings ranging from a strong negative correlation to a weak positive correlation.",
        route: EJHSVOL2ISS206,
        pages: "50-55",
    },
];

export const Ejhsvol2iss3 = [
    {
        title: "The Antibacterial Effect of some Selected Chewing Sticks on Bacteria Isolated from Decayed Tooth",
        authors: "Umar Asiya Imam, Abdulqadir Zahrau and Emmanuel Ifeanyi Obeagu",
        abstract: "The study assessed the antibacterial efficacy of different chewing sticks purchased from market in Sokoto, on selected bacteria isolated from decayed tooth. 10 decayed tooth specimens were collected from Usmanu Danfodiyo University Teaching Hospital Dental Clinic, in Sokoto State. The specimens were processed for isolation of bacteria following standard bacteriological.",
        route: EJHSVOL2ISS301,
        pages: "1-10",
    },
    {
        title: "Bacteriological Study of Wound Infections in Patients Attending Specialist Hospitals Sokoto",
        authors: "Umar Asiya Imam, Abubakar Zayyanu Sokoto and Emmanuel Ifeanyi Obeagu",
        abstract: "Wound infection is the invasion and proliferation by one or more species of microorganisms sometimes resulting in pus formation. The aim of this research was to determine the bacterial profile and antibiotic susceptibility pattern of bacterial pathogens isolated from wound infections in patients attending some selected hospitals in Sokoto metropolis, Northwestern of Nigeria.",
        route: EJHSVOL2ISS302,
        pages: "11-22",
    },
    {
        title: "Erythropoietin and the Immune System: Relevance in HIV Management",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Erythropoietin (EPO) is recognized primarily for its role in stimulating red blood cell production, but emerging evidence suggests its involvement in modulating immune responses. In the context of HIV infection, where anemia and immune dysregulation are common, understanding the interplay between EPO and the immune system is crucial.",
        route: EJHSVOL2ISS303,
        pages: "23-35",
    },
    {
        title: "Anemia and Malaria: Twin Troubles in Pediatric Health",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia and malaria represent twin troubles in pediatric health, particularly in regions where malaria transmission is endemic. These two conditions frequently coexist, exacerbating each other's impact and imposing a significant burden on children's health and well-being.",
        route: EJHSVOL2ISS304,
        pages: "36-43",
    },
    {
        title: "Oxidative Imbalance in Sickle Cell Disease: Unraveling the Molecular Mechanisms",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle cell disease (SCD) stands as one of the most prevalent genetic disorders globally, characterized by the abnormal hemoglobin S (HbS) leading to distorted erythrocyte morphology and consequent microvascular occlusion, hemolysis, and tissue ischemia. Despite advancements in understanding its pathophysiology, the mechanisms underlying the oxidative imbalance observed in SCD remain intricate and multifaceted.",
        route: EJHSVOL2ISS305,
        pages: "44-52",
    },
    {
        title: "Impaired Neutrophil Chemotaxis and HIV-Associated Diarrhea: Unraveling the Connection",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Neutrophil chemotaxis plays a pivotal role in directing the migration of neutrophils towards sites of infection or inflammation, ensuring an effective innate immune response. In the context of HIV infection, dysregulation of neutrophil chemotaxis has been implicated in the pathogenesis of gastrointestinal complications, particularly diarrhea.",
        route: EJHSVOL2ISS306,
        pages: "53-67",
    },
];

export const Ejhsvol2iss4 = [
    {
        title: "Practice to Glycemic Control among Diabetic Patients in Federal University Teaching Hospital, Owerri",
        authors: "Charles Uyiosa Iyabor and Chinelo C.N. Vincent",
        abstract: "The researchers investigated the knowledge, attitude, practices and hindrances to glycemic control among diabetic patients in Federal University Teaching Hospital, Owerri, Nigeria. The study adopted a descriptive survey research design. The study was guided by four research questions and two hypotheses.",
        route: EJHSVOL2ISS401,
        pages: "1-6",
    },
    {
        title: "GATA-1 Mutations and Their Association with HIV-Associated Hematological Disorders: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "GATA-1 mutations have been implicated in various hematological disorders, and emerging evidence suggests their association with HIV infection, leading to a spectrum of hematological abnormalities. This review explores the role of GATA-1 mutations in HIV-associated hematological disorders, elucidating their molecular mechanisms, clinical implications, and therapeutic considerations.",
        route: EJHSVOL2ISS402,
        pages: "7-23",
    },
    {
        title: "GATA-1 and Hematopoietic Stem Cell Maintenance in HIV: Mechanisms and Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Hematopoietic stem cells (HSCs) are pivotal for maintaining blood cell production and immune function, and their dysregulation is implicated in hematological abnormalities observed in Human Immunodeficiency Virus (HIV) infection. GATA-1, a master transcription factor in hematopoietic development, plays a critical role in HSC maintenance, lineage commitment, and differentiation.",
        route: EJHSVOL2ISS403,
        pages: "24-40",
    },
    {
        title: "Comparative Study Between Anthropometry of Head and Academic Performance of Primary School Pupils in Nassarawa Local Government, Kano State",
        authors: "Mikail Isyaku Umar, Bilal Muazu Yunusa, Ibrahim Aminu, Hajara Jibrin Liman, Saidu Aliyu Adam, Hauwa Onazasi Umar and Emmanuel Ifeanyi Obeagu",
        abstract: "This study investigated the potential association between head circumference and academic performance in school pupils (ages 6-12) from both public and private schools within the Nasarawa Local Government Area of Kano State, Nigeria. The aim was to determine relationship between head circumference and academic performance, and sexual dimorphism in relation to head circumference and academic performance.",
        route: EJHSVOL2ISS404,
        pages: "41-53",
    },
    {
        title: "L-selectin in Tuberculosis-HIV Coinfection: Linking Immune Activation to Disease Outcome",
        authors: "Emmanuel Ifeanyi Obeagu and Emmanuel Chinedu Onuoha",
        abstract: "Tuberculosis (TB) and Human Immunodeficiency Virus (HIV) coinfection present a significant challenge to global health, with complex interactions between these pathogens influencing disease outcomes and treatment responses. L-selectin, a key mediator of leukocyte trafficking and immune activation, has emerged as a crucial molecule in the pathogenesis of TB-HIV coinfection.",
        route: EJHSVOL2ISS405,
        pages: "41-58",
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

export const Ejhvol2iss3 = [
    {
        title: "Unraveling the Puzzle: COVID-19's Influence on Hemostasis Mechanisms",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "In the wake of the global COVID-19 pandemic, a growing body of evidence underscores the intricate relationship between the virus and hemostasis mechanisms, unraveling a complex puzzle that demands attention from both the medical and scientific communities. This review article delves into the multifaceted impact of COVID-19 on hemostasis, shedding light on the virus's influence on coagulation pathways, platelet function, and vascular dynamics.",
        route: EJHVOL2ISS301,
        pages: "1-9",
    },
    {
        title: "Platelet Aberrations in HIV Patients: Assessing Impacts of ART",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Platelet abnormalities are prevalent in HIV infection and contribute significantly to the disease's pathophysiology. Antiretroviral therapy (ART) has revolutionized HIV management but its effects on platelet function remain incompletely understood. This review provides a comprehensive overview of platelet aberrations in HIV patients, emphasizing the intricate interplay between HIV infection, ART, and platelet functionality.",
        route: EJHVOL2ISS302,
        pages: "10-24",
    },
    {
        title: "P-Selectin Expression in HIV-Associated Coagulopathy: Implications for Treatment",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection is associated with a heightened risk of coagulopathy, encompassing thrombosis, hemorrhage, and endothelial dysfunction, which significantly impact disease progression and clinical outcomes. P-Selectin, a critical cell adhesion molecule expressed on activated platelets and endothelial cells, plays a pivotal role in mediating leukocyte-endothelial interactions and platelet activation, thus contributing to hemostasis and inflammation.",
        route: EJHVOL2ISS303,
        pages: "25-41",
    },
    {
        title: "Anemia and Erythropoietin: Key Players in HIV Disease Progression",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia is a prevalent complication among individuals living with HIV/AIDS, contributing significantly to disease progression and impacting overall health outcomes. Erythropoietin, a key regulator of red blood cell production, plays a central role in the pathophysiology of HIV-related anemia.",
        route: EJHVOL2ISS304,
        pages: "42-57",
    },
    {
        title: "Oxidative Damage and Vascular Complications in Sickle Cell Anemia: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle cell anemia (SCA) is a hereditary hemoglobinopathy characterized by the presence of abnormal hemoglobin S (HbS), leading to the polymerization of red blood cells and the hallmark sickling phenomenon. While the mechanical fragility and vaso-occlusive properties of sickled erythrocytes have long been recognized as central to the pathophysiology of SCA, emerging evidence suggests a pivotal role for oxidative damage in driving vascular complications.",
        route: EJHVOL2ISS305,
        pages: "58-66",
    },
    {
        title: "Hemolysis Challenges for Pregnant Women with Sickle Cell Anemia: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Pregnancy in women with sickle cell anemia (SCA) presents unique challenges, exacerbated by the hemolytic burden inherent in the condition. This review explores the hemolysis challenges faced by pregnant women with SCA, examining their implications for maternal and fetal health, complications such as vaso-occlusive crises and acute chest syndrome, and strategies for management and prevention.",
        route: EJHVOL2ISS306,
        pages: "67-80",
    },
    {
        title: "Chromium VI: A Silent Aggressor in Sickle Cell Anemia Pathophysiology",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Anemia (SCA), a hereditary hemoglobinopathy, is characterized by distorted red blood cells leading to vaso-occlusive complications and chronic hemolytic anemia. While the genetic basis of SCA is well-established, emerging research points to environmental factors as potential modulators of disease severity.",
        route: EJHVOL2ISS307,
        pages: "81-95",
    },
    {
        title: "Safety and Efficacy of Blood Transfusions in Pregnant Women",
        authors: "Emmanuel Ifeanyi Obeagu, Getrude Uzoma Obeagu and Joseph Obiezu Chukwujekwu Ezeonwumelu",
        abstract: "Blood transfusions play a pivotal role in managing various complications during pregnancy, addressing critical situations such as anemia, hemorrhage, and other obstetric emergencies. This critical review examines the safety and efficacy of blood transfusions in pregnant women, encompassing a comprehensive analysis of available literature and clinical evidence.",
        route: EJHVOL2ISS308,
        pages: "96-106",
    },
    {
        title: "Haemolytic Assessment of Red Blood Cell on Exposure to X-Ray",
        authors: "Emmanuel William Jakheng, Zainab Ahmad, Shango Patience Emmanuel Jakheng and Emmanuel Ifeanyi Obeagu",
        abstract: "This research studied the effect of electromagnetic radiation in forms of X-ray radiation on red blood cell. It is well known that ionizing radiation provokes damage directly by deposition of energy or indirectly by producing oxygen/nitrogen species in DNA double helix in the nucleus.",
        route: EJHVOL2ISS309,
        pages: "107-110",
    },
    {
        title: "Understanding the Intersection of Highly Active Antiretroviral Therapy and Platelets in HIV Patients: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Elham Ali Ibrahim Elamin and Getrude Uzoma Obeagu",
        abstract: "Highly Active Antiretroviral Therapy (HAART) has revolutionized the treatment landscape for HIV/AIDS, significantly enhancing patient outcomes and life expectancy. However, the intricate relationship between HAART and platelet function in HIV patients poses unique challenges. This review delves into the complex interplay between HAART and platelets, focusing on its implications for HIV patients.",
        route: EJHVOL2ISS310,
        pages: "111-117",
    },
    {
        title: "Cognitive and Neurodevelopmental Impact of Blood Transfusion in Children with Severe Malaria and HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Severe malaria and HIV infection are significant causes of morbidity and mortality in children, particularly in resource-limited settings. Blood transfusion is a life-saving intervention commonly utilized in the management of severe anemia secondary to malaria and complications of HIV infection.",
        route: EJHVOL2ISS311,
        pages: "118-135",
    },
    {
        title: "Balancing Act: Glycemic Control and Hematological Considerations in Sickle Cell Diabetes",
        authors: "Emmanuel Ifeanyi Obeagu, Elham Ali Ibrahim Elamin and Getrude Uzoma Obeagu",
        abstract: "Sickle cell disease (SCD) and diabetes mellitus (DM) are two chronic conditions with distinct pathophysiological mechanisms and clinical implications. However, the coexistence of these conditions, known as sickle cell diabetes, presents a complex management challenge characterized by the need to balance glycemic control with hematological considerations.",
        route: EJHVOL2ISS312,
        pages: "136-147",
    },
];

export const Ejhvol2iss4 = [
    {
        title: "Adolescent Peer Education Programs: A Catalyst for Sickle Cell Disease Reduction",
        authors: "Emmanuel Ifeanyi Obeagu, Elham Ali Ibrahim Elamin and Getrude Uzoma Obeagu",
        abstract: "Adolescent peer education programs have emerged as promising avenues for health promotion and disease prevention within communities. Sickle cell disease (SCD) stands as a significant global health concern, particularly in regions where it is prevalent. This paper reviews the potential of adolescent peer education programs as catalysts for reducing the burden of SCD.",
        route: EJHVOL2ISS401,
        pages: "1-9",
    },
    {
        title: "Assessment of Prothrombin Time, Activated Partial Thromboplastin Time and Platelets Count among Children with Schistosomiasis at Alhajalej School, Assalay Locality, White Nile State, Sudan",
        authors: "Elham Elamin, Abdelhakam G. Tamomh, Ahmed M. E. Elkhalifa, Emmanuel Ifeanyi Obeagu, Almanna A. HassbAllah, Ibrahim E. Mustafa and Yunus B. Y. Ahmed",
        abstract: "Schistosomiasis plays critical role to increase the risk for several diseases worldwide particular in developing country, also are related to hematologic changes by disturbing blood flow and endothelial function, which leads to hypercoagulability.",
        route: EJHVOL2ISS402,
        pages: "10-22",
    },
    {
        title: "The Impact of BMI on Treatment Outcomes in Leukemia Patients with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Elham Ali Ibrahim Elamin and Getrude Uzoma Obeagu",
        abstract: "Leukemia remains a significant health concern globally, particularly in populations co-infected with Human Immunodeficiency Virus (HIV). Body Mass Index (BMI) is a crucial indicator of nutritional status and overall health, with emerging evidence suggesting its influence on treatment outcomes in leukemia patients with HIV.",
        route: EJHVOL2ISS403,
        pages: "23-35",
    },
    {
        title: "Exploring Hemovigilance in Blood Transfusion for HIV-Positive Individuals: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Hemovigilance, the systematic monitoring and surveillance of blood transfusion practices, plays a critical role in ensuring the safety and quality of transfusion therapy for individuals living with Human Immunodeficiency Virus (HIV).",
        route: EJHVOL2ISS404,
        pages: "36-50",
    },
    {
        title: "Anemia in HIV: The Role of Erythropoietin in Disease Progression",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia is a common complication in individuals living with HIV (human immunodeficiency virus), contributing significantly to morbidity and mortality. Erythropoietin (EPO), a key hormone in regulating red blood cell production, plays a crucial role in the pathogenesis and management of anemia in HIV-infected individuals.",
        route: EJHVOL2ISS405,
        pages: "51-67",
    },
    {
        title: "ART and Platelet Dynamics: Assessing Implications for HIV Patient Care",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Antiretroviral therapy (ART) has drastically improved the prognosis of HIV infection, yet its effects on platelet dynamics raise concerns regarding hematological complications. Thrombocytopenia, characterized by low platelet counts, is a prevalent complication among HIV-infected individuals receiving ART.",
        route: EJHVOL2ISS406,
        pages: "68-85",
    },
    {
        title: "Hematological Consequences of Erythropoietin in HIV: Clinical Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Hematological complications, particularly anemia, are common in individuals living with HIV and can significantly impact their quality of life and disease outcomes. Erythropoietin, a key regulator of erythropoiesis, has been investigated as a therapeutic intervention to manage anemia in HIV-infected individuals.",
        route: EJHVOL2ISS407,
        pages: "86-104",
    },
    {
        title: "GATA-1 and Hematopoietic Stem Cell Dysfunction in HIV-Related Hematological Malignancies: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Hematological malignancies represent a significant complication in individuals living with HIV/AIDS, posing unique challenges in diagnosis, treatment, and management. GATA-1, a critical transcription factor involved in hematopoietic stem cell (HSC) differentiation and maturation, has garnered attention for its potential role in the pathogenesis of hematological malignancies in the context of HIV infection.",
        route: EJHVOL2ISS408,
        pages: "105-122",
    },
    {
        title: "Exploration of Intricate Relationship between GATA-1 and Anemia in HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia is a prevalent complication in individuals living with HIV/AIDS, contributing significantly to morbidity and mortality. Despite advancements in treatment, anemia remains a persistent challenge in managing HIV/AIDS patients, with multifactorial origins. Recent research has shed light on the role of GATA-1, a pivotal transcription factor governing erythropoiesis, in the pathogenesis of anemia in HIV/AIDS.",
        route: EJHVOL2ISS409,
        pages: "123-140",
    },
    {
        title: "GATA-1 Regulation of Erythroid Progenitor Cell Differentiation in HIV/AIDS: Molecular Insights and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia is a prevalent complication of HIV/AIDS, often stemming from dysregulated erythropoiesis characterized by impaired differentiation of erythroid progenitor cells. GATA-1, a critical transcription factor in erythropoiesis, regulates the expression of genes pivotal for erythroid lineage commitment and maturation.",
        route: EJHVOL2ISS410,
        pages: "141-159",
    },
    {
        title: "GATA-1 Regulation of Coagulation Pathways in HIV-Associated Deep Venous Thrombosis: Molecular Insights and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu, Emmanuel Chinedu Onuoha and Ezekiel Fayiah Hallie",
        abstract: "Deep venous thrombosis (DVT) is a significant complication observed in individuals living with Human Immunodeficiency Virus (HIV), contributing to morbidity and mortality. While the pathogenesis of DVT in HIV is multifactorial, recent research has implicated dysregulation of transcription factor GATA-1 in mediating thrombotic risk.",
        route: EJHVOL2ISS411,
        pages: "160-179",
    },
    {
        title: "The Nexus Between Obesity and Leukemia Progression in HIV-Positive Individuals: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The coexistence of obesity, leukemia, and HIV infection presents a multifaceted challenge in clinical management. This review aims to elucidate the intricate relationship between obesity and leukemia progression in individuals living with HIV.",
        route: EJHVOL2ISS412,
        pages: "180-198",
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

export const Ejivol2iss2 = [
    {
        title: "Dendritic Cell Function in HIV-Infected Pediatric Populations",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Pediatric HIV infection presents unique challenges due to the dynamic interplay between the virus and the developing immune system. Dendritic cells, key regulators of immune responses, play a crucial role in shaping the outcomes of HIV infection in children. This comprehensive review explores the multifaceted functions of dendritic cells in pediatric HIV, unraveling their contributions to immune modulation, antigen presentation and adaptive immunity.",
        route: EJIVOL2ISS201,
        pages: "1-14",
    },
    {
        title: "Harnessing B Cell Responses for Personalized Approaches in HIV Management",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This comprehensive review explores the forefront of HIV management through the lens of personalized medicine, with a specific focus on harnessing B cell responses. The dynamic interplay between the virus and the adaptive immune system, particularly B cells, forms the crux of this examination.",
        route: EJIVOL2ISS202,
        pages: "15-28",
    },
    {
        title: "P-Selectin and Immune Activation in HIV: Clinical Management Strategies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "P-Selectin, a critical cell adhesion molecule implicated in leukocyte-endothelial interactions, has emerged as a significant player in the realm of immune activation in HIV infection. This review article explores the intricate relationship between P-Selectin and immune activation in HIV, with a focus on its clinical management implications.",
        route: EJIVOL2ISS203,
        pages: "29-42",
    },
    {
        title: "Understanding Immune Cell Trafficking in Tuberculosis-HIV Coinfection: The Role of L-selectin Pathways",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Tuberculosis (TB) and human immunodeficiency virus (HIV) coinfection pose significant challenges to global health, with dysregulated immune cell trafficking contributing to disease progression and morbidity. L-selectin, a key cell adhesion molecule, plays a pivotal role in orchestrating immune cell trafficking by mediating leukocyte adhesion to endothelial cells and subsequent migration to inflamed tissues.",
        route: EJIVOL2ISS204,
        pages: "43-59",
    },
    {
        title: "Boosting Immunity in Stressful Times: Strategies and Considerations",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "In times of heightened stress, the delicate interplay between psychological stressors and the immune system assumes paramount importance in maintaining overall health and well-being. This comprehensive review delves into the intricate relationship between stress and the immune system, highlighting strategies and considerations for enhancing immune resilience during challenging periods.",
        route: EJIVOL2ISS205,
        pages: "60-72",
    },
];

export const Ejivol2iss3 = [
    {
        title: "Impact of Maternal Eosinophils on Neonatal Immunity in HIV-Exposed Infants: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Maternal immune factors, including eosinophils, play a pivotal role in shaping neonatal immunity, particularly in the context of HIV-exposed infants. This review explores the impact of maternal eosinophils on neonatal immunity in HIV-exposed infants, focusing on their role in immune modulation, allergy, infection susceptibility, and the implications for breastfeeding practices and public health interventions.",
        route: EJIVOL2ISS301,
        pages: "1-18",
    },
    {
        title: "Immunological Currency: Evaluating CD4/CD8 Ratios in HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The CD4/CD8 ratio is a pivotal marker in evaluating immune health, particularly in the context of Human Immunodeficiency Virus (HIV) infection. This review elucidates the significance of CD4/CD8 ratios as immunological currency in HIV, emphasizing their role in immune monitoring and therapy evaluation.",
        route: EJIVOL2ISS302,
        pages: "19-32",
    },
    {
        title: "Unveiling the Role of Innate Immune Activation in Pediatric HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Pediatric HIV infection presents unique challenges due to the developing immune system and distinctive clinical manifestations compared to adult HIV infection. Innate immune activation, a fundamental component of the early host defense response, plays a crucial role in shaping the pathogenesis and clinical course of HIV in children.",
        route: EJIVOL2ISS303,
        pages: "33-44",
    },
    {
        title: "HIV-Induced Immune Exhaustion in Neonates: A Review of Mechanisms and Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection during early life poses unique challenges to neonatal immune development, potentially leading to immune exhaustion and increased susceptibility to infections. This review explores the mechanisms and implications of HIV-induced immune exhaustion in neonates, focusing on the intricate interplay between viral pathogenesis, host immune responses, and developmental factors.",
        route: EJIVOL2ISS304,
        pages: "45-61",
    },
    {
        title: "Immunodeficiency and Immune Reconstitution in Pediatric HIV: Mechanisms, Challenges, and Therapeutic Strategies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Pediatric HIV infection poses unique challenges to the developing immune system, leading to profound immunodeficiency and impaired immune reconstitution despite antiretroviral therapy (ART).",
        route: EJIVOL2ISS305,
        pages: "62-79",
    },
];

export const Ejivol2iss4 = [
    {
        title: "Programmed Cell Death Protein 1 (PD-1) and Immune Checkpoint Inhibitors in HIV-Related Lymphomas: Current Insights and Future Directions",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection is associated with an increased risk of lymphomas, presenting a therapeutic challenge due to the complex interplay between immune dysfunction and tumorigenesis. The programmed cell death protein 1 (PD-1) pathway has emerged as a pivotal immune checkpoint involved in the pathogenesis of HIV-related lymphomas, offering a promising target for immunotherapy.",
        route: EJIVOL2ISS401,
        pages: "1-17",
    },
    {
        title: "The Impact of Cytotoxic T-Lymphocyte-Associated Protein 4 (CTLA-4) Genetic Variations on HIV Susceptibility and Progression",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Cytotoxic T-lymphocyte-associated protein 4 (CTLA-4) is a critical immune checkpoint molecule involved in regulating T cell activation and tolerance. Genetic variations in CTLA-4 have been implicated in modulating susceptibility to human immunodeficiency virus (HIV) infection and disease progression.",
        route: EJIVOL2ISS402,
        pages: "18-35",
    },
    {
        title: "CD8 T Cells and HIV: Lessons from the Immune Battlefield",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "CD8 T cells are key players in the immune response against HIV, tasked with identifying and eliminating virus-infected cells. However, the battle between HIV and CD8 T cells is complex, marked by a dynamic interplay between viral evasion strategies and host immune responses.",
        route: EJIVOL2ISS403,
        pages: "36-53",
    },
    {
        title: "Impact of L-selectin on Immune Cell Trafficking in Tuberculosis and HIV Coinfection: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Emmanuel Chinedu Onuoha and Ezekiel Fayiah Hallie",
        abstract: "Tuberculosis (TB) and Human Immunodeficiency Virus (HIV) coinfection presents a significant public health challenge, particularly in regions with a high prevalence of both diseases. The immune response to Mycobacterium tuberculosis (M.tb) infection is complex, involving the recruitment and trafficking of immune cells to the site of infection.",
        route: EJIVOL2ISS404,
        pages: "54-72",
    },
    {
        title: "The Impact of Body Mass Index (BMI) on Immune Function in Leukemia Patients Living with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Body mass index (BMI) serves as a crucial indicator of nutritional status and metabolic health, yet its role in modulating immune function, particularly in leukemia patients living with HIV/AIDS, remains poorly understood. This paper explores the intricate relationship between BMI and immune function in this vulnerable population.",
        route: EJIVOL2ISS405,
        pages: "73-92",
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
    {
        title: "CD4/CD8 Ratios: The Immunological Barometer in HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The CD4/CD8 ratio is a pivotal immunological parameter that plays a crucial role in the comprehensive assessment of Human Immunodeficiency Virus (HIV) infection. This review offers a thorough examination of the CD4/CD8 ratio as an immunological barometer, encompassing its historical context, underlying mechanisms, clinical significance, evolving perspectives, and therapeutic implications in the context of HIV.",
        route: EJLMVOL2ISS202,
        pages: "8-20",
    },
    {
        title: "Assessment of Serum Cystatin C, Microalbumin Levels and Egfr in HIV Seropositive Individuals based on Duration in Nauth, Nnewi, Nigeria",
        authors: "Ofia A. Kalu, Nkiruka R. Ukibe, Charles C. Onyenekwe, Rejoice Chinenye Okoyeagu, Wuraola S. Nnaemeka, Amala Joy Onyenekwe, Ezinne G. Ukibe, Blessing C. Ukibe, Victory E. Ukibe and Emmanuel Ifeanyi Obeagu",
        abstract: "Human immunodeficiency virus (HIV) is now a confirmed risk factor for kidney disease with higher burden in persons of African origin. The aim of this study is to assess the renal function of HIV seropositive patients in NAUTH Nnewi using Cystatin C, Microalbuminuria and eGFR as biomarkers.",
        route: EJLMVOL2ISS203,
        pages: "21-29",
    },
    {
        title: "L-selectin and HIV-Induced Immune Cell Trafficking: Implications for Pathogenesis and Therapeutic Strategies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection is characterized by dysregulated immune cell trafficking, contributing to chronic immune activation, inflammation, and disease progression. L-selectin, a key adhesion molecule orchestrating immune cell migration, has emerged as a significant player in the pathogenesis of HIV-induced immune dysfunction.",
        route: EJLMVOL2ISS204,
        pages: "30-46",
    },
    {
        title: "The effects of prolonged term blood transfusion in Postpartum Hemorrhage",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Postpartum hemorrhage (PPH) remains a significant cause of maternal morbidity and mortality globally. In severe cases of PPH, prolonged or repeated blood transfusions are often necessary to restore hemodynamic stability and prevent adverse outcomes. This review aims to comprehensively examine the effects and implications of prolonged-term blood transfusion in postpartum hemorrhage scenarios.",
        route: EJLMVOL2ISS205,
        pages: "47-58",
    },
];

export const Ejlmvol2iss3 = [
    {
        title: "Reactive Oxygen Species and Antioxidant Defense Mechanisms in Sickle Cell Anemia: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle cell anemia (SCA) is a genetic hemoglobinopathy characterized by abnormal hemoglobin S (HbS) production, leading to the formation of sickle-shaped red blood cells. Oxidative stress, resulting from the imbalance between reactive oxygen species (ROS) production and antioxidant defense mechanisms, plays a pivotal role in the pathophysiology of SCA.",
        route: EJLMVOL2ISS301,
        pages: "1-10",
    },
    {
        title: "Insulin Resistance: A Review",
        authors: "Ogbu, I.S.I, Ejike-Odeh, Ezinne Jane and Emmanuel Ifeanyi Obeagu",
        abstract: "Insulin is a peptide hormone produced by the islet cells of the pancreas that has multifarious effects on body metabolism. Insulin resistance is a prevalent medical condition that accompanies type 2 diabetes, obesity, hypertension, metabolic syndrome and polycystic ovarian disease.",
        route: EJLMVOL2ISS302,
        pages: "11-28",
    },
    {
        title: "The Impact of Nuclear Factor Erythroid 2-Related Factor 2 (Nrf2) Activation on Sickle Cell Anemia: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Anemia (SCA) is a hereditary blood disorder characterized by the presence of abnormal hemoglobin, leading to chronic hemolytic anemia, vaso-occlusive crises, and multi-organ damage. Oxidative stress plays a crucial role in the pathophysiology of SCA, exacerbating hemolysis and endothelial dysfunction.",
        route: EJLMVOL2ISS303,
        pages: "29-38",
    },
    {
        title: "GATA-1 and Bone Marrow Failure Syndromes in the Context of HIV Infection: A Review of Molecular Mechanisms and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Bone marrow failure syndromes, characterized by impaired hematopoiesis leading to cytopenias, represent significant complications in individuals living with HIV infection. GATA-1, a master transcription factor crucial for hematopoietic development, has emerged as a key player in the pathogenesis of bone marrow failure syndromes in the context of HIV.",
        route: EJLMVOL2ISS304,
        pages: "39-56",
    },
    {
        title: "GATA-1 as a Modulator of Immune Responses in HIV-Infected Individuals: Implications for Disease Pathogenesis and Therapeutic Interventions",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "GATA-1, known primarily for its role in hematopoiesis, has emerged as a critical modulator of immune responses in Human Immunodeficiency Virus (HIV)-infected individuals. This review explores the multifaceted role of GATA-1 in modulating immune responses during HIV infection, highlighting its impact on T-cell function, cytokine signaling, and inflammatory pathways.",
        route: EJLMVOL2ISS305,
        pages: "57-74",
    },
];

export const Ejlmvol2iss4 = [
    {
        title: "Optimizing Laboratory Layouts for Efficient Civil Engineering in Clinical Services",
        authors: "Sani Aliyu Emmanuel Ifeanyi Obeagu",
        abstract: "Efficiency in clinical services is paramount for ensuring timely diagnosis, treatment, and patient care. Central to this efficiency is the layout of laboratory facilities, which significantly impacts workflow, resource utilization, and ultimately, service delivery. This paper explores the optimization of laboratory layouts within the context of civil engineering principles to enhance efficiency in clinical services.",
        route: EJLMVOL2ISS401,
        pages: "1-6",
    },
    {
        title: "L-Selectin in Tuberculosis-HIV Coinfection: Linking Immune Cell Trafficking to Disease Pathogenesis",
        authors: "Emmanuel Ifeanyi Obeagu and Emmanuel Chinedu Onuoha",
        abstract: "Tuberculosis (TB) and human immunodeficiency virus (HIV) coinfection represent a significant global health challenge, particularly in regions with high prevalence rates of both diseases. Despite advancements in understanding the individual pathogenesis of TB and HIV, the interplay between these pathogens in coinfection remains incompletely elucidated.",
        route: EJLMVOL2ISS402,
        pages: "7-25",
    },
    {
        title: "The Impact of Obesity on Overall Survival in Leukemia Patients Living with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Obesity, leukemia, and HIV/AIDS constitute a challenging clinical triad, each with distinct pathophysiological mechanisms and clinical implications. This paper reviews the intricate relationship between obesity and overall survival in leukemia patients living with HIV.",
        route: EJLMVOL2ISS403,
        pages: "26-45",
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

export const Ejsrrvol2iss2 = [
    {
        title: "Platelet Dysfunction in HIV Patients: Assessing ART Risks",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Platelet dysfunction is increasingly recognized as a significant complication in individuals living with human immunodeficiency virus (HIV), with implications for disease progression, coagulopathy, and cardiovascular risk. While antiretroviral therapy (ART) has transformed the management of HIV by suppressing viral replication and restoring immune function, emerging evidence suggests potential risks associated with ART-induced platelet dysfunction.",
        route: EJSRRVOL2ISS201,
        pages: "1-16",
    },
    {
        title: "P-Selectin and Platelet Activation in HIV: Implications for Antiviral Therapy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Platelet activation and dysregulation of cell adhesion molecules, particularly P-Selectin, play pivotal roles in the pathogenesis of human immunodeficiency virus (HIV) infection, contributing to thrombotic risk and endothelial dysfunction. This review explores the intricate interplay between P-Selectin and platelet activation in HIV, elucidating their mechanistic interactions and clinical implications.",
        route: EJSRRVOL2ISS202,
        pages: "17-41",
    },
    {
        title: "Impact of Blood Transfusion on Viral Load Dynamics in HIV-Positive Neonates with Severe Malaria: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Blood transfusion is a critical intervention in pediatric medicine, particularly in resource-limited settings where malaria and HIV coexist. HIV-positive neonates suffering from severe malaria represent a vulnerable population with complex clinical needs. This review examines the impact of blood transfusion on viral load dynamics in this context.",
        route: EJSRRVOL2ISS203,
        pages: "42-60",
    },
    {
        title: "Programmed Cell Death Protein 1 (PD-1) Signaling in HIV-Associated Cardiovascular Disease: Mechanisms and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Cardiovascular disease (CVD) remains a significant cause of morbidity and mortality in individuals living with HIV/AIDS, despite effective antiretroviral therapy (ART). Emerging evidence suggests a complex interplay between chronic inflammation, immune dysregulation, and endothelial dysfunction in the pathogenesis of HIV-associated CVD.",
        route: EJSRRVOL2ISS204,
        pages: "61-77",
    },
    {
        title: "Cytotoxic T-Lymphocyte-Associated Protein 4 (CTLA-4) Blockade and HIV-Associated Kaposi Sarcoma: A Promising Therapeutic Strategy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Kaposi sarcoma (KS) remains a significant oncologic complication of HIV infection, particularly in regions with high HIV prevalence. Despite advances in antiretroviral therapy (ART), the incidence of KS remains elevated among HIV-infected individuals, highlighting the need for novel therapeutic approaches.",
        route: EJSRRVOL2ISS205,
        pages: "78-94",
    },
];

export const Ejsrrvol2iss3 = [
    {
        title: "Antacid Use in HIV Patients: Implications for Drug Absorption, Metabolism, and Adverse Effects",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Antacid use is prevalent among HIV patients due to gastrointestinal symptoms and the side effects of antiretroviral therapy (ART). This review examines the implications of antacid use in HIV patients, focusing on drug absorption, metabolism, and adverse effects. Antacids, including proton pump inhibitors (PPIs) and histamine-2 receptor antagonists (H2RAs), alter gastric pH, potentially reducing the bioavailability of ART components requiring acidic conditions for absorption.",
        route: EJSRRVOL2ISS301,
        pages: "1-19",
    },
    {
        title: "The Role of GATA-1 in Megakaryocyte Function and Platelet Production During HIV Infection: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "GATA-1, a key transcription factor, plays a crucial role in regulating megakaryocyte function and platelet production. In the context of HIV infection, dysregulation of GATA-1 signaling pathways contributes to hematologic abnormalities, including thrombocytopenia and impaired platelet function.",
        route: EJSRRVOL2ISS302,
        pages: "20-36",
    },
    {
        title: "Relationship between Lip Print Pattern and Academic Performance of Secondary School Students in Dutse Local Government, Dutse, Jigawa State",
        authors: "Mikail Isyaku Umar, Hajara Jibrin Liman, Bilal Muazu Yunusa, Ibrahim Aminu, Saidu Aliyu Adam, Kabiru Bilkisu Umar, Hauwa Onazasi Umar and Emmanuel Ifeanyi Obeagu",
        abstract: "Identity means a set of physical characteristics which could be functional or physical, normal or pathological that defines an individual. Lip prints are usual outlines and cracks, which can be seen like lines and rucks present on human lip. The groove present on the red part of human lips is unique and it is used to determine the identity of a person.",
        route: EJSRRVOL2ISS303,
        pages: "37-48",
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
    {
        title: "Receptor for Advanced Glycation-end Product and Related End Products of Glycation as Biochemical Markers for Microvascular Complications in Patients with type 2 Diabetes Mellitus: A Cross-sectional Study in Kano, Nigeria",
        authors: "J. M. Bunza, A. J. Alhassan, M. U. Sani, M. Y. Gwarzo, K. A. Ogunwale, F. A. Ciroma, M. K. Dallatu, M. H. Yeldu, M. L. Jidda, A. A. Ngaski, I. K. Kwaifa, M. H. Yeldu, M. Kasimu, B. M. Yale, K. B. Aliyu and S. B. Dadzie and Emmanuel Ifeanyi Obeagu",
        abstract: "Persistent hyperglycaemia causes advanced-glycation end products (AGEs) formation with implication in the pathogenesis of microvascular complications in diabetes mellitus (DM). Aim of this research was to assess the plasma level of Receptor for AGEs (RAGE)/AGEs as an index of microvascular complications in patients with type 2 DM in Kano, Nigeria.",
        route: EJNHSVOL2ISS203,
        pages: "16-32",
    },
    {
        title: "B Cell Deficiency and Implications in HIV Pathogenesis: Unraveling the Complex Interplay",
        authors: "Emmanuel Ifeanyi Obeagu, Amaeze Augustine Amaeze, I.S.I. Ogbu and Getrude Uzoma Obeagu",
        abstract: "This review delves into the intricate relationship between B cell deficiency and its profound implications in the pathogenesis of human immunodeficiency virus (HIV) infection. As a key component of the adaptive immune system, B cells orchestrate humoral immunity through antibody production and antigen presentation.",
        route: EJNHSVOL2ISS204,
        pages: "33-46",
    },
    {
        title: "Comparative Study of Patient's Perception with Nursing Care Services in Selected Government Health Facilities in Imo State, Nigeria",
        authors: "Chinonso Adaku Korie, Julia Ibebuike, Chinelo C.N. Vincent, Uche Onyeke, Charles Iyabor, Felicia Anyim and Ihuoma Anukam",
        abstract: "The study is a comparative study of patient's perception and satisfaction with nursing care services in selected government health facilities in Imo State. Literature related to the study were reviewed. The study adopted a comparative survey research designed on a target population of 250 inmates of health facilities in Imo state.",
        route: EJNHSVOL2ISS205,
        pages: "47-52",
    },
    {
        title: "Determination of students related factors that contribute to poor performance in professional Nursing examination among nursing students in Imo State",
        authors: "Scholarstica Chinwe Alagwu and Chinelo C.N. Vincent",
        abstract: "The study was conducted to find out the predictors of poor performance in professional nursing examination among nursing students in Imo State. A descriptive survey design was adopted for the study. Four (4) research questions and four (4) hypotheses were formulated to direct the study. The population comprised of all the students in nursing institutions that have written the professional nursing examination in Imo State.",
        route: EJNHSVOL2ISS206,
        pages: "53-58",
    },
];

export const Ejnhsvol2iss3 = [
    {
        title: "Optimizing Blood Transfusion Protocols for Breast Cancer Patients Living with HIV: A Comprehensive Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "This comprehensive review addresses the intricate challenges surrounding blood transfusion protocols for breast cancer patients living with HIV. The coexistence of these two conditions introduces unique hematologic complications, necessitating a nuanced approach to optimize transfusion strategies.",
        route: EJNHSVOL2ISS301,
        pages: "1-17",
    },
    {
        title: "Protein and Lactose Content of Breast Milk of Lactating Mothers Attending Alex Ekwueme Federal University Teaching Hospital, Abakaliki. Ebonyi State. Nigeria",
        authors: "Innocent Sidney Ikechi Ogbu, Nneamake Chukwukamso Amanze, Kingsley Anya, Ezinne Jane Ejike-Odeh, Chinemerem Chukwuka Ogbu and Emmanuel Ifeanyi Obeagu",
        abstract: "Human breast milk (HBM) is a food designed to fulfill the energy and nutritional requirements of babies. This study was designed to determine the protein and lactose concentration in breast milk. The lactose and protein concentration were estimated using Phenol-Sulphuric Acid and Biuret method respectively.",
        route: EJNHSVOL2ISS302,
        pages: "18-27",
    },
    {
        title: "Effects of Sunscreen on the Facial Skin of Female Students in Federal University Dutse, Jigawa State",
        authors: "Mikail Isyaku Umar, Sa'adatu Garba Magaga, Aisha Shettima Uthman, Muhammad Ummusalma Lawal, Usman Ismail Hassan, Abdullahi Gudaji and Musa Abubakar",
        abstract: "Sunscreens have long been recognized as substances to provide effective protection against the detrimental effects of solar radiation. The deleterious effects of sun exposure can be either acute (e.g. sunburn and drug-induced photo toxicity) or chronic (potential long-term risks of repeated sun exposure).",
        route: EJNHSVOL2ISS303,
        pages: "28-37",
    },
    {
        title: "Neonatal Outcomes in Children Born to Mothers with Severe Malaria, HIV, and Transfusion History: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Neonatal health outcomes are profoundly influenced by maternal conditions such as severe malaria, HIV infection, and transfusion history. This review synthesizes existing literature to elucidate the impact of these maternal factors on neonatal well-being. Severe malaria during pregnancy increases the risk of preterm birth, low birth weight, and neonatal mortality due to placental insufficiency and maternal anemia.",
        route: EJNHSVOL2ISS304,
        pages: "38-58",
    },
    {
        title: "Immune Modulation in HIV-Positive Neonates: Insights and Implications for Clinical Management",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Neonatal HIV infection presents unique challenges in immune modulation and clinical management. This review delves into the intricate dynamics of immune modulation in HIV-positive neonates, exploring mechanisms of vertical transmission, immunological development, and the impact of antiretroviral therapy (ART).",
        route: EJNHSVOL2ISS305,
        pages: "59-72",
    },
    {
        title: "Harnessing the Power of Antioxidants: Enhancing Gamete Quality and Fostering Successful Pregnancy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The intricate interplay between oxidative stress and gamete quality has significant implications for reproductive health and pregnancy outcomes. Oxidative stress, stemming from an imbalance between reactive oxygen species (ROS) production and antioxidant defenses, exerts detrimental effects on sperm and oocyte integrity, compromising fertility.",
        route: EJNHSVOL2ISS306,
        pages: "73-83",
    },
    {
        title: "Unraveling the Role of Eosinophil Extracellular Traps (EETs) in HIV-Infected Pregnant Women: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection during pregnancy presents unique challenges to maternal and fetal health, necessitating a comprehensive understanding of the immune response in this context. Eosinophil Extracellular Traps (EETs) have emerged as critical players in host defense mechanisms, yet their involvement in HIV-infected pregnant women remains poorly elucidated.",
        route: EJNHSVOL2ISS3007,
        pages: "84-99",
    },
    {
        title: "Exploring Eosinophil-Driven Immune Responses in the Uterine Microenvironment of HIV-Positive Pregnant Women: Implications for Maternal-Fetal Health",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection during pregnancy presents a unique challenge to maternal and fetal health, characterized by altered immune responses within the uterine microenvironment. Eosinophils, traditionally recognized for their roles in allergic reactions and parasitic infections, have emerged as crucial modulators of immune homeostasis during gestation.",
        route: EJNHSVOL2ISS308,
        pages: "100-117",
    },
];

export const Ejnhsvol2iss4 = [
    {
        title: "Identification of the Reasons for Examination Malpractice among Student Nurses in Nursing Institutions in Imo State",
        authors: "Obiageli Gace Anoka, Chinelo C.N. Vincent, Julia Ibebuike and C. Onyemachi",
        abstract: "This research work was carried out to investigate the reasons for examination malpractice among students and teachers in the nine nursing institutions Imo State. Examination malpractice is a nagging problem afflicting the education industry in Nigeria. The study was carried out using a descriptive cross sectional survey research design.",
        route: EJNHSVOL2ISS401,
        pages: "1-5",
    },
    {
        title: "Impact of Breastfeeding on Infant Immune Responses in the Context of HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Breastfeeding remains a cornerstone of infant nutrition, providing essential nutrients and immunological benefits critical for infant health and development. However, in the context of HIV infection, the decision to breastfeed poses significant challenges due to the risk of mother-to-child transmission of the virus.",
        route: EJNHSVOL2ISS402,
        pages: "6-23",
    },
    {
        title: "Role of GATA-1 in Megakaryopoiesis and Thrombopoiesis During HIV Infection: Molecular Insights and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Thrombocytopenia is a common hematological complication in individuals living with Human Immunodeficiency Virus (HIV) infection, often resulting from dysregulated megakaryopoiesis and thrombopoiesis. GATA-1, a master regulator of hematopoiesis, plays a crucial role in the differentiation and maturation of megakaryocytes, the precursor cells of platelets.",
        route: EJNHSVOL2ISS403,
        pages: "24-43",
    },
    {
        title: "The Availability of Maternal and Child Healthcare (MCH) Services in Owerri West Local Government Area, Imo State",
        authors: "Flavia Ngozi Ugwuegbu and Julia Ibebuike",
        abstract: "This study's aim was to determine the perception of health providers and consumers on the extent of the availability of maternal and child healthcare (MCH) services in Owerri West Local Government Area of Imo, State Nigeria. The descriptive survey design was adopted in the study, while data were collected from a sample size of 481 respondents comprising 89 healthcare providers and 392 healthcare consumers using the questionnaire instrument.",
        route: EJNHSVOL2ISS404,
        pages: "44-50",
    },
    {
        title: "The Impact of School Library and Social Media on Academic Performance of Student Nurses in Colleges of Nursing in Imo State",
        authors: "Madonna Ekwutosi Ayozie and Julia Ibebuike",
        abstract: "This dissertation work was on the impact of school library and social media on academic achievements of student nurses in colleges of nursing in Imo state. The target population for the study comprised 420 nursing students while the sample size for the study is 205 which were obtained using Taro Yamane formular.",
        route: EJNHSVOL2ISS405,
        pages: "51-62",
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

export const Ejhivvol2iss2 = [
    {
        title: "Challenges and Considerations in Managing Blood Transfusion for Individuals with HIV",
        authors: "Emmanuel Ifeanyi Obeagu, Chinyere Nkemjika Anyanwu and Getrude Uzoma Obeagu",
        abstract: "This review addresses the complex landscape of managing blood transfusions for individuals with HIV, uncovering challenges and considerations that influence patient care. As HIV has evolved into a manageable chronic condition with the advent of antiretroviral therapy (ART), the coexistence of transfusion requirements introduces a nuanced dynamic.",
        route: EJHIVVOL2ISS201,
        pages: "1-17",
    },
    {
        title: "Unraveling the Immunological Nexus: Implications of Monocytes in the Context of HIV and Fibroids - A Critical Review",
        authors: "Emmanuel Ifeanyi Obeagu, Chioma Ibe, Chinyere Nkemjika Anyanwu and Getrude Uzoma Obeagu",
        abstract: "This critical review investigates the intricate interplay between monocytes, HIV, and fibroids, aiming to unravel the immunological complexities that influence disease progression in women. The paper critically examines existing literature, highlighting the multifaceted role of monocytes and their implications on the pathogenesis of both HIV and fibroids.",
        route: EJHIVVOL2ISS202,
        pages: "18-29",
    },
    {
        title: "Breaking Barriers: Mitigating Stigma to Control HIV Transmission",
        authors: "Emmanuel Ifeanyi Obeagu, Getrude Uzoma Obeagu and Amaeze Augustine Amaeze",
        abstract: "Human Immunodeficiency Virus (HIV) remains a significant global health concern, with stigma acting as a critical barrier to effective control and prevention. This review article delves into the complex interplay between stigma and HIV transmission, emphasizing the detrimental impact of societal attitudes on testing, treatment adherence, and healthcare access.",
        route: EJHIVVOL2ISS203,
        pages: "30-42",
    },
    {
        title: "Exploring the Role of L-selectin in HIV-related Immune Exhaustion: Insights and Therapeutic Implications",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV infection leads to progressive immune dysfunction characterized by T cell exhaustion, a state of functional impairment and loss of effector functions. L-selectin, a key adhesion molecule involved in immune cell trafficking and activation, has emerged as a potential regulator of HIV-related immune exhaustion.",
        route: EJHIVVOL2ISS204,
        pages: "43-59",
    },
    {
        title: "Understanding ART and Platelet Functionality: Implications for HIV Patients",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Antiretroviral therapy (ART) has transformed the landscape of HIV/AIDS management, significantly improving patient outcomes. However, the impact of ART on platelet functionality is an emerging area of concern with implications for the health of HIV patients. This review explores the relationship between ART and platelet function, highlighting key findings and clinical implications.",
        route: EJHIVVOL2ISS205,
        pages: "60-73",
    },
    {
        title: "Connecting the Dots: Erythropoietin and Immune Response in HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Erythropoietin (EPO), traditionally recognized for its role in erythropoiesis, has emerged as a pivotal player in immune modulation, expanding its relevance beyond hematopoiesis. In the context of Human Immunodeficiency Virus (HIV) infection, where dysregulated immune responses and hematological abnormalities are prevalent, understanding the intricate relationship between EPO and immune function is paramount.",
        route: EJHIVVOL2ISS206,
        pages: "74-87",
    },
];

export const Ejhivvol2iss3 = [
    {
        title: "Implications of Erythropoietin in the Prevention and Treatment of Preeclampsia in HIV-Positive Pregnant Women",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Preeclampsia remains a significant complication of pregnancy, particularly in HIV-positive women, posing substantial risks to both maternal and fetal health. Erythropoietin (EPO), traditionally recognized for its role in erythropoiesis, has emerged as a promising therapeutic agent with potential implications in the prevention and treatment of preeclampsia.",
        route: EJHIVVOL2ISS301,
        pages: "1-13",
    },
    {
        title: "Assessing Platelet Functionality in HIV Patients Receiving Antiretroviral Therapy: Implications for Risk Assessment",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Antiretroviral therapy (ART) has significantly improved the prognosis of HIV-infected individuals, yet concerns persist regarding its impact on platelet function and subsequent risks of thrombosis and bleeding. This review article explores the intricate relationship between ART and platelet functionality, aiming to provide insights into the mechanisms, clinical implications, and strategies for risk assessment in HIV patients.",
        route: EJHIVVOL2ISS302,
        pages: "14-26",
    },
    {
        title: "Early Infant Diagnosis: Fortifying Efforts to Stop HIV in Newborns",
        authors: "Emmanuel Ifeanyi Obeagu, Elham Ali Ibrahim Elamin and Getrude Uzoma Obeagu",
        abstract: "Early infant diagnosis (EID) is an essential aspect of HIV prevention strategies, particularly in the context of mother-to-child transmission (MTCT). This review assesses the significance of EID in halting the spread of HIV to newborns, exploring current methodologies, challenges, and recent advancements.",
        route: EJHIVVOL2ISS303,
        pages: "27-41",
    },
    {
        title: "Erythropoietin in HIV: Bridging the Gap Between Hematology and Virology",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Erythropoietin (EPO) has long been recognized as a crucial regulator of erythropoiesis, the process of red blood cell production. However, its role extends beyond hematopoiesis, particularly in the context of HIV infection. HIV-associated anemia is a common hematologic manifestation of the virus, contributing significantly to morbidity and mortality in affected individuals.",
        route: EJHIVVOL2ISS304,
        pages: "42-54",
    },
    {
        title: "Exploring the Role of Antacids in the Prevention and Management of Gastrointestinal Complications in HIV Patients: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Gastrointestinal (GI) complications are prevalent among individuals living with HIV, contributing significantly to morbidity and affecting their overall quality of life. Antacids, commonly employed for managing acid-related disorders, have emerged as potential agents for preventing and managing GI complications in HIV patients.",
        route: EJHIVVOL2ISS305,
        pages: "55-68",
    },
    {
        title: "GATA-1 and Immune Dysregulation in HIV/AIDS: Implications for Therapy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Immune dysregulation is a hallmark feature of HIV/AIDS, contributing significantly to disease progression and complications. Despite advancements in antiretroviral therapy (ART), immune dysfunction persists in HIV/AIDS patients, necessitating a deeper understanding of its underlying molecular mechanisms and the identification of novel therapeutic targets.",
        route: EJHIVVOL2ISS306,
        pages: "69-85",
    },
];

export const Ejhivvol2iss4 = [
    {
        title: "GATA-1 and Immune Dysregulation in HIV/AIDS: Implications for Therapy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Immune dysregulation is a hallmark feature of HIV/AIDS, contributing significantly to disease progression and complications. Despite advancements in antiretroviral therapy (ART), immune dysfunction persists in HIV/AIDS patients, necessitating a deeper understanding of its underlying molecular mechanisms and the identification of novel therapeutic targets.",
        route: EJHIVVOL2ISS401,
        pages: "1-17",
    },
    {
        title: "Understanding the Role of GATA-1 in T-Cell Development in the Context of HIV Infection",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "T-cell dysfunction is a hallmark feature of HIV infection, contributing to disease progression and susceptibility to opportunistic infections. GATA-1, a key transcription factor traditionally associated with erythropoiesis, has emerged as a critical regulator of T-cell development and function.",
        route: EJHIVVOL2ISS402,
        pages: "18-34",
    },
    {
        title: "Programmed Cell Death Protein 1 (PD-1) Pathway Modulation in HIV/AIDS: From Bench to Bedside",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "The programmed cell death protein 1 (PD-1) pathway plays a pivotal role in immune regulation and tolerance. In the context of HIV/AIDS, dysregulation of the PD-1 pathway contributes to T-cell exhaustion, immune dysfunction, and disease progression. This review provides a comprehensive examination of PD-1 pathway modulation in HIV/AIDS, spanning from bench to bedside.",
        route: EJHIVVOL2ISS403,
        pages: "35-53",
    },
    {
        title: "Erythropoietin Signaling and its Implications in HIV-Related Anemia: A Comprehensive Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "HIV-related anemia represents a significant hematologic complication of HIV infection, contributing to morbidity and mortality in affected individuals. Erythropoietin (EPO) signaling, a critical regulator of erythropoiesis, plays a pivotal role in the pathogenesis and management of HIV-related anemia.",
        route: EJHIVVOL2ISS404,
        pages: "54-71",
    },
    {
        title: "Role of L-selectin in Tuberculosis-HIV Coinfection: Implications for Immune Activation and Dysfunction",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Tuberculosis (TB) and Human Immunodeficiency Virus (HIV) coinfection pose significant challenges to global health, with intricate interactions between these pathogens influencing immune responses and disease outcomes. L-selectin, a cell adhesion molecule crucial for leukocyte trafficking and immune surveillance, has emerged as a key player in the pathogenesis of TB-HIV coinfection.",
        route: EJHIVVOL2ISS405,
        pages: "72-90",
    },
    {
        title: "A Roadmap for Reducing HIV Transmission from Mother to Child: Strategies, Challenges, and Future Directions",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Mother-to-child transmission (MTCT) of human immunodeficiency virus (HIV) remains a significant global health challenge, particularly in resource-limited settings. Despite remarkable progress in preventing MTCT through the implementation of comprehensive prevention of mother-to-child transmission (PMTCT) programs, gaps still exist, and transmission rates remain unacceptably high in certain regions.",
        route: EJHIVVOL2ISS406,
        pages: "91-109",
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