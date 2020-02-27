-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2020 at 10:51 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinefoodblog`
--

-- --------------------------------------------------------

--
-- Table structure for table `restaurant_info`
--

CREATE TABLE `restaurant_info` (
  `r_id` int(11) NOT NULL,
  `r_name` varchar(50) NOT NULL,
  `r_location` varchar(60) NOT NULL,
  `r_details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurant_info`
--

INSERT INTO `restaurant_info` (`r_id`, `r_name`, `r_location`, `r_details`) VALUES
(1, 'Cafe X', 'Banani', 'Nice and good\r\n'),
(2, 'Cafe X', 'Banani', 'nice and goodd'),
(3, 'floor 6', 'Banani', 'Nice and good');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_type` varchar(100) NOT NULL,
  `user_relationship_status` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_location` varchar(100) NOT NULL,
  `user_gender` varchar(100) NOT NULL,
  `user_dob` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `user_email`, `user_type`, `user_relationship_status`, `user_password`, `user_location`, `user_gender`, `user_dob`) VALUES
(1, 'admin update', 'admin@gmail.com', 'Admin', 'Engaged', 'admin', 'Gulsan-1', 'Male', '01/03/1995'),
(2, 'testtest', 'test@gmail.com', 'Member', 'Single', '12345', 'Banani', 'Male', '01/03/1996'),
(3, 'saied', 'saied@gmail.com', 'Member', 'Married', '12345', 'Mirpur', 'Make', '01/02/2000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `restaurant_info`
--
ALTER TABLE `restaurant_info`
  ADD PRIMARY KEY (`r_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `restaurant_info`
--
ALTER TABLE `restaurant_info`
  MODIFY `r_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
