import React from 'react'
import illustration1 from '../../Images/illustration1.svg';
import illustration2 from '../../Images/illustration2.svg';
import illustration3 from '../../Images/illustration3.svg';

function Service() {
    return (
        <section className="service-section">
            <div className="service">
                <div className="serviceIllustration">
                    <img src={illustration1} alt="" className="serviceIllustrationImg" />
                </div>
                <div className="serviceText">
                    <h1 className="text-h1 service-h1">Pourquoi avez vous <span>en vrai</span> besoin d'un site web</h1>
                    <p className="service-text-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, reprehenderit accusantium possimus recusandae quidem beatae a praesentium adipisci vitae non similique distinctio? Vero soluta veniam amet perferendis dolores accusamus voluptatibus. <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quidem id dignissimos animi aliquam? Excepturi voluptatibus amet quod similique illum!
                    </p>
                </div>
            </div>
            <div className="service">
                <div className="serviceIllustration">
                    <img src={illustration2} alt="" className="serviceIllustrationImg" />
                </div>
                <div className="serviceText">
                    <h1 className="text-h1 service-h1">Titre <span>Representant</span>  une question</h1>
                    <p className="service-text-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, reprehenderit accusantium possimus recusandae quidem beatae a praesentium adipisci vitae non similique distinctio? Vero soluta veniam amet perferendis dolores accusamus voluptatibus. <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quidem id dignissimos animi aliquam? Excepturi voluptatibus amet quod similique illum!
                    </p>
                </div>
            </div>
            <div className="service">
                <div className="serviceIllustration">
                    <img src={illustration3} alt="" className="serviceIllustrationImg" />
                </div>
                <div className="serviceText">
                    <h1 className="text-h1 service-h1">Titre <span>Representant</span>  une question</h1>
                    <p className="service-text-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, reprehenderit accusantium possimus recusandae quidem beatae a praesentium adipisci vitae non similique distinctio? Vero soluta veniam amet perferendis dolores accusamus voluptatibus. <br />
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quidem id dignissimos animi aliquam? Excepturi voluptatibus amet quod similique illum!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Service
