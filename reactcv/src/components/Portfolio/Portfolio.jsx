import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Portfolio.css';

const Portfolio = () => {
    const [loading, setLoading] = useState(true);
    const [repos, setRepos] = useState([]);
    const [htmlUrls, setHtmlUrls] = useState([]);

    useEffect(() => {

        const delay = setTimeout(() => {
            fetch("https://api.github.com/users/dinozoff1981/repos")
                .then((response) => response.json())
                .then((result) => {
                    console.log(result);
                    const cSharpRepos = result.filter(repo => repo.language);
                    setRepos(cSharpRepos);
                    setHtmlUrls(cSharpRepos.map(repo => repo.html_url));
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                });
        }, 2000);

        return () => clearTimeout(delay);
    }, []);

    return (
        <>
            <div className="progress-container">
                {loading ? (
                    <ProgressBar animated={loading} now={100} className="progress-bar-custom" />

                ) : (
                    <div className="center-container">
                        
                            <Card>
                                <Card.Body>
                                    <div className="repo-flex-container">
                                        {repos.map(repo => (
                                             <Card className='repo-card' border="primary" style={{ width: '18rem' }} key={repo.id}>
                                             <Card.Header>{repo.language}</Card.Header>
                                             <Card.Body>
                                               <Card.Title className='Title'>{repo.name}</Card.Title>
                                               <Card.Text>
                                                {repo.created_at}
                                               </Card.Text>
                                             </Card.Body>
                                           </Card>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        
                    </div>
                )}
            </div>
        </>
    );
}

export default Portfolio;
