var ProgressBar = require('progressbar.js')
var VanillaTilt = require('vanilla-tilt')

window.onload = function () {

    VanillaTilt.init(document.querySelector("#socials-section"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
    });

    var circle = new ProgressBar.Circle('#javascript', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.6);


    circle = new ProgressBar.Circle('#java', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.6);


    circle = new ProgressBar.Circle('#git', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.75);

    circle = new ProgressBar.Circle('#nodejs', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.4);

    circle = new ProgressBar.Circle('#python', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.6);

    circle = new ProgressBar.Circle('#react', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.4);

    circle = new ProgressBar.Circle('#db', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.5);

    circle = new ProgressBar.Circle('#android', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.5);

    circle = new ProgressBar.Circle('#ps', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.8);

    circle = new ProgressBar.Circle('#ai', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.7);

    circle = new ProgressBar.Circle('#id', {
        color: '#2C3941',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth: 10,
    });

    circle.animate(0.6);


    var TxtType = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };


    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
