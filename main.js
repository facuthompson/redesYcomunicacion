function showTopology(type) {

    const title = document.getElementById("topologyTitle");
    const text = document.getElementById("topologyText");

    const data = {

        bus: {
            title: "Topología Bus",
            text: "En esta topología todos los dispositivos están conectados a un único cable principal llamado “bus” o troncal. La información viaja por ese cable y cada equipo verifica si el mensaje está dirigido a él."
        },

        estrella: {
            title: "Topología Estrella",
            text: "En la topología estrella todos los dispositivos están conectados a un equipo central, generalmente un switch o hub. Actualmente es la más utilizada en redes LAN.."
        },

        anillo: {
            title: "Topología Anillo",
            text: "En esta topología los dispositivos están conectados formando un círculo o anillo. Cada equipo se conecta con el siguiente y el último con el primero."
        },

        malla: {
            title: "Topología Malla",
            text: "En una red de malla cada dispositivo está conectado con varios o todos los demás dispositivos de la red. Esto permite múltiples caminos para transmitir datos."
        },

        hibrida: {
            title: "Topología Híbrida",
            text: "La topología híbrida combina dos o más topologías diferentes dentro de una misma red."
        }

    };

    title.innerText = data[type].title;
    text.innerText = data[type].text;

}


function showSTP(type) {

    const title = document.getElementById("stpTitle");
    const text = document.getElementById("stpText");

    const data = {

        rutas: {
            title: "Detección de Rutas",
            text: "STP analiza rutas redundantes entre switches."
        },

        bloquear: {
            title: "Bloqueo de Redundancias",
            text: "El protocolo desactiva caminos innecesarios."
        },

        backup: {
            title: "Backups Automáticos",
            text: "Si un enlace falla, STP activa rutas alternativas."
        }

    };

    title.innerText = data[type].title;
    text.innerText = data[type].text;

}


function showOSI(type) {

    const title = document.getElementById("osiTitle");
    const text = document.getElementById("osiText");

    const data = {

        app: {
            title: "Capa de Aplicación",
            text: "Conecta directamente con la aplicación del usuario final, proporcionando diversos servicios (navegación, correo electrónico, etc.)."
        },

        presentacion: {
            title: "Capa de Presentación",
            text: "Traduce los datos entre los formatos utilizados por una aplicación cuando transmite datos a través de la red. También gestiona el cifrado y la compresión de datos."
        },

        sesion: {
            title: "Capa de Sesión",
            text: "Responsable de la gestión de la sesión, la sincronización y la organización del tráfico."
        },

        transporte: {
            title: "Capa de Transporte",
            text: "Responsable de garantizar que los datos se transfieren de forma completa y fiable entre redes."
        },

        red: {
            title: "Capa de Red",
            text: "Enruta, reenvía y direcciona paquetes entre redes."
        },

        enlace: {
            title: "Capa de Enlace",
            text: "Gestiona la transferencia de datos entre dispositivos de la red y corrige los errores de la capa física."
        },

        fisica: {
            title: "Capa Física",
            text: "Incluye los componentes físicos que conectan el dispositivo (cables, routers, etc.)."
        }

    };

    title.innerText = data[type].title;
    text.innerText = data[type].text;

}


function showTCP(type) {

    const title = document.getElementById("tcpTitle");
    const text = document.getElementById("tcpText");

    const data = {

        app: {
            title: "CAPA 4: Aplicación",
            text: "La capa de aplicación combina las capas de aplicación, Presentación y Sesión de OSI y es responsable de los protocolos de aplicación de alto nivel, la representación y la gestión de sesiones."
        },

        transporte: {
            title: "CAPA 3: Transporte",
            text: "La capa de transporte se asigna a la capa de transporte OSI y es responsable de la conectividad de extremo a extremo, la integridad de los datos y el control de flujo."
        },

        internet: {
            title: "CAPA 2: Internet",
            text: "Al igual que la capa roja del modelo OSI, la capa TCP/IP de Internet gestiona el enrutamiento y el reenvío de paquetes."
        },

        red: {
            title: "CAPA 1: Acceso a la Red",
            text: "La capa de enlace de datos del modelo TCP/IP se corresponde con las capas de enlace de datos y física del modelo OSI y es responsable de las conexiones físicas y lógicas entre dispositivos." 
        }

};

title.innerText = data[type].title;
text.innerText = data[type].text;

}


ScrollReveal().reveal('.card', {
    distance: '60px',
    duration: 1200,
    interval: 200,
    origin: 'bottom'
});

ScrollReveal().reveal('.topology-card', {
    interval: 150,
    scale: 0.8
});

ScrollReveal().reveal('.stp-box', {
    interval: 200,
    origin: 'bottom'
});

ScrollReveal().reveal('.comparison-box', {
    interval: 200,
    distance: '50px'
});