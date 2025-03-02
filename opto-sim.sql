-- --------------------------------------------------------
-- Хост:                         127.0.0.1
-- Версия сервера:               8.0.41 - MySQL Community Server - GPL
-- Операционная система:         Linux
-- HeidiSQL Версия:              12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Дамп структуры базы данных opto_simulator
CREATE DATABASE IF NOT EXISTS `opto_simulator` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `opto_simulator`;

-- Дамп структуры для таблица opto_simulator.client_refraction
CREATE TABLE IF NOT EXISTS `client_refraction` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `FullName` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Gender` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Age` int NOT NULL,
  `OdSph` decimal(3,2) NOT NULL,
  `OdCyl` decimal(3,2) NOT NULL,
  `OdAx` int NOT NULL,
  `OsSph` decimal(3,2) NOT NULL,
  `OsCyl` decimal(3,2) NOT NULL,
  `OsAx` int NOT NULL,
  `VisOd` decimal(2,1) NOT NULL,
  `VisOs` decimal(2,1) NOT NULL,
  `LeadingEye` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Дамп данных таблицы opto_simulator.client_refraction: ~10 rows (приблизительно)
INSERT INTO `client_refraction` (`ID`, `FullName`, `Gender`, `Age`, `OdSph`, `OdCyl`, `OdAx`, `OsSph`, `OsCyl`, `OsAx`, `VisOd`, `VisOs`, `LeadingEye`) VALUES
	(1, 'Шестаков Павел Григорьевич', 'м', 25, -2.00, -0.25, 170, -1.75, -0.50, 5, 0.4, 0.5, 'OD'),
	(2, 'Некрасова Дарья Григориевна', 'ж', 59, -1.00, -0.50, 125, -1.50, 0.00, 90, 0.6, 0.6, 'OS'),
	(3, 'Кириллович Рогов Владимир', 'м', 32, -1.75, 0.00, 120, -1.50, 0.00, 80, 0.5, 0.6, 'OD'),
	(4, 'Миронова Дарина Тимуровна', 'ж', 40, -2.00, -1.00, 90, -2.25, -0.50, 40, 0.4, 0.4, 'OD'),
	(5, 'Герасимова Антонина Алексеевна', 'ж', 73, -3.50, 0.00, 115, -3.00, 0.25, 150, 0.2, 0.3, 'OS'),
	(6, 'Архипов Анатолий Станиславович', 'м', 44, -2.25, -0.50, 70, -2.00, 0.00, 30, 0.3, 0.4, 'OS'),
	(7, 'Федосеев Степан Аркадиевич', 'м', 65, -0.50, 0.25, 10, 0.00, 1.00, 20, 0.8, 0.9, 'OD'),
	(8, 'Субботина Алиса Леонидовна', 'ж', 21, -0.25, -0.50, 140, 0.00, 0.00, 0, 0.9, 1.0, 'OD'),
	(9, 'Лобанов Фёдор Павлович', 'м', 35, 0.00, 0.00, 0, 0.00, 0.00, 0, 1.0, 1.0, 'OD'),
	(10, 'Смирнова Мария Константиновна', 'ж', 26, -1.25, 0.50, 15, -1.00, 1.50, 110, 0.5, 0.6, 'OS');

-- Дамп структуры для таблица opto_simulator.communication
CREATE TABLE IF NOT EXISTS `communication` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Question` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Дамп данных таблицы opto_simulator.communication: ~17 rows (приблизительно)
INSERT INTO `communication` (`ID`, `Question`) VALUES
	(1, 'Прочитайте верхнюю строчку'),
	(2, 'Прочитайте среднюю строчку'),
	(3, 'Прочитайте нижнюю строчку'),
	(4, 'Какую строчку можете прочитать?'),
	(5, 'Так лучше, или тоже самое?'),
	(6, 'Сейчас будет видно значительно хуже'),
	(7, 'Сейчас будет видно немного хуже'),
	(8, 'Какие линии наиболее четкие, яркие, жирные?'),
	(9, 'Сейчас будет 2 положения, Вам нужно выбрать, в каком видно лучше'),
	(10, 'Первое положение'),
	(11, 'Второе положение'),
	(12, 'На каком фоне лучше видно?'),
	(13, 'Что видите?'),
	(14, 'Сколько всего фигур?'),
	(15, 'Крест по центру?'),
	(16, 'Нижняя линяя ровно под верхней, или в стороне?'),
	(17, 'Линия полностью уходит за ширину верхней линии?');

-- Дамп структуры для таблица opto_simulator.lenses
CREATE TABLE IF NOT EXISTS `lenses` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `Value` decimal(4,2) DEFAULT NULL,
  `lens_type` enum('CONCAVE SPHERE','CONCAVE CYLINDER') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Дамп данных таблицы opto_simulator.lenses: ~61 rows (приблизительно)
INSERT INTO `lenses` (`ID`, `Value`, `lens_type`) VALUES
	(1, -20.00, 'CONCAVE SPHERE'),
	(2, -18.00, 'CONCAVE SPHERE'),
	(3, -16.00, 'CONCAVE SPHERE'),
	(4, -14.00, 'CONCAVE SPHERE'),
	(5, -13.00, 'CONCAVE SPHERE'),
	(6, -12.00, 'CONCAVE SPHERE'),
	(7, -11.00, 'CONCAVE SPHERE'),
	(8, -10.00, 'CONCAVE SPHERE'),
	(9, -9.50, 'CONCAVE SPHERE'),
	(10, -9.00, 'CONCAVE SPHERE'),
	(11, -8.50, 'CONCAVE SPHERE'),
	(12, -8.00, 'CONCAVE SPHERE'),
	(13, -7.50, 'CONCAVE SPHERE'),
	(14, -7.00, 'CONCAVE SPHERE'),
	(15, -6.50, 'CONCAVE SPHERE'),
	(16, -6.00, 'CONCAVE SPHERE'),
	(17, -5.75, 'CONCAVE SPHERE'),
	(18, -5.50, 'CONCAVE SPHERE'),
	(19, -5.25, 'CONCAVE SPHERE'),
	(20, -5.00, 'CONCAVE SPHERE'),
	(21, -4.75, 'CONCAVE SPHERE'),
	(22, -4.50, 'CONCAVE SPHERE'),
	(23, -4.25, 'CONCAVE SPHERE'),
	(24, -4.00, 'CONCAVE SPHERE'),
	(25, -3.75, 'CONCAVE SPHERE'),
	(26, -3.50, 'CONCAVE SPHERE'),
	(27, -3.25, 'CONCAVE SPHERE'),
	(28, -3.00, 'CONCAVE SPHERE'),
	(29, -2.75, 'CONCAVE SPHERE'),
	(30, -2.50, 'CONCAVE SPHERE'),
	(31, -2.25, 'CONCAVE SPHERE'),
	(32, -2.00, 'CONCAVE SPHERE'),
	(33, -1.75, 'CONCAVE SPHERE'),
	(34, -1.50, 'CONCAVE SPHERE'),
	(35, -1.25, 'CONCAVE SPHERE'),
	(36, -1.00, 'CONCAVE SPHERE'),
	(37, -0.75, 'CONCAVE SPHERE'),
	(38, -0.50, 'CONCAVE SPHERE'),
	(39, -0.25, 'CONCAVE SPHERE'),
	(40, -0.12, 'CONCAVE SPHERE'),
	(41, -6.00, 'CONCAVE CYLINDER'),
	(42, -5.50, 'CONCAVE CYLINDER'),
	(43, -5.00, 'CONCAVE CYLINDER'),
	(44, -4.50, 'CONCAVE CYLINDER'),
	(45, -4.00, 'CONCAVE CYLINDER'),
	(46, -3.75, 'CONCAVE CYLINDER'),
	(47, -3.50, 'CONCAVE CYLINDER'),
	(48, -3.25, 'CONCAVE CYLINDER'),
	(49, -3.00, 'CONCAVE CYLINDER'),
	(50, -2.75, 'CONCAVE CYLINDER'),
	(51, -2.50, 'CONCAVE CYLINDER'),
	(52, -2.25, 'CONCAVE CYLINDER'),
	(53, -2.00, 'CONCAVE CYLINDER'),
	(54, -1.75, 'CONCAVE CYLINDER'),
	(55, -1.50, 'CONCAVE CYLINDER'),
	(56, -1.25, 'CONCAVE CYLINDER'),
	(57, -1.00, 'CONCAVE CYLINDER'),
	(58, -0.75, 'CONCAVE CYLINDER'),
	(59, -0.50, 'CONCAVE CYLINDER'),
	(60, -0.25, 'CONCAVE CYLINDER'),
	(61, 0.00, 'CONCAVE CYLINDER');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
