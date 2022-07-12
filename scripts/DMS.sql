
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
    
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Hogar');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Futuros Padres');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Mascotas');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Inmuebles');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Vehiculos');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Moda');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Electronica');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Servicios');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Negocios');
INSERT INTO PRODUCT_CATEGORY(var_name) VALUES('Empleo');

-- INSERTAR EL USUARIO ADMINISTRADOR CORREO: admin@admin.com CONTRASEÑA: 1234567

INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(8, 'admin@admin.com', 'admin', 'plazitanet', '1234567', 0, 1, '99000000');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(2, 'mariadb@gmail.com', 'Maria', 'Gonzales', 'Hola1234//', 1, 1, '89676545');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(1, 'joseK@gmail.com', 'Jose', 'Kalix', 'joseK-123', 1, 1, '56243142');
INSERT INTO USER(fk_id_department, var_email, var_name, var_lastname, tex_password, bit_rol, bit_status, var_phone) 
	VALUES(15, 'kevin_manuel@hotmail.com', 'Kevin', 'Manuel', 'KevinManuel1/', 1, 1, '98786756');

INSERT INTO PRODUCT(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (1,1,1,1,1,"Disco duro externo portátil",1,"250 GB de almacenamiento y 5 meses de garantia",1024,1,"2022-07-02","2022-07-10");
INSERT INTO PRODUCT(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (2,1,1,1,1,"Disco duro externo portátil",1,"480 GB de almacenamiento y 5 meses de garantia",2024,1,"2022-07-06","2022-07-09");
INSERT INTO PRODUCT(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (3,1,2,1,1,"Disco duro externo portátil",1,"1 TB de almacenamiento y 5 meses de garantia",4024,1,"2022-07-01","2022-07-11");
INSERT INTO PRODUCT(fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,int_views,text_description,dou_price,bit_availability,publication_date,expiration_date) 
	VALUES (3,1,1,1,"Disco duro externo portátil",1,"1.5 TB de almacenamiento y 5 meses de garantia",6024,1,"2022-07-03","2022-07-12");

#INSERT INTO PHOTOGRAPHS(blob_file,var_name,var_extension,fk_id_product) VALUES(LOAD_FILE('C:\Users\Luis\Desktop\1'),"disco duro","jpg",1);
#INSERT INTO PHOTOGRAPHS(blob_file,var_name,var_extension,fk_id_product) VALUES(LOAD_FILE('C:\Users\Luis\Desktop\2'),"disco duro","jpg",2);
#INSERT INTO PHOTOGRAPHS(blob_file,var_name,var_extension,fk_id_product) VALUES(LOAD_FILE('C:\Users\Luis\Desktop\3'),"disco duro","jpg",3);
#INSERT INTO PHOTOGRAPHS(blob_file,var_name,var_extension,fk_id_product) VALUES(LOAD_FILE('C:\Users\Luis\Desktop\4'),"disco duro","jpg",4);
