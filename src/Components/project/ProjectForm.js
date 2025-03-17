import { useState, useEffect} from "react";
import Input from "../Form/Input";
import Select from "../Form/Select";
import SubmitButton from "../Form/SubmitButton";
import styles from "./ProjectForm.module.css";

function ProjectForm ({ btnText, handleSubmit, projectData }) {

    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});// se os dados vir do formulário de edição o meu useState de project irá ter um valor inicial de projectData, que é o projeto já com os dados para fazer edição , caso for do formulário de criação ele será um objeto vazio "{}" e eu mesmo irei preencher pelos inputs que é o nosso cadastro;.

    //Aqui faço um método get no meu banco para buscar as minhas categorias , que serão as options do meu select

    //O useEffect faz algo a partir de alguma ação nossa, e nós vamos determinar esta ação, como nome já diz, algum efeito será originado a partir de alguma ação nossa.
    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json()) //Aqui eu recebo em arquivo json.
        .then((data) => { //Aqui eu tenho que "data" já são as categorias que vieram do banco.
            setCategories(data); //E aqui eu utilizo o useState, setando/atualizando as categorias com os valores do banco
            
        })
        .catch((err) => console.log(err)); // Catch eu uso para tratar algum erro
    }, []); // Este colchete é o valor inicial que passo para o useEffect, que no caso é a minha option vazia. Sempre eu for usar o useEffect para buscar dados externos, do banco por exemplo, eu uso o useEffect desta forma, assim ele ira rodar só uma vez, ou seja quando eu iniciar a aplicação, e irá carregar os dados que estou buscando.

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project); //executa a função que veio como argumento e passa o projeto que esta cadastrado aqui no formulário;
        
    };

    //A função handleChange é usada para atualizar/inserir o estado (project) dinamicamente quando um campo de um formulário neste caso o "nome, ou orçamento" é modificado.
    function handleChange(e) {
        setProject({...project,  // Mantém os valores antigos do estado
            [e.target.name] : e.target.value}) // Atualiza apenas o campo modificado

            /*             
            "e.target.name"
            Obtém o atributo name do campo que está sendo modificado.
            Exemplo: Se um <input name="name" /> for alterado, e.target.name será "name".
            
            "e.target.value"
            Obtém o novo valor digitado no campo pelo usuário.
            */
    };


    //Essa função  é responsável por lidar com a alteração de uma categoria selecionada no campo de seleção (<select>) de categoria.
    function handleCategory(e) {
        setProject({...project, // Mantém o resto do objeto 'project' intacto
            category: {
                id: e.target.value, // Obtém o valor da opção selecionada
                name: e.target.options[e.target.selectedIndex].text // Obtém o texto da opção selecionada
            }
        })
    };

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do projeto" 
                name="name" 
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}  
                value={project.name ? project.name : ''}  
            />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                name="category_id"
                text="Selecione a categoria" 
                options={categories}  
                handleChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default ProjectForm;