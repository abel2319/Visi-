import { useEffect } from "react";

const useIntersectionObserver = function(element, classeName, threshold){

    useEffect(() => {
        var observer = new IntersectionObserver((entries)=>{
            entries.forEach(entrie=>{
                if(entrie.intersectionRatio >= threshold){
                    console.log("ok for "+entrie.target);
                    entrie.target.classList.add(classeName)
                    observer.unobserve(entrie.target)
                }
            })
        }, {
            root : null,
            threshold :threshold,
            rootMargin : '0px'
        });
        observer.observe(element.current)
    });
}

export  {
    useIntersectionObserver,

};