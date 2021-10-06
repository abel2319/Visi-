import React from 'react';
import { useRef } from 'react';
import { useIntersectionObserver } from '../../FunctionTools/FunctionTool';

function OurService() {
    const service1 = useRef(null);
    const service2 = useRef(null);
    const service3 = useRef(null);

    useIntersectionObserver(service1, "service-1-active", 0.2);
    useIntersectionObserver(service2, "service-2-active", 0.2);
    useIntersectionObserver(service3, "service-3-active", 0.2);
    return (
        <>
            <div id="sub-form"></div>
            <section id="ourService" className="ourService">
                <h1 className="title-section title-section-onblue">
                    <span>Service</span>
                    Our Service
                </h1>
                <div className="service-groupe">
                    <aside ref={service1} className="aside-service service-1">
                        <span className="icon"></span>
                        <h2 className="service-title">Title Here</h2>
                        <div className="service-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe expedita adipisci accusantium. Aspernatur magni reiciendis id maxime quaerat quo, adipisci optio suscipit aliquid quas dolorem, sunt sint esse ipsam vel dicta vero? Cupiditate molestiae necessitatibus, voluptas laudantium alias suscipit temporibus inventore incidunt, in quas sunt minima mollitia nam fugiat.
                        </div>
                        <a className="service-link" href="/">See more</a>
                    </aside>
                    <aside ref={service2} className="aside-service service-2">
                        <span className="icon"></span>
                        <h2 className="service-title">Title Here</h2>
                        <div className="service-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe expedita adipisci accusantium. Aspernatur magni reiciendis id maxime quaerat quo, adipisci optio suscipit aliquid quas dolorem, sunt sint esse ipsam vel dicta vero? Cupiditate molestiae necessitatibus, voluptas laudantium alias suscipit temporibus inventore incidunt, in quas sunt minima mollitia nam fugiat.
                        </div>
                        <a className="service-link" href="/">See more</a>
                    </aside>
                    <aside ref={service3} className="aside-service service-3">
                        <span className="icon"></span>
                        <h2 className="service-title">Title Here</h2>
                        <div className="service-text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe expedita adipisci accusantium. Aspernatur magni reiciendis id maxime quaerat quo, adipisci optio suscipit aliquid quas dolorem, sunt sint esse ipsam vel dicta vero? Cupiditate molestiae necessitatibus, voluptas laudantium alias suscipit temporibus inventore incidunt, in quas sunt minima mollitia nam fugiat.
                        </div>
                        <a className="service-link" href="/">See more</a>
                    </aside>
                </div>
            </section>
            <div id="sub-form-bottom"></div>
        </>
    )
}

export default OurService;