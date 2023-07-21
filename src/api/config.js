
const baseUrl = (window.location.host === 'eastclinic.ru')
        ? 'https://eastclinic.ru/assets/components/eastclinic/remote/connector.php'
        : 'http://dev.eastclinic.local/assets/components/eastclinic/remote/connector.php'

export { baseUrl };
