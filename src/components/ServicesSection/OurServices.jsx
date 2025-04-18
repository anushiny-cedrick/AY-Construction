import React from 'react'
import "./OurServices.css"
import autocad from "../../assets/Autocad-Logo.png"
import revit from "../../assets/revit-logo.png"
import skeup from "../../assets/sketupLogo.png"
import lumion from "../../assets/lumion.png"
import max_3d from "../../assets/3ds-max.png"
import Residentail from "../../assets/Residential.jpg"
import modern from "../../assets/modern.jpg"
import landscaping from "../../assets/Landscaping.jpeg"
import Remodeling from "../../assets/Remodeling.jpg"
const OurServices = () => {

    const images = {
        residential: Residentail,
        commercial: modern,
        projectManagement: 'https://images.unsplash.com/photo-1507754802495-d4dd61522411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg3M3wwfDF8c2VhcmNofDV8fHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDB8fHx8MTY3ODA3NzM4Nw&ixlib=rb-4.0.3&q=80&w=400',
        remodeling: Remodeling,
        landscaping: landscaping,
    };

    // Design software used in designs  
    const softwareList = [
        { name: "AutoCAD", logo: autocad },
        { name: "Revit", logo: revit },
        { name: "SketchUp", logo: skeup },
        { name: "Lumion", logo: lumion },
        { name: "3ds Max", logo: max_3d },
    ];

    const services = [
        {
            title: "Residential Construction",
            description: "Custom homes, renovations, and extensions.",
            image: images.residential
        },
        {
            title: "Commercial Construction",
            description: "Office buildings, retail spaces, and warehouses.",
            image: images.commercial
        },
        {
            title: "Project Management",
            description: "From planning to execution, we handle it all.",
            image: images.projectManagement
        },
        {
            title: "Remodeling and Renovation",
            description: "Transforming spaces to meet your needs.",
            image: images.remodeling
        },
        {
            title: "Landscaping and Outdoor Spaces",
            description: "Creating beautiful, functional outdoor areas.",
            image: images.landscaping
        }
    ];

    return (
        <div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1 style={{ marginBottom: '20px', color: '#002366' }}>Our Services</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <img src={service.image} alt={service.title} style={{ maxWidth: '100%', borderRadius: '6px' }} />
                            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{service.title}</h3>
                            <p style={{ fontSize: '14px', color: '#555' }}>{service.description}</p>
                        </div>
                    ))}
                </div>

                <h2 style={{ marginTop: '40px', color: '#002366' }}>Design Software We Use</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
                    {softwareList.map((software, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <img src={software.logo} alt={software.name} style={{ height: '50px', marginBottom: '10px' }} />
                            <p style={{ fontSize: '14px' }}>{software.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default OurServices
