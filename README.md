# Clase N° 41 - Incorporando DAO y DTO a nuestro proyecto
Basandome en el proyecto de la entrega anterior, a este le incorpore los patrones de diseño DAO (data access object) y DTO (data transfer object); Mi DAO Y DTO estan aplicados en mi capa de services, donde se pueden encontrar los siguientes archivos productFileQuerryService,  productMemoryQuerryService y productMariaDbQuerryService, estos son los que se conectan con la persistecia pasada por argv, separandolas de mi dominio que es donde se encuentra la logica de mi api, tambien dentro de services esta mi productDTO que modifica la informacion traida de la base de datos por una mas util que mi usuario pueda consumir, y mi archivo productsFactory que es una factory que dependiendo que le pase por argv es la persistencia que mi api utilizara, por defecto utiliza Memory. Para obtener mi informacion DTO agrege dos nuevos endpoints (getDto y getDtoByid), que me devuelve mi title en mayusculas, el precio en dolares y le agregue fecha y hora de la devolucion con el id de mi producto.

Body para el GET y POST: 
{
    "title": "pantalon",
    "price": "100",
    "stock": "12",
    "code": "123asdas",
    "thumbnail": "fotofrepantalon.png",
    "description": "Es un pantalon"
}
