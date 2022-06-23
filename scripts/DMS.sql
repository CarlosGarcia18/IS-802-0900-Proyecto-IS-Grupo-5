
USE PLAZITANET;

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

-- INSERTAR EL USUARIO ADMINISTRADOR CORREO: admin@admin.com CONTRASEÑA: 1234

INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(8, 'admin@admin.com', 'admin', 'plazitanet', '1234', 0, 1, '99000000');

