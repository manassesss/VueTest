import {server} from './http';


//rodar server
server.listen(3333, () => {
    console.log("Rodando na 3333");
});

module.exports = server
