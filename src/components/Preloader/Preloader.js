import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Preloader = () => (
    <div
        className="Preloader align-items-center d-flex justify-content-center"
        style={{
            height: '74vh'
        }}
    >
        <div className="spinner-border" role="status" />
    </div>
);

export default Preloader;
