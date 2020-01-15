import React from 'react';
import './UploadFile.css';

const UploadFile = ({ handleUrl }) => {
    const handleFile = e => {
        const file = e.target.files[0];
        if (!file) return;

        const fileURL = window.URL.createObjectURL(file);

        handleUrl(fileURL);
    };

    return (
        <form className="form-group">
            <input
                id="file"
                type="file"
                className="form-control-file"
                onChange={handleFile}
            />
            <label htmlFor="file" className="w-100 p-2">Upload music</label>
        </form>
    );
};

export default UploadFile;
