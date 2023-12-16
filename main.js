// Objeto para almacenar las conversiones y constantes necesarias
const conversiones = {
    velocidadKmPorHoraAMetrosPorSegundo: 1 / 3.6,
    newtonPorKilogramo: 9.8, // Aceleración debida a la gravedad en la Tierra
  };
  
  // Función para convertir velocidad 
  function convertirVelocidadKmPorHoraAMetrosPorSegundo(velocidadKmPorHora) {
    return velocidadKmPorHora * conversiones.velocidadKmPorHoraAMetrosPorSegundo;
  }
  
  // función para calcular la fuerza 
  function calcularFuerza(velocidad, masa) {
    return velocidad * masa * conversiones.newtonPorKilogramo;
  }
  
  // Función para obtener datos de forma asíncrona (simulación)
  function obtenerDatosAsincronos() {
    return new Promise((resolve, reject) => {
      // Simulando una operación asincrónica, por ejemplo, una solicitud a un servidor
      setTimeout(() => {
        const data = prompt("Ingrese la multiplicación colocando primero la velocidad en km por hora y luego la masa en kg (por ejemplo, 120 * 50):");
        resolve(data);
      }, 1000); // Simulando un segundo de espera
    });
  }
  
  // Función para calcular la fuerza de Newton de forma asíncrona
  async function calcularFuerzaDeNewtonAsync() {
    try {
      const expresion = await obtenerDatosAsincronos();
      const [velocidad, masa] = expresion.split('*').map(item => parseFloat(item.trim()));
  
      if (!isNaN(velocidad) && !isNaN(masa)) {
        const velocidadEnMetrosPorSegundo = convertirVelocidadKmPorHoraAMetrosPorSegundo(velocidad);
        const fuerza = calcularFuerza(velocidadEnMetrosPorSegundo, masa);
  
        // Crear un nuevo elemento div y agregar el resultado como texto
        const resultadoDiv = document.createElement('div');
        resultadoDiv.innerText = `La cantidad de Newtons de fuerza es: ${fuerza.toFixed(2)}`;
  
        // Agregar el nuevo elemento al cuerpo del documento
        document.body.appendChild(resultadoDiv);
      } else {
        alert("Por favor, ingrese una expresión válida.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se puede calcular la fuerza. Asegúrese de ingresar una expresión válida.");
    }
  }
  
  // Llamada a la función principal para calcular la fuerza de Newton de forma asíncrona
  calcularFuerzaDeNewtonAsync();
  