export async function getServerSideProps() {

    console.log('Simulación de envío de datos a la API');

    // Retorna algunos datos de ejemplo
    return {
        props: {
            serverData: 'Datos enviados a la API',
        },
    };
}