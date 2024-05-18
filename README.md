# Hooks
## Que es el state
### o Estado en React

El estado es una variable con información relevante
en nuestra aplicación.

Se puede pensar en el state como alguna interacción 
en el sitio  o aplicación web.

ejemplo:
 ~~~
         state     function
 const [customer, setCustomer] = useState({"Valor inicial"});
 const [total, setTotal] = useState(0);
 const [products, setProducts] = useState([]);

 state: es la variable que tienen la información.
 function: es la funcion que modifca el state, siempre se
 utiliza cuando se requiere realizar cambios al state
 ~~~

 dependiendo del tipo de datos va a ser el 
 valor inicial de tu estado.

 Cada vez que el State cambia la aplicación reneriza y actualizara los datos.

 ## Reglas de los Hooks

 - Los HOOKS se colocan en la parte superior de tus componenetes
 - No se deben colocar dentro de condicionales, tampoco después
   de un return.

## useEffect

Despues de useState es el más utilizado

siempre tiene un callback, que dependiendo como lo declares va a 
realizar diferentes acciones.

 ~~~
  useEffect( ()=> {
    console.log('El componente esta listo')
  }, ["aquí van las dependencias"]);
 ~~~

Se ejecuta automáticamente cuando el componente esta listo,
es un buen lugar para colocar código para consultar una
API o LocalStorage

Podemos pasar una dependencia y estar escuchando por
los cambios que sucedan en una variable (o state), puede 
actualizar el componente cuando ese cambio suceda

Dependiendo del valor que pasemos en el array de dependecias
(o no pasemos nada) el hook hará algo diferente.

## Statements
Una app de JS es una serie de statements, cada statment es una
instrucción para hacer algo. 

Algunos Statements son:
  - Creación de variables
  - Código condicional con if
  - Lanzar errores con throw new Error()
  - Iterar con While o For

## Expressions
Una expresión es algo que produce un valor

Algunas Expreciones son:
  - Ternarios
  - Utilizar un Array Method que genere un nuevo Array
  - .map que genera un nuevo array a diferencia de forEach

## Props
Los componentes de React utilizan Props para comunicarse entre ellos.
Puedes pasarle información de un componente padre al hijo por medio
de estos props.
Se parecen mucho a los atributos en HTML, pero puedes pasarle arrays, objetos o funciones.
Los props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre.

Si tienes un state que se va a pasar por 
diferentes componentes, lo mejor es colocarlo
en el archivo principal.

Cada Nivel de Componentes debera tomar y pasar
el Prop hacia otros componentes, tecnologías como
Redux, Zustand, Jotai o Context evitan tener que 
hacerlo de esta forma.

{/* map no puede ser utilizado en un null */}
      {/* {data.map((guitar) => (

        <Test
          guitar={guitar}
        />

      ))} */}

    
datos: 
- telefono
- whatsapp: (en caso de que se vaya a usar si no para que cambie el icono por el de un telefono)
Promoción y precio: 
  estas son algunas que me dijiste que escribiera para que las recordaras y analizaras:
  1.Facias 
  2.Restauración de faros
  3.Pintura de cajuela, toldo y cofre por tan solo 
  4.Puertas y salpicaderas
Agrege un icono de ubicación que envia a maps solo falta
que me digas si se queda y que dirección pongo porque 
no me la se jaja