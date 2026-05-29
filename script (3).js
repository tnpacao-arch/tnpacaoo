const snowContainer = document.querySelector('.snow-container');

for(let i = 0; i < 100; i++){

    const snowflake = document.createElement('div');

    snowflake.classList.add('snowflake');

    snowflake.style.left = Math.random() * 100 + 'vw';

    snowflake.style.width = Math.random() * 8 + 4 + 'px';

    snowflake.style.height = snowflake.style.width;

    snowflake.style.animationDuration =
        Math.random() * 10 + 5 + 's';

    snowflake.style.animationDelay =
        Math.random() * 5 + 's';

    snowContainer.appendChild(snowflake);

}