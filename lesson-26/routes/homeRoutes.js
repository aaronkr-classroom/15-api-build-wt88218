// routes/homeRoutes.js
"use strict";

const router =require("express").Router(),
    pagesController = require("../controllers/pagesController");

/**
 * Listing 26.1 (p. 380)
 */

/**
 * Home
 */
/** @TODO: Home (Pages) 라우트의 homeRoutes.js로의 이동 */
/**
 * Pages
 */
router.get("/", pagesController.showHome); // 홈 페이지 위한 라우트 추가
router.get("/about", pagesController.showAbout); // 코스 페이지 위한 라우트 추가
router.get("/transportation", pagesController.showTransportation); // 교통수단 페이지 위한 라우트 추가

module.exports = router;