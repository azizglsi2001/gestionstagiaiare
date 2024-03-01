-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 25 fév. 2024 à 13:07
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestion des stagiaires`
--

-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE `filiere` (
  `idFiliere` int(4) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `niveau` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `filiere_stagiaire`
--

CREATE TABLE `filiere_stagiaire` (
  `idStagiaire` int(4) NOT NULL,
  `idFiliere` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `filiere_utilisateur`
--

CREATE TABLE `filiere_utilisateur` (
  `idFiliere` int(4) NOT NULL,
  `idUtilisateur` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `stagiaire`
--

CREATE TABLE `stagiaire` (
  `isStagiaire` int(4) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `email_sta` varchar(45) NOT NULL,
  `age` int(2) NOT NULL,
  `sexe` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `idUtilisateur` int(4) NOT NULL,
  `login` varchar(45) NOT NULL,
  `email_utl` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  `etat` tinyint(1) NOT NULL,
  `nom&prenom` varchar(45) NOT NULL,
  `idStagiaire` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`idFiliere`);

--
-- Index pour la table `filiere_stagiaire`
--
ALTER TABLE `filiere_stagiaire`
  ADD PRIMARY KEY (`idStagiaire`,`idFiliere`),
  ADD KEY `idStagiaire` (`idStagiaire`,`idFiliere`),
  ADD KEY `idFiliere` (`idFiliere`);

--
-- Index pour la table `filiere_utilisateur`
--
ALTER TABLE `filiere_utilisateur`
  ADD PRIMARY KEY (`idFiliere`,`idUtilisateur`),
  ADD KEY `idFiliere` (`idFiliere`,`idUtilisateur`),
  ADD KEY `idUtilisateur` (`idUtilisateur`);

--
-- Index pour la table `stagiaire`
--
ALTER TABLE `stagiaire`
  ADD PRIMARY KEY (`isStagiaire`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`idUtilisateur`),
  ADD KEY `idStagiaire` (`idStagiaire`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD CONSTRAINT `filiere_ibfk_1` FOREIGN KEY (`idFiliere`) REFERENCES `filiere_utilisateur` (`idFiliere`);

--
-- Contraintes pour la table `filiere_stagiaire`
--
ALTER TABLE `filiere_stagiaire`
  ADD CONSTRAINT `filiere_stagiaire_ibfk_1` FOREIGN KEY (`idStagiaire`) REFERENCES `stagiaire` (`isStagiaire`),
  ADD CONSTRAINT `filiere_stagiaire_ibfk_2` FOREIGN KEY (`idFiliere`) REFERENCES `filiere` (`idFiliere`);

--
-- Contraintes pour la table `filiere_utilisateur`
--
ALTER TABLE `filiere_utilisateur`
  ADD CONSTRAINT `filiere_utilisateur_ibfk_1` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`);

--
-- Contraintes pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD CONSTRAINT `utilisateur_ibfk_1` FOREIGN KEY (`idStagiaire`) REFERENCES `stagiaire` (`isStagiaire`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
