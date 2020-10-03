import React from 'react';
import './App.css';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import PhotoGrid from './comps/PhotoGrid';
import SimpleReactLightbox from "simple-react-lightbox";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Title />
                        <UploadForm />
                        <SimpleReactLightbox>
                            <PhotoGrid />
                        </SimpleReactLightbox>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
