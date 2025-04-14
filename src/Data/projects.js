// src/data/projects.js

import house1 from "../assets/house1.jpg"
import house2 from "../assets/house2.jpg"
import house3 from "../assets/house3.jpg"
import house4 from "../assets/house4.jpg"
const projects = [
    //     {
    //         id: 1,
    //         title: "Modern Family Home",
    //         category: "Residential",
    //         location: "New York",
    //         year: 2023,
    //         description: "A 3-bedroom contemporary home with a modern design.",
    //         image: house1,
    //         details: {
    //             size: "2500 sq ft",
    //             budget: "$500,000",
    //             client: "Private Client",
    //             testimonial: "AY Construction transformed our home into a dream space. Highly recommended!",
    //         },
    //     },
    //     {
    //         id: 2,
    //         title: "Office Building",
    //         category: "Commercial",
    //         location: "Los Angeles",
    //         year: 2022,
    //         description: "A state-of-the-art office space for a tech company.",
    //         image: house2,
    //         details: {
    //             size: "10,000 sq ft",
    //             budget: "$2,000,000",
    //             client: "Tech Corp",
    //             testimonial: "Professional and efficient. Delivered on time and within budget.",
    //         },
    //     },
    //     {
    //         id: 3,
    //         title: "Modern Family Home",
    //         category: "Residential",
    //         location: "New York",
    //         year: 2023,
    //         description: "A 3-bedroom contemporary home with a modern design.",
    //         image: house3,
    //         details: {
    //             size: "2500 sq ft",
    //             budget: "$500,000",
    //             client: "Private Client",
    //             testimonial: "AY Construction transformed our home into a dream space. Highly recommended!",
    //         },
    //     },
    //     {
    //         id: 4,
    //         title: "Modern Family Home",
    //         category: "Residential",
    //         location: "New York",
    //         year: 2023,
    //         description: "A 3-bedroom contemporary home with a modern design.",
    //         image: house4,
    //         details: {
    //             size: "2500 sq ft",
    //             budget: "$500,000",
    //             client: "Private Client",
    //             testimonial: "AY Construction transformed our home into a dream space. Highly recommended!",
    //         },
    //     },
    // ];





    // In src/Data/projects.js
    {
        id: 1,
        title: "Modern Family Home",
        category: "Residential",
        location: "New York",
        year: 2023,
        description: "A 3-bedroom contemporary home with a modern design...",
        image: house1,
        images: [house1, house2, house3], // Array of images
        details: {
            size: "2500 sq ft",
            budget: "$500,000",
            timeline: "6 months",
            client: "Private Client",
            architect: "Smith & Partners",
            features: ["Open floor plan", "Smart home system", "Energy efficient"],
            testimonial: "AY Construction transformed our home...",
            challenges: "Limited urban space required creative solutions...",
            solutions: "We utilized vertical space and custom storage..."
        },
        status: "completed" // or "ongoing" with progress percentage
    },
    {
        id: 1,
        title: "Modern Family Home",
        category: "Residential",
        location: "New York",
        year: 2023,
        description: "A 3-bedroom contemporary home with sustainable materials and smart home technology.",
        image: house2,
        images: [house1, house2, house3],
        details: {
            size: "2,500 sq ft",
            budget: "$520,000",
            timeline: "7 months",
            client: "The Johnson Family",
            architect: "Smith & Partners",
            features: [
                "Solar panel roof",
                "Home automation system",
                "Custom built-in cabinetry",
                "Energy-efficient windows"
            ],
            testimonial: "AY Construction delivered beyond our expectations. Their attention to detail made our dream home a reality.",
            challenges: "Narrow urban lot with strict zoning restrictions.",
            solutions: "Designed vertical space utilization and obtained special variances."
        },
        status: "completed"
    },
    {
        id: 2,
        title: "Tech Campus Office Complex",
        category: "Commercial",
        location: "San Francisco",
        year: 2022,
        description: "A 5-story office building for a growing tech startup with collaborative workspaces.",
        image: house3,
        images: [house2, house3, house1, house2, house3],
        details: {
            size: "45,000 sq ft",
            budget: "$8.2 million",
            timeline: "14 months",
            client: "Nexus Technologies",
            architect: "Foster & Associates",
            features: [
                "LEED Platinum certification",
                "Rooftop terrace",
                "Modular work pods",
                "Advanced HVAC system"
            ],
            testimonial: "The project was completed two weeks ahead of schedule despite supply chain challenges.",
            challenges: "Last-minute design changes requested by client.",
            solutions: "Implemented flexible construction phasing to accommodate changes."
        },
        status: "completed"
    },
    {
        id: 3,
        title: "Boutique Retail Center",
        category: "Retail",
        location: "Miami",
        year: 2023,
        description: "Luxury shopping destination with 12 storefronts and central courtyard.",
        image: house4,
        images: [house3, house4, house1, house2, house3],
        details: {
            size: "18,000 sq ft",
            budget: "$3.5 million",
            timeline: "9 months",
            client: "Miami Lifestyle Group",
            architect: "Garcia Design Studio",
            features: [
                "Italian marble flooring",
                "Custom glass storefronts",
                "Interactive digital signage",
                "Hurricane-resistant construction"
            ],
            testimonial: "Their ability to maintain operations in adjacent stores during construction was impressive.",
            challenges: "Working in a fully occupied adjacent mall.",
            solutions: "Implemented strict noise/schedule controls and temporary barriers."
        },
        status: "completed"
    },
    {
        id: 4,
        title: "Urban High-Rise Renovation",
        category: "Renovation",
        location: "Chicago",
        year: 2024,
        description: "Complete modernization of a 1970s office tower into luxury apartments.",
        image: house1,
        images: [house1, house2, house1, house2, house3],
        details: {
            size: "320,000 sq ft",
            budget: "$22 million",
            timeline: "18 months",
            client: "Urban Living Developers",
            architect: "Skidmore Architects",
            features: [
                "Structural seismic upgrades",
                "Floor-to-ceiling windows",
                "Rooftop infinity pool",
                "Historic facade preservation"
            ],
            testimonial: "AY Construction navigated complex historic preservation requirements flawlessly.",
            challenges: "Uncovering outdated electrical systems not in original plans.",
            solutions: "Created adaptive redesign that met modern codes while preserving historic elements."
        },
        status: "ongoing",
        progress: 65
    },
    {
        id: 5,
        title: "Elementary School Expansion",
        category: "Institutional",
        location: "Austin",
        year: 2023,
        description: "Addition of 12 new classrooms and STEM lab for growing school district.",
        image: house3,
        images: [house3, house4, house1, house2, house3],
        details: {
            size: "28,000 sq ft",
            budget: "$6.8 million",
            timeline: "11 months",
            client: "Austin ISD",
            architect: "Educational Spaces LLC",
            features: [
                "Acoustic-optimized classrooms",
                "Solar-ready infrastructure",
                "ADA-compliant design",
                "Outdoor learning spaces"
            ],
            testimonial: "Completed during summer break with zero disruption to school operations.",
            challenges: "Working within tight school vacation timeline.",
            solutions: "24/7 shifts and prefabricated components to accelerate construction."
        },
        status: "completed"
    },
    {
        id: 6,
        title: "Lakeside Luxury Villas",
        category: "Residential",
        location: "Lake Tahoe",
        year: 2024,
        description: "Six custom vacation homes with private docks and mountain views.",
        image: house4,
        images: [house4, house1, house2],
        details: {
            size: "4,200 sq ft (each)",
            budget: "$2.1 million per unit",
            timeline: "16 months",
            client: "Alpine Retreat Properties",
            architect: "Mountain Modern Design",
            features: [
                "Heated driveway systems",
                "Indoor-outdoor fireplaces",
                "Boat house integration",
                "Geothermal heating"
            ],
            testimonial: "The craftsmanship on these homes exceeds our luxury resort standards.",
            challenges: "Remote location with limited material access.",
            solutions: "Advanced material planning and on-site storage solutions."
        },
        status: "ongoing",
        progress: 40
    },
    {
        id: 7,
        title: "Downtown Parking Structure",
        category: "Municipal",
        location: "Seattle",
        year: 2022,
        description: "7-story parking garage with retail space and EV charging stations.",
        image: house1,
        images: [house1, house2],
        details: {
            size: "210,000 sq ft",
            budget: "$15 million",
            timeline: "13 months",
            client: "City of Seattle",
            architect: "Civic Infrastructure Partners",
            features: [
                "Automated parking guidance",
                "Solar panel canopy",
                "Stormwater recycling",
                "Mixed-use retail spaces"
            ],
            testimonial: "Came in 8% under budget while exceeding all sustainability targets.",
            challenges: "Working around existing subway infrastructure.",
            solutions: "Coordinated with transit authority for phased construction."
        },
        status: "completed"
    },
    {
        id: 8,
        title: "Medical Office Building",
        category: "Healthcare",
        location: "Boston",
        year: 2023,
        description: "Specialized facility for orthopedic practice with outpatient surgery center.",
        image: house1,
        images: [house1],
        details: {
            size: "36,000 sq ft",
            budget: "$9.7 million",
            timeline: "15 months",
            client: "Boston Orthopedic Group",
            architect: "Healthcare Design Collaborative",
            features: [
                "Surgical-grade HVAC",
                "ADA-compliant exam rooms",
                "Radiation-shielded imaging suite",
                "Healing garden courtyard"
            ],
            testimonial: "The infection control protocols during construction were exceptional.",
            challenges: "Stringent vibration and cleanliness requirements.",
            solutions: "Implemented hospital-grade containment and monitoring."
        },
        status: "completed"
    }
]





export default projects;