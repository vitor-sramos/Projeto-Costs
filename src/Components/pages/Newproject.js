import {useNavigate} from "react-router-dom";
import ProjectForm from "../project/ProjectForm";
import styles from "./Newproject.module.css";

function Newproject() {

    const navigate = useNavigate();// ajuda a direcionar o usuario para outra pagina

    function createPost(project) {
        //vou inicalizar alguns atributos do meu project vazios por que vou ir informando eles ao longo da utilização do meu site.

        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(project) // Converte o objeto `project` para uma string JSON
        })
        .then((res) => res.json())
        .then((data) => {
            navigate("/projects",{ state: {message: "Projeto criado com sucesso!"}} );//Redireciona para a pagina de projetos após a cricão de um.
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    );
}
export default Newproject;