-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 21 jan. 2022 à 11:21
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `jeux`
--
CREATE DATABASE IF NOT EXISTS `jeux` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `jeux`;

-- --------------------------------------------------------

--
-- Structure de la table `avatar`
--

CREATE TABLE IF NOT EXISTS `avatar` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `avatar`
--

INSERT INTO `avatar` (`id`, `description`, `image`) VALUES
(1, 'test', 'test.png'),
(2, 'caca', 'pipi.png');

-- --------------------------------------------------------

--
-- Structure de la table `difficulte`
--

CREATE TABLE IF NOT EXISTS `difficulte` (
  `id` int(11) NOT NULL,
  `difficulte` text NOT NULL,
  `multiplicateurscore` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `difficulte`
--

INSERT INTO `difficulte` (`id`, `difficulte`, `multiplicateurscore`) VALUES
(11, 'italienne', 2);

-- --------------------------------------------------------

--
-- Structure de la table `jeux`
--

CREATE TABLE IF NOT EXISTS `jeux` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `idtype` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idtype` (`idtype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `jeux`
--

INSERT INTO `jeux` (`id`, `nom`, `idtype`) VALUES
(1, 'chkobba', 8);

-- --------------------------------------------------------

--
-- Structure de la table `listeamis`
--

CREATE TABLE IF NOT EXISTS `listeamis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` int(11) NOT NULL,
  `iduser2` int(11) NOT NULL,
  `statut` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `iduser2` (`iduser2`),
  KEY `iduser` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `listeamis`
--

INSERT INTO `listeamis` (`id`, `iduser`, `iduser2`, `statut`) VALUES
(1, 10, 15, 0),
(2, 10, 15, 1);

-- --------------------------------------------------------

--
-- Structure de la table `partie`
--

CREATE TABLE IF NOT EXISTS `partie` (
  `id` int(11) NOT NULL,
  `nbjoueurs` int(11) NOT NULL,
  `iddifficulte` int(11) NOT NULL,
  `idjeux` int(11) NOT NULL,
  `createdat` datetime NOT NULL DEFAULT current_timestamp(),
  `finishedat` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idjeux` (`idjeux`),
  KEY `iddifficulte` (`iddifficulte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `partie`
--

INSERT INTO `partie` (`id`, `nbjoueurs`, `iddifficulte`, `idjeux`, `createdat`, `finishedat`) VALUES
(1, 0, 11, 1, '2022-01-19 18:25:50', NULL),
(2, 8, 11, 1, '2022-01-19 18:26:48', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `partieuser`
--

CREATE TABLE IF NOT EXISTS `partieuser` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idpartie` int(11) NOT NULL,
  `statut` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idpartie` (`idpartie`),
  KEY `iduser` (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `partieuser`
--

INSERT INTO `partieuser` (`id`, `iduser`, `idpartie`, `statut`) VALUES
(1, 10, 2, 0);

-- --------------------------------------------------------

--
-- Structure de la table `reglesjeux`
--

CREATE TABLE IF NOT EXISTS `reglesjeux` (
  `id` int(11) NOT NULL,
  `idjeux` int(11) NOT NULL,
  `nomregle` text NOT NULL,
  `regle` text NOT NULL,
  `iddifficulte` int(11) NOT NULL,
  `nbjoueurmin` int(11) NOT NULL,
  `nbjoueurmax` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `iddifficulte` (`iddifficulte`),
  KEY `idjeux` (`idjeux`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reglesjeux`
--

INSERT INTO `reglesjeux` (`id`, `idjeux`, `nomregle`, `regle`, `iddifficulte`, `nbjoueurmin`, `nbjoueurmax`) VALUES
(1, 1, '2', '0', 11, 0, 0),
(2, 1, '2', 'caca', 11, 0, 0),
(3, 1, '2', 'pipi', 11, 4, 8);

-- --------------------------------------------------------

--
-- Structure de la table `score`
--

CREATE TABLE IF NOT EXISTS `score` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `score` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idpartie` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idpartie` (`idpartie`),
  KEY `iduser` (`iduser`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `score`
--

INSERT INTO `score` (`id`, `score`, `iduser`, `idpartie`) VALUES
(1, 11, 10, 2);

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typedejeux` text NOT NULL,
  `nbdejeux` int(11) NOT NULL,
  `nbcartes` int(11) NOT NULL,
  `typedecarte` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `type`
--

INSERT INTO `type` (`id`, `typedejeux`, `nbdejeux`, `nbcartes`, `typedecarte`) VALUES
(8, '', 0, 0, ''),
(9, 'cartes', 2, 54, 'rami');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_avatar` int(11) DEFAULT NULL,
  `role` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `id_avatar`, `role`) VALUES
(2, 'caca', 'caca', 1, 0),
(3, 'nerner', '$2y$13$HIjo7RwB/k/t8cjXy2bywehh3E3J1hIMo.6z2rEm76VISxBFVD5Ly', NULL, 0),
(4, 'cacapipi', '$2y$13$Xk5DAJbdgeUIYNBo42lTket0we5Ekf4kw6p013RzaNzcciDSgSeES', NULL, 0),
(5, 'pipicaca', '$2y$13$xFgMvh170OWREKnqDbsa7Of9DGKbLUqBTUXpLWkHKNaE64O9MLsy6', NULL, 0),
(6, 'remyleboss', '$2y$13$MMWGXg/FOi/FWZASxwjjxOuPbaJYM2oxLlSfu5zQfZWjPT8tcGFUq', NULL, 0),
(7, 'hardjojo', '$2y$13$dsWUUB3GBFhtzQr72e098ua6vsZmXUS6ds1Q9qgIpsmlx2lF518KW', NULL, 0),
(8, 'hardjojom', '$2y$13$MQ687o1c7EXrkp32x7AU7emwerwBdl2crv3j7E4Tw/PDc6.GBCsxq', NULL, 0),
(10, 'ruben', 'habib', 2, 1),
(15, 'remyviscaino', 'viscaino', 1, 1);

--
-- Contraintes pour les tables déchargées
--

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
