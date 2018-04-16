/*
Navicat MySQL Data Transfer

Source Server         : lianjie
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : h5_1801

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-04-16 21:07:32
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodalist
-- ----------------------------
DROP TABLE IF EXISTS `goodalist`;
CREATE TABLE `goodalist` (
  `id` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `yihou` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of goodalist
-- ----------------------------
INSERT INTO `goodalist` VALUES ('01', '皇家贵宾犬成犬3kg', '￥208', '已售44778', 'images/gg/g1.jpg');
INSERT INTO `goodalist` VALUES ('02', '皇家小型犬奶糕3kg', '￥192', '已售478', 'images/gg/g2.jpg');
INSERT INTO `goodalist` VALUES ('03', '冠能挑食美发配方料2.5kg', '￥169', '已售88', 'images/gg/g3.jpg');
INSERT INTO `goodalist` VALUES ('04 ', '宝路肉类奶蔬幼犬粮9kg', '￥37.30', '已售123', 'images/gg/g4.jpg');
INSERT INTO `goodalist` VALUES ('05', '笔瑞吉小型犬成犬粮7kg', '￥36.90', '已售129', 'images/gg/g5.jpg');
INSERT INTO `goodalist` VALUES ('06', '超越五中肉青超级配方6kg', '￥598', '已售1296', 'images/gg/g6.jpg');
INSERT INTO `goodalist` VALUES ('07', '荒野盛宴草原驴肉靠牛肉5kg', '￥660', '已售1296', 'images/gg/g7.jpg');
INSERT INTO `goodalist` VALUES ('08  ', '康多肉牛肉干蔬菜成犬粮10kg', '￥880', '已售1296', 'images/gg/g8.jpg');

-- ----------------------------
-- Table structure for liebiao
-- ----------------------------
DROP TABLE IF EXISTS `liebiao`;
CREATE TABLE `liebiao` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `yiyou` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `yishou` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of liebiao
-- ----------------------------
INSERT INTO `liebiao` VALUES ('1', '冠能PRO PLAN 小型犬成犬挑食及美毛配方全价狗粮2.4kg(800g*3)', '￥288', '已有200', '已售100', 'images/liebiao/0 (1).jpg');
INSERT INTO `liebiao` VALUES ('2', '冠能PRO PLAN 小型犬成犬挑食及美毛配方全价狗粮2.4kg(800g*3)', '￥344', '已有200', '已售200', 'images/liebiao/0 (2).jpg');
INSERT INTO `liebiao` VALUES ('3', '冠能PRO PLAN 小型犬成犬挑食及美毛配方全价狗粮2.4kg(800g*3)', '￥900', '已有200', '已售78', 'images/liebiao/0 (3).jpg');
INSERT INTO `liebiao` VALUES ('4', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥368', '已有200', '已售45', 'images/liebiao/0 (4).jpg');
INSERT INTO `liebiao` VALUES ('5', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥889', '已有200', '已售233', 'images/liebiao/0 (5).jpg');
INSERT INTO `liebiao` VALUES ('6', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥789', '已有200', '已售239', '../images/liebiao/0 (6).jpg');
INSERT INTO `liebiao` VALUES ('7', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥546', '已有200', '已售433', '../images/liebiao/0 (7).jpg');
INSERT INTO `liebiao` VALUES ('8', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥4343', '已有200', '已售02', '../images/liebiao/0 (8).jpg');
INSERT INTO `liebiao` VALUES ('9', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥245', '已有200', '已售04', '../images/liebiao/0 (9).jpg');
INSERT INTO `liebiao` VALUES ('10', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥345', '已有200', '已售04', '../images/liebiao/0 (10).jpg');
INSERT INTO `liebiao` VALUES ('11', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥765', '已有200', '已售345', '../images/liebiao/0 (11).jpg');
INSERT INTO `liebiao` VALUES ('12', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥455', '已有200', '已售23', '../images/liebiao/0 (12).jpg');
INSERT INTO `liebiao` VALUES ('13', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥335', '已有200', '已售2034', '../images/liebiao/0 (13).jpg');
INSERT INTO `liebiao` VALUES ('14', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥435', '已有200', '已售2043', '../images/liebiao/0 (14).jpg');
INSERT INTO `liebiao` VALUES ('15', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥564', '已有200', '已售34', '../images/liebiao/0 (15).jpg');
INSERT INTO `liebiao` VALUES ('16', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥489', '已有200', '已售200', '../images/liebiao/0 (16).jpg');
INSERT INTO `liebiao` VALUES ('17', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥355', '已有200', '已售200', '../images/liebiao/0 (17).jpg');
INSERT INTO `liebiao` VALUES ('18', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥343', '已有200', '已售200', '../images/liebiao/0 (18).jpg');
INSERT INTO `liebiao` VALUES ('19', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥234', '已有200', '已售200', '../images/liebiao/0 (19).jpg');
INSERT INTO `liebiao` VALUES ('20', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥242', '已有200', '已售200', '../images/liebiao/0 (20).jpg');
INSERT INTO `liebiao` VALUES ('21', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥999', '已有200', '已售200', '../images/liebiao/0 (21).jpg');
INSERT INTO `liebiao` VALUES ('22', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥242', '已有200', '已售2688', '../images/liebiao/0 (22).jpg');
INSERT INTO `liebiao` VALUES ('23', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥900', '已有200', '已售2030', '../images/liebiao/0 (23).jpg');
INSERT INTO `liebiao` VALUES ('24', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥5323', '已有200', '已售2004', '../images/liebiao/0 (27).jpg');
INSERT INTO `liebiao` VALUES ('25', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥243', '已有200', '已售200', '../images/liebiao/0 (25).jpg');
INSERT INTO `liebiao` VALUES ('26', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥233', '已有200', '已售234', '../images/liebiao/0 (26).jpg');
INSERT INTO `liebiao` VALUES ('27', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥253', '已有200', '已售343', '../images/liebiao/0 (27).jpg');
INSERT INTO `liebiao` VALUES ('28', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥120', '已有200', '已售600', '../images/liebiao/0 (42).jpg');
INSERT INTO `liebiao` VALUES ('29', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥158', '已有200', '已售2050', '../images/liebiao/0 (29).jpg');
INSERT INTO `liebiao` VALUES ('30', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg', '￥233', '已有200', '已售2004', '../images/liebiao/0 (30).jpg');
INSERT INTO `liebiao` VALUES ('31', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥988', '已有200', '已售2040', '../images/liebiao/0 (31).jpg');
INSERT INTO `liebiao` VALUES ('32', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥465', '已有200', '已售20043', '../images/liebiao/0 (32).jpg');
INSERT INTO `liebiao` VALUES ('33', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥788', '已有200', '已售2006', '../images/liebiao/0 (33).jpg');
INSERT INTO `liebiao` VALUES ('34', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥578', '已有200', '已售3522', '../images/liebiao/0 (34).jpg');
INSERT INTO `liebiao` VALUES ('35', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥888', '已有200', '已售2352', '../images/liebiao/0 (35).jpg');
INSERT INTO `liebiao` VALUES ('36', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥666', '已有200', '已售34532', '../images/liebiao/0 (36).jpg');
INSERT INTO `liebiao` VALUES ('37', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥544', '已有200', '已售6345', '../images/liebiao/0 (37).jpg');
INSERT INTO `liebiao` VALUES ('38', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥443', '已有200', '已售463', '../images/liebiao/0 (38).jpg');
INSERT INTO `liebiao` VALUES ('39', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥280', '已有200', '已售688', '../images/liebiao/0 (39).jpg');
INSERT INTO `liebiao` VALUES ('40', '冠能PRO PLAN 大型犬成犬挑食及美毛配方全价狗粮2.4kg(80g*3', '￥289', '已有200', '已售230', '../images/liebiao/0 (40).jpg');

-- ----------------------------
-- Table structure for maomao
-- ----------------------------
DROP TABLE IF EXISTS `maomao`;
CREATE TABLE `maomao` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `yihou` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of maomao
-- ----------------------------
INSERT INTO `maomao` VALUES ('1', '牛油味鸡肉粒3kg', '￥228', '已售1778', 'images/mm/m1.jpg');
INSERT INTO `maomao` VALUES ('2', '法国皇家套餐5kg', '￥888', '已售1778', 'images/mm/m2.jpg');
INSERT INTO `maomao` VALUES ('3', '荒野盛宴烤驴肉8kg', '￥999', '已售1888', 'images/mm/m3.jpg');
INSERT INTO `maomao` VALUES ('4', '幼猫专区用粮9kg', '￥566', '已售1999', 'images/mm/m4.jpg');
INSERT INTO `maomao` VALUES ('5', '迷你秀仓鼠套餐', '￥778', '已售4555', 'images/mm/m5.jpg');
INSERT INTO `maomao` VALUES ('6', '刘安仓鼠粮8kg', '￥686', '已售5443', 'images/mm/m6.jpg');
INSERT INTO `maomao` VALUES ('7', '爬虫无菌土', '￥900', '已售322', 'images/mm/m7.jpg');
INSERT INTO `maomao` VALUES ('8', '鱼缸森森多功能', '￥899', '已售532', 'images/mm/m8.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `genader` varchar(255) DEFAULT NULL,
  `reg_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '注册时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'xiaomin', '123456', '未知', '2018-03-28 19:45:42');
INSERT INTO `user` VALUES ('7', '小黑', '123445', '女', '2018-03-28 19:49:09');
INSERT INTO `user` VALUES ('6', 'tioa', '66888', '未知', '2018-03-28 19:45:42');
INSERT INTO `user` VALUES ('8', 'xiaohong', '66', '未知', '2018-03-28 19:45:42');
INSERT INTO `user` VALUES ('9', 'length', '66', '未知', '2018-03-28 19:45:42');
INSERT INTO `user` VALUES ('10', 'nihao ', 'e807f1fcf82d132f9bb018ca6738a19f', null, '2018-03-29 11:59:14');
INSERT INTO `user` VALUES ('11', 'xiaoming', 'd2d91e085d9980fb584134007dbcf03a', null, '2018-03-29 13:59:59');
INSERT INTO `user` VALUES ('12', 'nihao0', '25f9e794323b453885f5181f1b624d0b', null, '2018-03-29 14:00:41');
INSERT INTO `user` VALUES ('13', '88888888', '8ddcff3a80f4189ca1c9d4d902c3c909', null, '2018-03-29 14:01:34');
INSERT INTO `user` VALUES ('14', 'kcns1223', '493da9c192971385d2fe8948f66c09b8', null, '2018-03-29 16:17:06');
INSERT INTO `user` VALUES ('15', '8888', 'cf79ae6addba60ad018347359bd144d2', null, '2018-03-29 16:17:21');
INSERT INTO `user` VALUES ('16', '88888', '1c395a8dce135849bd73c6dba3b54809', null, '2018-03-29 16:19:05');
INSERT INTO `user` VALUES ('21', 'xiao', 'bad0fd5ec07f06535db8f478a5e31a82', null, '2018-03-29 19:57:30');
INSERT INTO `user` VALUES ('20', '12345678', '25d55ad283aa400af464c76d713c07ad', null, '2018-03-29 17:57:12');
INSERT INTO `user` VALUES ('19', 'cdl', '0b1daeeadbc2113ca360265dc600a50e', null, '2018-03-29 16:24:13');
INSERT INTO `user` VALUES ('22', 'xiaoo', 'e10adc3949ba59abbe56e057f20f883e', null, '2018-03-29 19:58:16');
INSERT INTO `user` VALUES ('23', '老薛', 'f07de724f31e89c9c93e959dd6c6f3e9', null, '2018-04-04 09:40:40');
INSERT INTO `user` VALUES ('24', '你好', 'e807f1fcf82d132f9bb018ca6738a19f', null, '2018-04-04 09:40:53');
INSERT INTO `user` VALUES ('25', '', 'd41d8cd98f00b204e9800998ecf8427e', null, '2018-04-04 09:45:30');
INSERT INTO `user` VALUES ('26', '1223', 'e807f1fcf82d132f9bb018ca6738a19f', null, '2018-04-04 16:23:06');
INSERT INTO `user` VALUES ('27', 'kcns1223333', '8e369838a6466e1d9af88962406623d8', null, '2018-04-04 16:46:34');
INSERT INTO `user` VALUES ('28', 'cdl2233', 'd41d8cd98f00b204e9800998ecf8427e', null, '2018-04-04 16:47:19');
INSERT INTO `user` VALUES ('29', 'cdl123', 'fcedcb36487e70d4b39b24405466af3a', null, '2018-04-04 16:49:23');
INSERT INTO `user` VALUES ('30', 'gdg1234567', '0b1daeeadbc2113ca360265dc600a50e', null, '2018-04-04 16:54:56');
INSERT INTO `user` VALUES ('31', 'cdl122', '4772440d53da5e732b6505373a9c1efa', null, '2018-04-04 17:36:34');
INSERT INTO `user` VALUES ('32', 'cdl34', '63527721f52d8ae16535833f3eb2a1df', null, '2018-04-04 19:40:14');
INSERT INTO `user` VALUES ('33', 'cdlcdl12', 'd65dd2b61718d842043205e81571641b', null, '2018-04-04 19:43:39');
INSERT INTO `user` VALUES ('34', 'nihao2', '32f072158ccd9f5e76d2abcd18c9bd74', null, '2018-04-04 19:46:11');
INSERT INTO `user` VALUES ('35', 'nihaon', 'c9ec4391381de0e841b518603bd490f3', null, '2018-04-04 19:54:10');
INSERT INTO `user` VALUES ('36', 'CDL1212', '83392601101edda268a9215cf26db131', null, '2018-04-08 15:53:33');
INSERT INTO `user` VALUES ('37', 'CDL666', 'd41d8cd98f00b204e9800998ecf8427e', null, '2018-04-08 16:04:08');
INSERT INTO `user` VALUES ('38', 'CDL6666', 'e55db812e9c47fd2197591588fdfda3e', null, '2018-04-08 16:05:33');
INSERT INTO `user` VALUES ('39', 'cdlcdl', '5c89d2d694e36f38c14f2193320807fd', null, '2018-04-09 09:27:31');
INSERT INTO `user` VALUES ('40', 'cdl1234567', 'd81c79bfa847fd20b62fc2b12c637da2', null, '2018-04-09 09:28:14');
INSERT INTO `user` VALUES ('41', 'kc3344', 'cbfc01fe4c2cec46f1285c0c0958ec70', null, '2018-04-09 09:29:32');
INSERT INTO `user` VALUES ('42', 'we2234234', 'a0c383b3d3eac936d0a0423433f48252', null, '2018-04-09 09:31:20');
INSERT INTO `user` VALUES ('43', 'cdf234567', '0117c830058d9adffb859f1b167d4acc', null, '2018-04-09 09:37:13');
INSERT INTO `user` VALUES ('44', 'cdf23456', '179ec5f89842ef3025dc3b1040189d14', null, '2018-04-09 09:37:46');
INSERT INTO `user` VALUES ('45', 'cdd333', 'cf0d08ad46ee275b85ab623895b7c253', null, '2018-04-09 09:38:41');
INSERT INTO `user` VALUES ('46', 'kcns12', 'e7cff5f0cc776b57b7699f47b113bc11', null, '2018-04-09 09:40:44');
INSERT INTO `user` VALUES ('47', 'kcs123', '5c89d2d694e36f38c14f2193320807fd', null, '2018-04-09 09:46:38');
INSERT INTO `user` VALUES ('48', 'kcs1231', '5c89d2d694e36f38c14f2193320807fd', null, '2018-04-09 09:46:54');
INSERT INTO `user` VALUES ('49', 'kcs1233', '5c89d2d694e36f38c14f2193320807fd', null, '2018-04-09 09:47:26');
INSERT INTO `user` VALUES ('50', 'vfgvfg1234', '7b262131a14fd38e2d107f4ef7d0db73', null, '2018-04-09 09:56:59');
INSERT INTO `user` VALUES ('51', '[object HTMLInputElement]', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 12:04:45');
INSERT INTO `user` VALUES ('52', 'cdl2345', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:16:13');
INSERT INTO `user` VALUES ('53', 'cdl0000', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:16:35');
INSERT INTO `user` VALUES ('54', 'cdl00000', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:18:00');
INSERT INTO `user` VALUES ('55', 'cdl0099', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:18:56');
INSERT INTO `user` VALUES ('56', 'cdl9900', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:20:22');
INSERT INTO `user` VALUES ('57', 'cdl789', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:26:14');
INSERT INTO `user` VALUES ('58', 'qwe123', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:45:35');
INSERT INTO `user` VALUES ('59', 'qwe1234', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:48:32');
INSERT INTO `user` VALUES ('60', 'cdl556', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:54:10');
INSERT INTO `user` VALUES ('61', 'cdl889', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 14:57:01');
INSERT INTO `user` VALUES ('62', 'cdl1234', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 15:06:01');
INSERT INTO `user` VALUES ('63', 'cdl990', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 15:10:15');
INSERT INTO `user` VALUES ('64', 'cdl1239', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 15:15:32');
INSERT INTO `user` VALUES ('65', 'kkk444', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-09 15:32:17');
INSERT INTO `user` VALUES ('66', 'ooo000', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-10 09:45:51');
INSERT INTO `user` VALUES ('67', 'iii999', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-10 09:50:08');
INSERT INTO `user` VALUES ('68', 'btn123', '5e543256c480ac577d30f76f9120eb74', null, '2018-04-13 16:04:40');

-- ----------------------------
-- Table structure for you
-- ----------------------------
DROP TABLE IF EXISTS `you`;
CREATE TABLE `you` (
  `id` int(200) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of you
-- ----------------------------
INSERT INTO `you` VALUES ('1', '幼猫粮海洋1.2kg', '￥38.70', 'images/mm/y1');
INSERT INTO `you` VALUES ('2', '渺多乐长毛猫1.8kg', '￥98.7', 'images/mm/y2');
INSERT INTO `you` VALUES ('3', '法国皇家室内成猫', '￥93.7', 'images/mm/y3');
INSERT INTO `you` VALUES ('4', '幼猫山羊奶果冻布丁', '￥999', 'images/mm/y4');
INSERT INTO `you` VALUES ('5', ' 金枪鱼鸡小肉1.9kg', '￥200', 'images/mm/y5');
INSERT INTO `you` VALUES ('6', '猫猩人创意抱枕', '￥66', 'images/mm/y6');
SET FOREIGN_KEY_CHECKS=1;
