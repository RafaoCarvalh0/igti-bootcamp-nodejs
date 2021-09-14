CREATE TABLE `proprietario` (
  `proprietario_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `telefone` varchar(30) NOT NULL,
  PRIMARY KEY (`proprietario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `animal` (
  `animal_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `tipo` varchar(255) NOT NULL,
  `proprietario_id` int NOT NULL,
  PRIMARY KEY (`animal_id`),
  KEY `fk_proprietario_id` (`proprietario_id`),
  CONSTRAINT `fk_proprietario_id` FOREIGN KEY (`proprietario_id`) REFERENCES `proprietario` (`proprietario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `servicos` (
  `servico_id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `valor` decimal(10,0) NOT NULL,
  `animal_id` int NOT NULL,
  PRIMARY KEY (`servico_id`),
  KEY `fk_animal_id` (`animal_id`),
  CONSTRAINT `fk_animal_id` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`animal_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



