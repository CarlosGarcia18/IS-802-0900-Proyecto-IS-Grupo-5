USE PLAZITANET;

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(101,6,15,7,2,"Seagate ST2000DM006","Series:Barracuda,Type:7200RPM,Capacity:2TB,Cache:64MB",1470.93,447,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("1.jpg","jpg",101);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(102,3,12,7,2,"Gigabyte X299 AORUS Gaming 3","CPU:LGA2066,Form Factor:ATX,RAM Slots:8,Max RAM:128GB",2270.48,133,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("2.jpg","jpg",102);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(103,5,5,7,2,"Intel Xeon E5-2698 V3 (OEM/Tray)","Speed:2.3GHz,Cores:16,TDP:135W",2035.18,354,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("3.jpg","jpg",103);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(104,5,18,7,2,"Kingston SV300S37A/120G","Series:SSDNow V300 Series,Type:SSD,Capacity:120GB,Cache:N/A",450.93,308,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("4.jpg","jpg",104);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(105,3,4,7,2,"Audífonos Xiaomi","Los audífonos True Wireless Redmi Buds 3 Lite de Xiaomi tienen reconocimiento automático de dispositivos y conexiones inalámbricas simples.",700,446,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("5.jpg","jpg",105);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(106,2,5,1,1,"Organizador","Quattro Organizador para tocador QTTORG004 3 niveles",1350.0,162,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("6.jpg","jpg",106);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(107,2,11,1,1,"Juegos de ollas","Hamilton Beach Batería de cocina HCW601A 8 Piezas",3397.0,252,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("7.jpg","jpg",107);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(108,6,17,1,2,"Sarten","Hamilton Beach Sartén de Aluminio PD-HBW106 Antiadherente",597.0,390,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("8.jpg","jpg",108);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(109,5,18,1,2,"Quattro Cojín","QTTCS037 / Rayado",400.0,267,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("9.jpg","jpg",109);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(110,5,17,1,2,"Tetera","Mr. Coffee Tetera Claredale / 10807401 / 2.08 L",467.0,382,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("10.jpg","jpg",110);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(111,5,7,2,2,"Pañales Huggies","Pañales hechos con fibras naturales, suaves como algodón y sin quimicos",577.9,100,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("11.jpg","jpg",111);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(112,5,13,2,1,"Leche En Polvo","Leche En Polvo Arla Milex Kinder Descremada 800 Gr",218.9,315,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("12.jpg","jpg",112);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(113,2,9,2,2,"Ropa recien nacido","Estuche regalo recién nacido con 3 prendas - verde claro liso con motivos",1000,457,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13.jpg","jpg",113);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_1.jpg","jpg",113);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_2.jpg","jpg",113);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("13_3.jpg","jpg",113);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(114,5,9,2,1,"Biberón","Philips AVENT Biberón anticólico con ventilación sin aire, 4 onzas, 1 paquete, transparente",250,406,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("14.jpg","jpg",114);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(115,2,5,2,1,"Carriola","Graco Coche LiteRider Daphne con portabebé / 2075293 / Respaldo ajustable",6847.0,372,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("15.jpg","jpg",115);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(116,2,15,3,2,"Collar para perro","Multiple Colors, Soft Padded Breathable Nylon Pet Collar, Adjustable Martingale Collar Increased Control",250.0,249,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("16.jpg","jpg",116);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(117,6,9,3,1,"Casa para perros","Ram Quality Products Innovadora casa para mascotas al aire libre grande impermeable",2700.0,351,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("17.jpg","jpg",117);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(118,6,14,3,1,"Jaula para aves","Yaheetech Jaula de pájaros de techo abierto con ruedas de 57 pulgadas para loros de tamaño medio",2500,480,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("18.jpg","jpg",118);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(119,5,16,3,1,"Caja de arena","Cajas de arena para gatos autolimpiables automáticas originales",1500,302,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("19.jpg","jpg",119);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(120,4,3,3,2,"Acuario para peces","Marineland ML90609 Retrato Acuario Kit, 5 galones",1600,218,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("20.jpg","jpg",120);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(121,3,10,4,1,"Decibal Mueble de cocina","Con 4 diferentes estantes para organizar tus utensilios de cocina.",3497.0,161,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("21.jpg","jpg",121);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(122,6,1,4,1,"Dida Mueble de Cocina","fabricado en un clásico color café con estilo contemporáneo; Este chinero de 3 cuerpos, 3 patas inferiores y 3 patas superiores con vidrio",8497,359,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("22.jpg","jpg",122);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(123,6,4,4,1,"Quattro Mueble multifunción","Posee elegante diseño en colores blanco y nogal, este versátil mueble cuenta con 3 estantes y un perchero te permitirá bien ser utilizado para tus prendas de ropa o para colocar tus pertenecías o adornos.",1697,420,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("23.jpg","jpg",123);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(124,2,8,4,2,"Commodity Sillón Reclinable","Diseño Reclinable, con tejido antiderrames, cuero sintetico. Comprá desde la comodidad de tu casa a un clic.",7000,142,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("24.jpg","jpg",124);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(125,5,5,4,1,"Silla de oficina","Ergonómica de malla con ruedas, silla de estudio de altura ajustable para estudiantes, adolescentes, hombres y mujeres, para dormitorio, hogar, oficina, color negro.",540,434,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("25.jpg","jpg",125);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(126,5,10,5,2,"Camioneta kia sorento 2014","Tres filas de asiento de tela, Motor 2.4, 4 cilindros",300000,166,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("26.jpg","jpg",126);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(127,2,10,5,1,"Honda Recon 250","Honda recon motor 250 Año 2006, Papeles en regla, Llantas nuevas, Parrillas en ambos lados, Modificada, a Semi automática, Matrícula al día",100000,426,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("27.jpg","jpg",127);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(128,4,14,5,1,"Mitsubishi eclipse","Automático caja al 100 , Año 99, Motor al 100 ",123456,436,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("28.jpg","jpg",128);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(129,2,10,5,1,"Moto Génesis 250","todo en regla Con rines de magnesio con llantas de goma impunchable",24000,3,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("29.jpg","jpg",129);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(130,6,17,5,1,"Casco redondo DOT Brisera","polarisada Mate y brillo V. Colores",1300,204,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("30.jpg","jpg",130);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(131,6,1,6,2,"Cardigan Dama","Color: LT.GREEN",325,249,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("31.jpg","jpg",131);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(132,3,11,6,1,"Polo Caballero","Colores: ROYAL BLUE,  GREEN",285,371,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("32.jpg","jpg",132);
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("32_1.jpg","jpg",132);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(133,5,1,6,1,"Taco de futbol Nike","Mercurial Superfly 8",1700,213,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("33.jpg","jpg",133);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(134,2,4,6,1,"Pañoleta","Tela de Cachemira Suave",125,494,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("34.jpg","jpg",134);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(135,6,11,6,2,"Camiseta Messi","Camiseta Stadium de la 1ª equipación del PSG",2500,438,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("35.jpg","jpg",135);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(136,6,10,8,2,"ELECTRICISTA LAS 24 HORAS","Miraflores, San Isidro,Surco,San Borja, Barranco,La Molina Surquillo,Lince,Pueblo Libre,San Miguel,Magdalena.",1500,271,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("36.jpg","jpg",136);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(137,3,6,8,2,"Carpintería & Melamines","Precios de fabrica, misma calidad y a tu medida. Escritorios modernos, minimalistas y funcionales",3000,327,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("37.jpg","jpg",137);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(138,3,8,8,2,"Pintamos casas","Gastar en pintar ya sea tu interior o exterior siempre sera una buena inversion",2000,389,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("38.jpg","jpg",138);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(139,6,2,8,2,"Clases de guitarra","Principiantes, intermedios, avanzados, Interpretación, Teoría Musical, Estilos Variados, Lectura Musical",1200,401,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("39.jpg","jpg",139);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(140,3,6,8,1,"Car Wash To Go","Lavado de autos, te lavamos el motor a presión",500,122,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("40.jpg","jpg",140);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(141,2,2,9,2,"Don Quijote de la Mancha","Nominada por los estadounidenses como una de las 100 mejores novelas en la serie de PBS The Great American Read",350,83,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("41.jpg","jpg",141);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(142,3,11,9,2,"Consola RetroNes","HDMI de 821 juegos, Envíos a todo el País",1300,83,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("42.jpg","jpg",142);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(143,3,8,9,1,"Control de xbox","Xbox Series X-S Inalámbrico",1200,105,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("43.jpg","jpg",143);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(144,5,5,9,2,"Kindle Paperwhite","(8 GB): ahora con una pantalla de 6.8” y luz cálida ajustable, con anuncios",4200,313,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("44.jpg","jpg",144);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(145,2,10,9,2,"LEGO Star Wars","Y-Wing Microfighter 75162 - Kit de construcción",600,332,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("45.jpg","jpg",145);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(146,2,4,10,1,"Mochila True Rider","Diseñada para ajustarse al cuerpo del conductor para mayor estabilidad.",736,495,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("46.jpg","jpg",146);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(147,2,4,10,2,"Libretas personalizadas","Puede personalizar su libreta como más le guste",250,240,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("47.jpg","jpg",147);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(148,4,13,10,2,"Regla T","Ludwig Precision Regla T de 12 a 48 pulgadas resistente de aluminio, 24 - pulgadas",600,311,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("48.jpg","jpg",148);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(149,3,15,10,2,"Colores Faber-Castell","Faber-Castell World Colors Ecopencils, 27 unidades, lápices de colores diversos para niños",200,123,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("49.jpg","jpg",149);

INSERT INTO PRODUCT
	(id_product,fk_id_user,fk_id_department,fk_id_product_category,fk_id_product_status,var_name,text_description,dou_price,int_views,bit_availability,publication_date,expiration_date)
VALUES
	(150,4,3,10,1,"Lápiz Tinta","Lápiz Tinta con Stylus, Colores Disponibles: Negro, Plateado, Azul, Verde Claro, Verde Oscuro y Rojo",10,98,1,CURRENT_TIMESTAMP, DATE_ADD(CURRENT_TIMESTAMP, interval 60 day));
INSERT INTO PHOTOGRAPHS(var_name,var_extension,fk_id_product)
	VALUES("50.jpg","jpg",150);


