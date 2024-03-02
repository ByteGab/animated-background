const container = document.querySelector('.container');
const colors = ['#CB51EE','#0073BC','#38B75E','#DE365C'];

const figures1 = () => {
    for(let i = 0;i <= 30; i++ ){
        let figure = document.createElement('span');
        figure.classList.add('cuadrado');
        let select = Math.round(colors.length * Math.random()) % colors.length;

        figure.style.top = innerHeight * Math.random() + 'px';
        figure.style.left = innerWidth * Math.random() + 'px';
        figure.style.background = colors[select];

        container.appendChild(figure);
        
        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px';
            figure.style.left = innerWidth * Math.random() + 'px';
        },4005)
    }
}
figures1();

const figures2 = () => {
    for(let i = 0;i <= 30; i++ ){
        let figure = document.createElement('span');
        figure.classList.add('circulo');
        let select = Math.round(colors.length * Math.random()) % colors.length;

        figure.style.top = innerHeight * Math.random() + 'px';
        figure.style.left = innerWidth * Math.random() + 'px';
        figure.style.background = colors[select];

        container.appendChild(figure);
        
        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px';
            figure.style.left = innerWidth * Math.random() + 'px';
        },4005)
    }
}

figures2();