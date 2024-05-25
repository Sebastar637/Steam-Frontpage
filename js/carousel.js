$(document).ready(function() {
    $.getJSON('./json/carouselItems.json', function(data) {
        function shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        }

        const shuffledData = shuffle(data);

        const $carouselInner = $('.carousel-inner');
        $carouselInner.empty();

        $.each(shuffledData, function(index, item) {
            const activeClass = index === 0 ? 'active' : '';

            const $carouselItem = $(`
                <div class="carousel-item ${activeClass}">
                    <div class="row">
                        <div class="col-8">
                            <img src="${item.image}" class="d-block w-100" alt="${item.title}">
                        </div>
                        <div class="col-4 d-flex flex-column justify-content-between">
                            <div>
                                <h3 id="title">${item.title}</h3>
                            </div>
                            <div class="mt-auto">
                                <p id="count">${item.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `);

            $carouselInner.append($carouselItem);
        });
    }).fail(function() {
        console.error('Error al cargar el archivo JSON');
    });
});
