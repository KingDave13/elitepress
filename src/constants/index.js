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
    EJHVOL2ISS202, EJMVOL2ISS201, EJMVOL2ISS202, EJHSVOL2ISS201, 
    EJNHSVOL2ISS201, EJMVOL2ISS203, EJMVOL2ISS204, EJMVOL2ISS205, 
    EJMVOL2ISS206, EJMVOL2ISS207, EJHSVOL2ISS202, EJMVOL2ISS208, 
    EJPHVOL2ISS201, EJLMVOL2ISS201, EJHVOL2ISS203, EJHVOL2ISS204, 
    EJHVOL2ISS205, EJHVOL2ISS206, EJMVOL2ISS209, EJPHVOL2ISS202, 
    EJPHVOL2ISS203, EJNHSVOL2ISS202, EJMVOL2ISS210, EJHVOL2ISS207,
    EJMSVOL2ISS201, EJMVOL2ISS301, EJHIVVOL2ISS202, EJHIVVOL2ISS201, 
    EJNHSVOL2ISS203, EJNHSVOL2ISS204, EJMVOL2ISS302, EJMVOL2ISS303, 
    EJMVOL2ISS304, EJMSVOL2ISS202, EJNHSVOL2ISS205, EJNHSVOL2ISS206, 
    EJMSVOL2ISS203, EJNHSVOL2ISS301, EJHIVVOL2ISS203, EJIVOL2ISS201, 
    EJIVOL2ISS202, EJHVOL2ISS301, EJLMVOL2ISS202, EJHVOL2ISS302,
    EJIVOL2ISS203, EJHSVOL2ISS203, EJSRRVOL2ISS201, EJMVOL2ISS305, 
    EJHSVOL2ISS204, EJLMVOL2ISS203, EJIVOL2ISS204, EJLMVOL2ISS204, 
    EJSRRVOL2ISS202, EJHIVVOL2ISS204, EJPHVOL2ISS204, EJHVOL2ISS303, 
    EJHVOL2ISS304, EJHVOL2ISS305, EJHVOL2ISS306, EJPHVOL2ISS205, 
    EJHIVVOL2ISS205, EJPHVOL2ISS301, EJPHVOL2ISS302, EJMVOL2ISS306, 
    EJHSVOL2ISS205, EJHVOL2ISS307, EJHVOL2ISS308, EJMSVOL2ISS204, 
    EJIVOL2ISS205, EJLMVOL2ISS205, EJMSVOL2ISS205, EJHVOL2ISS309,
    EJHIVVOL2ISS206, EJNHSVOL2ISS302, EJNHSVOL2ISS303, 
    EJHVOL2ISS310, EJHSVOL2ISS206, EJHVOL2ISS311, EJIVOL2ISS301, 
    EJLMVOL2ISS301, EJPHVOL2ISS303, EJPHVOL2ISS304, EJHSVOL2ISS301, 
    EJHSVOL2ISS302, EJHSVOL2ISS303, EJNHSVOL2ISS304, 
    EJNHSVOL2ISS305, EJHIVVOL2ISS301, EJIVOL2ISS302, EJLMVOL2ISS302, 
    EJSRRVOL2ISS203, EJNHSVOL2ISS306, EJNHSVOL2ISS3007, 
    EJHIVVOL2ISS302, EJHIVVOL2ISS303, EJIVOL2ISS303, EJHVOL2ISS312, 
    EJHSVOL2ISS304, EJMSVOL2ISS301, EJLMVOL2ISS303, EJNHSVOL2ISS308, 
    EJHIVVOL2ISS304, EJHSVOL2ISS305, EJPHVOL2ISS305, EJPHVOL2ISS306, 
    EJPHVOL2ISS307, EJPHVOL2ISS401, EJPHVOL2ISS308, EJMSVOL2ISS302, 
    EJHSVOL2ISS306, EJNHSVOL2ISS401, EJHIVVOL2ISS305, EJHVOL2ISS402,
    EJHVOL2ISS403, EJHVOL2ISS404, EJHSVOL2ISS401, EJPHVOL2ISS402, 
    EJHVOL2ISS401, EJHVOL2ISS405, EJHVOL2ISS406, EJHVOL2ISS407, 
    EJHVOL2ISS408, EJHVOL2ISS409, EJIVOL2ISS304, EJIVOL2ISS305, 
    EJIVOL2ISS401, EJSRRVOL2ISS204, EJSRRVOL2ISS205, 
    EJNHSVOL2ISS402, EJHIVVOL2ISS306, EJHIVVOL2ISS401, 
    EJHIVVOL2ISS402, EJHIVVOL2ISS403, EJHVOL2ISS410, 
    EJLMVOL2ISS304, EJLMVOL2ISS305, EJSRRVOL2ISS301, 
    EJSRRVOL2ISS302, EJNHSVOL2ISS403, EJHIVVOL2ISS404, 
    EJIVOL2ISS402, EJIVOL2ISS403, EJHSVOL2ISS402, EJHSVOL2ISS403, 
    EJMVOL2ISS401, EJMVOL2ISS402, EJMVOL2ISS403, EJMSVOL2ISS303, 
    EJMSVOL2ISS304, EJNHSVOL2ISS404, EJPHVOL2ISS403, 
    EJPHVOL2ISS404, EJLMVOL2ISS401, EJNHSVOL2ISS405, 
    EJPHVOL2ISS405, EJMSVOL2ISS305, EJPHVOL2ISS406, EJPHVOL2ISS407, 
    EJPHVOL2ISS408, EJHSVOL2ISS404, EJHSVOL2ISS405, EJHVOL2ISS411, 
    EJHVOL2ISS412, EJIVOL2ISS404, EJLMVOL2ISS402, EJSRRVOL2ISS303, 
    EJHIVVOL2ISS405, EJHIVVOL2ISS406, EJLMVOL2ISS403, 
    EJIVOL2ISS405, EJMVOL2ISS404, EJMVOL2ISS405, EJMSVOL2ISS401, 
    EJMSVOL2ISS402, EJHVOL2ISS413, EJIVOL2ISS406, EJLMVOL2ISS404, 
    EJLMVOL2ISS405, EJSRRVOL2ISS304, EJSRRVOL2ISS305, 
    EJNHSVOL2ISS406, EJPHVOL2ISS409, EJPHVOL2ISS410, EJMVOL2ISS406, 
    EJHIVVOL2ISS407, EJHIVVOL2ISS408, EJHSVOL1ISS101, 
    EJHSVOL1ISS102, EJHSVOL1ISS103, EJHSVOL1ISS104, EJHSVOL1ISS105,
    EJPHVOL1ISS103, EJPHVOL1ISS104, EJPHVOL1ISS105, 
    EJPHVOL1ISS106, EJPHVOL1ISS107, EJMVOL2ISS407, EJMSVOL1ISS101, 
    EJNHSVOL1ISS101, EJMVOL1ISS102, EJMVOL1ISS103, EJMSVOL1ISS102,  
    EJMSVOL1ISS103, EJMSVOL1ISS104, EJNHSVOL1ISS102, EJNHSVOL1ISS103,
    EJNHSVOL1ISS104, EJHIVVOL1ISS101, EJHIVVOL1ISS102, EJHIVVOL1ISS103,
    EJLMVOL1ISS101, EJLMVOL1ISS102, EJLMVOL1ISS103, EJMSVOL1ISS105,
    EJLMVOL1ISS104,
    EJHIVVOL1ISS104,
    EJSRRVOL2ISS401,
    EJHVOL2ISS501,
    EJHVOL2ISS502,
    EJHVOL2ISS503,
    EJHSVOL2ISS406,
    EJMVOL2ISS501,
    EJMVOL2ISS502,
    EJMVOL2ISS503,
    EJMVOL2ISS504,
    EJHIVVOL2ISS501,
    EJMSVOL2ISS403,
    EJMSVOL2ISS404,
    EJHVOL2ISS504,
    EJLMVOL2ISS406,
    EJPHVOL2ISS501,
    EJPHVOL2ISS502,
    EJHVOL2ISS505,
    EJHVOL2ISS506,
    EJHIVVOL2ISS502,
    EJHIVVOL2ISS503,
    EJMVOL2ISS505,
    EJHVOL2ISS507,
    EJLMVOL2ISS501,
    EJHVOL2ISS508,
    EJHSVOL2ISS501,
    EJNHSVOL2ISS501,
    EJMVOL2ISS506,
    EJPHVOL2ISS503,
    EJLMVOL2ISS502,
    EJSRRVOL2ISS402,
    EJLMVOL2ISS503,
    EJHVOL2ISS509,
    EJHVOL2ISS510,
    EJPHVOL2ISS504,
    EJNHSVOL2ISS502,
    EJNHSVOL2ISS503,
    EJHSVOL2ISS502,
    EJHSVOL2ISS503,
    EJMSVOL2ISS405,
    EJMVOL2ISS507,
    EJMVOL2ISS508,
    EJPHVOL2ISS505,
    EJPHVOL2ISS506,
    EJNHSVOL2ISS504,
    EJNHSVOL2ISS505,
    EJMSVOL2ISS501,
    EJMSVOL2ISS502,
    EJHIVVOL2ISS504,
    EJPHVOL2ISS507,
    EJMSVOL2ISS503,
    EJHSVOL2ISS504,
    EJMVOL2ISS601,
    EJMVOL2ISS602,
    EJHIVVOL2ISS505,
    EJNHSVOL2ISS601,
    EJHVOL2ISS601,
    EJIVOL2ISS501,
    EJLMVOL2ISS504,
    EJMSVOL2ISS504,
    EJMVOL2ISS603,
    EJHVOL2ISS602,
    EJHIVVOL2ISS601,
    EJLMVOL2ISS505,
    EJPHVOL2ISS601,
    EJPHVOL2ISS602,
    EJHVOL2ISS603,
    EJIVOL2ISS502,
    EJIVOL2ISS503,
    EJLMVOL2ISS601,
    EJMSVOL2ISS505,
    EJHVOL2ISS604,
    EJLMVOL2ISS602,
    EJNHSVOL2ISS602,
    EJNHSVOL2ISS603,
    EJNHSVOL2ISS604,
    EJHSVOL2ISS505,
    EJMSVOL2ISS601,
    EJPHVOL2ISS603,
    EJPHVOL2ISS604,
    EJPHVOL2ISS605,
    EJMVOL2ISS604,
    EJLMVOL2ISS603,
    EJIVOL2ISS504,
    EJIVOL2ISS505,
    EJIVOL2ISS601,
    EJIVOL2ISS602,
    EJLMVOL2ISS604,
    EJLMVOL2ISS605,
    EJMSVOL2ISS602,
    EJHSVOL2ISS601,
    EJHVOL2ISS605,
    EJHVOL2ISS606,
    EJHVOL2ISS701,
    EJMSVOL2ISS603,
    EJMSVOL2ISS604,
    EJMSVOL2ISS605,
    EJHSVOL2ISS603,
    EJHSVOL2ISS604,
    EJHSVOL2ISS605,
    EJMVOL2ISS605,
    EJMVOL2ISS606,
    EJHSVOL2ISS602,
    EJMSVOL2ISS701,
    EJLMVOL2ISS701,
    EJHVOL2ISS702,
    EJMVOL2ISS701,
    EJMVOL2ISS702,
    EJIVOL2ISS603,
    EJNHSVOL2ISS605,
    EJNHSVOL2ISS606,
    EJNHSVOL2ISS701,
    EJNHSVOL2ISS702,
    EJNHSVOL2ISS703, } 
from '../assets';

import { EJPHVOL2ISS101, EJPHVOL2ISS102, EJHVOL2ISS101, EJHVOL2ISS102,
 EJMSVOL2ISS101, EJMSVOL2ISS102, EJHSVOL2ISS101, EJMVOL2ISS101,
 EJHVOL2ISS103, EJHVOL2ISS104, EJHVOL2ISS105, EJHSVOL2ISS102,
 EJMSVOL2ISS103, EJNHSVOL2ISS101, EJNHSVOL2ISS102, EJNHSVOL2ISS103,
  } from '../assets';

import { BsJournals } from "react-icons/bs";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { TiMessages } from "react-icons/ti";
import { IoNewspaperOutline } from "react-icons/io5";

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

export const sideLinks = [
    {
      id: 'journals',
      title: 'Journals',
      route: '/admin/dashboard',
      Icon: BsJournals,
    },
    {
      id: 'requests',
      title: 'Submission Requests',
      route: '/admin/dashboard/requests',
      Icon: VscGitPullRequestNewChanges,
    },
    {
      id: 'messages',
      title: 'Messages',
      route: '/admin/dashboard/messages',
      Icon: TiMessages,
    },
    {
      id: 'newsletter',
      title: 'Newsletter',
      route: '/admin/dashboard/newsletter',
      Icon: IoNewspaperOutline,
    },
];

export const ejhSideLinks = [
    {
        id: "current",
        title: "Current Issue",
        links: [
            {
                name: "Volume 2, Issue 7. (2024)",
                route: "/journals/EJH/VOL2ISS7",
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
                name: "Volume 2, Issue 7. (2024)",
                route: "/journals/EJM/VOL2ISS7",
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
                name: "Volume 2, Issue 6. (2024)",
                route: "/journals/EJHS/VOL2ISS6",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 1 (2023)",
                route: "/journals/EJHS/VOL1",
            }, 
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
                name: "Volume 2, Issue 7. (2024)",
                route: "/journals/EJMS/VOL2ISS7",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 1 (2023)",
                route: "/journals/EJMS/VOL1",
            },
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
                name: "Volume 2, Issue 6. (2024)",
                route: "/journals/EJPH/VOL2ISS6",
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
                name: "Volume 2, Issue 6. (2024)",
                route: "/journals/EJI/VOL2ISS6",
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
                name: "Volume 2, Issue 7. (2024)",
                route: "/journals/EJLM/VOL2ISS7",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 1 (2023)",
                route: "/journals/EJLM/VOL1",
            }, 
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
                name: "Volume 2, Issue 6. (2024)",
                route: "/journals/EJNHS/VOL2ISS6",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 1 (2023)",
                route: "/journals/EJNHS/VOL1",
            }, 
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
                name: "Volume 2, Issue 4. (2024)",
                route: "/journals/EJSRR/VOL2ISS4",
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
                name: "Volume 2, Issue 6. (2024)",
                route: "/journals/EJHIV/VOL2ISS6",
            },
        ],
    },
    {
        id: "archives",
        title: "Archives",
        links: [
            {
                name: "Volume 1 (2023)",
                route: "/journals/EJHIV/VOL1",
            },
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
    {
        title: "Protecting Generations: Early Infant Diagnosis's Role in Preventing HIV Spread",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Preventing the transmission of HIV from mother to child is a global health priority, particularly in regions with high prevalence rates. Early infant diagnosis (EID) serves as a crucial component of prevention strategies, allowing for the timely identification of HIV-exposed infants and initiation of appropriate interventions.",
        route: EJPHVOL1ISS103,
        pages: "25-35",
    },
    {
        title: "Securing Health: The Role of Early Infant Diagnosis in Preventing HIV in Newborns",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Preventing the transmission of HIV from mother to child is a critical global health priority, particularly in regions with high prevalence rates. Early Infant Diagnosis (EID) plays a pivotal role in this endeavor by enabling the timely identification of HIV-exposed infants and facilitating prompt initiation of antiretroviral therapy (ART) and other interventions.",
        route: EJPHVOL1ISS104,
        pages: "47-57",
    },
    {
        title: "Empowering Health Systems: Early Infant Diagnosis's Impact on Preventing HIV in Newborns",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Early Infant Diagnosis (EID) of HIV is an essential component of efforts to prevent mother-to-child transmission (PMTCT) and reduce the burden of pediatric HIV/AIDS. This paper explores the impact of EID on preventing HIV transmission in newborns and its broader implications for health systems strengthening.",
        route: EJPHVOL1ISS105,
        pages: "23-33",
    },
    {
        title: "Peer-to-Peer Learning Networks: Sickle Cell Disease Education Among Adolescents",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle Cell Disease (SCD) presents unique challenges for adolescents, impacting their health, social interactions, and overall well-being. Peer-to-peer learning networks emerge as promising avenues for SCD education among adolescents, offering opportunities for knowledge exchange, support, and empowerment.",
        route: EJPHVOL1ISS106,
        pages: "58-65",
    },
    {
        title: "From Awareness to Action: Encouraging Adolescent Engagement in Sickle Cell Disease Prevention",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle Cell Disease (SCD) remains a significant health challenge, particularly affecting adolescents who encounter unique obstacles in managing the condition. Encouraging adolescent engagement in SCD prevention efforts is crucial for mitigating the disease's impact and enhancing outcomes.",
        route: EJPHVOL1ISS107,
        pages: "66-74",
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
    {
        title: "Climate Change and HIV: Assessing Risks and Vulnerabilities",
        authors: "Emmanuel Ifeanyi Obeagu, Daniel Maada Mami and Getrude Uzoma Obeagu",
        abstract: "Climate change and HIV/AIDS are two global challenges with profound implications for human health and well-being. This review examines the intersection of climate change and HIV/AIDS, assessing the risks and vulnerabilities associated with their interactions. We explore how environmental factors influenced by climate change, such as temperature variability, extreme weather events, and ecological disruptions, impact HIV transmission dynamics.",
        route: EJPHVOL2ISS409,
        pages: "94-110",
    },
    {
        title: "Climate Variability and HIV: Implications for Control Measures",
        authors: "Emmanuel Ifeanyi Obeagu, Daniel Maada Mami and Getrude Uzoma Obeagu",
        abstract: "Climate variability presents a complex and evolving challenge to global health, with implications for the transmission dynamics of HIV/AIDS. This review examines the intersection of climate variability and HIV/AIDS, exploring the ways in which environmental changes influenced by climate variability impact the spread of the virus.",
        route: EJPHVOL2ISS410,
        pages: "111-127",
    },
];

export const vol2iss5 = [
    {
        title: "HIV and Hemophilia: Addressing Stigma and Discrimination",
        authors: "Emmanuel Ifeanyi Obeagu and Sharon Seni Itoe Ngomo",
        abstract: "Hemophilia and HIV, two chronic conditions with unique challenges, intersect in individuals who are doubly burdened by both their genetic predisposition to bleeding disorders and the acquired immunodeficiency virus. Beyond the physiological complexities of managing these conditions, individuals with hemophilia and HIV often face stigma and discrimination, exacerbating their already challenging circumstances.",
        route: EJPHVOL2ISS501,
        pages: "1-20",
    },
    {
        title: "Isolation and Identification of Escherichia Coli from Students' Toilet Seats in the University of Buea Restrooms",
        authors: "Sharon Seni Itoe Ngomo and Jerome Fru Cho",
        abstract: "Exposure to enteric pathogens through direct contact with contaminated toilet surfaces is one of the major sources of disease transmission in a public setting. Toilet seats are potential carriers of pathogenic microorganisms if used under poor hygienic conditions. The emergence and spread of Escherichia coli (E. coli) is a global health concern.",
        route: EJPHVOL2ISS502,
        pages: "21-31",
    },
    {
        title: "The Impact of Howell-Jolly Bodies on Quality of Life in HIV Patients: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Howell-Jolly bodies (HJBs), typically associated with functional asplenia or splenic dysfunction, have gained recognition as potential indicators of hematological abnormalities in HIV patients. The morphological features of HJBs, characterized by small, round, basophilic inclusions within erythrocytes, signify underlying abnormalities in erythropoiesis and splenic function.",
        route: EJPHVOL2ISS503,
        pages: "32-42",
    },
    {
        title: "Challenges to the Implementation of the National School Feeding Programme in Primary Schools in Imo and Anambra States",
        authors: "Ngozi Ihebuzo Peters and C. N. N. Vincent",
        abstract: "A survey conducted by the United Nations Children's Fund (UNICEF) in 2019 indicates that the population of out-of-school children in Nigeria has risen from 10.5 million to 13.2 million, the highest in the world. To address the above issues, the provision of School Feeding Programmes (SFPs) has been a key factor in achieving ideal child growth, improved academic performance, and increased enrolment and focus.",
        route: EJPHVOL2ISS504,
        pages: "43-50",
    },
    {
        title: "Counselling Services for Adolescents: Nurturing Mental Health in Sickle Cell Disease Education",
        authors: "Emmanuel Ifeanyi Obeagu, Mariita Nchaga Asuma and Muhammad Tukur",
        abstract: "Adolescents living with Sickle Cell Disease (SCD) face unique challenges that can impact their mental health and overall well-being. Mental health issues, including depression, anxiety, and stress, are prevalent among this population, stemming from the burden of managing a chronic illness, coping with pain, and navigating the psychosocial complexities associated with the disease.",
        route: EJPHVOL2ISS505,
        pages: "51-57",
    },
    {
        title: "The Role of Parents and Teachers: A Collaborative Approach to Sickle Cell Disease Education",
        authors: "Emmanuel Ifeanyi Obeagu, Muhammad Tukur and Mariita Nchaga Asuma",
        abstract: "Sickle Cell Disease (SCD) presents multifaceted challenges for children and adolescents, impacting their physical health, academic performance, and psychosocial well-being. Parents and teachers play pivotal roles in supporting children with SCD and fostering understanding and acceptance within educational settings.",
        route: EJPHVOL2ISS506,
        pages: "58-65",
    },
    {
        title: "Prevalence of Bacterial Urinary Tract Infection among HIV-Positive Patients on ART Attending Government Tertiary Hospital in Enugu",
        authors: "Nnaemeka Chineze Eze, Ngozi Felicia Onyemelukwe and Emmanuel Ifeanyi Obeagu",
        abstract: "People living with Human Immunodeficiency Virus (HIV) are more likely to develop urinary tract infection (UTI) due to the suppression of their immunity. In order to determine the prevalence of UTI in HIV-positive patients attending Government Tertiary Hospital in Enugu, a total of 280 candidates were investigated between November 2018 and January 2019 using standard microbiological techniques.",
        route: EJPHVOL2ISS507,
        pages: "66-77",
    },
];

export const vol2iss6 = [
    {
        title: "Dietary Pattern and Nutritional Status of in-School Adolescents of Selected Secondary Schools in Yala Local Government Area of Cross River State, Nigeria",
        authors: "*Elizabeth Libuo-Beshel Nji, James Agu Oko, Fidelis Takim Otu, Peter Bassey Enyievi, Awafung Emmanuel Adie and Emmanuel Ifeanyi Obeagu",
        abstract: "Health status of adolescents is a cumulative effect of the health and nutritional problems occurring during early childhood as well as those originating during adolescent period. The objective of this study was to determine the dietary pattern and nutritional status of in school adolescents in Yala Local Government Area, Cross River State.",
        route: EJPHVOL2ISS601,
        pages: "1-17",
    },
    {
        title: "Knowledge, Attitude and Practices of Food Hygiene and Safety among Stationary Food Vendors in Major Markets in Calabar Metropolis, Cross River State, Nigeria",
        authors: "Esther Onyeje Ujah, Elizabeth Libuo-Beshel Nji, Peter Bassey Enyievi, Olajumoke Esther Olanrewaju, Awafung Emmanuel and Emmanuel Ifeanyi Obeagu",
        abstract: "The general objective of the study was to determine the knowledge, attitude and practice of food hygiene and safety among stationary food vendors in major markets in Calabar metropolis in Cross River State, Nigeria. The study population comprised all stationary food vendors in major markets in Calabar Metropolis.",
        route: EJPHVOL2ISS602,
        pages: "18-39",
    },
    {
        title: "Bacteriological Examination of Fresh Raw Beef on Retail in the Open Market in Owo Metropolis, Ondo State, Nigeria",
        authors: "Samson O Onemu, Joy E Egbokale, Ephraim E Ibadin, Imoleayo O Mata and Emmanuel Ifeanyi Obeagu",
        abstract: "Beef meat is an essential source of human nourishment universally. The processing of beef often leads to the introduction of fecal bacteria from the food animal. Some of the introduced microorganisms have been traceable to food-borne illnesses and the spread of antimicrobial resistant bacterial species that are inherently more challenging and costlier to treat.",
        route: EJPHVOL2ISS603,
        pages: "40-54",
    },
    {
        title: "Cervical Cancer Unveiled: Insights into HPV, Risks, and Therapeutic Frontiers",
        authors: "Esther Ugo Alum, Emmanuel Ifeanyi Obeagu, Okechukwu P. C. Ugwu",
        abstract: "Predictions indicate that the number of instances of cervical cancer will increase significantly by 2040, making it a major worldwide health concern at this moment. Reducing the incidence of cervical cancer and improving patient outcomes require an understanding of its complex dynamics, including its causes, risk factors, preventive measures, and available treatments.",
        route: EJPHVOL2ISS604,
        pages: "55-66",
    },
    {
        title: "Determinant of Gender Based Violence in the Workplace as Perceived by Healthcare Workers in Enugu State",
        authors: "Chinwe Regina Agoha, A. A Amaeze, F.N. Amaeze, C.N. Ibe, A.F. Ogwuasoanya",
        abstract: "The study focused on determining the factors contributing to gender-based violence (GBV) in the workplace from the perspective of healthcare workers in Enugu State. It employed a descriptive survey research design and involved 4,156 respondents who were healthcare workers from primary and secondary healthcare centers in Enugu State.",
        route: EJPHVOL2ISS605,
        pages: "67-76",
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
    {
        title: "Hemochromatosis and HIV: Implications for Immune Reconstitution",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: 'Hemochromatosis and HIV are two distinct conditions with overlapping implications for immune function and disease progression. Hemochromatosis, characterized by excessive iron accumulation, and HIV, a chronic viral infection, both impact immune regulation and response.',
        route: EJMVOL1ISS102,
        pages: "17-30",
    },
    {
        title: "Ceruloplasmin and HIV-Associated Hematological Abnormalities: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: 'Hematological abnormalities are common complications of HIV infection, encompassing a spectrum of disorders including cytopenias, coagulopathies, and dysregulated iron metabolism. Ceruloplasmin, a multifunctional glycoprotein with diverse physiological roles, has emerged as a potential modulator of hematological parameters in the context of HIV infection.',
        route: EJMVOL1ISS103,
        pages: "31-44",
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
    {
        title: "Neurocognitive Effects of Blood Transfusion in Children with Severe Malaria and HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Children with severe malaria and HIV often require blood transfusions to manage complications such as severe anemia. However, the neurocognitive effects of these transfusions remain poorly understood. This review consolidates existing knowledge on the neurocognitive impacts of blood transfusion in this vulnerable population.",
        route: EJMVOL2ISS404,
        pages: "55-73",
    },
    {
        title: "Transfusion-Related Complications in Pediatric Severe Malaria Cases: A Focus on HIV Coinfection",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Transfusion therapy plays a critical role in managing severe malaria-related complications, particularly in pediatric populations. However, in the context of HIV coinfection, transfusion-related complications may exacerbate neurological vulnerabilities in affected children.",
        route: EJMVOL2ISS405,
        pages: "74-91",
    },
    {
        title: "Adapting HIV Prevention Strategies to Changing Climates: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Daniel Maada Mami and Getrude Uzoma Obeagu",
        abstract: "Climate change poses significant challenges to global health, including the prevention of HIV/AIDS transmission. This paper explores the intersection of climate change and HIV prevention strategies, examining the implications of changing climates on the effectiveness of existing prevention interventions and identifying adaptation strategies to mitigate the impact of environmental changes on HIV transmission.",
        route: EJMVOL2ISS406,
        pages: "92-108",
    },
    {
        title: "Identification of the Most Common Surgical Conditions among Children and Adolescent Patients Attending Holy Innocent Children's Hospital in Mbarara in Uganda",
        authors: "Munyerenkana Leocadie Mugisho, Felix Oyania, Francis Xaviour Okedi, Bulaze Mitterand Murhula, Joshua Muhumza, Sikakulya Franck Katembo, Pahari Kagenderezo Byamugu, Mole Fabrice Selamo, Kithinji Stephen Mbae, Magugu Sonye Kiyaka, Waziri Moussa, Nyenke Basara and Emmanuel Ifeanyi Obeagu",
        abstract: "Perioperative morbidity is characterized as negative health outcomes associated with a surgical treatment while perioperative mortality is any death in a child that occurs during surgical treatment within thirty days after surgery.",
        route: EJMVOL2ISS407,
        pages: "109-116",
    },
];

export const Ejmvol2iss5 = [
    {
        title: "Antioxidant and Lipid Profile of Ethanolic Root Extract and Fractions of Agave Sasilana in Albino Rats",
        authors: "O. D. Omodamiro, R.M. Omodamiro and Emmanuel Ifeanyi Obeagu",
        abstract: "The present study investigates the antioxidant and lipid profile of the ethanolic root extract and fractions of Agave sasilana in albino rats. Forty-eight male albino rats of mean weight 180 g were used for the study. The animals for the study were grouped into eight groups of six rats each. There were seven test groups and a control group.",
        route: EJMVOL2ISS501,
        pages: "1-15",
    },
    {
        title: "Diuretic Activity of Ethanolic Root Extract and Fractions of Agave Sasilana in Albino Rats",
        authors: "O. D. Omodamiro, R.M. Omodamiro and Emmanuel Ifeanyi Obeagu",
        abstract: "The present study investigates the diuretic activity of the ethanolic root extract and fractions of Agave sasilana in albino rats. Forty-eight male albino rats of mean weight 180 g were used for the study. There were seven test groups and a control group.",
        route: EJMVOL2ISS502,
        pages: "16-27",
    },
    {
        title: "A Study of Serum Ferritin Levels in Blood Donors in Orlu, Imo State",
        authors: "Obioma Raluchukwu Emeka-Obi, Samuel O. Ureme, Jane Ugochi Chinedu- Madu, Onyewuchi Goziem Ugwuibe and Chinasa Jane Onyeulor",
        abstract: "Haemoglobin levels, PCV and serum ferritin levels were measured in three groups of individuals. These groups are: (a) individuals with no history of donation (Group A), (b) individuals with a history of 1-3 donations (Group B) and individuals with a history of 4- 7 donations in the last one year (Group C).",
        route: EJMVOL2ISS503,
        pages: "28-35",
    },
    {
        title: "Hemochromatosis and HIV: Unraveling Genetic Susceptibility",
        authors: "Emmanuel Ifeanyi Obeagu and D.C. Nwosu",
        abstract: "Hemochromatosis, a disorder characterized by excessive iron absorption leading to systemic iron overload, and Human Immunodeficiency Virus (HIV), a viral infection targeting the immune system, represent significant health challenges worldwide. Concurrently, host genetic factors play a pivotal role in determining susceptibility to HIV infection and disease progression.",
        route: EJMVOL2ISS504,
        pages: "36-52",
    },
    {
        title: "Gene Editing in Management of Sickle Cell Disease",
        authors: "Festus Uchechukwu Onuigwe, Shafa'atu Kware Hayatu, Nkechi Judith Uchechukwu, Emmanuel Ifeanyi Obeagu, Hauwa Ali Buhari, Yakubu Abdulrahman, Aliyu Ibrahim Bagudo, Ibrahim Kalle Kwaifa",
        abstract: "Sickle cell disease (SCD) arises from a prevalent monogenic disorder caused by a mutation in the β-globin gene, resulting in the production of abnormal hemoglobin S (HbS) and leading to diverse complications such as chronic anemia, inflammation, vaso-occlusive crises, pain, stroke, and reduced life expectancy.",
        route: EJMVOL2ISS505,
        pages: "53-75",
    },
    {
        title: "Howell-Jolly Bodies in HIV: Insights into Bone Marrow Pathology and Hematopoiesis",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Howell-Jolly bodies (HJBs) have emerged as intriguing morphological features in HIV-infected individuals, offering insights into bone marrow pathology and hematopoiesis. This review delves into the presence, significance, and implications of HJBs in HIV infection, synthesizing existing literature to elucidate their role as surrogate markers of bone marrow dysfunction and hematological abnormalities.",
        route: EJMVOL2ISS506,
        pages: "76-86",
    },
    {
        title: "Assessment of Medication Behaviors on Adherence to Diabetic Treatment in Tertiary Hospitals in Imo State",
        authors: "Abiodun M. Eronini and Julia Ibebuike",
        abstract: "Adherence in anti-diabetic medication results in optimal blood sugar control with less complications and reduced mortality rate. Non adherence to diabetic treatment regime among people with diabetes is possibly the most common reason for poor health outcomes.",
        route: EJMVOL2ISS507,
        pages: "87-93",
    },
    {
        title: "Comprehensive Health and Sex Education: Integrating Sickle Cell Disease Awareness in the Curriculum",
        authors: "Emmanuel Ifeanyi Obeagu, Muhammad Tukur and Mariita Nchaga Asuma",
        abstract: "Comprehensive health and sex education are fundamental components of educational curricula, aimed at equipping adolescents and young adults with the knowledge and skills necessary to make informed decisions about their health and well-being. Sickle Cell Disease (SCD), a genetic blood disorder with significant medical and psychosocial implications, presents unique challenges for individuals affected by the condition.",
        route: EJMVOL2ISS508,
        pages: "94-101",
    },
];

export const Ejmvol2iss6 = [
    {
        title: "Unveiling Platelet Dynamics in ART-Treated HIV Patients: A Comprehensive Review",
        authors: "Joseph Obiezu Chukwujekwu Ezeonwumelu and Emmanuel Ifeanyi Obeagu",
        abstract: "Antiretroviral therapy (ART) has dramatically improved the life expectancy of HIV-infected individuals, transforming the disease into a manageable chronic condition. Despite these advancements, ART-treated HIV patients continue to experience significant alterations in platelet dynamics, which are crucial for both hemostasis and immune function.",
        route: EJMVOL2ISS601,
        pages: "1-9",
    },
    {
        title: "Nasal Carrier of Methicillin-Resistance Staphylococcus Aureus in Apparently Healthy Individuals in Kwara State University, Malete, Nigeria",
        authors: "Abdulrazaq Mustapha, Tolulope Joseph Ogunniyi, Tajudeen Sulaiman Olaide, Catherine Olutoyin Adekunle and Abdulrahman Abdulbasit Opeyemi and Emmanuel Ifeanyi Obeagu",
        abstract: "Infections in hospitals and the general population are frequently caused by Staphylococcus aureus. Methicillin-resistant Staphylococcus aureus is still a significant nosocomial pathogen, and because of its resistance to several medications, infections are frequently hard to treat.",
        route: EJMVOL2ISS602,
        pages: "10-21",
    },
    {
        title: "Body Mass Index and Risk of Leukemic Transformation in HIV-Positive Patients with Chronic Lymphocytic Leukemia: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Chronic lymphocytic leukemia (CLL) presents unique challenges in the context of HIV infection, where the interplay between immune dysfunction and oncogenesis complicates disease management. Body Mass Index (BMI) has emerged as a potential prognostic factor in CLL, reflecting the intricate relationship between metabolic health, immune function, and disease progression.",
        route: EJMVOL2ISS603,
        pages: "22-31",
    },
    {
        title: "Cancer's Psychosocial Aspects: Impact on Patient Outcomes",
        authors: "Esther Ugo Alum, Daniel Ejim Uti, Emmanuel Ifeanyi Obeagu, Okechukwu Paul-Chima Ugwu, Benedict Nnachi Alum",
        abstract: "Cancer is one of the leading causes of morbidity and mortality in the world and has a significant psychosocial impact on patients, caregivers, and communities. The purpose of this study is to discuss psychosocial aspects of cancer treatment, which include psychological, social, emotional, and spiritual factors.",
        route: EJMVOL2ISS604,
        pages: "32-42",
    },
    {
        title: "Phospholipid Oxidation and Membrane Integrity in Sickle Cell Anemia",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Anemia (SCA) is a genetic blood disorder caused by the mutation of the β-globin gene, resulting in the production of hemoglobin S and the characteristic sickling of red blood cells (RBCs). One of the central pathophysiological mechanisms in SCA is oxidative stress, which significantly affects RBC membrane integrity through the oxidation of phospholipids.",
        route: EJMVOL2ISS605,
        pages: "43-55",
    },
    {
        title: "Role of Nitric Oxide in Modulating Oxidative Stress in Sickle Cell Disease",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Nitric oxide (NO) is a critical regulatory molecule in Sickle Cell Disease (SCD), playing a dual role in modulating oxidative stress and influencing disease pathology. While NO is well-recognized for its vasodilatory effects and ability to reduce vaso-occlusive crises, it also engages in complex interactions with reactive oxygen species, which can both alleviate and exacerbate oxidative stress in SCD.",
        route: EJMVOL2ISS606,
        pages: "56-71",
    },
];

export const Ejmvol2iss7 = [
    {
        title: "Adverse Effects of Antimicrobial Therapeutic Agents in Common Use: A Review",
        authors: "S.O. Onemu, M.O. Onemu-Metitiri, O. Odeyemi, P.O. Uyigue and Emmanuel Ifeanyi Obeagu",
        abstract: "Antimicrobial agents play critical roles in reducing the burden of bacterial infectious diseases and their associated fatalities but may also come with unintended consequences that in some cases may lead to other health burdens, disability and death in extreme cases.",
        route: EJMVOL2ISS701,
        pages: "1-20",
    },
    {
        title: "Prothrombin Time, Activated Partial Thromboplastin Time and Plasma Fibrinogen Concentration among Alcoholics in Sokoto, Nigeria",
        authors: "Festus Uchechukwu Onuigwe, Louis Izuagie and Emmanuel Ifeanyi Obeagu",
        abstract: "The aim of the study was to determine Prothrombin time, Activated partial thromboplastin time and plasma fibrinogen concentration of alcoholics in Old Airport, Sokoto, Sokoto State. Six millilitres (6.0mls) of venous blood were collected into trisodium citrate containers from the subjects for the estimation of PT and APTT using Agape Diagnostics reagents from Switzerland",
        route: EJMVOL2ISS702,
        pages: "21-31",
    },
];

export const Ejmsvol1iss1 = [
    {
        title: "Harnessing the Power of Antioxidant-Rich Diet for Preconception Health: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Preconception health is a pivotal determinant of reproductive success, exerting profound effects on fertility, pregnancy outcomes, and the health of future generations. Increasing evidence suggests that dietary intake of antioxidants, abundant in fruits, vegetables, nuts, and seeds, holds significant promise in optimizing preconception health by combating oxidative stress.",
        route: EJMSVOL1ISS101,
        pages: "1-13",
    },
    {
        title: "Immunological Insights into Aplastic Anemia within the Context of HIV: Unraveling the Complex Interplay",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Aplastic anemia (AA) represents a hematologic disorder characterized by bone marrow failure, leading to peripheral blood pancytopenia. While its etiology remains multifaceted, the intersection of immunological factors, particularly in the presence of HIV infection, poses intriguing challenges and opportunities for elucidating its pathogenesis.",
        route: EJMSVOL1ISS102,
        pages: "14-24",
    },
    {
        title: "Iron Overload in HIV: Implications for Antiretroviral Therapy",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Iron overload is increasingly recognized as a significant comorbidity in individuals living with HIV, with potential implications for disease progression and management. This review explores the implications of iron overload for antiretroviral therapy (ART) in individuals with HIV, focusing on its effects on drug metabolism, treatment efficacy, and toxicity.",
        route: EJMSVOL1ISS103,
        pages: "25-37",
    },
    {
        title: "Ceruloplasmin and HIV-Associated Malignancies: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "HIV infection is associated with an increased risk of malignancies, ranging from AIDS-defining cancers to non-AIDS-defining malignancies. Ceruloplasmin, a multifunctional glycoprotein involved in iron metabolism, antioxidant defense, and immune regulation, has recently emerged as a potential modulator of tumorigenesis in the context of HIV infection.",
        route: EJMSVOL1ISS104,
        pages: "38-50",
    },
    {
        title: "Ceruloplasmin and HIV-Associated Pulmonary Complications: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Pulmonary complications stand as significant challenges in individuals living with human immunodeficiency virus (HIV), contributing to heightened morbidity and mortality rates. Ceruloplasmin, a multifaceted glycoprotein renowned for its antioxidant properties, has garnered attention for its potential role in the pathogenesis and progression of HIV-associated pulmonary disorders.",
        route: EJMSVOL1ISS105,
        pages: "51-62",
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

export const Ejmsvol2iss4 = [
    {
        title: "Transfusion-Related Complications in Children with Severe Malaria, HIV, and Underlying Hematological Disorders: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Transfusion-related complications pose significant challenges in the management of children with severe malaria, HIV infection, and underlying hematological disorders. This comprehensive review examines the epidemiology, pathophysiology, clinical manifestations, and management strategies for transfusion-related complications in pediatric patients with these conditions.",
        route: EJMSVOL2ISS401,
        pages: "1-20",
    },
    {
        title: "Impact of Blood Transfusion on Quality of Life in HIV-Positive Children Recovering from Severe Malaria",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Blood transfusion is a critical intervention in the management of severe malaria in pediatric patients, particularly in those with concurrent HIV infection. While transfusion therapy aims to improve hemoglobin levels and tissue perfusion, its impact on the quality of life (QoL) of HIV-positive children recovering from severe malaria remains underexplored.",
        route: EJMSVOL2ISS402,
        pages: "21-39",
    },
    {
        title: "Oxytocic and Abortifacient Potential of Ethanolic Extract of Date Fruit (Phoenix Dactylifera) in Albino Rats",
        authors: "Omodamiro, O.D, Omodamiro R.M, Kanu, O.C and Emmanuel Ifeanyi Obeagu",
        abstract: "This study aimedto evaluate the oxytocic and abortifacient potential of ethanolic extract of date fruit (Phaenix dactylifera) in albino rats. The phytochemical analysis of the extract was also evaluated using standard methods. For biochemical and hematological assay, a total of 30 wistar rats with body weight of 200 ± 50 g were used for this study.",
        route: EJMSVOL2ISS403,
        pages: "40-59",
    },
    {
        title: "Phytochemical Characterization, Acute Toxicity Studies and Anti-inflammatory Activities of Ethanolic Root Extract of Agave Sasilana in Albino Rats",
        authors: "O.D. Omodamiro, R.M. Omodamiro and Emmanuel Ifeanyi Obeagu",
        abstract: "The present study investigates the phytochemical and acute toxicity studies of the ethanolic root extract of Agave sasilana in albino rats. The lorke’s method was used for the acute toxicity study of which twenty-seven (27) male albino rats were used. The extracts were administered at the doses of 50, 100, 150, 200, 250, 500 and 750 mg/kg body weight of the animals.",
        route: EJMSVOL2ISS404,
        pages: "60-75",
    },
    {
        title: "Enhancing Maternal and Fetal Well-being: The Role of Antioxidants in Pregnancy",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Pregnancy, a period of profound physiological changes, demands meticulous attention to maternal and fetal well-being to ensure optimal outcomes. Central to this endeavor is the management of oxidative stress, a condition characterized by an imbalance between reactive oxygen species (ROS) production and antioxidant defense mechanisms.",
        route: EJMSVOL2ISS405,
        pages: "76-87",
    },
];

export const Ejmsvol2iss5 = [
    {
        title: "Antioxidants and Neurodevelopmental Outcomes in Offspring: A Review of Maternal Interventions",
        authors: "Emmanuel Ifeanyi Obeagu, Kesaobaka Batisani and Getrude Uzoma Obeagu",
        abstract: "Neurodevelopmental outcomes in offspring are influenced by a myriad of factors, with maternal nutrition during pregnancy emerging as a critical determinant. Antioxidants, including vitamins C and E, selenium, zinc, and polyphenols, possess neuroprotective properties by counteracting oxidative stress and modulating key pathways involved in brain development.",
        route: EJMSVOL2ISS501,
        pages: "1-9",
    },
    {
        title: "Evaluation of Fertility Hormonal Profile on Women with Intramural Fibroid in Owerri",
        authors: "Ukamaka Edward, Goodness Ngozi Ogbonna and Emmanuel Ifeanyi Obeagu",
        abstract: "This study was carried out to evaluate levels of fertility hormonal profile in women with intramural fibroid in owerri. A total of seventy-five (75) subjects aged 18 – 50 years were recruited for the study and were divided into two groups subjects with intramural fibroid and control subjects. The serum follicle stimulating hormone, luteinizing hormone, Estradiol and Prolactin were assayed using ELISA Method.",
        route: EJMSVOL2ISS502,
        pages: "10-17",
    },
    {
        title: "Incidence of Sexually Transmitted Infections among Pregnant Women in State Specialist Hospital Osogbo, South- Western Nigeria",
        authors: "Ruth Efe Moronkeji, Muyiwa Adeleye Moronkeji, Peter Ayowole Ayara, Abdulbasit Opeyemi Abdulrahman, Olasimbo Godswill Ikuejamoye and Emmanuel Ifeanyi Obeagu",
        abstract: "Sexually transmitted infections are acknowledged worldwide as significant public and reproductive health issues that can lead to adverse pregnancy outcomes like stillbirth, neonatal death, intrauterine growth retardation, premature rupture of the membrane, preterm birth, low birth weight, prematurity, congenital deformities, infant pneumonia, blindness, and other complications if not properly treated or left untreated.",
        route: EJMSVOL2ISS503,
        pages: "18-30",
    },
    {
        title: "Obesity and Treatment-Related Neurotoxicity in Leukemia Patients with Advanced HIV/AIDS: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Obesity and Human Immunodeficiency Virus/Acquired Immunodeficiency Syndrome (HIV/AIDS) independently pose significant health challenges, and their coexistence complicates the management of comorbid conditions such as leukemia. Leukemia patients with advanced HIV/AIDS are particularly vulnerable to treatment-related neurotoxicity, which can impact cognitive function, quality of life, and treatment outcomes.",
        route: EJMSVOL2ISS504,
        pages: "31-39",
    },
    {
        title: "Blood Transfusion Considerations in High-Risk Pregnancies: Strategies and Outcomes",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Blood transfusion management in high-risk pregnancies is a critical aspect of obstetric care aimed at mitigating maternal and fetal complications. This review examines the challenges, strategies, and outcomes associated with blood transfusions in pregnancies complicated by conditions such as antepartum hemorrhage, maternal medical disorders, and fetal anomalies.",
        route: EJMSVOL2ISS505,
        pages: "40-50",
    },
];

export const Ejmsvol2iss6 = [
    {
        title: "Managing the Dual Burden: Addressing Mental Health in Diabetes Care",
        authors: "Esther Ugo Alum, Okechukwu Paul-Chima Ugwu, Emmanuel Ifeanyi Obeagu, Daniel Ejim Uti, Simeon Ikechukwu Egba, Benedict Nnachi Alum",
        abstract: "Diabetes and mental illness are highly relevant issues due to their intricate relationship with the treatment and management of both conditions. Diabetes is a medical condition characterized by high blood sugar levels, and there is evidence of reciprocal interactions between the disorder and mental health.",
        route: EJMSVOL2ISS601,
        pages: "1-9",
    },
    {
        title: "HIV-Specific T-Cell Responses in Infants: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Infants infected with HIV face unique immunological challenges due to the immaturity of their immune systems, which impacts the development and functionality of T-cell responses against the virus.",
        route: EJMSVOL2ISS602,
        pages: "10-23",
    },
    {
        title: "Redox Homeostasis and Its Disruption in Sickle Cell Disease",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Redox homeostasis, the balance between oxidative and reductive processes, is crucial for cellular health and function. In Sickle Cell Disease (SCD), this balance is disrupted, leading to elevated oxidative stress and contributing to the disease's pathophysiology.",
        route: EJMSVOL2ISS603,
        pages: "24-43",
    },
    {
        title: "Endothelial Dysfunction in Sickle Cell Anemia: Role of Free Radicals",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Anemia (SCA) is a hereditary blood disorder characterized by the production of abnormal hemoglobin S, which leads to the formation of sickle-shaped red blood cells. These deformed cells cause a cascade of vascular complications, primarily through endothelial dysfunction.",
        route: EJMSVOL2ISS604,
        pages: "44-57",
    },
    {
        title: "Oxidative Stress in Sickle Cell Anemia: A Cellular and Molecular Perspective",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Anemia (SCA) is a genetic disorder characterized by the production of abnormal hemoglobin S, leading to chronic oxidative stress and a cascade of pathological events. This review explores oxidative stress from both cellular and molecular perspectives, emphasizing its role in the pathophysiology of SCA.",
        route: EJMSVOL2ISS605,
        pages: "58-73",
    },
];

export const Ejmsvol2iss7 = [
    {
        title: "Prevalence of Malaria Infection among Children with Different Haemoglobin Types, Attending Specialist Hospital Sokoto State, Nigeria",
        authors: "Festus Uchechukwu Onuigwe, Aisha Abdullahi Kaka, Nkechi Judith Uchechukwu, Rufai Ahmed, Hauwa Buhari Ali, Aliyu Ibrahim Bagudo and Emmanuel Ifeanyi Obeagu",
        abstract: "This study determined the prevalence of malaria infections among children with different haemoglobin types, attending Specialist Hospital, Sokoto Nigeria. Venous blood was used to make thick and thin blood smear and stained witt Giemsa stain. Microscopic method was used to identify malaria parasite.",
        route: EJMSVOL2ISS701,
        pages: "1-15",
    },
];

export const Ejhsvol1iss1 = [
    {
        title: "Early Infant Diagnosis: A Crucial Step in Halting HIV Transmission",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Early infant diagnosis (EID) plays a pivotal role in the global efforts to halt the transmission of HIV, particularly in pediatric populations. With an estimated 150,000 children newly infected with HIV in 2020, the urgency to diagnose and treat HIV-infected infants is paramount.",
        route: EJHSVOL1ISS101,
        pages: "1-11",
    },
    {
        title: "GEarly Infant Diagnosis: Shielding Infants from HIV Transmission",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Early infant diagnosis (EID) plays a pivotal role in safeguarding infants from HIV transmission, particularly in regions burdened by high prevalence rates. This paper delves into the significance of EID as a cornerstone of prevention of mother-to-child transmission (PMTCT) programs, exploring its impact on infant health outcomes and public health initiatives.",
        route: EJHSVOL1ISS102,
        pages: "12-22",
    },
    {
        title: "From Classroom to Home: Strengthening the Continuum of Sickle Cell Disease Knowledge",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle Cell Disease (SCD) presents a significant health burden globally, particularly affecting marginalized communities with limited access to healthcare resources. Bridging the gap between clinical understanding and practical management of the disease is paramount for improving patient outcomes and enhancing their quality of life.",
        route: EJHSVOL1ISS103,
        pages: "23-29",
    },
    {
        title: "Incorporating Sickle Cell Disease Curriculum in Schools: An Effective Approach",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle Cell Disease (SCD) is a significant health concern globally, particularly impacting populations of African, Mediterranean, Middle Eastern, and South Asian descent. Early detection and comprehensive education are vital for improving outcomes and enhancing the quality of life for individuals living with SCD.",
        route: EJHSVOL1ISS104,
        pages: "30-36",
    },
    {
        title: "Community Leaders as Educators: Mobilizing for Sickle Cell Disease Reduction",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Sickle Cell Disease (SCD) poses a significant health challenge globally, particularly affecting marginalized communities with limited access to healthcare resources. Community leaders, including religious figures, grassroots organizers, and advocacy groups, play a pivotal role in mobilizing efforts to reduce the burden of SCD.",
        route: EJHSVOL1ISS105,
        pages: "37-43",
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
    {
        title: "Understanding Body Mass Index Variations and Clinical Outcomes in Leukemia Patients with HIV/AIDS: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Body Mass Index (BMI) fluctuations play a crucial role in shaping clinical outcomes among leukemia patients concurrently diagnosed with HIV/AIDS. In this review, we delve into the multifaceted relationship between BMI variations and disease trajectories in this vulnerable population.",
        route: EJHSVOL2ISS406,
        pages: "59-72",
    },
];

export const Ejhsvol2iss5 = [
    {
        title: "Howell-Jolly Bodies and HIV-Associated Kidney Disease: Pathophysiology and Clinical Implications",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Howell-Jolly bodies (HJBs) have garnered attention in the context of HIV infection due to their potential association with kidney disease. The pathophysiology of HJBs in HIV-associated kidney disease involves a complex interplay between viral replication, immune dysregulation, and renal inflammation.",
        route: EJHSVOL2ISS501,
        pages: "1-11",
    },
    {
        title: "School-Based Initiatives: Fostering Sickle Cell Disease Education",
        authors: "Emmanuel Ifeanyi Obeagu and Muhammad Tukur",
        abstract: "Sickle Cell Disease (SCD) poses significant health challenges globally, particularly in regions with high prevalence, impacting millions of individuals, including children of school age. Despite advancements in medical care, misconceptions, stigma, and limited understanding persist, hindering effective management and support for those affected.",
        route: EJHSVOL2ISS502,
        pages: "12-18",
    },
    {
        title: "Antioxidants and Gestational Diabetes Mellitus: A Comprehensive Review of Preventive Strategies",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Gestational Diabetes Mellitus (GDM) presents a significant health concern during pregnancy, with implications for both maternal and fetal well-being. Emerging research has highlighted the role of oxidative stress in the pathogenesis of GDM, underscoring the potential utility of antioxidants in its prevention and management.",
        route: EJHSVOL2ISS503,
        pages: "19-29",
    },
    {
        title: "Antiretroviral Therapy and Platelet Interactions in HIV Patients: A Review",
        authors: "Joseph Obiezu Chukwujekwu Ezeonwumelu and Emmanuel Ifeanyi Obeagu",
        abstract: "Antiretroviral therapy (ART) has transformed HIV infection from a life-threatening disease to a manageable chronic condition, significantly improving patient outcomes. However, HIV-infected individuals on ART often experience alterations in platelet function and dynamics, posing challenges in clinical management.",
        route: EJHSVOL2ISS504,
        pages: "30-36",
    },
    {
        title: "Exploring the Differential Impacts of Intermittent Fasting on Men and Women",
        authors: "Esther Ugo Alum, Emmanuel Ifeanyi Obeagu, Okechukwu Paul-Chima Ugwu, Benedict Nnachi Alum, Echegu Darlington Arinze, Chris U. A. Ukaidi",
        abstract: "Antiretroviral therapy (ART) has transformed HIV infection from a life-threatening disease to a manageable chronic condition, significantly improving patient outcomes. However, HIV-infected individuals on ART often experience alterations in platelet function and dynamics, posing challenges in clinical management.",
        route: EJHSVOL2ISS505,
        pages: "37-44",
    },
];

export const Ejhsvol2iss6 = [
    {
        title: "Markers of Immune Activation in HIV-Exposed Infants",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "HIV-exposed infants represent a vulnerable population characterized by early exposure to HIV antigens, which profoundly influences immune development and function. This review explores key immune activation markers in HIV-exposed infants, focusing on their role in innate and adaptive immune responses, clinical implications, and therapeutic interventions.",
        route: EJHSVOL2ISS601,
        pages: "1-14",
    },
    {
        title: "Immunological Biomarkers for Disease Progression in HIV-Infected Infants",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Immunological biomarkers play a crucial role in assessing disease progression and guiding therapeutic strategies in HIV-infected infants, who represent a vulnerable population with unique immunological challenges. This review examines key immunological biomarkers that reflect immune activation, dysfunction, and resilience in the context of pediatric HIV/AIDS.",
        route: EJHSVOL2ISS602,
        pages: "15-27",
    },
    {
        title: "Free Radical-Induced Hemoglobin Modifications in Sickle Cell Disease",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Disease (SCD) is characterized by the presence of abnormal hemoglobin S (HbS), which leads to the formation of sickle-shaped red blood cells. This genetic disorder is associated with increased oxidative stress and the production of reactive oxygen species (ROS), which induce significant hemoglobin modifications.",
        route: EJHSVOL2ISS603,
        pages: "28-39",
    },
    {
        title: "Nrf2 Signaling and Its Role in Redox Homeostasis in Sickle Cell Anemia",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Anemia (SCA) is characterized by chronic oxidative stress and redox imbalance due to the polymerization of hemoglobin S (HbS), leading to hemolysis, vaso-occlusion, and organ damage. The nuclear factor erythroid 2-related factor 2 (Nrf2) signaling pathway plays a critical role in cellular defense against oxidative stress by regulating the expression of antioxidant and cytoprotective genes.",
        route: EJHSVOL2ISS604,
        pages: "40-51",
    },
    {
        title: "Free Radicals and Neurological Complications in Sickle Cell Disease",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Disease (SCD) is a genetic disorder caused by a mutation in the β-globin gene, resulting in the production of sickle-shaped red blood cells that lead to vaso-occlusive events and chronic hemolysis.",
        route: EJHSVOL2ISS605,
        pages: "52-66",
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
    {
        title: "Transfusion-Related Alterations in Red Blood Cell Deformability in Pediatric Severe Malaria Cases with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Transfusion-related alterations in red blood cell (RBC) deformability play a critical role in the pathophysiology of severe malaria and HIV co-infection in pediatric populations. While blood transfusion is a cornerstone intervention for managing severe anemia and preventing mortality in children with severe malaria, its impact on RBC deformability in the context of HIV co-infection remains poorly understood.",
        route: EJHVOL2ISS413,
        pages: "199-218",
    },
];

export const Ejhvol2iss5 = [
    {
        title: "A Study of Iron Status and Total Serum Protein Levels in Blood Donors in Owerri, Imo State",
        authors: "Obioma Raluchukwu Emeka-Obi, Samuel O. Ureme, Jane Ugochi Chinedu- Madu, Onyewuchi Goziem Ugwuibe and Chinasa Jane Onyeulor",
        abstract: "Haemoglobin level, Serum Ferritin, Serum Iron, Total Iron-binding Capacity (TIBC), Percentage Transferrin Saturation and Total Serum Protein levels were measured in three groups of individuals. A total of 138 subjects were recruited for this study. These subjects were grouped into three based on the number of donations done in the last one year: Group A were individuals with a history of 1-3 donation, Group B 4-6 donations and Group C, 7-9 donations.",
        route: EJHVOL2ISS501,
        pages: "1-19",
    },
    {
        title: "Aplastic Anemia and HIV: Clinical Features and Risk Factors",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Aplastic anemia, a rare but serious hematological disorder characterized by bone marrow failure, has emerged as a recognized complication in individuals living with HIV/AIDS. This review provides a comprehensive analysis of the clinical features and risk factors associated with the development of aplastic anemia in the context of HIV infection.",
        route: EJHVOL2ISS502,
        pages: "20-38",
    },
    {
        title: "Exploring the Impact of Body Mass Index on Quality of Life in Leukemia Patients Living with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Body Mass Index (BMI) is a crucial determinant of nutritional status and overall health, particularly impactful in individuals facing concurrent diagnoses of leukemia and HIV/AIDS. This review examines the intricate relationship between BMI variations and quality of life (QoL) in leukemia patients living with HIV, aiming to elucidate the multifaceted mechanisms underlying their interconnectedness.",
        route: EJHVOL2ISS503,
        pages: "39-54",
    },
    {
        title: "Hemochromatosis and HIV: Implications for Immune Senescence",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Hemochromatosis and HIV infection represent distinct yet intersecting conditions with significant implications for immune senescence, the gradual decline in immune function associated with aging. Hemochromatosis, characterized by excessive iron accumulation in tissues, and HIV infection, a chronic viral illness leading to progressive immune dysfunction, both contribute to immune dysregulation and accelerated aging of the immune system.",
        route: EJHVOL2ISS504,
        pages: "55-71",
    },
    {
        title: "Erythrocyte Morphology in Hemophilia Patients Co-infected with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Sharon Seni Itoe Ngomo",
        abstract: "Hemophilia, a rare bleeding disorder, frequently coexists with HIV infection due to shared risk factors such as blood product transfusions. Erythrocyte morphology alterations in hemophilia patients co-infected with HIV have garnered recent attention due to potential implications for disease management and prognosis.",
        route: EJHVOL2ISS505,
        pages: "72-89",
    },
    {
        title: "Reviewing Erythrocyte Morphology Changes in Hemophilia Patients with HIV: Current Insights",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Hemophilia patients with concurrent HIV infection face a unique set of challenges, including hematological complications that extend beyond traditional coagulation abnormalities. This review examines the current understanding of erythrocyte morphology changes in individuals with hemophilia and HIV co-infection, shedding light on the underlying mechanisms, clinical implications, and management considerations.",
        route: EJHVOL2ISS506,
        pages: "90-107",
    },
    {
        title: "Diamond Blackfan Anaemia",
        authors: "Festus Uchechukwu Onuigwe, Uthman Abdul-Qadir Asmau, Nkechi Judith Uchechukwu and Emmanuel Ifeanyi Obeagu",
        abstract: "DBA is a rare genetic blood disorder that affects the production of red blood cells and can cause a range of symptoms. DBA is a rare congenital disease, with an incidence of 7 cases per million live births. Diagnosis is established at a median age of 2 to 3 months, with 95% of DBA cases diagnosed before 2 years of age and 99% before 5 years of age.",
        route: EJHVOL2ISS507,
        pages: "108-125",
    },
    {
        title: "Howell-Jolly Bodies in HIV: Unveiling Morphological Insights into Disease Progression",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Howell-Jolly bodies (HJBs), cytoplasmic remnants of DNA in erythrocytes, have garnered attention as potential indicators of disease progression in HIV patients. This review explores the intricate relationship between the presence of HJBs and the progression of HIV, elucidating morphological features and underlying mechanisms linking their occurrence to disease severity.",
        route: EJHVOL2ISS508,
        pages: "126-137",
    },
    {
        title: "BCL-2 expression level among in CML Patients in Ile Ife",
        authors: "Samson O. Elujoba, Musa M. Muhibi, Joseph O. Olanrewaju, Isaac O. Famakin, Emmanuel O. Awosika, Ayodeji J. Osevwe, Samson O. Yusuf, Olasunkanmi M. Olisa, Julius O. Oriowo, Oluwayemisi Odeyemi and Emanuel Ifeanyi Obeagu",
        abstract: "Howell-Jolly bodies (HJBs), cytoplasmic remnants of DNA in erythrocytes, have garnered attention as potential indicators of disease progression in HIV patients. This review explores the intricate relationship between the presence of HJBs and the progression of HIV, elucidating morphological features and underlying mechanisms linking their occurrence to disease severity.",
        route: EJHVOL2ISS509,
        pages: "138-146",
    },
    {
        title: "Understanding the Impact of Blood Transfusion on Erythropoiesis in Pediatric Severe Malaria Cases with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Pediatric severe malaria cases complicated by HIV co-infection present a multifaceted clinical scenario that demands a comprehensive understanding of disease pathophysiology and treatment implications. This review delves into the intricate interplay between blood transfusion and erythropoiesis in this vulnerable population.",
        route: EJHVOL2ISS510,
        pages: "147-154",
    },
];

export const Ejhvol2iss6 = [
    {
        title: "The Relationship Between Body Mass Index and Cytogenetic Abnormalities in Leukemia Patients with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "The interplay between Body Mass Index (BMI), cytogenetic abnormalities, and leukemia in HIV-infected patients presents a complex clinical scenario with significant implications for prognosis and treatment.",
        route: EJHVOL2ISS601,
        pages: "1-15",
    },
    {
        title: "Gender-Based Assessment of Haematological Parameters and Acute Phase Reactants of Hypertensives in Port Harcourt, Nigeria",
        authors: "Priya Homa Chukwu, Serekara Gideon Christian, Evelyn Mgbeoma Eze, Stella Urekweru Ken-Ezihuo, Beatrice Wobiarueri Moore-Igwe, Chinyere Okey-Omunakwe and Emmanuel Ifeanyi Obeagu",
        abstract: "High blood pressure, also called as hypertension is the most prevalent cardiovascular risk factor and a significant contributor to global mortality and morbidity. Hypertension is a multifaceted condition, accounting for around 90% of cases falling into the category of essential hypertension where the exact underlying cause remains unknown.",
        route: EJHVOL2ISS602,
        pages: "16-34",
    },
    {
        title: "Current Insights into Erythropoietin Levels and Anemia in HIV Patients",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Anemia is a prevalent complication in individuals living with human immunodeficiency virus (HIV), significantly impacting quality of life and treatment outcomes. Erythropoietin (EPO), a glycoprotein hormone crucial for erythropoiesis, plays a pivotal role in the pathophysiology and management of HIV-associated anemia.",
        route: EJHVOL2ISS603,
        pages: "35-45",
    },
    {
        title: "Addressing Anemia and Hemorrhage in Pregnancy: Blood Transfusion Strategies for Improved Maternal Health",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Anemia and hemorrhage during pregnancy are major contributors to maternal morbidity and mortality worldwide, necessitating effective management strategies to enhance maternal health outcomes. Anemia, predominantly due to iron deficiency, can lead to severe complications such as preterm delivery and low birth weight if not adequately addressed.",
        route: EJHVOL2ISS604,
        pages: "46-59",
    },
    {
        title: "Oxidative Stress and Free Radicals: Implications in Sickle Cell Disease",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Disease (SCD) is a hereditary disorder characterized by the production of abnormal hemoglobin S (HbS), leading to the deformation of red blood cells (RBCs) into a sickle shape. This morphological change contributes to hemolysis and vaso-occlusive events, which are hallmarks of the disease.",
        route: EJHVOL2ISS605,
        pages: "60-74",
    },
    {
        title: "Mitochondrial Dysfunction and Free Radical Generation in Sickle Cell Anemia: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle Cell Anemia (SCA) is a severe genetic disorder caused by a single nucleotide mutation in the β-globin gene, resulting in the production of abnormal hemoglobin S (HbS). This mutation leads to the polymerization of HbS under low oxygen conditions, causing red blood cells (RBCs) to adopt a sickle shape and leading to a range of clinical manifestations including hemolysis, vaso-occlusive crises, and multi-organ damage.",
        route: EJHVOL2ISS606,
        pages: "75-89",
    },
];

export const Ejhvol2iss7 = [
    {
        title: "The Dual Nature of Free Radicals: Friend and Foe in Sickle Cell Anemia",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Free radicals, including reactive oxygen species (ROS) and reactive nitrogen species (RNS), play a dual role in Sickle Cell Anemia (SCA), acting as both contributors to disease pathology and as essential modulators of physiological processes. In SCA, the mutation in the β-globin gene leads to the production of hemoglobin S (HbS), which induces oxidative stress through ROS and RNS generation.",
        route: EJHVOL2ISS701,
        pages: "1-12",
    },
    {
        title: "Some Haematological Parameters and Micronutrients among Sickle Cell Disease Children in Sokoto",
        authors: "Hauwa Ali Buhari, Queen Odachi Abakaba, Festus Uchekwu Onigwe, Aliyu Bagudu Ibrahim and Emmanuel Ifeanyi Obeagu",
        abstract: "Sickle cell disease (SCD) is an inherited red blood cell disorder that leads to forming the mutated haemoglobin S, resulting in a wide range of sickness. The aim of the study is to check the status of some haematological parameters and trace elements in 60 SCD and 30 non-SCD children in Sokoto metropolis.",
        route: EJHVOL2ISS702,
        pages: "13-25",
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
    {
        title: "Transfusion-Related Impact on Immune Modulation in Pediatric Severe Malaria Survivors with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Severe malaria and HIV co-infection represent significant health challenges in pediatric populations, particularly in regions where both diseases are endemic. Blood transfusion is often a life-saving intervention for managing severe anemia and other complications of severe malaria in children.",
        route: EJIVOL2ISS406,
        pages: "93-111",
    },
];

export const Ejivol2iss5 = [
    {
        title: "Body Mass Index and Risk of Immune Reconstitution Inflammatory Syndrome in Leukemia Patients Co-infected with HIV",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Leukemia patients co-infected with Human Immunodeficiency Virus (HIV) face unique challenges, including the risk of Immune Reconstitution Inflammatory Syndrome (IRIS) following the initiation of antiretroviral therapy (ART).",
        route: EJIVOL2ISS501,
        pages: "1-10",
    },
    {
        title: "The Impact of Erythropoietin on Immune Function in HIV Patients",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Erythropoietin (EPO), primarily recognized for its role in erythropoiesis, has garnered attention for its potential immunomodulatory effects in human immunodeficiency virus (HIV) infection. This review examines the impact of EPO on immune function in HIV patients, exploring its interactions with immune cells, cytokine regulation, inflammation, and therapeutic implications.",
        route: EJIVOL2ISS502,
        pages: "11-20",
    },
    {
        title: "Erythropoietin and Immunomodulation in HIV: Implications for Treatment",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Erythropoietin (EPO), renowned for its role in erythropoiesis, has emerged as a potential immunomodulatory agent in the management of human immunodeficiency virus (HIV) infection. This review explores the evolving understanding of EPO's impact on immune function and its implications for HIV treatment strategies.",
        route: EJIVOL2ISS503,
        pages: "21-28",
    },
    {
        title: "Neonatal Immune Development in the Context of HIV Infection: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Johnson Okwudili Nweke",
        abstract: "The neonatal immune system undergoes a critical period of development characterized by dynamic transitions from innate to adaptive immunity, essential for lifelong immune competence. However, in the context of HIV infection, this developmental trajectory is profoundly altered, presenting unique challenges in immune maturation and response.",
        route: EJIVOL2ISS504,
        pages: "29-38",
    },
    {
        title: "HIV and Natural Killer (NK) Cell Responses in Neonates: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Priya Homa Chukwu",
        abstract: "Natural killer (NK) cells are innate immune effectors critical for early host defense against viral infections, including HIV. In neonates, NK cells undergo developmental maturation and play a pivotal role in immune surveillance and cytotoxicity. However, vertical transmission of HIV from infected mothers to neonates profoundly impacts NK cell function.",
        route: EJIVOL2ISS505,
        pages: "39-49",
    },
];

export const Ejivol2iss6 = [
    {
        title: "Immunological Aspects of HIV Control in Perinatally Infected Infants: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Perinatal HIV infection remains a significant global health challenge, impacting infants born to HIV-positive mothers worldwide. This review synthesizes current knowledge on immune responses in perinatally infected infants, focusing on mechanisms of immune control, viral persistence, and the impact of antiretroviral therapy (ART).",
        route: EJIVOL2ISS601,
        pages: "1-14",
    },
    {
        title: "An update on Early Immunological Markers in HIV-Exposed Infants",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Early immunological markers in HIV-exposed infants play a critical role in understanding immune development, assessing HIV infection risk, and guiding therapeutic interventions. This review synthesizes current knowledge on innate and adaptive immune responses, markers of immune activation, and their implications for HIV-exposed infants' health outcomes.",
        route: EJIVOL2ISS602,
        pages: "15-25",
    },
    {
        title: "Malaria in Pregnancy: Insights into Immunological Responses",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Malaria during pregnancy poses significant health risks to both the mother and the fetus, particularly in regions endemic to Plasmodium falciparum. The altered immune system of pregnant women, essential for fetal tolerance, also increases susceptibility to malaria infection, leading to severe complications such as maternal anemia, placental malaria, low birth weight, and preterm delivery.",
        route: EJIVOL2ISS603,
        pages: "26-43",
    },
];

export const Ejlmvol1iss1 = [
    {
        title: "Treatment Strategies for Aplastic Anemia in HIV: Current Approaches and Future Directions",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Aplastic anemia (AA) poses a significant hematologic challenge characterized by bone marrow failure and peripheral blood pancytopenia. In the context of HIV infection, managing AA presents unique complexities, necessitating tailored treatment strategies to address the intricate interplay between immune dysregulation, viral pathogenesis, and hematopoietic suppression.",
        route: EJLMVOL1ISS101,
        pages: "1-12",
    },
    {
        title: "Hemochromatosis and HIV: Two Conditions, One Challenge",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Hemochromatosis and HIV represent two distinct yet interconnected medical conditions, each posing unique challenges to disease management. Hemochromatosis is characterized by excessive iron accumulation, while HIV infection results in immune dysfunction and increased susceptibility to infections.",
        route: EJLMVOL1ISS102,
        pages: "13-27",
    },
    {
        title: "Ceruloplasmin and HIV-Associated Coagulopathies: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "HIV infection is associated with a spectrum of hematological abnormalities, including coagulopathies that contribute to increased morbidity and mortality in affected individuals. Ceruloplasmin, a multifunctional glycoprotein with antioxidant and immune-regulatory properties, has emerged as a potential mediator of coagulation dysfunction in HIV-infected individuals.",
        route: EJLMVOL1ISS103,
        pages: "28-41",
    },
    {
        title: "Ceruloplasmin and HIV-Associated Psychiatric Disorders: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Psychiatric disorders represent a significant burden among individuals living with human immunodeficiency virus (HIV), contributing to impaired quality of life, treatment adherence, and overall health outcomes. The prevalence of psychiatric manifestations, including depression, anxiety, neurocognitive impairment, and psychosis, is disproportionately higher in HIV-infected individuals compared to the general population.",
        route: EJLMVOL1ISS104,
        pages: "43-53",
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
    {
        title: "Optimal Transfusion Thresholds for Pediatric Severe Malaria in the Context of HIV Co-Infection: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Pediatric severe malaria, compounded by HIV co-infection, presents a complex clinical challenge, often necessitating blood transfusion for severe anemia. However, determining optimal transfusion thresholds for this population remains elusive. This review synthesizes current evidence and guidelines regarding transfusion thresholds in pediatric severe malaria, particularly in the context of HIV co-infection.",
        route: EJLMVOL2ISS404,
        pages: "46-63",
    },
    {
        title: "Safety and Tolerance of Blood Transfusion in Severe Malaria Cases with HIV: Lessons from Pediatric Cases",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Blood transfusion is a life-saving intervention often employed in the management of severe malaria-related complications, particularly in pediatric populations. However, in regions with high HIV prevalence, the co-occurrence of HIV infection complicates transfusion therapy and raises concerns regarding safety and tolerance.",
        route: EJLMVOL2ISS405,
        pages: "64-83",
    },
    {
        title: "Assessment of Microbial Quality of Yoghurt Sold in Owerri Metropolis, Imo State",
        authors: "Henry Chidozie Amah, Faith Chibuzo Enyenwa, Magnus Chinonye Nsonwu, Kennedy Tamunokubie Atemie, Anthonia Chinwendu Emesowum and Roseanne Adah Ikpeama",
        abstract: "The assessment of microbial quality of yoghurt sold in Owerri metropolis was determined. Eight brands of yoghurt designated V-fa,D-fa,V-favi,D-favi,V-sy,D-sy,V-Dsa and D-Dsa were obtained from Owerri metropolis. A tenfold serial dilution was carried out and appropriate diluted samples inoculated on duplicate plates of SDA, Nutrient agar, SSA and CLED agar.",
        route: EJLMVOL2ISS406,
        pages: "84-91",
    },
];

export const Ejlmvol2iss5 = [
    {
        title: "Role of Haematology Laboratory in Covid 19 Infections",
        authors: "Festus Uchechukwu Onuigwe, Rukayya Kure Abdullahi, Nkechi Judith Uchechukwu, Yakubu Abdulrahman, Hauwa Buhari Ali and Emmanuel Ifeanyi Obeagu",
        abstract: "Coronavirus disease 2019 (COVID-19) is an infectious illness caused by the SARS-CoV-2 virus. The infections can be transmitted through droplets of different sizes: when the droplet particles are >5-10 μm in diameter they are referred to as respiratory droplets, and when then are <5μm in diameter, they are referred to as droplet nuclei.",
        route: EJLMVOL2ISS501,
        pages: "1-12",
    },
    {
        title: "Diagnostic Accuracy of Howell-Jolly Bodies in HIV-Associated Splenic Dysfunction: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Howell-Jolly bodies (HJBs), observed as cytoplasmic remnants within erythrocytes, have emerged as potential indicators of splenic dysfunction in HIV-infected individuals. This review evaluates the diagnostic accuracy of HJBs in identifying HIV-associated splenic dysfunction, examining their morphological features, clinical significance, and implications for disease management.",
        route: EJLMVOL2ISS502,
        pages: "13-23",
    },
    {
        title: "Understanding Transfusion-Related Changes in Coagulation Parameters and Disseminated Intravascular Coagulation in Pediatric Severe Malaria Cases with HIV: A Comprehensive Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Pediatric severe malaria cases complicated by HIV co-infection present a significant clinical challenge, characterized by a complex interplay of severe anemia, coagulation abnormalities, and an increased risk of disseminated intravascular coagulation (DIC). Blood transfusion, a cornerstone intervention in managing severe anemia, introduces additional complexities by potentially altering coagulation parameters and predisposing patients to transfusion-related complications.",
        route: EJLMVOL2ISS503,
        pages: "24-31",
    },
    {
        title: "Body Mass Index Changes During Remission and Relapse in Leukemia Patients Living with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Leukemia patients living with HIV face a complex medical landscape characterized by the interplay of two major health conditions, each profoundly impacting immune function and overall health. Body Mass Index (BMI) emerges as a critical marker in this context, reflecting nutritional status, treatment response, and prognostic outcomes.",
        route: EJLMVOL2ISS504,
        pages: "32-40",
    },
    {
        title: "Evaluation of Hormonal Profile on Women with Secondary Infertility Attending Federal Teaching Hospital, Owerri, Imo State",
        authors: "Ukamaka Edward, Nkeiru Perpetua Iheanaetu and Emmanuel Ifeanyi Obeagu",
        abstract: "Secondary infertility, characterized by the inability to conceive or carry a pregnancy to term following a previous successful pregnancy, is a complex reproductive disorder influenced by various factors, including hormonal imbalances.",
        route: EJLMVOL2ISS505,
        pages: "41-50",
    },
];

export const Ejlmvol2iss6 = [
    {
        title: "Hematological Consequences of Erythropoietin in HIV: Clinical Implications",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Anemia is a prevalent complication among individuals living with human immunodeficiency virus (HIV), contributing significantly to morbidity and affecting quality of life. Erythropoietin (EPO) therapy has emerged as a fundamental approach to managing HIV-associated anemia, aiming to enhance erythropoiesis and alleviate symptoms.",
        route: EJLMVOL2ISS601,
        pages: "1-9",
    },
    {
        title: "Optimizing Transfusion Practices for Maternal-Fetal Well-being: Challenges and Innovations",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Transfusion practices in obstetrics are critical for managing maternal complications such as postpartum hemorrhage and severe anemia, which can significantly impact maternal and fetal health. This review explores the challenges encountered in obstetric transfusion and discusses innovative approaches aimed at optimizing maternal-fetal well-being.",
        route: EJLMVOL2ISS602,
        pages: "10-23",
    },
    {
        title: "The Incidence of Beta-Lactamase Producing Staphylococcus Aureus from Wound Infections in Federal Teaching Hospital Owerri",
        authors: "Chrysogonus Nwabueze Ohakpolamugwuo, J.N. Dike-Ndudim, H.C Amah and D.C Nwosu",
        abstract: "This study was carried out in order to determine the incidence and antibiotic resistance patterns of beta-lactamase producing Staphylococcus aureus from wound infections among patients in Federal Teaching Hospital, Owerri. A total of 120 wounds swabs were aseptically collected from the hospital patients using standard bacteriological methods.",
        route: EJLMVOL2ISS603,
        pages: "24-32",
    },
    {
        title: "Cytokine Responses in HIV-Infected Pediatric Patients: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Cytokine responses are central to the immunopathogenesis of HIV infection, particularly in pediatric patients whose immune systems are still developing. This review examines the unique cytokine profiles observed in HIV-infected children, highlighting how elevated levels of pro-inflammatory cytokines such as IL-6, TNF-α, and IL-1β contribute to chronic immune activation and inflammation.",
        route: EJLMVOL2ISS604,
        pages: "33-48",
    },
    {
        title: "Immune Dysregulation in HIV-Positive Neonates: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Human Immunodeficiency Virus (HIV) infection in neonates presents significant challenges due to the immaturity of their immune systems and the profound impact of the virus on immune regulation. This review explores the mechanisms of immune dysregulation in HIV-positive neonates, focusing on immune cell dysfunction, cytokine imbalances, and the effects of antiretroviral therapy (ART).",
        route: EJLMVOL2ISS605,
        pages: "49-66",
    },
];

export const Ejlmvol2iss7 = [
    {
        title: "Prevalence of Haemoparasites Infecting the Exotic Breeds of Dairy Cattle in Sebore Farm, Mayo-Belwa, Adamawa State. Nigeria",
        authors: "Comfort Danchal, G. I. A. Dogo, Matthew Chibunna Igwe and Emmanuel Ifeanyi Obeagu",
        abstract: "This thesis aimed at studying ticks/haemoparasites of exotic dairy cattle of Sebore Farm, was carried out to provide baseline information on ticks and TBDS and help in proffering solution to their damaging effects on the dairy cattle.",
        route: EJLMVOL2ISS701,
        pages: "1-5",
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
    {
        title: "Impact of Blood Transfusion on Respiratory Function in HIV-Positive Pediatric Severe Malaria Cases: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Blood transfusion is a crucial intervention in the management of severe malaria-associated anemia, aiming to improve tissue perfusion and support recovery. However, in pediatric patients with severe malaria and concurrent HIV infection, the impact of blood transfusion on respiratory function remains a significant concern.",
        route: EJSRRVOL2ISS304,
        pages: "49-68",
    },
    {
        title: "Transfusion-Related Alterations in Thrombopoiesis in Pediatric Severe Malaria Cases with HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Severe malaria and HIV co-infection pose significant challenges in pediatric healthcare, particularly in regions where both diseases are endemic. Thrombocytopenia is a common complication of severe malaria, necessitating blood transfusion to prevent hemorrhagic complications.",
        route: EJSRRVOL2ISS305,
        pages: "69-87",
    },
];

export const Ejsrrvol2iss4 = [
    {
        title: "Forced Vibration Analysis of Isotropic Thin Rectangular SSSS Plate",
        authors: "Chidiebere Fidelis Njoku, Ikechukwu Agwu Ojike, Abiaziem Victor Njoku, Kelechi Frank Anyaoha and Chukwudebelu Nnaemeka Ugochukwu",
        abstract: "This work used the general shape function assumed by Szilard (2004) to formulate the solution to the forced vibration equation of an isotropic thin rectangular plate. By applying the appropriate boundary conditions on dimensionless co-ordinates (ζ,η)it obtainedthe shape function of an SSSS plate, in terms of a deflection constant, A.",
        route: EJSRRVOL2ISS401,
        pages: "1-11",
    },
    {
        title: "Design and Implementation of a Smart Wireless Access Point for a Gas Station (Swap-GS)",
        authors: "Levi Odinaka chukwu Duru, Amarachukwu Chukwueloka Okorie, Nelly Uwah Onwuka, Abiaziem Victor Njoku and Nelly Monday Friday Idio",
        abstract: "Wireless communications are well-suited for the gas distribution industry, especially given the often-remote locations of distribution facilities. When working with accumulated and real-time data, the underlying communications infrastructure must be a highly reliable, with a resilient system that interconnects sensors and controls across a large-scale field area network.",
        route: EJSRRVOL2ISS402,
        pages: "12-43",
    },
];

export const Ejnhsvol1iss1 = [
    {
        title: "The Vital Role of Antioxidants in Enhancing Fertility and Pregnancy Success: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Antioxidants play a crucial role in maintaining reproductive health by combating oxidative stress, which has been implicated in various fertility issues and pregnancy complications. This review article provides a comprehensive overview of the mechanisms underlying the impact of antioxidants on fertility enhancement and pregnancy success.",
        route: EJNHSVOL1ISS101,
        pages: "1-12",
    },
    {
        title: "Unraveling Diagnostic Challenges of Aplastic Anemia in the Context of HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Aplastic anemia (AA) and Human Immunodeficiency Virus (HIV) infection represent distinct hematologic disorders that can coexist, posing diagnostic and management challenges. This review delves into the complex interplay between AA and HIV, specifically focusing on the diagnostic hurdles encountered in identifying AA within the context of HIV infection.",
        route: EJNHSVOL1ISS102,
        pages: "13-23",
    },
    {
        title: "Iron Overload in HIV: Impact on Hepatic Function",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Iron overload is a common complication in individuals living with HIV, with significant implications for hepatic function and disease progression. Chronic inflammation, dysregulated iron metabolism, and comorbidities associated with HIV infection contribute to systemic iron accumulation and oxidative stress, leading to liver injury and fibrosis.",
        route: EJNHSVOL1ISS103,
        pages: "24-38",
    },
    {
        title: "Ceruloplasmin and HIV-Associated Hepatic Complications: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Liver complications are common in individuals living with HIV, and they pose significant challenges in disease management and patient outcomes. Ceruloplasmin, a multifunctional glycoprotein primarily involved in copper transport and antioxidant defense, has emerged as a potential player in the pathogenesis of HIV-associated hepatic complications.",
        route: EJNHSVOL1ISS104,
        pages: "39-51",
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
    {
        title: "Transfusion-Related Acute Lung Injury in HIV-Positive Pediatric Severe Malaria Cases: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Transfusion-related acute lung injury (TRALI) is a severe complication of blood transfusion characterized by acute respiratory distress and pulmonary edema. In pediatric patients with severe malaria and concurrent HIV infection, TRALI represents a significant clinical challenge, with potentially life-threatening consequences.",
        route: EJNHSVOL2ISS406,
        pages: "63-81",
    },
];

export const Ejnhsvol2iss5 = [
    {
        title: "Howell-Jolly Bodies in Pediatric HIV: Clinical Considerations and Management Strategies",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Howell-Jolly bodies (HJBs), once regarded as mere remnants of erythropoiesis, have emerged as intriguing markers of hematological abnormalities in pediatric patients with HIV. This review delves into the clinical considerations and management strategies associated with the presence of HJBs in pediatric HIV, shedding light on their significance as indicators of disease progression and guiding therapeutic interventions.",
        route: EJNHSVOL2ISS501,
        pages: "1-11",
    },
    {
        title: "Sources of Work-Related Stress among Lecturers in Institutions of Nursing in Imo State",
        authors: "Olive Chidinma Osuagwu and Julia Ibebuike",
        abstract: "The research was designed to investigate work-related stress among lecturers and institutions of nursing in Imo State. A descriptive survey Design was adopted for the study period the target population for the study comprised 95 lecturers in the six nursing institutions in Imo State. The sample size of the study is 88 respondents.",
        route: EJNHSVOL2ISS502,
        pages: "12-16",
    },
    {
        title: "Assessment How Entrepreneurship Education Enhance the Undergraduate Students in Acquisition of Skills Towards Career Development among Undergraduates in Imo State University, Owerri",
        authors: "Patricia Uju Ogbu and Julia Ibebuike",
        abstract: "The study deals with assessment how entrepreneurship education enhance the undergraduate students in acquisition of skills towards career development among undergraduates in Imo State University, Owerri. The descriptive survey design was used for the study on a target population of 7684 people.",
        route: EJNHSVOL2ISS503,
        pages: "17-22",
    },
    {
        title: "Personalized Learning Plans: Catering to Individual Needs in Sickle Cell Disease Education",
        authors: "Emmanuel Ifeanyi Obeagu, Muhammad Tukur and Mariita Nchaga Asuma",
        abstract: "Personalized Learning Plans (PLPs) have emerged as a crucial educational strategy for addressing the diverse needs of students, particularly those affected by chronic health conditions like Sickle Cell Disease (SCD). This review explores the significance of PLPs in SCD education, highlighting their role in accommodating the unique challenges faced by students with SCD and promoting their academic success, social integration, and overall well-being.",
        route: EJNHSVOL2ISS504,
        pages: "23-29",
    },
    {
        title: "Antioxidants and Postpartum Complications: Preventions",
        authors: "Emmanuel Ifeanyi Obeagu, Kesaobaka Batisani and Getrude Uzoma Obeagu",
        abstract: "Postpartum complications pose significant risks to maternal health, contributing to maternal morbidity and mortality worldwide. Oxidative stress and inflammation play crucial roles in the pathogenesis of these complications, including preeclampsia, postpartum hemorrhage, and maternal infections.",
        route: EJNHSVOL2ISS505,
        pages: "30-40",
    },
];

export const Ejnhsvol2iss6 = [
    {
        title: "Influence of Antioxidants on Maternal and Fetal Immune Response: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Teddy Charles Adias and Getrude Uzoma Obeagu",
        abstract: "The maternal immune response during pregnancy is a dynamic system designed to protect both the mother and the developing fetus. This immune modulation is critical for preventing adverse pregnancy outcomes while ensuring fetal growth and development. Oxidative stress, characterized by an imbalance between reactive oxygen species (ROS) production and the body's ability to neutralize them, poses a significant threat to this balance.",
        route: EJNHSVOL2ISS601,
        pages: "1-13",
    },
    {
        title: "Blood Transfusion Protocols in Obstetrics: Enhancing Maternal Care and Neonatal Outcomes",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Blood transfusion protocols in obstetrics are pivotal in managing critical conditions like hemorrhage and severe anemia, which pose significant risks to maternal and neonatal health. This review explores current practices, challenges, and innovations in blood transfusion protocols aimed at enhancing maternal care and improving neonatal outcomes.",
        route: EJNHSVOL2ISS602,
        pages: "14-25",
    },
    {
        title: "Safety and Efficacy of Blood Transfusions in Pregnant Women: A Critical Analysis",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Blood transfusions play a crucial role in managing complications during pregnancy, such as hemorrhage and severe anemia, which can pose significant risks to maternal and fetal health. This review critically analyzes the safety and efficacy of blood transfusions in pregnant women, focusing on current practices, challenges, and advancements in transfusion medicine.",
        route: EJNHSVOL2ISS603,
        pages: "26-42",
    },
    {
        title: "Mental Health Interventions for Pregnant and Postpartum Women: Efficacy and Accessibility",
        authors: "Esther Ugo Alum, Emmanuel Ifeanyi Obeagu, Okechukwu Paul-Chima Ugwu, Daniel Ejim Uti, Benedict Nnachi Alum, Chinyere Nneoma Ugwu",
        abstract: "Mental health interventions are important for pregnant and postpartum women, as they are at high risk of developing perinatal mental health disorders, including depression and anxiety. This review assesses the effectiveness and availability of different mental health treatments, which include psychotherapy, pharmacotherapy, and other multifaceted interventions;",
        route: EJNHSVOL2ISS604,
        pages: "43-49",
    },
    {
        title: "Malaria During Pregnancy: Effects on Maternal Morbidity and Mortality",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Malaria during pregnancy remains a major public health concern, particularly in sub-Saharan Africa, where the disease is endemic. Pregnant women are highly susceptible to malaria due to immunological changes and the presence of the placenta, which provides an ideal environment for Plasmodium falciparum sequestration.",
        route: EJNHSVOL2ISS605,
        pages: "50-68",
    },
    {
        title: "Maternal Malaria: Implications for Fetal Health",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Maternal malaria significantly impacts fetal health, leading to a range of adverse outcomes such as intrauterine growth restriction (IUGR), low birth weight (LBW), preterm birth, and stillbirth. This review synthesizes current knowledge on the effects of maternal malaria on fetal development, emphasizing the underlying pathophysiological mechanisms and their implications for pregnancy outcomes.",
        route: EJNHSVOL2ISS606,
        pages: "69-89",
    },
];

export const Ejnhsvol2iss7 = [
    {
        title: "Malaria and Antenatal Care: Bridging Gaps for Improved Pregnancy Outcomes",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Malaria during pregnancy poses significant risks to both maternal and fetal health, contributing to adverse outcomes such as low birth weight, preterm birth, and stillbirth. Antenatal care (ANC) is crucial in addressing these risks, yet gaps remain in the prevention, diagnosis, and treatment of malaria in pregnant women.",
        route: EJNHSVOL2ISS701,
        pages: "1-20",
    },
    {
        title: "Malaria and Pregnancy: Implications for Maternal Mental Health",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Malaria during pregnancy represents a significant public health challenge, with substantial implications for both maternal and fetal health. Beyond the physical complications, malaria can profoundly impact maternal mental health, contributing to increased rates of anxiety, depression, and stress.",
        route: EJNHSVOL2ISS702,
        pages: "21-40",
    },
    {
        title: "Malaria and Low Birth Weight: Understanding the Linkages",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Malaria is a significant public health concern, particularly affecting pregnant women and their unborn children in tropical and subtropical regions. This review investigates the relationship between malaria and low birth weight (LBW), a critical determinant of neonatal and infant health.",
        route: EJNHSVOL2ISS703,
        pages: "41-55",
    },
];

export const Ejhivvol1iss1 = [
    {
        title: "Management of Aplastic Anemia in HIV-Infected Pediatric Population: Challenges and Opportunities",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Aplastic anemia (AA) represents a complex hematologic disorder characterized by bone marrow failure and peripheral blood pancytopenia. In the pediatric population coinfected with human immunodeficiency virus (HIV), the management of AA poses unique challenges, necessitating a nuanced understanding of disease pathogenesis and tailored treatment strategies.",
        route: EJHIVVOL1ISS101,
        pages: "1-14",
    },
    {
        title: "Iron Overload in HIV: Implications for Disease Management",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "Iron overload is a significant concern in individuals living with HIV, influenced by chronic inflammation, antiretroviral therapy, and co-morbidities. This review explores the mechanisms underlying iron dysregulation in HIV, its implications for disease management, and potential therapeutic interventions.",
        route: EJHIVVOL1ISS102,
        pages: "15-28",
    },
    {
        title: "Ceruloplasmin and Oxidative Stress in HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu",
        abstract: "HIV infection is associated with chronic inflammation and immune activation, leading to increased oxidative stress in affected individuals. Ceruloplasmin, a copper-binding glycoprotein with potent antioxidant properties, plays a crucial role in modulating oxidative stress levels.",
        route: EJHIVVOL1ISS103,
        pages: "29-42",
    },
    {
        title: "Ceruloplasmin and HIV-Associated Hepatobiliary Disorders: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Hepatobiliary disorders represent significant comorbidities in individuals infected with the human immunodeficiency virus (HIV), contributing to morbidity and mortality worldwide. Ceruloplasmin, a multifunctional glycoprotein primarily synthesized in the liver, has emerged as a focal point in understanding the pathogenesis and management of HIV-associated liver dysfunction.",
        route: EJHIVVOL1ISS104,
        pages: "43-54",
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
    {
        title: "Climate Change as a Driver of HIV Transmission Dynamics: A Review",
        authors: "Emmanuel Ifeanyi Obeagu, Daniel Maada Mami and Getrude Uzoma Obeagu",
        abstract: "Climate change is increasingly recognized as a multifaceted challenge with far-reaching implications for human health. Among its numerous impacts, climate change is now understood to play a significant role in shaping the dynamics of HIV transmission.",
        route: EJHIVVOL2ISS407,
        pages: "110-127",
    },
    {
        title: "The Nexus Between Climate Change and HIV Spread: Understanding Intersections, Impacts, and Interventions",
        authors: "Emmanuel Ifeanyi Obeagu, Daniel Maada Mami and Getrude Uzoma Obeagu",
        abstract: "The intertwined relationship between climate change and the spread of HIV/AIDS poses complex challenges to global health and development. This review article explores the multifaceted connections between climate change and HIV transmission dynamics, examining the influence of environmental factors, socio-economic vulnerabilities, and adaptive responses on the intersection of these two phenomena.",
        route: EJHIVVOL2ISS408,
        pages: "128-145",
    },
];

export const Ejhivvol2iss5 = [
    {
        title: "Confronting Dual Challenges: Substance Abuse and HIV/AIDS",
        authors: "Esther Ugo Alum, Emmanuel Ifeanyi Obeagu, Okechukwu P. C. Ugwu, Simeon Ikechukwu Egba, Daniel Ejim Uti, Chris U. A. Ukaidi and Darlington Arinze Echegu",
        abstract: "The multifaceted association between substance abuse and human immunodeficiency virus (HIV) infection is examined in this article, with particular attention paid to prevalence, risk behaviours, biological vulnerability, care-seeking barriers, and preventive measures.",
        route: EJHIVVOL2ISS501,
        pages: "1-8",
    },
    {
        title: "Impact of HIV on Hemophilia Patients: A Review",
        authors: "Emmanuel Ifeanyi Obeagu1 and Sharon Seni Itoe Ngomo",
        abstract: "The coexistence of hemophilia and HIV represents a unique medical challenge, with profound implications for affected individuals and healthcare systems worldwide. This review comprehensively examines the impact of HIV on hemophilia patients, encompassing epidemiological trends, clinical manifestations, therapeutic considerations, and implications for patient care.",
        route: EJHIVVOL2ISS502,
        pages: "9-27",
    },
    {
        title: "HIV Co-infection in Hemophilia: Implications for Treatment",
        authors: "Emmanuel Ifeanyi Obeagu1 and Sharon Seni Itoe Ngomo",
        abstract: "Hemophilia, a hereditary bleeding disorder, and HIV, a viral infection impacting the immune system, intersect in individuals co-affected by both conditions, posing unique challenges in treatment. HIV co-infection in hemophilia patients presents multifaceted clinical manifestations and complications, ranging from increased bleeding tendencies to immunodeficiency-related complications and psychosocial challenges.",
        route: EJHIVVOL2ISS503,
        pages: "28-46",
    },
    {
        title: "Biomarkers of Diagnostic, Prognostic and Therapeutic Value in HIV-positive Patients: A Review",
        authors: "Abdulrahman Abdulbasit Opeyemi, Ayara Peter Ayowole and Emmanuel Ifeanyi Obeagu",
        abstract: "Despite advancements in treatment, HIV/AIDS remains a global public health challenge, particularly in resource-limited settings. Biomarkers play a crucial role in HIV care by aiding in early diagnosis, predicting disease progression, and guiding therapeutic interventions and as such, this article aim to explore the diagnostic, prognostic, and therapeutic significance of biomarkers in HIV-positive patients.",
        route: EJHIVVOL2ISS504,
        pages: "47-59",
    },
    {
        title: "Early Infant Diagnosis: Safeguarding the Next Generation from HIV",
        authors: "Emmanuel Ifeanyi Obeagu and Getrude Uzoma Obeagu",
        abstract: "Early Infant Diagnosis (EID) of HIV is a pivotal strategy in public health aimed at identifying HIV-infected infants early to initiate timely antiretroviral therapy (ART), significantly reducing morbidity and mortality rates. EID's importance cannot be overstated, as it facilitates the prompt initiation of treatment, thereby improving health outcomes and quality of life for HIV-positive infants.",
        route: EJHIVVOL2ISS505,
        pages: "60-68",
    },
];

export const Ejhivvol2iss6 = [
    {
        title: "Ceruloplasmin and Iron Metabolism in HIV: A Review",
        authors: "Emmanuel Ifeanyi Obeagu and Priya Homa Chukwu",
        abstract: "Human immunodeficiency virus (HIV) infection significantly impacts iron metabolism, a critical aspect of cellular function and systemic health. Ceruloplasmin, a copper-containing ferroxidase enzyme, plays a pivotal role in maintaining iron homeostasis by oxidizing ferrous iron (Fe^2+) to ferric iron (Fe^3+), facilitating its transport by transferrin.",
        route: EJHIVVOL2ISS601,
        pages: "1-12",
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