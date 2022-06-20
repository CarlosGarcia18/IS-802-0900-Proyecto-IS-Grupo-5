
DROP DATABASE IF EXISTS PLAZITANET;

CREATE DATABASE PLAZITANET CHARACTER SET utf8;

USE PLAZITANET;

CREATE TABLE USER(
    id_user SERIAL PRIMARY KEY,
    var_email VARCHAR(50) NOT NULL UNIQUE COMMENT "Correo electronico",
    var_name VARCHAR(50) NOT NULL COMMENT "Nombre del Usuario",
    var_lastname VARCHAR(50) NOT NULL COMMENT "Apellido",
    tex_password TEXT NOT NULL COMMENT "Contraseña",
    bit_rol BIT(1) DEFAULT 0 NOT NULL COMMENT "Un rol que identifica que tipo de usuario entra al sistema: 0 Administrador | 1 Usuario Normal",
    bit_status BIT(1) DEFAULT 0 NOT NULL COMMENT "Identifica el estado de usuario: 0 Eliminado | 1 Activo",
    var_phone VARCHAR(10) COMMENT "Numero de telefono"

) COMMENT "Usuarios";

CREATE TABLE PRODUCT(
    id_product SERIAL PRIMARY KEY,
    id_user_fk BIGINT UNSIGNED NOT NULL COMMENT "Hace referencia a los usuarios",
    FOREIGN KEY (id_user_fk) REFERENCES USER(id_user),
    var_name VARCHAR(150) NOT NULL COMMENT "Nombre del producto",
    int_views BIGINT UNSIGNED NOT NULL COMMENT "Cantidad de vistas del producto",
    text_description TEXT NOT NULL COMMENT "Descripción",
    dou_price DOUBLE NOT NULL COMMENT "Precio del articulo",
    bit_availability BIT(1) DEFAULT 0 NOT NULL COMMENT "Identifica el estado del articulo: 0 No disponible | 1 Disponible",
    publication_date timestamp NOT NULL COMMENT "Fecha de publicacion del articulo",
    expiration_date timestamp NOT NULL COMMENT "Fecha de expiración del articulo"
    

) COMMENT "Anuncios";


CREATE TABLE DEPARTMENT (
	id_department SERIAL PRIMARY KEY,
    var_name VARCHAR(150) NOT NULL COMMENT "Nombre del departamento"

) COMMENT "Ubicación";

CREATE TABLE COMMENTARY(
	id_commentary SERIAL PRIMARY KEY,
    text_contents TEXT NOT NULL COMMENT "Contenido",
    tim_date timestamp NOT NULL COMMENT "Fecha de creación del comentario"

) COMMENT "Comentarios que deja el usuario a algun producto";
/*
CREATE TABLE SCORE(
	

) COMMENT "Calificación";

CREATE TABLE COMPLAINT(


) COMMENT "Denuncia";


CREATE TABLE COMPLAINT_CATEGORY(


) COMMENT "CATEGORÍA DE DENUNCIA";


CREATE TABLE PRODUCT_CATEGORY(


) COMMENT "Categoria de producto";


CREATE TABLE SUBSCRIPTION(


) COMMENT "SUBSCRIPCIONES A LAS CATEGORIAS";


CREATE TABLE PRODUCT_STATUS(


) COMMENT "Estado del producto o anuncion (Usado, Nuevo)";


CREATE TABLE WISH_LIST(


) COMMENT "LISTA DE DESEOS O FAVORITOS";


CREATE TABLE CHAT(


) COMMENT "CHAT";


CREATE TABLE MESSAGE_CHAT(


) COMMENT "MENSAJES";


CREATE TABLE PHOTOGRAPHS(


) COMMENT "FOTOGRAFÍAS";

*/