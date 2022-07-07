
USE PLAZITANET;
select * from user;
INSERT INTO DEPARTMENT(var_name) VALUES('Atlántida');
INSERT INTO DEPARTMENT(var_name) VALUES('Colón');
INSERT INTO DEPARTMENT(var_name) VALUES('Comayagua');
INSERT INTO DEPARTMENT(var_name) VALUES('Copán');
INSERT INTO DEPARTMENT(var_name) VALUES('Cortés');
INSERT INTO DEPARTMENT(var_name) VALUES('Choluteca');
INSERT INTO DEPARTMENT(var_name) VALUES('El Paraíso');
INSERT INTO DEPARTMENT(var_name) VALUES('Francisco Morazán');
INSERT INTO DEPARTMENT(var_name) VALUES('Gracias a Dios');
INSERT INTO DEPARTMENT(var_name) VALUES('Intibucá');
INSERT INTO DEPARTMENT(var_name) VALUES('Islas de la Bahía');
INSERT INTO DEPARTMENT(var_name) VALUES('La Paz');
INSERT INTO DEPARTMENT(var_name) VALUES('Lempira');
INSERT INTO DEPARTMENT(var_name) VALUES('Ocotepeque');
INSERT INTO DEPARTMENT(var_name) VALUES('Olancho');
INSERT INTO DEPARTMENT(var_name) VALUES('Santa Bárbara');
INSERT INTO DEPARTMENT(var_name) VALUES('Valle');
INSERT INTO DEPARTMENT(var_name) VALUES('Yoro');

INSERT INTO PRODUCT_STATUS(var_name) VALUES('Nuevo');
INSERT INTO PRODUCT_STATUS(var_name) VALUES('Usado');
    
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Computadoras');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Moda');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Juguetes');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Jardinería');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Industrial');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Joyería');

-- INSERTAR EL USUARIO ADMINISTRADOR CORREO: admin@admin.com CONTRASEÑA: 1234567

INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(8, 'admin@admin.com', 'admin', 'plazitanet', '1234567', 0, 1, '99000000');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(2, 'mariadb@gmail.com', 'Maria', 'Gonzales', 'Hola1234//', 1, 1, '89676545');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(1, 'joseK@gmail.com', 'Jose', 'Kalix', 'joseK-123', 1, 1, '56243142');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(15, 'kevin_manuel@hotmail.com', 'Kevin', 'Manuel', 'KevinManuel1/', 1, 1, '98786756');
    

