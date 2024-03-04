export async function getServerSideProps() {

    console.log('Simulation of sending data to the API');

    // Retorna algunos datos de ejemplo
    return {
        props: {
            serverData: 'Data sent to API',
        },
    };
}