-- MySQL dump 10.13  Distrib 8.0.39, for Win64 (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `desc` varchar(1000) NOT NULL,
  `img` varchar(255) NOT NULL,
  `date` date DEFAULT NULL,
  `uid` int NOT NULL,
  `cat` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid_idx` (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (15,'The World’s most Famous Painting: Mona Lisa','On 21st August 1911, it was a Monday morning in the French capital, Paris. It was quite bustling. People were going to work in their offices when suddenly, three men came out of the Louvre museum. The three had spent the previous night in the museum. And now, they were carrying an important property of the Louvre Museum , that was hidden in a blanket while they tried to escape. They went to a nearby railway station and caught the train at 8.45 in the morning and disappeared. The whole world was unaware of the fact that they had stolen a painting. Not an insignificant painting. The world’s most famous painting. The Mona Lisa.\n\nToday, the value of this painting is close to $1 billion. What is the reason behind this? What are the secrets hidden in the Mona Lisa? Why is this the most famous painting in the world? Let’s understand the mystery of the Mona Lisa .','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724741764/blog/Mona_Lisa-1724741764828.jpg','2024-08-27',8,'art'),(16,'The quantum physics behind fireworks displays','This Thursday, July 4, 2024, is remarkable for a number of reasons. It happens to be just one day before aphelion: the day where the Earth is at its most distant from the Sun as it revolves through the Solar System in its elliptical orbit. It’s the 248th anniversary of when the United States officially declared independence from, and war on, the nation of Great Britain. And it marks the annual date where the wealthiest nation in the world sets off more explosives — in the form of fireworks — than any other.\nWhether you’re an amateur hobbyist, a professional installer, or simply a spectator, fireworks shows are driven by the same laws of physics that govern all of nature. Individual fireworks all contain the same four component stages: launch, fuse, burst charges, and stars. Without quantum physics, not a single one of them would be possible. Here’s the science behind how every component of these spectacular shows works.','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724742066/blog/crackers-1724742066461.jpg','2024-08-27',8,'science'),(17,'THE MACHINE TECHNOLOGY','The study of like the researcher like me.how get the passion towards google and medicine field. This is only way to learn technology in “re engineering way”. I like python more than my girl friend . The brain tumors is the bad disease to harm by increasing the cells on inside.The technology became one of the guardian of us. The patients how have brain tumors have to spend money in MRI scans. when they had the technology like it will be useful to everybody . The government of India should allow the technology to cure the disease to find the solutions. The students like me intersting have partner how had good in technology like me. The investing on technology is useful to bulit many things.\n\n','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724742248/blog/tech-1724742248834.jpg','2024-08-27',8,'technology'),(18,'Unique Rakhi Ideas: Explore Creative Ways to Express Your Love','Raksha Bandhan, the sacred festival celebrating the bond between brothers and sisters, is just around the corner. It’s that time of the year when siblings come together to cherish their love, protectiveness, and lifelong companionship. While the traditional exchange of Rakhi and gifts has its charm, why not infuse some creativity into this age-old tradition? Indiagift presents a plethora of unique Rakhi ideas that will help you express your love in the most extraordinary ways. Get ready to embark on a journey of innovative rakhi designs, delightful gifts, and unforgettable memories!','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724742403/blog/F423_IMG_1933-1724742403244.jpg','2024-08-27',8,'design'),(19,'He Is The Greatest Student Of Film Ever','Listening to Martin Scorsese talk about cinema is listening to him talk about love. The passion, excitement, and knowledge this man has for moving pictures are palpable in every sentence. He talks about movies with such care and devotion, it’s almost religious. One one of the great things about listening to someone talk about something he loves is that a little bit of that love gets rubbed on you.\n\nMartin talks with great care not only about movies, but about the history of movies. Where they came from and how they got made. Scorsese grew up watching films of the 40’s and 50’s which taught him how to make the movies he would later become famous for.','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724742494/blog/1_K8ZpuaW6cWXXID73bnYpxg-1724742494306.jpg','2024-08-27',8,'cinema'),(20,'A Study (Tenuously) Links Omega-3s and Depression','recent study in the journal Translational Psychiatry, called “Omega-3 fatty acids and major depression: a Mendelian randomization study”, suggested that there’s a small but measurable benefit to consuming omega-3 fatty acids, commonly found in fish oil.\nBut one issue with the study: they didn’t actually measure whether any of the participants consumed any omega-3s at all.\nInstead, the study looked solely at the genetics of participants. The results are interesting, but answer up front: these results probably aren’t strong enough to declare diet as a strong driver of depression.\nIt’s just your potential, in your genes\nInstead of running a long, expensive study requiring the recruitment of participants and enforcing a diet or supplement requirement on them for many years, the researchers used existing data. ','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724742726/blog/0_lrobe3xTiuDciRYa-1724742727300.jpg','2024-08-27',8,'food'),(21,'“I’m Speaking”: New Painting Up For Auction','My work is entirely reader-supported, so if you enjoyed this piece here are some options where you can toss some money into my tip jar if you want to. Go here to find video versions of my articles. If you’d prefer to listen to audio of these articles, you can subscribe to them on Spotify, Apple Podcasts, Soundcloud or YouTube. Go here to buy paperback editions of my writings from month to month. All my work is free to bootleg and use in any way, shape or form; republish it, translate it, use it on merchandise; whatever you want. The best way to make sure you see the stuff I publish is to subscribe to the mailing list on Substack, which will get you an email notification for everything I publish. All works co-authored with my husband Tim Foley.','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724743005/blog/1_JFjL302IkgF704eBB_tuyw-1724743000304.jpg','2024-08-27',9,'art'),(22,'Demystifying Quantum Physics: Exploring The wonders of Quantum World','“Is reality merely an illusion? This question, which has intrigued philosophers for centuries, finds an unexpected twist in the realm of quantum physics. Welcome to the world where particles can be in two places at once, and actions can influence distant systems instantaneously.\n\nThis article aims to demystify the enigmatic world of quantum physics. A branch of science that has not only revolutionized our understanding of the universe but also paved the way for technologies that shape our everyday lives, from lasers and semiconductors to MRI scanners and even the internet. We will also look at the historical context and the scientific breakthroughs that led to the development of quantum theory.','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724743093/blog/science-1724743090904.jpg','2024-08-27',9,'science'),(23,'Do Not Use LLM or Generative AI For These Use Cases','The recent hype for Gen AI (Generative AI), especially LLM (Large Language Model), has become extremely high. More and more organizations have already jumped or are planning to jump into this controversial zone. Of course, it is understandable that no one wants to fall behind and lose this revolutionary opportunity. However, as one of the professionals with a Data Science background and who has experienced AI/ML growth for the last 10+ years, I want to write this article to alert decision-makers to think twice about simply starting to implement their AI solutions.\n\nDon’t get me wrong. I’ve always been an advocate of AI and one of those optimistic people. This article has borrowed from an insightful work from Gartner, which aims to educate people about various AI techniques and Use Case families. LLM is not everything about AI, and not all the AI use cases are suitable for Generative AI.','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724743174/blog/1_tRzRkFN2cPi3Fh5t8cIjIg-1724743173770.jpg','2024-08-27',9,'technology'),(25,'The Finance Plan of a Film — A Breakdown','A lot of our users on Filmarket Hub have stated how they tend to be in the darkness regarding production values, preparing finance plans to present to possible investors for their film or TV series project. It is a very important part of the process of making films which, due to lack of information on the matter, screenwriters and directors tend to be in the darkness in that regard.\n\nSo, today we’re going to try shed a bit of light on one of the ways in which you can structure the finance plan for a feature film which is ready for preproduction.\n\nThe finance plan is the document in which you specify how much money you need to make your project, in this case a feature film, and how you’re going to obtain (or you have already obtained) that money. You’re also showing where’s the money coming from and that your sources of income are reliable.\n\n','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724743307/blog/1_dZJ2vEp27NBMpT8IWrGs_Q-1724743307521.jpg','2024-08-27',9,'cinema'),(26,'Wildlife Pictured on Stamps, Postcards and Maxicards','You DON’T HAVE TO be a Stamp collector/Philatelist to appreciate this article. Just exercise your spirit of observation, and “enjoy the ride”.\nThat’s the spirit (of observation)!\n\nOr a Deltiologist (collector of postcards).\n[Delta Force means something else…]\n\nOr a Maximaphilist (creator or at least collector of maxicards/maximum cards). But I “secretly” hope to entice some of you (just “the best and the brightest”…) to become maximaphilists, for your own educational fun.\n\nYou don’t have to participate in FIP (International Federation of Philately) competitions as an exhibitor [exhibitionist means something else…].','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724743473/blog/1_uSC1UsCUI-bCV4bE7ctPEw-1724743471035.jpg','2024-08-27',9,'design'),(27,'Over 65? Time to Dramatically Change Your Food Intake and Physical Activity','As a retired physician, I notice many seniors become skinny and weak due to muscle loss yet have big bellies as fat accumulates. They are less strong, less vibrant, and prone to falls and chronic illnesses like heart disease, diabetes, and cognitive decline. This does not need to happen, but many older people do not appreciate the health and wellness impacts of muscle loss and reduced nutrient absorption, nor do they realize they can slow that process, feel better, be healthier, and live longer.\n\nMuscle loss is a normal phenomenon of aging, and fat accumulation is common, but these are a deadly combination leading to many adverse outcomes like the ones noted above. They do not need to happen to you.\n\n','https://res.cloudinary.com/dx9vbgwvp/image/upload/v1724743598/blog/1_ylbYn-zlAfbAjaOUL7GZjA-1724743598058.jpg','2024-08-27',9,'food');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'vishwajeet','vishwajeet@gmail.com','$2a$10$sYqTXvaujWIjnaRhsBlySe9qPbyOwMcJ90FLUP35ur9nbKoyX7ASe',NULL),(9,'satyajeet','satyajeet@gmail.com','$2a$10$z83hI3vQbTHn6gV.BT/Rnu6uWRk4cCtn.W5ddMBUK.USbgVtrRhuK',NULL),(10,'om','om@gmail.com','$2a$10$gL7KdRECpKD/FioIKkz6pemssZcRhv92z0dy33kSjI48z7ry.EId6',NULL),(11,'mahesh','mahesh@gmail.com','$2a$10$Z2oqZOBWq1vg76sQ6ZSm1urAQ3gcGC69t/X6GPLS4tu.8PR9t1S6e',NULL),(12,'anil','anil@gmail.com','$2a$10$iIoWxF3MwyQRarNWPQgELOTBTJIOoeQMfDwwlu1v11qS6M2vnBgea',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-26 11:36:03
