import { useLocation } from "react-router-dom";

import Message from "../layout/Message";
import Container from "../layout/Container";
import Loading from "../layout/Loading";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";

import styles from "./Projects.module.css";
import { useState, useEffect } from "react";

function Projects() {

    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [messageProject, setMessageProject] = useState("");

    const location = useLocation();
    let message = "";

    if(location.state) {
        message = location.state.message;
    }

    useEffect( () => {
        setTimeout( () => {
            fetch("http://localhost:5000/projects" ,{
                method: "get",
                headers: {
                    "Content-type": "application/json"
                },
            })
            .then( (resp) => resp.json())
            .then( (data) => {
                setProjects(data);
                setRemoveLoading(true);
            })
            .catch( (err) => console.log (err));
        }, 300)
    }, []);

    function removeProject(id){
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((res) => res.json())
        .then( data => {
            setProjects(projects.filter((project) => project.id !== id));
            setMessageProject("Projeto removido com sucesso!");
        })
        .catch((err) => console.log(err));
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to="/newproject" text="Criar Projeto"/>
            </div>
                {message && <Message msg={message} type="success"/>}
                {messageProject && <Message msg={messageProject} type="success"/>}
                <Container customClass="start">
                    { projects.length > 0 &&
                        projects.map((project) => <ProjectCard 
                            name = {project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                            />
                        )
                    }
                    {!removeLoading && <Loading/>}
                    {removeLoading && projects.length === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )}
                </Container>
        </div>
    );
}
export default Projects;