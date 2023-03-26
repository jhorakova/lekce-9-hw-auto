/*Založte si HTML stránku s JavaScriptem.
Stáhněte si připravený obrázek auta. Vložte na stránku prvek img s tímto obrázkem.
Když uživatel stiskne šipku doprava, nastavte obrázku s autem CSS vlastnost margin-left, aby se auto pohnulo kousek doprava.
Při stisknutí šipky doleva nastavte obrázku s autem margin-left zpět na nulu.*/

const car = document.querySelector('#car')

document.addEventListener('keyup', (e) => {
	if (e.code === 'ArrowRight') {
		console.log('ArrowRight')
        car.classList.add('margin-left')
	}
    if (e.code === 'ArrowLeft') {
        console.log('ArrowLeft')
        car.classList.remove('margin-left')
    }
})