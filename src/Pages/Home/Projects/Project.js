import React from 'react';
import { Link } from 'react-router-dom';

function Project({ project }) {
    const { id, name, gitHub, server, live, description, pictures} = project;
    return (
        <div>
            <div className="card mx-3 md:mx-0 bg-base-100 shadow-xl image-full">
                {
                    pictures[0] && <figure>
                        <img src={pictures[0]} alt="Shoes" />
                    </figure>
                }
                <div className="card-body items-center align-middle justify-center">
                    {
                        name && <h2 className="card-title">{name}</h2>
                    }
                    {
                        description && <p className="flex-grow-0">
                        {description}
                    </p>
                    }
                    <div className="card-actions justify-around">
                        {
                            gitHub && <a
                                href={gitHub}
                                target={"_blank"}
                                className=""
                            >
                                GitHub
                            </a>
                        }
                        {
                            server && <a
                                href={server}
                                target={"_blank"}
                                className="border-l-2 pl-2"
                            >
                                Server Side Code
                            </a>
                        }
                        {
                            live && <a
                                href={live}
                                target={"_blank"}
                                className="border-l-2 pl-2"
                            >
                                Live Side
                            </a>
                        }
                    </div>
                    <div>
                        <Link to={`/project/${id}`}><button className='btn btn-accent '>Explore More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;