function SayMyName(props){ // props deixa um componente dinamico

    return(
        <div>
            <p>Fala aí {props.nome}, suave?</p>
        </div>

    );

}

export default SayMyName;