import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

    const [file, setFile] = useState(null);

    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpg', 'image/PNG', 'image/jpeg', 'image/svg+xml'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected)

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('Please Select an image file (png,jpg)');
        }

    }

    return (
        <div className="uploadform">
            <form>
                <label>
                    <input type="file" onChange={changeHandler} />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className="errorText">{error}</div>}
                    {file && <div className="filename">{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
                </div>
            </form>
        </div>
    )
}

export default UploadForm;