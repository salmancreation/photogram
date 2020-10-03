import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { SRLWrapper } from "simple-react-lightbox";
import { motion } from "framer-motion";

const PhotoGrid = () => {

    const { docs } = useFirestore('images');

    console.log(docs);

    return (
        <div className="photo-grid">
            <div className="container">
                <div className="row">
                    {docs && docs.map(doc => (
                        <motion.div className="img-wrap col-md-4 col-12" key={doc.id}
                            layout
                        >
                            <SRLWrapper>
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    src={doc.url} alt={doc.createdAt} />
                            </SRLWrapper>
                        </motion.div>
                    ))
                    }
                </div>
            </div>
        </div >
    )

}

export default PhotoGrid;