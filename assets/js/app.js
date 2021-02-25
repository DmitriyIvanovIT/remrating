/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/add-company.js":
/*!**************************************!*\
  !*** ./src/assets/js/add-company.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const addCompanyForm = document.querySelector('.add-company__form');\r\n\r\nif (addCompanyForm) {\r\n    addCompanyForm.autocomplete = \"off\";\r\n\r\n    const nameCompany = document.querySelector(\"#company-name\"),\r\n        itn = document.querySelector('#itn'),\r\n        experience = document.querySelector('#experience'),\r\n        phones = document.querySelectorAll('[name=\"phone\"]'),\r\n        site = document.querySelector('#site'),\r\n        reviewText = document.querySelector('#review-text'),\r\n        adress = document.querySelector('#adress'),\r\n        msrn = document.querySelector('#msrn'),\r\n        email = document.querySelector('#email'),\r\n        companyRepairs = document.querySelector('#company-repairs'),\r\n        companyDesigne = document.querySelector('#company-designe'),\r\n        fileImg = document.querySelector('#file-img'),\r\n        feedbackFiles = document.querySelector('.feedback__files'),\r\n        addCompanyBtn = document.querySelector('.add-company__btn');\r\n\r\n    const overlay = document.querySelector('.overlay');\r\n\r\n    const newObj = {\r\n        img: {}\r\n    }\r\n\r\n    const checkFormCompany = () => {\r\n            if (nameCompany.value.length > 5 &&\r\n                itn.value.length === 12 &&\r\n                experience.value.length > 5 &&\r\n                msrn.value.length === 13 &&\r\n                phones[0].value.length === 18 &&\r\n                site.value.length > 10 &&\r\n                reviewText.value.length > 10 &&\r\n                !email.parentNode.classList.contains('error') &&\r\n                email.value.length > 0 &&\r\n                adress.value.length > 10) {\r\n                addCompanyBtn.classList.remove('disabled');\r\n            } else {\r\n                addCompanyBtn.classList.add('disabled');\r\n            }\r\n        },\r\n        errorBlock = (selector, message) => {\r\n            if (!selector.classList.contains('error')) {\r\n                selector.classList.add('error');\r\n                selector.insertAdjacentHTML('beforeend', `<p>${message}</p>`);\r\n            }\r\n        },\r\n        deleteError = selector => {\r\n            if (selector.classList.contains('error')) {\r\n                selector.classList.remove('error');\r\n\r\n                selector.querySelector('p').remove();\r\n            }\r\n\r\n        },\r\n        declinationWords = (count, word) => {\r\n\r\n            const n = Math.abs(count) % 100;\r\n            var n1 = n % 10;\r\n\r\n            if (n > 4 && n < 21) {\r\n                return word + 'ов';\r\n            } else if (n1 > 1 && n1 < 5) {\r\n                return word + 'a';\r\n            } else if (n1 === 1) {\r\n                return word;\r\n            } else {\r\n                return word + 'ов';\r\n            }\r\n        },\r\n        onDrop = evt => {\r\n            const target = evt.target,\r\n                file = target.files[0];\r\n\r\n            const currentFiles = document.querySelectorAll('.feedback__file-block');\r\n            if (currentFiles) {\r\n                feedbackFiles.textContent = '';\r\n                newObj.img = {};\r\n            }\r\n\r\n            const reader = new FileReader();\r\n\r\n            if (file) {\r\n                feedbackFiles.insertAdjacentHTML('afterbegin', `\r\n                    <div class=\"feedback__file-block\">\r\n                        <span class=\"feedback__file-name\">${file.name}</span>\r\n                        <button type=\"button\" class=\"feedback__file-delete\">x</button>\r\n                    </div>\r\n                `);\r\n\r\n                reader.readAsBinaryString(file);\r\n\r\n                reader.addEventListener('load', async (event) => {\r\n                    newObj.img = [];\r\n                    newObj.img.name = file.name,\r\n                        newObj.img.base64 = btoa(event.target.result);\r\n                });\r\n\r\n                const fileDelBtn = document.querySelector('.feedback__file-delete');\r\n\r\n                fileDelBtn.addEventListener('click', e => {\r\n                    feedbackFiles.textContent = '';\r\n                    newObj.img = {};\r\n                });\r\n            }\r\n\r\n\r\n        };\r\n\r\n    checkFormCompany();\r\n\r\n    const validPhone = (selector, masked = '+7 (___) ___-__-__') => {\r\n        const elems = document.querySelectorAll(selector);\r\n\r\n        function mask(event) {\r\n            const keyCode = event.keyCode;\r\n            const template = masked,\r\n                def = template.replace(/\\D/g, \"\"),\r\n                val = this.value.replace(/\\D/g, \"\");\r\n            let i = 0,\r\n                newValue = template.replace(/[_\\d]/g, function (a) {\r\n                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n                });\r\n            i = newValue.indexOf(\"_\");\r\n            if (i != -1) {\r\n                newValue = newValue.slice(0, i);\r\n            }\r\n            let reg = template.substr(0, this.value.length).replace(/_+/g,\r\n                function (a) {\r\n                    return \"\\\\d{1,\" + a.length + \"}\";\r\n                }).replace(/[+()]/g, \"\\\\$&\");\r\n            reg = new RegExp(\"^\" + reg + \"$\");\r\n            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n                this.value = newValue;\r\n            }\r\n            if (event.type == \"blur\" && this.value.length < 5) {\r\n                this.value = \"\";\r\n            }\r\n\r\n        };\r\n\r\n        for (const elem of elems) {\r\n            elem.addEventListener(\"input\", mask);\r\n            elem.addEventListener(\"focus\", mask);\r\n            elem.addEventListener(\"blur\", mask);\r\n        }\r\n    };\r\n\r\n    validPhone('[name=\"phone\"]');\r\n\r\n    phones.forEach(phone => {\r\n        phone.addEventListener('input', () => {\r\n            checkFormCompany();\r\n        });\r\n    });\r\n\r\n    site.addEventListener('input', () => {\r\n        checkFormCompany();\r\n    });\r\n\r\n    reviewText.addEventListener('input', () => {\r\n        checkFormCompany();\r\n\r\n        const countSymbols = document.querySelector('.count_symbols');\r\n\r\n        countSymbols.textContent = `Осталось ${400 - reviewText.value.length} ${declinationWords(400 - reviewText.value.length, 'символ')}`\r\n    });\r\n\r\n    adress.addEventListener('input', () => {\r\n        checkFormCompany();\r\n    });\r\n\r\n    experience.addEventListener('input', () => {\r\n        checkFormCompany();\r\n    });\r\n\r\n    email.addEventListener('input', () => {\r\n        const reg = /[0-9a-z_-]+@[0-9a-z_-]+\\.[a-z]{2,5}/i;\r\n\r\n        if (reg.test(email.value)) {\r\n            deleteError(email.parentNode);\r\n        } else {\r\n            errorBlock(email.parentNode, 'Некоректный email');\r\n        }\r\n\r\n        checkFormCompany();\r\n    });\r\n\r\n    itn.addEventListener('input', () => {\r\n        const regEx = /[^\\d\\+]/g;\r\n        itn.value = itn.value.replace(regEx, '');\r\n    });\r\n\r\n    msrn.addEventListener('input', () => {\r\n        const regEx = /[^\\d\\+]/g;\r\n        itn.value = itn.value.replace(regEx, '');\r\n    });\r\n\r\n    fileImg.addEventListener('dragstart', e => {\r\n        e.preventDefault();\r\n    });\r\n\r\n    document.addEventListener('drop', onDrop);\r\n    fileImg.addEventListener('change', onDrop);\r\n\r\n    addCompanyForm.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        newObj.nameCompany = nameCompany.value;\r\n        newObj.itn = itn.value;\r\n        newObj.experience = experience.value;\r\n        newObj.site = site.value;\r\n        newObj.reviewText = reviewText.value;\r\n        newObj.adress = adress.value;\r\n        newObj.msrn = msrn.value;\r\n        newObj.email = email.value;\r\n        newObj.phones = [];\r\n        newObj.typeCompany = [];\r\n\r\n        phones.forEach(item => {\r\n            if (item.value.length > 0) {\r\n                newObj.phones.push(item.value);\r\n            }\r\n        });\r\n\r\n        if (companyRepairs.checked) {\r\n            newObj.typeCompany.push('Ремонт');\r\n        }\r\n\r\n        if (companyDesigne.checked) {\r\n            newObj.typeCompany.push('Дизайн');\r\n        }\r\n\r\n        overlay.style.display = 'flex';\r\n\r\n        setTimeout(() => overlay.removeAttribute('style'), 10000);\r\n\r\n        addCompanyForm.reset();\r\n\r\n        console.log(newObj);\r\n    });\r\n\r\n    overlay.addEventListener('click', e => {\r\n        const target = e.target;\r\n\r\n        if (target === overlay || target.closest('.modal__close')) {\r\n            overlay.removeAttribute('style');\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/add-company.js?");

/***/ }),

/***/ "./src/assets/js/breadcrumb.js":
/*!*************************************!*\
  !*** ./src/assets/js/breadcrumb.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const routesList = document.querySelector('.routes__list');\r\n\r\n\r\n\r\nif (routesList) {\r\n    const routesItem = Array.from(routesList.querySelectorAll('.routes__link')).filter((item, i) => i !== 0);\r\n\r\n    const changeStoke = () => {\r\n        if (window.screen.width < 400) {\r\n            routesItem.forEach(item => item.textContent.length > 24 ? item.textContent = item.textContent.substr(0, 24) + '...' : item.textContent = item.textContent);\r\n        }\r\n    }\r\n\r\n    changeStoke();\r\n\r\n    window.addEventListener('resize', changeStoke);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/breadcrumb.js?");

/***/ }),

/***/ "./src/assets/js/calc.js":
/*!*******************************!*\
  !*** ./src/assets/js/calc.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const calculator = document.querySelector('.calculator-block__content');\r\n\r\nif (calculator) {\r\n    const typeHome = document.querySelector('#type'),\r\n        square = document.querySelector('#square'),\r\n        electrician = document.querySelector('#electrician'),\r\n        typeRenovation = document.querySelector(\"#type-renovation\"),\r\n        ceilings = document.querySelector('#ceilings'),\r\n        bathroom = document.querySelector('#bathroom'),\r\n        squareBathroom = document.querySelector('#square-bathroom'),\r\n        warmFloor = document.querySelector('#warm-floor'),\r\n        doors = document.querySelector('#doors'),\r\n        switchCheckbox = document.querySelector('#switch'),\r\n        priceCount = document.querySelector('.price__count'),\r\n        calculatorSwitchText = document.querySelector('.calculator__switch-text');\r\n\r\n\r\n    class Calc {\r\n        constructor() {\r\n            this.type = 6000,\r\n                this.square = 42,\r\n                this.electrician = 0,\r\n                this.typeRenovation = 0,\r\n                this.ceilings = 0,\r\n                this.bathroom = 0,\r\n                this.squareBathroom = 1,\r\n                this.warmFloor = 0,\r\n                this.doors = 0,\r\n                this.switchCheckbox = 0,\r\n                this.fullPrice = 0\r\n        }\r\n\r\n        start() {\r\n            this.changePrice();\r\n        }\r\n\r\n        changePrice() {\r\n            this.fullPrice = (this.type * this.square) + (this.electrician * this.square) + this.typeRenovation + (this.square * this.ceilings) + (this.bathroom * this.squareBathroom) + (this.warmFloor * this.square) + this.doors + this.switchCheckbox;\r\n\r\n            priceCount.textContent = this.fullPrice + ' руб.'\r\n        }\r\n\r\n        eventListener() {\r\n            typeHome.addEventListener('change', () => {\r\n                this.type = +typeHome.value;\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            square.addEventListener('input', () => {\r\n                this.square = +square.value;\r\n\r\n                square.parentNode.querySelector('.calculator__count').value = this.square + ' кв.м';\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            electrician.addEventListener('change', () => {\r\n                this.electrician = +electrician.value;\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            typeRenovation.addEventListener('change', () => {\r\n                this.typeRenovation = +typeRenovation.value;\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            ceilings.addEventListener('change', () => {\r\n                this.ceilings = +ceilings.value;\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            bathroom.addEventListener('change', () => {\r\n                if (bathroom.value === 'true') {\r\n                    squareBathroom.parentNode.classList.remove('hide');\r\n                    this.bathroom = 13000;\r\n                } else {\r\n                    squareBathroom.parentNode.classList.add('hide');\r\n                    this.bathroom = 0;\r\n                }\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            warmFloor.addEventListener('change', () => {\r\n                if (warmFloor.value === 'true') {\r\n                    this.warmFloor = 200;\r\n                } else {\r\n                    this.warmFloor = 0;\r\n                }\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            squareBathroom.addEventListener('input', () => {\r\n                this.squareBathroom = +squareBathroom.value;\r\n                squareBathroom.parentNode.querySelector('.calculator__count').value = this.squareBathroom + ' кв.м';\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n\r\n            doors.addEventListener('change', () => {\r\n                this.doors = doors.value * 8500;\r\n\r\n                this.changePrice();\r\n            });\r\n\r\n            switchCheckbox.addEventListener('change', () => {\r\n                switchCheckbox.checked ? this.switchCheckbox = 35000 : this.switchCheckbox = 0;\r\n                switchCheckbox.checked ? calculatorSwitchText.textContent = 'Да' : calculatorSwitchText.textContent = 'Нет';\r\n\r\n                this.changePrice();\r\n            })\r\n\r\n            this.start();\r\n        }\r\n    };\r\n\r\n    let calc = new Calc;\r\n\r\n    calc.eventListener();\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/calc.js?");

/***/ }),

/***/ "./src/assets/js/card.js":
/*!*******************************!*\
  !*** ./src/assets/js/card.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const descriptionBlock = document.querySelector('.description');\r\nconst mainInfoEmail = document.querySelector('.main-info__email');\r\n\r\nif (descriptionBlock) {\r\n    const textBlock = descriptionBlock.querySelector('.description__text-block');\r\n\r\n    if (textBlock.offsetHeight > 210) {\r\n        textBlock.insertAdjacentHTML('afterend', `\r\n            <button class=\"open__descrition\">\r\n                Подробнее\r\n            </button>\r\n        `);\r\n\r\n        textBlock.style.height = '210px';\r\n\r\n        const btn = descriptionBlock.querySelector('button');\r\n\r\n        btn.addEventListener('click', () => {\r\n            if (btn.classList.contains('close')) {\r\n                textBlock.style.height = '210px';\r\n    \r\n                btn.classList.remove('close');\r\n    \r\n                btn.textContent = 'Подробнее';\r\n            } else {\r\n                textBlock.style.height = 'auto';\r\n    \r\n                btn.classList.add('close');\r\n    \r\n                btn.textContent = 'Свернуть';\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nif (mainInfoEmail) {\r\n    mainInfoEmail.addEventListener('click', () => {\r\n        mainInfoEmail.textContent = mainInfoEmail.dataset.email;\r\n        mainInfoEmail.classList.add('active');\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/card.js?");

/***/ }),

/***/ "./src/assets/js/feedback.js":
/*!***********************************!*\
  !*** ./src/assets/js/feedback.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const feedbackForm = document.querySelector('.feedback');\r\n\r\nif (feedbackForm) {\r\n\r\n    feedbackForm.autocomplete = \"off\";\r\n\r\n    const usernameInput = document.querySelector('input[name=username]'),\r\n        emailInput = document.querySelector('input[name=\"email\"]'),\r\n        reviewTitileInput = document.querySelector('input[name=\"review-title\"]'),\r\n        reviewTextArea = document.querySelector('textarea[name=\"review-text\"]'),\r\n        chekboxPolicy = document.querySelector('#privacy-policy-chekbox'),\r\n        accountPeriod = document.querySelector('.account-period'),\r\n        accountPrice = document.querySelector('.account-price'),\r\n        accountQualityRepairs = document.querySelector('.account-quality-repairs'),\r\n        accountQuality = document.querySelector('.account-quality'),\r\n        chekboxRecomend = document.querySelector('input[name=\"recomend\"]'),\r\n        fileInput = document.querySelector('.feedback__file-input'),\r\n        feedbackBtn = document.querySelector('.feedback__btn'),\r\n        feedbackFiles = document.querySelector('.feedback__files');\r\n\r\n    const accountPeriodInputs = accountPeriod.querySelectorAll('input'),\r\n        accountPriceInputs = accountPrice.querySelectorAll('input'),\r\n        accountQualityRepairsInputs = accountQualityRepairs.querySelectorAll('input'),\r\n        accountQualityInputs = accountQuality.querySelectorAll('input');\r\n\r\n        const overlay = document.querySelector('.overlay');\r\n\r\n    const newObj = {\r\n        img: []\r\n    };\r\n\r\n    const checkForm = () => {\r\n            if (!usernameInput.parentNode.classList.contains('error') &&\r\n                !emailInput.parentNode.classList.contains('error') &&\r\n                chekboxPolicy.checked &&\r\n                Array.from(accountPeriodInputs).some(itme => itme.checked) &&\r\n                Array.from(accountPriceInputs).some(itme => itme.checked) &&\r\n                Array.from(accountQualityRepairsInputs).some(itme => itme.checked) &&\r\n                Array.from(accountQualityInputs).some(itme => itme.checked) &&\r\n                reviewTextArea.value.length > 10) {\r\n                feedbackBtn.classList.remove('disabled');\r\n            } else {\r\n                feedbackBtn.classList.add('disabled');\r\n            }\r\n        },\r\n        errorBlock = (selector, message) => {\r\n            if (!selector.classList.contains('error')) {\r\n                selector.classList.add('error');\r\n                selector.insertAdjacentHTML('beforeend', `<p>${message}</p>`);\r\n            }\r\n        },\r\n        deleteError = selector => {\r\n            if (selector.classList.contains('error')) {\r\n                selector.classList.remove('error');\r\n\r\n                selector.querySelector('p').remove();\r\n            }\r\n\r\n        },\r\n        textTransform = text => {\r\n            const arr = text.split(' ');\r\n\r\n            const newArr = arr.map(word => word = word[0].toUpperCase() + word.slice(1));\r\n\r\n            return newArr.join(' ');\r\n        },\r\n        getDateReview = () => {\r\n            const reviewDate = new Date();\r\n            const options = {\r\n                year: 'numeric',\r\n                month: 'numeric',\r\n                day: 'numeric',\r\n                hour: '2-digit',\r\n                minute: '2-digit'\r\n            };\r\n\r\n            return reviewDate.toLocaleTimeString('ru-Ru', options);\r\n        },\r\n        onDrop = evt => {\r\n            const currentFiles = document.querySelectorAll('.feedback__file-block');\r\n            if (currentFiles) {\r\n                feedbackFiles.textContent = '';\r\n                newObj.img = [];\r\n            }\r\n\r\n            const file = fileInput.files;\r\n\r\n            Array.from(file).forEach(item=> {\r\n                feedbackFiles.insertAdjacentHTML('afterbegin', `\r\n                    <div class=\"feedback__file-block\">\r\n                        <span class=\"feedback__file-name\">${item.name}</span>\r\n                        <button class=\"feedback__file-delete\">x</button>\r\n                    </div>\r\n                `);\r\n\r\n                const reader = new FileReader();\r\n\r\n                reader.readAsBinaryString(item);\r\n                reader.addEventListener('load', event => {\r\n                    newObj.img.push({\r\n                        name: item.name,\r\n                        base64: btoa(event.target.result)\r\n                    });\r\n                });\r\n            });\r\n\r\n            const deleteFile = () => {\r\n                let fileBlock = Array.from(document.querySelectorAll('.feedback__file-block')),\r\n                    fileDelBtn = document.querySelectorAll('.feedback__file-delete');\r\n\r\n                fileDelBtn.forEach((item, i) => {\r\n                    item.addEventListener('click', e => {\r\n                        e.preventDefault();\r\n\r\n                        fileBlock.splice(i, 1);\r\n                        feedbackFiles.textContent = '';\r\n\r\n                        fileBlock.forEach(fileItem => feedbackFiles.append(fileItem));\r\n                        deleteFile();\r\n                    });\r\n                });\r\n            }\r\n\r\n            deleteFile();\r\n        };\r\n\r\n    checkForm();\r\n\r\n    usernameInput.addEventListener('input', () => {\r\n        usernameInput.value = usernameInput.value.replace(/[^А-Яа-яЁё ]/i, '');\r\n\r\n        if (usernameInput.value.length < 3) {\r\n            errorBlock(usernameInput.parentNode, 'Введите Имя русскими буквами');\r\n        } else {\r\n            deleteError(usernameInput.parentNode);\r\n        }\r\n\r\n        checkForm();\r\n    });\r\n\r\n    emailInput.addEventListener('input', () => {\r\n        const reg = /[0-9a-z_-]+@[0-9a-z_-]+\\.[a-z]{2,5}/i;\r\n\r\n        if (reg.test(emailInput.value)) {\r\n            deleteError(emailInput.parentNode);\r\n        } else {\r\n            errorBlock(emailInput.parentNode, 'Некоректный email');\r\n        }\r\n\r\n        checkForm();\r\n    });\r\n\r\n    reviewTextArea.addEventListener('input', () => {\r\n        checkForm();\r\n    });\r\n\r\n    chekboxPolicy.addEventListener('change', () => {\r\n        checkForm();\r\n    });\r\n\r\n    accountPeriodInputs.forEach(item => item.addEventListener('change', () => {\r\n        checkForm();\r\n    }));\r\n\r\n    accountPriceInputs.forEach(item => item.addEventListener('change', () => {\r\n        checkForm();\r\n    }));\r\n\r\n    accountQualityRepairsInputs.forEach(item => item.addEventListener('change', () => {\r\n        checkForm();\r\n    }));\r\n\r\n    accountQualityInputs.forEach(item => item.addEventListener('change', () => {\r\n        checkForm();\r\n    }));\r\n\r\n    fileInput.addEventListener('dragstart', e => {\r\n        e.preventDefault();\r\n    });\r\n\r\n    document.addEventListener('drop', onDrop);\r\n    fileInput.addEventListener('change', onDrop);\r\n\r\n    feedbackForm.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        newObj.username = textTransform(usernameInput.value);\r\n        newObj.email = emailInput.value;\r\n        if (reviewTitileInput.value.length > 0) {\r\n            newObj.reviewTitile = reviewTitileInput.value\r\n        };\r\n        newObj.reviewText = reviewTextArea.value;\r\n        newObj.accountPeriod = Array.from(accountPeriodInputs).find(itme => itme.checked).value;\r\n        newObj.accountPrice = Array.from(accountPriceInputs).find(itme => itme.checked).value;\r\n        newObj.accountQualityRepairs = Array.from(accountQualityRepairsInputs).find(itme => itme.checked).value;\r\n        newObj.accountQualityШnteractions = Array.from(accountQualityInputs).find(itme => itme.checked).value;\r\n        newObj.recomend = chekboxRecomend.checked;\r\n        newObj.date = getDateReview();\r\n\r\n        console.log(newObj);\r\n\r\n        overlay.style.display = 'flex';\r\n\r\n        setTimeout(() => overlay.removeAttribute('style'), 10000);\r\n\r\n        feedbackForm.reset();\r\n    });\r\n\r\n    overlay.addEventListener('click', e => {\r\n        const target = e.target;\r\n\r\n        if (target === overlay || target.closest('.modal__close')) {\r\n            overlay.removeAttribute('style');\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/feedback.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const getDate = date => {\r\n    const reviewDate = new Date(date);\r\n    const options = {\r\n        year: 'numeric',\r\n        month: 'long',\r\n        day: 'numeric',\r\n        hour: '2-digit',\r\n        minute: '2-digit'\r\n    };\r\n\r\n    return reviewDate.toLocaleTimeString('ru-Ru', options);\r\n}\r\n\r\nconst getProgress = item => {\r\n    const svgItem = item.querySelector('.progress-ring');\r\n\r\n        if (svgItem) {\r\n            const circle = svgItem.querySelector('.progress-ring__circle');\r\n            const radius = circle.r.baseVal.value;\r\n\r\n            const circumference = 2 * Math.PI * radius;\r\n\r\n            circle.style.strokeDasharray = `${circumference} ${circumference}`;\r\n            circle.style.strokeDashoffset = circumference;\r\n\r\n            (() => {\r\n                const offset = circumference - svgItem.dataset.percent / 100 * circumference;\r\n                circle.style.strokeDashoffset = offset;\r\n            })()\r\n        }\r\n}\r\n\r\nconst companyCard = document.querySelectorAll('.company-card');\r\nconst companyRating = document.querySelector('.info-rating');\r\n\r\nif (companyCard.length > 0) {\r\n    companyCard.forEach(item => {\r\n        const dateBlock = item.querySelector('.company-card__footer-info__date');\r\n        \r\n        getProgress(item);\r\n\r\n        dateBlock.textContent = getDate(dateBlock.getAttribute('data-time'));\r\n\r\n        console.log(dateBlock.getAttribute('data-time'));\r\n    });\r\n}\r\n\r\nif (companyRating) {\r\n    getProgress(companyRating);\r\n}\r\n\r\nconst phone = document.querySelectorAll('.phone');\r\n\r\nif (phone) {\r\n    // console.log(phone);\r\n    phone.forEach(item => {\r\n        let phoneStr = item.getAttribute('data-phone');\r\n\r\n        phoneStr = phoneStr.substring(0, phoneStr.length - 5) + 'XX-XX';\r\n\r\n        item.textContent = phoneStr;\r\n\r\n        item.addEventListener('click', () => {\r\n            item.textContent = item.getAttribute('data-phone');\r\n            item.classList.add('active');\r\n        })\r\n    });\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/index.js?");

/***/ }),

/***/ "./src/assets/js/map.js":
/*!******************************!*\
  !*** ./src/assets/js/map.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mapBlock = document.querySelector('.map-wrapper');\r\n\r\nif (mapBlock) {\r\n    const addFilter = mapBlock.querySelector('#add-filter'),\r\n        clearFilter = mapBlock.querySelector('#clear-filter'),\r\n        mapFilterForm = mapBlock.querySelector('.map-filter__form'),\r\n        mapCards = mapBlock.querySelector('.map-cards');\r\n\r\n    const openContent = block => {\r\n        const contentBlock = block.querySelector('.map-filter__block-content'),\r\n        clear = block.querySelector('.map-filter__clear');\r\n\r\n        contentBlock.classList.remove('hide');\r\n        clear.classList.remove('hide');\r\n        \r\n        console.log(contentBlock);\r\n    } \r\n\r\n    addFilter.addEventListener('click', () => {\r\n        addFilter.classList.add('hide');\r\n        clearFilter.classList.remove('hide');\r\n        mapFilterForm.classList.remove('hide');\r\n        mapCards.classList.add('hide');\r\n    });\r\n\r\n    clearFilter.addEventListener('click', () => {\r\n        addFilter.classList.remove('hide');\r\n        clearFilter.classList.add('hide');\r\n        mapFilterForm.classList.add('hide');\r\n        mapCards.classList.remove('hide');\r\n        mapFilterForm.reset();\r\n    });\r\n\r\n    mapFilterForm.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        const target = e.target;\r\n\r\n        if (target.closest('.map-filter__block') && target.closest('.map-filter__add')) {\r\n            target.classList.add('hide');\r\n            openContent(target.closest('.map-filter__block'));\r\n        }\r\n        \r\n        \r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/map.js?");

/***/ }),

/***/ "./src/assets/js/mobileMenu.js":
/*!*************************************!*\
  !*** ./src/assets/js/mobileMenu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const headerMobileBtn = document.querySelector('.header-mobile__btn');\r\n\r\nif (headerMobileBtn) {\r\n    const headerMobileNav = document.querySelector('.header-mobile__nav');\r\n\r\n    headerMobileBtn.addEventListener('click', () => {\r\n        headerMobileBtn.classList.toggle('active');\r\n        headerMobileNav.classList.toggle('active');\r\n    });\r\n\r\n    window.addEventListener('resize', () => {\r\n        headerMobileBtn.classList.remove('active');\r\n        headerMobileNav.classList.remove('active');\r\n    })\r\n}\r\n\r\nconst filterMobailBtn = document.querySelector('.filter-mobail_btn');\r\n\r\nif (filterMobailBtn) {\r\n    const filter = document.querySelector('.filter');\r\n\r\n    filterMobailBtn.addEventListener('click', () => {\r\n        filterMobailBtn.classList.toggle('active');\r\n\r\n        if (filterMobailBtn.classList.contains('active')) {\r\n            filter.style.opacity = '1';\r\n            filter.style.height = 'auto';\r\n        } else {\r\n            filter.removeAttribute('style');\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/mobileMenu.js?");

/***/ }),

/***/ "./src/assets/js/reviews.js":
/*!**********************************!*\
  !*** ./src/assets/js/reviews.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const reviewsBlockTime = document.querySelectorAll('.reviews-block__time');\r\n\r\nconst reviewsCardContent = document.querySelectorAll('.reviews-card__content');\r\n\r\nif (reviewsBlockTime) {\r\n    const getDateNum = date => {\r\n        const reviewDate = new Date(date);\r\n        const options = {\r\n            year: 'numeric',\r\n            month: 'numeric',\r\n            day: 'numeric'\r\n        };\r\n\r\n        return `${reviewDate.getDate()}.${reviewDate.getMonth() + 1}.${reviewDate.getFullYear()}`;\r\n    }\r\n\r\n    reviewsBlockTime.forEach(time => time.textContent = getDateNum(time.dataset.time));\r\n}\r\n\r\nif (reviewsCardContent) {\r\n\r\n    reviewsCardContent.forEach(item => {\r\n        const reviewsBlockComment = item.querySelector('.reviews-block__comment');\r\n\r\n        if (reviewsBlockComment.offsetHeight > 220) {\r\n            reviewsBlockComment.style.height = '220px';\r\n\r\n            reviewsBlockComment.insertAdjacentHTML('afterend', `\r\n            <button class=\"open__descrition\">\r\n                Подробнее\r\n            </button>`);\r\n\r\n            const btnComment = item.querySelector('button');\r\n\r\n            btnComment.addEventListener('click', () => {\r\n                if (btnComment.classList.contains('close')) {\r\n                    reviewsBlockComment.style.height = '220px';\r\n\r\n                    btnComment.classList.remove('close');\r\n\r\n                    btnComment.textContent = 'Подробнее';\r\n                } else {\r\n                    reviewsBlockComment.style.height = 'auto';\r\n\r\n                    btnComment.classList.add('close');\r\n\r\n                    btnComment.textContent = 'Свернуть';\r\n                }\r\n            });\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/reviews.js?");

/***/ }),

/***/ "./src/assets/js/searchForm.js":
/*!*************************************!*\
  !*** ./src/assets/js/searchForm.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const headerSearch = document.querySelectorAll('.header-search'),\r\n    headerSearchBtnMob = document.querySelector('.header-search__btn-mob'),\r\n    headerSearchBtnClose = document.querySelector('.header-search__btn-close');\r\n\r\nheaderSearch.forEach(item => item.addEventListener('submit', e => {\r\n    e.preventDefault();\r\n}));\r\n\r\n\r\nheaderSearchBtnMob.addEventListener('click', () => {\r\n    headerSearchBtnMob.parentNode.classList.add('active');\r\n});\r\n\r\nheaderSearchBtnClose.addEventListener('click', () => {\r\n    headerSearchBtnClose.parentNode.classList.remove('active');\r\n});\n\n//# sourceURL=webpack:///./src/assets/js/searchForm.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const imgSliderBlock = document.querySelectorAll('.img-slider-block');\r\n\r\nif (imgSliderBlock) {\r\n    const sliderInit = (selector, btnNext, btnPrev) => {\r\n        const mySwiper = new Swiper(selector, {\r\n            slidesPerView: 4,\r\n            spaceBetween: 16,\r\n            slidesPerColumn: 1,\r\n            allowTouchMove: false,\r\n            autoHeight: false,\r\n            loop: false,\r\n            navigation: {\r\n                nextEl: btnNext,\r\n                prevEl: btnPrev,\r\n            },\r\n            breakpoints: {\r\n                1300: {\r\n                    slidesPerView: 4,\r\n                },\r\n                992: {\r\n                    slidesPerView: 3\r\n                },\r\n                547: {\r\n                    slidesPerView: 2,\r\n                    \r\n                },\r\n                100: {\r\n                    slidesPerView: 2,\r\n                    spaceBetween: 10\r\n                }\r\n            }\r\n        });\r\n    }\r\n    imgSliderBlock.forEach((slider, i) => {\r\n        const sliderContainer = slider.querySelector('.img-slider-block__container');\r\n        const arrowNext = slider.querySelector('.img-slider-block__next');\r\n        const arrowPrev = slider.querySelector('.img-slider-block__prev');\r\n\r\n        arrowNext.classList.add(`next-${i}`);\r\n        arrowPrev.classList.add(`prev-${i}`);\r\n\r\n        sliderContainer.classList.add(`slider-block-${i}`);\r\n        sliderInit(`.slider-block-${i}`, `.next-${i}`, `.prev-${i}`);\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/starRating.js":
/*!*************************************!*\
  !*** ./src/assets/js/starRating.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const starRating = document.querySelectorAll('.star-rating');\r\nconst companyCardRating = document.querySelectorAll('.company-card__rating');\r\nconst mapCardRating = document.querySelectorAll('.map-card__rating');\r\n\r\nconst changeRating = (count, ratingBlock) => {\r\n    ratingBlock.style.width = `${count / 5 * 100}%`;\r\n}\r\n\r\nif (starRating) {\r\n    starRating.forEach(block => {\r\n        const starRatingCount = block.querySelector('.star-rating__count'),\r\n        starRatingActive = block.querySelector('.star-rating__active');\r\n        changeRating(starRatingCount.textContent, starRatingActive);\r\n    })\r\n}\r\n\r\nif (companyCardRating) {\r\n    companyCardRating.forEach(block => {\r\n        const companyCardRatingDefault = block.querySelector('.company-card__rating-default'),\r\n        companyCardRatingActive = block.querySelector('.company-card__rating-active');\r\n        changeRating(companyCardRatingDefault.dataset.ratingCount, companyCardRatingActive);\r\n    })\r\n}\r\n\r\nif (mapCardRating) {\r\n    mapCardRating.forEach(block => {\r\n        const mapCardRatingDefault = block.querySelector('.map-card__rating-default'),\r\n        mapCardRatingActive = block.querySelector('.map-card__rating-active');\r\n\r\n        changeRating(mapCardRatingDefault.dataset.ratingCount, mapCardRatingActive);\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/assets/js/starRating.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/add-company.js ./src/assets/js/breadcrumb.js ./src/assets/js/calc.js ./src/assets/js/card.js ./src/assets/js/feedback.js ./src/assets/js/index.js ./src/assets/js/map.js ./src/assets/js/mobileMenu.js ./src/assets/js/reviews.js ./src/assets/js/searchForm.js ./src/assets/js/slider.js ./src/assets/js/starRating.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\add-company.js */\"./src/assets/js/add-company.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\breadcrumb.js */\"./src/assets/js/breadcrumb.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\calc.js */\"./src/assets/js/calc.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\card.js */\"./src/assets/js/card.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\feedback.js */\"./src/assets/js/feedback.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\index.js */\"./src/assets/js/index.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\map.js */\"./src/assets/js/map.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\mobileMenu.js */\"./src/assets/js/mobileMenu.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\reviews.js */\"./src/assets/js/reviews.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\searchForm.js */\"./src/assets/js/searchForm.js\");\n__webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\nmodule.exports = __webpack_require__(/*! C:\\_projects\\remrating-spb.ru\\src\\assets\\js\\starRating.js */\"./src/assets/js/starRating.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/add-company.js_./src/assets/js/breadcrumb.js_./src/assets/js/calc.js_./src/assets/js/card.js_./src/assets/js/feedback.js_./src/assets/js/index.js_./src/assets/js/map.js_./src/assets/js/mobileMenu.js_./src/assets/js/reviews.js_./src/assets/js/searchForm.js_./src/assets/js/slider.js_./src/assets/js/starRating.js?");

/***/ })

/******/ });