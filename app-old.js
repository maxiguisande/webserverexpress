const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Maxi',
            edad: 33,
            url: req.url,
            mascotas: [{
                    nombre: 'Dana',
                    tipo: 'Perro'
                },
                {
                    nombre: 'Draco',
                    tipo: 'Perro'
                }

            ]
        };

        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');