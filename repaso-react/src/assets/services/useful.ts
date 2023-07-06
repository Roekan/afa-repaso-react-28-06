

export const errorCheck = (name:string,value:string,password1:string, password2:string) => {

    switch (name){
    case "email":
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)){
            return "Debe introducir un formato de correo válido (ejemplo@ejemplo.com)"
        }
        break;

    case "password":
        if(value.length<8){
            return "La contraseña debe tener al menos 8 caracteres";
        }else if (!value.match(/[a-z]/)){
            return "La contraseña debe contener alguna minúscula"
        }else if (!value.match(/[A-Z]/)){
            return "La contraseña debe contener al menos una mayúscula"
        }
        break;

    case "password2":
        if(value!=password1){
            return "Las contraseñas no coinciden"
        }
        break;

    default:
        return "Formato incorrecto";
    }
};
