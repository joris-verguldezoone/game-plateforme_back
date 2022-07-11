-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 14 juin 2022 à 08:04
-- Version du serveur :  8.0.21
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données : `jeux`
--

-- --------------------------------------------------------

--
-- Structure de la table `avatar`
--

DROP TABLE IF EXISTS `avatar`;
CREATE TABLE IF NOT EXISTS `avatar` (
  `description` text NOT NULL,
  `image` text NOT NULL,
  `iduser` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `iduser` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `difficulte`
--

DROP TABLE IF EXISTS `difficulte`;
CREATE TABLE IF NOT EXISTS `difficulte` (
  `difficulte` text NOT NULL,
  `multiplicateurscore` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `difficulte`
--

INSERT INTO `difficulte` (`difficulte`, `multiplicateurscore`, `id`) VALUES
('italienne', 2, 1),
('Hardjojor', 666, 2);

-- --------------------------------------------------------

--
-- Structure de la table `jeux`
--

DROP TABLE IF EXISTS `jeux`;
CREATE TABLE IF NOT EXISTS `jeux` (
  `nom` text NOT NULL,
  `idtype` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `idtype` (`idtype`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `jeux`
--

INSERT INTO `jeux` (`nom`, `idtype`, `id`) VALUES
('bataille', 15, 1),
('mytho', 15, 2),
('Oriflamme', 15, 3);

-- --------------------------------------------------------

--
-- Structure de la table `listeamis`
--

DROP TABLE IF EXISTS `listeamis`;
CREATE TABLE IF NOT EXISTS `listeamis` (
  `id` int NOT NULL AUTO_INCREMENT,
  `iduser` int NOT NULL,
  `iduser2` int NOT NULL,
  `statut` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `iduser2` (`iduser2`),
  KEY `iduser` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `lobby`
--

DROP TABLE IF EXISTS `lobby`;
CREATE TABLE IF NOT EXISTS `lobby` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nbMin` int NOT NULL,
  `nbMax` int NOT NULL,
  `idJeux` int NOT NULL,
  `idRegle` int NOT NULL,
  `idDifficulte` int NOT NULL,
  `idUser` int NOT NULL,
  `nomLobby` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idJeux` (`idJeux`),
  KEY `idRegle` (`idRegle`),
  KEY `idDifficulte` (`idDifficulte`),
  KEY `FK_8bc5ccec62c28a7ecb70e0d1259` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `lobby`
--

INSERT INTO `lobby` (`id`, `nbMin`, `nbMax`, `idJeux`, `idRegle`, `idDifficulte`, `idUser`, `nomLobby`) VALUES
(9, 2, 4, 2, 1, 2, 21, 'Premier essaie'),
(10, 2, 4, 2, 1, 1, 21, 'oui'),
(11, 2, 4, 1, 1, 2, 21, 'Premier essaie'),
(12, 4, 6, 2, 1, 2, 21, 'Premier essaie'),
(13, 2, 4, 2, 1, 2, 21, 'ok'),
(14, 2, 2, 1, 3, 1, 21, ''),
(15, 2, 7, 1, 2, 1, 21, 'Apex'),
(16, 2, 2, 1, 3, 1, 21, 'fssssss'),
(17, 2, 2, 1, 3, 2, 21, 'kkkkk'),
(18, 2, 7, 1, 2, 1, 21, 'ooo'),
(19, 2, 8, 3, 4, 2, 21, 'ccc'),
(20, 2, 2, 2, 1, 1, 21, 'lkjlkj');

-- --------------------------------------------------------

--
-- Structure de la table `partie`
--

DROP TABLE IF EXISTS `partie`;
CREATE TABLE IF NOT EXISTS `partie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nbjoueurs` int NOT NULL,
  `iddifficulte` int NOT NULL,
  `idjeux` int NOT NULL,
  `createdat` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `finishedat` datetime DEFAULT NULL,
  `idregle` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idjeux` (`idjeux`),
  KEY `iddifficulte` (`iddifficulte`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `partie`
--

INSERT INTO `partie` (`id`, `nbjoueurs`, `iddifficulte`, `idjeux`, `createdat`, `finishedat`, `idregle`) VALUES
(5, 0, 2, 2, '2022-06-14 09:51:41', '2022-06-14 09:51:41', 2);

-- --------------------------------------------------------

--
-- Structure de la table `partieuser`
--

DROP TABLE IF EXISTS `partieuser`;
CREATE TABLE IF NOT EXISTS `partieuser` (
  `iduser` int NOT NULL,
  `idpartie` int NOT NULL,
  `statut` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `idpartie` (`idpartie`),
  KEY `iduser` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `reglesjeux`
--

DROP TABLE IF EXISTS `reglesjeux`;
CREATE TABLE IF NOT EXISTS `reglesjeux` (
  `idjeux` int NOT NULL,
  `nomregle` text NOT NULL,
  `regle` text NOT NULL,
  `iddifficulte` int NOT NULL,
  `nbjoueurmin` int NOT NULL,
  `nbjoueurmax` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `idjeux` (`idjeux`),
  KEY `iddifficulte` (`iddifficulte`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `reglesjeux`
--

INSERT INTO `reglesjeux` (`idjeux`, `nomregle`, `regle`, `iddifficulte`, `nbjoueurmin`, `nbjoueurmax`, `id`) VALUES
(2, 'longTurn', 'Les tours durent moins de 1.30 minute', 1, 2, 2, 1),
(1, 'fastTurn', 'Les tours durent moins de 30 secondes', 2, 2, 7, 2),
(1, 'longTurn', 'Les tours durent moins de 1.30 minute', 1, 2, 2, 3),
(3, 'jojomiseur', 'Jojj jajoooijojjjjojajajjaja jajajaja', 2, 2, 8, 4);

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

DROP TABLE IF EXISTS `score`;
CREATE TABLE IF NOT EXISTS `score` (
  `id` int NOT NULL AUTO_INCREMENT,
  `score` int NOT NULL,
  `iduser` int NOT NULL,
  `idpartie` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idpartie` (`idpartie`),
  KEY `iduser` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

DROP TABLE IF EXISTS `type`;
CREATE TABLE IF NOT EXISTS `type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typedejeux` text NOT NULL,
  `nbdejeux` int NOT NULL,
  `nbcartes` int NOT NULL,
  `typedecarte` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `typedejeux`, `nbdejeux`, `nbcartes`, `typedecarte`) VALUES
(15, 'cartes', 2, 52, 'normal'),
(16, 'sjkfjlkj', 1, 54, 'ok');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `idavatar` int DEFAULT NULL,
  `role` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_avatar` (`idavatar`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `idavatar`, `role`) VALUES
(2, 'coco', 'cool', NULL, 0),
(3, 'nerner', 'disneyxd', NULL, 0),
(4, 'cacapipi', '$2y$13$Xk5DAJbdgeUIYNBo42lTket0we5Ekf4kw6p013RzaNzcciDSgSeES', NULL, 0),
(5, 'pipicaca', '$2y$13$xFgMvh170OWREKnqDbsa7Of9DGKbLUqBTUXpLWkHKNaE64O9MLsy6', NULL, 0),
(6, 'remyleboss', '$2y$13$MMWGXg/FOi/FWZASxwjjxOuPbaJYM2oxLlSfu5zQfZWjPT8tcGFUq', NULL, 0),
(7, 'hardjojo', '$2y$13$dsWUUB3GBFhtzQr72e098ua6vsZmXUS6ds1Q9qgIpsmlx2lF518KW', NULL, 2),
(8, 'hardjojom', '$2y$13$MQ687o1c7EXrkp32x7AU7emwerwBdl2crv3j7E4Tw/PDc6.GBCsxq', NULL, 0),
(10, 'lassal', 'shun', NULL, 1),
(15, 'remyviscaino', 'viscaino', NULL, 1),
(16, 'manoo', 'manoo', NULL, 1),
(21, 'lamoumou', 'larara', NULL, 0),
(22, 'azertyujhgfdsw', 'mlkmlk', 0, 0),
(23, 'azertyujhgfdsw', 'mlkmlk', NULL, 0),
(25, 'azertyujhgfdsw', 'mlkmlk', NULL, 0),
(33, 'wnxbcv', 'mlkmlk', NULL, 0),
(34, 'yooo', 'mlkmlk', NULL, 0),
(35, 'joooojhhj', 'oooooojjjjjjjjjjjj', NULL, 0),
(36, 'joooojhhj', 'oooooojjjjjjjjjjjj', NULL, 0),
(37, 'jjj', 'jjj', 0, 0);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avatar`
--
ALTER TABLE `avatar`
  ADD CONSTRAINT `FK_063060bf96f9322ae7b5499cdc5` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `jeux`
--
ALTER TABLE `jeux`
  ADD CONSTRAINT `FK_0501317cf0fbce176b84e032e1f` FOREIGN KEY (`idtype`) REFERENCES `type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `listeamis`
--
ALTER TABLE `listeamis`
  ADD CONSTRAINT `FK_016ec7d6b21da04efa9d2ddac04` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_8e7a06d2c21bc7656f213324d65` FOREIGN KEY (`iduser2`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `lobby`
--
ALTER TABLE `lobby`
  ADD CONSTRAINT `FK_777bb96771a7a16fbec1913ad8b` FOREIGN KEY (`idDifficulte`) REFERENCES `difficulte` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_8bc5ccec62c28a7ecb70e0d1259` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_e2a803bd36a6d12ae09e4e2866d` FOREIGN KEY (`idJeux`) REFERENCES `jeux` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_ee3ddc82c4c4de18737e56ba03d` FOREIGN KEY (`idRegle`) REFERENCES `reglesjeux` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `partie`
--
ALTER TABLE `partie`
  ADD CONSTRAINT `FK_2d8b107ef0bbdf6795651d93606` FOREIGN KEY (`idjeux`) REFERENCES `jeux` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_6d7708aa48631f8d1a03d9894ab` FOREIGN KEY (`iddifficulte`) REFERENCES `difficulte` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `partieuser`
--
ALTER TABLE `partieuser`
  ADD CONSTRAINT `FK_349a147c3edc80c0ec483acea53` FOREIGN KEY (`idpartie`) REFERENCES `partie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_d79dddf50685e5cf2df5e6f8882` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reglesjeux`
--
ALTER TABLE `reglesjeux`
  ADD CONSTRAINT `FK_7f1e26c91bfd4ccc9836432dd0f` FOREIGN KEY (`idjeux`) REFERENCES `jeux` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_d746bb9805ad2dc04497a4fc523` FOREIGN KEY (`iddifficulte`) REFERENCES `difficulte` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `FK_202e9ab0ba4dd16e923b4f0b251` FOREIGN KEY (`idpartie`) REFERENCES `partie` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_79484d806ae5491579152693caa` FOREIGN KEY (`iduser`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
