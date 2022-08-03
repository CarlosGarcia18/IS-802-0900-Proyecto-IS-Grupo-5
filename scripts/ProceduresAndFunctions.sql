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
#Call createCode("joseK@gmail.com");

-- Producto Almacenado 
delimiter //
create  procedure vistaProduc(id int)
BEGIN
update PRODUCT set int_views=(PRODUCT.int_views)+1 where id_product=id; 
end//

DELIMITER &&
CREATE PROCEDURE obtenerComentarios(IN id int)
BEGIN
     SELECT user.var_name, user.var_lastname, commentary.text_contents, commentary.tim_date 
		FROM commentary 
		INNER JOIN user ON user.id_user=commentary.fk_id_user
		WHERE commentary.fk_id_product = id ORDER BY commentary.tim_date DESC;
END&&

DROP procedure obtenerComentarios;

call  obtenerComentarios(161);

DELIMITER &&
CREATE PROCEDURE prom(IN id int)
BEGIN
    SELECT CAST(AVG(tin_score)  AS DECIMAL(10,1)) AS PROMEDIO FROM qualification WHERE fk_id_user_qualified=id;

END&&


-- Producto Almacenado Lista de mensajes
delimiter //
create  procedure listMessage(id int)
BEGIN
 SELECT*FROM MESSAGE where fk_id_chat=id order by tim_date asc; 
end//

call listMessage(4);

-- Otra forma de listar mensajes
/*
delimiter //
create  procedure listMessage2(id int,id2 int)
BEGIN
 SELECT*FROM MESSAGE where fk_id_chat=id and fk_id_user=id2  order by tim_date asc; 
end//

call listMessage2(4,3);
*/


-- Funcion para crear un chat vacio
drop procedure if exists sp_newChat;
delimiter $$
create procedure sp_newChat(id_product BIGINT UNSIGNED, id_user_buyer BIGINT UNSIGNED, id_user_seller BIGINT UNSIGNED)
BEGIN
	DECLARE id BIGINT UNSIGNED;
    DECLARE status TINYINT UNSIGNED;

	SELECT id_chat INTO id FROM CHAT WHERE fk_id_product = id_product AND fk_id_user_buyer = id_user_buyer AND fk_id_user_seller = id_user_seller;
	
    IF id THEN
		SELECT 202 INTO status; 
		SELECT id AS id_chat, status;
    ELSE
		INSERT INTO CHAT (fk_id_product, fk_id_user_buyer, fk_id_user_seller) 
			VALUES(id_product,id_user_buyer,id_user_seller);
		
        SELECT 200 INTO status;
		SELECT last_insert_id() AS id_chat, status;
    END IF;
	
end$$

CALL sp_newChat(101, 1, 3);

-- Mensaje nuevo
drop procedure if exists sp_sendMessage;
delimiter $$
create procedure sp_sendMessage(contents TEXT, id_chat BIGINT UNSIGNED, id_user BIGINT UNSIGNED)
BEGIN
	INSERT INTO MESSAGE(tim_date, bit_status, text_contents, fk_id_chat, fk_id_user) 
		VALUES(CURRENT_TIMESTAMP() ,0 , contents, id_chat, id_user);
        
	SELECT * FROM MESSAGE WHERE fk_id_chat = id_chat;

end$$
/*
SELECT USER.var_name AS Vendedor, PRODUCT.id_product, PRODUCT.var_name AS Producto, CHAT.id_chat,CHAT.fk_id_user_seller, CHAT.fk_id_user_buyer AS Comprador, PHOTOGRAPHS.var_name AS Foto, CHAT.last_message
	FROM (((CHAT INNER JOIN PRODUCT ON PRODUCT.id_product = CHAT.fk_id_product)
	INNER JOIN PHOTOGRAPHS ON PHOTOGRAPHS.fk_id_product = PRODUCT.id_product)
    INNER JOIN USER ON USER.id_user = CHAT.fk_id_user_seller OR USER.id_user = CHAT.fk_id_user_buyer)
    WHERE CHAT.fk_id_user_buyer = 1
    GROUP BY product.id_product;
*/

/*
DROP FUNCTION IF EXISTS fn_evaluateName;
delimiter $$
CREATE FUNCTION fn_evaluateName(user_id BIGINT UNSIGNED, buyer_id BIGINT UNSIGNED, seller_id BIGINT UNSIGNED)
	RETURNS VARCHAR(50)
BEGIN
	DECLARE user_name VARCHAR(50);
	IF user_id = buyer_id THEN
		SELECT var_name INTO user_name FROM USER WHERE id_user = seller_id;
		RETURN user_name;
    ELSE
		SELECT var_name INTO user_name FROM USER WHERE id_user = buyer_id;
		RETURN user_name;
	END IF;
END$$
*/


/*
SELECT CHAT.id_chat, CHAT.fk_id_product, USER.var_name, CHAT.fk_id_user_buyer AS Comprador, CHAT.fk_id_user_seller AS Vendedor 
	FROM USER
    INNER JOIN CHAT ON USER.id_user = CHAT.fk_id_user_seller OR USER.id_user = CHAT.fk_id_user_buyer
    where USER.id_user = 1;

*/

