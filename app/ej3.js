let meses = ['enero','febrero','marzo','abril', 'mayo', 'junio','julio','agosto','septiembre','octubre','noviembre', 'diciembre'];
console.log()

function mesesAnio() {
    for (let i = 0; i < meses.length; i++) {
        let numero = parseInt(prompt('Ingresa un numero'));

        switch (meses[numero]){
            case 'Enero':
                console.log('El mes es Enero');
                break;
            case 'Febrero':
                console.log('El mes es Febrero');
                break;    
            case 'Marzo':
                console.log('El mes es Marzo');
                break;    
            case 'Abril':
                console.log('El mes es Abril');
                break;    
            case 'Mayo':
                console.log('El mes es Mayo');
                break;    
            case 'Junio':
                console.log('El mes es Junio');
                break;    
            case 'Julio':
                console.log('El mes es Julio');
                break;    
            case 'Agosto':
                console.log('El mes es Agosto');
                break;    
            case 'Septiembre':
                console.log('El mes es Septiembre');
                break;    
            case 'Octubre':
                console.log('El mes es Octubre');
                break;    
            case 'Noviembre':
                console.log('El mes es Noviembre');
                break;    
            case 'Diciembre':
                console.log('El mes es Diciembre');
                break;    
        }
    }
}
mesesAnio();