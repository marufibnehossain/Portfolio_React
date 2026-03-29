import { HiOutlineBadgeCheck } from 'react-icons/hi';
import { ImHtmlFive } from 'react-icons/im';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNodejs, TbApi } from 'react-icons/tb';
import { SiCss3, SiBootstrap, SiTailwindcss, SiJavascript, SiJquery, SiGithub, SiExpress, SiElementor, SiWoocommerce, SiPostgresql, SiTensorflow, SiPandas, SiNumpy, SiPython, SiScikitlearn } from 'react-icons/si';
import { FaWordpress, FaGithub, FaNpm } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { AiOutlineLineChart } from "react-icons/ai";

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
            {
                id: 5,
                icon: <BiLogoMongodb />,
                skill: "MongoDB",
                level: "Intermediate"
            },
            {
                id: 6,
                icon: <SiPostgresql />,
                skill: "PostgreSQL",
                level: "Intermediate"
            },
            {
                id: 7,
                icon: <FaGithub />,
                skill: "GitHub",
                level: "Intermediate"
            },
            {
                id: 8,
                icon: <FaNpm />,
                skill: "NPM",
                level: "Intermediate"
            },
        ]
    },{
        id:3,
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
                skill: "Elementor Pro",
                level: "Advanced"
            },
            {
                id: 3,
                icon: <SiWoocommerce />,
                skill: "WooCommerce",
                level: "Advanced"
            },
            {
                id: 4,
                icon: <HiOutlineBadgeCheck />,
                skill: "LMS",
                level: "Intermediate"
            },
            {
                id: 5,
                icon: <HiOutlineBadgeCheck />,
                skill: "Theme Customization",
                level: "Advanced"
            },
            {
                id: 6,
                icon: <HiOutlineBadgeCheck />,
                skill: "ACF Pro",
                level: "Advanced"
            },
            {
                id: 7,
                icon: <HiOutlineBadgeCheck />,
                skill: "Custom Post Types",
                level: "Advanced"
            },
            {
                id: 8,
                icon: <HiOutlineBadgeCheck />,
                skill: "Payment Integration",
                level: "Advanced"
            },
        ]
    },{
        id:4,
        title: "Data Science",
        SkillNames:[
            {
                id: 1,
                icon: <SiPython />,
                skill: "Python",
                level: "Advanced"
            },
            {
                id: 2,
                icon: <HiOutlineBadgeCheck />,
                skill: "DSA",
                level: "Intermediate"
            },
            {
                id: 3,
                icon: <HiOutlineBadgeCheck />,
                skill: "OOP",
                level: "Intermediate"
            },
            {
                id: 4,
                icon: <SiTensorflow />,
                skill: "TensorFlow",
                level: "Intermediate"
            },
            {
                id: 5,
                icon: <SiPandas />,
                skill: "Pandas",
                level: "Intermediate"
            },
            {
                id: 6,
                icon: <SiNumpy />,
                skill: "Numpy",
                level: "Intermediate"
            },
            {
                id: 7,
                icon: <AiOutlineLineChart />,
                skill: "Matplotlib",
                level: "Intermediate"
            },
            {
                id: 8,
                icon: <SiScikitlearn />,
                skill: "Scikit-learn",
                level: "Intermediate"
            },
        ]
    }
]
export default skillData;