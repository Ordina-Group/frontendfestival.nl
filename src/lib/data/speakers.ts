export type Speaker = {
    id: number,
    name: string;
    position: string;
    company?: string;
    image?: string;
    bio: string;
    years: number[]
};

export function initials(speaker: Speaker) {
    const parts = speaker.name.split(" ")
    return parts[0].at(0)!.toUpperCase() + parts[parts.length - 1].at(0)!.toUpperCase()
}

// Note: never remove speakers, only add or update
// this way permalinks to speakers will be valid in the future pycon years

// Image note: images provided by speakers should be cropped to be a square centered around the face

// Bio notes: add new \lines \n between paragraphs when the bio is long

export const speakers: Speaker[] = [
    {
        id: 1,
        name: "William Lacerda",
        position: "Backend Developer",
        bio: "William Lacerda is a seasoned backend developer with over 8 years of experience.\nWhile his primary expertise lies in TypeScript development, William has dedicated the past 3 years to mastering Python.",
        image: "/speakers/william_lacerda.jpg",
        years: [2025],
    },
    {
        id: 2,
        name: "Arie Bovenberg",
        position: "Principal Software Engineer",
        bio: "Civil engineer by degree, programmer by passion.\nI’ve worked across startups and corporates, mostly in Python, with a love for Rust and functional programming concepts.\nAuthor of “whenever” and “slotscheck”, I focus on making code maintainable and sharing deep insights with the community.",
        image: "/speakers/arie_bovenberg.jpg",
        years: [2025],
    },
    {
        id: 3,
        name: "Thiago Bellini Ribeiro",
        position: "Software Engineer",
        company: "Sendcloud",
        bio: "My name is Thiago Bellini Ribeiro - a 37 year-old Brazilian 🇧🇷 software engineer living and working in the Netherlands 🇳🇱 at Sendcloud, with my wife, two dogs 🐶, and two cats 😸.\nI’ve been passionate about Python since 2010, using it both professionally and personally.\nAs an open-source enthusiast, I’m always looking for ways to give back to the community. Since 2022, I’ve been a maintainer of the 🍓 Strawberry GraphQL Python library - a project I continue to support out of passion, even though I no longer use it in my day-to-day work.\nOutside of coding, I’m known for my positive outlook and my eagerness to help others in the tech community.\nI love connecting with people, sharing knowledge, and contributing to a collaborative and forward-thinking industry.",
        image: "/speakers/thiago_bellini_ribeiro.jpg",
        years: [2025],
    },
    {
        id: 4,
        name: "Merel Theisen",
        position: "Principal Software Engineer",
        company: "QuantumBlack, AI by McKinsey",
        bio: "I am a Principal Software Engineer at QuantumBlack, where I am currently the tech lead of Kedro, an open-source project part of the Linux Foundation.\nI have over eight years of experience in the software industry, with most of my career focused on backend product engineering.\nI am passionate about building products that solve real user problems, and I care deeply about creating robust, well-tested software that follows good engineering principles.\nI am also a strong advocate for open-source software, and I find working with the community to be both inspiring and energising.",
        image: "/speakers/merel_theisen.png",
        years: [2025],
    },
    {
        id: 5,
        name: "Klaas van Schelven",
        position: "Creator of Bugsink",
        company: "Bugsink",
        bio: "Klaas van Schelven is the creator of Bugsink, an error tracker written in Python and one of the most successful Dutch Python projects in recent years.\nHe has contributed to Django and many other Python open source projects.\nKlaas is an engaging speaker, with talks at tech conferences including DjangoCon Europe and the European Lisp Symposium, and is a regular guest at local meetups. He was also the European University Debating Champion.",
        years: [2025],
    },
    {
        id: 6,
        name: "Alexander Procelewski",
        position: "Master's Student and Teaching Assistant",
        company: "EPFL",
        bio: "Alexander Procelewski is a Master’s student at EPFL, where he is focused on systems engineering.\nEarlier this year, he worked as a software engineer on placement at Bloomberg in London, developing high-throughput analytics systems.\nAlex has worked across academia and industry — from contributing to distributed systems research in Groningen to building scalable back-end infrastructure at a healthtech startup.\nHe remains active as a teacher in academia, currently serving as a Teaching Assistant at EPFL.\nHe was previously named “Teaching Assistant of the Year” at the University of Groningen.\nAlex earned a bachelor’s degree from the University of Groningen, where he also attended the Honours College. His undergraduate thesis explored “Energy Analysis of Automatic SIMD Vectorization,” and his master’s research has continued in the performance space, with a semester-long project evaluating TPCx-AI on GPU clusters.\nIn his free time, Alex enjoys playing chess and bouldering.",
        image: "/speakers/alex_procelewski.jpg",
        years: [2025]
    },
    {
        id: 7,
        name: "Aris Nivorlis",
        position: "Researcher Geophysicist and Data Steward",
        company: "Deltares",
        bio: "Aris Nivorlis is a researcher geophysicist and data steward at Deltares, where he uses data and tooling to answer complex questions about the subsurface.\nHe is passionate about promoting good practices in data management and scientific coding, helping teams build sustainable and reproducible workflows.\nOutside of work, Aris is actively involved in the European Python community, contributing to the organization and support of conferences and community initiatives.\nWhen he's not at his computer, you’ll likely find him dancing salsa.",
        years: [2025],
    },
    {
        id: 8,
        name: "Carlo van Overbeek",
        position: "Fullstack DevOps Engineer Cloud",
        company: "Schuberg Philis",
        bio: "A graduate PhD in physical chemistry turned DevOps with a particular interest in infrastructure and security automation.\nMost skilled in Python and Terraform (preferably in AWS).\nSometimes dipping a toe in JavaScript and Bash when unavoidable. Currently working on automating security for Geldmaat in AWS at Schuberg Philis.\nPrivately working on gamification of encryption and of trusted knowledge.",
        image: "/speakers/carlo_van_overbeek.jpg",
        years: [2025],
    },
    {
        id: 9,
        name: "Daniele Procida",
        position: "Director of Engineering",
        company: "Canonical",
        bio: "I am a Director of Engineering at Canonical, where I lead documentation practice.\nI developed the Diátaxis documentation framework, which is now widely used in the industry. I've been involved in Python and Django for many years, including as a Django core developer.\nI enjoy helping organise community conferences for Python and Django. That includes multiple editions of DjangoCon Europe, as well as the first editions of PyCon Africa and DjangoCon Africa.\nI also enjoy helping people and open-source projects improve their documentation.",
        years: [2025],
    },
    {
        id: 10,
        name: "Sebastiaan Zeeff",
        position: "Principal Expert",
        company: "Sopra Steria",
        bio: "Sebastiaan is a Python enthusiast who likes to think about good software design and engineering.\nHe is a fellow of the EuroPython Society and the Python Software Foundation, works as a Principal Expert for the Pythoneers at Sopra Steria Netherlands, and frequently speaks at conferences around the world.",
        years: [2025],
    },
    {
        id: 11,
        name: "Steven Pemberton",
        position: "Researcher, author, public speaker, and broadcaster",
        bio: "Steven Pemberton is a distinguished researcher in the fields of interaction, declarative programming, and web technologies, based at the Dutch national research centre CWI in Amsterdam, where Python originated.\nHis university tutor was Dick Grimsdale who built the world's first transistorised computer, and who was himself a tutee of Alan Turing. After university, Pemberton -- coincidentally -- worked in Turing's old department on the 5th computer in the line of computers Turing had worked on.\nHe co-designed the language that Python is based on, was the first user of the open internet in Europe in 1988, and has been involved with the web from its inception, co-designing several web standards, including HTML, CSS, XHTML, XForms, and RDFa.\nIn 2022 he received the ACM SIGCHI Lifetime Practice Award, and in 2023 was named an ACM Distinguished Speaker.",
        image: "/speakers/steven_pemberton.jpg",
        years: [2025],
    }
];