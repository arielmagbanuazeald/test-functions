const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/sample-products-feed', (req, res, next) => {
	res.status(200).send({
		"entries": [
			{
				"batchId": 4075,
				"merchantId": 139482445,
				"method": "insert",
				"feedId": 101570,
				"product": {
					"kind": "content#product",
					"id": "2204075",
					"offerId": "2204075",
					"title": "Amazing Product",
					"description": "A lovely liveable design with a printed white bee digitally printed on a soft silver-grey base with diamond embroidery",
					"imageLink": "https:\/\/www.neptuneslinen.co.nz\/\/site\/neptunes\/images\/items\/Page-13-Bijou-Bedspread-Set-5.1.jpg",
					"additionalImageLinks": [
						"https:\/\/www.neptuneslinen.co.nz\/\/site\/neptunes\/images\/items\/Page-12-Simone-Duvet-Set-&-Bijou-Comforter-2.1.1.jpg"
					],
					"contentLanguage": "en",
					"targetCountry": "NZ",
					"channel": "online",
					"availability": "preorder",
					"sellOnGoogleQuantity": -2,
					"price": {
						"value": "99.90",
						"currency": "nzd"
					},
					"gtin": "",
					"brand": "",
					"mpn": "",
					"shippingWeight": {
						"value": 4,
						"unit": "kg"
					},
					"shippingWidth": {
						"value": 0,
						"unit": "cm"
					},
					"shippingLength": {
						"value": 0,
						"unit": "cm"
					},
					"shippingHeight": {
						"value": 0,
						"unit": "cm"
					},
					"identifierExists": false,
					"sizes": [
						null
					],
					"customAttributes": [
						{
							"name": "sku",
							"value": "04075"
						},
						{
							"name": "status",
							"value": "inactive"
						},
						{
							"name": "inventory",
							"value": -2
						},
						{
							"name": "weight",
							"value": 4
						},
						{
							"name": "customData1",
							"value": "1"
						},
						{
							"name": "imageLarge",
							"value": "https:\/\/www.neptuneslinen.co.nz\/\/site\/neptunes\/images\/items\/Page-13-Bijou-Bedspread-Set-5.jpg"
						}
					]
				}
			},
			{
				"batchId": 4314,
				"merchantId": 0,
				"method": "insert",
				"feedId": 101570,
				"product": {
					"kind": "content#product",
					"id": "1104314",
					"offerId": "1104314",
					"title": "Awesome Product",
					"description": "Modern digital design featuring the ever popular bee motive",
					"imageLink": "https:\/\/www.neptuneslinen.co.nz\/\/site\/neptunes\/images\/items\/Page 20 Bebe Comforter Set2.jpg",
					"additionalImageLinks": [
						"https:\/\/www.neptuneslinen.co.nz\/\/site\/neptunes\/images\/items\/Page 20 Bebe Comforter1.JPG"
					],
					"contentLanguage": "en",
					"targetCountry": "NZ",
					"channel": "online",
					"availability": "preorder",
					"price": {
						"value": "279.90",
						"currency": "nzd"
					},
					"gtin": "",
					"brand": "",
					"mpn": "",
					"shippingWeight": {
						"value": 2.5,
						"unit": "kg"
					},
					"shippingWidth": {
						"value": 0,
						"unit": "cm"
					},
					"shippingLength": {
						"value": 0,
						"unit": "cm"
					},
					"shippingHeight": {
						"value": 0,
						"unit": "cm"
					},
					"identifierExists": false,
					"sizes": [
						null
					],
					"customAttributes": [
						{
							"name": "sku",
							"value": "04314"
						},
						{
							"name": "status",
							"value": "inactive"
						},
						{
							"name": "weight",
							"value": 2.5
						},
						{
							"name": "customData1",
							"value": "1"
						},
						{
							"name": "imageLarge",
							"value": "https:\/\/www.neptuneslinen.co.nz\/\/site\/neptunes\/images\/items\/"
						}
					]
				}
			}
		]
	});
});

router.get('/atom-products-feed', (req, res, next) => {
	res.contentType('application/xml');
	res.sendFile(path.join(__dirname , 'atom-example.xml'));
});

router.get('/rss-products-feed', (req, res, next) => {
	res.contentType('application/xml');
	res.sendFile(path.join(__dirname , 'example_feed_xml_rss.xml'));
});

module.exports = router;