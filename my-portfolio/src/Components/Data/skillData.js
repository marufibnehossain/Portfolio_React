import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { ImHtmlFive } from 'react-icons/im';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNodejs, TbApi } from 'react-icons/tb';
import { SiCss3, SiBootstrap, SiTailwindcss, SiJavascript, SiJquery, SiGithub, SiExpress, SiElementor, SiWoocommerce } from 'react-icons/si';
import { FaWordpress } from "react-icons/fa";

const skillData = [
    {
        id:1,
        title: "Frontend Development",
        SkillNames:[
            {
                id: 1,
                icon: <ImHtmlFive />,
                skill: "HTML",
                level: "Advanced"
            },
            {
                id: 2,
                icon: <SiCss3 />,
                skill: "CSS",
                level: "Advanced"
            },
            {
                id: 3,
                icon: <SiBootstrap />,
                skill: "Bootstrap",
                level: "Intermediate"
            },
            {
                id: 4,
                icon: <SiTailwindcss />,
                skill: "TailwindCSS",
                level: "Advanced"
            },
            {
                id: 5,
                icon: <SiJavascript />,
                skill: "JavaScript",
                level: "Advanced"
            },
            {
                id: 6,
                icon: <SiJquery />,
                skill: "jQuery",
                level: "Intermediate"
            },
            {
                id: 7,
                icon: <SiGithub />,
                skill: "GitHub",
                level: "Basic"
            },
            {
                id: 8,
                icon: <RiReactjsLine className='text-2xl' />,
                skill: "React",
                level: "Advanced"
            }
        ]
    },
    {
        id:2,
        title: "Backend Development",
        SkillNames:[
            {
                id: 1,
                icon: <TbBrandNodejs />,
                skill: "NodeJS",
                level: "Intermediate"
            },
            {
                id: 2,
                icon: <SiExpress />,
                skill: "Express",
                level: "Intermediate"
            },
            {
                id: 3,
                icon: <HiOutlineBadgeCheck />,
                skill: "EJS",
                level: "Basic"
            },
            {
                id: 4,
                icon: <TbApi />,
                skill: "APIs",
                level: "Basic"
            },
        ]
    },{
        id:2,
        title: "WordPress Development",
        SkillNames:[
            {
                id: 1,
                icon: <FaWordpress />,
                skill: "WordPress",
                level: "Advanced"
            },
            {
                id: 2,
                icon: <SiElementor />,
                skill: "Elementor",
                level: "Advanced"
            },
            {
                id: 3,
                icon: <SiWoocommerce />,
                skill: "Woocommerce",
                level: "Advanced"
            },
            {
                id: 4,
                icon: <HiOutlineBadgeCheck />,
                skill: "Buddyx",
                level: "Intermediate"
            },
            {
                id: 5,
                icon: <HiOutlineBadgeCheck />,
                skill: "Theme Customization",
                level: "Advanced"
            },
        ]
    }
]
export default skillData;