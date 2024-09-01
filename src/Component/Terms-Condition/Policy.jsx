import React from 'react'
import Footer from '../Footer/Footer'
import MegaMenu from '../MegaMenuNavbar/MegaMenu'
import './Term.css'
const Policy = () => {
    let Terms = [
        {
            idTerms: 1,
            question: " Electronic Agreement",
            answer: "This Agreement is an electronic contract that sets out the legally binding terms of your use of the Website and your membership in the Service. By accessing the website or becoming a member, you consent to receive communications from us electronically and accept this agreement and agree to the terms, conditions, notices, and disclosures contained or referenced herein."
        },
        {
            idTerms: 2,
            question: " DESCRIPTION OF SERVICE AND PRODUCTS:",
            answer: "The Company provides an opportunity for You to purchase the Products from high-end manufacturers and retailers. Upon placing an order, the Company shall ship the Product to You and will be entitled to its payment for the Services."
        },
        {
            idTerms: 3,
            question: " Privacy of Membership",
            answer: "Your Membership is only for personal use. It is not to be assigned, transferred or licensed so as to be used by any other person/entity. Members are advised to make appropriate/thorough enquiries before acting upon any service advertisement. Our Website does not vouch for or subscribe to the claims and representations made by advertisers. Kindly note that your membership at AMGemsandJewels.Com is for your sole, personal use. You may not authorize others to use your membership and you may not assign or transfer your account to any other person or entity.",
        },
        {
            idTerms: 4,
            question: "Non-Commercial Use",
            answer: "The AMGemsandJewels.Com Website is for the personal use of individual members, and cannot be used in connection with any commercial endeavours, unless registered and approved as an ‘Affiliate’ of AMGemsandJewels.Com The commercial endeavours include providing links to other web sites, whether deemed competitive to AMGemsandJewels.Com or otherwise. Illegal and/or unauthorized uses of the Website, including unauthorized framing of or linking to the Website will be investigated, and appropriate legal action will be taken, including without limitation, civil, criminal, and injunctive redress. AMGemsandJewels.Com shall be entitled to recover from you, your successors, heirs, assigns, etc. any profit, revenue, benefit, etc., which you have gained/ received, expected or going to receive with penalty @ 50% of such profit/ revenue/ benefit by unauthorized use of this site.",
        },
        {
            idTerms: 5,
            question: "DESCRIPTION OF SERVICE AND PRODUCTS",
            answer: "All Products and information displayed on the Website/s constitute an “invitation to offer”. Your order for purchase constitutes your “offer” which shall be subject to the terms and conditions as detailed in this Agreement. The Company may accept or reject your offer in its sole discretion which cannot be contested by you.The Company, to the best of its knowledge, has displayed or attempts to display on the Website/s as accurately as is possible, colours of the Products that is displayed on the Website/s. However, the colours visible to You are solely dependent on Your monitor. Hence, no guarantee is provided by the Company regarding your visibility of the colours on the Website/s.The Company does not provide any warranty or guarantee that the Product descriptions are accurate, complete, reliable, current, or error-free. If a Product offered by the Website/s is not as described, your sole remedy is to return it in unused, unsoiled and resale condition.The Company currently offers you the following:The Company offers a large selection of different types of Gemstones, Jewellery and related products, along with information which will inform and guide You to make the Purchase.",
        },
        {
            idTerms: 6,
            question: "YOUR OBLIGATION AND COVENANT TOWARDS THE PRODUCTS:",
            answer: "I addition to your other covenants in this Agreement, by ordering Product/s on the Website/s you acknowledge and agree that: That any non-delivery or wrong delivery of the Products by the Company due to an error in the information provided by you, then, any re-delivery cost in addition to the initial cost will be billed to you. All information provided by you including your contact details, name, and address, bank or credit card details are yours and authentic and there is no misrepresentation or fraudulent act from your end. That before placing an order you will check the Product description carefully. By placing an order for a Product You agree to be bound by the conditions of sale included in the item’s description.",
        },

    ]
    return (
        <>
            <MegaMenu/>
            <header className='Header-Term'>Privacy Policy</header>
            <div className='tw-Term-Division'>

                {Terms.map((Term) => (

                    <div key={Term.idTerms} id='tw-Term-Division'>
                        <h1>{Term.question}</h1>
                        <p>{Term.answer}</p>
                    </div>
                ))
                }
            </div>
            <Footer/>
        </>
    )
}

export default Policy