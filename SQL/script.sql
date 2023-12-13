CREATE DATABASE IF NOT EXISTS `integrative_project`
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */
/*!80016 DEFAULT ENCRYPTION='N' */
;
USE `integrative_project`;
-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: integrative_project
-- ------------------------------------------------------
-- Server version	8.0.34
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
--
-- Table structure for table `category`
--
DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `category` (
  `category_id` int NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `category_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `category`
--
LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */
;
INSERT INTO `category`
VALUES (
    1,
    'STAR WARS',
    'figuras coleccionables de star wars'
  ),
(2, 'POKEMON', 'figuras coleccionables de pokemon'),
(
    3,
    'HARRY POTTER',
    'figuras coleccionables de harry potter'
  );
/*!40000 ALTER TABLE `category` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `licence`
--
DROP TABLE IF EXISTS `licence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `licence` (
  `licence_id` int NOT NULL,
  `licence_name` varchar(45) NOT NULL,
  `licence_description` varchar(255) NOT NULL,
  `licence_image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`licence_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `licence`
--
LOCK TABLES `licence` WRITE;
/*!40000 ALTER TABLE `licence` DISABLE KEYS */
;
INSERT INTO `licence`
VALUES (
    1,
    'Naruto Shippuden',
    'Vuelve a vivir la secuela de la aclamada serie Naruto',
    NULL
  ),
(
    2,
    'Pokemon Indigo',
    'Atrapa todos los que puedas y disfruta de una colección llena de amigos',
    NULL
  ),
(
    3,
    'Star Wars & The Mandalorian',
    'Disfruta de una saga que sigue agregando personajes a su colección',
    NULL
  ),
(
    4,
    'Harry Potter',
    'Revive los recuerdos de una saga llena de magia y encanto',
    NULL
  ),
(
    5,
    'Naruto',
    'Experimenta uno de los animes más amados por el público',
    NULL
  );
/*!40000 ALTER TABLE `licence` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `product`
--
DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `product_name` varchar(60) NOT NULL,
  `product_description` varchar(255) NOT NULL,
  `price` decimal(9, 2) NOT NULL,
  `stock` int NOT NULL,
  `discount` int DEFAULT NULL,
  `sku` varchar(30) NOT NULL,
  `dues` int DEFAULT NULL,
  `image_front` varchar(200) NOT NULL,
  `image_back` varchar(200) NOT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  `licence_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `fk_product_category_idx` (`category_id`),
  KEY `fk_product_licence_idx` (`licence_id`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_product_licence` FOREIGN KEY (`licence_id`) REFERENCES `licence` (`licence_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `product`
--
LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */
;
INSERT INTO `product`
VALUES (
    1,
    'Baby Yoda Blueball',
    'Figura funko coleccionable de la saga star wars & the mandalorian',
    1799.99,
    5,
    0,
    'STW001001',
    3,
    '/img/star-wars/baby-yoda-1.webp',
    '/img/star-wars/baby-yoda-box.webp',
    '2023-10-12 17:30:00',
    3,
    1
  ),
(
    2,
    'Stormtrooper Lightsaber',
    'Figura funko coleccionable del soldado de la saga star wars',
    1799.99,
    10,
    0,
    'STW001002',
    3,
    '/img/star-wars/trooper-1.webp',
    '/img/star-wars/trooper-box.webp',
    '2023-04-27 16:00:00',
    3,
    1
  ),
(
    3,
    'Pidgeotto',
    'Figura funko coleccionable de pidgeotto del anime pokemon',
    1799.99,
    3,
    0,
    'PKM001001',
    3,
    '/img/pokemon/pidgeotto-1.webp',
    '/img/pokemon/pidgeotto-box.webp',
    '2023-03-24 23:30:00',
    2,
    2
  ),
(
    4,
    'Vulpix Fancy',
    'Figura funko coleccionable de vulpix del anime pokemon',
    1799.99,
    1,
    0,
    'PKM001002',
    3,
    '/img/pokemon/vulpix-1.webp',
    '/img/pokemon/vulpix-box.webp',
    '2023-04-11 03:00:00',
    2,
    2
  ),
(
    5,
    'Luna Lovegood Lion Mask',
    'Figura funko coleccionable de luna de la saga harry potter',
    1799.99,
    9,
    0,
    'HPT001001',
    3,
    '/img/harry-potter/luna-1.webp',
    '/img/harry-potter/luna-box.webp',
    '2023-01-25 05:40:00',
    4,
    3
  ),
(
    6,
    'Snape Patronus',
    'Figura funko coleccionable de snape patronus de la saga harry potter',
    1799.99,
    4,
    0,
    'HPT001002',
    3,
    '/img/harry-potter/snape-patronus-1.webp',
    '/img/harry-potter/snape-patronus-box.webp',
    '2023-12-09 23:30:00',
    4,
    3
  );
/*!40000 ALTER TABLE `product` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `user`
--
DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `create_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `user`
--
LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */
;
INSERT INTO `user`
VALUES (
    1,
    'José',
    'Perez',
    'pepe@gmail.com',
    'pepe123',
    '2023-01-05 01:30:00'
  );
/*!40000 ALTER TABLE `user` ENABLE KEYS */
;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
-- Dump completed on 2023-12-11 21:36:41