-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 12 nov. 2024 à 11:31
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `banking`
--

-- --------------------------------------------------------

--
-- Structure de la table `employe_groupe`
--

CREATE TABLE `employe_groupe` (
  `employe_id` bigint(20) NOT NULL,
  `groupe_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `groupe_employe`
--

CREATE TABLE `groupe_employe` (
  `id` bigint(20) NOT NULL,
  `employe_id` bigint(20) DEFAULT NULL,
  `groupe_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `groupe_employe`
--

INSERT INTO `groupe_employe` (`id`, `employe_id`, `groupe_id`) VALUES
(4, 3, 5),
(5, 2, 5);

-- --------------------------------------------------------

--
-- Structure de la table `t_clients`
--

CREATE TABLE `t_clients` (
  `id_client` bigint(20) NOT NULL,
  `birthday` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `employe_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_clients`
--

INSERT INTO `t_clients` (`id_client`, `birthday`, `email`, `nom`, `prenom`, `employe_id`) VALUES
(1, '2024-11-28 01:00:00.000000', 'siham.elkouaze2003@gmail.com', 'siham', 'hh', 1),
(2, '2003-05-18 00:00:00.000000', 'siham.elkouaze2003@gmail.com', 'siham', 'elkou', NULL),
(3, '2024-11-04 01:00:00.000000', 'siham.elkouaze2003@gmail.com', 'EL KOUAZE', 'SIHAM', NULL),
(6, '2024-11-04 01:00:00.000000', 'elkouazes@gmail.com', 'siam', 'os', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `t_comptes`
--

CREATE TABLE `t_comptes` (
  `type` int(11) NOT NULL,
  `id` bigint(20) NOT NULL,
  `account_number` varchar(255) NOT NULL,
  `balance` double NOT NULL,
  `created_date` datetime(6) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `decouvert` double DEFAULT NULL,
  `interet_rate` double DEFAULT NULL,
  `client_id` bigint(20) NOT NULL,
  `account_type` enum('COURANT','SAVING') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_comptes`
--

INSERT INTO `t_comptes` (`type`, `id`, `account_number`, `balance`, `created_date`, `status`, `decouvert`, `interet_rate`, `client_id`, `account_type`) VALUES
(1, 802, '000010104931467583', 1060, '2024-11-12 00:08:01.000000', 0, 100, NULL, 1, 'COURANT'),
(2, 803, '000001004833609526', 240, '2024-11-12 00:08:30.000000', 0, NULL, 2, 1, 'SAVING'),
(1, 852, '000010012118466736', 100, '2024-11-12 03:55:24.000000', 0, 10, NULL, 1, 'COURANT'),
(1, 902, '000010017195257635', 200, '2024-11-12 08:38:47.000000', 0, 10, NULL, 3, 'COURANT'),
(1, 903, '000000003375049676', 1000, '2024-11-12 09:38:39.000000', 0, 2, NULL, 3, 'COURANT'),
(2, 904, '000010111164716630', 200, '2024-11-12 09:55:06.000000', 0, NULL, 3, 2, 'COURANT'),
(1, 905, '000011009087451070', 1000, '2024-11-12 10:37:33.000000', 0, 12, NULL, 1, 'COURANT');

-- --------------------------------------------------------

--
-- Structure de la table `t_comptes_seq`
--

CREATE TABLE `t_comptes_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_comptes_seq`
--

INSERT INTO `t_comptes_seq` (`next_val`) VALUES
(1001);

-- --------------------------------------------------------

--
-- Structure de la table `t_employes`
--

CREATE TABLE `t_employes` (
  `id_employe` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `superieur_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_employes`
--

INSERT INTO `t_employes` (`id_employe`, `nom`, `superieur_id`) VALUES
(1, 'siham', NULL),
(2, 'RH', NULL),
(3, 'EL KOUAZE Siham', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `t_groupe`
--

CREATE TABLE `t_groupe` (
  `id` bigint(20) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_groupe`
--

INSERT INTO `t_groupe` (`id`, `nom`) VALUES
(5, 'RH');

-- --------------------------------------------------------

--
-- Structure de la table `t_operations`
--

CREATE TABLE `t_operations` (
  `id` bigint(20) NOT NULL,
  `date_operation` datetime(6) NOT NULL,
  `montant` double NOT NULL,
  `num_operation` bigint(20) NOT NULL,
  `type_operation` tinyint(4) NOT NULL,
  `account_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `t_operations`
--

INSERT INTO `t_operations` (`id`, `date_operation`, `montant`, `num_operation`, `type_operation`, `account_id`) VALUES
(1, '2024-11-12 00:10:53.000000', 2, 952477315, 0, 802),
(2, '2024-11-12 01:44:18.000000', 2, 10116017896363, 1, 802),
(3, '2024-11-12 01:44:18.000000', 2, 4521947064, 0, 803),
(4, '2024-11-12 01:44:22.000000', 2, 10108521065423, 1, 802),
(5, '2024-11-12 01:44:22.000000', 2, 10002587963000, 0, 803),
(6, '2024-11-12 01:44:23.000000', 2, 119764616748, 1, 802),
(7, '2024-11-12 01:44:23.000000', 2, 10101248065451, 0, 803),
(8, '2024-11-12 01:44:23.000000', 2, 11112888136435, 1, 802),
(9, '2024-11-12 01:44:23.000000', 2, 1104905944134, 0, 803),
(10, '2024-11-12 01:44:23.000000', 2, 15687402001, 1, 802),
(11, '2024-11-12 01:44:23.000000', 2, 10002765615137, 0, 803),
(12, '2024-11-12 01:44:35.000000', 2, 11101851443176, 1, 802),
(13, '2024-11-12 01:44:35.000000', 2, 115871112282, 1, 802),
(15, '2024-11-12 01:44:35.000000', 2, 10017223292624, 0, 803),
(18, '2024-11-12 01:44:35.000000', 2, 10100094792342, 1, 802),
(19, '2024-11-12 01:44:35.000000', 2, 10102790146443, 0, 803),
(20, '2024-11-12 01:44:35.000000', 2, 10112723032963, 0, 803),
(21, '2024-11-12 01:44:51.000000', 2, 1017359340029, 1, 802),
(22, '2024-11-12 01:44:51.000000', 2, 100152295773, 0, 803),
(23, '2024-11-12 01:44:52.000000', 2, 11116998872503, 1, 802),
(24, '2024-11-12 01:44:52.000000', 2, 10018894445644, 0, 803),
(25, '2024-11-12 01:44:55.000000', 2, 10116118917767, 1, 802),
(26, '2024-11-12 01:44:55.000000', 2, 1116117830481, 0, 803),
(27, '2024-11-12 01:44:56.000000', 2, 10105857975213, 1, 802),
(28, '2024-11-12 01:44:56.000000', 2, 107642840832, 0, 803),
(29, '2024-11-12 01:44:56.000000', 2, 11114555814752, 1, 802),
(30, '2024-11-12 01:44:56.000000', 2, 1108126421654, 0, 803),
(31, '2024-11-12 01:59:33.000000', 2, 5803351855, 1, 802),
(32, '2024-11-12 02:02:03.000000', 10, 10004330843553, 1, 802),
(33, '2024-11-12 02:06:15.000000', 8, 11005845080444, 1, 802),
(34, '2024-11-12 02:06:15.000000', 8, 3176188882, 0, 803),
(35, '2024-11-12 02:10:47.000000', 2, 11002063370111, 1, 802),
(36, '2024-11-12 02:10:48.000000', 2, 10118482357596, 0, 803),
(37, '2024-11-12 03:26:10.000000', 0, 1004828833980, 0, 802),
(38, '2024-11-12 03:58:57.000000', 100, 10016072338239, 0, 802);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `employe_groupe`
--
ALTER TABLE `employe_groupe`
  ADD PRIMARY KEY (`employe_id`,`groupe_id`),
  ADD KEY `FK58dxy8o28xstcr4kpon55wqey` (`groupe_id`);

--
-- Index pour la table `groupe_employe`
--
ALTER TABLE `groupe_employe`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKdvce40gent3q2ahprw4tarw3e` (`employe_id`),
  ADD KEY `FK7fhgb2ox5i27icp8f9dsjxas2` (`groupe_id`);

--
-- Index pour la table `t_clients`
--
ALTER TABLE `t_clients`
  ADD PRIMARY KEY (`id_client`),
  ADD KEY `FK62w4k2ua36lg7215n7pu196xq` (`employe_id`);

--
-- Index pour la table `t_comptes`
--
ALTER TABLE `t_comptes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK4uniq4kh3ge8ddj63uov461vb` (`client_id`);

--
-- Index pour la table `t_employes`
--
ALTER TABLE `t_employes`
  ADD PRIMARY KEY (`id_employe`),
  ADD KEY `FKgyptdrr4r5ud21dg3ky51xkaj` (`superieur_id`);

--
-- Index pour la table `t_groupe`
--
ALTER TABLE `t_groupe`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `t_operations`
--
ALTER TABLE `t_operations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKjd8bkpok0uevgu87ptw6kn8wt` (`account_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `groupe_employe`
--
ALTER TABLE `groupe_employe`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `t_clients`
--
ALTER TABLE `t_clients`
  MODIFY `id_client` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `t_employes`
--
ALTER TABLE `t_employes`
  MODIFY `id_employe` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `t_groupe`
--
ALTER TABLE `t_groupe`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `t_operations`
--
ALTER TABLE `t_operations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `employe_groupe`
--
ALTER TABLE `employe_groupe`
  ADD CONSTRAINT `FK58dxy8o28xstcr4kpon55wqey` FOREIGN KEY (`groupe_id`) REFERENCES `t_groupe` (`id`),
  ADD CONSTRAINT `FKdtqntmdooakii9vkf8u3fxv17` FOREIGN KEY (`employe_id`) REFERENCES `t_employes` (`id_employe`);

--
-- Contraintes pour la table `groupe_employe`
--
ALTER TABLE `groupe_employe`
  ADD CONSTRAINT `FK7fhgb2ox5i27icp8f9dsjxas2` FOREIGN KEY (`groupe_id`) REFERENCES `t_groupe` (`id`),
  ADD CONSTRAINT `FKdvce40gent3q2ahprw4tarw3e` FOREIGN KEY (`employe_id`) REFERENCES `t_employes` (`id_employe`);

--
-- Contraintes pour la table `t_clients`
--
ALTER TABLE `t_clients`
  ADD CONSTRAINT `FK62w4k2ua36lg7215n7pu196xq` FOREIGN KEY (`employe_id`) REFERENCES `t_employes` (`id_employe`);

--
-- Contraintes pour la table `t_comptes`
--
ALTER TABLE `t_comptes`
  ADD CONSTRAINT `FK4uniq4kh3ge8ddj63uov461vb` FOREIGN KEY (`client_id`) REFERENCES `t_clients` (`id_client`);

--
-- Contraintes pour la table `t_employes`
--
ALTER TABLE `t_employes`
  ADD CONSTRAINT `FKgyptdrr4r5ud21dg3ky51xkaj` FOREIGN KEY (`superieur_id`) REFERENCES `t_employes` (`id_employe`);

--
-- Contraintes pour la table `t_operations`
--
ALTER TABLE `t_operations`
  ADD CONSTRAINT `FKjd8bkpok0uevgu87ptw6kn8wt` FOREIGN KEY (`account_id`) REFERENCES `t_comptes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
