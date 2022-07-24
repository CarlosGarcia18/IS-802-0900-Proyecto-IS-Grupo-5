use plazitanet;
SET GLOBAL log_bin_trust_function_creators = 1; #Para la creacion de finciones deterministas

#funcion que crea un codigo aleatorio dato un tamaño 
DELIMITER $$
CREATE FUNCTION `RandString`(length SMALLINT(3)) RETURNS varchar(100) CHARSET UTF8MB4
begin
    SET @returnStr = '';
    SET @allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopkrstuwxyz';
    SET @i = 0;

    WHILE (@i < length) DO
        SET @returnStr = CONCAT(@returnStr, substring(@allowedChars, FLOOR(Rand() * LENGTH(@allowedChars) + 1), 1));
        SET @i = @i + 1;
    END WHILE;

    RETURN @returnStr;
END$$

#Procedimiento almacenado que actualiza el codigo en la tabla User
DELIMITER $$
create procedure createCode (email_user VARCHAR(100))
BEGIN
    UPDATE user SET var_code = (SELECT RandString(7)) where  var_email = email_user;
	select * from user where var_email = email_user;
END$$

#ejemplo de uso del procedimiento
Call createCode("joseK@gmail.com");

--Producto Almacenado 
delimiter //
create  procedure vistaProduc (a_int_views int, id int)
BEGIN
update PRODUCT set int_views=1+a_int_views where id_product=id;
end//
select * from PRODUCT;

call vistaProduc(0,5);

select * from vistaProduc;

