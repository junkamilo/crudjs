export const listar_usuarios = async () =>{
    try {
        const response = await fetch("http://localhost:3000/usuarios");
        const users = await response.json();
        return users;
    } catch (error) {
        console.error(error);
    }
}