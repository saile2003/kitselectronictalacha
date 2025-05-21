function sendEmail() {
	const infoPedido = obtenerDatos();
	
	Email.send({
	Host: "mail.arenasilica.mx",
	Username : "elias.cervantes@arenasilica.mx",
	Password : "elias20202021",
	To : 'cervantesgoku@hotmail.com',
	From : "elias.cervantes@arenasilica.mx",
	Subject : "Pedido",
	Body : infoPedido,
	}).then(
		message => alert("Se envió el pedido correctamente")
	).catch(
		message => alert("Ocurrió un problema al enviar el pedido")
	);
}

function obtenerDatos(){
	/* Datos personales */
	const nombre = document.getElementById( 'nombre' ).value;
	const fechaDia = document.getElementById( 'fechaDia' ).value;
	const fechaMes = document.getElementById( 'fechaMes' ).value;
	const fechaAnio = document.getElementById( 'fechaAnio' ).value;
	const sexoFemenino = document.getElementById( 'sexoFemenino' );
	const sexoMasculino = document.getElementById( 'sexoMasculino' );
	let sexo = '';
	
	if( sexoFemenino.checked ){
		sexo = sexoFemenino.value;
	}else if( sexoMasculino.checked ){
		sexo = sexoMasculino.value;
	}

	/* Dirección */
	const direccion = document.getElementById( 'direccion' ).value;

	/* Productos */
	const productos = [];

	for( i = 1; i <= 17; i++ ){
		const elementoProducto = document.getElementById( `producto${i}` );
		const producto = {
			nombre: '',
			precio: elementoProducto.value,
			cantidad: elementoProducto.options[elementoProducto.selectedIndex].textContent
		};

		switch(i){
			case 1:
				producto.nombre = 'SUMADOR RESTADOR  (ICA-001)';
				break;

			case 2:
				producto.nombre = 'PROBADOR DE CONTINUIDAD DE CABLEADOS (ICA-002)';
				break;

			case 3:
				producto.nombre = 'INDICADOR DE BATERIA BAJA (ICA-003)';
				break;

			case 4:
				producto.nombre = 'MANDO BIMANUAL (ICA-004)';
			break;

			case 5:
				producto.nombre = 'TIMBRE PARA NEGOCIO  (ICA-005)';
				break;

			case 6:
				producto.nombre = 'GENERADOR DE RAMPA POR DAC (ICA-006)';
				break;

			case 7:
				producto.nombre = 'TERMOMETRO (ICA-007)';
				break;

			case 8:
				producto.nombre = 'SILBATO ULTRASONICO PARA ENTRENAR CANINOS (ICA-008)';
				break;

			case 9:
				producto.nombre = 'DIMMER PARA EL TABLERO DE UN VEHÍCULO (ICA-009)';
				break;

			case 10:
				producto.nombre = 'PROTECCIÓN MAGNÉTICA PARA PUERTAS Y VENTANAS (ICA-010)';
				break;

			case 11:
				producto.nombre = 'TARJETA ENTRENADORA PICAXE-08 (ICA-011)';
				break;

			case 12:
				producto.nombre = 'ADAPTADOR PARA PICAXE (ICA-012)';
				break;

			case 13:
				producto.nombre = 'MÓDULO ADC PARA MICROCONTROLADOR (ICA-013)';
				break;

			case 14:
				producto.nombre = 'MÓDULO DE LEDS (ICA-014)';
				break;

			case 15:
				producto.nombre = 'TECLADO MATRICIAL (ICA-015)';
				break;

			case 16:
				producto.nombre = 'TARJETA ENTRENADORA PICAXE-18 (ICA-016)';
				break;

			case 17:
				producto.nombre = 'PLC PICAXE-18 (ICA-017)';
				break;
		}

		productos.push(producto);
	}

	let infoPedido = `Nombre: ${nombre}
Fecha nacimiento: ${fechaDia} - ${fechaMes} - ${fechaAnio}&nbsp;
Sexo: ${sexo}&nbsp;
Productos:&nbsp;&nbsp;`;

	for (const producto of productos) {
		if( producto.cantidad != '0' ){
			infoPedido += `${producto.cantidad} piezas de ${productos.nombre}, precio ${producto.precio}&nbsp;`;
		}
	}
	/*for( i = 0; i < 17; i++ ){
		infoPedido += `${productos[i].cantidad} piezas de ${productos[i].nombre}, precio ${productos[i].precio}\n`;
	}*/

infoPedido += `&nbsp;Dirección: ${direccion}`;

	return infoPedido;
}