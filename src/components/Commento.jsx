import React, { useEffect } from 'react';

const Commento = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.commento.io/js/commento.js';
        script.async = true;
        script.setAttribute('data-no-fonts', 'true'); // Optional attribute

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="commento" />
    );
};

export default Commento;