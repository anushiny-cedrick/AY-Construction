import React from 'react'

const OurServices = () => {

    const images = {
        residential: 'https://images.unsplash.com/photo-1568605114967-9b1583b3c81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg3M3wwfDF8c2VhcmNofDF8fHJlc2lkZW50aWFsJTIwY29uc3RydWN0aW9ufGVufDB8fHx8MTY3ODA3NzM0OA&ixlib=rb-4.0.3&q=80&w=400',
        commercial: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg3M3wwfDF8c2VhcmNofDl8fGFncmVlfGVufDB8fHx8MTY3ODA3NzM2Mw&ixlib=rb-4.0.3&q=80&w=400',
        projectManagement: 'https://images.unsplash.com/photo-1507754802495-d4dd61522411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg3M3wwfDF8c2VhcmNofDV8fHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDB8fHx8MTY3ODA3NzM4Nw&ixlib=rb-4.0.3&q=80&w=400',
        remodeling: 'https://images.unsplash.com/photo-1616685829489-b98d81f54b0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg3M3wwfDF8c2VhcmNofDJ8fHJlbW9kZWxpbmclMjBhbmQlMjByZW5vdmF0aW9ufGVufDB8fHx8MTY3ODA3NzQwMA&ixlib=rb-4.0.3&q=80&w=400',
        landscaping: 'https://images.unsplash.com/photo-1560185127-8e3509e2d9aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg3M3wwfDF8c2VhcmNofDEwfHxsYW5kc2NhcGV8ZW58MHx8fHwxNjc4MDc3NDA4&ixlib=rb-4.0.3&q=80&w=400',
    };

    // Design software used in designs  
    const softwareList = [
        { name: "AutoCAD", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Autodesk_AutoCAD_Logo.svg" },
        { name: "Revit", logo: "https://upload.wikimedia.org/wikipedia/en/5/59/Autodesk_Revit_logo.svg" },
        { name: "SketchUp", logo: "https://upload.wikimedia.org/wikipedia/commons/5/54/SketchUp_logo.svg" },
        { name: "Lumion", logo: "https://www.lumion.com/wp-content/themes/lumion/assets/images/lumion/logo-white.svg" },
        { name: "3ds Max", logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/Autodesk_3ds_Max_logo.svg" },
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
                <h1 style={{ marginBottom: '20px' }}>Our Services</h1>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                            <img src={service.image} alt={service.title} style={{ maxWidth: '100%', borderRadius: '6px' }} />
                            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{service.title}</h3>
                            <p style={{ fontSize: '14px', color: '#555' }}>{service.description}</p>
                        </div>
                    ))}
                </div>

                <h2 style={{ marginTop: '40px' }}>Design Software We Use</h2>
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
