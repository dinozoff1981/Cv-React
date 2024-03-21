import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Portfolio.css';

const Portfolio = () => {
    const [repos, setRepos] = useState([]);
    const [htmlUrls, setHtmlUrls] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/dinozoff1981/repos")
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                const cSharpRepos = result.filter(repo => repo.language === "C#");
                setRepos(cSharpRepos);
                setHtmlUrls(cSharpRepos.map(repo => repo.html_url));
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="center-container">
            <div className="git-card">
                <Card>
                    <Card.Body>
                        <div className="repo-flex-container">
                            {repos.map((repo, index) => (
                                <Card key={repo.id} className="repo-card">
                                    <Card.Body>
                                        <Card.Title>{repo.name}</Card.Title>
                                        <Card.Text>
                                            Language: {repo.language}
                                        </Card.Text>
                                        <Button variant="primary" href={htmlUrls[index]} target="_blank">
                                            Go To Project
                                        </Button>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Portfolio;
