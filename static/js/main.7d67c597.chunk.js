(this["webpackJsonp@pancakeswap/interface"] = this["webpackJsonp@pancakeswap/interface"] || []).push([
	[1], {
		120: function(e) {
			e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
		},
		149: function(e) {
			e.exports = JSON.parse('{"name":"pancakeswap","timestamp":"2020-08-25T15:41:29.665Z","version":{"major":1,"minor":3,"patch":1},"tags":{},"logoURI":"/images/coins/wbnb.png","keywords":["pancake","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"logoURI":"/images/coins/ETH.png"},{"name":"XRP Token","symbol":"XRP","address":"0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe","chainId":56,"decimals":18,"logoURI":"/images/coins/XRP-icon.png"},{"name":"HoodShiba","symbol":"HS","address":"0xf06c0a3d9e35c0d5ff8f771c53a39f0d46e21bee","chainId":56,"decimals":18,"logoURI":"/images/coins/HS.png"},{"name":"Binance-Peg BUSD","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"/images/coins/BUSD.png"},{"name":"QNET","symbol":"QUANTUM","address":"0xfec43e003a7b0ecf7d06adca803193250f445696","chainId":56,"decimals":9,"logoURI":"/images/coins/MINU.png"},{"name":"Matic Token","symbol":"MATIC","address":"0xcc42724c6683b7e57334c4e856f4c9965ed682bd","chainId":56,"decimals":18,"logoURI":"https://bscscan.com/token/images/matic_32.png"},{"name":"SafeMoon","symbol":"SFM","address":"0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5","chainId":56,"decimals":9,"logoURI":"https://bscscan.com/token/images/safemoon2_32.png"},{"name":"FLOKI","symbol":"FLOKI","address":"0xfb5B838b6cfEEdC2873aB27866079AC55363D37E","chainId":56,"decimals":9,"logoURI":"https://bscscan.com/token/images/theflokiinubsc_32.png"},{"name":"Chiba Inu","symbol":"Chiba","address":"0xc4cdc643a3ba49d5cd296db591ef0a56a9080886","chainId":56,"decimals":9,"logoURI":"https://bscscan.com/token/images/chiba_32.png"}]}')
		},
		231: function(e) {
			e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
		},
		232: function(e) {
			e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
		},
		265: function(e) {
			e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
		},
		266: function(e) {
			e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
		},
		267: function(e) {
			e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
		},
		377: function(e, n) {},
		477: function(e, n, t) {
			"use strict";
			t.r(n);
			var r = t(1),
				i = t(0),
				a = t.n(i),
				c = t(79),
				o = t.n(c),
				s = t(3),
				u = t(9),
				l = t(4);

			function d() {
				var e = Object(u.a)(["\n  body {\n    background:url('../images/bg.jpeg');\n    background-size: cover;\n\n    img {\n      height: auto;\n      max-width: 100%;\n    }\n  }\n"]);
				return d = function() {
					return e
				}, e
			}
			var b, p = Object(l.createGlobalStyle)(d()),
				f = t(7),
				j = t.n(f),
				h = t(32),
				v = t(11),
				m = t(43),
				y = t(44),
				O = t(251),
				x = t(22),
				g = t(59),
				C = t(123),
				w = t(17),
				k = t(168),
				T = t(254),
				I = t(255),
				E = t(256),
				N = t(257),
				R = t(12),
				S = t(124),
				U = t(10),
				A = t(14),
				P = t(15),
				M = t(126),
				B = t(84),
				L = t(20),
				_ = function(e) {
					Object(A.a)(t, e);
					var n = Object(P.a)(t);

					function t(e, r, i) {
						var a;
						return Object(U.a)(this, t), (a = n.call(this, e)).code = r, a.data = i, a
					}
					return t
				}(Object(M.a)(Error)),
				D = function e(n, t, r) {
					var i = this;
					Object(U.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(h.a)(j.a.mark((function e() {
						var n, t, r, a, c, o, s, u, l, d, b, p, f, h;
						return j.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return console.info("Clearing batch", i.batch), n = i.batch, i.batch = [], i.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(i.url, {
										method: "POST",
										headers: {
											"content-type": "application/json",
											accept: "application/json"
										},
										body: JSON.stringify(n.map((function(e) {
											return e.request
										})))
									});
								case 7:
									t = e.sent, e.next = 14;
									break;
								case 10:
									return e.prev = 10, e.t0 = e.catch(4), n.forEach((function(e) {
										return (0, e.reject)(new Error("Failed to send batch call"))
									})), e.abrupt("return");
								case 14:
									if (t.ok) {
										e.next = 17;
										break
									}
									return n.forEach((function(e) {
										return (0, e.reject)(new _("".concat(t.status, ": ").concat(t.statusText), -32e3))
									})), e.abrupt("return");
								case 17:
									return e.prev = 17, e.next = 20, t.json();
								case 20:
									r = e.sent, e.next = 27;
									break;
								case 23:
									return e.prev = 23, e.t1 = e.catch(17), n.forEach((function(e) {
										return (0, e.reject)(new Error("Failed to parse JSON response"))
									})), e.abrupt("return");
								case 27:
									a = n.reduce((function(e, n) {
										return e[n.request.id] = n, e
									}), {}), c = Object(S.a)(r);
									try {
										for (c.s(); !(o = c.n()).done;) s = o.value, u = a[s.id], l = u.resolve, d = u.reject, b = u.request.method, l && d && ("error" in s ? d(new _(null === s || void 0 === s || null === (p = s.error) || void 0 === p ? void 0 : p.message, null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.code, null === s || void 0 === s || null === (h = s.error) || void 0 === h ? void 0 : h.data)) : "result" in s ? l(s.result) : d(new _("Received unexpected JSON-RPC response to ".concat(b, " request."), -32e3, s)))
									} catch (j) {
										c.e(j)
									} finally {
										c.f()
									}
									case 30:
									case "end":
										return e.stop()
							}
						}), e, null, [
							[4, 10],
							[17, 23]
						])
					}))), this.sendAsync = function(e, n) {
						i.request(e.method, e.params).then((function(t) {
							return n(null, {
								jsonrpc: "2.0",
								id: e.id,
								result: t
							})
						})).catch((function(e) {
							return n(e, null)
						}))
					}, this.request = function() {
						var e = Object(h.a)(j.a.mark((function e(n, t) {
							var r, a;
							return j.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										if ("string" === typeof n) {
											e.next = 2;
											break
										}
										return e.abrupt("return", i.request(n.method, n.params));
									case 2:
										if ("eth_chainId" !== n) {
											e.next = 4;
											break
										}
										return e.abrupt("return", "0x".concat(i.chainId.toString(16)));
									case 4:
										return a = new Promise((function(e, r) {
											i.batch.push({
												request: {
													jsonrpc: "2.0",
													id: i.nextId++,
													method: n,
													params: t
												},
												resolve: e,
												reject: r
											})
										})), i.batchTimeoutId = null !== (r = i.batchTimeoutId) && void 0 !== r ? r : setTimeout(i.clearBatch, i.batchWaitTimeMs), e.abrupt("return", a);
									case 7:
									case "end":
										return e.stop()
								}
							}), e)
						})));
						return function(n, t) {
							return e.apply(this, arguments)
						}
					}(), this.chainId = n, this.url = t;
					var a = new URL(t);
					this.host = a.host, this.path = a.pathname, this.batchWaitTimeMs = null !== r && void 0 !== r ? r : 50
				},
				Y = function(e) {
					Object(A.a)(t, e);
					var n = Object(P.a)(t);

					function t(e) {
						var r, i = e.urls,
							a = e.defaultChainId;
						return Object(U.a)(this, t), Object(L.a)(a || 1 === Object.keys(i).length, "defaultChainId is a required argument with >1 url"), (r = n.call(this, {
							supportedChainIds: Object.keys(i).map((function(e) {
								return Number(e)
							}))
						})).providers = void 0, r.currentChainId = void 0, r.currentChainId = a || Number(Object.keys(i)[0]), r.providers = Object.keys(i).reduce((function(e, n) {
							return e[Number(n)] = new D(Number(n), i[Number(n)]), e
						}), {}), r
					}
					return Object(R.a)(t, [{
						key: "activate",
						value: function() {
							var e = Object(h.a)(j.a.mark((function e() {
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", {
												provider: this.providers[this.currentChainId],
												chainId: this.currentChainId,
												account: null
											});
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getProvider",
						value: function() {
							var e = Object(h.a)(j.a.mark((function e() {
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.providers[this.currentChainId]);
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getChainId",
						value: function() {
							var e = Object(h.a)(j.a.mark((function e() {
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", this.currentChainId);
										case 1:
										case "end":
											return e.stop()
									}
								}), e, this)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "getAccount",
						value: function() {
							var e = Object(h.a)(j.a.mark((function e() {
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.abrupt("return", null);
										case 1:
										case "end":
											return e.stop()
									}
								}), e)
							})));
							return function() {
								return e.apply(this, arguments)
							}
						}()
					}, {
						key: "deactivate",
						value: function() {
							return null
						}
					}, {
						key: "provider",
						get: function() {
							return this.providers[this.currentChainId]
						}
					}]), t
				}(B.AbstractConnector),
				z = "https://bsc-dataseed1.defibit.io",
				F = parseInt(("56", "56"));
			var q, V = new Y({
				urls: Object(w.a)({}, F, z)
			});
			var W, H = new T.a({
					supportedChainIds: [56]
				}),
				Q = new N.BscConnector({
					supportedChainIds: [56]
				}),
				K = new I.a({
					rpc: Object(w.a)({}, F, z),
					bridge: "https://bridge.walletconnect.org",
					qrcode: !0,
					pollingInterval: 15e3
				}),
				G = (new E.a({
					url: z,
					appName: "Uniswap",
					appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"
				}), b = {}, Object(w.a)(b, s.l.Injected, H), Object(w.a)(b, s.l.WalletConnect, K), Object(w.a)(b, s.l.BSC, Q), b),
				J = t(27),
				X = t(13),
				$ = t(5),
				Z = "0x10ED43C718714eb63d5aA57B78B54704E256024E",
				ee = new $.j($.a.MAINNET, "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", 18, "DAI", "Dai Stablecoin"),
				ne = new $.j($.a.MAINNET, "0xe9e7cea3dedca5984780bafc599bd69add087d56", 18, "BUSD", "Binance USD"),
				te = new $.j($.a.MAINNET, "0x55d398326f99059ff775485246999027b3197955", 18, "USDT", "Tether USD"),
				re = new $.j($.a.MAINNET, "0x23396cf899ca06c4472205fc903bdb4de249d6fc", 18, "UST", "Wrapped UST Token"),
				ie = new $.j($.a.MAINNET, "0x2170ed0880ac9a755fd29b2688956bd959f933f8", 18, "ETH", "Binance-Peg Ethereum Token"),
				ae = (W = {}, Object(w.a)(W, $.a.MAINNET, [$.n[$.a.MAINNET]]), Object(w.a)(W, $.a.BSCTESTNET, [$.n[$.a.BSCTESTNET]]), W),
				ce = Object(X.a)(Object(X.a)({}, ae), {}, Object(w.a)({}, $.a.MAINNET, [].concat(Object(J.a)(ae[$.a.MAINNET]), [ee, ne, te, re, ie]))),
				oe = Object(w.a)({}, $.a.MAINNET, {}),
				se = Object(X.a)(Object(X.a)({}, ae), {}, Object(w.a)({}, $.a.MAINNET, [].concat(Object(J.a)(ae[$.a.MAINNET]), [ee, ne, te]))),
				ue = Object(X.a)(Object(X.a)({}, ae), {}, Object(w.a)({}, $.a.MAINNET, [].concat(Object(J.a)(ae[$.a.MAINNET]), [ee, ne, te]))),
				le = Object(w.a)({}, $.a.MAINNET, [
					[new $.j($.a.MAINNET, "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", 18, "CAKE", "PancakeSwap Token"), new $.j($.a.MAINNET, "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", 18, "WBNB", "Wrapped BNB")],
					[ne, te],
					[ee, te]
				]),
				de = "NETWORK",
				be = 80,
				pe = 1200,
				fe = new $.g($.e.BigInt(1), $.e.BigInt(1e4)),
				je = $.e.BigInt(1e4),
				he = new $.g($.e.BigInt(100), je),
				ve = new $.g($.e.BigInt(300), je),
				me = new $.g($.e.BigInt(500), je),
				ye = new $.g($.e.BigInt(1e3), je),
				Oe = new $.g($.e.BigInt(1500), je),
				xe = $.e.exponentiate($.e.BigInt(10), $.e.BigInt(16));

			function ge() {
				var e = Object(g.c)(),
					n = Object(g.c)(de);
				return e.active ? e : n
			}
			var Ce = t(21),
				we = Object(Ce.b)("app/updateBlockNumber"),
				ke = Object(Ce.b)("app/toggleWalletModal"),
				Te = Object(Ce.b)("app/toggleSettingsMenu"),
				Ie = Object(Ce.b)("app/addPopup"),
				Ee = Object(Ce.b)("app/removePopup");

			function Ne() {
				var e = ge().chainId;
				return Object(x.d)((function(n) {
					return n.application.blockNumber[null !== e && void 0 !== e ? e : -1]
				}))
			}

			function Re() {
				var e = Object(x.c)();
				return Object(i.useCallback)((function(n) {
					e(Ee({
						key: n
					}))
				}), [e])
			}

			function Se() {
				var e = Object(u.a)(["\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ", ";\n  justify-items: ", ";\n"]);
				return Se = function() {
					return e
				}, e
			}

			function Ue() {
				var e = Object(u.a)(["\n  width: 100%;\n  align-items: center;\n"]);
				return Ue = function() {
					return e
				}, e
			}

			function Ae() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n"]);
				return Ae = function() {
					return e
				}, e
			}
			var Pe = l.default.div(Ae()),
				Me = Object(l.default)(Pe)(Ue()),
				Be = l.default.div(Se(), (function(e) {
					var n = e.gap;
					return ("sm" === n ? "8px" : "md" === n && "12px") || "lg" === n && "24px" || n
				}), (function(e) {
					var n = e.justify;
					return n && n
				})),
				Le = Pe,
				_e = t(493),
				De = t(95),
				Ye = t(67),
				ze = {
					pending: Object(Ce.b)("lists/fetchTokenList/pending"),
					fulfilled: Object(Ce.b)("lists/fetchTokenList/fulfilled"),
					rejected: Object(Ce.b)("lists/fetchTokenList/rejected")
				},
				Fe = Object(Ce.b)("lists/acceptListUpdate"),
				qe = Object(Ce.b)("lists/addList"),
				Ve = Object(Ce.b)("lists/removeList"),
				We = Object(Ce.b)("lists/selectList");
			Object(Ce.b)("lists/rejectVersionUpdate");

			function He(e) {
				return "v".concat(e.major, ".").concat(e.minor, ".").concat(e.patch)
			}
			var Qe = t(261);

			function Ke() {
				var e = Object(u.a)(["\n  width: fit-content;\n  margin: ", ";\n"]);
				return Ke = function() {
					return e
				}, e
			}

			function Ge() {
				var e = Object(u.a)(["\n  flex-wrap: wrap;\n  margin: ", ";\n  justify-content: ", ";\n\n  & > * {\n    margin: ", " !important;\n  }\n"]);
				return Ge = function() {
					return e
				}, e
			}

			function Je() {
				var e = Object(u.a)(["\n  display: flex;\n  align-items: flex-end;\n"]);
				return Je = function() {
					return e
				}, e
			}

			function Xe() {
				var e = Object(u.a)(["\n  justify-content: space-between;\n"]);
				return Xe = function() {
					return e
				}, e
			}

			function $e() {
				var e = Object(u.a)(["\n  width: 100%;\n  display: flex;\n  padding: 0;\n  align-items: ", ";\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
				return $e = function() {
					return e
				}, e
			}
			var Ze = Object(l.default)(Qe.Box)($e(), (function(e) {
					return e.align || "center"
				}), (function(e) {
					return e.padding
				}), (function(e) {
					return e.border
				}), (function(e) {
					return e.borderRadius
				})),
				en = Object(l.default)(Ze)(Xe()),
				nn = l.default.div(Je()),
				tn = Object(l.default)(Ze)(Ge(), (function(e) {
					var n = e.gap;
					return n && "-".concat(n)
				}), (function(e) {
					var n = e.justify;
					return n && n
				}), (function(e) {
					return e.gap
				})),
				rn = Object(l.default)(Ze)(Ke(), (function(e) {
					var n = e.gap;
					return n && "-".concat(n)
				})),
				an = Ze;

			function cn(e) {
				var n = e.popKey,
					t = e.listUrl,
					c = e.oldList,
					o = e.newList,
					u = e.auto,
					l = Re(),
					d = Object(i.useCallback)((function() {
						return l(n)
					}), [n, l]),
					b = Object(x.c)(),
					p = Object(i.useCallback)((function() {
						u || (b(Fe(t)), d())
					}), [u, b, t, d]),
					f = Object(i.useMemo)((function() {
						return Object(Ye.b)(c.tokens, o.tokens)
					}), [o.tokens, c.tokens]),
					j = f.added,
					h = f.changed,
					v = f.removed,
					m = Object(i.useMemo)((function() {
						return Object.keys(h).reduce((function(e, n) {
							return e + Object.keys(h[n]).length
						}), 0)
					}), [h]);
				return Object(r.jsx)(tn, {
					children: Object(r.jsx)(Be, {
						style: {
							flex: "1"
						},
						gap: "8px",
						children: u ? Object(r.jsxs)(s.y, {
							children: ['The token list "', c.name, '" has been updated to', " ", Object(r.jsx)("strong", {
								children: He(o.version)
							}), "."]
						}) : Object(r.jsxs)(r.Fragment, {
							children: [Object(r.jsxs)("div", {
								children: [Object(r.jsxs)(s.y, {
									fontSize: "14px",
									children: ['An update is available for the token list "', c.name, '" (', He(c.version), " to ", He(o.version), ")."]
								}), Object(r.jsxs)("ul", {
									children: [j.length > 0 ? Object(r.jsxs)("li", {
										children: [j.map((function(e, n) {
											return Object(r.jsxs)(a.a.Fragment, {
												children: [Object(r.jsx)("strong", {
													title: e.address,
													children: e.symbol
												}), n === j.length - 1 ? null : ", "]
											}, "".concat(e.chainId, "-").concat(e.address))
										})), " ", "added"]
									}) : null, v.length > 0 ? Object(r.jsxs)("li", {
										children: [v.map((function(e, n) {
											return Object(r.jsxs)(a.a.Fragment, {
												children: [Object(r.jsx)("strong", {
													title: e.address,
													children: e.symbol
												}), n === v.length - 1 ? null : ", "]
											}, "".concat(e.chainId, "-").concat(e.address))
										})), " ", "removed"]
									}) : null, m > 0 ? Object(r.jsxs)("li", {
										children: [m, " tokens updated"]
									}) : null]
								})]
							}), Object(r.jsxs)(tn, {
								children: [Object(r.jsx)("div", {
									style: {
										flexGrow: 1,
										marginRight: 12
									},
									children: Object(r.jsx)(s.c, {
										onClick: p,
										children: "Accept update"
									})
								}), Object(r.jsx)("div", {
									style: {
										flexGrow: 1
									},
									children: Object(r.jsx)(s.c, {
										onClick: d,
										children: "Dismiss"
									})
								})]
							})]
						})
					})
				})
			}
			var on = t(491),
				sn = t(492),
				un = t(96),
				ln = t(30),
				dn = t(480),
				bn = t(24),
				pn = t(262);

			function fn(e) {
				try {
					return Object(ln.getAddress)(e)
				} catch (n) {
					return !1
				}
			}
			var jn = {
				56: "",
				97: "testnet."
			};

			function hn(e, n, t) {
				var r = "https://".concat(jn[e] || jn[$.a.MAINNET], "bscscan.com");
				switch (t) {
					case "transaction":
						return "".concat(r, "/tx/").concat(n);
					case "token":
						return "".concat(r, "/token/").concat(n);
					case "address":
					default:
						return "".concat(r, "/address/").concat(n)
				}
			}

			function vn(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
					t = fn(e);
				if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
				return "".concat(t.substring(0, n + 2), "...").concat(t.substring(42 - n))
			}

			function mn(e) {
				return e.mul(bn.a.from(1e4).add(bn.a.from(1e3))).div(bn.a.from(1e4))
			}

			function yn(e, n) {
				if (n < 0 || n > 1e4) throw Error("Unexpected slippage value: ".concat(n));
				return [$.e.divide($.e.multiply(e.raw, $.e.BigInt(1e4 - n)), $.e.BigInt(1e4)), $.e.divide($.e.multiply(e.raw, $.e.BigInt(1e4 + n)), $.e.BigInt(1e4))]
			}

			function On(e, n, t, r) {
				if (!fn(e) || e === dn.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
				return new un.a(e, n, function(e, n) {
					return n ? function(e, n) {
						return e.getSigner(n).connectUnchecked()
					}(e, n) : e
				}(t, r))
			}

			function xn(e, n, t) {
				return On(Z, pn.a, n, t)
			}
			var gn = t(57);

			function Cn() {
				var e = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  width: 16px;\n  height: 16px;\n"]);
				return Cn = function() {
					return e
				}, e
			}

			function wn() {
				var e = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
				return wn = function() {
					return e
				}, e
			}

			function kn() {
				var e = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
				return kn = function() {
					return e
				}, e
			}

			function Tn() {
				var e = Object(u.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
				return Tn = function() {
					return e
				}, e
			}

			function In() {
				var e = Object(u.a)(["\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ", ";\n  color: ", ";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ", ";\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ", ";\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"]);
				return In = function() {
					return e
				}, e
			}
			var En = l.default.button(In(), (function(e) {
					return e.disabled ? "default" : "pointer"
				}), (function(e) {
					var n = e.theme;
					return e.disabled ? n.colors.textSubtle : n.colors.primary
				}), (function(e) {
					return e.disabled ? null : "underline"
				}), (function(e) {
					return e.disabled ? null : "underline"
				})),
				Nn = Object(l.default)(m.b)(Tn(), (function(e) {
					return e.theme.colors.primary
				})),
				Rn = l.default.a(kn(), (function(e) {
					return e.theme.colors.primary
				}));

			function Sn(e) {
				var n = e.target,
					t = void 0 === n ? "_blank" : n,
					a = e.href,
					c = e.rel,
					o = void 0 === c ? "noopener noreferrer" : c,
					s = Object(gn.a)(e, ["target", "href", "rel"]),
					u = Object(i.useCallback)((function(e) {
						"_blank" === t || e.ctrlKey || e.metaKey || e.preventDefault()
					}), [t]);
				return Object(r.jsx)(Rn, Object(X.a)({
					target: t,
					rel: o,
					href: a,
					onClick: u
				}, s))
			}
			var Un = Object(l.keyframes)(wn()),
				An = l.default.img(Cn(), Un);

			function Pn() {
				var e = Object(u.a)(["\n  flex-wrap: nowrap;\n"]);
				return Pn = function() {
					return e
				}, e
			}
			var Mn = Object(l.default)(tn)(Pn());

			function Bn(e) {
				var n = e.hash,
					t = e.success,
					a = e.summary,
					c = ge().chainId,
					o = Object(i.useContext)(l.ThemeContext);
				return Object(r.jsxs)(Mn, {
					children: [Object(r.jsx)("div", {
						style: {
							paddingRight: 16
						},
						children: t ? Object(r.jsx)(on.a, {
							color: o.colors.success,
							size: 24
						}) : Object(r.jsx)(sn.a, {
							color: o.colors.failure,
							size: 24
						})
					}), Object(r.jsxs)(Be, {
						gap: "8px",
						children: [Object(r.jsx)(s.y, {
							children: null !== a && void 0 !== a ? a : "Hash: ".concat(n.slice(0, 8), "...").concat(n.slice(58, 65))
						}), c && Object(r.jsx)(Sn, {
							href: hn(c, n, "transaction"),
							children: "View on bscscan"
						})]
					})]
				})
			}

			function Ln() {
				var e = Object(u.a)(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ", ";\n"]);
				return Ln = function() {
					return e
				}, e
			}

			function _n() {
				var e = Object(u.a)(["\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ", ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ", " {\n    min-width: 290px;\n  }\n"]);
				return _n = function() {
					return e
				}, e
			}

			function Dn() {
				var e = Object(u.a)(["\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n"]);
				return Dn = function() {
					return e
				}, e
			}
			var Yn = Object(l.default)(_e.a)(Dn()),
				zn = l.default.div(_n(), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					return e.theme.mediaQueries.sm
				})),
				Fn = l.default.div(Ln(), (function(e) {
					return e.theme.colors.tertiary
				})),
				qn = Object(De.a)(Fn);

			function Vn(e) {
				var n = e.removeAfterMs,
					t = e.content,
					a = e.popKey,
					c = Re(),
					o = Object(i.useCallback)((function() {
						return c(a)
					}), [a, c]);
				Object(i.useEffect)((function() {
					if (null !== n) {
						var e = setTimeout((function() {
							o()
						}), n);
						return function() {
							clearTimeout(e)
						}
					}
				}), [n, o]);
				var s, u = Object(i.useContext)(l.ThemeContext);
				if ("txn" in t) {
					var d = t.txn,
						b = d.hash,
						p = d.success,
						f = d.summary;
					s = Object(r.jsx)(Bn, {
						hash: b,
						success: p,
						summary: f
					})
				} else if ("listUpdate" in t) {
					var j = t.listUpdate,
						h = j.listUrl,
						v = j.oldList,
						m = j.newList,
						y = j.auto;
					s = Object(r.jsx)(cn, {
						popKey: a,
						listUrl: h,
						oldList: v,
						newList: m,
						auto: y
					})
				}
				var O = Object(De.b)({
					from: {
						width: "100%"
					},
					to: {
						width: "0%"
					},
					config: {
						duration: null !== n && void 0 !== n ? n : void 0
					}
				});
				return Object(r.jsxs)(zn, {
					children: [Object(r.jsx)(Yn, {
						color: u.colors.textSubtle,
						onClick: o
					}), s, null !== n ? Object(r.jsx)(qn, {
						style: O
					}) : null]
				})
			}

			function Wn() {
				var e = Object(u.a)(["\n  position: fixed;\n  top: 64px;\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  ", " {\n    display: none;\n  }\n"]);
				return Wn = function() {
					return e
				}, e
			}

			function Hn() {
				var e = Object(u.a)(["\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);
				return Hn = function() {
					return e
				}, e
			}

			function Qn() {
				var e = Object(u.a)(["\n  position: relative;\n  max-width: 100%;\n  height: ", ";\n  margin: ", ";\n  margin-bottom: ", "};\n  display: none;\n\n  ", " {\n    display: block;\n  }\n"]);
				return Qn = function() {
					return e
				}, e
			}
			var Kn = l.default.div(Qn(), (function(e) {
					return e.height
				}), (function(e) {
					return e.height ? "0 auto;" : 0
				}), (function(e) {
					return e.height ? "20px" : 0
				}), (function(e) {
					return e.theme.mediaQueries.sm
				})),
				Gn = l.default.div(Hn()),
				Jn = Object(l.default)(Be)(Wn(), (function(e) {
					return e.theme.mediaQueries.sm
				}));

			function Xn() {
				var e = function() {
					var e = Object(x.d)((function(e) {
						return e.application.popupList
					}));
					return Object(i.useMemo)((function() {
						return e.filter((function(e) {
							return e.show
						}))
					}), [e])
				}();
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsx)(Jn, {
						gap: "20px",
						children: e.map((function(e) {
							return Object(r.jsx)(Vn, {
								content: e.content,
								popKey: e.key,
								removeAfterMs: e.removeAfterMs
							}, e.key)
						}))
					}), Object(r.jsx)(Kn, {
						height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0,
						children: Object(r.jsx)(Gn, {
							children: e.slice(0).reverse().map((function(e) {
								return Object(r.jsx)(Vn, {
									content: e.content,
									popKey: e.key,
									removeAfterMs: e.removeAfterMs
								}, e.key)
							}))
						})
					})]
				})
			}
			var $n = t(110);

			function Zn() {
				var e = Object(u.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"]);
				return Zn = function() {
					return e
				}, e
			}

			function et() {
				var e = Object(u.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);
				return et = function() {
					return e
				}, e
			}
			var nt = Object(l.keyframes)(et()),
				tt = l.default.svg(Zn(), nt, (function(e) {
					return e.size
				}), (function(e) {
					return e.size
				}), (function(e) {
					var n = e.stroke,
						t = e.theme;
					return null !== n && void 0 !== n ? n : t.colors.primary
				}));

			function rt(e) {
				var n = e.size,
					t = void 0 === n ? "16px" : n,
					i = e.stroke,
					a = Object(gn.a)(e, ["size", "stroke"]);
				return Object(r.jsx)(tt, Object(X.a)(Object(X.a)({
					viewBox: "0 0 24 24",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					size: t,
					stroke: i
				}, a), {}, {
					children: Object(r.jsx)("path", {
						d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
						strokeWidth: "2.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})
				}))
			}

			function it() {
				var e = Object(u.a)(["\n  color: ", ";\n"]);
				return it = function() {
					return e
				}, e
			}

			function at() {
				var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]);
				return at = function() {
					return e
				}, e
			}
			var ct = l.default.div(at()),
				ot = l.default.h2(it(), (function(e) {
					return e.theme.colors.primaryDark
				}));

			function st(e) {
				var n = e.children,
					t = Object($n.b)().t,
					a = Object(g.c)().active,
					c = Object(g.c)(de),
					o = c.active,
					u = c.error,
					l = c.activate,
					d = function() {
						var e = Object(g.c)(),
							n = e.activate,
							t = e.active,
							r = Object(i.useState)(!1),
							a = Object(v.a)(r, 2),
							c = a[0],
							o = a[1];
						return Object(i.useEffect)((function() {
							H.isAuthorized().then((function(e) {
								var t = window.localStorage.getItem(s.z);
								e && t || C.isMobile && window.ethereum && t ? n(H, void 0, !0).catch((function() {
									o(!0)
								})) : o(!0)
							}))
						}), [n]), Object(i.useEffect)((function() {
							t && o(!0)
						}), [t]), c
					}();
				Object(i.useEffect)((function() {
						!d || o || u || a || l(V)
					}), [d, o, u, l, a]),
					function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							n = Object(g.c)(),
							t = n.active,
							r = n.error,
							a = n.activate;
						Object(i.useEffect)((function() {
							var n = window.ethereum;
							if (n && n.on && !t && !r && !e) {
								var i = function() {
										a(H, void 0, !0).catch((function(e) {
											console.error("Failed to activate after chain changed", e)
										}))
									},
									c = function(e) {
										e.length > 0 && a(H, void 0, !0).catch((function(e) {
											console.error("Failed to activate after accounts changed", e)
										}))
									};
								return n.on("chainChanged", i), n.on("accountsChanged", c),
									function() {
										n.removeListener && (n.removeListener("chainChanged", i), n.removeListener("accountsChanged", c))
									}
							}
						}), [t, r, e, a])
					}(!d);
				var b = Object(i.useState)(!1),
					p = Object(v.a)(b, 2),
					f = p[0],
					j = p[1];
				return Object(i.useEffect)((function() {
					var e = setTimeout((function() {
						j(!0)
					}), 600);
					return function() {
						clearTimeout(e)
					}
				}), []), d ? !a && u ? Object(r.jsx)(ct, {
					children: Object(r.jsx)(ot, {
						children: t("unknownError")
					})
				}) : a || o ? n : f ? Object(r.jsx)(ct, {
					children: Object(r.jsx)(rt, {})
				}) : null : null
			}

			function ut() {
				var e = Object(u.a)(["\n  background-color: ", ";\n"]);
				return ut = function() {
					return e
				}, e
			}

			function lt() {
				var e = Object(u.a)(["\n  border: 1px solid ", ";\n  background-color: ", ";\n"]);
				return lt = function() {
					return e
				}, e
			}

			function dt() {
				var e = Object(u.a)(["\n  width: 100%;\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ", ";\n  border: ", ";\n  border-radius: ", ";\n"]);
				return dt = function() {
					return e
				}, e
			}
			var bt = l.default.div(dt(), (function(e) {
					return e.padding
				}), (function(e) {
					return e.border
				}), (function(e) {
					return e.borderRadius
				})),
				pt = bt,
				ft = Object(l.default)(bt)(lt(), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					return e.theme.colors.invertedContrast
				})),
				jt = Object(l.default)(bt)(ut(), (function(e) {
					return e.theme.colors.tertiary
				})),
				ht = t(177),
				vt = (t(399), t(53));

			function mt() {
				var e = Object(u.a)(["\n        min-height: ", "vh;\n      "]);
				return mt = function() {
					return e
				}, e
			}

			function yt() {
				var e = Object(u.a)(["\n        max-height: ", "vh;\n      "]);
				return yt = function() {
					return e
				}, e
			}

			function Ot() {
				var e = Object(u.a)(["\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    border: 1px solid ", ";\n    background-color: ", ";\n    box-shadow: 0 4px 8px 0 ", ";\n    padding: 0px;\n    width: 80%;\n    overflow: hidden;\n\n    align-self: ", ";\n\n    max-width: 420px;\n    ", "\n    ", "\n    display: flex;\n    border-radius: 20px;\n\n    ", " {\n      width: 65vw;\n    }\n    ", " {\n      width: 85vw;\n    }\n  }\n"]);
				return Ot = function() {
					return e
				}, e
			}

			function xt() {
				var e = Object(u.a)(["\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n"]);
				return xt = function() {
					return e
				}, e
			}
			var gt = Object(De.a)(ht.b),
				Ct = Object(l.default)(gt)(xt()),
				wt = Object(De.a)(ht.a),
				kt = Object(l.default)((function(e) {
					e.minHeight, e.maxHeight, e.mobile, e.isOpen;
					var n = Object(gn.a)(e, ["minHeight", "maxHeight", "mobile", "isOpen"]);
					return Object(r.jsx)(wt, Object(X.a)({}, n))
				})).attrs({
					"aria-label": "dialog"
				})(Ot(), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					return e.theme.colors.invertedContrast
				}), Object(vt.b)(.95, "#191326"), (function(e) {
					return e.mobile ? "flex-end" : "center"
				}), (function(e) {
					var n = e.maxHeight;
					return n && Object(l.css)(yt(), n)
				}), (function(e) {
					var n = e.minHeight;
					return n && Object(l.css)(mt(), n)
				}), (function(e) {
					return e.theme.mediaQueries.lg
				}), (function(e) {
					return e.theme.mediaQueries.sm
				}));

			function Tt(e) {
				var n = e.isOpen,
					t = e.onDismiss,
					i = e.minHeight,
					a = void 0 !== i && i,
					c = e.maxHeight,
					o = void 0 === c ? 50 : c,
					s = e.initialFocusRef,
					u = e.children,
					l = Object(De.c)(n, null, {
						config: {
							duration: 200
						},
						from: {
							opacity: 0
						},
						enter: {
							opacity: 1
						},
						leave: {
							opacity: 0
						}
					});
				return Object(r.jsx)(r.Fragment, {
					children: l.map((function(e) {
						var n = e.item,
							i = e.key,
							c = e.props;
						return n && Object(r.jsx)(Ct, {
							style: c,
							onDismiss: t,
							initialFocusRef: s,
							children: Object(r.jsxs)(kt, {
								"aria-label": "dialog content",
								minHeight: a,
								maxHeight: o,
								mobile: C.isMobile,
								children: [!s && C.isMobile ? Object(r.jsx)("div", {
									tabIndex: 1
								}) : null, u]
							})
						}, i)
					}))
				})
			}

			function It() {
				var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n\n  & > ", " {\n    flex: 1;\n  }\n"]);
				return It = function() {
					return e
				}, e
			}

			function Et() {
				var e = Object(u.a)(["\n  background-color: ", ";\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n"]);
				return Et = function() {
					return e
				}, e
			}

			function Nt() {
				var e = Object(u.a)(["\n  padding: 40px 0;\n"]);
				return Nt = function() {
					return e
				}, e
			}

			function Rt() {
				var e = Object(u.a)(["\n  padding: 24px;\n"]);
				return Rt = function() {
					return e
				}, e
			}

			function St() {
				var e = Object(u.a)(["\n  width: 100%;\n  overflow-y: auto;\n"]);
				return St = function() {
					return e
				}, e
			}
			var Ut = l.default.div(St()),
				At = Object(l.default)(Be)(Rt()),
				Pt = Object(l.default)(Me)(Nt()),
				Mt = Object(l.default)(At)(Et(), (function(e) {
					return e.theme.colors.invertedContrast
				})),
				Bt = l.default.div(It(), s.o),
				Lt = function(e) {
					var n = e.children,
						t = e.onDismiss;
					return Object(r.jsxs)(Bt, {
						children: [Object(r.jsx)(s.o, {
							children: n
						}), Object(r.jsx)(s.p, {
							onClick: t,
							variant: "text",
							children: Object(r.jsx)(s.j, {
								color: "primary"
							})
						})]
					})
				};

			function _t() {
				var e = Object(u.a)(["\n  height: ", ";\n  width: ", ";\n"]);
				return _t = function() {
					return e
				}, e
			}
			var Dt = Object(l.default)(An)(_t(), (function(e) {
					return e.size
				}), (function(e) {
					return e.size
				})),
				Yt = function(e) {
					var n = e.onDismiss,
						t = e.pendingText;
					return Object(r.jsx)(Ut, {
						children: Object(r.jsxs)(At, {
							children: [Object(r.jsx)(Lt, {
								onDismiss: n,
								children: "Waiting for confirmation"
							}), Object(r.jsx)(Pt, {
								children: Object(r.jsx)(Dt, {
									src: "/images/blue-loader.svg",
									alt: "loader",
									size: "90px"
								})
							}), Object(r.jsxs)(Be, {
								gap: "12px",
								justify: "center",
								children: [Object(r.jsx)(Be, {
									gap: "12px",
									justify: "center",
									children: Object(r.jsx)(s.y, {
										fontSize: "14px",
										children: Object(r.jsx)("strong", {
											children: t
										})
									})
								}), Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: "Confirm this transaction in your wallet"
								})]
							})]
						})
					})
				},
				zt = t(494),
				Ft = function(e) {
					var n = e.onDismiss,
						t = e.chainId,
						a = e.hash,
						c = Object(i.useContext)(l.ThemeContext);
					return Object(r.jsx)(Ut, {
						children: Object(r.jsxs)(At, {
							children: [Object(r.jsx)(Lt, {
								onDismiss: n,
								children: "Transaction submitted"
							}), Object(r.jsx)(Pt, {
								children: Object(r.jsx)(zt.a, {
									strokeWidth: .5,
									size: 97,
									color: c.colors.primary
								})
							}), Object(r.jsxs)(Be, {
								gap: "8px",
								justify: "center",
								children: [t && a && Object(r.jsx)(s.r, {
									href: hn(t, a, "transaction"),
									children: "View on BscScan"
								}), Object(r.jsx)(s.c, {
									onClick: n,
									mt: "20px",
									children: "Close"
								})]
							})]
						})
					})
				},
				qt = function(e) {
					var n = e.isOpen,
						t = e.onDismiss,
						i = e.attemptingTxn,
						a = e.hash,
						c = e.pendingText,
						o = e.content,
						s = ge().chainId;
					return s ? Object(r.jsx)(Tt, {
						isOpen: n,
						onDismiss: t,
						maxHeight: 90,
						children: i ? Object(r.jsx)(Yt, {
							onDismiss: t,
							pendingText: c
						}) : a ? Object(r.jsx)(Ft, {
							chainId: s,
							hash: a,
							onDismiss: t
						}) : o()
					}) : null
				},
				Vt = function(e) {
					var n = e.title,
						t = e.bottomContent,
						i = e.onDismiss,
						a = e.topContent;
					return Object(r.jsxs)(Ut, {
						children: [Object(r.jsxs)(At, {
							children: [Object(r.jsx)(Lt, {
								onDismiss: i,
								children: n
							}), a()]
						}), Object(r.jsx)(Mt, {
							gap: "12px",
							children: t()
						})]
					})
				},
				Wt = t(495),
				Ht = function(e) {
					var n = e.message,
						t = e.onDismiss,
						a = Object(i.useContext)(l.ThemeContext);
					return Object(r.jsxs)(Ut, {
						children: [Object(r.jsxs)(At, {
							children: [Object(r.jsx)(Lt, {
								onDismiss: t,
								children: "Error"
							}), Object(r.jsxs)(Be, {
								style: {
									marginTop: 20,
									padding: "2rem 0"
								},
								gap: "24px",
								justify: "center",
								children: [Object(r.jsx)(Wt.a, {
									color: a.colors.failure,
									style: {
										strokeWidth: 1.5
									},
									size: 64
								}), Object(r.jsx)(s.y, {
									fontSize: "16px",
									color: "failure",
									style: {
										textAlign: "center",
										width: "85%"
									},
									children: n
								})]
							})]
						}), Object(r.jsx)(Mt, {
							gap: "12px",
							children: Object(r.jsx)(s.c, {
								onClick: t,
								children: "Dismiss"
							})
						})]
					})
				},
				Qt = qt,
				Kt = {
					translations: [],
					setTranslations: function() {}
				},
				Gt = Object(i.createContext)(Kt),
				Jt = /%(.*?)%/,
				Xt = function(e, n, t) {
					var r = e.find((function(e) {
						return e.data.stringId === n
					}));
					if (r) {
						var i = r.data.text;
						return i.includes("%") ? function(e, n) {
							var t = Jt.exec(e)[0],
								r = e.split(" ").indexOf(t),
								i = n.split(" ")[r];
							return e.replace(t, i)
						}(i, t) : i
					}
					return t
				},
				$t = function(e, n) {
					var t = Object(i.useContext)(Gt).translations;
					return "error" === t[0] ? n : t.length > 0 ? Xt(t, e, n) : null
				},
				Zt = function() {
					var e = Object(i.useContext)(Gt).translations;
					return Object(i.useCallback)((function(n, t) {
						return "error" === e[0] ? t : e.length > 0 ? Xt(e, n, t) : t
					}), [e])
				};

			function er() {
				var e = Object(u.a)(["\n  margin-bottom: 40px;\n"]);
				return er = function() {
					return e
				}, e
			}
			var nr = l.default.div(er());
			var tr, rr = function(e) {
					var n = e.activeIndex,
						t = void 0 === n ? 0 : n,
						i = Zt();
					return Object(r.jsx)(nr, {
						children: Object(r.jsxs)(s.d, {
							activeIndex: t,
							scale: "sm",
							variant: "primary",
							children: [Object(r.jsx)(s.e, {
								id: "swap-nav-link",
								to: "/swap",
								as: m.b,
								style: {
									borderRadius: "5px"
								},
								children: i(1142, "Swap")
							}), Object(r.jsx)(s.e, {
								id: "pool-nav-link",
								to: "/pool",
								as: m.b,
								style: {
									borderRadius: "5px"
								},
								children: i(262, "Liquidity")
							})]
						})
					})
				},
				ir = t(116),
				ar = t(120),
				cr = t(231),
				or = new ir.b(ar),
				sr = t(157),
				ur = function(e) {
					Object(A.a)(t, e);
					var n = Object(P.a)(t);

					function t(e, r) {
						var i;
						return Object(U.a)(this, t), (i = n.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0, i.tags = void 0, i.tokenInfo = e, i.tags = r, i
					}
					return Object(R.a)(t, [{
						key: "logoURI",
						get: function() {
							return this.tokenInfo.logoURI
						}
					}]), t
				}($.j),
				lr = (tr = {}, Object(w.a)(tr, $.a.MAINNET, {}), Object(w.a)(tr, $.a.BSCTESTNET, {}), tr),
				dr = "undefined" !== typeof WeakMap ? new WeakMap : null;

			function br(e) {
				var n = Object(x.d)((function(e) {
					return e.lists.byUrl
				}));
				return Object(i.useMemo)((function() {
					var t;
					if (!e) return lr;
					var r = null === (t = n[e]) || void 0 === t ? void 0 : t.current;
					if (!r) return lr;
					try {
						return function(e) {
							var n = null === dr || void 0 === dr ? void 0 : dr.get(e);
							if (n) return n;
							var t = e.tokens.reduce((function(n, t) {
								var r, i, a, c = null !== (r = null === (i = t.tags) || void 0 === i || null === (a = i.map((function(n) {
										var t;
										if (null === (t = e.tags) || void 0 === t ? void 0 : t[n]) return Object(X.a)(Object(X.a)({}, e.tags[n]), {}, {
											id: n
										})
									}))) || void 0 === a ? void 0 : a.filter((function(e) {
										return Boolean(e)
									}))) && void 0 !== r ? r : [],
									o = new ur(t, c);
								if (void 0 !== n[o.chainId][o.address]) throw Error("Duplicate tokens.");
								return Object(X.a)(Object(X.a)({}, n), {}, Object(w.a)({}, o.chainId, Object(X.a)(Object(X.a)({}, n[o.chainId]), {}, Object(w.a)({}, o.address, o))))
							}), Object(X.a)({}, lr));
							return null === dr || void 0 === dr || dr.set(e, t), t
						}(r)
					} catch (i) {
						return console.error("Could not show token list due to error", i), lr
					}
				}), [n, e])
			}

			function pr() {
				return Object(x.d)((function(e) {
					return e.lists.selectedListUrl
				}))
			}

			function fr() {
				return br(pr())
			}
			var jr = /^0x[a-fA-F0-9]{40}$/,
				hr = /^0x[a-f0-9]*$/;

			function vr(e) {
				if (!jr.test(e.address)) throw new Error("Invalid address: ".concat(e.address));
				if (!hr.test(e.callData)) throw new Error("Invalid hex: ".concat(e.callData));
				return "".concat(e.address, "-").concat(e.callData)
			}

			function mr(e) {
				var n = e.split("-");
				if (2 !== n.length) throw new Error("Invalid call key: ".concat(e));
				return {
					address: n[0],
					callData: n[1]
				}
			}
			var yr = Object(Ce.b)("multicall/addMulticallListeners"),
				Or = Object(Ce.b)("multicall/removeMulticallListeners"),
				xr = Object(Ce.b)("multicall/fetchingMulticallResults"),
				gr = Object(Ce.b)("multicall/errorFetchingMulticallResults"),
				Cr = Object(Ce.b)("multicall/updateMulticallResults");

			function wr(e) {
				return -1 !== ["string", "number"].indexOf(typeof e)
			}

			function kr(e) {
				return void 0 === e || Array.isArray(e) && e.every((function(e) {
					return wr(e) || Array.isArray(e) && e.every(wr)
				}))
			}
			var Tr = {
					valid: !1,
					blockNumber: void 0,
					data: void 0
				},
				Ir = {
					blocksPerFetch: 1 / 0
				};

			function Er(e, n) {
				var t = ge().chainId,
					r = Object(x.d)((function(e) {
						return e.multicall.callResults
					})),
					a = Object(x.c)(),
					c = Object(i.useMemo)((function() {
						var n, t, r;
						return JSON.stringify(null !== (n = null === e || void 0 === e || null === (t = e.filter((function(e) {
							return Boolean(e)
						}))) || void 0 === t || null === (r = t.map(vr)) || void 0 === r ? void 0 : r.sort()) && void 0 !== n ? n : [])
					}), [e]);
				return Object(i.useEffect)((function() {
					var e = JSON.parse(c);
					if (t && 0 !== e.length) {
						var r = e.map((function(e) {
							return mr(e)
						}));
						return a(yr({
								chainId: t,
								calls: r,
								options: n
							})),
							function() {
								a(Or({
									chainId: t,
									calls: r,
									options: n
								}))
							}
					}
				}), [t, a, n, c]), Object(i.useMemo)((function() {
					return e.map((function(e) {
						var n;
						if (!t || !e) return Tr;
						var i = null === (n = r[t]) || void 0 === n ? void 0 : n[vr(e)];
						return {
							valid: !0,
							data: (null === i || void 0 === i ? void 0 : i.data) && "0x" !== (null === i || void 0 === i ? void 0 : i.data) ? i.data : null,
							blockNumber: null === i || void 0 === i ? void 0 : i.blockNumber
						}
					}))
				}), [r, e, t])
			}
			var Nr = {
					valid: !1,
					result: void 0,
					loading: !1,
					syncing: !1,
					error: !1
				},
				Rr = {
					valid: !0,
					result: void 0,
					loading: !0,
					syncing: !0,
					error: !1
				};

			function Sr(e, n, t, r) {
				if (!e) return Nr;
				var i = e.valid,
					a = e.data,
					c = e.blockNumber;
				if (!i) return Nr;
				if (i && !c) return Rr;
				if (!n || !t || !r) return Rr;
				var o, s = a && a.length > 2,
					u = (null !== c && void 0 !== c ? c : 0) < r;
				if (s && a) try {
					o = n.decodeFunctionResult(t, a)
				} catch (l) {
					return console.error("Result data parsing failed", t, a), {
						valid: !0,
						loading: !1,
						error: !0,
						syncing: u,
						result: o
					}
				}
				return {
					valid: !0,
					loading: !1,
					syncing: u,
					result: o,
					error: !s
				}
			}

			function Ur(e, n, t, r, a) {
				var c = Object(i.useMemo)((function() {
						return n.getFunction(t)
					}), [n, t]),
					o = Object(i.useMemo)((function() {
						return c && kr(r) ? n.encodeFunctionData(c, r) : void 0
					}), [r, n, c]),
					s = Er(Object(i.useMemo)((function() {
						return c && e && e.length > 0 && o ? e.map((function(e) {
							return e && o ? {
								address: e,
								callData: o
							} : void 0
						})) : []
					}), [e, o, c]), a),
					u = Ne();
				return Object(i.useMemo)((function() {
					return s.map((function(e) {
						return Sr(e, n, c, u)
					}))
				}), [c, s, n, u])
			}

			function Ar(e, n, t, r) {
				var a = Object(i.useMemo)((function() {
						var t;
						return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
					}), [e, n]),
					c = Er(Object(i.useMemo)((function() {
						return e && a && kr(t) ? [{
							address: e.address,
							callData: e.interface.encodeFunctionData(a, t)
						}] : []
					}), [e, a, t]), r)[0],
					o = Ne();
				return Object(i.useMemo)((function() {
					return Sr(c, null === e || void 0 === e ? void 0 : e.interface, a, o)
				}), [c, e, a, o])
			}
			var Pr = t(139),
				Mr = t.n(Pr),
				Br = Object(Ce.b)("user/updateMatchesDarkMode"),
				Lr = Object(Ce.b)("user/updateUserDarkMode"),
				_r = Object(Ce.b)("user/updateUserExpertMode"),
				Dr = Object(Ce.b)("user/updateUserSlippageTolerance"),
				Yr = Object(Ce.b)("user/updateUserDeadline"),
				zr = Object(Ce.b)("user/addSerializedToken"),
				Fr = Object(Ce.b)("user/removeSerializedToken"),
				qr = Object(Ce.b)("user/addSerializedPair"),
				Vr = Object(Ce.b)("user/removeSerializedPair"),
				Wr = Object(Ce.b)("user/muteAudio"),
				Hr = Object(Ce.b)("user/unmuteAudio"),
				Qr = "IS_DARK";

			function Kr(e) {
				return {
					chainId: e.chainId,
					address: e.address,
					decimals: e.decimals,
					symbol: e.symbol,
					name: e.name
				}
			}

			function Gr(e) {
				return new $.j(e.chainId, e.address, e.decimals, e.symbol, e.name)
			}

			function Jr() {
				return Object(x.d)((function(e) {
					return e.user.userExpertMode
				}))
			}

			function Xr() {
				var e = Object(x.c)();
				return [Object(x.d)((function(e) {
					return e.user.userSlippageTolerance
				})), Object(i.useCallback)((function(n) {
					e(Dr({
						userSlippageTolerance: n
					}))
				}), [e])]
			}

			function $r() {
				var e = Object(x.c)();
				return [Object(x.d)((function(e) {
					return e.user.userDeadline
				})), Object(i.useCallback)((function(n) {
					e(Yr({
						userDeadline: n
					}))
				}), [e])]
			}

			function Zr() {
				var e = ge().chainId,
					n = Object(x.d)((function(e) {
						return e.user.tokens
					}));
				return Object(i.useMemo)((function() {
					var t;
					return e ? Object.values(null !== (t = n[e]) && void 0 !== t ? t : {}).map(Gr) : []
				}), [n, e])
			}

			function ei(e) {
				return {
					token0: Kr(e.token0),
					token1: Kr(e.token1)
				}
			}

			function ni(e) {
				var n = Object(v.a)(e, 2),
					t = n[0],
					r = n[1];
				return new $.j(t.chainId, $.f.getAddress(t, r), 18, "Cake-LP", "Pancake LPs")
			}
			var ti, ri = t(147),
				ii = t(265),
				ai = t(266),
				ci = t(267),
				oi = t(232),
				si = (ti = {}, Object(w.a)(ti, $.a.MAINNET, "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb"), Object(w.a)(ti, $.a.BSCTESTNET, "0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A"), ti);

			function ui(e, n) {
				var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = ge(),
					a = r.library,
					c = r.account;
				return Object(i.useMemo)((function() {
					if (!e || !n || !a) return null;
					try {
						return On(e, n, a, t && c ? c : void 0)
					} catch (r) {
						return console.error("Failed to get contract", r), null
					}
				}), [e, n, a, t, c])
			}

			function li(e, n) {
				return ui(e, ar, n)
			}

			function di(e) {
				var n = ge().chainId;
				if (n) switch (n) {
					case $.a.MAINNET:
					case $.a.BSCTESTNET:
				}
				return ui(undefined, ii, e)
			}

			function bi(e, n) {
				return ui(e, ai, n)
			}

			function pi() {
				var e = ge().chainId;
				return ui(e && si[e], oi, !1)
			}

			function fi() {
				var e = ge().chainId,
					n = Zr(),
					t = fr();
				return Object(i.useMemo)((function() {
					return e ? n.reduce((function(e, n) {
						return e[n.address] = n, e
					}), Object(X.a)({}, t[e])) : {}
				}), [e, n, t])
			}
			var ji = /^0x[a-fA-F0-9]{64}$/;

			function hi(e, n, t) {
				return e && e.length > 0 ? e : n && ji.test(n) ? Object(sr.b)(n) : t
			}

			function vi(e) {
				var n = ge().chainId,
					t = fi(),
					r = fn(e),
					a = li(r || void 0, !1),
					c = function(e, n) {
						return ui(e, cr, n)
					}(r || void 0, !1),
					o = r ? t[r] : void 0,
					s = Ar(o ? void 0 : a, "name", void 0, Ir),
					u = Ar(o ? void 0 : c, "name", void 0, Ir),
					l = Ar(o ? void 0 : a, "symbol", void 0, Ir),
					d = Ar(o ? void 0 : c, "symbol", void 0, Ir),
					b = Ar(o ? void 0 : a, "decimals", void 0, Ir);
				return Object(i.useMemo)((function() {
					if (o) return o;
					if (n && r) {
						if (b.loading || l.loading || s.loading) return null;
						var e, t, i, a;
						if (b.result) return new $.j(n, r, b.result[0], hi(null === (e = l.result) || void 0 === e ? void 0 : e[0], null === (t = d.result) || void 0 === t ? void 0 : t[0], "UNKNOWN"), hi(null === (i = s.result) || void 0 === i ? void 0 : i[0], null === (a = u.result) || void 0 === a ? void 0 : a[0], "Unknown Token"))
					}
				}), [r, n, b.loading, b.result, l.loading, l.result, d.result, o, s.loading, s.result, u.result])
			}

			function mi(e) {
				var n = "ETH" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
					t = vi(n ? void 0 : e);
				return n ? $.d : t
			}

			function yi(e) {
				var n = pi(),
					t = Object(i.useMemo)((function() {
						return e ? e.map(fn).filter((function(e) {
							return !1 !== e
						})).sort() : []
					}), [e]),
					r = function(e, n, t, r) {
						var a = Object(i.useMemo)((function() {
								var t;
								return null === e || void 0 === e || null === (t = e.interface) || void 0 === t ? void 0 : t.getFunction(n)
							}), [e, n]),
							c = Er(Object(i.useMemo)((function() {
								return e && a && t && t.length > 0 ? t.map((function(n) {
									return {
										address: e.address,
										callData: e.interface.encodeFunctionData(a, n)
									}
								})) : []
							}), [t, e, a]), r),
							o = Ne();
						return Object(i.useMemo)((function() {
							return c.map((function(n) {
								return Sr(n, null === e || void 0 === e ? void 0 : e.interface, a, o)
							}))
						}), [a, e, c, o])
					}(n, "getEthBalance", t.map((function(e) {
						return [e]
					})));
				return Object(i.useMemo)((function() {
					return t.reduce((function(e, n, t) {
						var i, a, c = null === r || void 0 === r || null === (i = r[t]) || void 0 === i || null === (a = i.result) || void 0 === a ? void 0 : a[0];
						return c && (e[n] = $.c.ether($.e.BigInt(c.toString()))), e
					}), {})
				}), [t, r])
			}

			function Oi(e, n) {
				var t = Object(i.useMemo)((function() {
						var e;
						return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
							return !1 !== fn(null === e || void 0 === e ? void 0 : e.address)
						}))) && void 0 !== e ? e : []
					}), [n]),
					r = Ur(Object(i.useMemo)((function() {
						return t.map((function(e) {
							return e.address
						}))
					}), [t]), or, "balanceOf", [e]),
					a = Object(i.useMemo)((function() {
						return r.some((function(e) {
							return e.loading
						}))
					}), [r]);
				return [Object(i.useMemo)((function() {
					return e && t.length > 0 ? t.reduce((function(e, n, t) {
						var i, a, c = null === r || void 0 === r || null === (i = r[t]) || void 0 === i || null === (a = i.result) || void 0 === a ? void 0 : a[0],
							o = c ? $.e.BigInt(c.toString()) : void 0;
						return o && (e[n.address] = new $.k(n, o)), e
					}), {}) : {}
				}), [e, t, r]), a]
			}

			function xi(e, n) {
				return Oi(e, n)[0]
			}

			function gi(e, n) {
				var t = xi(e, [n]);
				if (n) return t[n.address]
			}

			function Ci(e, n) {
				var t = Object(i.useMemo)((function() {
						var e;
						return null !== (e = null === n || void 0 === n ? void 0 : n.filter((function(e) {
							return e instanceof $.j
						}))) && void 0 !== e ? e : []
					}), [n]),
					r = xi(e, t),
					a = yi(Object(i.useMemo)((function() {
						var e;
						return null !== (e = null === n || void 0 === n ? void 0 : n.some((function(e) {
							return e === $.d
						}))) && void 0 !== e && e
					}), [n]) ? [e] : []);
				return Object(i.useMemo)((function() {
					var t;
					return null !== (t = null === n || void 0 === n ? void 0 : n.map((function(n) {
						if (e && n) return n instanceof $.j ? r[n.address] : n === $.d ? a[e] : void 0
					}))) && void 0 !== t ? t : []
				}), [e, n, a, r])
			}

			function wi(e, n) {
				return Ci(e, [n])[0]
			}

			function ki(e, n) {
				var t = Object(i.useState)(n && n(e) ? e : void 0),
					r = Object(v.a)(t, 2),
					a = r[0],
					c = r[1];
				return Object(i.useEffect)((function() {
					c((function(t) {
						return !n || n(e) ? e : t
					}))
				}), [n, e]), a
			}

			function Ti(e) {
				return null !== e && void 0 !== e
			}
			var Ii = t(268),
				Ei = t(175),
				Ni = t.n(Ei),
				Ri = t(125),
				Si = t(109);
			var Ui = new TextDecoder;

			function Ai(e) {
				var n = function(e) {
						if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
						for (var n = new Uint8Array(e.length / 2), t = 0; t < n.length; t++) n[t] = parseInt(e.substr(2 * t, 2), 16);
						return n
					}(e),
					t = Object(Ri.getCodec)(n);
				switch (t) {
					case "ipfs-ns":
						var r = Object(Ri.rmPrefix)(n),
							i = new Ni.a(r);
						return "ipfs://".concat(Object(Si.toB58String)(i.multihash));
					case "ipns-ns":
						var a = Object(Ri.rmPrefix)(n),
							c = new Ni.a(a),
							o = Object(Si.decode)(c.multihash);
						return "identity" === o.name ? "ipns://".concat(Ui.decode(o.digest).trim()) : "ipns://".concat(Object(Si.toB58String)(c.multihash));
					default:
						throw new Error("Unrecognized codec: ".concat(t))
				}
			}
			var Pi = /^(([a-zA-Z0-9]+\.)+)eth(\/.*)?$/;

			function Mi(e) {
				var n = e.match(Pi);
				if (n) return {
					ensName: "".concat(n[1].toLowerCase(), "eth"),
					ensPath: n[3]
				}
			}

			function Bi(e) {
				var n, t;
				switch (e.split(":")[0].toLowerCase()) {
					case "https":
						return [e];
					case "http":
						return ["https".concat(e.substr(4)), e];
					case "ipfs":
						var r = null === (n = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
						return ["https://cloudflare-ipfs.com/ipfs/".concat(r, "/"), "https://ipfs.io/ipfs/".concat(r, "/")];
					case "ipns":
						var i = null === (t = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
						return ["https://cloudflare-ipfs.com/ipns/".concat(i, "/"), "https://ipfs.io/ipns/".concat(i, "/")];
					default:
						return []
				}
			}
			var Li = t(90);

			function _i(e) {
				return /^0x0*$/.test(e)
			}

			function Di(e) {
				var n = Object(i.useMemo)((function() {
						return e ? Mi(e) : void 0
					}), [e]),
					t = function(e) {
						var n, t, r, a = Object(i.useMemo)((function() {
								if (!e) return [void 0];
								try {
									return e ? [Object(Li.namehash)(e)] : [void 0]
								} catch (n) {
									return [void 0]
								}
							}), [e]),
							c = Ar(di(!1), "resolver", a),
							o = null === (n = c.result) || void 0 === n ? void 0 : n[0],
							s = Ar(bi(o && _i(o) ? void 0 : o, !1), "contenthash", a);
						return {
							contenthash: null !== (t = null === (r = s.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
							loading: c.loading || s.loading
						}
					}(null === n || void 0 === n ? void 0 : n.ensName);
				return Object(i.useMemo)((function() {
					return n ? t.contenthash ? Bi(Ai(t.contenthash)) : [] : e ? Bi(e) : []
				}), [n, t.contenthash, e])
			}
			var Yi = t(496),
				zi = {};

			function Fi(e) {
				var n = e.srcs,
					t = e.alt,
					a = Object(gn.a)(e, ["srcs", "alt"]),
					c = Object(i.useState)(0),
					o = Object(v.a)(c, 2)[1],
					s = n.find((function(e) {
						return !zi[e]
					}));
				return s ? Object(r.jsx)("img", Object(X.a)(Object(X.a)({}, a), {}, {
					alt: t,
					src: s,
					onError: function() {
						s && (zi[s] = !0), o((function(e) {
							return e + 1
						}))
					}
				})) : Object(r.jsx)(Yi.a, Object(X.a)({}, a))
			}

			function qi() {
				var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
				return qi = function() {
					return e
				}, e
			}
			var Vi = Object(l.default)(Fi)(qi(), (function(e) {
				return e.size
			}), (function(e) {
				return e.size
			}));

			function Wi(e) {
				var n = e.logoURI,
					t = e.style,
					i = e.size,
					a = void 0 === i ? "24px" : i,
					c = e.alt,
					o = Di(n);
				return Object(r.jsx)(Vi, {
					alt: c,
					size: a,
					srcs: o,
					style: t
				})
			}
			var Hi = t(504),
				Qi = t(146);

			function Ki(e, n) {
				var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
					r = Object(i.useRef)();
				Object(i.useEffect)((function() {
					r.current = e
				}), [e]), Object(i.useEffect)((function() {
					function e() {
						var e = r.current;
						e && e()
					}
					if (null !== n) {
						t && e();
						var i = setInterval(e, n);
						return function() {
							return clearInterval(i)
						}
					}
				}), [n, t])
			}

			function Gi() {
				var e = Object(u.a)(["\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ", ";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n"]);
				return Gi = function() {
					return e
				}, e
			}

			function Ji() {
				var e = Object(u.a)(["\n  display: inline-block;\n"]);
				return Ji = function() {
					return e
				}, e
			}

			function Xi() {
				var e = Object(u.a)(["\n  z-index: 9999;\n\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 4px 8px 0 ", ";\n  color: ", ";\n  border-radius: 8px;\n"]);
				return Xi = function() {
					return e
				}, e
			}
			var $i = l.default.div(Xi(), (function(e) {
					return e.show ? "visible" : "hidden"
				}), (function(e) {
					return e.show ? 1 : 0
				}), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					return e.theme.colors.tertiary
				}), Object(vt.b)(.9, "#2F80ED"), (function(e) {
					return e.theme.colors.textSubtle
				})),
				Zi = l.default.div(Ji()),
				ea = l.default.div(Gi(), (function(e) {
					return e.theme.colors.tertiary
				}), (function(e) {
					return e.theme.colors.invertedContrast
				}));

			function na(e) {
				var n, t, a = e.content,
					c = e.show,
					o = e.children,
					s = e.placement,
					u = void 0 === s ? "auto" : s,
					l = Object(i.useState)(null),
					d = Object(v.a)(l, 2),
					b = d[0],
					p = d[1],
					f = Object(i.useState)(null),
					j = Object(v.a)(f, 2),
					h = j[0],
					m = j[1],
					y = Object(i.useState)(null),
					O = Object(v.a)(y, 2),
					x = O[0],
					g = O[1],
					C = Object(Hi.a)(b, h, {
						placement: u,
						strategy: "fixed",
						modifiers: [{
							name: "offset",
							options: {
								offset: [8, 8]
							}
						}, {
							name: "arrow",
							options: {
								element: x
							}
						}]
					}),
					w = C.styles,
					k = C.update,
					T = C.attributes;
				return Ki(Object(i.useCallback)((function() {
					k && k()
				}), [k]), c ? 100 : null), Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsx)(Zi, {
						ref: p,
						children: o
					}), Object(r.jsx)(Qi.a, {
						children: Object(r.jsxs)($i, Object(X.a)(Object(X.a)({
							show: c,
							ref: m,
							style: w.popper
						}, T.popper), {}, {
							children: [a, Object(r.jsx)(ea, Object(X.a)({
								className: "arrow-".concat(null !== (n = null === (t = T.popper) || void 0 === t ? void 0 : t["data-popper-placement"]) && void 0 !== n ? n : ""),
								ref: g,
								style: w.arrow
							}, T.arrow))]
						}))
					})]
				})
			}

			function ta() {
				var e = Object(u.a)(["\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n"]);
				return ta = function() {
					return e
				}, e
			}
			var ra = l.default.div(ta());

			function ia(e) {
				var n = e.text,
					t = Object(gn.a)(e, ["text"]);
				return Object(r.jsx)(na, Object(X.a)({
					content: Object(r.jsx)(ra, {
						children: n
					})
				}, t))
			}

			function aa(e) {
				var n = e.children,
					t = Object(gn.a)(e, ["children"]),
					a = Object(i.useState)(!1),
					c = Object(v.a)(a, 2),
					o = c[0],
					s = c[1],
					u = Object(i.useCallback)((function() {
						return s(!0)
					}), [s]),
					l = Object(i.useCallback)((function() {
						return s(!1)
					}), [s]);
				return Object(r.jsx)(ia, Object(X.a)(Object(X.a)({}, t), {}, {
					show: o,
					children: Object(r.jsx)("div", {
						onMouseEnter: u,
						onMouseLeave: l,
						children: n
					})
				}))
			}

			function ca() {
				var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ", ";\n  color: ", ";\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]);
				return ca = function() {
					return e
				}, e
			}
			var oa = l.default.div(ca(), (function(e) {
				return e.theme.colors.invertedContrast
			}), (function(e) {
				return e.theme.colors.textSubtle
			}));

			function sa(e) {
				var n = e.text,
					t = Object(i.useState)(!1),
					a = Object(v.a)(t, 2),
					c = a[0],
					o = a[1],
					s = Object(i.useCallback)((function() {
						return o(!0)
					}), [o]),
					u = Object(i.useCallback)((function() {
						return o(!1)
					}), [o]);
				return Object(r.jsx)("span", {
					style: {
						marginLeft: 4
					},
					children: Object(r.jsx)(ia, {
						text: n,
						show: c,
						children: Object(r.jsx)(oa, {
							onClick: s,
							onMouseEnter: s,
							onMouseLeave: u,
							children: Object(r.jsx)(Yi.a, {
								size: 16
							})
						})
					})
				})
			}

			function ua() {
				var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
				return ua = function() {
					return e
				}, e
			}
			var la = Object(l.default)(Fi)(ua(), (function(e) {
				return e.size
			}), (function(e) {
				return e.size
			}));

			function da() {
				var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n"]);
				return da = function() {
					return e
				}, e
			}

			function ba() {
				var e = Object(u.a)(["\n  width: ", ";\n  height: ", ";\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n"]);
				return ba = function() {
					return e
				}, e
			}
			var pa = function(e) {
					return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(e, "/logo.png")
				},
				fa = l.default.img(ba(), (function(e) {
					return e.size
				}), (function(e) {
					return e.size
				})),
				ja = Object(l.default)(Fi)(da(), (function(e) {
					return e.size
				}), (function(e) {
					return e.size
				}));

			function ha(e) {
				var n, t, a = e.currency,
					c = e.size,
					o = void 0 === c ? "24px" : c,
					s = e.style,
					u = Di(a instanceof ur ? a.logoURI : void 0),
					l = Object(i.useMemo)((function() {
						return a === $.d ? [] : a instanceof $.j ? a instanceof ur ? [].concat(Object(J.a)(u), ["/images/coins/".concat(null !== (n = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== n ? n : "token", ".png"), pa(a.address)]) : ["/images/coins/".concat(null !== (e = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== e ? e : "token", ".png"), pa(a.address)] : [];
						var e, n
					}), [a, u]);
				return a === $.d ? Object(r.jsx)(fa, {
					src: "bnb.png",
					size: o,
					style: s
				}) : (null === a || void 0 === a ? void 0 : a.symbol) ? Object(r.jsx)(la, {
					size: o,
					srcs: l,
					alt: "".concat(null !== (n = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== n ? n : "token", " logo"),
					style: s
				}) : Object(r.jsx)(ja, {
					size: o,
					srcs: l,
					alt: "".concat(null !== (t = null === a || void 0 === a ? void 0 : a.symbol) && void 0 !== t ? t : "token", " logo"),
					style: s
				})
			}

			function va() {
				var e = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ", ";\n    background-color: ", ";\n  }\n\n  background-color: ", ";\n  opacity: ", ";\n"]);
				return va = function() {
					return e
				}, e
			}
			var ma = l.default.div(va(), (function(e) {
				var n = e.theme;
				return e.disable ? "transparent" : n.colors.tertiary
			}), (function(e) {
				return !e.disable && "pointer"
			}), (function(e) {
				var n = e.theme;
				return !e.disable && n.colors.invertedContrast
			}), (function(e) {
				var n = e.theme;
				return e.disable && n.colors.tertiary
			}), (function(e) {
				return e.disable && "0.4"
			}));

			function ya(e) {
				var n = e.chainId,
					t = e.onSelect,
					i = e.selectedCurrency,
					a = Zt();
				return Object(r.jsxs)(Be, {
					gap: "md",
					children: [Object(r.jsxs)(tn, {
						children: [Object(r.jsx)(s.y, {
							fontSize: "14px",
							children: "Common bases"
						}), Object(r.jsx)(sa, {
							text: a(1204, "These tokens are commonly paired with other tokens.")
						})]
					}), Object(r.jsxs)(tn, {
						gap: "4px",
						children: [Object(r.jsxs)(ma, {
							onClick: function() {
								i && Object($.o)(i, $.d) || t($.d)
							},
							disable: i === $.d,
							children: [Object(r.jsx)(ha, {
								currency: $.d,
								style: {
									marginRight: 8
								}
							}), Object(r.jsx)(s.y, {
								children: "BNB"
							})]
						}), (n ? se[n] : []).map((function(e) {
							var n = i instanceof $.j && i.address === e.address;
							return Object(r.jsxs)(ma, {
								onClick: function() {
									return !n && t(e)
								},
								disable: n,
								children: [Object(r.jsx)(ha, {
									currency: e,
									style: {
										marginRight: 8
									}
								}), Object(r.jsx)(s.y, {
									children: e.symbol
								})]
							}, e.address)
						}))]
					})]
				})
			}
			var Oa = t(278);

			function xa() {
				var e = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
				return xa = function() {
					return e
				}, e
			}

			function ga() {
				var e = Object(u.a)(["\n  width: 100%;\n  height: 1px;\n  background-color: ", ";\n"]);
				return ga = function() {
					return e
				}, e
			}

			function Ca() {
				var e = Object(u.a)(["\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ", ";\n  border-style: solid;\n  border: 1px solid ", ";\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ", ";\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n  }\n"]);
				return Ca = function() {
					return e
				}, e
			}

			function wa() {
				var e = Object(u.a)(["\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ", ";\n  pointer-events: ", ";\n  :hover {\n    background-color: ", ";\n  }\n  opacity: ", ";\n"]);
				return wa = function() {
					return e
				}, e
			}

			function ka() {
				var e = Object(u.a)(["\n  padding: 20px;\n  padding-bottom: 12px;\n"]);
				return ka = function() {
					return e
				}, e
			}

			function Ta() {
				var e = Object(u.a)(["\n  color: ", ";\n  font-size: 14px;\n"]);
				return Ta = function() {
					return e
				}, e
			}
			var Ia = Object(l.default)(rn)(Ta(), (function(e) {
					return e.theme.colors.primary
				})),
				Ea = Object(l.default)(Be)(ka()),
				Na = Object(l.default)(en)(wa(), (function(e) {
					return !e.disabled && "pointer"
				}), (function(e) {
					return e.disabled && "none"
				}), (function(e) {
					var n = e.theme;
					return !e.disabled && n.colors.invertedContrast
				}), (function(e) {
					var n = e.disabled,
						t = e.selected;
					return n || t ? .5 : 1
				})),
				Ra = l.default.input(Ca(), (function(e) {
					return e.theme.colors.text
				}), (function(e) {
					return e.theme.colors.tertiary
				}), (function(e) {
					return e.theme.colors.textDisabled
				}), (function(e) {
					return e.theme.colors.primary
				})),
				Sa = l.default.div(ga(), (function(e) {
					return e.theme.colors.invertedContrast
				})),
				Ua = l.default.div(xa(), (function(e) {
					return e.theme.colors.tertiary
				}));

			function Aa() {
				var e = Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);
				return Aa = function() {
					return e
				}, e
			}

			function Pa() {
				var e = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n"]);
				return Pa = function() {
					return e
				}, e
			}

			function Ma() {
				var e = Object(u.a)(["\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n"]);
				return Ma = function() {
					return e
				}, e
			}

			function Ba(e) {
				return e instanceof $.j ? e.address : e === $.d ? "ETHER" : ""
			}
			var La = Object(l.default)(s.y)(Ma()),
				_a = l.default.div(Pa(), (function(e) {
					return e.theme.colors.tertiary
				}), (function(e) {
					return e.theme.colors.textSubtle
				}));

			function Da(e) {
				var n = e.balance;
				return Object(r.jsx)(La, {
					title: n.toExact(),
					children: n.toSignificant(4)
				})
			}
			var Ya = l.default.div(Aa());

			function za(e) {
				var n = e.currency;
				if (!(n instanceof ur)) return Object(r.jsx)("span", {});
				var t = n.tags;
				if (!t || 0 === t.length) return Object(r.jsx)("span", {});
				var i = t[0];
				return Object(r.jsxs)(Ya, {
					children: [Object(r.jsx)(aa, {
						text: i.description,
						children: Object(r.jsx)(_a, {
							children: i.name
						}, i.id)
					}), t.length > 1 ? Object(r.jsx)(aa, {
						text: t.slice(1).map((function(e) {
							var n = e.name,
								t = e.description;
							return "".concat(n, ": ").concat(t)
						})).join("; \n"),
						children: Object(r.jsx)(_a, {
							children: "..."
						})
					}) : null]
				})
			}

			function Fa(e) {
				var n = e.currency,
					t = e.onSelect,
					a = e.isSelected,
					c = e.otherSelected,
					o = e.style,
					u = ge(),
					l = u.account,
					d = u.chainId,
					b = Ba(n),
					p = function(e, n) {
						var t;
						return n === $.d || Boolean(n instanceof $.j && (null === (t = e[n.chainId]) || void 0 === t ? void 0 : t[n.address]))
					}(fr(), n),
					f = function(e) {
						return !!Zr().find((function(n) {
							return Object($.o)(e, n)
						}))
					}(n),
					j = wi(null !== l && void 0 !== l ? l : void 0, n),
					h = function() {
						var e = Object(x.c)();
						return Object(i.useCallback)((function(n, t) {
							e(Fr({
								chainId: n,
								address: t
							}))
						}), [e])
					}(),
					v = function() {
						var e = Object(x.c)();
						return Object(i.useCallback)((function(n) {
							e(zr({
								serializedToken: Kr(n)
							}))
						}), [e])
					}();
				return Object(r.jsxs)(Na, {
					style: o,
					className: "token-item-".concat(b),
					onClick: function() {
						return a ? null : t()
					},
					disabled: a,
					selected: c,
					children: [Object(r.jsx)(ha, {
						currency: n,
						size: "24px"
					}), Object(r.jsxs)(Le, {
						children: [Object(r.jsx)(s.y, {
							title: n.name,
							children: n.symbol
						}), Object(r.jsxs)(Ia, {
							children: [p || !f || n instanceof ur ? null : Object(r.jsxs)(s.y, {
								children: ["Added by user", Object(r.jsx)(En, {
									onClick: function(e) {
										e.stopPropagation(), d && n instanceof $.j && h(d, n.address)
									},
									children: "(Remove)"
								})]
							}), p || f || n instanceof ur ? null : Object(r.jsxs)(s.y, {
								children: ["Found by address", Object(r.jsx)(En, {
									onClick: function(e) {
										e.stopPropagation(), n instanceof $.j && v(n)
									},
									children: "(Add)"
								})]
							})]
						})]
					}), Object(r.jsx)(za, {
						currency: n
					}), Object(r.jsx)(rn, {
						style: {
							justifySelf: "flex-end"
						},
						children: j ? Object(r.jsx)(Da, {
							balance: j
						}) : l ? Object(r.jsx)(rt, {}) : null
					})]
				})
			}

			function qa(e) {
				var n = e.height,
					t = e.currencies,
					a = e.selectedCurrency,
					c = e.onCurrencySelect,
					o = e.otherCurrency,
					s = e.fixedListRef,
					u = e.showETH,
					l = Object(i.useMemo)((function() {
						return u ? [$.b.ETHER].concat(Object(J.a)(t)) : Object(J.a)(t)
					}), [t, u]),
					d = Object(i.useCallback)((function(e) {
						var n = e.data,
							t = e.index,
							i = e.style,
							s = n[t],
							u = Boolean(a && Object($.o)(a, s)),
							l = Boolean(o && Object($.o)(o, s));
						return Object(r.jsx)(Fa, {
							style: i,
							currency: s,
							isSelected: u,
							onSelect: function() {
								return c(s)
							},
							otherSelected: l
						})
					}), [c, o, a]),
					b = Object(i.useCallback)((function(e, n) {
						return Ba(n[e])
					}), []);
				return Object(r.jsx)(Oa.a, {
					height: n,
					ref: s,
					width: "100%",
					itemData: l,
					itemCount: l.length,
					itemSize: 56,
					itemKey: b,
					children: d
				})
			}

			function Va(e, n) {
				if (0 === n.length) return e;
				var t = fn(n);
				if (t) return e.filter((function(e) {
					return e.address === t
				}));
				var r = n.toLowerCase().split(/\s+/).filter((function(e) {
					return e.length > 0
				}));
				if (0 === r.length) return e;
				var i = function(e) {
					var n = e.toLowerCase().split(/\s+/).filter((function(e) {
						return e.length > 0
					}));
					return r.every((function(e) {
						return 0 === e.length || n.some((function(n) {
							return n.startsWith(e) || n.endsWith(e)
						}))
					}))
				};
				return e.filter((function(e) {
					var n = e.symbol,
						t = e.name;
					return n && i(n) || t && i(t)
				}))
			}

			function Wa() {
				var e = Object(u.a)(["\n  padding: 8px;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 8px;\n  user-select: none;\n  & > * {\n    user-select: none;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]);
				return Wa = function() {
					return e
				}, e
			}
			var Ha = Object(l.default)(rn)(Wa(), (function(e) {
				return e.theme.colors.invertedContrast
			}), (function(e) {
				return e.theme.colors.text
			}));

			function Qa(e) {
				var n = e.toggleSortOrder,
					t = e.ascending;
				return Object(r.jsx)(Ha, {
					onClick: n,
					children: Object(r.jsx)(s.y, {
						fontSize: "14px",
						children: t ? "\u2191" : "\u2193"
					})
				})
			}

			function Ka(e) {
				var n = function() {
						var e = ge().account,
							n = fi(),
							t = xi(null !== e && void 0 !== e ? e : void 0, Object(i.useMemo)((function() {
								return Object.values(null !== n && void 0 !== n ? n : {})
							}), [n]));
						return null !== t && void 0 !== t ? t : {}
					}(),
					t = Object(i.useMemo)((function() {
						return function(e) {
							return function(n, t) {
								var r, i, a = (r = e[n.address], i = e[t.address], r && i ? r.greaterThan(i) ? -1 : r.equalTo(i) ? 0 : 1 : r && r.greaterThan("0") ? -1 : i && i.greaterThan("0") ? 1 : 0);
								return 0 !== a ? a : n.symbol && t.symbol ? n.symbol.toLowerCase() < t.symbol.toLowerCase() ? -1 : 1 : n.symbol || t.symbol ? -1 : 0
							}
						}(null !== n && void 0 !== n ? n : {})
					}), [n]);
				return Object(i.useMemo)((function() {
					return e ? function(e, n) {
						return -1 * t(e, n)
					} : t
				}), [e, t])
			}

			function Ga(e) {
				var n = e.selectedCurrency,
					t = e.onCurrencySelect,
					a = e.otherSelectedCurrency,
					c = e.showCommonBases,
					o = e.onDismiss,
					u = e.isOpen,
					d = (e.onChangeList, Object($n.b)().t),
					b = ge().chainId,
					p = (Object(i.useContext)(l.ThemeContext), Object(i.useRef)()),
					f = Object(i.useState)(""),
					j = Object(v.a)(f, 2),
					h = j[0],
					m = j[1],
					y = Object(i.useState)(!1),
					O = Object(v.a)(y, 2),
					g = O[0],
					C = O[1],
					w = fi(),
					k = fn(h),
					T = vi(h),
					I = Object(i.useMemo)((function() {
						var e = h.toLowerCase().trim();
						return "" === e || "e" === e || "et" === e || "eth" === e
					}), [h]),
					E = Ka(g),
					N = Object(x.d)((function(e) {
						return e.user.audioPlay
					})),
					R = Object(i.useMemo)((function() {
						return k ? T ? [T] : [] : Va(Object.values(w), h)
					}), [k, T, w, h]),
					S = Object(i.useMemo)((function() {
						if (T) return [T];
						var e = R.sort(E),
							n = h.toLowerCase().split(/\s+/).filter((function(e) {
								return e.length > 0
							}));
						return n.length > 1 ? e : [].concat(Object(J.a)(T ? [T] : []), Object(J.a)(e.filter((function(e) {
							var t;
							return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) === n[0]
						}))), Object(J.a)(e.filter((function(e) {
							var t;
							return (null === (t = e.symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== n[0]
						}))))
					}), [R, h, T, E]),
					U = Object(i.useCallback)((function(e) {
						if (t(e), o(), N) {
							var n = document.getElementById("bgMusic");
							n && n.play()
						}
					}), [o, t, N]);
				Object(i.useEffect)((function() {
					u && m("")
				}), [u]);
				var A = Object(i.useRef)(),
					P = Object(i.useCallback)((function(e) {
						var n, t = e.target.value,
							r = fn(t);
						m(r || t), null === (n = p.current) || void 0 === n || n.scrollTo(0)
					}), []),
					M = Object(i.useCallback)((function(e) {
						if ("Enter" === e.key)
							if ("eth" === h.toLowerCase().trim()) U($.d);
							else if (S.length > 0) {
							var n;
							(null === (n = S[0].symbol) || void 0 === n ? void 0 : n.toLowerCase()) !== h.trim().toLowerCase() && 1 !== S.length || U(S[0])
						}
					}), [S, U, h]),
					B = (function() {
						var e, n, t = pr(),
							r = Object(x.d)((function(e) {
								return e.lists.byUrl
							})),
							i = t ? r[t] : void 0;
						e = null === i || void 0 === i ? void 0 : i.current, n = null === i || void 0 === i ? void 0 : i.pendingUpdate, null === i || void 0 === i || i.loadingRequestId
					}(), Zt());
				return Object(r.jsxs)(Le, {
					style: {
						width: "100%",
						flex: "1 1"
					},
					children: [Object(r.jsxs)(Ea, {
						gap: "14px",
						children: [Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(s.y, {
								children: [B(82, "Select a token"), Object(r.jsx)(sa, {
									text: B(128, "Find a token by searching for its name or symbol or by pasting its address below.")
								})]
							}), Object(r.jsx)(s.j, {
								onClick: o
							})]
						}), Object(r.jsx)(Ra, {
							type: "text",
							id: "token-search-input",
							placeholder: d("tokenSearchPlaceholder"),
							value: h,
							ref: A,
							onChange: P,
							onKeyDown: M
						}), c && Object(r.jsx)(ya, {
							chainId: b,
							onSelect: U,
							selectedCurrency: n
						}), Object(r.jsxs)(en, {
							children: [Object(r.jsx)(s.y, {
								fontSize: "14px",
								children: B(126, "Token name")
							}), Object(r.jsx)(Qa, {
								ascending: g,
								toggleSortOrder: function() {
									return C((function(e) {
										return !e
									}))
								}
							})]
						})]
					}), Object(r.jsx)(Sa, {}), Object(r.jsx)("div", {
						style: {
							flex: "1"
						},
						children: Object(r.jsx)(Ii.a, {
							disableWidth: !0,
							children: function(e) {
								var t = e.height;
								return Object(r.jsx)(qa, {
									height: t,
									showETH: I,
									currencies: S,
									onCurrencySelect: U,
									otherCurrency: a,
									selectedCurrency: n,
									fixedListRef: p
								})
							}
						})
					}), null]
				})
			}
			var Ja = t(497),
				Xa = t(271),
				$a = t(272),
				Za = t.n($a),
				ec = "pancakeswap",
				nc = [ec],
				tc = t(149),
				rc = new Za.a({
					allErrors: !0
				}).compile(Xa);

			function ic(e, n) {
				return ac.apply(this, arguments)
			}

			function ac() {
				return (ac = Object(h.a)(j.a.mark((function e(n, t) {
					var r, i, a, c, o, s, u, l, d, b, p, f, h;
					return j.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								if (n !== ec) {
									e.next = 2;
									break
								}
								return e.abrupt("return", tc);
							case 2:
								if (!(r = Mi(n))) {
									e.next = 25;
									break
								}
								return e.prev = 4, e.next = 7, t(r.ensName);
							case 7:
								c = e.sent, e.next = 14;
								break;
							case 10:
								throw e.prev = 10, e.t0 = e.catch(4), console.error("Failed to resolve ENS name: ".concat(r.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(r.ensName));
							case 14:
								e.prev = 14, o = Ai(c), e.next = 22;
								break;
							case 18:
								throw e.prev = 18, e.t1 = e.catch(14), console.error("Failed to translate contenthash to URI", c), new Error("Failed to translate contenthash to URI: ".concat(c));
							case 22:
								i = Bi("".concat(o).concat(null !== (a = r.ensPath) && void 0 !== a ? a : "")), e.next = 26;
								break;
							case 25:
								i = Bi(n);
							case 26:
								s = 0;
							case 27:
								if (!(s < i.length)) {
									e.next = 57;
									break
								}
								return u = i[s], l = s === i.length - 1, d = void 0, e.prev = 31, e.next = 34, fetch(u);
							case 34:
								d = e.sent, e.next = 43;
								break;
							case 37:
								if (e.prev = 37, e.t2 = e.catch(31), console.error("Failed to fetch list", n, e.t2), !l) {
									e.next = 42;
									break
								}
								throw new Error("Failed to download list ".concat(n));
							case 42:
								return e.abrupt("continue", 54);
							case 43:
								if (d.ok) {
									e.next = 47;
									break
								}
								if (!l) {
									e.next = 46;
									break
								}
								throw new Error("Failed to download list ".concat(n));
							case 46:
								return e.abrupt("continue", 54);
							case 47:
								return e.next = 49, d.json();
							case 49:
								if (b = e.sent, rc(b)) {
									e.next = 53;
									break
								}
								throw h = null !== (p = null === (f = rc.errors) || void 0 === f ? void 0 : f.reduce((function(e, n) {
									var t, r = "".concat(n.dataPath, " ").concat(null !== (t = n.message) && void 0 !== t ? t : "");
									return e.length > 0 ? "".concat(e, "; ").concat(r) : "".concat(r)
								}), "")) && void 0 !== p ? p : "unknown error", new Error("Token list failed validation: ".concat(h));
							case 53:
								return e.abrupt("return", b);
							case 54:
								s++, e.next = 27;
								break;
							case 57:
								throw new Error("Unrecognized list URL protocol.");
							case 58:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[4, 10],
						[14, 18],
						[31, 37]
					])
				})))).apply(this, arguments)
			}
			var cc = [{
					constant: !0,
					inputs: [{
						name: "node",
						type: "bytes32"
					}],
					name: "resolver",
					outputs: [{
						name: "resolverAddress",
						type: "address"
					}],
					payable: !1,
					stateMutability: "view",
					type: "function"
				}],
				oc = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
				sc = [{
					constant: !0,
					inputs: [{
						internalType: "bytes32",
						name: "node",
						type: "bytes32"
					}],
					name: "contenthash",
					outputs: [{
						internalType: "bytes",
						name: "",
						type: "bytes"
					}],
					payable: !1,
					stateMutability: "view",
					type: "function"
				}];

			function uc(e, n) {
				return new un.a(e, sc, n)
			}

			function lc(e, n) {
				return dc.apply(this, arguments)
			}

			function dc() {
				return (dc = Object(h.a)(j.a.mark((function e(n, t) {
					var r, i, a;
					return j.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return r = new un.a(oc, cc, t), i = Object(Li.namehash)(n), e.next = 4, r.resolver(i);
							case 4:
								return a = e.sent, e.abrupt("return", uc(a, t).contenthash(i));
							case 6:
							case "end":
								return e.stop()
						}
					}), e)
				})))).apply(this, arguments)
			}

			function bc() {
				var e = ge(),
					n = e.chainId,
					t = e.library,
					r = Object(x.c)(),
					a = Object(i.useCallback)((function(e) {
						if (!t || n !== $.a.MAINNET) {
							if (F === $.a.MAINNET) {
								var r = function() {
									var e;
									return q = null !== (e = q) && void 0 !== e ? e : new k.a(V.provider)
								}();
								if (r) return lc(e, r)
							}
							throw new Error("Could not construct mainnet ENS resolver")
						}
						return lc(e, t)
					}), [n, t]);
				return Object(i.useCallback)(function() {
					var e = Object(h.a)(j.a.mark((function e(n) {
						var t;
						return j.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									return t = Object(Ce.e)(), r(ze.pending({
										requestId: t,
										url: n
									})), e.abrupt("return", ic(n, a).then((function(e) {
										return r(ze.fulfilled({
											url: n,
											tokenList: e,
											requestId: t
										})), e
									})).catch((function(e) {
										throw console.error("Failed to get list at url ".concat(n), e), r(ze.rejected({
											url: n,
											requestId: t,
											errorMessage: e.message
										})), e
									})));
								case 3:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function(n) {
						return e.apply(this, arguments)
					}
				}(), [r, a])
			}

			function pc(e, n) {
				var t = Object(i.useRef)(n);
				Object(i.useEffect)((function() {
					t.current = n
				}), [n]), Object(i.useEffect)((function() {
					var n = function(n) {
						var r, i;
						null !== (r = null === (i = e.current) || void 0 === i ? void 0 : i.contains(n.target)) && void 0 !== r && r || t.current && t.current()
					};
					return document.addEventListener("mousedown", n),
						function() {
							document.removeEventListener("mousedown", n)
						}
				}), [e])
			}

			function fc() {
				var e = Object(u.a)(["\n  flex: 1;\n  overflow: auto;\n"]);
				return fc = function() {
					return e
				}, e
			}

			function jc() {
				var e = Object(u.a)(["\n  max-width: 160px;\n  opacity: 0.6;\n  margin-right: 0.5rem;\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);
				return jc = function() {
					return e
				}, e
			}

			function hc() {
				var e = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n"]);
				return hc = function() {
					return e
				}, e
			}

			function vc() {
				var e = Object(u.a)(["\n  z-index: 100;\n  visibility: ", ";\n  opacity: ", ";\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ", ";\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n"]);
				return vc = function() {
					return e
				}, e
			}

			function mc() {
				var e = Object(u.a)(["\n  padding: 0;\n  font-size: 1rem;\n  opacity: ", ";\n"]);
				return mc = function() {
					return e
				}, e
			}
			var yc = Object(l.default)(En)(mc(), (function(e) {
					return e.disabled ? "0.4" : "1"
				})),
				Oc = l.default.div(vc(), (function(e) {
					return e.show ? "visible" : "hidden"
				}), (function(e) {
					return e.show ? 1 : 0
				}), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					return e.theme.colors.tertiary
				}), (function(e) {
					return e.theme.colors.textSubtle
				})),
				xc = l.default.div(hc()),
				gc = l.default.div(jc());

			function Cc(e) {
				var n = e.listUrl,
					t = Object(i.useMemo)((function() {
						var e;
						return null === (e = Mi(n)) || void 0 === e ? void 0 : e.ensName
					}), [n]),
					a = Object(i.useMemo)((function() {
						if (!t) {
							var e = n.toLowerCase();
							if (e.startsWith("ipfs://") || e.startsWith("ipns://")) return n;
							try {
								return new URL(n).host
							} catch (r) {
								return
							}
						}
					}), [n, t]);
				return Object(r.jsx)(r.Fragment, {
					children: null !== t && void 0 !== t ? t : a
				})
			}

			function wc(e) {
				return "list-row-".concat(e.replace(/\./g, "-"))
			}
			var kc = Object(i.memo)((function(e) {
					var n = e.listUrl,
						t = e.onBack,
						a = Object(x.d)((function(e) {
							return e.lists.byUrl
						})),
						c = pr(),
						o = Object(x.c)(),
						u = a[n],
						l = u.current,
						d = u.pendingUpdate,
						b = n === c,
						p = function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
								n = Object(i.useState)(e),
								t = Object(v.a)(n, 2),
								r = t[0],
								a = t[1],
								c = Object(i.useCallback)((function() {
									return a((function(e) {
										return !e
									}))
								}), []);
							return [r, c]
						}(!1),
						f = Object(v.a)(p, 2),
						j = f[0],
						h = f[1],
						m = Object(i.useRef)(),
						y = Object(i.useState)(),
						O = Object(v.a)(y, 2),
						g = O[0],
						C = O[1],
						w = Object(i.useState)(),
						k = Object(v.a)(w, 2),
						T = k[0],
						I = k[1],
						E = Object(Hi.a)(g, T, {
							placement: "auto",
							strategy: "fixed",
							modifiers: [{
								name: "offset",
								options: {
									offset: [8, 8]
								}
							}]
						}),
						N = E.styles,
						R = E.attributes;
					pc(m, j ? h : void 0);
					var S = Object(i.useCallback)((function() {
							b || (o(We(n)), t())
						}), [o, b, n, t]),
						U = Object(i.useCallback)((function() {
							d && o(Fe(n))
						}), [o, n, d]),
						A = Object(i.useCallback)((function() {
							"REMOVE" === window.prompt("Please confirm you would like to remove this list by typing REMOVE") && o(Ve(n))
						}), [o, n]),
						P = Zt();
					return l ? Object(r.jsxs)(an, {
						align: "center",
						padding: "16px",
						id: wc(n),
						children: [l.logoURI ? Object(r.jsx)(Wi, {
							style: {
								marginRight: "1rem"
							},
							logoURI: l.logoURI,
							alt: "".concat(l.name, " list logo")
						}) : Object(r.jsx)("div", {
							style: {
								width: "24px",
								height: "24px",
								marginRight: "1rem"
							}
						}), Object(r.jsxs)(Le, {
							style: {
								flex: "1"
							},
							children: [Object(r.jsx)(an, {
								children: Object(r.jsx)(s.y, {
									bold: b,
									fontSize: "16px",
									style: {
										overflow: "hidden",
										textOverflow: "ellipsis"
									},
									children: l.name
								})
							}), Object(r.jsx)(an, {
								style: {
									marginTop: "4px"
								},
								children: Object(r.jsx)(gc, {
									title: n,
									children: Object(r.jsx)(Cc, {
										listUrl: n
									})
								})
							})]
						}), Object(r.jsxs)(xc, {
							ref: m,
							children: [Object(r.jsx)("div", {
								style: {
									display: "inline-block"
								},
								ref: C,
								children: Object(r.jsx)(s.c, {
									style: {
										width: "32px",
										marginRight: "8px"
									},
									onClick: h,
									variant: "secondary",
									children: Object(r.jsx)(s.i, {})
								})
							}), j && Object(r.jsxs)(Oc, Object(X.a)(Object(X.a)({
								show: !0,
								ref: I,
								style: N.popper
							}, R.popper), {}, {
								children: [Object(r.jsx)("div", {
									children: l && He(l.version)
								}), Object(r.jsx)(Ua, {}), Object(r.jsx)(Sn, {
									href: "https://tokenlists.org/token-list?url=".concat(n),
									children: P(1206, "View list")
								}), Object(r.jsx)(yc, {
									onClick: A,
									disabled: 1 === Object.keys(a).length,
									children: "Remove list"
								}), d && Object(r.jsx)(yc, {
									onClick: U,
									children: "Update list"
								})]
							}))]
						}), b ? Object(r.jsx)(s.c, {
							disabled: !0,
							style: {
								width: "5rem",
								minWidth: "5rem"
							},
							children: "Selected"
						}) : Object(r.jsx)(r.Fragment, {
							children: Object(r.jsx)(s.c, {
								className: "select-button",
								style: {
									width: "5rem",
									minWidth: "4.5rem"
								},
								onClick: S,
								children: "Select"
							})
						})]
					}, n) : null
				})),
				Tc = l.default.div(fc());

			function Ic(e) {
				var n, t = e.onDismiss,
					a = e.onBack,
					c = Object(i.useState)(""),
					o = Object(v.a)(c, 2),
					u = o[0],
					l = o[1],
					d = Object(x.c)(),
					b = Object(x.d)((function(e) {
						return e.lists.byUrl
					})),
					p = Boolean(null === (n = b[u]) || void 0 === n ? void 0 : n.loadingRequestId),
					f = Object(i.useState)(null),
					j = Object(v.a)(f, 2),
					h = j[0],
					m = j[1],
					y = Object(i.useCallback)((function(e) {
						l(e.target.value), m(null)
					}), []),
					O = bc(),
					g = Object(i.useCallback)((function() {
						p || (m(null), O(u).then((function() {
							l("")
						})).catch((function(e) {
							m(e.message), d(Ve(u))
						})))
					}), [p, d, O, u]),
					C = Object(i.useMemo)((function() {
						return Bi(u).length > 0 || Boolean(Mi(u))
					}), [u]),
					w = Object(i.useCallback)((function(e) {
						C && "Enter" === e.key && g()
					}), [g, C]),
					k = Object(i.useMemo)((function() {
						return Object.keys(b).filter((function(e) {
							return Boolean(b[e].current)
						})).sort((function(e, n) {
							var t = b[e].current,
								r = b[n].current;
							return t && r ? t.name.toLowerCase() < r.name.toLowerCase() ? -1 : t.name.toLowerCase() === r.name.toLowerCase() ? 0 : 1 : t ? -1 : r ? 1 : 0
						}))
					}), [b]),
					T = Zt();
				return Object(r.jsxs)(Le, {
					style: {
						width: "100%",
						flex: "1 1"
					},
					children: [Object(r.jsx)(Ea, {
						children: Object(r.jsxs)(en, {
							children: [Object(r.jsx)("div", {
								children: Object(r.jsx)(Ja.a, {
									style: {
										cursor: "pointer"
									},
									onClick: a
								})
							}), Object(r.jsx)(s.y, {
								fontSize: "20px",
								children: T(1208, "Manage Lists")
							}), Object(r.jsx)(s.j, {
								onClick: t
							})]
						})
					}), Object(r.jsx)(Sa, {}), Object(r.jsxs)(Ea, {
						gap: "14px",
						children: [Object(r.jsxs)(s.y, {
							bold: !0,
							children: ["Add a list", " ", Object(r.jsx)(sa, {
								text: T(999, "Token lists are an open specification for lists of BEP20 tokens. You can use any token list by entering its URL below. Beware that third party token lists can contain fake or malicious BEP20 tokens.")
							})]
						}), Object(r.jsxs)(an, {
							children: [Object(r.jsx)(Ra, {
								type: "text",
								id: "list-add-input",
								placeholder: "https:// or ipfs:// or ENS name",
								value: u,
								onChange: y,
								onKeyDown: w,
								style: {
									height: "2.75rem",
									borderRadius: 12,
									padding: "12px"
								}
							}), Object(r.jsx)(s.c, {
								onClick: g,
								style: {
									maxWidth: "4em",
									marginLeft: "1em"
								},
								disabled: !C,
								children: "Add"
							})]
						}), h ? Object(r.jsx)(s.y, {
							color: "failure",
							title: h,
							style: {
								textOverflow: "ellipsis",
								overflow: "hidden"
							},
							children: h
						}) : null]
					}), Object(r.jsx)(Sa, {}), Object(r.jsx)(Tc, {
						children: k.map((function(e) {
							return Object(r.jsx)(kc, {
								listUrl: e,
								onBack: a
							}, e)
						}))
					}), Object(r.jsx)(Sa, {}), Object(r.jsx)("div", {
						style: {
							padding: "16px",
							textAlign: "center"
						},
						children: Object(r.jsx)(Sn, {
							href: "https://tokenlists.org",
							children: "Browse lists"
						})
					})]
				})
			}

			function Ec(e) {
				var n = e.isOpen,
					t = e.onDismiss,
					a = e.onCurrencySelect,
					c = e.selectedCurrency,
					o = e.otherSelectedCurrency,
					s = Object(i.useState)(!1),
					u = Object(v.a)(s, 2),
					l = u[0],
					d = u[1],
					b = ki(n);
				Object(i.useEffect)((function() {
					n && !b && d(!1)
				}), [n, b]);
				var p = Object(i.useCallback)((function(e) {
						a(e), t()
					}), [t, a]),
					f = Object(i.useCallback)((function() {
						d(!0)
					}), []),
					j = Object(i.useCallback)((function() {
						d(!1)
					}), []),
					h = !pr();
				return Object(r.jsx)(Tt, {
					isOpen: n,
					onDismiss: t,
					maxHeight: 90,
					minHeight: l ? 40 : h ? 0 : 80,
					children: l ? Object(r.jsx)(Ic, {
						onDismiss: t,
						onBack: j
					}) : Object(r.jsx)(Ga, {
						isOpen: n,
						onDismiss: t,
						onCurrencySelect: p,
						onChangeList: f,
						selectedCurrency: c,
						otherSelectedCurrency: o,
						showCommonBases: !1
					})
				})
			}

			function Nc() {
				var e = Object(u.a)(["\n  position: absolute;\n  left: ", ";\n"]);
				return Nc = function() {
					return e
				}, e
			}

			function Rc() {
				var e = Object(u.a)(["\n  z-index: 2;\n"]);
				return Rc = function() {
					return e
				}, e
			}

			function Sc() {
				var e = Object(u.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ", ";\n"]);
				return Sc = function() {
					return e
				}, e
			}
			var Uc = l.default.div(Sc(), (function(e) {
					var n = e.sizeraw;
					return e.margin && "".concat((n / 3 + 8).toString(), "px")
				})),
				Ac = Object(l.default)(ha)(Rc()),
				Pc = Object(l.default)(ha)(Nc(), (function(e) {
					var n = e.sizeraw;
					return "".concat((n / 2).toString(), "px")
				}));

			function Mc(e) {
				var n = e.currency0,
					t = e.currency1,
					i = e.size,
					a = void 0 === i ? 16 : i,
					c = e.margin,
					o = void 0 !== c && c;
				return Object(r.jsxs)(Uc, {
					sizeraw: a,
					margin: o,
					children: [n && Object(r.jsx)(Ac, {
						currency: n,
						size: "".concat(a.toString(), "px")
					}), t && Object(r.jsx)(Pc, {
						currency: t,
						size: "".concat(a.toString(), "px"),
						sizeraw: a
					})]
				})
			}

			function Bc() {
				var e = Object(u.a)(["\n  color: ", ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ", ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
				return Bc = function() {
					return e
				}, e
			}
			var Lc = l.default.input(Bc(), (function(e) {
					var n = e.error,
						t = e.theme;
					return n ? t.colors.failure : t.colors.text
				}), (function(e) {
					var n = e.align;
					return n && n
				}), (function(e) {
					return e.theme.colors.textSubtle
				})),
				_c = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
				Dc = a.a.memo((function(e) {
					var n = e.value,
						t = e.onUserInput,
						i = e.placeholder,
						a = Object(gn.a)(e, ["value", "onUserInput", "placeholder"]);
					return Object(r.jsx)(Lc, Object(X.a)(Object(X.a)({}, a), {}, {
						value: n,
						onChange: function(e) {
							var n;
							("" === (n = e.target.value.replace(/,/g, ".")) || _c.test(n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && t(n)
						},
						inputMode: "decimal",
						title: "Token Amount",
						autoComplete: "off",
						autoCorrect: "off",
						type: "text",
						pattern: "^[0-9]*[.,]?[0-9]*$",
						placeholder: i || "0.0",
						minLength: 1,
						maxLength: 79,
						spellCheck: "false"
					}))
				}));

			function Yc() {
				var e = Object(u.a)(["\n  border-radius: 16px;\n  background-color: ", ";\n  box-shadow: ", ";\n"]);
				return Yc = function() {
					return e
				}, e
			}

			function zc() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: ", ";\n  background-color: ", ";\n  z-index: 1;\n"]);
				return zc = function() {
					return e
				}, e
			}

			function Fc() {
				var e = Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);
				return Fc = function() {
					return e
				}, e
			}

			function qc() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  color: ", ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ", ";\n  }\n"]);
				return qc = function() {
					return e
				}, e
			}

			function Vc() {
				var e = Object(u.a)(["\n  align-items: center;\n  height: 34px;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  color: ", ";\n  border-radius: 12px;\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n  :focus,\n  :hover {\n    background-color: ", ";\n  }\n"]);
				return Vc = function() {
					return e
				}, e
			}

			function Wc() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  padding: ", ";\n"]);
				return Wc = function() {
					return e
				}, e
			}
			var Hc = l.default.div(Wc(), (function(e) {
					return e.selected ? "0.75rem 0.5rem 0.75rem 1rem" : "0.75rem 0.75rem 0.75rem 1rem"
				})),
				Qc = l.default.button(Vc(), (function(e) {
					var n = e.selected,
						t = e.theme;
					return n ? t.colors.text : "#FFFFFF"
				}), (function(e) {
					var n = e.theme;
					return Object(vt.a)(.05, n.colors.input)
				})),
				Kc = l.default.div(qc(), (function(e) {
					return e.theme.colors.text
				}), (function(e) {
					var n = e.theme;
					return Object(vt.a)(.2, n.colors.textSubtle)
				})),
				Gc = l.default.span(Fc()),
				Jc = l.default.div(zc(), (function(e) {
					return e.hideInput ? "8px" : "20px"
				}), (function(e) {
					return e.theme.colors.background
				})),
				Xc = l.default.div(Yc(), (function(e) {
					return e.theme.colors.input
				}), (function(e) {
					return e.theme.shadows.inset
				}));

			function $c(e) {
				var n = e.value,
					t = e.onUserInput,
					a = e.onMax,
					c = e.showMaxButton,
					o = e.label,
					u = e.onCurrencySelect,
					l = e.currency,
					d = e.disableCurrencySelect,
					b = void 0 !== d && d,
					p = e.hideBalance,
					f = void 0 !== p && p,
					j = e.pair,
					h = void 0 === j ? null : j,
					m = e.hideInput,
					y = void 0 !== m && m,
					O = e.otherCurrency,
					x = e.id,
					g = e.showCommonBases,
					C = Object(i.useState)(!1),
					w = Object(v.a)(C, 2),
					k = w[0],
					T = w[1],
					I = ge().account,
					E = wi(null !== I && void 0 !== I ? I : void 0, null !== l && void 0 !== l ? l : void 0),
					N = Zt(),
					R = o || N(132, "Input"),
					S = Object(i.useCallback)((function() {
						T(!1)
					}), [T]);
				return Object(r.jsxs)(Jc, {
					id: x,
					children: [Object(r.jsxs)(Xc, {
						hideInput: y,
						children: [!y && Object(r.jsx)(Kc, {
							children: Object(r.jsxs)(en, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: R
								}), I && Object(r.jsx)(s.y, {
									onClick: a,
									fontSize: "14px",
									style: {
										display: "inline",
										cursor: "pointer"
									},
									children: !f && l && E ? "Balance: ".concat(null === E || void 0 === E ? void 0 : E.toSignificant(6)) : " -"
								})]
							})
						}), Object(r.jsxs)(Hc, {
							style: y ? {
								padding: "0",
								borderRadius: "8px"
							} : {},
							selected: b,
							children: [!y && Object(r.jsxs)(r.Fragment, {
								children: [Object(r.jsx)(Dc, {
									className: "token-amount-input",
									value: n,
									onUserInput: function(e) {
										t(e)
									}
								}), I && l && c && "To" !== o && Object(r.jsx)(s.c, {
									onClick: a,
									scale: "sm",
									variant: "text",
									children: "MAX"
								})]
							}), Object(r.jsx)(Qc, {
								selected: !!l,
								className: "open-currency-select-button",
								onClick: function() {
									b || T(!0)
								},
								children: Object(r.jsxs)(Gc, {
									children: [h ? Object(r.jsx)(Mc, {
										currency0: h.token0,
										currency1: h.token1,
										size: 16,
										margin: !0
									}) : l ? Object(r.jsx)(ha, {
										currency: l,
										size: "24px",
										style: {
											marginRight: "8px"
										}
									}) : null, h ? Object(r.jsxs)(s.y, {
										children: [null === h || void 0 === h ? void 0 : h.token0.symbol, ":", null === h || void 0 === h ? void 0 : h.token1.symbol]
									}) : Object(r.jsx)(s.y, {
										children: (l && l.symbol && l.symbol.length > 20 ? "".concat(l.symbol.slice(0, 4), "...").concat(l.symbol.slice(l.symbol.length - 5, l.symbol.length)) : null === l || void 0 === l ? void 0 : l.symbol) || N(1196, "Select a currency")
									}), !b && Object(r.jsx)(s.i, {})]
								})
							})]
						})]
					}), !b && u && Object(r.jsx)(Ec, {
						isOpen: k,
						onDismiss: S,
						onCurrencySelect: u,
						selectedCurrency: l,
						otherSelectedCurrency: O,
						showCommonBases: g
					})]
				})
			}

			function Zc() {
				var e = Object(u.a)(["\n  color: ", ";\n"]);
				return Zc = function() {
					return e
				}, e
			}

			function eo() {
				var e = Object(u.a)(["\n  font-weight: 500;\n  font-size: 20px;\n"]);
				return eo = function() {
					return e
				}, e
			}

			function no() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n"]);
				return no = function() {
					return e
				}, e
			}
			var to = l.default.div(no()),
				ro = l.default.div(eo()),
				io = Object(l.default)(Ja.a)(Zc(), (function(e) {
					return e.theme.colors.text
				}));

			function ao() {
				var e = Zt();
				return Object(r.jsx)(to, {
					children: Object(r.jsxs)(en, {
						style: {
							padding: "1rem"
						},
						children: [Object(r.jsx)(m.b, {
							to: "/pool",
							children: Object(r.jsx)(io, {})
						}), Object(r.jsx)(ro, {
							children: "Import Pool"
						}), Object(r.jsx)(sa, {
							text: e(256, "Use this tool to find pairs that do not automatically appear in the interface.")
						})]
					})
				})
			}

			function co(e) {
				var n = e.adding,
					t = Zt();
				return Object(r.jsx)(to, {
					children: Object(r.jsxs)(en, {
						style: {
							padding: "1rem"
						},
						children: [Object(r.jsx)(m.b, {
							to: "/pool",
							children: Object(r.jsx)(io, {})
						}), Object(r.jsxs)(ro, {
							children: [n ? t(258, "Add") : t(260, "Remove"), " Liquidity"]
						}), Object(r.jsx)(sa, {
							text: n ? t(264, "When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.") : t(266, "Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.")
						})]
					})
				})
			}
			var oo = t(498),
				so = t(499);

			function uo(e) {
				var n, t, r = null === (n = Ar(li(null === e || void 0 === e ? void 0 : e.address, !1), "totalSupply")) || void 0 === n || null === (t = n.result) || void 0 === t ? void 0 : t[0];
				return e && r ? new $.k(e, r.toString()) : void 0
			}

			function lo(e) {
				if (e === $.d) return "ETH";
				if (e instanceof $.j) return e.address;
				throw new Error("invalid currency")
			}

			function bo(e, n) {
				return n && e === $.d ? $.n[n] : e instanceof $.j ? e : void 0
			}

			function po(e, n) {
				var t = e && n ? bo(e.currency, n) : void 0;
				return t && e ? new $.k(t, e.raw) : void 0
			}

			function fo(e) {
				return e.equals($.n[e.chainId]) ? $.d : e
			}

			function jo() {
				var e = Object(u.a)(["\n  background-color: ", ";\n  color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
				return jo = function() {
					return e
				}, e
			}

			function ho() {
				var e = Object(u.a)(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
				return ho = function() {
					return e
				}, e
			}

			function vo() {
				var e = Object(u.a)(["\n  background-color: ", ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ", ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n"]);
				return vo = function() {
					return e
				}, e
			}

			function mo() {
				var e = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
				return mo = function() {
					return e
				}, e
			}

			function yo() {
				var e = Object(u.a)(["\n  height: 22px;\n  width: 22px;\n  background-color: ", ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ", ";\n  }\n  :focus {\n    background-color: ", ";\n    outline: none;\n  }\n"]);
				return yo = function() {
					return e
				}, e
			}

			function Oo() {
				var e = Object(u.a)(["\n  color: ", ";\n"]);
				return Oo = function() {
					return e
				}, e
			}

			function xo() {
				var e = Object(u.a)(["\n  margin-top: 1rem;\n"]);
				return xo = function() {
					return e
				}, e
			}

			function go() {
				var e = Object(u.a)(["\n  height: 1px;\n  width: 100%;\n  background-color: ", ";\n"]);
				return go = function() {
					return e
				}, e
			}

			function Co() {
				var e = Object(u.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
				return Co = function() {
					return e
				}, e
			}

			function wo() {
				var e = Object(u.a)(["\n  padding: 2px;\n\n  ", "\n"]);
				return wo = function() {
					return e
				}, e
			}

			function ko() {
				var e = Object(u.a)(["\n  position: relative;\n"]);
				return ko = function() {
					return e
				}, e
			}
			var To = l.default.div(ko()),
				Io = l.default.div(wo(), (function(e) {
					return e.clickable ? Object(l.css)(Co()) : null
				})),
				Eo = l.default.div(go(), (function(e) {
					return e.theme.colors.tertiary
				})),
				No = l.default.div(xo()),
				Ro = Object(l.default)(s.y)(Oo(), (function(e) {
					var n = e.theme,
						t = e.severity;
					return 3 === t || 4 === t ? n.colors.failure : 2 === t ? n.colors.binance : 1 === t ? n.colors.text : n.colors.success
				})),
				So = l.default.button(yo(), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					return e.theme.colors.textSubtle
				}), (function(e) {
					return e.theme.colors.tertiary
				}), (function(e) {
					return e.theme.colors.tertiary
				})),
				Uo = l.default.span(mo()),
				Ao = l.default.div(vo(), (function(e) {
					var n = e.theme;
					return Object(vt.b)(.9, n.colors.failure)
				}), (function(e) {
					return e.theme.colors.failure
				})),
				Po = l.default.div(ho(), (function(e) {
					var n = e.theme;
					return Object(vt.b)(.9, n.colors.failure)
				}));

			function Mo(e) {
				var n = e.error;
				return Object(r.jsxs)(Ao, {
					children: [Object(r.jsx)(Po, {
						children: Object(r.jsx)(Wt.a, {
							size: 24
						})
					}), Object(r.jsx)("p", {
						children: n
					})]
				})
			}
			var Bo = Object(l.default)(Be)(jo(), (function(e) {
				var n = e.theme;
				return Object(vt.b)(.9, n.colors.primary)
			}), (function(e) {
				return e.theme.colors.primary
			}));

			function Lo() {
				var e = Object(u.a)(["\n  border: 1px solid ", ";\n  :hover {\n    border: 1px solid ", ";\n  }\n"]);
				return Lo = function() {
					return e
				}, e
			}

			function _o() {
				var e = Object(u.a)(["\n  height: 24px;\n"]);
				return _o = function() {
					return e
				}, e
			}
			var Do = Object(l.default)(en)(_o()),
				Yo = Object(l.default)(pt)(Lo(), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					var n = e.theme;
					return Object(vt.a)(.06, n.colors.invertedContrast)
				}));

			function zo(e) {
				var n = e.pair,
					t = e.showUnwrapped,
					a = void 0 !== t && t,
					c = ge().account,
					o = a ? n.token0 : fo(n.token0),
					u = a ? n.token1 : fo(n.token1),
					l = Object(i.useState)(!1),
					d = Object(v.a)(l, 2),
					b = d[0],
					p = d[1],
					f = gi(null !== c && void 0 !== c ? c : void 0, n.liquidityToken),
					j = uo(n.liquidityToken),
					h = n && j && f && $.e.greaterThanOrEqual(j.raw, f.raw) ? [n.getLiquidityValue(n.token0, j, f, !1), n.getLiquidityValue(n.token1, j, f, !1)] : [void 0, void 0],
					m = Object(v.a)(h, 2),
					y = m[0],
					O = m[1];
				return Object(r.jsx)(r.Fragment, {
					children: f && Object(r.jsx)(s.f, {
						children: Object(r.jsx)(s.g, {
							children: Object(r.jsxs)(Be, {
								gap: "12px",
								children: [Object(r.jsx)(Do, {
									children: Object(r.jsx)(rn, {
										children: Object(r.jsx)(s.y, {
											style: {
												textTransform: "uppercase",
												fontWeight: 600
											},
											fontSize: "14px",
											color: "textSubtle",
											children: "LP Tokens in your Wallet"
										})
									})
								}), Object(r.jsxs)(Do, {
									onClick: function() {
										return p(!b)
									},
									children: [Object(r.jsxs)(rn, {
										children: [Object(r.jsx)(Mc, {
											currency0: o,
											currency1: u,
											margin: !0,
											size: 20
										}), Object(r.jsxs)(s.y, {
											fontSize: "14px",
											children: [o.symbol, "/", u.symbol]
										})]
									}), Object(r.jsx)(rn, {
										children: Object(r.jsx)(s.y, {
											fontSize: "14px",
											children: f ? f.toSignificant(4) : "-"
										})
									})]
								}), Object(r.jsxs)(Be, {
									gap: "4px",
									children: [Object(r.jsxs)(Do, {
										children: [Object(r.jsxs)(s.y, {
											fontSize: "14px",
											children: [o.symbol, ":"]
										}), y ? Object(r.jsx)(rn, {
											children: Object(r.jsx)(s.y, {
												ml: "6px",
												fontSize: "14px",
												children: null === y || void 0 === y ? void 0 : y.toSignificant(6)
											})
										}) : "-"]
									}), Object(r.jsxs)(Do, {
										children: [Object(r.jsxs)(s.y, {
											fontSize: "14px",
											children: [u.symbol, ":"]
										}), O ? Object(r.jsx)(rn, {
											children: Object(r.jsx)(s.y, {
												ml: "6px",
												fontSize: "14px",
												children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
											})
										}) : "-"]
									})]
								})]
							})
						})
					})
				})
			}

			function Fo(e) {
				var n = e.pair,
					t = ge().account,
					a = fo(n.token0),
					c = fo(n.token1),
					o = Object(i.useState)(!1),
					u = Object(v.a)(o, 2),
					l = u[0],
					d = u[1],
					b = gi(null !== t && void 0 !== t ? t : void 0, n.liquidityToken),
					p = uo(n.liquidityToken),
					f = b && p && $.e.greaterThanOrEqual(p.raw, b.raw) ? new $.g(b.raw, p.raw) : void 0,
					j = n && p && b && $.e.greaterThanOrEqual(p.raw, b.raw) ? [n.getLiquidityValue(n.token0, p, b, !1), n.getLiquidityValue(n.token1, p, b, !1)] : [void 0, void 0],
					h = Object(v.a)(j, 2),
					y = h[0],
					O = h[1];
				return Object(r.jsx)(Yo, {
					children: Object(r.jsxs)(Be, {
						gap: "12px",
						children: [Object(r.jsxs)(Do, {
							onClick: function() {
								return d(!l)
							},
							style: {
								cursor: "pointer"
							},
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(Mc, {
									currency0: a,
									currency1: c,
									margin: !0,
									size: 20
								}), Object(r.jsx)(s.y, {
									children: a && c ? "".concat(a.symbol, "/").concat(c.symbol) : Object(r.jsx)(Uo, {
										children: "Loading"
									})
								})]
							}), Object(r.jsx)(rn, {
								children: l ? Object(r.jsx)(oo.a, {
									size: "20",
									style: {
										marginLeft: "10px"
									}
								}) : Object(r.jsx)(so.a, {
									size: "20",
									style: {
										marginLeft: "10px"
									}
								})
							})]
						}), l && Object(r.jsxs)(Be, {
							gap: "8px",
							children: [Object(r.jsxs)(Do, {
								children: [Object(r.jsx)(rn, {
									children: Object(r.jsxs)(s.y, {
										children: ["Pooled ", a.symbol, ":"]
									})
								}), y ? Object(r.jsxs)(rn, {
									children: [Object(r.jsx)(s.y, {
										ml: "6px",
										children: null === y || void 0 === y ? void 0 : y.toSignificant(6)
									}), Object(r.jsx)(ha, {
										size: "20px",
										style: {
											marginLeft: "8px"
										},
										currency: a
									})]
								}) : "-"]
							}), Object(r.jsxs)(Do, {
								children: [Object(r.jsx)(rn, {
									children: Object(r.jsxs)(s.y, {
										children: ["Pooled ", c.symbol, ":"]
									})
								}), O ? Object(r.jsxs)(rn, {
									children: [Object(r.jsx)(s.y, {
										ml: "6px",
										children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
									}), Object(r.jsx)(ha, {
										size: "20px",
										style: {
											marginLeft: "8px"
										},
										currency: c
									})]
								}) : "-"]
							}), Object(r.jsxs)(Do, {
								children: [Object(r.jsx)(s.y, {
									children: "Your pool tokens:"
								}), Object(r.jsx)(s.y, {
									children: b ? b.toSignificant(4) : "-"
								})]
							}), Object(r.jsxs)(Do, {
								children: [Object(r.jsx)(s.y, {
									children: "Your pool share:"
								}), Object(r.jsx)(s.y, {
									children: f ? "".concat(f.toFixed(2), "%") : "-"
								})]
							}), Object(r.jsxs)(en, {
								marginTop: "10px",
								children: [Object(r.jsx)(s.c, {
									as: m.b,
									to: "/add/".concat(lo(a), "/").concat(lo(c)),
									style: {
										width: "48%"
									},
									children: "Add"
								}), Object(r.jsx)(s.c, {
									as: m.b,
									style: {
										width: "48%"
									},
									to: "/remove/".concat(lo(a), "/").concat(lo(c)),
									children: "Remove"
								})]
							})]
						})]
					})
				})
			}
			var qo, Vo = new ir.b(ri.a);

			function Wo(e) {
				var n = ge().chainId,
					t = Object(i.useMemo)((function() {
						return e.map((function(e) {
							var t = Object(v.a)(e, 2),
								r = t[0],
								i = t[1];
							return [bo(r, n), bo(i, n)]
						}))
					}), [n, e]),
					r = Ur(Object(i.useMemo)((function() {
						return t.map((function(e) {
							var n = Object(v.a)(e, 2),
								t = n[0],
								r = n[1];
							return t && r && !t.equals(r) ? $.f.getAddress(t, r) : void 0
						}))
					}), [t]), Vo, "getReserves");
				return Object(i.useMemo)((function() {
					return r.map((function(e, n) {
						var r = e.result,
							i = e.loading,
							a = t[n][0],
							c = t[n][1];
						if (i) return [qo.LOADING, null];
						if (!a || !c || a.equals(c)) return [qo.INVALID, null];
						if (!r) return [qo.NOT_EXISTS, null];
						var o = r.reserve0,
							s = r.reserve1,
							u = a.sortsBefore(c) ? [a, c] : [c, a],
							l = Object(v.a)(u, 2),
							d = l[0],
							b = l[1];
						return [qo.EXISTS, new $.f(new $.k(d, o.toString()), new $.k(b, s.toString()))]
					}))
				}), [r, t])
			}

			function Ho(e, n) {
				return Wo([
					[e, n]
				])[0]
			}! function(e) {
				e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
			}(qo || (qo = {}));
			var Qo = t(490);

			function Ko(e, n, t) {
				var r = Ar(li(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(i.useMemo)((function() {
					return [n, t]
				}), [n, t])).result;
				return Object(i.useMemo)((function() {
					return e && r ? new $.k(e, r.toString()) : void 0
				}), [e, r])
			}
			var Go;
			! function(e) {
				e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
			}(Go || (Go = {}));
			var Jo = Object(Ce.b)("swap/selectCurrency"),
				Xo = Object(Ce.b)("swap/switchCurrencies"),
				$o = Object(Ce.b)("swap/typeInput"),
				Zo = Object(Ce.b)("swap/replaceSwapState"),
				es = Object(Ce.b)("swap/setRecipient"),
				ns = Object(Ce.b)("transactions/addTransaction"),
				ts = Object(Ce.b)("transactions/clearAllTransactions"),
				rs = Object(Ce.b)("transactions/finalizeTransaction"),
				is = Object(Ce.b)("transactions/checkedTransaction");

			function as() {
				var e = ge(),
					n = e.chainId,
					t = e.account,
					r = Object(x.c)();
				return Object(i.useCallback)((function(e) {
					var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
						a = i.summary,
						c = i.approval;
					if (t && n) {
						var o = e.hash;
						if (!o) throw Error("No transaction hash found.");
						r(ns({
							hash: o,
							from: t,
							chainId: n,
							approval: c,
							summary: a
						}))
					}
				}), [r, n, t])
			}

			function cs() {
				var e, n = ge().chainId,
					t = Object(x.d)((function(e) {
						return e.transactions
					}));
				return n && null !== (e = t[n]) && void 0 !== e ? e : {}
			}

			function os(e) {
				return (new Date).getTime() - e.addedTime < 864e5
			}
			var ss, us, ls = new $.g($.e.BigInt(20), $.e.BigInt(1e4)),
				ds = new $.g($.e.BigInt(1e4), $.e.BigInt(1e4)),
				bs = ds.subtract(ls);

			function ps(e) {
				var n = e ? ds.subtract(e.route.pairs.reduce((function(e) {
						return e.multiply(bs)
					}), ds)) : void 0,
					t = e && n ? e.priceImpact.subtract(n) : void 0;
				return {
					priceImpactWithoutFee: t ? new $.g(null === t || void 0 === t ? void 0 : t.numerator, null === t || void 0 === t ? void 0 : t.denominator) : void 0,
					realizedLPFee: n && e && (e.inputAmount instanceof $.k ? new $.k(e.inputAmount.token, n.multiply(e.inputAmount.raw).quotient) : $.c.ether(n.multiply(e.inputAmount.raw).quotient))
				}
			}

			function fs(e, n) {
				var t, r, i = (r = n, new $.g($.e.BigInt(Math.floor(r)), $.e.BigInt(1e4)));
				return t = {}, Object(w.a)(t, Go.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(i)), Object(w.a)(t, Go.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(i)), t
			}

			function js(e) {
				return (null === e || void 0 === e ? void 0 : e.lessThan(Oe)) ? (null === e || void 0 === e ? void 0 : e.lessThan(me)) ? (null === e || void 0 === e ? void 0 : e.lessThan(ve)) ? (null === e || void 0 === e ? void 0 : e.lessThan(he)) ? 0 : 1 : 2 : 3 : 4
			}

			function hs(e, n) {
				return e ? n ? "".concat(e.executionPrice.invert().toSignificant(6), " ").concat(e.inputAmount.currency.symbol, " / ").concat(e.outputAmount.currency.symbol) : "".concat(e.executionPrice.toSignificant(6), " ").concat(e.outputAmount.currency.symbol, " / ").concat(e.inputAmount.currency.symbol) : ""
			}

			function vs(e, n) {
				var t = ge().account,
					r = e instanceof $.k ? e.token : void 0,
					a = Ko(r, null !== t && void 0 !== t ? t : void 0, n),
					c = function(e, n) {
						var t = cs();
						return Object(i.useMemo)((function() {
							return "string" === typeof e && "string" === typeof n && Object.keys(t).some((function(r) {
								var i = t[r];
								if (!i) return !1;
								if (i.receipt) return !1;
								var a = i.approval;
								return !!a && a.spender === n && a.tokenAddress === e && os(i)
							}))
						}), [t, n, e])
					}(null === r || void 0 === r ? void 0 : r.address, n),
					o = Object(i.useMemo)((function() {
						return e && n ? e.currency === $.d ? ss.APPROVED : a ? a.lessThan(e) ? c ? ss.PENDING : ss.NOT_APPROVED : ss.APPROVED : ss.UNKNOWN : ss.UNKNOWN
					}), [e, a, c, n]),
					s = li(null === r || void 0 === r ? void 0 : r.address),
					u = as(),
					l = Object(i.useCallback)(Object(h.a)(j.a.mark((function t() {
						var i, a;
						return j.a.wrap((function(t) {
							for (;;) switch (t.prev = t.next) {
								case 0:
									if (o === ss.NOT_APPROVED) {
										t.next = 3;
										break
									}
									return console.error("approve was called unnecessarily"), t.abrupt("return");
								case 3:
									if (r) {
										t.next = 6;
										break
									}
									return console.error("no token"), t.abrupt("return");
								case 6:
									if (s) {
										t.next = 9;
										break
									}
									return console.error("tokenContract is null"), t.abrupt("return");
								case 9:
									if (e) {
										t.next = 12;
										break
									}
									return console.error("missing amount to approve"), t.abrupt("return");
								case 12:
									if (n) {
										t.next = 15;
										break
									}
									return console.error("no spender"), t.abrupt("return");
								case 15:
									return i = !1, t.next = 18, s.estimateGas.approve(n, Qo.a).catch((function() {
										return i = !0, s.estimateGas.approve(n, e.raw.toString())
									}));
								case 18:
									return a = t.sent, t.abrupt("return", s.approve(n, i ? e.raw.toString() : Qo.a, {
										gasLimit: mn(a)
									}).then((function(t) {
										u(t, {
											summary: "Approve ".concat(e.currency.symbol),
											approval: {
												tokenAddress: r.address,
												spender: n
											}
										})
									})).catch((function(e) {
										throw console.error("Failed to approve token", e), e
									})));
								case 20:
								case "end":
									return t.stop()
							}
						}), t)
					}))), [o, r, s, e, n, u]);
				return [o, l]
			}! function(e) {
				e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED"
			}(ss || (ss = {})),
			function(e) {
				e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
			}(us || (us = {}));
			var ms = Object(Ce.b)("mint/typeInputMint"),
				ys = Object(Ce.b)("mint/resetMintState"),
				Os = t(169);

			function xs(e, n) {
				var t = Object(i.useState)(e),
					r = Object(v.a)(t, 2),
					a = r[0],
					c = r[1];
				return Object(i.useEffect)((function() {
					var t = setTimeout((function() {
						c(e)
					}), n);
					return function() {
						clearTimeout(t)
					}
				}), [e, n]), a
			}

			function gs(e) {
				var n = fn(e),
					t = function(e) {
						var n, t, r, a = xs(e, 200),
							c = Object(i.useMemo)((function() {
								if (!a || !fn(a)) return [void 0];
								try {
									return a ? [Object(Li.namehash)("".concat(a.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
								} catch (e) {
									return [void 0]
								}
							}), [a]),
							o = Ar(di(!1), "resolver", c),
							s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
							u = Ar(bi(s && !_i(s) ? s : void 0, !1), "name", c),
							l = a !== e;
						return {
							ENSName: l ? null : null !== (t = null === (r = u.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
							loading: l || o.loading || u.loading
						}
					}(n || void 0),
					r = function(e) {
						var n, t, r, a = xs(e, 200),
							c = Object(i.useMemo)((function() {
								if (!a) return [void 0];
								try {
									return a ? [Object(Li.namehash)(a)] : [void 0]
								} catch (e) {
									return [void 0]
								}
							}), [a]),
							o = Ar(di(!1), "resolver", c),
							s = null === (n = o.result) || void 0 === n ? void 0 : n[0],
							u = Ar(bi(s && !_i(s) ? s : void 0, !1), "addr", c),
							l = a !== e;
						return {
							address: l ? null : null !== (t = null === (r = u.result) || void 0 === r ? void 0 : r[0]) && void 0 !== t ? t : null,
							loading: l || o.loading || u.loading
						}
					}(e);
				return {
					loading: t.loading || r.loading,
					address: n || r.address,
					name: t.ENSName ? t.ENSName : !n && r.address && e || null
				}
			}

			function Cs(e, n) {
				var t = ge().chainId,
					r = Object(i.useMemo)((function() {
						return t ? ce[t] : []
					}), [t]),
					a = Object(i.useMemo)((function() {
						return Mr()(r, (function(e) {
							return r.map((function(n) {
								return [e, n]
							}))
						})).filter((function(e) {
							var n = Object(v.a)(e, 2),
								t = n[0],
								r = n[1];
							return t.address !== r.address
						}))
					}), [r]),
					c = t ? [bo(e, t), bo(n, t)] : [void 0, void 0],
					o = Object(v.a)(c, 2),
					s = o[0],
					u = o[1],
					l = Wo(Object(i.useMemo)((function() {
						return s && u ? [
							[s, u]
						].concat(Object(J.a)(r.map((function(e) {
							return [s, e]
						}))), Object(J.a)(r.map((function(e) {
							return [u, e]
						}))), Object(J.a)(a)).filter((function(e) {
							return Boolean(e[0] && e[1])
						})).filter((function(e) {
							var n = Object(v.a)(e, 2),
								t = n[0],
								r = n[1];
							return t.address !== r.address
						})).filter((function(e) {
							var n = Object(v.a)(e, 2),
								r = n[0],
								i = n[1];
							if (!t) return !0;
							var a = oe[t];
							if (!a) return !0;
							var c = a[r.address],
								o = a[i.address];
							return !c && !o || !(c && !c.find((function(e) {
								return i.equals(e)
							}))) && !(o && !o.find((function(e) {
								return r.equals(e)
							})))
						})) : []
					}), [s, u, r, a, t]));
				return Object(i.useMemo)((function() {
					return Object.values(l.filter((function(e) {
						return Boolean(e[0] === qo.EXISTS && e[1])
					})).reduce((function(e, n) {
						var t, r = Object(v.a)(n, 2)[1];
						return e[r.liquidityToken.address] = null !== (t = e[r.liquidityToken.address]) && void 0 !== t ? t : r, e
					}), {}))
				}), [l])
			}
			var ws = t(273);

			function ks() {
				return Object(x.d)((function(e) {
					return e.swap
				}))
			}

			function Ts(e, n) {
				if (e && n) try {
					var t = Object(Os.parseUnits)(e, n.decimals).toString();
					if ("0" !== t) return n instanceof $.j ? new $.k(n, $.e.BigInt(t)) : $.c.ether($.e.BigInt(t))
				} catch (r) {
					console.info('Failed to parse input amount: "'.concat(e, '"'), r)
				}
			}
			var Is = ["0xBCfCcbde45cE874adCB698cC183deBcF17952812", "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a", "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F"];

			function Es(e, n) {
				return e.route.path.some((function(e) {
					return e.address === n
				})) || e.route.pairs.some((function(e) {
					return e.liquidityToken.address === n
				}))
			}

			function Ns() {
				var e, n, t, r, a, c, o, s = ge().account,
					u = ks(),
					l = u.independentField,
					d = u.typedValue,
					b = u[Go.INPUT].currencyId,
					p = u[Go.OUTPUT].currencyId,
					f = u.recipient,
					j = mi(b),
					h = mi(p),
					m = gs(null !== f && void 0 !== f ? f : void 0),
					y = null !== (e = null === f ? s : m.address) && void 0 !== e ? e : null,
					O = Ci(null !== s && void 0 !== s ? s : void 0, [null !== j && void 0 !== j ? j : void 0, null !== h && void 0 !== h ? h : void 0]),
					x = l === Go.INPUT,
					g = Ts(d, null !== (n = x ? j : h) && void 0 !== n ? n : void 0),
					C = function(e, n) {
						var t = Cs(null === e || void 0 === e ? void 0 : e.currency, n);
						return Object(i.useMemo)((function() {
							var r;
							return e && n && t.length > 0 && null !== (r = $.l.bestTradeExactIn(t, e, n, {
								maxHops: 3,
								maxNumResults: 1
							})[0]) && void 0 !== r ? r : null
						}), [t, e, n])
					}(x ? g : void 0, null !== h && void 0 !== h ? h : void 0),
					k = function(e, n) {
						var t = Cs(e, null === n || void 0 === n ? void 0 : n.currency);
						return Object(i.useMemo)((function() {
							var r;
							return e && n && t.length > 0 && null !== (r = $.l.bestTradeExactOut(t, e, n, {
								maxHops: 3,
								maxNumResults: 1
							})[0]) && void 0 !== r ? r : null
						}), [t, e, n])
					}(null !== j && void 0 !== j ? j : void 0, x ? void 0 : g),
					T = x ? C : k,
					I = (t = {}, Object(w.a)(t, Go.INPUT, O[0]), Object(w.a)(t, Go.OUTPUT, O[1]), t),
					E = (r = {}, Object(w.a)(r, Go.INPUT, null !== j && void 0 !== j ? j : void 0), Object(w.a)(r, Go.OUTPUT, null !== h && void 0 !== h ? h : void 0), r);
				(s || (a = "Connect Wallet"), g) || (a = null !== (c = a) && void 0 !== c ? c : "Enter an amount");
				E[Go.INPUT] && E[Go.OUTPUT] || (a = null !== (o = a) && void 0 !== o ? o : "Select a token");
				var N, R = fn(y);
				if (y && R) {
					if (-1 !== Is.indexOf(R) || C && Es(C, R) || k && Es(k, R)) {
						var S;
						a = null !== (S = a) && void 0 !== S ? S : "Invalid recipient"
					}
				} else a = null !== (N = a) && void 0 !== N ? N : "Enter a recipient";
				var U = Xr(),
					A = Object(v.a)(U, 1)[0],
					P = T && A && fs(T, A),
					M = [I[Go.INPUT], P ? P[Go.INPUT] : null],
					B = M[0],
					L = M[1];
				return B && L && B.lessThan(L) && (a = "Insufficient ".concat(L.currency.symbol, " balance")), {
					currencies: E,
					currencyBalances: I,
					parsedAmount: g,
					v2Trade: null !== T && void 0 !== T ? T : void 0,
					inputError: a
				}
			}

			function Rs(e) {
				if ("string" === typeof e) {
					var n = fn(e);
					if (n) return n;
					if ("ETH" === e.toUpperCase()) return "ETH";
					if (!1 === n) return "ETH"
				}
				return null !== "ETH" ? "ETH" : ""
			}
			var Ss = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
				Us = /^0x[a-fA-F0-9]{40}$/;

			function As(e) {
				var n, t = Rs(e.inputCurrency),
					r = Rs(e.outputCurrency);
				t === r && ("string" === typeof e.outputCurrency ? t = "" : r = "");
				var i, a = function(e) {
					return "string" !== typeof e ? null : fn(e) || (Ss.test(e) || Us.test(e) ? e : null)
				}(e.recipient);
				return n = {}, Object(w.a)(n, Go.INPUT, {
					currencyId: t
				}), Object(w.a)(n, Go.OUTPUT, {
					currencyId: r
				}), Object(w.a)(n, "typedValue", "string" !== typeof(i = e.exactAmount) || isNaN(parseFloat(i)) ? "" : i), Object(w.a)(n, "independentField", function(e) {
					return "string" === typeof e && "output" === e.toLowerCase() ? Go.OUTPUT : Go.INPUT
				}(e.exactField)), Object(w.a)(n, "recipient", a), n
			}

			function Ps() {
				var e = ge().chainId,
					n = Object(x.c)(),
					t = function() {
						var e = Object(y.g)().search;
						return Object(i.useMemo)((function() {
							return e && e.length > 1 ? Object(ws.parse)(e, {
								parseArrays: !1,
								ignoreQueryPrefix: !0
							}) : {}
						}), [e])
					}(),
					r = Object(i.useState)(),
					a = Object(v.a)(r, 2),
					c = a[0],
					o = a[1];
				return Object(i.useEffect)((function() {
					if (e) {
						var r = As(t);
						n(Zo({
							typedValue: r.typedValue,
							field: r.independentField,
							inputCurrencyId: r[Go.INPUT].currencyId,
							outputCurrencyId: r[Go.OUTPUT].currencyId,
							recipient: r.recipient
						})), o({
							inputCurrencyId: r[Go.INPUT].currencyId,
							outputCurrencyId: r[Go.OUTPUT].currencyId
						})
					}
				}), [n, e]), c
			}
			var Ms = $.e.BigInt(0);

			function Bs() {
				return Object(x.d)((function(e) {
					return e.mint
				}))
			}

			function Ls(e) {
				if (e) return e.currency === $.d ? $.e.greaterThan(e.raw, xe) ? $.c.ether($.e.subtract(e.raw, xe)) : $.c.ether($.e.BigInt(0)) : e
			}

			function _s() {
				var e = Object(u.a)(["\n  border: 2px solid ", ";\n  border-radius: 16px;\n  padding: 16px;\n"]);
				return _s = function() {
					return e
				}, e
			}
			var Ds = l.default.div(_s(), (function(e) {
					return e.theme.colors.borderColor
				})),
				Ys = function(e) {
					var n = Zt(),
						t = Object(g.c)(),
						i = t.account,
						a = t.activate,
						c = t.deactivate,
						o = Object(s.D)((function(e) {
							var n = G[e];
							n && a(n)
						}), c, i).onPresentConnectModal;
					return Object(r.jsx)(s.c, Object(X.a)(Object(X.a)({
						onClick: o
					}, e), {}, {
						children: n(292, "Unlock Wallet")
					}))
				};

			function zs() {
				var e = Object(u.a)(["\n  position: relative;\n  max-width: 436px;\n  width: 100%;\n  z-index: 5;\n  box-shadow:rgb(255 255 255 / 40%) 0px 2px 4px, rgb(255 255 255 / 30%) 0px 7px 13px -3px, rgb(255 255 255 / 20%) 0px -3px 0px inset;\n"]);
				return zs = function() {
					return e
				}, e
			}
			var Fs = Object(l.default)(s.f)(zs());

			function qs(e) {
				var n = e.children;
				return Object(r.jsx)(Fs, {
					children: n
				})
			}

			function Vs() {
				var e = Object(u.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]);
				return Vs = function() {
					return e
				}, e
			}

			function Ws() {
				var e = Object(u.a)(["\n  :hover {\n    cursor: pointer;\n  }\n  color: ", ";\n"]);
				return Ws = function() {
					return e
				}, e
			}

			function Hs() {
				var e = Object(u.a)(["\n  position: relative;\n"]);
				return Hs = function() {
					return e
				}, e
			}
			var Qs = l.default.div(Hs()),
				Ks = Object(l.default)(s.y)(Ws(), (function(e) {
					return e.theme.colors.primary
				})),
				Gs = l.default.span(Vs());

			function Js(e) {
				var n, t, i, a, c, o, u, l, d = e.noLiquidity,
					b = e.price,
					p = e.currencies,
					f = e.parsedAmounts,
					j = e.poolTokenPercentage,
					h = e.onAdd;
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsxs)(en, {
						children: [Object(r.jsxs)(s.y, {
							children: [null === (n = p[us.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol, " Deposited"]
						}), Object(r.jsxs)(rn, {
							children: [Object(r.jsx)(ha, {
								currency: p[us.CURRENCY_A],
								style: {
									marginRight: "8px"
								}
							}), Object(r.jsx)(s.y, {
								children: null === (t = f[us.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(6)
							})]
						})]
					}), Object(r.jsxs)(en, {
						children: [Object(r.jsxs)(s.y, {
							children: [null === (i = p[us.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol, " Deposited"]
						}), Object(r.jsxs)(rn, {
							children: [Object(r.jsx)(ha, {
								currency: p[us.CURRENCY_B],
								style: {
									marginRight: "8px"
								}
							}), Object(r.jsx)(s.y, {
								children: null === (a = f[us.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(6)
							})]
						})]
					}), Object(r.jsxs)(en, {
						children: [Object(r.jsx)(s.y, {
							children: "Rates"
						}), Object(r.jsx)(s.y, {
							children: "1 ".concat(null === (c = p[us.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, " = ").concat(null === b || void 0 === b ? void 0 : b.toSignificant(4), " ").concat(null === (o = p[us.CURRENCY_B]) || void 0 === o ? void 0 : o.symbol)
						})]
					}), Object(r.jsx)(en, {
						style: {
							justifyContent: "flex-end"
						},
						children: Object(r.jsx)(s.y, {
							children: "1 ".concat(null === (u = p[us.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol, " = ").concat(null === b || void 0 === b ? void 0 : b.invert().toSignificant(4), " ").concat(null === (l = p[us.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol)
						})
					}), Object(r.jsxs)(en, {
						children: [Object(r.jsx)(s.y, {
							children: "Share of Pool:"
						}), Object(r.jsxs)(s.y, {
							children: [d ? "100" : null === j || void 0 === j ? void 0 : j.toSignificant(4), "%"]
						})]
					}), Object(r.jsx)(s.c, {
						mt: "20px",
						onClick: h,
						children: d ? $t(250, "Create Pool & Supply") : $t(252, "Confirm Supply")
					})]
				})
			}

			function Xs(e) {
				var n, t, i, a, c, o, u, l, d = e.currencies,
					b = e.noLiquidity,
					p = e.poolTokenPercentage,
					f = e.price;
				return Object(r.jsx)(Be, {
					gap: "md",
					children: Object(r.jsxs)(tn, {
						justify: "space-around",
						gap: "4px",
						children: [Object(r.jsxs)(Be, {
							justify: "center",
							children: [Object(r.jsx)(s.y, {
								children: null !== (n = null === f || void 0 === f ? void 0 : f.toSignificant(6)) && void 0 !== n ? n : "-"
							}), Object(r.jsxs)(s.y, {
								fontSize: "14px",
								color: "textSubtle",
								pt: 1,
								children: [null === (t = d[us.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol, " per ", null === (i = d[us.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol]
							})]
						}), Object(r.jsxs)(Be, {
							justify: "center",
							children: [Object(r.jsx)(s.y, {
								children: null !== (a = null === f || void 0 === f || null === (c = f.invert()) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== a ? a : "-"
							}), Object(r.jsxs)(s.y, {
								fontSize: "14px",
								color: "textSubtle",
								pt: 1,
								children: [null === (o = d[us.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " per ", null === (u = d[us.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol]
							})]
						}), Object(r.jsxs)(Be, {
							justify: "center",
							children: [Object(r.jsxs)(s.y, {
								children: [b && f ? "100" : null !== (l = (null === p || void 0 === p ? void 0 : p.lessThan(fe)) ? "<0.01" : null === p || void 0 === p ? void 0 : p.toFixed(2)) && void 0 !== l ? l : "0", "%"]
							}), Object(r.jsx)(s.y, {
								fontSize: "14px",
								color: "textSubtle",
								pt: 1,
								children: "Share of Pool"
							})]
						})]
					})
				})
			}

			function $s(e) {
				var n, t, a, c, o, u, l, d, b, p, f, m = e.match.params,
					y = m.currencyIdA,
					O = m.currencyIdB,
					g = e.history,
					C = ge(),
					k = C.account,
					T = C.chainId,
					I = C.library,
					E = mi(y),
					N = mi(O),
					R = Zt(),
					S = Boolean(T && (E && Object($.o)(E, $.n[T]) || N && Object($.o)(N, $.n[T]))),
					U = Jr(),
					A = Bs(),
					P = A.independentField,
					M = A.typedValue,
					B = A.otherTypedValue,
					L = function(e, n) {
						var t, r, a, c, o, s, u, l = ge(),
							d = l.account,
							b = l.chainId,
							p = Bs(),
							f = p.independentField,
							j = p.typedValue,
							h = p.otherTypedValue,
							m = f === us.CURRENCY_A ? us.CURRENCY_B : us.CURRENCY_A,
							y = Object(i.useMemo)((function() {
								var t;
								return t = {}, Object(w.a)(t, us.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(w.a)(t, us.CURRENCY_B, null !== n && void 0 !== n ? n : void 0), t
							}), [e, n]),
							O = Ho(y[us.CURRENCY_A], y[us.CURRENCY_B]),
							x = Object(v.a)(O, 2),
							g = x[0],
							C = x[1],
							k = uo(null === C || void 0 === C ? void 0 : C.liquidityToken),
							T = g === qo.NOT_EXISTS || Boolean(k && $.e.equal(k.raw, Ms)),
							I = Ci(null !== d && void 0 !== d ? d : void 0, [y[us.CURRENCY_A], y[us.CURRENCY_B]]),
							E = (t = {}, Object(w.a)(t, us.CURRENCY_A, I[0]), Object(w.a)(t, us.CURRENCY_B, I[1]), t),
							N = Ts(j, y[f]),
							R = Object(i.useMemo)((function() {
								if (T) return h && y[m] ? Ts(h, y[m]) : void 0;
								if (N) {
									var t = po(N, b),
										r = [bo(e, b), bo(n, b)],
										i = r[0],
										a = r[1];
									if (i && a && t && C) {
										var c = m === us.CURRENCY_B ? n : e,
											o = m === us.CURRENCY_B ? C.priceOf(i).quote(t) : C.priceOf(a).quote(t);
										return c === $.d ? $.c.ether(o.raw) : o
									}
								}
							}), [T, h, y, m, N, e, b, n, C]),
							S = (r = {}, Object(w.a)(r, us.CURRENCY_A, f === us.CURRENCY_A ? N : R), Object(w.a)(r, us.CURRENCY_B, f === us.CURRENCY_A ? R : N), r),
							U = Object(i.useMemo)((function() {
								if (T) {
									var n = S[us.CURRENCY_A],
										t = S[us.CURRENCY_B];
									return n && t ? new $.h(n.currency, t.currency, n.raw, t.raw) : void 0
								}
								var r = bo(e, b);
								return C && r ? C.priceOf(r) : void 0
							}), [b, e, T, C, S]),
							A = Object(i.useMemo)((function() {
								var e = S[us.CURRENCY_A],
									n = S[us.CURRENCY_B],
									t = [po(e, b), po(n, b)],
									r = t[0],
									i = t[1];
								if (C && k && r && i) return C.getLiquidityMinted(k, r, i)
							}), [S, b, C, k]),
							P = Object(i.useMemo)((function() {
								if (A && k) return new $.g(A.raw, k.add(A).raw)
							}), [A, k]);
						d || (o = "Connect Wallet"), g === qo.INVALID && (o = null !== (s = o) && void 0 !== s ? s : $t(136, "Invalid pair")), S[us.CURRENCY_A] && S[us.CURRENCY_B] || (o = null !== (u = o) && void 0 !== u ? u : $t(84, "Enter an amount"));
						var M, B, L = S[us.CURRENCY_A],
							_ = S[us.CURRENCY_B];
						return L && (null === E || void 0 === E || null === (a = E[us.CURRENCY_A]) || void 0 === a ? void 0 : a.lessThan(L)) && (o = "Insufficient ".concat(null === (M = y[us.CURRENCY_A]) || void 0 === M ? void 0 : M.symbol, " balance")), _ && (null === E || void 0 === E || null === (c = E[us.CURRENCY_B]) || void 0 === c ? void 0 : c.lessThan(_)) && (o = "Insufficient ".concat(null === (B = y[us.CURRENCY_B]) || void 0 === B ? void 0 : B.symbol, " balance")), {
							dependentField: m,
							currencies: y,
							pair: C,
							pairState: g,
							currencyBalances: E,
							parsedAmounts: S,
							price: U,
							noLiquidity: T,
							liquidityMinted: A,
							poolTokenPercentage: P,
							error: o
						}
					}(null !== E && void 0 !== E ? E : void 0, null !== N && void 0 !== N ? N : void 0),
					_ = L.dependentField,
					D = L.currencies,
					Y = L.pair,
					z = L.pairState,
					F = L.currencyBalances,
					q = L.parsedAmounts,
					V = L.price,
					W = L.noLiquidity,
					H = L.liquidityMinted,
					Q = L.poolTokenPercentage,
					K = L.error,
					G = function(e) {
						var n = Object(x.c)();
						return {
							onFieldAInput: Object(i.useCallback)((function(t) {
								n(ms({
									field: us.CURRENCY_A,
									typedValue: t,
									noLiquidity: !0 === e
								}))
							}), [n, e]),
							onFieldBInput: Object(i.useCallback)((function(t) {
								n(ms({
									field: us.CURRENCY_B,
									typedValue: t,
									noLiquidity: !0 === e
								}))
							}), [n, e])
						}
					}(W),
					ee = G.onFieldAInput,
					ne = G.onFieldBInput,
					te = !K,
					re = Object(i.useState)(!1),
					ie = Object(v.a)(re, 2),
					ae = ie[0],
					ce = ie[1],
					oe = Object(i.useState)(!1),
					se = Object(v.a)(oe, 2),
					ue = se[0],
					le = se[1],
					de = $r(),
					be = Object(v.a)(de, 1)[0],
					pe = Xr(),
					fe = Object(v.a)(pe, 1)[0],
					je = Object(i.useState)(""),
					he = Object(v.a)(je, 2),
					ve = he[0],
					me = he[1],
					ye = (a = {}, Object(w.a)(a, P, M), Object(w.a)(a, _, W ? B : null !== (n = null === (t = q[_]) || void 0 === t ? void 0 : t.toSignificant(6)) && void 0 !== n ? n : ""), a),
					Oe = [us.CURRENCY_A, us.CURRENCY_B].reduce((function(e, n) {
						return Object(X.a)(Object(X.a)({}, e), {}, Object(w.a)({}, n, Ls(F[n])))
					}), {}),
					xe = [us.CURRENCY_A, us.CURRENCY_B].reduce((function(e, n) {
						var t, r;
						return Object(X.a)(Object(X.a)({}, e), {}, Object(w.a)({}, n, null === (t = Oe[n]) || void 0 === t ? void 0 : t.equalTo(null !== (r = q[n]) && void 0 !== r ? r : "0")))
					}), {}),
					Ce = vs(q[us.CURRENCY_A], Z),
					we = Object(v.a)(Ce, 2),
					ke = we[0],
					Te = we[1],
					Ie = vs(q[us.CURRENCY_B], Z),
					Ee = Object(v.a)(Ie, 2),
					Ne = Ee[0],
					Re = Ee[1],
					Se = as();

				function Ue() {
					return Ae.apply(this, arguments)
				}

				function Ae() {
					return (Ae = Object(h.a)(j.a.mark((function e() {
						var n, t, r, i, a, c, o, s, u, l, d, b, p, f, h, v, m;
						return j.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (T && I && k) {
										e.next = 2;
										break
									}
									return e.abrupt("return");
								case 2:
									if (t = xn(0, I, k), r = q[us.CURRENCY_A], i = q[us.CURRENCY_B], r && i && E && N) {
										e.next = 6;
										break
									}
									return e.abrupt("return");
								case 6:
									return n = {}, Object(w.a)(n, us.CURRENCY_A, yn(r, W ? 0 : fe)[0]), Object(w.a)(n, us.CURRENCY_B, yn(i, W ? 0 : fe)[0]), a = n, c = Math.ceil(Date.now() / 1e3) + be, E === $.d || N === $.d ? (p = N === $.d, o = t.estimateGas.addLiquidityETH, s = t.addLiquidityETH, u = [null !== (d = null === (b = bo(p ? E : N, T)) || void 0 === b ? void 0 : b.address) && void 0 !== d ? d : "", (p ? r : i).raw.toString(), a[p ? us.CURRENCY_A : us.CURRENCY_B].toString(), a[p ? us.CURRENCY_B : us.CURRENCY_A].toString(), k, c], l = bn.a.from((p ? i : r).raw.toString())) : (o = t.estimateGas.addLiquidity, s = t.addLiquidity, u = [null !== (f = null === (h = bo(E, T)) || void 0 === h ? void 0 : h.address) && void 0 !== f ? f : "", null !== (v = null === (m = bo(N, T)) || void 0 === m ? void 0 : m.address) && void 0 !== v ? v : "", r.raw.toString(), i.raw.toString(), a[us.CURRENCY_A].toString(), a[us.CURRENCY_B].toString(), k, c], l = null), le(!0), e.next = 12, o.apply(void 0, Object(J.a)(u).concat([l ? {
										value: l
									} : {}])).then((function(e) {
										return s.apply(void 0, Object(J.a)(u).concat([Object(X.a)(Object(X.a)({}, l ? {
											value: l
										} : {}), {}, {
											gasLimit: mn(e)
										})])).then((function(e) {
											var n, t, r, i;
											le(!1), Se(e, {
												summary: "Add ".concat(null === (n = q[us.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === (t = D[us.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, " and ").concat(null === (r = q[us.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(3), " ").concat(null === (i = D[us.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol)
											}), me(e.hash)
										}))
									})).catch((function(e) {
										le(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
									}));
								case 12:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}
				var Pe = function() {
						var e, n, t, i;
						return W ? Object(r.jsx)(Be, {
							gap: "20px",
							children: Object(r.jsx)(ft, {
								mt: "20px",
								borderRadius: "20px",
								children: Object(r.jsxs)(nn, {
									children: [Object(r.jsx)(s.y, {
										fontSize: "48px",
										mr: "8px",
										children: "".concat(null === (e = D[us.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol, "/").concat(null === (n = D[us.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol)
									}), Object(r.jsx)(Mc, {
										currency0: D[us.CURRENCY_A],
										currency1: D[us.CURRENCY_B],
										size: 30
									})]
								})
							})
						}) : Object(r.jsxs)(Be, {
							gap: "20px",
							children: [Object(r.jsxs)(nn, {
								style: {
									marginTop: "20px"
								},
								children: [Object(r.jsx)(s.y, {
									fontSize: "48px",
									mr: "8px",
									children: null === H || void 0 === H ? void 0 : H.toSignificant(6)
								}), Object(r.jsx)(Mc, {
									currency0: D[us.CURRENCY_A],
									currency1: D[us.CURRENCY_B],
									size: 30
								})]
							}), Object(r.jsx)(an, {
								children: Object(r.jsx)(s.y, {
									fontSize: "24px",
									children: "".concat(null === (t = D[us.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol, "/").concat(null === (i = D[us.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol, " Pool Tokens")
								})
							}), Object(r.jsx)(s.y, {
								small: !0,
								textAlign: "left",
								padding: "8px 0 0 0 ",
								style: {
									fontStyle: "italic"
								},
								children: "Output is estimated. If the price changes by more than ".concat(fe / 100, "% your transaction will revert.")
							})]
						})
					},
					Le = function() {
						return Object(r.jsx)(Js, {
							price: V,
							currencies: D,
							parsedAmounts: q,
							noLiquidity: W,
							onAdd: Ue,
							poolTokenPercentage: Q
						})
					},
					_e = "Supplying ".concat(null === (c = q[us.CURRENCY_A]) || void 0 === c ? void 0 : c.toSignificant(6), " ").concat(null === (o = D[us.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " and ").concat(null === (u = q[us.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(6), " ").concat(null === (l = D[us.CURRENCY_B]) || void 0 === l ? void 0 : l.symbol),
					De = Object(i.useCallback)((function(e) {
						var n = lo(e);
						n === O ? g.push("/add/".concat(O, "/").concat(y)) : g.push("/add/".concat(n, "/").concat(O))
					}), [O, g, y]),
					Ye = Object(i.useCallback)((function(e) {
						var n = lo(e);
						y === n ? O ? g.push("/add/".concat(O, "/").concat(n)) : g.push("/add/".concat(n)) : g.push("/add/".concat(y || "ETH", "/").concat(n))
					}), [y, g, O]),
					ze = Object(i.useCallback)((function() {
						ce(!1), ve && ee(""), me("")
					}), [ee, ve]);
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsx)(rr, {
						activeIndex: 1
					}), Object(r.jsxs)(qs, {
						children: [Object(r.jsx)(co, {
							adding: !0
						}), Object(r.jsxs)(Qs, {
							children: [Object(r.jsx)(Qt, {
								isOpen: ae,
								onDismiss: ze,
								attemptingTxn: ue,
								hash: ve,
								content: function() {
									return Object(r.jsx)(Vt, {
										title: W ? R(1154, "You are creating a pool") : R(1156, "You will receive"),
										onDismiss: ze,
										topContent: Pe,
										bottomContent: Le
									})
								},
								pendingText: _e
							}), Object(r.jsx)(s.g, {
								children: Object(r.jsxs)(Be, {
									gap: "20px",
									children: [W && Object(r.jsx)(Me, {
										children: Object(r.jsx)(Ds, {
											children: Object(r.jsxs)(Be, {
												gap: "12px",
												children: [Object(r.jsx)(s.y, {
													children: R(1158, "You are the first liquidity provider.")
												}), Object(r.jsx)(s.y, {
													children: R(1160, "The ratio of tokens you add will set the price of this pool.")
												}), Object(r.jsx)(s.y, {
													children: R(1162, "Once you are happy with the rate click supply to review.")
												})]
											})
										})
									}), Object(r.jsx)($c, {
										value: ye[us.CURRENCY_A],
										onUserInput: ee,
										onMax: function() {
											var e, n;
											ee(null !== (e = null === (n = Oe[us.CURRENCY_A]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
										},
										onCurrencySelect: De,
										showMaxButton: !xe[us.CURRENCY_A],
										currency: D[us.CURRENCY_A],
										id: "add-liquidity-input-tokena",
										showCommonBases: !1
									}), Object(r.jsx)(Me, {
										children: Object(r.jsx)(s.a, {
											color: "textSubtle"
										})
									}), Object(r.jsx)($c, {
										value: ye[us.CURRENCY_B],
										onUserInput: ne,
										onCurrencySelect: Ye,
										onMax: function() {
											var e, n;
											ne(null !== (e = null === (n = Oe[us.CURRENCY_B]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== e ? e : "")
										},
										showMaxButton: !xe[us.CURRENCY_B],
										currency: D[us.CURRENCY_B],
										id: "add-liquidity-input-tokenb",
										showCommonBases: !1
									}), D[us.CURRENCY_A] && D[us.CURRENCY_B] && z !== qo.INVALID && Object(r.jsxs)("div", {
										children: [Object(r.jsx)(s.y, {
											style: {
												textTransform: "uppercase",
												fontWeight: 600
											},
											color: "textSubtle",
											fontSize: "12px",
											mb: "2px",
											children: W ? R(1164, "Initial prices and pool share") : R(1166, "Prices and pool share")
										}), Object(r.jsx)(Ds, {
											children: Object(r.jsx)(Xs, {
												currencies: D,
												poolTokenPercentage: Q,
												noLiquidity: W,
												price: V
											})
										})]
									}), k ? Object(r.jsxs)(Be, {
										gap: "md",
										children: [(ke === ss.NOT_APPROVED || ke === ss.PENDING || Ne === ss.NOT_APPROVED || Ne === ss.PENDING) && te && Object(r.jsxs)(en, {
											children: [ke !== ss.APPROVED && Object(r.jsx)(s.c, {
												onClick: Te,
												disabled: ke === ss.PENDING,
												style: {
													width: Ne !== ss.APPROVED ? "48%" : "100%"
												},
												children: ke === ss.PENDING ? Object(r.jsxs)(Gs, {
													children: ["Approving ", null === (d = D[us.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol]
												}) : "Approve ".concat(null === (b = D[us.CURRENCY_A]) || void 0 === b ? void 0 : b.symbol)
											}), Ne !== ss.APPROVED && Object(r.jsx)(s.c, {
												onClick: Re,
												disabled: Ne === ss.PENDING,
												style: {
													width: ke !== ss.APPROVED ? "48%" : "100%"
												},
												children: Ne === ss.PENDING ? Object(r.jsxs)(Gs, {
													children: ["Approving ", null === (p = D[us.CURRENCY_B]) || void 0 === p ? void 0 : p.symbol]
												}) : "Approve ".concat(null === (f = D[us.CURRENCY_B]) || void 0 === f ? void 0 : f.symbol)
											})]
										}), Object(r.jsx)(s.c, {
											onClick: function() {
												U ? Ue() : ce(!0)
											},
											disabled: !te || ke !== ss.APPROVED || Ne !== ss.APPROVED,
											variant: !te && q[us.CURRENCY_A] && q[us.CURRENCY_B] ? "danger" : "primary",
											width: "100%",
											children: null !== K && void 0 !== K ? K : "Supply"
										})]
									}) : Object(r.jsx)(Ys, {
										width: "100%"
									})]
								})
							})]
						})]
					}), Y && !W && z !== qo.INVALID ? Object(r.jsx)(Be, {
						style: {
							minWidth: "20rem",
							marginTop: "1rem"
						},
						children: Object(r.jsx)(zo, {
							showUnwrapped: S,
							pair: Y
						})
					}) : null]
				})
			}
			var Zs = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

			function eu(e) {
				var n = e.match.params.currencyIdA.match(Zs);
				return (null === n || void 0 === n ? void 0 : n.length) ? Object(r.jsx)(y.a, {
					to: "/add/".concat(n[1], "/").concat(n[2])
				}) : Object(r.jsx)($s, Object(X.a)({}, e))
			}

			function nu(e) {
				var n = e.match.params,
					t = n.currencyIdA,
					i = n.currencyIdB;
				return t.toLowerCase() === i.toLowerCase() ? Object(r.jsx)(y.a, {
					to: "/add/".concat(t)
				}) : Object(r.jsx)($s, Object(X.a)({}, e))
			}
			var tu = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/;

			function ru(e) {
				var n = e.match.params.tokens;
				if (!tu.test(n)) return Object(r.jsx)(y.a, {
					to: "/pool"
				});
				var t = n.split("-"),
					i = Object(v.a)(t, 2),
					a = i[0],
					c = i[1];
				return Object(r.jsx)(y.a, {
					to: "/remove/".concat(a, "/").concat(c)
				})
			}

			function iu() {
				var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]);
				return iu = function() {
					return e
				}, e
			}

			function au() {
				var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n\n  ", ":first-child {\n    padding-left: 0;\n  }\n\n  ", ":last-child {\n    padding-right: 0;\n  }\n\n  ", " {\n    flex-direction: row;\n  }\n"]);
				return au = function() {
					return e
				}, e
			}

			function cu() {
				var e = Object(u.a)(["\n  padding: 0 4px;\n"]);
				return cu = function() {
					return e
				}, e
			}

			function ou() {
				var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
				return ou = function() {
					return e
				}, e
			}
			var su = l.default.div(ou()),
				uu = l.default.div(cu()),
				lu = l.default.div(au(), uu, uu, (function(e) {
					return e.theme.mediaQueries.sm
				})),
				du = l.default.div(iu()),
				bu = [{
					label: "0.1%",
					value: .1
				}, {
					label: "0.5%",
					value: .5
				}, {
					label: "1%",
					value: 1
				}],
				pu = function() {
					var e = Zt(),
						n = Xr(),
						t = Object(v.a)(n, 2),
						a = t[0],
						c = t[1],
						o = Object(i.useState)(a / 100),
						u = Object(v.a)(o, 2),
						l = u[0],
						d = u[1],
						b = Object(i.useState)(null),
						p = Object(v.a)(b, 2),
						f = p[0],
						j = p[1];
					return Object(i.useEffect)((function() {
						try {
							var n = 100 * l;
							!Number.isNaN(n) && n > 0 && n < 5e3 ? (c(n), j(null)) : j(e(1144, "Enter a valid slippage percentage"))
						} catch (t) {
							j(e(1144, "Enter a valid slippage percentage"))
						}
					}), [l, j, c, e]), Object(i.useEffect)((function() {
						a < 50 ? j(e(1146, "Your transaction may fail")) : a > 500 && j(e(1148, "Your transaction may be frontrun"))
					}), [a, j, e]), Object(r.jsxs)(su, {
						children: [Object(r.jsxs)(du, {
							children: [Object(r.jsx)(s.y, {
								style: {
									fontWeight: 600
								},
								children: e(88, "Slippage tolerance")
							}), Object(r.jsx)(sa, {
								text: e(186, "Your transaction will revert if the price changes unfavorably by more than this percentage.")
							})]
						}), Object(r.jsxs)(lu, {
							children: [Object(r.jsx)(s.n, {
								mb: ["8px", 0],
								mr: [0, "8px"],
								children: bu.map((function(e) {
									var n = e.label,
										t = e.value;
									return Object(r.jsx)(uu, {
										children: Object(r.jsx)(s.c, {
											variant: l === t ? "primary" : "tertiary",
											onClick: function() {
												return d(t)
											},
											children: n
										})
									}, t)
								}))
							}), Object(r.jsxs)(s.n, {
								alignItems: "center",
								children: [Object(r.jsx)(uu, {
									children: Object(r.jsx)(s.q, {
										type: "number",
										scale: "lg",
										step: .1,
										min: .1,
										placeholder: "5%",
										value: l,
										onChange: function(e) {
											var n = e.target.value;
											d(parseFloat(n))
										},
										isWarning: null !== f
									})
								}), Object(r.jsx)(uu, {
									children: Object(r.jsx)(s.y, {
										fontSize: "18px",
										children: "%"
									})
								})]
							})]
						}), f && Object(r.jsx)(s.y, {
							mt: "8px",
							color: "failure",
							children: f
						})]
					})
				};

			function fu() {
				var e = Object(u.a)(["\n  align-items: center;\n  display: inline-flex;\n\n  & > ", " {\n    max-width: 100px;\n  }\n\n  & > ", " {\n    font-size: 14px;\n    margin-left: 8px;\n  }\n"]);
				return fu = function() {
					return e
				}, e
			}

			function ju() {
				var e = Object(u.a)(["\n  align-items: center;\n  display: flex;\n  margin-bottom: 8px;\n"]);
				return ju = function() {
					return e
				}, e
			}

			function hu() {
				var e = Object(u.a)(["\n  margin-bottom: 16px;\n"]);
				return hu = function() {
					return e
				}, e
			}
			var vu = l.default.div(hu()),
				mu = l.default.div(ju()),
				yu = l.default.div(fu(), s.q, s.y),
				Ou = function() {
					var e = Zt(),
						n = $r(),
						t = Object(v.a)(n, 2),
						a = t[0],
						c = t[1],
						o = Object(i.useState)(a / 60),
						u = Object(v.a)(o, 2),
						l = u[0],
						d = u[1],
						b = Object(i.useState)(null),
						p = Object(v.a)(b, 2),
						f = p[0],
						j = p[1];
					return Object(i.useEffect)((function() {
						try {
							var n = 60 * l;
							!Number.isNaN(n) && n > 0 ? (c(n), j(null)) : j(e(1150, "Enter a valid deadline"))
						} catch (t) {
							j(e(1150, "Enter a valid deadline"))
						}
					}), [l, j, c, e]), Object(r.jsxs)(vu, {
						children: [Object(r.jsxs)(mu, {
							children: [Object(r.jsx)(s.y, {
								style: {
									fontWeight: 600
								},
								children: e(90, "Transaction deadline")
							}), Object(r.jsx)(sa, {
								text: e(188, "Your transaction will revert if it is pending for more than this long.")
							})]
						}), Object(r.jsxs)(yu, {
							children: [Object(r.jsx)(s.q, {
								type: "number",
								step: "1",
								min: "1",
								value: l,
								onChange: function(e) {
									var n = e.target.value;
									d(parseInt(n, 10))
								}
							}), Object(r.jsx)(s.y, {
								children: "Minutes"
							})]
						}), f && Object(r.jsx)(s.y, {
							mt: "8px",
							color: "failure",
							children: f
						})]
					})
				},
				xu = function() {
					return null
				},
				gu = function(e) {
					var n = e.onDismiss,
						t = void 0 === n ? xu : n;
					return Object(r.jsxs)(s.t, {
						title: "Settings",
						onDismiss: t,
						children: [Object(r.jsx)(pu, {}), Object(r.jsx)(Ou, {})]
					})
				},
				Cu = function() {
					return null
				},
				wu = function(e, n) {
					return n.addedTime - e.addedTime
				},
				ku = function(e) {
					var n = e.onDismiss,
						t = void 0 === n ? Cu : n,
						a = ge(),
						c = a.account,
						o = a.chainId,
						u = cs(),
						l = Object(i.useMemo)((function() {
							return Object.values(u).filter(os).sort(wu)
						}), [u]);
					return Object(r.jsxs)(s.t, {
						title: "Recent Transactions",
						onDismiss: t,
						children: [!c && Object(r.jsxs)(s.n, {
							justifyContent: "center",
							flexDirection: "column",
							alignItems: "center",
							children: [Object(r.jsx)(s.y, {
								mb: "8px",
								bold: !0,
								children: "Please connect your wallet to view your recent transactions"
							}), Object(r.jsx)(s.c, {
								variant: "tertiary",
								scale: "sm",
								onClick: t,
								children: "Close"
							})]
						}), c && o && 0 === l.length && Object(r.jsxs)(s.n, {
							justifyContent: "center",
							flexDirection: "column",
							alignItems: "center",
							children: [Object(r.jsx)(s.y, {
								mb: "8px",
								bold: !0,
								children: "No recent transactions"
							}), Object(r.jsx)(s.c, {
								variant: "tertiary",
								scale: "sm",
								onClick: t,
								children: "Close"
							})]
						}), c && o && l.map((function(e) {
							var n = e.hash,
								t = e.summary,
								i = function(e) {
									var n = e.hash,
										t = e.receipt;
									return n ? n && 1 === (null === t || void 0 === t ? void 0 : t.status) ? {
										icon: Object(r.jsx)(s.h, {
											color: "success"
										}),
										color: "success"
									} : {
										icon: Object(r.jsx)(s.m, {
											color: "failure"
										}),
										color: "failure"
									} : {
										icon: Object(r.jsx)(rt, {}),
										color: "text"
									}
								}(e),
								a = i.icon,
								c = i.color;
							return Object(r.jsx)(r.Fragment, {
								children: Object(r.jsxs)(s.n, {
									alignItems: "center",
									justifyContent: "space-between",
									mb: "4px",
									children: [Object(r.jsx)(s.r, {
										href: hn(o, n, "transaction"),
										color: c,
										children: null !== t && void 0 !== t ? t : n
									}), a]
								}, n)
							})
						}))]
					})
				};

			function Tu() {
				var e = Object(u.a)(["\n  flex: 1;\n"]);
				return Tu = function() {
					return e
				}, e
			}

			function Iu() {
				var e = Object(u.a)(["\n  border-bottom: 1px solid ", ";\n  padding: 24px;\n"]);
				return Iu = function() {
					return e
				}, e
			}
			var Eu, Nu = function() {
					return Object(r.jsx)(s.w, {
						width: "24",
						height: "24",
						viewBox: "0 0 24 24",
						children: Object(r.jsx)("path", {
							d: "M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z",
							fill: "currentColor"
						})
					})
				},
				Ru = l.default.div(Iu(), (function(e) {
					return e.theme.colors.borderColor
				})),
				Su = l.default.div(Tu()),
				Uu = function(e) {
					var n = e.title,
						t = e.description,
						i = e.children,
						a = Object(s.C)(Object(r.jsx)(gu, {})),
						c = Object(v.a)(a, 1)[0],
						o = Object(s.C)(Object(r.jsx)(ku, {})),
						u = Object(v.a)(o, 1)[0],
						l = Zt();
					return Object(r.jsxs)(Ru, {
						children: [Object(r.jsxs)(s.n, {
							alignItems: "center",
							children: [Object(r.jsxs)(Su, {
								children: [Object(r.jsx)(s.o, {
									mb: "8px",
									children: n
								}), t && Object(r.jsx)(s.y, {
									color: "textSubtle",
									fontSize: "14px",
									children: t
								})]
							}), Object(r.jsx)(s.p, {
								variant: "text",
								onClick: c,
								title: l(1200, "Settings"),
								children: Object(r.jsx)(s.k, {
									width: "24px",
									color: "currentColor"
								})
							}), Object(r.jsx)(s.p, {
								variant: "text",
								onClick: u,
								title: l(1202, "Recent transactions"),
								children: Object(r.jsx)(Nu, {})
							})]
						}), i && Object(r.jsx)(s.y, {
							mt: "16px",
							children: i
						})]
					})
				};

			function Au() {
				var e = Object(i.useContext)(l.ThemeContext),
					n = ge().account,
					t = Zt(),
					a = function() {
						var e = ge().chainId,
							n = fi(),
							t = Object(i.useMemo)((function() {
								var n;
								return e && null !== (n = le[e]) && void 0 !== n ? n : []
							}), [e]),
							r = Object(i.useMemo)((function() {
								return e ? Mr()(Object.keys(n), (function(t) {
									var r, i = n[t];
									return (null !== (r = ue[e]) && void 0 !== r ? r : []).map((function(e) {
										return e.address === i.address ? null : [e, i]
									})).filter((function(e) {
										return null !== e
									}))
								})) : []
							}), [n, e]),
							a = Object(x.d)((function(e) {
								return e.user.pairs
							})),
							c = Object(i.useMemo)((function() {
								if (!e || !a) return [];
								var n = a[e];
								return n ? Object.keys(n).map((function(e) {
									return [Gr(n[e].token0), Gr(n[e].token1)]
								})) : []
							}), [a, e]),
							o = Object(i.useMemo)((function() {
								return c.concat(r).concat(t)
							}), [r, t, c]);
						return Object(i.useMemo)((function() {
							var e = o.reduce((function(e, n) {
								var t = Object(v.a)(n, 2),
									r = t[0],
									i = t[1],
									a = r.sortsBefore(i),
									c = a ? "".concat(r.address, ":").concat(i.address) : "".concat(i.address, ":").concat(r.address);
								return e[c] || (e[c] = a ? [r, i] : [i, r]), e
							}), {});
							return Object.keys(e).map((function(n) {
								return e[n]
							}))
						}), [o])
					}(),
					c = Object(i.useMemo)((function() {
						return a.map((function(e) {
							return {
								liquidityToken: ni(e),
								tokens: e
							}
						}))
					}), [a]),
					o = Oi(null !== n && void 0 !== n ? n : void 0, Object(i.useMemo)((function() {
						return c.map((function(e) {
							return e.liquidityToken
						}))
					}), [c])),
					u = Object(v.a)(o, 2),
					d = u[0],
					b = u[1],
					p = Object(i.useMemo)((function() {
						return c.filter((function(e) {
							var n, t = e.liquidityToken;
							return null === (n = d[t.address]) || void 0 === n ? void 0 : n.greaterThan("0")
						}))
					}), [c, d]),
					f = Wo(p.map((function(e) {
						return e.tokens
					}))),
					j = b || (null === f || void 0 === f ? void 0 : f.length) < p.length || (null === f || void 0 === f ? void 0 : f.some((function(e) {
						return !e
					}))),
					h = f.map((function(e) {
						return Object(v.a)(e, 2)[1]
					})).filter((function(e) {
						return Boolean(e)
					}));
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsx)(rr, {
						activeIndex: 1
					}), Object(r.jsxs)(qs, {
						children: [Object(r.jsx)(Uu, {
							title: t(262, "Liquidity"),
							description: t(1168, "Add liquidity to receive LP tokens"),
							children: Object(r.jsx)(s.c, {
								id: "join-pool-button",
								as: m.b,
								to: "/add/ETH",
								children: t(168, "Add Liquidity")
							})
						}), Object(r.jsx)(Be, {
							gap: "lg",
							justify: "center",
							children: Object(r.jsx)(s.g, {
								children: Object(r.jsxs)(Be, {
									gap: "12px",
									style: {
										width: "100%"
									},
									children: [Object(r.jsxs)(en, {
										padding: "0 8px",
										children: [Object(r.jsx)(s.y, {
											color: e.colors.text,
											children: t(107, "Your Liquidity")
										}), Object(r.jsx)(sa, {
											text: t(1170, "When you add liquidity, you are given pool tokens that represent your share. If you don\u2019t see a pool you joined in this list, try importing a pool below.")
										})]
									}), n ? j ? Object(r.jsx)(ft, {
										padding: "40px",
										children: Object(r.jsx)(s.y, {
											color: "textDisabled",
											textAlign: "center",
											children: Object(r.jsx)(Uo, {
												children: "Loading"
											})
										})
									}) : (null === h || void 0 === h ? void 0 : h.length) > 0 ? Object(r.jsx)(r.Fragment, {
										children: h.map((function(e) {
											return Object(r.jsx)(Fo, {
												pair: e
											}, e.liquidityToken.address)
										}))
									}) : Object(r.jsx)(ft, {
										padding: "40px",
										children: Object(r.jsx)(s.y, {
											color: "textDisabled",
											textAlign: "center",
											children: t(104, "No liquidity found.")
										})
									}) : Object(r.jsx)(ft, {
										padding: "40px",
										children: Object(r.jsx)(s.y, {
											color: "textDisabled",
											textAlign: "center",
											children: t(156, "Connect to a wallet to view your liquidity.")
										})
									}), Object(r.jsxs)("div", {
										children: [Object(r.jsxs)(s.y, {
											fontSize: "14px",
											style: {
												padding: ".5rem 0 .5rem 0"
											},
											children: [t(106, "Don't see a pool you joined?"), " ", Object(r.jsx)(Nn, {
												id: "import-pool-link",
												to: "/find",
												children: t(108, "Import it.")
											})]
										}), Object(r.jsx)(s.y, {
											fontSize: "14px",
											style: {
												padding: ".5rem 0 .5rem 0"
											},
											children: t(1172, "Or, if you staked your LP tokens in a farm, unstake them to see them here.")
										})]
									})]
								})
							})
						})]
					})]
				})
			}

			function Pu() {
				var e, n = ge().account,
					t = Object(i.useState)(!1),
					a = Object(v.a)(t, 2),
					c = a[0],
					o = a[1],
					u = Object(i.useState)(Eu.TOKEN1),
					l = Object(v.a)(u, 2),
					d = l[0],
					b = l[1],
					p = Object(i.useState)($.d),
					f = Object(v.a)(p, 2),
					j = f[0],
					h = f[1],
					m = Object(i.useState)(null),
					y = Object(v.a)(m, 2),
					O = y[0],
					g = y[1],
					C = Ho(null !== j && void 0 !== j ? j : void 0, null !== O && void 0 !== O ? O : void 0),
					w = Object(v.a)(C, 2),
					k = w[0],
					T = w[1],
					I = function() {
						var e = Object(x.c)();
						return Object(i.useCallback)((function(n) {
							e(qr({
								serializedPair: ei(n)
							}))
						}), [e])
					}(),
					E = Zt();
				Object(i.useEffect)((function() {
					T && I(T)
				}), [T, I]);
				var N = k === qo.NOT_EXISTS || Boolean(k === qo.EXISTS && T && $.e.equal(T.reserve0.raw, $.e.BigInt(0)) && $.e.equal(T.reserve1.raw, $.e.BigInt(0))),
					R = gi(null !== n && void 0 !== n ? n : void 0, null === T || void 0 === T ? void 0 : T.liquidityToken),
					S = Boolean(R && $.e.greaterThan(R.raw, $.e.BigInt(0))),
					U = Object(i.useCallback)((function(e) {
						d === Eu.TOKEN0 ? h(e) : g(e)
					}), [d]),
					A = Object(i.useCallback)((function() {
						o(!1)
					}), [o]),
					P = Object(r.jsx)(ft, {
						padding: "45px 10px",
						children: Object(r.jsx)(s.y, {
							style: {
								textAlign: "center"
							},
							children: n ? E(208, "Select a token to find your liquidity.") : E(1174, "Connect to a wallet to find pools")
						})
					});
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsx)(rr, {
						activeIndex: 1
					}), Object(r.jsxs)(qs, {
						children: [Object(r.jsx)(ao, {}), Object(r.jsxs)(s.g, {
							children: [Object(r.jsxs)(Be, {
								gap: "md",
								children: [Object(r.jsx)(s.c, {
									onClick: function() {
										o(!0), b(Eu.TOKEN0)
									},
									startIcon: j ? Object(r.jsx)(ha, {
										currency: j,
										style: {
											marginRight: ".5rem"
										}
									}) : null,
									endIcon: Object(r.jsx)(s.i, {
										width: "24px",
										color: "white"
									}),
									width: "100%",
									children: j ? j.symbol : E(82, "Select a Token")
								}), Object(r.jsx)(Me, {
									children: Object(r.jsx)(s.a, {
										color: "textSubtle"
									})
								}), Object(r.jsx)(s.c, {
									onClick: function() {
										o(!0), b(Eu.TOKEN1)
									},
									startIcon: O ? Object(r.jsx)(ha, {
										currency: O,
										style: {
											marginRight: ".5rem"
										}
									}) : null,
									endIcon: Object(r.jsx)(s.i, {
										width: "24px",
										color: "white"
									}),
									width: "100%",
									children: O ? O.symbol : E(82, "Select a Token")
								}), S && Object(r.jsx)(Me, {
									style: {
										justifyItems: "center",
										backgroundColor: "",
										padding: "12px 0px",
										borderRadius: "12px"
									},
									children: Object(r.jsx)(s.y, {
										style: {
											textAlign: "center"
										},
										children: E(210, "Pool found!")
									})
								}), j && O ? k === qo.EXISTS ? S && T ? Object(r.jsx)(zo, {
									pair: T
								}) : Object(r.jsx)(ft, {
									padding: "45px 10px",
									children: Object(r.jsxs)(Be, {
										gap: "sm",
										justify: "center",
										children: [Object(r.jsx)(s.y, {
											style: {
												textAlign: "center"
											},
											children: E(212, "You don\u2019t have liquidity in this pool yet.")
										}), Object(r.jsx)(Nn, {
											to: "/add/".concat(lo(j), "/").concat(lo(O)),
											children: Object(r.jsx)(s.y, {
												style: {
													textAlign: "center"
												},
												children: E(168, "Add Liquidity")
											})
										})]
									})
								}) : N ? Object(r.jsx)(ft, {
									padding: "45px 10px",
									children: Object(r.jsxs)(Be, {
										gap: "sm",
										justify: "center",
										children: [Object(r.jsx)(s.y, {
											style: {
												textAlign: "center"
											},
											children: E(214, "No pool found.")
										}), Object(r.jsx)(Nn, {
											to: "/add/".concat(lo(j), "/").concat(lo(O)),
											children: "Create pool."
										})]
									})
								}) : k === qo.INVALID ? Object(r.jsx)(ft, {
									padding: "45px 10px",
									children: Object(r.jsx)(Be, {
										gap: "sm",
										justify: "center",
										children: Object(r.jsx)(s.y, {
											style: {
												textAlign: "center"
											},
											children: E(136, "Invalid pair.")
										})
									})
								}) : k === qo.LOADING ? Object(r.jsx)(ft, {
									padding: "45px 10px",
									children: Object(r.jsx)(Be, {
										gap: "sm",
										justify: "center",
										children: Object(r.jsxs)(s.y, {
											style: {
												textAlign: "center"
											},
											children: ["Loading", Object(r.jsx)(Gs, {})]
										})
									})
								}) : null : P]
							}), Object(r.jsx)(Ec, {
								isOpen: c,
								onCurrencySelect: U,
								onDismiss: A,
								showCommonBases: !0,
								selectedCurrency: null !== (e = d === Eu.TOKEN0 ? O : j) && void 0 !== e ? e : void 0
							})]
						})]
					})]
				})
			}! function(e) {
				e[e.TOKEN0 = 0] = "TOKEN0", e[e.TOKEN1 = 1] = "TOKEN1"
			}(Eu || (Eu = {}));
			var Mu = t(2),
				Bu = t(500),
				Lu = t(501);

			function _u() {
				var e = Object(u.a)(["\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ", "px;\n    width: ", "px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ", ";\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(\n      90deg,\n      ", ",\n      ", "\n    );\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ", ";\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ", ";\n  }\n  &::-ms-fill-upper {\n    background: ", ";\n  }\n"]);
				return _u = function() {
					return e
				}, e
			}
			var Du, Yu = l.default.input(_u(), (function(e) {
				return e.size
			}), (function(e) {
				return e.size
			}), (function(e) {
				return e.theme.colors.invertedContrast
			}), (function(e) {
				return e.size
			}), (function(e) {
				return e.size
			}), (function(e) {
				return e.theme.colors.invertedContrast
			}), (function(e) {
				return e.size
			}), (function(e) {
				return e.size
			}), (function(e) {
				return e.theme.colors.invertedContrast
			}), (function(e) {
				return e.theme.colors.primaryDark
			}), (function(e) {
				return e.theme.colors.tertiary
			}), (function(e) {
				return e.theme.colors.primaryDark
			}), (function(e) {
				return e.theme.colors.tertiary
			}), (function(e) {
				return e.theme.colors.primaryDark
			}), (function(e) {
				return e.theme.colors.primaryDark
			}), (function(e) {
				return e.theme.colors.tertiary
			}));

			function zu(e) {
				var n = e.value,
					t = e.onChange,
					a = e.min,
					c = void 0 === a ? 0 : a,
					o = e.step,
					s = void 0 === o ? 1 : o,
					u = e.max,
					l = void 0 === u ? 100 : u,
					d = e.size,
					b = void 0 === d ? 28 : d,
					p = Object(i.useCallback)((function(e) {
						t(parseInt(e.target.value))
					}), [t]);
				return Object(r.jsx)(Yu, {
					size: b,
					type: "range",
					value: n,
					style: {
						width: "90%",
						marginLeft: 15,
						marginRight: 15,
						padding: "15px 0"
					},
					onChange: p,
					"aria-labelledby": "input slider",
					step: s,
					min: c,
					max: l
				})
			}! function(e) {
				e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
			}(Du || (Du = {}));
			var Fu = Object(Ce.b)("burn/typeInputBurn");

			function qu() {
				return Object(x.d)((function(e) {
					return e.burn
				}))
			}

			function Vu() {
				var e = Object(u.a)(["\n  padding-left: 24px;\n  padding-right: 24px;\n"]);
				return Vu = function() {
					return e
				}, e
			}

			function Wu() {
				var e = Object(u.a)(["\n  border: 1px solid ", ";\n  border-radius: 16px;\n  padding: 24px;\n"]);
				return Wu = function() {
					return e
				}, e
			}
			var Hu = l.default.div(Wu(), (function(e) {
					return e.theme.colors.borderColor
				})),
				Qu = l.default.div(Vu());

			function Ku(e) {
				var n, t, a, c, o, u, d, b, p, f, m, y, O, g, C = e.history,
					k = e.match.params,
					T = k.currencyIdA,
					I = k.currencyIdB,
					E = null !== (n = mi(T)) && void 0 !== n ? n : void 0,
					N = null !== (t = mi(I)) && void 0 !== t ? t : void 0,
					R = ge(),
					S = R.account,
					U = R.chainId,
					A = R.library,
					P = Zt(),
					M = Object(i.useMemo)((function() {
						return [bo(E, U), bo(N, U)]
					}), [E, N, U]),
					B = Object(v.a)(M, 2),
					L = B[0],
					_ = B[1],
					D = Object(i.useContext)(l.ThemeContext),
					Y = qu(),
					z = Y.independentField,
					F = Y.typedValue,
					q = function(e, n) {
						var t, r, i, a, c, o = ge(),
							s = o.account,
							u = o.chainId,
							l = qu(),
							d = l.independentField,
							b = l.typedValue,
							p = Ho(e, n),
							f = Object(v.a)(p, 2)[1],
							j = xi(null !== s && void 0 !== s ? s : void 0, [null === f || void 0 === f ? void 0 : f.liquidityToken]),
							h = null === j || void 0 === j ? void 0 : j[null !== (t = null === f || void 0 === f || null === (r = f.liquidityToken) || void 0 === r ? void 0 : r.address) && void 0 !== t ? t : ""],
							m = [bo(e, u), bo(n, u)],
							y = m[0],
							O = m[1],
							x = (i = {}, Object(w.a)(i, Du.CURRENCY_A, y), Object(w.a)(i, Du.CURRENCY_B, O), Object(w.a)(i, Du.LIQUIDITY, null === f || void 0 === f ? void 0 : f.liquidityToken), i),
							g = uo(null === f || void 0 === f ? void 0 : f.liquidityToken),
							C = f && g && h && y && $.e.greaterThanOrEqual(g.raw, h.raw) ? new $.k(y, f.getLiquidityValue(y, g, h, !1).raw) : void 0,
							k = f && g && h && O && $.e.greaterThanOrEqual(g.raw, h.raw) ? new $.k(O, f.getLiquidityValue(O, g, h, !1).raw) : void 0,
							T = (a = {}, Object(w.a)(a, Du.CURRENCY_A, C), Object(w.a)(a, Du.CURRENCY_B, k), a),
							I = new $.g("0", "100");
						if (d === Du.LIQUIDITY_PERCENT) I = new $.g(b, "100");
						else if (d === Du.LIQUIDITY) {
							if (null === f || void 0 === f ? void 0 : f.liquidityToken) {
								var E = Ts(b, f.liquidityToken);
								E && h && !E.greaterThan(h) && (I = new $.g(E.raw, h.raw))
							}
						} else if (x[d]) {
							var N = Ts(b, x[d]),
								R = T[d];
							N && R && !N.greaterThan(R) && (I = new $.g(N.raw, R.raw))
						}
						var S, U, A = (c = {}, Object(w.a)(c, Du.LIQUIDITY_PERCENT, I), Object(w.a)(c, Du.LIQUIDITY, h && I && I.greaterThan("0") ? new $.k(h.token, I.multiply(h.raw).quotient) : void 0), Object(w.a)(c, Du.CURRENCY_A, y && I && I.greaterThan("0") && C ? new $.k(y, I.multiply(C.raw).quotient) : void 0), Object(w.a)(c, Du.CURRENCY_B, O && I && I.greaterThan("0") && k ? new $.k(O, I.multiply(k.raw).quotient) : void 0), c);
						return s || (S = "Connect Wallet"), A[Du.LIQUIDITY] && A[Du.CURRENCY_A] && A[Du.CURRENCY_B] || (S = null !== (U = S) && void 0 !== U ? U : "Enter an amount"), {
							pair: f,
							parsedAmounts: A,
							error: S
						}
					}(null !== E && void 0 !== E ? E : void 0, null !== N && void 0 !== N ? N : void 0),
					V = q.pair,
					W = q.parsedAmounts,
					H = q.error,
					Q = function() {
						var e = Object(x.c)();
						return {
							onUserInput: Object(i.useCallback)((function(n, t) {
								e(Fu({
									field: n,
									typedValue: t
								}))
							}), [e])
						}
					}().onUserInput,
					K = !H,
					G = Object(i.useState)(!1),
					X = Object(v.a)(G, 2),
					ee = X[0],
					ne = X[1],
					te = Object(i.useState)(!1),
					re = Object(v.a)(te, 2),
					ie = re[0],
					ae = re[1],
					ce = Object(i.useState)(!1),
					oe = Object(v.a)(ce, 2),
					se = oe[0],
					ue = oe[1],
					le = Object(i.useState)(""),
					de = Object(v.a)(le, 2),
					be = de[0],
					pe = de[1],
					fe = $r(),
					je = Object(v.a)(fe, 1)[0],
					he = Xr(),
					ve = Object(v.a)(he, 1)[0],
					me = (p = {}, Object(w.a)(p, Du.LIQUIDITY_PERCENT, W[Du.LIQUIDITY_PERCENT].equalTo("0") ? "0" : W[Du.LIQUIDITY_PERCENT].lessThan(new $.g("1", "100")) ? "<1" : W[Du.LIQUIDITY_PERCENT].toFixed(0)), Object(w.a)(p, Du.LIQUIDITY, z === Du.LIQUIDITY ? F : null !== (a = null === (c = W[Du.LIQUIDITY]) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== a ? a : ""), Object(w.a)(p, Du.CURRENCY_A, z === Du.CURRENCY_A ? F : null !== (o = null === (u = W[Du.CURRENCY_A]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== o ? o : ""), Object(w.a)(p, Du.CURRENCY_B, z === Du.CURRENCY_B ? F : null !== (d = null === (b = W[Du.CURRENCY_B]) || void 0 === b ? void 0 : b.toSignificant(6)) && void 0 !== d ? d : ""), p),
					ye = null === (f = W[Du.LIQUIDITY_PERCENT]) || void 0 === f ? void 0 : f.equalTo(new $.g("1")),
					Oe = ui(null === V || void 0 === V || null === (m = V.liquidityToken) || void 0 === m ? void 0 : m.address, ri.a, g),
					xe = Object(i.useState)(null),
					Ce = Object(v.a)(xe, 2),
					we = Ce[0],
					ke = Ce[1],
					Te = vs(W[Du.LIQUIDITY], Z),
					Ie = Object(v.a)(Te, 2),
					Ee = Ie[0],
					Ne = Ie[1];

				function Re() {
					return (Re = Object(h.a)(j.a.mark((function e() {
						var n, t, r, i, a, c, o, s;
						return j.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (Oe && V && A) {
										e.next = 2;
										break
									}
									throw new Error("missing dependencies");
								case 2:
									if (n = W[Du.LIQUIDITY]) {
										e.next = 5;
										break
									}
									throw new Error("missing liquidity amount");
								case 5:
									return e.next = 7, Oe.nonces(S);
								case 7:
									t = e.sent, r = Math.ceil(Date.now() / 1e3) + je, i = [{
										name: "name",
										type: "string"
									}, {
										name: "version",
										type: "string"
									}, {
										name: "chainId",
										type: "uint256"
									}, {
										name: "verifyingContract",
										type: "address"
									}], a = {
										name: "Pancake LPs",
										version: "1",
										chainId: U,
										verifyingContract: V.liquidityToken.address
									}, c = [{
										name: "owner",
										type: "address"
									}, {
										name: "spender",
										type: "address"
									}, {
										name: "value",
										type: "uint256"
									}, {
										name: "nonce",
										type: "uint256"
									}, {
										name: "deadline",
										type: "uint256"
									}], o = {
										owner: S,
										spender: Z,
										value: n.raw.toString(),
										nonce: t.toHexString(),
										deadline: r
									}, s = JSON.stringify({
										types: {
											EIP712Domain: i,
											Permit: c
										},
										domain: a,
										primaryType: "Permit",
										message: o
									}), A.send("eth_signTypedData_v4", [S, s]).then(Mu.splitSignature).then((function(e) {
										ke({
											v: e.v,
											r: e.r,
											s: e.s,
											deadline: r
										})
									})).catch((function(e) {
										4001 !== (null === e || void 0 === e ? void 0 : e.code) && Ne()
									}));
								case 15:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}
				var Se = Object(i.useCallback)((function(e, n) {
						return ke(null), Q(e, n)
					}), [Q]),
					Ue = Object(i.useCallback)((function(e) {
						return Se(Du.LIQUIDITY, e)
					}), [Se]),
					Ae = Object(i.useCallback)((function(e) {
						return Se(Du.CURRENCY_A, e)
					}), [Se]),
					Pe = Object(i.useCallback)((function(e) {
						return Se(Du.CURRENCY_B, e)
					}), [Se]),
					Le = as();

				function _e() {
					return De.apply(this, arguments)
				}

				function De() {
					return (De = Object(h.a)(j.a.mark((function e() {
						var n, t, r, i, a, c, o, s, u, l, d, b, p, f, h;
						return j.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									if (U && A && S) {
										e.next = 2;
										break
									}
									throw new Error("missing dependencies");
								case 2:
									if (t = W[Du.CURRENCY_A], r = W[Du.CURRENCY_B], t && r) {
										e.next = 5;
										break
									}
									throw new Error("missing currency amounts");
								case 5:
									if (i = xn(0, A, S), n = {}, Object(w.a)(n, Du.CURRENCY_A, yn(t, ve)[0]), Object(w.a)(n, Du.CURRENCY_B, yn(r, ve)[0]), a = n, E && N) {
										e.next = 9;
										break
									}
									throw new Error("missing tokens");
								case 9:
									if (c = W[Du.LIQUIDITY]) {
										e.next = 12;
										break
									}
									throw new Error("missing liquidity amount");
								case 12:
									if (o = N === $.d, s = E === $.d || o, u = Math.ceil(Date.now() / 1e3) + je, L && _) {
										e.next = 17;
										break
									}
									throw new Error("could not wrap");
								case 17:
									if (Ee !== ss.APPROVED) {
										e.next = 21;
										break
									}
									s ? (l = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"], d = [o ? L.address : _.address, c.raw.toString(), a[o ? Du.CURRENCY_A : Du.CURRENCY_B].toString(), a[o ? Du.CURRENCY_B : Du.CURRENCY_A].toString(), S, u]) : (l = ["removeLiquidity"], d = [L.address, _.address, c.raw.toString(), a[Du.CURRENCY_A].toString(), a[Du.CURRENCY_B].toString(), S, u]), e.next = 26;
									break;
								case 21:
									if (null === we) {
										e.next = 25;
										break
									}
									s ? (l = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"], d = [o ? L.address : _.address, c.raw.toString(), a[o ? Du.CURRENCY_A : Du.CURRENCY_B].toString(), a[o ? Du.CURRENCY_B : Du.CURRENCY_A].toString(), S, we.deadline, !1, we.v, we.r, we.s]) : (l = ["removeLiquidityWithPermit"], d = [L.address, _.address, c.raw.toString(), a[Du.CURRENCY_A].toString(), a[Du.CURRENCY_B].toString(), S, we.deadline, !1, we.v, we.r, we.s]), e.next = 26;
									break;
								case 25:
									throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
								case 26:
									return e.next = 28, Promise.all(l.map((function(e, n) {
										var t;
										return (t = i.estimateGas)[e].apply(t, Object(J.a)(d)).then(mn).catch((function(t) {
											console.error("estimateGas failed", n, e, d, t)
										}))
									})));
								case 28:
									if (b = e.sent, -1 !== (p = b.findIndex((function(e) {
											return bn.a.isBigNumber(e)
										})))) {
										e.next = 34;
										break
									}
									console.error("This transaction would fail. Please contact support."), e.next = 39;
									break;
								case 34:
									return f = l[p], h = b[p], ue(!0), e.next = 39, i[f].apply(i, Object(J.a)(d).concat([{
										gasLimit: h
									}])).then((function(e) {
										var n, t;
										ue(!1), Le(e, {
											summary: "Remove ".concat(null === (n = W[Du.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(3), " ").concat(null === E || void 0 === E ? void 0 : E.symbol, " and ").concat(null === (t = W[Du.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(3), " ").concat(null === N || void 0 === N ? void 0 : N.symbol)
										}), pe(e.hash)
									})).catch((function(e) {
										ue(!1), console.error(e)
									}));
								case 39:
								case "end":
									return e.stop()
							}
						}), e)
					})))).apply(this, arguments)
				}

				function Ye() {
					var e, n;
					return Object(r.jsxs)(Be, {
						gap: "md",
						style: {
							marginTop: "20px"
						},
						children: [Object(r.jsxs)(en, {
							align: "flex-end",
							children: [Object(r.jsx)(s.y, {
								fontSize: "24px",
								children: null === (e = W[Du.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6)
							}), Object(r.jsxs)(rn, {
								gap: "4px",
								children: [Object(r.jsx)(ha, {
									currency: E,
									size: "24px"
								}), Object(r.jsx)(s.y, {
									fontSize: "24px",
									style: {
										marginLeft: "10px"
									},
									children: null === E || void 0 === E ? void 0 : E.symbol
								})]
							})]
						}), Object(r.jsx)(rn, {
							children: Object(r.jsx)(Bu.a, {
								size: "16",
								color: D.colors.textSubtle
							})
						}), Object(r.jsxs)(en, {
							align: "flex-end",
							children: [Object(r.jsx)(s.y, {
								fontSize: "24px",
								children: null === (n = W[Du.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(6)
							}), Object(r.jsxs)(rn, {
								gap: "4px",
								children: [Object(r.jsx)(ha, {
									currency: N,
									size: "24px"
								}), Object(r.jsx)(s.y, {
									fontSize: "24px",
									style: {
										marginLeft: "10px"
									},
									children: null === N || void 0 === N ? void 0 : N.symbol
								})]
							})]
						}), Object(r.jsx)(s.y, {
							small: !0,
							color: "textSubtle",
							textAlign: "left",
							padding: "12px 0 0 0",
							style: {
								fontStyle: "italic"
							},
							children: "Output is estimated. If the price changes by more than ".concat(ve / 100, "% your transaction will revert.")
						})]
					})
				}

				function ze() {
					var e;
					return Object(r.jsxs)(r.Fragment, {
						children: [Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(s.y, {
								color: "textSubtle",
								children: ["LP ".concat(null === E || void 0 === E ? void 0 : E.symbol, "/").concat(null === N || void 0 === N ? void 0 : N.symbol), " Burned"]
							}), Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(Mc, {
									currency0: E,
									currency1: N,
									margin: !0
								}), Object(r.jsx)(s.y, {
									children: null === (e = W[Du.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6)
								})]
							})]
						}), V && Object(r.jsxs)(r.Fragment, {
							children: [Object(r.jsxs)(en, {
								children: [Object(r.jsx)(s.y, {
									color: "textSubtle",
									children: P(1182, "Price")
								}), Object(r.jsxs)(s.y, {
									children: ["1 ", null === E || void 0 === E ? void 0 : E.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === N || void 0 === N ? void 0 : N.symbol]
								})]
							}), Object(r.jsxs)(en, {
								children: [Object(r.jsx)("div", {}), Object(r.jsxs)(s.y, {
									children: ["1 ", null === N || void 0 === N ? void 0 : N.symbol, " = ", _ ? V.priceOf(_).toSignificant(6) : "-", " ", null === E || void 0 === E ? void 0 : E.symbol]
								})]
							})]
						}), Object(r.jsx)(s.c, {
							disabled: !(Ee === ss.APPROVED || null !== we),
							onClick: _e,
							children: P(1136, "Confirm")
						})]
					})
				}
				var Fe = "Removing ".concat(null === (y = W[Du.CURRENCY_A]) || void 0 === y ? void 0 : y.toSignificant(6), " ").concat(null === E || void 0 === E ? void 0 : E.symbol, " and ").concat(null === (O = W[Du.CURRENCY_B]) || void 0 === O ? void 0 : O.toSignificant(6), " ").concat(null === N || void 0 === N ? void 0 : N.symbol),
					qe = Object(i.useCallback)((function(e) {
						Se(Du.LIQUIDITY_PERCENT, e.toString())
					}), [Se]),
					Ve = E === $.d || N === $.d,
					We = Boolean(U && (E && Object($.o)($.n[U], E) || N && Object($.o)($.n[U], N))),
					He = Object(i.useCallback)((function(e) {
						I && lo(e) === I ? C.push("/remove/".concat(lo(e), "/").concat(T)) : C.push("/remove/".concat(lo(e), "/").concat(I))
					}), [T, I, C]),
					Qe = Object(i.useCallback)((function(e) {
						T && lo(e) === T ? C.push("/remove/".concat(I, "/").concat(lo(e))) : C.push("/remove/".concat(T, "/").concat(lo(e)))
					}), [T, I, C]),
					Ke = Object(i.useCallback)((function() {
						ne(!1), ke(null), be && Se(Du.LIQUIDITY_PERCENT, "0"), pe("")
					}), [Se, be]),
					Ge = function(e, n) {
						var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
							r = Object(i.useState)((function() {
								return e
							})),
							a = Object(v.a)(r, 2),
							c = a[0],
							o = a[1],
							s = Object(i.useRef)(),
							u = Object(i.useCallback)((function(e) {
								o(e), s.current && clearTimeout(s.current), s.current = setTimeout((function() {
									n(e), s.current = void 0
								}), t)
							}), [t, n]);
						return Object(i.useEffect)((function() {
							s.current && (clearTimeout(s.current), s.current = void 0), o(e)
						}), [e]), [c, u]
					}(Number.parseInt(W[Du.LIQUIDITY_PERCENT].toFixed(0)), qe),
					Je = Object(v.a)(Ge, 2),
					Xe = Je[0],
					$e = Je[1];
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsxs)(qs, {
						children: [Object(r.jsx)(co, {
							adding: !1
						}), Object(r.jsxs)(Qs, {
							children: [Object(r.jsx)(Qt, {
								isOpen: ee,
								onDismiss: Ke,
								attemptingTxn: se,
								hash: be || "",
								content: function() {
									return Object(r.jsx)(Vt, {
										title: P(1156, "You will receive"),
										onDismiss: Ke,
										topContent: Ye,
										bottomContent: ze
									})
								},
								pendingText: Fe
							}), Object(r.jsxs)(Be, {
								gap: "md",
								children: [Object(r.jsx)(Qu, {
									children: Object(r.jsx)(Hu, {
										children: Object(r.jsxs)(Be, {
											children: [Object(r.jsxs)(en, {
												children: [Object(r.jsx)(s.y, {
													children: "Amount"
												}), Object(r.jsx)(Ks, {
													onClick: function() {
														ae(!ie)
													},
													children: ie ? P(1184, "Simple") : P(1186, "Detailed")
												})]
											}), Object(r.jsx)(s.n, {
												justifyContent: "start",
												children: Object(r.jsxs)(s.y, {
													fontSize: "64px",
													children: [me[Du.LIQUIDITY_PERCENT], "%"]
												})
											}), !ie && Object(r.jsxs)(r.Fragment, {
												children: [Object(r.jsx)(s.n, {
													mb: "8px",
													children: Object(r.jsx)(zu, {
														value: Xe,
														onChange: $e
													})
												}), Object(r.jsxs)(s.n, {
													justifyContent: "space-around",
													children: [Object(r.jsx)(s.c, {
														variant: "tertiary",
														scale: "sm",
														onClick: function() {
															return Se(Du.LIQUIDITY_PERCENT, "25")
														},
														children: "25%"
													}), Object(r.jsx)(s.c, {
														variant: "tertiary",
														scale: "sm",
														onClick: function() {
															return Se(Du.LIQUIDITY_PERCENT, "50")
														},
														children: "50%"
													}), Object(r.jsx)(s.c, {
														variant: "tertiary",
														scale: "sm",
														onClick: function() {
															return Se(Du.LIQUIDITY_PERCENT, "75")
														},
														children: "75%"
													}), Object(r.jsx)(s.c, {
														variant: "tertiary",
														scale: "sm",
														onClick: function() {
															return Se(Du.LIQUIDITY_PERCENT, "100")
														},
														children: P(166, "Max")
													})]
												})]
											})]
										})
									})
								}), !ie && Object(r.jsxs)(r.Fragment, {
									children: [Object(r.jsx)(Me, {
										children: Object(r.jsx)(Lu.a, {
											size: "16",
											color: D.colors.textSubtle
										})
									}), Object(r.jsx)(Qu, {
										children: Object(r.jsx)(Hu, {
											children: Object(r.jsxs)(Be, {
												gap: "10px",
												children: [Object(r.jsxs)(en, {
													children: [Object(r.jsx)(s.y, {
														fontSize: "24px",
														children: me[Du.CURRENCY_A] || "-"
													}), Object(r.jsxs)(rn, {
														children: [Object(r.jsx)(ha, {
															currency: E,
															style: {
																marginRight: "12px"
															}
														}), Object(r.jsx)(s.y, {
															fontSize: "24px",
															id: "remove-liquidity-tokena-symbol",
															children: null === E || void 0 === E ? void 0 : E.symbol
														})]
													})]
												}), Object(r.jsxs)(en, {
													children: [Object(r.jsx)(s.y, {
														fontSize: "24px",
														children: me[Du.CURRENCY_B] || "-"
													}), Object(r.jsxs)(rn, {
														children: [Object(r.jsx)(ha, {
															currency: N,
															style: {
																marginRight: "12px"
															}
														}), Object(r.jsx)(s.y, {
															fontSize: "24px",
															id: "remove-liquidity-tokenb-symbol",
															children: null === N || void 0 === N ? void 0 : N.symbol
														})]
													})]
												}), U && (We || Ve) ? Object(r.jsx)(en, {
													style: {
														justifyContent: "flex-end"
													},
													children: Ve ? Object(r.jsx)(Nn, {
														to: "/remove/".concat(E === $.d ? $.n[U].address : T, "/").concat(N === $.d ? $.n[U].address : I),
														children: P(1188, "Receive WBNB")
													}) : We ? Object(r.jsx)(Nn, {
														to: "/remove/".concat(E && Object($.o)(E, $.n[U]) ? "BNB" : T, "/").concat(N && Object($.o)(N, $.n[U]) ? "BNB" : I),
														children: P(1190, "Receive BNB")
													}) : null
												}) : null]
											})
										})
									})]
								}), Object(r.jsxs)(Qu, {
									style: {
										paddingBottom: "24px"
									},
									children: [ie && Object(r.jsxs)(r.Fragment, {
										children: [Object(r.jsx)($c, {
											value: me[Du.LIQUIDITY],
											onUserInput: Ue,
											onMax: function() {
												Se(Du.LIQUIDITY_PERCENT, "100")
											},
											showMaxButton: !ye,
											disableCurrencySelect: !0,
											currency: null === V || void 0 === V ? void 0 : V.liquidityToken,
											pair: V,
											id: "liquidity-amount"
										}), Object(r.jsx)(Me, {
											children: Object(r.jsx)(Lu.a, {
												size: "16",
												color: D.colors.textSubtle
											})
										}), Object(r.jsx)($c, {
											hideBalance: !0,
											value: me[Du.CURRENCY_A],
											onUserInput: Ae,
											onMax: function() {
												return Se(Du.LIQUIDITY_PERCENT, "100")
											},
											showMaxButton: !ye,
											currency: E,
											label: "Output",
											onCurrencySelect: He,
											id: "remove-liquidity-tokena"
										}), Object(r.jsx)(Me, {
											children: Object(r.jsx)(Bu.a, {
												size: "16",
												color: D.colors.textSubtle
											})
										}), Object(r.jsx)($c, {
											hideBalance: !0,
											value: me[Du.CURRENCY_B],
											onUserInput: Pe,
											onMax: function() {
												return Se(Du.LIQUIDITY_PERCENT, "100")
											},
											showMaxButton: !ye,
											currency: N,
											label: "Output",
											onCurrencySelect: Qe,
											id: "remove-liquidity-tokenb"
										})]
									}), V && Object(r.jsxs)("div", {
										style: {
											padding: "24px"
										},
										children: [Object(r.jsxs)(s.n, {
											justifyContent: "space-between",
											mb: "8px",
											children: ["Price:", Object(r.jsxs)("div", {
												children: ["1 ", null === E || void 0 === E ? void 0 : E.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === N || void 0 === N ? void 0 : N.symbol]
											})]
										}), Object(r.jsxs)(s.n, {
											justifyContent: "space-between",
											children: [Object(r.jsx)("div", {}), Object(r.jsxs)("div", {
												children: ["1 ", null === N || void 0 === N ? void 0 : N.symbol, " = ", _ ? V.priceOf(_).toSignificant(6) : "-", " ", null === E || void 0 === E ? void 0 : E.symbol]
											})]
										})]
									}), Object(r.jsx)("div", {
										style: {
											position: "relative"
										},
										children: S ? Object(r.jsxs)(en, {
											children: [Object(r.jsx)(s.c, {
												onClick: function() {
													return Re.apply(this, arguments)
												},
												variant: Ee === ss.APPROVED || null !== we ? "success" : "primary",
												disabled: Ee !== ss.NOT_APPROVED || null !== we,
												mr: "8px",
												children: Ee === ss.PENDING ? Object(r.jsx)(Uo, {
													children: "Approving"
												}) : Ee === ss.APPROVED || null !== we ? "Approved" : "Approve"
											}), Object(r.jsx)(s.c, {
												onClick: function() {
													ne(!0)
												},
												disabled: !K || null === we && Ee !== ss.APPROVED,
												variant: !K && W[Du.CURRENCY_A] && W[Du.CURRENCY_B] ? "danger" : "primary",
												children: H || "Remove"
											})]
										}) : Object(r.jsx)(Ys, {
											width: "100%"
										})
									})]
								})]
							})]
						})]
					}), V ? Object(r.jsx)(Be, {
						style: {
							minWidth: "20rem",
							marginTop: "1rem"
						},
						children: Object(r.jsx)(zo, {
							showUnwrapped: We,
							pair: V
						})
					}) : null]
				})
			}

			function Gu() {
				var e = Object(u.a)(["\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ", ";\n  transition: color 300ms ", ";\n  color: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ", ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
				return Gu = function() {
					return e
				}, e
			}

			function Ju() {
				var e = Object(u.a)(["\n  flex: 1;\n  padding: 1rem;\n"]);
				return Ju = function() {
					return e
				}, e
			}

			function Xu() {
				var e = Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ", ";\n  transition: border-color 300ms ", ",\n    color 500ms ", ";\n  background-color: ", ";\n"]);
				return Xu = function() {
					return e
				}, e
			}

			function $u() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
				return $u = function() {
					return e
				}, e
			}
			var Zu = l.default.div($u(), (function(e) {
					return e.theme.colors.invertedContrast
				})),
				el = l.default.div(Xu(), (function(e) {
					var n = e.error,
						t = e.theme;
					return n ? t.colors.failure : t.colors.invertedContrast
				}), (function(e) {
					return e.error ? "step-end" : "step-start"
				}), (function(e) {
					return e.error ? "step-end" : "step-start"
				}), (function(e) {
					return e.theme.colors.invertedContrast
				})),
				nl = l.default.div(Ju()),
				tl = l.default.input(Gu(), (function(e) {
					return e.theme.colors.invertedContrast
				}), (function(e) {
					return e.error ? "step-end" : "step-start"
				}), (function(e) {
					var n = e.error,
						t = e.theme;
					return n ? t.colors.failure : t.colors.primary
				}), (function(e) {
					return e.theme.colors.textDisabled
				}), (function(e) {
					return e.theme.colors.textDisabled
				}));

			function rl(e) {
				var n = e.id,
					t = e.value,
					a = e.onChange,
					c = ge().chainId,
					o = Zt(),
					u = gs(t),
					l = u.address,
					d = u.loading,
					b = u.name,
					p = Object(i.useCallback)((function(e) {
						var n = e.target.value.replace(/\s+/g, "");
						a(n)
					}), [a]),
					f = Boolean(t.length > 0 && !d && !l);
				return Object(r.jsx)(Zu, {
					id: n,
					children: Object(r.jsx)(el, {
						error: f,
						children: Object(r.jsx)(nl, {
							children: Object(r.jsxs)(Be, {
								gap: "md",
								children: [Object(r.jsxs)(en, {
									children: [Object(r.jsx)(s.y, {
										color: "textSubtle",
										fontWeight: 500,
										fontSize: "14px",
										children: o(1138, "Recipient")
									}), l && c && Object(r.jsx)(Sn, {
										href: hn(c, null !== b && void 0 !== b ? b : l, "address"),
										style: {
											fontSize: "14px"
										},
										children: o(116, "(View on BscScan)")
									})]
								}), Object(r.jsx)(tl, {
									className: "recipient-address-input",
									type: "text",
									autoComplete: "off",
									autoCorrect: "off",
									autoCapitalize: "off",
									spellCheck: "false",
									placeholder: o(1140, "Wallet Address or ENS name"),
									error: f,
									pattern: "^(0x[a-fA-F0-9]{40})$",
									onChange: p,
									value: t
								})]
							})
						})
					})
				})
			}
			var il = t(502);

			function al(e) {
				var n = e.priceImpact;
				return Object(r.jsx)(Ro, {
					fontSize: "14px",
					severity: js(n),
					children: n ? n.lessThan(fe) ? "<0.01%" : "".concat(n.toFixed(2), "%") : "-"
				})
			}

			function cl(e) {
				var n, t, a, c, o = e.trade,
					u = e.onConfirm,
					l = e.allowedSlippage,
					d = e.swapErrorMessage,
					b = e.disabledConfirm,
					p = Object(i.useState)(!1),
					f = Object(v.a)(p, 2),
					j = f[0],
					h = f[1],
					m = Object(i.useMemo)((function() {
						return fs(o, l)
					}), [l, o]),
					y = Object(i.useMemo)((function() {
						return ps(o)
					}), [o]),
					O = y.priceImpactWithoutFee,
					x = y.realizedLPFee,
					g = js(O),
					C = Zt();
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsxs)(Be, {
						gap: "0px",
						children: [Object(r.jsxs)(en, {
							align: "center",
							children: [Object(r.jsx)(s.y, {
								fontSize: "14px",
								children: "Price"
							}), Object(r.jsxs)(s.y, {
								fontSize: "14px",
								style: {
									justifyContent: "center",
									alignItems: "center",
									display: "flex",
									textAlign: "right",
									paddingLeft: "8px",
									fontWeight: 500
								},
								children: [hs(o, j), Object(r.jsx)(So, {
									onClick: function() {
										return h(!j)
									},
									children: Object(r.jsx)(il.a, {
										size: 14
									})
								})]
							})]
						}), Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: o.tradeType === $.m.EXACT_INPUT ? C(1210, "Minimum received") : C(220, "Maximum sold")
								}), Object(r.jsx)(sa, {
									text: C(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.")
								})]
							}), Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: o.tradeType === $.m.EXACT_INPUT ? null !== (n = null === (t = m[Go.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4)) && void 0 !== n ? n : "-" : null !== (a = null === (c = m[Go.INPUT]) || void 0 === c ? void 0 : c.toSignificant(4)) && void 0 !== a ? a : "-"
								}), Object(r.jsx)(s.y, {
									fontSize: "14px",
									marginLeft: "4px",
									children: o.tradeType === $.m.EXACT_INPUT ? o.outputAmount.currency.symbol : o.inputAmount.currency.symbol
								})]
							})]
						}), Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: "Price Impact"
								}), Object(r.jsx)(sa, {
									text: C(224, "The difference between the market price and your price due to trade size.")
								})]
							}), Object(r.jsx)(al, {
								priceImpact: O
							})]
						}), Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: "Liquidity Provider Fee"
								}), Object(r.jsx)(sa, {
									text: C(999, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.")
								})]
							}), Object(r.jsx)(s.y, {
								fontSize: "14px",
								children: x ? "".concat(null === x || void 0 === x ? void 0 : x.toSignificant(6), " ").concat(o.inputAmount.currency.symbol) : "-"
							})]
						})]
					}), Object(r.jsxs)(tn, {
						children: [Object(r.jsx)(s.c, {
							onClick: u,
							disabled: b,
							variant: g > 2 ? "danger" : "primary",
							mt: "10px",
							id: "confirm-swap-or-send",
							width: "100%",
							children: g > 2 ? "Swap Anyway" : "Confirm Swap"
						}), d ? Object(r.jsx)(Mo, {
							error: d
						}) : null]
					})]
				})
			}

			function ol() {
				var e = Object(u.a)(["\n  font-style: italic;\n  line-height: 1.3;\n\n  span {\n    color: ", ";\n    font-weight: 600;\n  }\n"]);
				return ol = function() {
					return e
				}, e
			}
			var sl = Object(l.default)(s.y)(ol(), (function(e) {
				return e.theme.colors.primary
			}));

			function ul(e) {
				var n, t, a = e.trade,
					c = e.allowedSlippage,
					o = e.recipient,
					u = e.showAcceptChanges,
					d = e.onAcceptChanges,
					b = Object(i.useMemo)((function() {
						return fs(a, c)
					}), [a, c]),
					p = js(Object(i.useMemo)((function() {
						return ps(a)
					}), [a]).priceImpactWithoutFee),
					f = Object(i.useContext)(l.ThemeContext);
				return Object(r.jsxs)(Be, {
					gap: "md",
					style: {
						marginTop: "20px"
					},
					children: [Object(r.jsxs)(en, {
						align: "flex-end",
						children: [Object(r.jsxs)(rn, {
							gap: "0px",
							children: [Object(r.jsx)(ha, {
								currency: a.inputAmount.currency,
								size: "24px",
								style: {
									marginRight: "12px"
								}
							}), Object(r.jsx)(s.y, {
								fontSize: "24px",
								color: u && a.tradeType === $.m.EXACT_OUTPUT ? f.colors.primary : "text",
								children: a.inputAmount.toSignificant(6)
							})]
						}), Object(r.jsx)(rn, {
							gap: "0px",
							children: Object(r.jsx)(s.y, {
								fontSize: "24px",
								style: {
									marginLeft: "10px",
									fontWeight: 500
								},
								children: a.inputAmount.currency.symbol
							})
						})]
					}), Object(r.jsx)(rn, {
						children: Object(r.jsx)(Lu.a, {
							size: "16",
							color: f.colors.textSubtle,
							style: {
								marginLeft: "4px",
								minWidth: "16px"
							}
						})
					}), Object(r.jsxs)(en, {
						align: "flex-end",
						children: [Object(r.jsxs)(rn, {
							gap: "0px",
							children: [Object(r.jsx)(ha, {
								currency: a.outputAmount.currency,
								size: "24px",
								style: {
									marginRight: "12px"
								}
							}), Object(r.jsx)(s.y, {
								fontSize: "24px",
								style: {
									marginLeft: "10px",
									fontWeight: 500
								},
								color: p > 2 ? f.colors.failure : u && a.tradeType === $.m.EXACT_INPUT ? f.colors.primary : "text",
								children: a.outputAmount.toSignificant(6)
							})]
						}), Object(r.jsx)(rn, {
							gap: "0px",
							children: Object(r.jsx)(s.y, {
								fontSize: "24px",
								style: {
									marginLeft: "10px",
									fontWeight: 500
								},
								children: a.outputAmount.currency.symbol
							})
						})]
					}), u ? Object(r.jsx)(Bo, {
						justify: "flex-start",
						gap: "0px",
						children: Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(Wt.a, {
									size: 20,
									style: {
										marginRight: "8px",
										minWidth: 24
									}
								}), Object(r.jsx)(s.y, {
									color: "primary",
									children: " Price Updated"
								})]
							}), Object(r.jsx)(s.c, {
								onClick: d,
								children: "Accept"
							})]
						})
					}) : null, Object(r.jsx)(Be, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "16px 0 0"
						},
						children: a.tradeType === $.m.EXACT_INPUT ? Object(r.jsxs)(sl, {
							children: ["Output is estimated. You will receive at least ", Object(r.jsxs)("span", {
								children: [null === (n = b[Go.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6), " ", a.outputAmount.currency.symbol]
							}), " or the transaction will revert."]
						}) : Object(r.jsxs)(sl, {
							children: ["Input is estimated. You will sell at most ", Object(r.jsxs)("span", {
								children: [null === (t = b[Go.INPUT]) || void 0 === t ? void 0 : t.toSignificant(6), " ", a.inputAmount.currency.symbol]
							}), " or the transaction will revert."]
						})
					}), null !== o ? Object(r.jsx)(Be, {
						justify: "flex-start",
						gap: "sm",
						style: {
							padding: "16px 0 0"
						},
						children: Object(r.jsxs)(s.y, {
							children: ["Output will be sent to", " ", Object(r.jsx)("b", {
								title: o,
								children: fn(o) ? vn(o) : o
							})]
						})
					}) : null]
				})
			}

			function ll(e) {
				var n, t, a, c, o, s, u = e.trade,
					l = e.originalTrade,
					d = e.onAcceptChanges,
					b = e.allowedSlippage,
					p = e.onConfirm,
					f = e.onDismiss,
					j = e.recipient,
					h = e.swapErrorMessage,
					v = e.isOpen,
					m = e.attemptingTxn,
					y = e.txHash,
					O = Object(i.useMemo)((function() {
						return Boolean(u && l && (n = l, (e = u).tradeType !== n.tradeType || !Object($.o)(e.inputAmount.currency, n.inputAmount.currency) || !e.inputAmount.equalTo(n.inputAmount) || !Object($.o)(e.outputAmount.currency, n.outputAmount.currency) || !e.outputAmount.equalTo(n.outputAmount)));
						var e, n
					}), [l, u]),
					x = Object(i.useCallback)((function() {
						return u ? Object(r.jsx)(ul, {
							trade: u,
							allowedSlippage: b,
							recipient: j,
							showAcceptChanges: O,
							onAcceptChanges: d
						}) : null
					}), [b, d, j, O, u]),
					g = Object(i.useCallback)((function() {
						return u ? Object(r.jsx)(cl, {
							onConfirm: p,
							trade: u,
							disabledConfirm: O,
							swapErrorMessage: h,
							allowedSlippage: b
						}) : null
					}), [b, p, O, h, u]),
					C = "Swapping ".concat(null === u || void 0 === u || null === (n = u.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6), " ").concat(null === u || void 0 === u || null === (t = u.inputAmount) || void 0 === t || null === (a = t.currency) || void 0 === a ? void 0 : a.symbol, " for ").concat(null === u || void 0 === u || null === (c = u.outputAmount) || void 0 === c ? void 0 : c.toSignificant(6), " ").concat(null === u || void 0 === u || null === (o = u.outputAmount) || void 0 === o || null === (s = o.currency) || void 0 === s ? void 0 : s.symbol),
					w = Object(i.useCallback)((function() {
						return h ? Object(r.jsx)(Ht, {
							onDismiss: f,
							message: h
						}) : Object(r.jsx)(Vt, {
							title: "Confirm Swap",
							onDismiss: f,
							topContent: x,
							bottomContent: g
						})
					}), [f, g, x, h]);
				return Object(r.jsx)(Qt, {
					isOpen: v,
					onDismiss: f,
					attemptingTxn: m,
					hash: y,
					content: w,
					pendingText: C
				})
			}
			var dl = t(503),
				bl = Object(i.memo)((function(e) {
					var n = e.trade,
						t = Object(i.useContext)(l.ThemeContext);
					return Object(r.jsx)(s.n, {
						px: "1rem",
						py: "0.5rem",
						my: "0.5rem",
						style: {
							border: "1px solid ".concat(t.colors.tertiary),
							borderRadius: "1rem"
						},
						flexWrap: "wrap",
						justifyContent: "space-evenly",
						alignItems: "center",
						children: n.route.path.map((function(e, n, t) {
							var a = n === t.length - 1;
							return Object(r.jsxs)(i.Fragment, {
								children: [Object(r.jsxs)(s.n, {
									my: "0.5rem",
									alignItems: "center",
									style: {
										flexShrink: 0
									},
									children: [Object(r.jsx)(ha, {
										currency: e,
										size: "1.5rem"
									}), Object(r.jsx)(s.y, {
										fontSize: "14px",
										color: "text",
										ml: "0.5rem",
										children: e.symbol
									})]
								}), a ? null : Object(r.jsx)(dl.a, {
									color: "textSubtle"
								})]
							}, n)
						}))
					})
				}));

			function pl(e) {
				var n, t, i, a, c = e.trade,
					o = e.allowedSlippage,
					u = ps(c),
					l = u.priceImpactWithoutFee,
					d = u.realizedLPFee,
					b = c.tradeType === $.m.EXACT_INPUT,
					p = fs(c, o),
					f = Zt();
				return Object(r.jsx)(s.f, {
					children: Object(r.jsxs)(s.g, {
						children: [Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: b ? f(1210, "Minimum received") : f(220, "Maximum sold")
								}), Object(r.jsx)(sa, {
									text: f(202, "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.")
								})]
							}), Object(r.jsx)(rn, {
								children: Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: b ? null !== (n = "".concat(null === (t = p[Go.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(4), " ").concat(c.outputAmount.currency.symbol)) && void 0 !== n ? n : "-" : null !== (i = "".concat(null === (a = p[Go.INPUT]) || void 0 === a ? void 0 : a.toSignificant(4), " ").concat(c.inputAmount.currency.symbol)) && void 0 !== i ? i : "-"
								})
							})]
						}), Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: "Price Impact"
								}), Object(r.jsx)(sa, {
									text: f(224, "The difference between the market price and estimated price due to trade size.")
								})]
							}), Object(r.jsx)(al, {
								priceImpact: l
							})]
						}), Object(r.jsxs)(en, {
							children: [Object(r.jsxs)(rn, {
								children: [Object(r.jsx)(s.y, {
									fontSize: "14px",
									children: "Liquidity Provider Fee"
								}), Object(r.jsx)(sa, {
									text: f(230, "For each trade a 0.2% fee is paid. 0.17% goes to liquidity providers and 0.03% goes to the PancakeSwap treasury.")
								})]
							}), Object(r.jsx)(s.y, {
								fontSize: "14px",
								children: d ? "".concat(d.toSignificant(4), " ").concat(c.inputAmount.currency.symbol) : "-"
							})]
						})]
					})
				})
			}

			function fl(e) {
				var n = e.trade,
					t = Xr(),
					i = Object(v.a)(t, 1)[0],
					a = Zt(),
					c = Boolean(n && n.route.path.length > 2);
				return Object(r.jsx)(Be, {
					gap: "md",
					children: n && Object(r.jsxs)(r.Fragment, {
						children: [Object(r.jsx)(pl, {
							trade: n,
							allowedSlippage: i
						}), c && Object(r.jsxs)(r.Fragment, {
							children: [Object(r.jsx)(Eo, {}), Object(r.jsxs)(Be, {
								style: {
									padding: "0 24px"
								},
								children: [Object(r.jsxs)(rn, {
									children: [Object(r.jsx)(s.y, {
										fontSize: "14px",
										children: "Route"
									}), Object(r.jsx)(sa, {
										text: a(999, "Routing through these tokens resulted in the best price for your trade.")
									})]
								}), Object(r.jsx)(bl, {
									trade: n
								})]
							})]
						})]
					})
				})
			}

			function jl() {
				var e = Object(u.a)(["\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  z-index: 1;\n\n  transform: ", ";\n  transition: transform 300ms ease-in-out;\n"]);
				return jl = function() {
					return e
				}, e
			}
			var hl = l.default.div(jl(), (function(e) {
				return e.theme.colors.textSubtle
			}), (function(e) {
				return e.show ? "translateY(0%)" : "translateY(-100%)"
			}));

			function vl(e) {
				var n, t = e.trade,
					i = Object(gn.a)(e, ["trade"]),
					a = ki(t, Ti);
				return Object(r.jsx)(hl, {
					show: Boolean(t),
					children: Object(r.jsx)(fl, Object(X.a)(Object(X.a)({}, i), {}, {
						trade: null !== (n = null !== t && void 0 !== t ? t : a) && void 0 !== n ? n : void 0
					}))
				})
			}

			function ml(e) {
				var n, t, i, a, c, o = e.price,
					u = e.showInverted,
					l = e.setShowInverted,
					d = u ? null === o || void 0 === o ? void 0 : o.toSignificant(6) : null === o || void 0 === o || null === (n = o.invert()) || void 0 === n ? void 0 : n.toSignificant(6),
					b = Boolean((null === o || void 0 === o ? void 0 : o.baseCurrency) && (null === o || void 0 === o ? void 0 : o.quoteCurrency)),
					p = u ? "".concat(null === o || void 0 === o || null === (t = o.quoteCurrency) || void 0 === t ? void 0 : t.symbol, " per ").concat(null === o || void 0 === o || null === (i = o.baseCurrency) || void 0 === i ? void 0 : i.symbol) : "".concat(null === o || void 0 === o || null === (a = o.baseCurrency) || void 0 === a ? void 0 : a.symbol, " per ").concat(null === o || void 0 === o || null === (c = o.quoteCurrency) || void 0 === c ? void 0 : c.symbol);
				return Object(r.jsx)(s.y, {
					fontSize: "14px",
					style: {
						justifyContent: "center",
						alignItems: "center",
						display: "flex"
					},
					children: b ? Object(r.jsxs)(r.Fragment, {
						children: [null !== d && void 0 !== d ? d : "-", " ", p, Object(r.jsx)(So, {
							onClick: function() {
								return l(!u)
							},
							children: Object(r.jsx)(s.x, {
								width: "20px",
								color: "primary"
							})
						})]
					}) : "-"
				})
			}

			function yl() {
				var e = Object(u.a)(["\n  stroke: ", ";\n"]);
				return yl = function() {
					return e
				}, e
			}

			function Ol() {
				var e = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]);
				return Ol = function() {
					return e
				}, e
			}

			function xl() {
				var e = Object(u.a)(["\n  background: ", ";\n  padding: 0.75rem;\n  border-radius: 20px;\n"]);
				return xl = function() {
					return e
				}, e
			}
			var gl = l.default.div(xl(), (function(e) {
					var n = e.theme;
					return Object(vt.b)(.6, n.colors.tertiary)
				})),
				Cl = l.default.div(Ol()),
				wl = Object(l.default)(Wt.a)(yl(), (function(e) {
					return e.theme.colors.failure
				}));

			function kl(e) {
				var n, t, a, c, o = e.token,
					u = ge().chainId,
					l = Zt(),
					d = null !== (n = null === o || void 0 === o || null === (t = o.symbol) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== n ? n : "",
					b = null !== (a = null === o || void 0 === o || null === (c = o.name) || void 0 === c ? void 0 : c.toLowerCase()) && void 0 !== a ? a : "",
					p = fi(),
					f = Object(i.useMemo)((function() {
						return !(!o || !u) && Object.keys(p).some((function(e) {
							var n, t, r = p[e];
							return !r.equals(o) && ((null === (n = r.symbol) || void 0 === n ? void 0 : n.toLowerCase()) === d || (null === (t = r.name) || void 0 === t ? void 0 : t.toLowerCase()) === b)
						}))
					}), [o, u, p, d, b]);
				return o ? Object(r.jsx)(gl, {
					error: f,
					children: Object(r.jsxs)(tn, {
						gap: "6px",
						children: [Object(r.jsxs)(Be, {
							gap: "24px",
							children: [Object(r.jsx)(ha, {
								currency: o,
								size: "16px"
							}), Object(r.jsx)("div", {
								children: " "
							})]
						}), Object(r.jsxs)(Be, {
							gap: "10px",
							justify: "flex-start",
							children: [Object(r.jsxs)(s.y, {
								children: [o && o.name && o.symbol && o.name !== o.symbol ? "".concat(o.name, " (").concat(o.symbol, ")") : o.name || o.symbol, " "]
							}), u && Object(r.jsx)(Sn, {
								style: {
									fontWeight: 400
								},
								href: hn(u, o.address, "token"),
								children: Object(r.jsxs)(s.y, {
									title: o.address,
									children: [vn(o.address), " ", l(116, "(View on BscScan)")]
								})
							})]
						})]
					})
				}) : null
			}

			function Tl(e) {
				var n = e.isOpen,
					t = e.tokens,
					a = e.onConfirm,
					c = Object(i.useState)(!1),
					o = Object(v.a)(c, 2),
					u = o[0],
					l = o[1],
					d = Object(i.useCallback)((function() {
						return l((function(e) {
							return !e
						}))
					}), []),
					b = Zt(),
					p = Object(i.useCallback)((function() {
						return null
					}), []);
				return Object(r.jsx)(Tt, {
					isOpen: n,
					onDismiss: p,
					maxHeight: 90,
					children: Object(r.jsx)(Cl, {
						className: "token-warning-container",
						children: Object(r.jsxs)(Be, {
							gap: "lg",
							children: [Object(r.jsxs)(tn, {
								gap: "6px",
								children: [Object(r.jsx)(wl, {}), Object(r.jsx)(s.y, {
									color: "failure",
									children: b(1128, "Token imported")
								})]
							}), Object(r.jsx)(s.y, {
								children: b(1130, "Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects that do not have a token.")
							}), Object(r.jsx)(s.y, {
								children: b(1132, "This interface can load arbitrary tokens by token addresses. Please take extra caution and do your research when interacting with arbitrary BEP20 tokens.")
							}), Object(r.jsx)(s.y, {
								children: b(1134, "If you purchase an arbitrary token, you may be unable to sell it back.")
							}), t.map((function(e) {
								return Object(r.jsx)(kl, {
									token: e
								}, e.address)
							})), Object(r.jsxs)(en, {
								children: [Object(r.jsx)("div", {
									children: Object(r.jsxs)("label", {
										htmlFor: "understand-checkbox",
										style: {
											cursor: "pointer",
											userSelect: "none"
										},
										children: [Object(r.jsx)("input", {
											id: "understand-checkbox",
											type: "checkbox",
											className: "understand-checkbox",
											checked: u,
											onChange: d
										}), " ", Object(r.jsx)(s.y, {
											as: "span",
											ml: "4px",
											children: b(148, "I understand")
										})]
									})
								}), Object(r.jsx)(s.c, {
									disabled: !u,
									variant: "danger",
									style: {
										width: "140px"
									},
									className: "token-dismiss-button",
									onClick: function() {
										a()
									},
									children: b(150, "Continue")
								})]
							})]
						})
					})
				})
			}

			function Il() {
				var e = Object(u.a)(["\n  stroke: ", ";\n"]);
				return Il = function() {
					return e
				}, e
			}

			function El() {
				var e = Object(u.a)(["\n  max-width: 420px;\n  width: 100%;\n  padding: 1rem;\n  background: rgba(242, 150, 2, 0.05);\n  border: 1px solid #f3841e;\n  border-radius: 20px;\n  overflow: auto;\n"]);
				return El = function() {
					return e
				}, e
			}
			var Nl = l.default.div(El()),
				Rl = Object(l.default)(Wt.a)(Il(), (function(e) {
					return e.theme.colors.failure
				}));

			function Sl(e) {
				var n = e.isOpen,
					t = e.transactionType,
					a = e.onConfirm,
					c = Object(i.useState)(!1),
					o = Object(v.a)(c, 2),
					u = o[0],
					l = o[1],
					d = Object(i.useCallback)((function() {
						return l((function(e) {
							return !e
						}))
					}), []),
					b = Object(i.useCallback)((function() {
						return null
					}), []);
				return Object(r.jsx)(Tt, {
					isOpen: n,
					onDismiss: b,
					maxHeight: 90,
					children: Object(r.jsx)(Nl, {
						className: "token-warning-container",
						children: Object(r.jsxs)(Be, {
							gap: "lg",
							children: [Object(r.jsxs)(tn, {
								gap: "6px",
								children: [Object(r.jsx)(Rl, {}), Object(r.jsx)(s.y, {
									color: "failure",
									children: "Syrup Warning"
								})]
							}), "" !== t && Object(r.jsxs)(r.Fragment, {
								children: [Object(r.jsxs)(s.y, {
									color: "failure",
									children: ["Please be careful when ", Object(r.jsx)("strong", {
										children: t
									}), " SYRUP."]
								}), Object(r.jsx)(s.y, {
									color: "failure",
									children: "Buying" === t ? "You will not receive CAKE rewards for holding purchased SYRUP." : "You will need to buy back the same amount of SYRUP to be able to convert back to CAKE."
								})]
							}), Object(r.jsxs)(en, {
								children: [Object(r.jsx)("div", {
									children: Object(r.jsxs)("label", {
										htmlFor: "understand-checkbox",
										style: {
											cursor: "pointer",
											userSelect: "none"
										},
										children: [Object(r.jsx)("input", {
											id: "understand-checkbox",
											type: "checkbox",
											className: "understand-checkbox",
											checked: u,
											onChange: d
										}), " ", Object(r.jsx)(s.y, {
											as: "span",
											children: "I understand"
										})]
									})
								}), Object(r.jsx)(s.c, {
									disabled: !u,
									variant: "danger",
									style: {
										width: "140px"
									},
									onClick: function() {
										l(!1), a()
									},
									children: "Continue"
								})]
							})]
						})
					})
				})
			}

			function Ul() {
				var e = Object(u.a)(["\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ", " 0%,\n    ", " 80%\n  );\n  opacity: 0.6;\n"]);
				return Ul = function() {
					return e
				}, e
			}

			function Al() {
				var e = Object(u.a)(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
				return Al = function() {
					return e
				}, e
			}

			function Pl() {
				var e = Object(u.a)(["\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n  color: ", ";\n"]);
				return Pl = function() {
					return e
				}, e
			}

			function Ml() {
				var e = Object(u.a)(["\n  width: 50%;\n"]);
				return Ml = function() {
					return e
				}, e
			}

			function Bl() {
				var e = Object(u.a)(["\n  margin-top: 1.25rem;\n"]);
				return Bl = function() {
					return e
				}, e
			}
			var Ll, _l = Object(l.default)(Be)(Bl()),
				Dl = Object(l.default)(en)(Ml()),
				Yl = l.default.div(Pl(), (function(e) {
					var n = e.theme,
						t = e.confirmed;
					return e.disabled ? n.colors.backgroundDisabled : t ? n.colors.success : n.colors.primary
				}), (function(e) {
					var n = e.theme,
						t = e.confirmed;
					return e.disabled ? n.colors.text : t ? n.colors.success : "#FFFFFF"
				})),
				zl = l.default.div(Al()),
				Fl = l.default.div(Ul(), (function(e) {
					var n = e.theme,
						t = e.prevConfirmed;
					return Object(vt.b)(.5, t ? n.colors.success : n.colors.primary)
				}), (function(e) {
					var n = e.theme;
					return e.prevConfirmed ? n.colors.primary : n.colors.backgroundDisabled
				}));

			function ql(e) {
				var n = e.steps;
				return Object(r.jsx)(_l, {
					justify: "center",
					children: Object(r.jsxs)(Dl, {
						children: [n.map((function(e, t) {
							return Object(r.jsxs)(zl, {
								children: [Object(r.jsx)(Yl, {
									confirmed: e,
									disabled: !n[t - 1] && 0 !== t,
									children: e ? "\u2713" : t + 1
								}), Object(r.jsx)(Fl, {
									prevConfirmed: e
								})]
							}, t)
						})), Object(r.jsx)(Yl, {
							disabled: !n[n.length - 1],
							children: n.length + 1
						})]
					})
				})
			}

			function Vl(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be,
					t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pe,
					r = arguments.length > 3 ? arguments[3] : void 0,
					a = ge(),
					c = a.account,
					o = a.chainId,
					s = a.library,
					u = gs(r),
					l = u.address,
					d = null === r ? c : l;
				return Object(i.useMemo)((function() {
					if (!e || !d || !s || !c || !o) return [];
					var r = xn(0, s, c);
					if (!r) return [];
					var i = [];
					return i.push($.i.swapCallParameters(e, {
						feeOnTransfer: !1,
						allowedSlippage: new $.g($.e.BigInt(Math.floor(n)), je),
						recipient: d,
						ttl: t
					})), e.tradeType === $.m.EXACT_INPUT && i.push($.i.swapCallParameters(e, {
						feeOnTransfer: !0,
						allowedSlippage: new $.g($.e.BigInt(Math.floor(n)), je),
						recipient: d,
						ttl: t
					})), i.map((function(e) {
						return {
							parameters: e,
							contract: r
						}
					}))
				}), [c, n, o, t, s, d, e])
			}

			function Wl(e) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be,
					t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pe,
					r = arguments.length > 3 ? arguments[3] : void 0,
					a = ge(),
					c = a.account,
					o = a.chainId,
					s = a.library,
					u = Vl(e, n, t, r),
					l = as(),
					d = gs(r),
					b = d.address,
					p = null === r ? c : b;
				return Object(i.useMemo)((function() {
					return e && s && c && o ? p ? {
						state: Ll.VALID,
						callback: function() {
							var n = Object(h.a)(j.a.mark((function n() {
								var t, i, a, o, s, d, b, f, h, v;
								return j.a.wrap((function(n) {
									for (;;) switch (n.prev = n.next) {
										case 0:
											return n.next = 2, Promise.all(u.map((function(e) {
												var n, t = e.parameters,
													r = t.methodName,
													i = t.args,
													a = t.value,
													c = e.contract,
													o = !a || _i(a) ? {} : {
														value: a
													};
												return (n = c.estimateGas)[r].apply(n, Object(J.a)(i).concat([o])).then((function(n) {
													return {
														call: e,
														gasEstimate: n
													}
												})).catch((function(n) {
													var t;
													return console.info("Gas estimate failed, trying eth_call to extract error", e), (t = c.callStatic)[r].apply(t, Object(J.a)(i).concat([o])).then((function(t) {
														return console.info("Unexpected successful call after failed estimate gas", e, n, t), {
															call: e,
															error: new Error("Unexpected issue with estimating the gas. Please try again.")
														}
													})).catch((function(n) {
														var t;
														switch (console.info("Call threw error", e, n), n.reason) {
															case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
															case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
																t = "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.";
																break;
															default:
																t = "The transaction cannot succeed due to error: ".concat(n.reason, ". This is probably an issue with one of the tokens you are swapping.")
														}
														return {
															call: e,
															error: new Error(t)
														}
													}))
												}))
											})));
										case 2:
											if (t = n.sent, i = t.find((function(e, n, t) {
													return "gasEstimate" in e && (n === t.length - 1 || "gasEstimate" in t[n + 1])
												}))) {
												n.next = 9;
												break
											}
											if (!((a = t.filter((function(e) {
													return "error" in e
												}))).length > 0)) {
												n.next = 8;
												break
											}
											throw a[a.length - 1].error;
										case 8:
											throw new Error("Unexpected error. Please contact support: none of the calls threw an error");
										case 9:
											return o = i.call, s = o.contract, d = o.parameters, b = d.methodName, f = d.args, h = d.value, v = i.gasEstimate, n.abrupt("return", s[b].apply(s, Object(J.a)(f).concat([Object(X.a)({
												gasLimit: mn(v)
											}, h && !_i(h) ? {
												value: h,
												from: c
											} : {
												from: c
											})])).then((function(n) {
												var t = e.inputAmount.currency.symbol,
													i = e.outputAmount.currency.symbol,
													a = e.inputAmount.toSignificant(3),
													o = e.outputAmount.toSignificant(3),
													s = "Swap ".concat(a, " ").concat(t, " for ").concat(o, " ").concat(i),
													u = p === c ? s : "".concat(s, " to ").concat(r && fn(r) ? vn(r) : r);
												return l(n, {
													summary: u
												}), n.hash
											})).catch((function(e) {
												throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, b, f, h), new Error("Swap failed: ".concat(e.message)))
											})));
										case 11:
										case "end":
											return n.stop()
									}
								}), n)
							})));
							return function() {
								return n.apply(this, arguments)
							}
						}(),
						error: null
					} : null !== r ? {
						state: Ll.INVALID,
						callback: null,
						error: "Invalid recipient"
					} : {
						state: Ll.LOADING,
						callback: null,
						error: null
					} : {
						state: Ll.INVALID,
						callback: null,
						error: "Missing dependencies"
					}
				}), [e, s, c, o, p, r, u, l])
			}! function(e) {
				e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
			}(Ll || (Ll = {}));
			var Hl;
			! function(e) {
				e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
			}(Hl || (Hl = {}));
			var Ql = {
				wrapType: Hl.NOT_APPLICABLE
			};

			function Kl(e, n, t) {
				var r = ge(),
					a = r.chainId,
					c = r.account,
					o = function(e) {
						var n = ge().chainId;
						return ui(n ? $.n[n].address : void 0, ci, e)
					}(),
					s = wi(null !== c && void 0 !== c ? c : void 0, e),
					u = Object(i.useMemo)((function() {
						return Ts(t, e)
					}), [e, t]),
					l = as();
				return Object(i.useMemo)((function() {
					if (!o || !a || !e || !n) return Ql;
					var t = u && s && !s.lessThan(u);
					return e === $.d && Object($.o)($.n[a], n) ? {
						wrapType: Hl.WRAP,
						execute: t && u ? Object(h.a)(j.a.mark((function e() {
							var n;
							return j.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, o.deposit({
											value: "0x".concat(u.raw.toString(16))
										});
									case 3:
										n = e.sent, l(n, {
											summary: "Wrap ".concat(u.toSignificant(6), " BNB to WBNB")
										}), e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
									case 10:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[0, 7]
							])
						}))) : void 0,
						inputError: t ? void 0 : "Insufficient ETH balance"
					} : Object($.o)($.n[a], e) && n === $.d ? {
						wrapType: Hl.UNWRAP,
						execute: t && u ? Object(h.a)(j.a.mark((function e() {
							var n;
							return j.a.wrap((function(e) {
								for (;;) switch (e.prev = e.next) {
									case 0:
										return e.prev = 0, e.next = 3, o.withdraw("0x".concat(u.raw.toString(16)));
									case 3:
										n = e.sent, l(n, {
											summary: "Unwrap ".concat(u.toSignificant(6), " WBNB to BNB")
										}), e.next = 10;
										break;
									case 7:
										e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
									case 10:
									case "end":
										return e.stop()
								}
							}), e, null, [
								[0, 7]
							])
						}))) : void 0,
						inputError: t ? void 0 : "Insufficient WBNB balance"
					} : Ql
				}), [o, a, e, n, u, s, l])
			}
			var Gl = function() {
				var e, n, t, a, c, o, u, d, b, p, f = Ps(),
					j = Zt(),
					h = [mi(null === f || void 0 === f ? void 0 : f.inputCurrencyId), mi(null === f || void 0 === f ? void 0 : f.outputCurrencyId)],
					m = h[0],
					y = h[1],
					O = Object(i.useState)(!1),
					g = Object(v.a)(O, 2),
					C = g[0],
					k = g[1],
					T = Object(i.useState)(!1),
					I = Object(v.a)(T, 2),
					E = I[0],
					N = I[1],
					R = Object(i.useState)(""),
					S = Object(v.a)(R, 2),
					U = S[0],
					A = S[1],
					P = Object(i.useMemo)((function() {
						var e, n;
						return null !== (e = null === (n = [m, y]) || void 0 === n ? void 0 : n.filter((function(e) {
							return e instanceof $.j
						}))) && void 0 !== e ? e : []
					}), [m, y]),
					M = Object(i.useCallback)((function() {
						k(!0)
					}), []),
					B = Object(i.useCallback)((function() {
						N(!1), A("")
					}), []),
					L = ge().account,
					_ = Object(i.useContext)(l.ThemeContext),
					D = function() {
						var e = Object(x.c)(),
							n = Jr(),
							t = Object(i.useCallback)((function() {
								e(_r({
									userExpertMode: !n
								}))
							}), [n, e]);
						return [n, t]
					}(),
					Y = Object(v.a)(D, 1)[0],
					z = $r(),
					F = Object(v.a)(z, 1)[0],
					q = Xr(),
					V = Object(v.a)(q, 1)[0],
					W = ks(),
					H = W.independentField,
					Q = W.typedValue,
					K = W.recipient,
					G = Ns(),
					J = G.v2Trade,
					ee = G.currencyBalances,
					ne = G.parsedAmount,
					te = G.currencies,
					re = G.inputError,
					ie = Kl(te[Go.INPUT], te[Go.OUTPUT], Q),
					ae = ie.wrapType,
					ce = ie.execute,
					oe = ie.inputError,
					se = ae !== Hl.NOT_APPLICABLE,
					ue = se ? void 0 : J,
					le = se ? (e = {}, Object(w.a)(e, Go.INPUT, ne), Object(w.a)(e, Go.OUTPUT, ne), e) : (n = {}, Object(w.a)(n, Go.INPUT, H === Go.INPUT ? ne : null === ue || void 0 === ue ? void 0 : ue.inputAmount), Object(w.a)(n, Go.OUTPUT, H === Go.OUTPUT ? ne : null === ue || void 0 === ue ? void 0 : ue.outputAmount), n),
					de = function() {
						var e = Object(x.c)(),
							n = Object(i.useCallback)((function(n, t) {
								e(Jo({
									field: n,
									currencyId: t instanceof $.j ? t.address : t === $.d ? "ETH" : ""
								}))
							}), [e]);
						return {
							onSwitchTokens: Object(i.useCallback)((function() {
								e(Xo())
							}), [e]),
							onCurrencySelection: n,
							onUserInput: Object(i.useCallback)((function(n, t) {
								e($o({
									field: n,
									typedValue: t
								}))
							}), [e]),
							onChangeRecipient: Object(i.useCallback)((function(n) {
								e(es({
									recipient: n
								}))
							}), [e])
						}
					}(),
					pe = de.onSwitchTokens,
					fe = de.onCurrencySelection,
					je = de.onUserInput,
					he = de.onChangeRecipient,
					ve = !re,
					Oe = H === Go.INPUT ? Go.OUTPUT : Go.INPUT,
					xe = Object(i.useCallback)((function(e) {
						je(Go.INPUT, e)
					}), [je]),
					Ce = Object(i.useCallback)((function(e) {
						je(Go.OUTPUT, e)
					}), [je]),
					we = Object(i.useState)({
						showConfirm: !1,
						tradeToConfirm: void 0,
						attemptingTxn: !1,
						swapErrorMessage: void 0,
						txHash: void 0
					}),
					ke = Object(v.a)(we, 2),
					Te = ke[0],
					Ie = Te.showConfirm,
					Ee = Te.tradeToConfirm,
					Ne = Te.swapErrorMessage,
					Re = Te.attemptingTxn,
					Se = Te.txHash,
					Ue = ke[1],
					Ae = (u = {}, Object(w.a)(u, H, Q), Object(w.a)(u, Oe, se ? null !== (t = null === (a = le[H]) || void 0 === a ? void 0 : a.toExact()) && void 0 !== t ? t : "" : null !== (c = null === (o = le[Oe]) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== c ? c : ""), u),
					Pe = null === ue || void 0 === ue ? void 0 : ue.route,
					Me = Boolean(te[Go.INPUT] && te[Go.OUTPUT] && (null === (d = le[H]) || void 0 === d ? void 0 : d.greaterThan($.e.BigInt(0)))),
					Le = !Pe,
					_e = function(e) {
						var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						return vs(Object(i.useMemo)((function() {
							return e ? fs(e, n)[Go.INPUT] : void 0
						}), [e, n]), Z)
					}(ue, V),
					De = Object(v.a)(_e, 2),
					Ye = De[0],
					ze = De[1],
					Fe = Object(i.useState)(!1),
					qe = Object(v.a)(Fe, 2),
					Ve = qe[0],
					We = qe[1];
				Object(i.useEffect)((function() {
					Ye === ss.PENDING && We(!0)
				}), [Ye, Ve]);
				var He = Ls(ee[Go.INPUT]),
					Qe = Boolean(He && (null === (b = le[Go.INPUT]) || void 0 === b ? void 0 : b.equalTo(He))),
					Ke = Wl(ue, V, F, K),
					Ge = Ke.callback,
					Je = Ke.error,
					Xe = ps(ue).priceImpactWithoutFee,
					$e = Object(i.useCallback)((function() {
						Xe && ! function(e) {
							return e.lessThan(ye) ? !!e.lessThan(me) || window.confirm("This swap has a price impact of at least ".concat(me.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(ye.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))
						}(Xe) || Ge && (Ue((function(e) {
							return Object(X.a)(Object(X.a)({}, e), {}, {
								attemptingTxn: !0,
								swapErrorMessage: void 0,
								txHash: void 0
							})
						})), Ge().then((function(e) {
							Ue((function(n) {
								return Object(X.a)(Object(X.a)({}, n), {}, {
									attemptingTxn: !1,
									swapErrorMessage: void 0,
									txHash: e
								})
							}))
						})).catch((function(e) {
							Ue((function(n) {
								return Object(X.a)(Object(X.a)({}, n), {}, {
									attemptingTxn: !1,
									swapErrorMessage: e.message,
									txHash: void 0
								})
							}))
						})))
					}), [Xe, Ge, Ue]),
					Ze = Object(i.useState)(!1),
					nn = Object(v.a)(Ze, 2),
					rn = nn[0],
					an = nn[1],
					cn = js(Xe),
					on = !re && (Ye === ss.NOT_APPROVED || Ye === ss.PENDING || Ve && Ye === ss.APPROVED) && !(cn > 3 && !Y),
					sn = Object(i.useCallback)((function() {
						Ue((function(e) {
							return Object(X.a)(Object(X.a)({}, e), {}, {
								showConfirm: !1
							})
						})), Se && je(Go.INPUT, "")
					}), [je, Se, Ue]),
					un = Object(i.useCallback)((function() {
						Ue((function(e) {
							return Object(X.a)(Object(X.a)({}, e), {}, {
								tradeToConfirm: ue
							})
						}))
					}), [ue]),
					ln = Object(i.useCallback)((function(e, n) {
						"syrup" === e && (N(!0), A(n))
					}), [N, A]),
					dn = Object(i.useCallback)((function(e) {
						We(!1), fe(Go.INPUT, e), "syrup" === e.symbol.toLowerCase() && ln(e.symbol.toLowerCase(), "Selling")
					}), [fe, We, ln]),
					bn = Object(i.useCallback)((function() {
						He && je(Go.INPUT, He.toExact())
					}), [He, je]),
					pn = Object(i.useCallback)((function(e) {
						fe(Go.OUTPUT, e), "syrup" === e.symbol.toLowerCase() && ln(e.symbol.toLowerCase(), "Buying")
					}), [fe, ln]);
				return Object(r.jsxs)(r.Fragment, {
					children: [Object(r.jsx)(Tl, {
						isOpen: P.length > 0 && !C,
						tokens: P,
						onConfirm: M
					}), Object(r.jsx)(Sl, {
						isOpen: E,
						transactionType: U,
						onConfirm: B
					}), Object(r.jsx)(rr, {}), Object(r.jsx)(qs, {
						children: Object(r.jsxs)(To, {
							id: "swap-page",
							children: [Object(r.jsx)(ll, {
								isOpen: Ie,
								trade: ue,
								originalTrade: Ee,
								onAcceptChanges: un,
								attemptingTxn: Re,
								txHash: Se,
								recipient: K,
								allowedSlippage: V,
								onConfirm: $e,
								swapErrorMessage: Ne,
								onDismiss: sn
							}), Object(r.jsx)(Uu, {
								title: j(8, "Exchange"),
								description: j(1192, "Trade tokens in an instant")
							}), Object(r.jsxs)(s.g, {
								children: [Object(r.jsxs)(Be, {
									gap: "md",
									children: [Object(r.jsx)($c, {
										label: H === Go.OUTPUT && !se && ue ? j(194, "From (estimated)") : j(76, "From"),
										value: Ae[Go.INPUT],
										showMaxButton: !Qe,
										currency: te[Go.INPUT],
										onUserInput: xe,
										onMax: bn,
										onCurrencySelect: dn,
										otherCurrency: te[Go.OUTPUT],
										id: "swap-currency-input"
									}), Object(r.jsx)(Be, {
										justify: "space-between",
										children: Object(r.jsxs)(tn, {
											justify: Y ? "space-between" : "center",
											style: {
												padding: "0 1rem"
											},
											children: [Object(r.jsx)(Io, {
												clickable: !0,
												children: Object(r.jsx)(s.p, {
													variant: "tertiary",
													onClick: function() {
														We(!1), pe()
													},
													style: {
														borderRadius: "50%"
													},
													scale: "sm",
													children: Object(r.jsx)(s.b, {
														color: "primary",
														width: "24px"
													})
												})
											}), null === K && !se && Y ? Object(r.jsx)(En, {
												id: "add-recipient-button",
												onClick: function() {
													return he("")
												},
												children: "+ Add a send (optional)"
											}) : null]
										})
									}), Object(r.jsx)($c, {
										value: Ae[Go.OUTPUT],
										onUserInput: Ce,
										label: H === Go.INPUT && !se && ue ? j(196, "To (estimated)") : j(80, "To"),
										showMaxButton: !1,
										currency: te[Go.OUTPUT],
										onCurrencySelect: pn,
										otherCurrency: te[Go.INPUT],
										id: "swap-currency-output"
									}), null === K || se ? null : Object(r.jsxs)(r.Fragment, {
										children: [Object(r.jsxs)(tn, {
											justify: "space-between",
											style: {
												padding: "0 1rem"
											},
											children: [Object(r.jsx)(Io, {
												clickable: !1,
												children: Object(r.jsx)(Lu.a, {
													size: "16",
													color: _.colors.textSubtle
												})
											}), Object(r.jsx)(En, {
												id: "remove-recipient-button",
												onClick: function() {
													return he(null)
												},
												children: "- Remove send"
											})]
										}), Object(r.jsx)(rl, {
											id: "recipient",
											value: K,
											onChange: he
										})]
									}), se ? null : Object(r.jsx)(pt, {
										padding: ".25rem .75rem 0 .75rem",
										borderRadius: "20px",
										children: Object(r.jsxs)(Be, {
											gap: "4px",
											children: [Boolean(ue) && Object(r.jsxs)(en, {
												align: "center",
												children: [Object(r.jsx)(s.y, {
													fontSize: "14px",
													children: j(1182, "Price")
												}), Object(r.jsx)(ml, {
													price: null === ue || void 0 === ue ? void 0 : ue.executionPrice,
													showInverted: rn,
													setShowInverted: an
												})]
											}), V !== be && Object(r.jsxs)(en, {
												align: "center",
												children: [Object(r.jsx)(s.y, {
													fontSize: "14px",
													children: j(88, "Slippage Tolerance")
												}), Object(r.jsxs)(s.y, {
													fontSize: "14px",
													children: [V / 100, "%"]
												})]
											})]
										})
									})]
								}), Object(r.jsxs)(No, {
									children: [L ? se ? Object(r.jsx)(s.c, {
										disabled: Boolean(oe),
										onClick: ce,
										width: "100%",
										children: null !== oe && void 0 !== oe ? oe : ae === Hl.WRAP ? "Wrap" : ae === Hl.UNWRAP ? "Unwrap" : null
									}) : Le && Me ? Object(r.jsx)(jt, {
										style: {
											textAlign: "center"
										},
										children: Object(r.jsx)(s.y, {
											mb: "4px",
											children: j(1194, "Insufficient liquidity for this trade.")
										})
									}) : on ? Object(r.jsxs)(en, {
										children: [Object(r.jsx)(s.c, {
											onClick: ze,
											disabled: Ye !== ss.NOT_APPROVED || Ve,
											style: {
												width: "48%"
											},
											variant: Ye === ss.APPROVED ? "success" : "primary",
											children: Ye === ss.PENDING ? Object(r.jsxs)(tn, {
												gap: "6px",
												justify: "center",
												children: ["Approving ", Object(r.jsx)(rt, {
													stroke: "white"
												})]
											}) : Ve && Ye === ss.APPROVED ? "Approved" : "Approve ".concat(null === (p = te[Go.INPUT]) || void 0 === p ? void 0 : p.symbol)
										}), Object(r.jsx)(s.c, {
											onClick: function() {
												Y ? $e() : Ue({
													tradeToConfirm: ue,
													attemptingTxn: !1,
													swapErrorMessage: void 0,
													showConfirm: !0,
													txHash: void 0
												})
											},
											style: {
												width: "48%"
											},
											id: "swap-button",
											disabled: !ve || Ye !== ss.APPROVED || cn > 3 && !Y,
											variant: ve && cn > 2 ? "danger" : "primary",
											children: cn > 3 && !Y ? "Price Impact High" : "Swap".concat(cn > 2 ? " Anyway" : "")
										})]
									}) : Object(r.jsx)(s.c, {
										onClick: function() {
											Y ? $e() : Ue({
												tradeToConfirm: ue,
												attemptingTxn: !1,
												swapErrorMessage: void 0,
												showConfirm: !0,
												txHash: void 0
											})
										},
										id: "swap-button",
										disabled: !ve || cn > 3 && !Y || !!Je,
										variant: ve && cn > 2 && !Je ? "danger" : "primary",
										width: "100%",
										children: re || (cn > 3 && !Y ? "Price Impact Too High" : "Swap".concat(cn > 2 ? " Anyway" : ""))
									}) : Object(r.jsx)(Ys, {
										width: "100%"
									}), on && Object(r.jsx)(ql, {
										steps: [Ye === ss.APPROVED]
									}), Y && Ne ? Object(r.jsx)(Mo, {
										error: Ne
									}) : null]
								})]
							})]
						})
					}), Object(r.jsx)(vl, {
						trade: ue
					})]
				})
			};

			function Jl(e) {
				var n = e.location;
				return Object(r.jsx)(y.a, {
					to: Object(X.a)(Object(X.a)({}, n), {}, {
						pathname: "/swap"
					})
				})
			}
			var Xl = {
					code: "en",
					language: "English"
				},
				$l = [Xl, {
					code: "ar",
					language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"
				}, {
					code: "bn",
					language: "\u09ac\u09be\u0982\u09b2\u09be"
				}, {
					code: "zh-CN",
					language: "\u7b80\u4f53\u4e2d\u6587"
				}, {
					code: "zh-TW",
					language: "\u7e41\u9ad4\u4e2d\u6587"
				}, {
					code: "nl",
					language: "Nederlands"
				}, {
					code: "fil",
					language: "Filipino"
				}, {
					code: "fi",
					language: "Suomalainen"
				}, {
					code: "fr",
					language: "Fran\xe7ais"
				}, {
					code: "de",
					language: "Deutsch"
				}, {
					code: "el",
					language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"
				}, {
					code: "hi",
					language: "\u0939\u093f\u0902\u0926\u0940"
				}, {
					code: "hu",
					language: "Magyar"
				}, {
					code: "id",
					language: "Bahasa Indonesia"
				}, {
					code: "it",
					language: "Italiano"
				}, {
					code: "ja",
					language: "\u65e5\u672c\u8a9e"
				}, {
					code: "ko",
					language: "\ud55c\uad6d\uc5b4"
				}, {
					code: "pl",
					language: "Polski"
				}, {
					code: "pt-PT",
					language: "Portugu\xeas (Portugal)"
				}, {
					code: "pt-BR",
					language: "Portugu\xeas (Brasil)"
				}, {
					code: "ro",
					language: "Rom\xe2n\u0103"
				}, {
					code: "ru",
					language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"
				}, {
					code: "es-ES",
					language: "Espa\xf1ol"
				}, {
					code: "sv-SE",
					language: "Svenska"
				}, {
					code: "ta",
					language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"
				}, {
					code: "tr",
					language: "T\xfcrk\xe7e"
				}, {
					code: "uk",
					language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"
				}, {
					code: "vi",
					language: "Ti\u1ebfng Vi\u1ec7t"
				}],
				Zl = {
					selectedLanguage: {
						code: "",
						language: ""
					},
					setSelectedLanguage: function() {},
					translatedLanguage: {
						code: "",
						language: ""
					},
					setTranslatedLanguage: function() {}
				},
				ed = Object(i.createContext)(Zl),
				nd = "IS_DARK",
				td = a.a.createContext({
					isDark: !1,
					toggleTheme: function() {
						return null
					}
				}),
				rd = function(e) {
					var n = e.children,
						t = Object(i.useState)((function() {
							var e = localStorage.getItem(nd);
							return !!e && JSON.parse(e)
						})),
						a = Object(v.a)(t, 2),
						c = a[0],
						o = a[1];
					return Object(r.jsx)(td.Provider, {
						value: {
							isDark: c,
							toggleTheme: function() {
								o((function(e) {
									return localStorage.setItem(nd, JSON.stringify(!e)), !e
								}))
							}
						},
						children: Object(r.jsx)(l.ThemeProvider, {
							theme: c ? s.A : s.B,
							children: n
						})
					})
				},
				id = function() {
					var e = Object(i.useContext)(td);
					return {
						isDark: e.isDark,
						toggleTheme: e.toggleTheme,
						theme: Object(i.useContext)(l.ThemeContext)
					}
				},
				ad = function() {
					var e = Object(i.useState)(null),
						n = Object(v.a)(e, 2),
						t = n[0],
						r = n[1];
					return Object(i.useEffect)((function() {
						(function() {
							var e = Object(h.a)(j.a.mark((function e() {
								var n, t;
								return j.a.wrap((function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											return e.prev = 0, e.next = 3, fetch("https://api.pancakeswap.com/api/v1/price");
										case 3:
											return n = e.sent, e.next = 6, n.json();
										case 6:
											t = e.sent, r(t), e.next = 13;
											break;
										case 10:
											e.prev = 10, e.t0 = e.catch(0), console.error("Unable to fetch price data:", e.t0);
										case 13:
										case "end":
											return e.stop()
									}
								}), e, null, [
									[0, 10]
								])
							})));
							return function() {
								return e.apply(this, arguments)
							}
						})()()
					}), [r]), t
				},
				cd = t(274),
				od = t.n(cd),
				sd = {
					profileLink: "https://pancakeswap.finance/profile",
					noProfileLink: "https://pancakeswap.finance/profile"
				},
				ud = function() {
					var e = Object(i.useState)(sd),
						n = Object(v.a)(e, 2),
						t = n[0],
						r = n[1],
						a = ge().account;
					return Object(i.useEffect)((function() {
						if (a) try {
							var e = od.a.get("profile_".concat(a));
							if (e) {
								var n = JSON.parse(e);
								r((function(e) {
									return Object(X.a)(Object(X.a)({}, e), {}, {
										username: n.username,
										image: n.avatar
									})
								}))
							}
						} catch (t) {
							r(sd)
						} else r(sd)
					}), [a, r]), t
				},
				ld = [{
					label: "Home",
					icon: "HomeIcon",
					href: "https://littlesquidgrow.com/"
				}, {
					label: "Trade",
					icon: "TradeIcon",
					initialOpenState: !0,
					items: [{
						label: "Exchange",
						href: "/swap"
					}, {
						label: "Liquidity",
						href: "/pool"
					}]
				}, {
					label: "More",
					icon: "MoreIcon",
					items: [{
						label: "Twitter",
						href: "https://twitter.com/littlesquidgrow"
					}, {
						label: "Telegram",
						href: "https://telegram.me/littlesquidgrow"
					}]
				}],
				dd = function(e) {
					var n = Object(g.c)(),
						t = n.account,
						a = n.activate,
						c = n.deactivate,
						o = Object(i.useContext)(ed),
						u = o.selectedLanguage,
						l = o.setSelectedLanguage,
						d = id(),
						b = d.isDark,
						p = d.toggleTheme,
						f = ad();
					f && Number(f.prices.Cake), ud();
					return Object(r.jsx)(s.s, Object(X.a)({
						links: ld,
						account: t,
						login: function(e) {
							var n = G[e];
							n && a(n)
						},
						logout: c,
						isDark: b,
						toggleTheme: p,
						currentLang: (null === u || void 0 === u ? void 0 : u.code) || "",
						langs: $l,
						setLang: l
					}, e))
				};

			function bd() {
				var e = Object(u.a)(["\n  margin-top: 5rem;\n"]);
				return bd = function() {
					return e
				}, e
			}

			function pd() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 32px 16px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 1;\n  justify-content: center;\n  // background-image: url('/images/group-pancake.svg');\n  background-repeat: no-repeat;\n  background-position: bottom 24px center;\n  background-size: 90%;\n\n  ", " {\n    background-size: auto;\n  }\n\n  ", " {\n    // background-image: url('/images/arch-", ".svg'),\n    //   url('/images/left-pancake.svg'), url('/images/right-pancake.svg');\n    background-repeat: no-repeat;\n    background-position: center 420px, 10% 230px, 90% 230px;\n    background-size: contain, 266px, 266px;\n    min-height: 90vh;\n  }\n"]);
				return pd = function() {
					return e
				}, e
			}

			function fd() {
				var e = Object(u.a)(["\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n"]);
				return fd = function() {
					return e
				}, e
			}
			var jd = l.default.div(fd()),
				hd = l.default.div(pd(), (function(e) {
					return e.theme.mediaQueries.xs
				}), (function(e) {
					return e.theme.mediaQueries.lg
				}), (function(e) {
					return e.theme.isDark ? "dark" : "light"
				})),
				vd = l.default.div(bd());

			function md() {
				var e = Object(i.useState)(void 0),
					n = Object(v.a)(e, 2),
					t = n[0],
					a = n[1],
					c = Object(i.useState)(void 0),
					o = Object(v.a)(c, 2),
					s = o[0],
					u = o[1],
					l = Object(i.useState)([]),
					d = Object(v.a)(l, 2),
					b = d[0],
					p = d[1],
					f = "".concat(Object({
						NODE_ENV: "production",
						PUBLIC_URL: ".",
						WDS_SOCKET_HOST: void 0,
						WDS_SOCKET_PATH: void 0,
						WDS_SOCKET_PORT: void 0,
						FAST_REFRESH: !0,
						REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
						REACT_APP_CHAIN_ID: "56",
						REACT_APP_GTAG: "GTM-TLF66T4"
					}).REACT_APP_CROWDIN_APIKEY),
					x = parseInt("".concat(Object({
						NODE_ENV: "production",
						PUBLIC_URL: ".",
						WDS_SOCKET_HOST: void 0,
						WDS_SOCKET_PATH: void 0,
						WDS_SOCKET_PORT: void 0,
						FAST_REFRESH: !0,
						REACT_APP_NETWORK_URL: "https://bsc-dataseed1.defibit.io",
						REACT_APP_CHAIN_ID: "56",
						REACT_APP_GTAG: "GTM-TLF66T4"
					}).REACT_APP_CROWDIN_PROJECTID)),
					g = {
						token: f
					},
					C = new O.StringTranslations(g);
				Object(i.useEffect)((function() {
					var e = localStorage.getItem("pancakeSwapLanguage");
					if (e) {
						var n = function(e) {
							return $l.filter((function(n) {
								return n.code === e
							}))[0]
						}(e);
						a(n)
					} else a(Xl)
				}), []);
				var w = function() {
					var e = Object(h.a)(j.a.mark((function e() {
						return j.a.wrap((function(e) {
							for (;;) switch (e.prev = e.next) {
								case 0:
									C.listLanguageTranslations(x, t.code, void 0, 6, 200).then((function(e) {
										e.data.length < 1 ? p(["error"]) : p(e.data)
									})).then((function() {
										return u(t)
									})).catch((function(e) {
										p(["error"]), console.error(e)
									}));
								case 1:
								case "end":
									return e.stop()
							}
						}), e)
					})));
					return function() {
						return e.apply(this, arguments)
					}
				}();
				return Object(i.useEffect)((function() {
					t && w()
				}), [t]), Object(r.jsx)(i.Suspense, {
					fallback: null,
					children: Object(r.jsx)(m.a, {
						children: Object(r.jsx)(jd, {
							children: Object(r.jsx)(ed.Provider, {
								value: {
									selectedLanguage: t,
									setSelectedLanguage: a,
									translatedLanguage: s,
									setTranslatedLanguage: u
								},
								children: Object(r.jsx)(Gt.Provider, {
									value: {
										translations: b,
										setTranslations: p
									},
									children: Object(r.jsx)(dd, {
										children: Object(r.jsxs)(hd, {
											children: [Object(r.jsx)(Xn, {}), Object(r.jsx)(st, {
												children: Object(r.jsxs)(y.d, {
													children: [Object(r.jsx)(y.b, {
														exact: !0,
														strict: !0,
														path: "/swap",
														component: Gl
													}), Object(r.jsx)(y.b, {
														exact: !0,
														strict: !0,
														path: "/find",
														component: Pu
													}), Object(r.jsx)(y.b, {
														exact: !0,
														strict: !0,
														path: "/pool",
														component: Au
													}), Object(r.jsx)(y.b, {
														exact: !0,
														path: "/add",
														component: $s
													}), Object(r.jsx)(y.b, {
														exact: !0,
														strict: !0,
														path: "/remove/:currencyIdA/:currencyIdB",
														component: Ku
													}), Object(r.jsx)(y.b, {
														exact: !0,
														path: "/add/:currencyIdA",
														component: eu
													}), Object(r.jsx)(y.b, {
														exact: !0,
														path: "/add/:currencyIdA/:currencyIdB",
														component: nu
													}), Object(r.jsx)(y.b, {
														exact: !0,
														strict: !0,
														path: "/remove/:tokens",
														component: ru
													}), Object(r.jsx)(y.b, {
														component: Jl
													})]
												})
											}), Object(r.jsx)(vd, {})]
										})
									})
								})
							})
						})
					})
				})
			}
			var yd = "visibilityState" in document;

			function Od() {
				return !yd || "hidden" !== document.visibilityState
			}

			function xd() {
				var e = Object(i.useState)(Od()),
					n = Object(v.a)(e, 2),
					t = n[0],
					r = n[1],
					a = Object(i.useCallback)((function() {
						r(Od())
					}), [r]);
				return Object(i.useEffect)((function() {
					if (yd) return document.addEventListener("visibilitychange", a),
						function() {
							document.removeEventListener("visibilitychange", a)
						}
				}), [a]), t
			}

			function gd() {
				var e = ge(),
					n = e.library,
					t = e.chainId,
					r = Object(x.c)(),
					a = xd(),
					c = Object(i.useState)({
						chainId: t,
						blockNumber: null
					}),
					o = Object(v.a)(c, 2),
					s = o[0],
					u = o[1],
					l = Object(i.useCallback)((function(e) {
						u((function(n) {
							return t === n.chainId ? "number" !== typeof n.blockNumber ? {
								chainId: t,
								blockNumber: e
							} : {
								chainId: t,
								blockNumber: Math.max(e, n.blockNumber)
							} : n
						}))
					}), [t, u]);
				Object(i.useEffect)((function() {
					if (n && t && a) return u({
							chainId: t,
							blockNumber: null
						}), n.getBlockNumber().then(l).catch((function(e) {
							return console.error("Failed to get block number for chainId: ".concat(t), e)
						})), n.on("block", l),
						function() {
							n.removeListener("block", l)
						}
				}), [r, t, n, l, a]);
				var d = xs(s, 100);
				return Object(i.useEffect)((function() {
					d.chainId && d.blockNumber && a && r(we({
						chainId: d.chainId,
						blockNumber: d.blockNumber
					}))
				}), [a, r, d.blockNumber, d.chainId]), null
			}

			function Cd() {
				var e = ge().library,
					n = Object(x.c)(),
					t = Object(x.d)((function(e) {
						return e.lists.byUrl
					})),
					r = xd(),
					a = bc();
				return Ki(Object(i.useCallback)((function() {
					r && Object.keys(t).forEach((function(e) {
						return a(e).catch((function(e) {
							return console.error("interval list fetching error", e)
						}))
					}))
				}), [a, r, t]), e ? 6e5 : null), Object(i.useEffect)((function() {
					Object.keys(t).forEach((function(e) {
						var n = t[e];
						n.current || n.loadingRequestId || n.error || a(e).catch((function(e) {
							return console.error("list added fetching error", e)
						}))
					}))
				}), [n, a, e, t]), Object(i.useEffect)((function() {
					Object.keys(t).forEach((function(e) {
						var r = t[e];
						if (r.current && r.pendingUpdate) {
							var i = Object(Ye.c)(r.current.version, r.pendingUpdate.version);
							switch (i) {
								case Ye.a.NONE:
									throw new Error("unexpected no version bump");
								case Ye.a.PATCH:
								case Ye.a.MINOR:
									i >= Object(Ye.d)(r.current.tokens, r.pendingUpdate.tokens) ? (n(Fe(e)), n(Ie({
										key: e,
										content: {
											listUpdate: {
												listUrl: e,
												oldList: r.current,
												newList: r.pendingUpdate,
												auto: !0
											}
										}
									}))) : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
									break;
								case Ye.a.MAJOR:
									n(Ie({
										key: e,
										content: {
											listUpdate: {
												listUrl: e,
												auto: !1,
												oldList: r.current,
												newList: r.pendingUpdate
											}
										},
										removeAfterMs: null
									}))
							}
						}
					}))
				}), [n, t]), null
			}

			function wd(e, n) {
				return t = e + Math.round(Math.random() * Math.max(0, n - e)), new Promise((function(e) {
					return setTimeout(e, t)
				}));
				var t
			}
			var kd = function(e) {
					Object(A.a)(t, e);
					var n = Object(P.a)(t);

					function t() {
						return Object(U.a)(this, t), n.call(this, "Cancelled")
					}
					return t
				}(Object(M.a)(Error)),
				Td = function(e) {
					Object(A.a)(t, e);
					var n = Object(P.a)(t);

					function t() {
						return Object(U.a)(this, t), n.apply(this, arguments)
					}
					return t
				}(Object(M.a)(Error));

			function Id() {
				return (Id = Object(h.a)(j.a.mark((function e(n, t, r) {
					var i, a, c, o;
					return j.a.wrap((function(e) {
						for (;;) switch (e.prev = e.next) {
							case 0:
								return e.prev = 0, e.next = 3, n.aggregate(t.map((function(e) {
									return [e.address, e.callData]
								})));
							case 3:
								c = e.sent, o = Object(v.a)(c, 2), i = o[0], a = o[1], e.next = 13;
								break;
							case 9:
								throw e.prev = 9, e.t0 = e.catch(0), console.info("Failed to fetch chunk inside retry", e.t0), e.t0;
							case 13:
								if (!(i.toNumber() < r)) {
									e.next = 15;
									break
								}
								throw new Td("Fetched for old block number");
							case 15:
								return e.abrupt("return", {
									results: a,
									blockNumber: i.toNumber()
								});
							case 16:
							case "end":
								return e.stop()
						}
					}), e, null, [
						[0, 9]
					])
				})))).apply(this, arguments)
			}

			function Ed() {
				var e = Object(x.c)(),
					n = Object(x.d)((function(e) {
						return e.multicall
					})),
					t = xs(n.callListeners, 100),
					r = Ne(),
					a = ge().chainId,
					c = pi(),
					o = Object(i.useRef)(),
					s = Object(i.useMemo)((function() {
						return function(e, n) {
							if (!e || !n) return {};
							var t = e[n];
							return t ? Object.keys(t).reduce((function(e, n) {
								var r = t[n];
								return e[n] = Object.keys(r).filter((function(e) {
									var n = parseInt(e);
									return !(n <= 0) && r[n] > 0
								})).reduce((function(e, n) {
									return Math.min(e, parseInt(n))
								}), 1 / 0), e
							}), {}) : {}
						}(t, a)
					}), [t, a]),
					u = Object(i.useMemo)((function() {
						return function(e, n, t, r) {
							return t && r ? e[t] ? Object.keys(n).filter((function(i) {
								var a = n[i],
									c = e[t][i];
								if (!c) return !0;
								var o = r - (a - 1);
								return !(c.fetchingBlockNumber && c.fetchingBlockNumber >= o) && (!c.blockNumber || c.blockNumber < o)
							})) : Object.keys(n) : []
						}(n.callResults, s, a, r)
					}), [a, n.callResults, s, r]),
					l = Object(i.useMemo)((function() {
						return JSON.stringify(u.sort())
					}), [u]);
				return Object(i.useEffect)((function() {
					var n;
					if (r && a && c) {
						var t = JSON.parse(l);
						if (0 !== t.length) {
							var i, s, u = t.map((function(e) {
									return mr(e)
								})),
								d = function(e, n) {
									if (n < 1) throw new Error("maxChunkSize must be gte 1");
									if (e.length <= n) return [e];
									var t = Math.ceil(e.length / n),
										r = Math.ceil(e.length / t);
									return Object(J.a)(Array(t).keys()).map((function(n) {
										return e.slice(n * r, n * r + r)
									}))
								}(u, 500);
							if ((null === (n = o.current) || void 0 === n ? void 0 : n.blockNumber) !== r) null === (i = o.current) || void 0 === i || null === (s = i.cancellations) || void 0 === s || s.forEach((function(e) {
								return e()
							}));
							e(xr({
								calls: u,
								chainId: a,
								fetchingBlockNumber: r
							})), o.current = {
								blockNumber: r,
								cancellations: d.map((function(n, i) {
									var s = function(e, n) {
											var t, r = n.n,
												i = n.minWait,
												a = n.maxWait,
												c = !1;
											return {
												promise: new Promise(function() {
													var n = Object(h.a)(j.a.mark((function n(o, s) {
														var u;
														return j.a.wrap((function(n) {
															for (;;) switch (n.prev = n.next) {
																case 0:
																	t = s;
																case 1:
																	return u = void 0, n.prev = 3, n.next = 6, e();
																case 6:
																	return u = n.sent, c || (o(u), c = !0), n.abrupt("break", 24);
																case 11:
																	if (n.prev = 11, n.t0 = n.catch(3), !c) {
																		n.next = 15;
																		break
																	}
																	return n.abrupt("break", 24);
																case 15:
																	if (!(r <= 0) && n.t0 instanceof Td) {
																		n.next = 19;
																		break
																	}
																	return s(n.t0), c = !0, n.abrupt("break", 24);
																case 19:
																	r--;
																case 20:
																	return n.next = 22, wd(i, a);
																case 22:
																	n.next = 1;
																	break;
																case 24:
																case "end":
																	return n.stop()
															}
														}), n, null, [
															[3, 11]
														])
													})));
													return function(e, t) {
														return n.apply(this, arguments)
													}
												}()),
												cancel: function() {
													c || (c = !0, t(new kd))
												}
											}
										}((function() {
											return function(e, n, t) {
												return Id.apply(this, arguments)
											}(c, n, r)
										}), {
											n: 1 / 0,
											minWait: 2500,
											maxWait: 3500
										}),
										u = s.cancel;
									return s.promise.then((function(n) {
										var c = n.results,
											s = n.blockNumber;
										o.current = {
											cancellations: [],
											blockNumber: r
										};
										var u = d.slice(0, i).reduce((function(e, n) {
												return e + n.length
											}), 0),
											l = u + c.length;
										e(Cr({
											chainId: a,
											results: t.slice(u, l).reduce((function(e, n, t) {
												var r;
												return e[n] = null !== (r = c[t]) && void 0 !== r ? r : null, e
											}), {}),
											blockNumber: s
										}))
									})).catch((function(t) {
										t instanceof kd ? console.error("Cancelled fetch for blockNumber", r) : (console.error("Failed to fetch multicall chunk", n, a, t), e(gr({
											calls: n,
											chainId: a,
											fetchingBlockNumber: r
										})))
									})), u
								}))
							}
						}
					}
				}), [a, c, e, l, r]), null
			}

			function Nd() {
				var e, n = ge(),
					t = n.chainId,
					r = n.library,
					a = Ne(),
					c = Object(x.c)(),
					o = Object(x.d)((function(e) {
						return e.transactions
					})),
					s = t && null !== (e = o[t]) && void 0 !== e ? e : {},
					u = function() {
						var e = Object(x.c)();
						return Object(i.useCallback)((function(n, t) {
							e(Ie({
								content: n,
								key: t
							}))
						}), [e])
					}();
				return Object(i.useEffect)((function() {
					t && r && a && Object.keys(s).filter((function(e) {
						return function(e, n) {
							if (n.receipt) return !1;
							if (!n.lastCheckedBlockNumber) return !0;
							var t = e - n.lastCheckedBlockNumber;
							if (t < 1) return !1;
							var r = ((new Date).getTime() - n.addedTime) / 1e3 / 60;
							return r > 60 ? t > 9 : !(r > 5) || t > 2
						}(a, s[e])
					})).forEach((function(e) {
						r.getTransactionReceipt(e).then((function(n) {
							var r;
							n ? (c(rs({
								chainId: t,
								hash: e,
								receipt: {
									blockHash: n.blockHash,
									blockNumber: n.blockNumber,
									contractAddress: n.contractAddress,
									from: n.from,
									status: n.status,
									to: n.to,
									transactionHash: n.transactionHash,
									transactionIndex: n.transactionIndex
								}
							})), u({
								txn: {
									hash: e,
									success: 1 === n.status,
									summary: null === (r = s[e]) || void 0 === r ? void 0 : r.summary
								}
							}, e)) : c(is({
								chainId: t,
								hash: e,
								blockNumber: a
							}))
						})).catch((function(n) {
							console.error("failed to check transaction hash: ".concat(e), n)
						}))
					}))
				}), [t, r, s, a, c, u]), null
			}
			var Rd = t(176),
				Sd = Object(Ce.c)({
					blockNumber: {},
					popupList: [],
					walletModalOpen: !1,
					settingsMenuOpen: !1
				}, (function(e) {
					return e.addCase(we, (function(e, n) {
						var t = n.payload,
							r = t.chainId,
							i = t.blockNumber;
						"number" !== typeof e.blockNumber[r] ? e.blockNumber[r] = i : e.blockNumber[r] = Math.max(i, e.blockNumber[r])
					})).addCase(ke, (function(e) {
						e.walletModalOpen = !e.walletModalOpen
					})).addCase(Te, (function(e) {
						e.settingsMenuOpen = !e.settingsMenuOpen
					})).addCase(Ie, (function(e, n) {
						var t = n.payload,
							r = t.content,
							i = t.key,
							a = t.removeAfterMs,
							c = void 0 === a ? 15e3 : a;
						e.popupList = (i ? e.popupList.filter((function(e) {
							return e.key !== i
						})) : e.popupList).concat([{
							key: i || Object(Ce.e)(),
							show: !0,
							content: r,
							removeAfterMs: c
						}])
					})).addCase(Ee, (function(e, n) {
						var t = n.payload.key;
						e.popupList.forEach((function(e) {
							e.key === t && (e.show = !1)
						}))
					}))
				})),
				Ud = Object(Ce.b)("global/updateVersion"),
				Ad = (Ce.b, function() {
					return (new Date).getTime()
				});

			function Pd(e, n) {
				return "".concat(e, ";").concat(n)
			}
			var Md, Bd = {
					userDarkMode: null,
					matchesDarkMode: !1,
					userExpertMode: !1,
					userSlippageTolerance: be,
					userDeadline: pe,
					tokens: {},
					pairs: {},
					timestamp: Ad(),
					audioPlay: !0
				},
				Ld = Object(Ce.c)(Bd, (function(e) {
					return e.addCase(Ud, (function(e) {
						"number" !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = be), "number" !== typeof e.userDeadline && (e.userDeadline = pe), e.lastUpdateVersionTimestamp = Ad()
					})).addCase(Lr, (function(e, n) {
						e.userDarkMode = n.payload.userDarkMode, e.timestamp = Ad()
					})).addCase(Br, (function(e, n) {
						e.matchesDarkMode = n.payload.matchesDarkMode, e.timestamp = Ad()
					})).addCase(_r, (function(e, n) {
						e.userExpertMode = n.payload.userExpertMode, e.timestamp = Ad()
					})).addCase(Dr, (function(e, n) {
						e.userSlippageTolerance = n.payload.userSlippageTolerance, e.timestamp = Ad()
					})).addCase(Yr, (function(e, n) {
						e.userDeadline = n.payload.userDeadline, e.timestamp = Ad()
					})).addCase(zr, (function(e, n) {
						var t = n.payload.serializedToken;
						e.tokens[t.chainId] = e.tokens[t.chainId] || {}, e.tokens[t.chainId][t.address] = t, e.timestamp = Ad()
					})).addCase(Fr, (function(e, n) {
						var t = n.payload,
							r = t.address,
							i = t.chainId;
						e.tokens[i] = e.tokens[i] || {}, delete e.tokens[i][r], e.timestamp = Ad()
					})).addCase(qr, (function(e, n) {
						var t = n.payload.serializedPair;
						if (t.token0.chainId === t.token1.chainId && t.token0.address !== t.token1.address) {
							var r = t.token0.chainId;
							e.pairs[r] = e.pairs[r] || {}, e.pairs[r][Pd(t.token0.address, t.token1.address)] = t
						}
						e.timestamp = Ad()
					})).addCase(Vr, (function(e, n) {
						var t = n.payload,
							r = t.chainId,
							i = t.tokenAAddress,
							a = t.tokenBAddress;
						e.pairs[r] && (delete e.pairs[r][Pd(i, a)], delete e.pairs[r][Pd(a, i)]), e.timestamp = Ad()
					})).addCase(Wr, (function(e) {
						e.audioPlay = !1
					})).addCase(Hr, (function(e) {
						e.audioPlay = !0
					}))
				})),
				_d = function() {
					return (new Date).getTime()
				},
				Dd = Object(Ce.c)({}, (function(e) {
					return e.addCase(ns, (function(e, n) {
						var t, r, i = n.payload,
							a = i.chainId,
							c = i.from,
							o = i.hash,
							s = i.approval,
							u = i.summary;
						if (null === (t = e[a]) || void 0 === t ? void 0 : t[o]) throw Error("Attempted to add existing transaction.");
						var l = null !== (r = e[a]) && void 0 !== r ? r : {};
						l[o] = {
							hash: o,
							approval: s,
							summary: u,
							from: c,
							addedTime: _d()
						}, e[a] = l
					})).addCase(ts, (function(e, n) {
						var t = n.payload.chainId;
						e[t] && (e[t] = {})
					})).addCase(is, (function(e, n) {
						var t, r = n.payload,
							i = r.chainId,
							a = r.hash,
							c = r.blockNumber,
							o = null === (t = e[i]) || void 0 === t ? void 0 : t[a];
						o && (o.lastCheckedBlockNumber ? o.lastCheckedBlockNumber = Math.max(c, o.lastCheckedBlockNumber) : o.lastCheckedBlockNumber = c)
					})).addCase(rs, (function(e, n) {
						var t, r = n.payload,
							i = r.hash,
							a = r.chainId,
							c = r.receipt,
							o = null === (t = e[a]) || void 0 === t ? void 0 : t[i];
						o && (o.receipt = c, o.confirmedTime = _d())
					}))
				})),
				Yd = (Md = {
					independentField: Go.INPUT,
					typedValue: ""
				}, Object(w.a)(Md, Go.INPUT, {
					currencyId: ""
				}), Object(w.a)(Md, Go.OUTPUT, {
					currencyId: ""
				}), Object(w.a)(Md, "recipient", null), Md),
				zd = Object(Ce.c)(Yd, (function(e) {
					return e.addCase(Zo, (function(e, n) {
						var t, r = n.payload,
							i = r.typedValue,
							a = r.recipient,
							c = r.field,
							o = r.inputCurrencyId,
							s = r.outputCurrencyId;
						return t = {}, Object(w.a)(t, Go.INPUT, {
							currencyId: o
						}), Object(w.a)(t, Go.OUTPUT, {
							currencyId: s
						}), Object(w.a)(t, "independentField", c), Object(w.a)(t, "typedValue", i), Object(w.a)(t, "recipient", a), t
					})).addCase(Jo, (function(e, n) {
						var t, r = n.payload,
							i = r.currencyId,
							a = r.field,
							c = a === Go.INPUT ? Go.OUTPUT : Go.INPUT;
						return i === e[c].currencyId ? Object(X.a)(Object(X.a)({}, e), {}, (t = {
							independentField: e.independentField === Go.INPUT ? Go.OUTPUT : Go.INPUT
						}, Object(w.a)(t, a, {
							currencyId: i
						}), Object(w.a)(t, c, {
							currencyId: e[a].currencyId
						}), t)) : Object(X.a)(Object(X.a)({}, e), {}, Object(w.a)({}, a, {
							currencyId: i
						}))
					})).addCase(Xo, (function(e) {
						var n;
						return Object(X.a)(Object(X.a)({}, e), {}, (n = {
							independentField: e.independentField === Go.INPUT ? Go.OUTPUT : Go.INPUT
						}, Object(w.a)(n, Go.INPUT, {
							currencyId: e[Go.OUTPUT].currencyId
						}), Object(w.a)(n, Go.OUTPUT, {
							currencyId: e[Go.INPUT].currencyId
						}), n))
					})).addCase($o, (function(e, n) {
						var t = n.payload,
							r = t.field,
							i = t.typedValue;
						return Object(X.a)(Object(X.a)({}, e), {}, {
							independentField: r,
							typedValue: i
						})
					})).addCase(es, (function(e, n) {
						var t = n.payload.recipient;
						e.recipient = t
					}))
				})),
				Fd = {
					independentField: us.CURRENCY_A,
					typedValue: "",
					otherTypedValue: ""
				},
				qd = Object(Ce.c)(Fd, (function(e) {
					return e.addCase(ys, (function() {
						return Fd
					})).addCase(ms, (function(e, n) {
						var t = n.payload,
							r = t.field,
							i = t.typedValue;
						return t.noLiquidity ? r === e.independentField ? Object(X.a)(Object(X.a)({}, e), {}, {
							independentField: r,
							typedValue: i
						}) : Object(X.a)(Object(X.a)({}, e), {}, {
							independentField: r,
							typedValue: i,
							otherTypedValue: e.typedValue
						}) : Object(X.a)(Object(X.a)({}, e), {}, {
							independentField: r,
							typedValue: i,
							otherTypedValue: ""
						})
					}))
				})),
				Vd = {
					error: null,
					current: null,
					loadingRequestId: null,
					pendingUpdate: null
				},
				Wd = {
					lastInitializedDefaultListOfLists: nc,
					byUrl: Object(X.a)(Object(X.a)({}, nc.reduce((function(e, n) {
						return e[n] = Vd, e
					}), {})), {}, Object(w.a)({}, ec, {
						error: null,
						current: tc,
						loadingRequestId: null,
						pendingUpdate: null
					})),
					selectedListUrl: ec
				},
				Hd = Object(Ce.c)(Wd, (function(e) {
					return e.addCase(ze.pending, (function(e, n) {
						var t = n.payload,
							r = t.requestId,
							i = t.url;
						e.byUrl[i] = Object(X.a)(Object(X.a)({
							current: null,
							pendingUpdate: null
						}, e.byUrl[i]), {}, {
							loadingRequestId: r,
							error: null
						})
					})).addCase(ze.fulfilled, (function(e, n) {
						var t, r, i = n.payload,
							a = i.requestId,
							c = i.tokenList,
							o = i.url,
							s = null === (t = e.byUrl[o]) || void 0 === t ? void 0 : t.current,
							u = null === (r = e.byUrl[o]) || void 0 === r ? void 0 : r.loadingRequestId;
						if (s) {
							if (Object(Ye.c)(s.version, c.version) === Ye.a.NONE) return;
							null !== u && u !== a || (e.byUrl[o] = Object(X.a)(Object(X.a)({}, e.byUrl[o]), {}, {
								loadingRequestId: null,
								error: null,
								current: s,
								pendingUpdate: c
							}))
						} else e.byUrl[o] = Object(X.a)(Object(X.a)({}, e.byUrl[o]), {}, {
							loadingRequestId: null,
							error: null,
							current: c,
							pendingUpdate: null
						})
					})).addCase(ze.rejected, (function(e, n) {
						var t, r = n.payload,
							i = r.url,
							a = r.requestId,
							c = r.errorMessage;
						(null === (t = e.byUrl[i]) || void 0 === t ? void 0 : t.loadingRequestId) === a && (e.byUrl[i] = Object(X.a)(Object(X.a)({}, e.byUrl[i]), {}, {
							loadingRequestId: null,
							error: c,
							current: null,
							pendingUpdate: null
						}))
					})).addCase(We, (function(e, n) {
						var t = n.payload;
						e.selectedListUrl = t, e.byUrl[t] || (e.byUrl[t] = Vd)
					})).addCase(qe, (function(e, n) {
						var t = n.payload;
						e.byUrl[t] || (e.byUrl[t] = Vd)
					})).addCase(Ve, (function(e, n) {
						var t = n.payload;
						e.byUrl[t] && delete e.byUrl[t], e.selectedListUrl === t && (e.selectedListUrl = Object.keys(e.byUrl)[0])
					})).addCase(Fe, (function(e, n) {
						var t, r = n.payload;
						if (!(null === (t = e.byUrl[r]) || void 0 === t ? void 0 : t.pendingUpdate)) throw new Error("accept list update called without pending update");
						e.byUrl[r] = Object(X.a)(Object(X.a)({}, e.byUrl[r]), {}, {
							pendingUpdate: null,
							current: e.byUrl[r].pendingUpdate
						})
					})).addCase(Ud, (function(e) {
						if (e.lastInitializedDefaultListOfLists) {
							if (e.lastInitializedDefaultListOfLists) {
								var n = e.lastInitializedDefaultListOfLists.reduce((function(e, n) {
										return e.add(n)
									}), new Set),
									t = nc.reduce((function(e, n) {
										return e.add(n)
									}), new Set);
								nc.forEach((function(t) {
									n.has(t) || (e.byUrl[t] = Vd)
								})), e.lastInitializedDefaultListOfLists.forEach((function(n) {
									t.has(n) || delete e.byUrl[n]
								}))
							}
						} else e.byUrl = Wd.byUrl, e.selectedListUrl = void 0;
						e.lastInitializedDefaultListOfLists = nc
					}))
				})),
				Qd = {
					independentField: Du.LIQUIDITY_PERCENT,
					typedValue: "0"
				},
				Kd = Object(Ce.c)(Qd, (function(e) {
					return e.addCase(Fu, (function(e, n) {
						var t = n.payload,
							r = t.field,
							i = t.typedValue;
						return Object(X.a)(Object(X.a)({}, e), {}, {
							independentField: r,
							typedValue: i
						})
					}))
				})),
				Gd = Object(Ce.c)({
					callResults: {}
				}, (function(e) {
					return e.addCase(yr, (function(e, n) {
						var t, r = n.payload,
							i = r.calls,
							a = r.chainId,
							c = r.options,
							o = (c = void 0 === c ? {} : c).blocksPerFetch,
							s = void 0 === o ? 1 : o,
							u = e.callListeners ? e.callListeners : e.callListeners = {};
						u[a] = null !== (t = u[a]) && void 0 !== t ? t : {}, i.forEach((function(e) {
							var n, t, r = vr(e);
							u[a][r] = null !== (n = u[a][r]) && void 0 !== n ? n : {}, u[a][r][s] = (null !== (t = u[a][r][s]) && void 0 !== t ? t : 0) + 1
						}))
					})).addCase(Or, (function(e, n) {
						var t = n.payload,
							r = t.chainId,
							i = t.calls,
							a = t.options,
							c = (a = void 0 === a ? {} : a).blocksPerFetch,
							o = void 0 === c ? 1 : c,
							s = e.callListeners ? e.callListeners : e.callListeners = {};
						s[r] && i.forEach((function(e) {
							var n = vr(e);
							s[r][n] && s[r][n][o] && (1 === s[r][n][o] ? delete s[r][n][o] : s[r][n][o]--)
						}))
					})).addCase(xr, (function(e, n) {
						var t, r = n.payload,
							i = r.chainId,
							a = r.fetchingBlockNumber,
							c = r.calls;
						e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}, c.forEach((function(n) {
							var t = vr(n),
								r = e.callResults[i][t];
							if (r) {
								var c;
								if ((null !== (c = r.fetchingBlockNumber) && void 0 !== c ? c : 0) >= a) return;
								e.callResults[i][t].fetchingBlockNumber = a
							} else e.callResults[i][t] = {
								fetchingBlockNumber: a
							}
						}))
					})).addCase(gr, (function(e, n) {
						var t, r = n.payload,
							i = r.fetchingBlockNumber,
							a = r.chainId,
							c = r.calls;
						e.callResults[a] = null !== (t = e.callResults[a]) && void 0 !== t ? t : {}, c.forEach((function(n) {
							var t = vr(n),
								r = e.callResults[a][t];
							r && r.fetchingBlockNumber === i && (delete r.fetchingBlockNumber, r.data = null, r.blockNumber = i)
						}))
					})).addCase(Cr, (function(e, n) {
						var t, r = n.payload,
							i = r.chainId,
							a = r.results,
							c = r.blockNumber;
						e.callResults[i] = null !== (t = e.callResults[i]) && void 0 !== t ? t : {}, Object.keys(a).forEach((function(n) {
							var t, r = e.callResults[i][n];
							(null !== (t = null === r || void 0 === r ? void 0 : r.blockNumber) && void 0 !== t ? t : 0) > c || (e.callResults[i][n] = {
								data: a[n],
								blockNumber: c
							})
						}))
					}))
				})),
				Jd = ["user", "transactions"],
				Xd = Object(Rd.load)({
					states: Jd
				});
			Xd.user && (Xd.user.userDarkMode = function() {
				var e = null;
				try {
					var n = localStorage.getItem(Qr);
					n && (e = JSON.parse(n))
				} catch (t) {
					console.error(t)
				}
				return e
			}());
			var $d = Object(Ce.a)({
				reducer: {
					application: Sd,
					user: Ld,
					transactions: Dd,
					swap: zd,
					mint: qd,
					burn: Kd,
					multicall: Gd,
					lists: Hd
				},
				middleware: [].concat(Object(J.a)(Object(Ce.d)({
					thunk: !1
				})), [Object(Rd.save)({
					states: Jd
				})]),
				preloadedState: Xd
			});
			$d.dispatch(Ud());
			var Zd = $d;

			function eb(e) {
				var n = new k.a(e);
				return n.pollingInterval = 15e3, n
			}
			var nb = Object(g.b)(de),
				tb = function(e) {
					var n = e.children;
					return Object(r.jsx)(g.a, {
						getLibrary: eb,
						children: Object(r.jsx)(nb, {
							getLibrary: eb,
							children: Object(r.jsx)(x.a, {
								store: Zd,
								children: Object(r.jsx)(rd, {
									children: Object(r.jsx)(s.u, {
										children: n
									})
								})
							})
						})
					})
				},
				rb = (t(460), t(178)),
				ib = t(276),
				ab = t.n(ib),
				cb = t(277),
				ob = t.n(cb);
			rb.a.use(ab.a).use(ob.a).use($n.a).init({
				backend: {
					loadPath: "./locales/{{lng}}.json"
				},
				react: {
					useSuspense: !0
				},
				fallbackLng: "en",
				preload: ["en"],
				keySeparator: !1,
				interpolation: {
					escapeValue: !1
				}
			});
			rb.a;
			"ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1), window.addEventListener("error", (function() {
				var e;
				null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists")
			})), o.a.render(Object(r.jsx)(i.StrictMode, {
				children: Object(r.jsxs)(tb, {
					children: [Object(r.jsxs)(r.Fragment, {
						children: [Object(r.jsx)(Cd, {}), Object(r.jsx)(gd, {}), Object(r.jsx)(Nd, {}), Object(r.jsx)(Ed, {})]
					}), Object(r.jsx)(s.v, {}), Object(r.jsx)(p, {}), Object(r.jsx)(md, {})]
				})
			}), document.getElementById("root"))
		}
	},
	[
		[477, 2, 3]
	]
]);
//# sourceMappingURL=main.7d67c597.chunk.js.map