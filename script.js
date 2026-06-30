// Numero que recibira los pedidos por WhatsApp.
const WHATSAPP_NUMBER = "50254894131";
// Nuevos productos que se agregan al carrusel de Boxer.
const intimateWearProducts = [
  ["Camiseta de malla", "M", "Camiseta blanca de tejido abierto, ligera y fresca, ideal para crear un look atrevido y moderno."],
  ["Brief clasico", "S", "Brief negro de corte bajo con ajuste anatomico y tela suave para brindar soporte durante todo el dia."],
  ["Brief con realce", "M-L-XL", "Brief negro con diseno moldeador y espacio frontal que realza la figura sin perder comodidad."],
  ["Brief en tonos suaves", "S-M-L", "Brief de corte moderno disponible en tonos pastel, con ajuste comodo y acabado limpio."],
  ["Boxer corto deportivo", "S-M", "Boxer negro de pierna corta y corte atletico, comodo para entrenar o usar a diario."],
  ["Brief rojo clasico", "S-M", "Brief rojo de tiro bajo con contorno definido y soporte frontal para un estilo llamativo."],
  ["Jockstrap de tiras", "S-M-L", "Jockstrap negro con bandas elasticas firmes y diseno abierto que combina soporte y libertad."],
  ["Short holgado", "S-M", "Short gris ligero y holgado con cintura elastica, pensado para descansar con maxima libertad."],
  ["Jockstrap bicolor", "S-M-L", "Jockstrap de contraste rojo, negro y blanco con corte abierto y soporte frontal marcado."],
  ["Boxer liso ajustado", "S-M-L", "Boxer liso de ajuste cenido y textura suave, disponible en colores neutros para uso diario."],
  ["Brief deportivo de colores", "S-M-L", "Brief atletico con vivos de color, cintura elastica y ajuste firme para acompanar cada movimiento."],
  ["Boxer tejido suelto", "S-M-L", "Boxer de pierna amplia con tejido ligero y estampados variados para una sensacion fresca y relajada."],
  ["Brief estampado", "S-M-L", "Brief de tiro bajo con estampados delicados y corte anatomico que combina suavidad y estilo."],
  ["Jockstrap clasico", "S-M-L", "Jockstrap en colores basicos con cintura ancha y bandas posteriores para soporte seguro."],
  ["Tanga de encaje", "S-M-L", "Tanga de encaje semitransparente con lineas finas y un acabado elegante y sensual."],
  ["Boxer de rayas", "S-M", "Boxer corto en tonos pastel y rayas, confeccionado para ofrecer frescura y ajuste flexible."],
  ["Brief esencial", "S", "Brief minimalista en negro o azul, con cintura elastica y cobertura comoda para todos los dias."],
  ["Brief de encaje negro", "S-M-L", "Brief semitransparente de encaje negro con textura delicada y corte bajo de estilo sofisticado."],
  ["Brief pastel premium", "S-M-L", "Brief en tonos pastel con tejido suave, cintura comoda y diseno frontal anatomico."],
  ["Suspensorio transparente", "S-M", "Suspensorio de malla translucida con bandas firmes y un diseno abierto de apariencia provocativa."],
  ["Jockstrap suave", "M-L-XL", "Jockstrap en tonos suaves con banda ancha y soporte anatomico para un ajuste ligero y seguro."],
  ["Jockstrap urbano", "S-M-L", "Jockstrap de estetica urbana con contrastes intensos, cintura resistente y parte posterior abierta."],
  ["Tanga minimalista", "S-M-L", "Tanga de tiras delgadas y corte frontal compacto, disponible en colores clasicos y vibrantes."],
  ["Brief multicolor", "S-M", "Brief de inspiracion deportiva con bordes contrastantes y una seleccion de colores energeticos."],
  ["Tanga de colores", "S-M-L", "Tanga de tiro bajo con cintas laterales finas, suave al tacto y disponible en varios colores."],
  ["Boxer pastel", "S-M-L", "Boxer corto en tonos pastel con cintura flexible y tela fresca para comodidad cotidiana."],
  ["Brief de microfibra", "S-M", "Brief de microfibra en tonos oscuros, con ajuste ergonomico y acabado suave sobre la piel."],
  ["Brief deportivo premium", "S-M-L", "Brief de corte deportivo con cintura reforzada, panel frontal comodo y colores intensos."],
  ["Boxer de color", "S-M-L", "Boxer ajustado de pierna corta en colores vivos, disenado para brindar soporte y libertad."],
  ["Boxer basico", "S-M-L", "Boxer basico en tonos neutros con tejido transpirable y corte comodo para uso prolongado."],
  ["Boxer ligero", "S-M-L", "Boxer corto de tela ligera en tonos frescos, con cintura suave y ajuste relajado."],
  ["Brief con detalle frontal", "S-M", "Brief de tiro bajo con detalle frontal decorativo y contraste de color para un look moderno."],
  ["Boxer satinado", "S-M-L", "Boxer de acabado sedoso y colores suaves, con ajuste amplio que favorece la comodidad."],
  ["Boxer con realce frontal", "S-M-L", "Boxer corto con panel anatomico de realce, cintura flexible y combinaciones de color llamativas."],
  ["Brief de tiras", "S-M-L", "Brief de cintura baja con aberturas laterales y tiras elasticas para un estilo audaz."],
  ["Boxer canalado", "S-M-L", "Boxer de tejido canalado en colores sobrios, suave, flexible y con soporte frontal definido."],
  ["Boxer elegante", "S-M", "Boxer corto en tonos oscuros con detalles discretos y corte ajustado de apariencia elegante."],
  ["Boxer atletico", "S-M-L", "Boxer deportivo con cintura contrastante y tela elastica que se adapta al movimiento."],
  ["Brief de encaje", "S-M-L", "Brief de encaje semitransparente con bordes delicados, disponible en negro, blanco y beige."],
  ["Boxer perforado", "S-M", "Boxer de tejido perforado y transpirable con ajuste frontal comodo para mantener mayor frescura."],
  ["Brief tricolor", "S-M-L", "Brief de corte clasico en rojo, blanco y negro, con cintura firme y tacto suave."],
  ["Brief sensual", "S-M-L", "Brief de paneles combinados y transparencias sutiles que aporta un estilo sensual y definido."],
  ["Brief de encaje suave", "S-M-L", "Brief de encaje en tonos neutros con textura ligera, cintura elastica y terminacion delicada."],
  ["Brief abierto", "S-M-L", "Brief de diseno abierto con bandas posteriores y corte frontal minimalista para un look atrevido."],
  ["Boxer a rayas", "S-M-L", "Boxer holgado con franjas anchas y cintura elastica, ideal para descansar con comodidad."],
  ["Brief deportivo vibrante", "S-M-L", "Brief deportivo con franjas laterales y colores vivos, ajustado para ofrecer soporte y estilo."],
];

const boxerCarousel = document.querySelector("#boxerCarousel");
if (boxerCarousel) {
  boxerCarousel.insertAdjacentHTML(
    "beforeend",
    intimateWearProducts.map(([name, sizes, description], index) => `
      <article class="product-card" data-category="boxer" data-name="${name}" style="--product-tone: ${["#26363a", "#3a252d", "#23333d", "#372d42"][index % 4]}">
        <div class="product-media">
          <img src="imagenes para web/imagenes ropa intima/ropa  (${index + 1}).jpeg" alt="${name}" loading="lazy" />
        </div>
        <div class="product-body">
          <span class="product-kicker">Tallas ${sizes}</span>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
        <div class="product-foot">
          <span class="price">Cotizar precio</span>
          <button class="mini-btn" type="button" data-add="${name} - Cotizar precio" aria-label="Agregar ${name}">+</button>
        </div>
      </article>
    `).join(""),
  );

  // Divide Boxer en tres carruseles con movimiento independiente.
  const boxerCards = [...boxerCarousel.children];
  const originalCarousel = boxerCarousel.closest(".product-carousel");
  const boxerRows = document.createElement("div");
  const cardsPerRow = Math.ceil(boxerCards.length / 3);

  boxerRows.className = "boxer-carousel-rows";

  for (let row = 0; row < 3; row += 1) {
    const rowCarousel = document.createElement("div");
    rowCarousel.className = "product-carousel boxer-row-carousel";
    rowCarousel.setAttribute(
      "aria-label",
      `Carrusel ${row + 1} de productos Boxer`,
    );
    rowCarousel.innerHTML = `
      <button
        class="carousel-arrow carousel-arrow-prev"
        type="button"
        data-carousel-direction="prev"
        aria-label="Ver productos Boxer anteriores"
        title="Productos anteriores"
      >‹</button>
      <div
        class="product-grid product-carousel-track"
        id="boxerCarousel${row + 1}"
        tabindex="0"
      ></div>
      <button
        class="carousel-arrow carousel-arrow-next"
        type="button"
        data-carousel-direction="next"
        aria-label="Ver productos Boxer siguientes"
        title="Productos siguientes"
      >›</button>
    `;

    const rowTrack = rowCarousel.querySelector(".product-carousel-track");
    boxerCards
      .slice(row * cardsPerRow, (row + 1) * cardsPerRow)
      .forEach((card) => rowTrack.append(card));
    boxerRows.append(rowCarousel);
  }

  originalCarousel.replaceWith(boxerRows);
}
// Nuevos productos que se agregan al carrusel de Juguetes sexuales.
const sexualToyProducts = [
  ["Dildo realista con ventosa", "Estimulacion", "Modelo realista de gran tamano con textura definida y base de ventosa para fijarlo sobre superficies lisas."],
  ["Anillo estimulador texturizado", "Parejas", "Anillo flexible con relieves estimulantes, disenado para anadir contacto y sensaciones durante los encuentros en pareja."],
  ["Dildo realista doble funcion", "Realista", "Diseno anatomico con textura marcada y abertura posterior para explorar diferentes formas de estimulacion."],
  ["Dildo rosa compacto", "15.6 cm", "Dildo rosa de tamano compacto con superficie suave y base de ventosa para disfrutar con manos libres."],
  ["Dildo transparente", "11 cm", "Modelo transparente, discreto y facil de manejar, con forma estilizada para una estimulacion gradual."],
  ["Bomba de vacio con anillos", "Accesorios", "Bomba manual transparente acompanada de tres anillos elasticos de diferentes tamanos para personalizar el ajuste."],
  ["Estimulador prostatico", "Anatomico", "Accesorio curvo con base amplia y diseno ergonomico, pensado para masajear de forma precisa y estable."],
  ["Anillo de soporte multiple", "Ajustable", "Anillo masculino de estructura flexible con varios puntos de sujecion para ofrecer soporte y un ajuste firme."],
  ["Funda extensora con anillo", "Extensor", "Funda flexible con sistema de anillo que ayuda a mantenerla en posicion y aporta mayor volumen y textura."],
  ["Dildo con testiculos y ventosa", "Realista", "Modelo realista con cuerpo texturizado, testiculos moldeados y ventosa ancha para una fijacion estable."],
  ["Enema anal portatil", "Higiene", "Enema plegable con canula delgada, compacto y sencillo de guardar para apoyar la higiene intima."],
  ["Bomba de vacio manual", "Masculino", "Bomba transparente con pera manual y tubo flexible para controlar la succion de manera gradual."],
  ["Dildos realistas surtidos", "Variedad", "Seleccion de modelos realistas en distintos tonos y tamanos, todos con base de ventosa para mayor versatilidad."],
  ["Plug anal inflable", "Ajustable", "Plug anal inflable con forma escalonada y bomba manual, creado para ajustar progresivamente el volumen."],
  ["Plug metalico con joya", "Premium", "Plug metalico pulido con base decorativa tipo joya, superficie lisa y peso firme para una experiencia elegante."],
  ["Dildo vibrador recargable", "USB", "Dildo realista con control integrado y cable USB, combina textura anatomica con diferentes vibraciones."],
  ["Dildo curvo con ventosa", "Realista", "Modelo realista de forma curva con detalle frontal y base de ventosa, disenado para una estimulacion profunda."],
];

const toysCarousel = document.querySelector("#juguetesCarousel");
if (toysCarousel) {
  toysCarousel.insertAdjacentHTML(
    "beforeend",
    sexualToyProducts.map(([name, detail, description], index) => `
      <article class="product-card" data-category="juguetes" data-name="${name}" style="--product-tone: ${["#332739", "#21383d", "#3b292d", "#2c3040"][index % 4]}">
        <div class="product-media">
          <img src="imagenes para web/imagenes para juguetes/juguete (${index + 1}).jpeg" alt="${name}" loading="lazy" />
        </div>
        <div class="product-body">
          <span class="product-kicker">${detail}</span>
          <h3>${name}</h3>
          <p>${description}</p>
        </div>
        <div class="product-foot">
          <span class="price">Cotizar precio</span>
          <button class="mini-btn" type="button" data-add="${name} - Cotizar precio" aria-label="Agregar ${name}">+</button>
        </div>
      </article>
    `).join(""),
  );

  // Divide Juguetes en dos carruseles con movimiento independiente.
  const toyCards = [...toysCarousel.children];
  const originalToysCarousel = toysCarousel.closest(".product-carousel");
  const toyRows = document.createElement("div");
  const toysPerRow = Math.ceil(toyCards.length / 2);

  toyRows.className = "toys-carousel-rows";

  for (let row = 0; row < 2; row += 1) {
    const rowCarousel = document.createElement("div");
    rowCarousel.className = "product-carousel toys-row-carousel";
    rowCarousel.setAttribute(
      "aria-label",
      `Carrusel ${row + 1} de juguetes sexuales`,
    );
    rowCarousel.innerHTML = `
      <button
        class="carousel-arrow carousel-arrow-prev"
        type="button"
        data-carousel-direction="prev"
        aria-label="Ver juguetes anteriores"
        title="Productos anteriores"
      >‹</button>
      <div
        class="product-grid product-carousel-track"
        id="juguetesCarousel${row + 1}"
        tabindex="0"
      ></div>
      <button
        class="carousel-arrow carousel-arrow-next"
        type="button"
        data-carousel-direction="next"
        aria-label="Ver juguetes siguientes"
        title="Productos siguientes"
      >›</button>
    `;

    const rowTrack = rowCarousel.querySelector(".product-carousel-track");
    toyCards
      .slice(row * toysPerRow, (row + 1) * toysPerRow)
      .forEach((card) => rowTrack.append(card));
    toyRows.append(rowCarousel);
  }

  originalToysCarousel.replaceWith(toyRows);
}
// Servicios adicionales que aparecen debajo de los masajes principales.
const massageProducts = [
  ["Cuidado corporal masculino", "Bienestar", "Servicio integral para caballeros con opciones de depilacion, cuidado corporal y atencion personalizada en un ambiente discreto."],
  ["Depilacion de pecho", "Depilacion", "Tratamiento de depilacion masculina para pecho y torso, pensado para lograr una piel limpia y un acabado uniforme."],
  ["Limpieza facial", "Cuidado facial", "Sesion de limpieza y cuidado facial masculino que ayuda a refrescar la piel y mejorar su apariencia."],
  ["Terapias de bienestar", "Servicios", "Consulta nuestra variedad de masajes y terapias corporales para elegir la opcion adecuada segun tus necesidades."],
  ["Acupuntura corporal", "Terapia", "Tecnica con agujas finas aplicada en puntos especificos del cuerpo para favorecer la relajacion y el equilibrio."],
  ["Masaje profundo de espalda", "Muscular", "Masaje manual de presion firme para trabajar espalda, hombros y zonas con tension muscular acumulada."],
  ["Masaje corporal relajante", "Relajacion", "Sesion corporal enfocada en liberar tension, calmar el cuerpo y brindar una experiencia privada de descanso."],
  ["Masaje privado para hombres", "Caballeros", "Atencion profesional y discreta para hombres, con tecnicas de relajacion adaptadas a las preferencias del cliente."],
  ["Experiencia naturista", "Privado", "Experiencia de bienestar en un entorno privado, orientada a la libertad corporal, la tranquilidad y la conexion personal."],
  ["Atencion personalizada", "Cita privada", "Servicio individual con trato cercano y confidencial, preparado de acuerdo con el tipo de experiencia solicitada."],
  ["Catalogo de masajes", "Opciones", "Diferentes modalidades de masaje para elegir intensidad, duracion y enfoque segun disponibilidad."],
  ["Masaje sensorial masculino", "Sensorial", "Experiencia para caballeros que combina contacto relajante, ambiente privado y atencion personalizada."],
  ["Electroterapia muscular", "Terapia", "Aplicacion de impulsos controlados mediante electrodos para complementar el tratamiento de zonas musculares."],
  ["Terapia con ventosas", "Recuperacion", "Tecnica de ventosas aplicada sobre la espalda para trabajar puntos de tension y apoyar la recuperacion corporal."],
  ["Masaje terapeutico integral", "Integral", "Combinacion de tecnicas terapeuticas y relajantes seleccionadas de acuerdo con las necesidades de cada persona."],
  ["Masaje con aromaterapia", "Aromaterapia", "Masaje relajante acompanado de aceites aromaticos y un ambiente calido que favorece el descanso."],
  ["Relajacion y belleza", "Paquete", "Paquete de bienestar con opciones de masaje, cuidado corporal y tratamientos esteticos para caballeros."],
];

const massageServiceBand = document.querySelector("#masajes .service-band");
if (massageServiceBand) {
  const massageRows = document.createElement("div");
  const massagesPerRow = Math.ceil(massageProducts.length / 2);

  massageRows.className = "massage-carousel-rows";

  for (let row = 0; row < 2; row += 1) {
    const rowCarousel = document.createElement("div");
    rowCarousel.className = "product-carousel massage-row-carousel";
    rowCarousel.setAttribute(
      "aria-label",
      `Carrusel ${row + 1} de servicios de masaje`,
    );
    rowCarousel.innerHTML = `
      <button class="carousel-arrow carousel-arrow-prev" type="button" data-carousel-direction="prev" aria-label="Ver masajes anteriores" title="Masajes anteriores">‹</button>
      <div class="product-grid product-carousel-track massage-carousel-track" id="massageCarousel${row + 1}" tabindex="0"></div>
      <button class="carousel-arrow carousel-arrow-next" type="button" data-carousel-direction="next" aria-label="Ver masajes siguientes" title="Masajes siguientes">›</button>
    `;

    const rowTrack = rowCarousel.querySelector(".product-carousel-track");
    massageProducts
      .slice(row * massagesPerRow, (row + 1) * massagesPerRow)
      .forEach(([name, detail, description], productIndex) => {
        const imageIndex = row * massagesPerRow + productIndex + 1;
        rowTrack.insertAdjacentHTML("beforeend", `
          <article class="product-card massage-product-card" data-category="masajes" data-name="${name}" style="--product-tone: ${["#372a32", "#26373a", "#3b3029"][imageIndex % 3]}">
            <div class="product-media">
              <img src="imagenes para web/imagens para masajes/masaje (${imageIndex}).jpeg" alt="${name}" loading="lazy" />
            </div>
            <div class="product-body">
              <span class="product-kicker">${detail}</span>
              <h3>${name}</h3>
              <p>${description}</p>
            </div>
            <div class="product-foot">
              <span class="price">Cotizar precio</span>
              <button class="mini-btn" type="button" data-add="${name} - Cotizar precio" aria-label="Agregar ${name}">+</button>
            </div>
          </article>
        `);
      });
    massageRows.append(rowCarousel);
  }

  massageServiceBand.insertAdjacentElement("afterend", massageRows);
}
    // Elementos principales que JavaScript necesita controlar.

    const mobileToggle = document.querySelector("#mobileToggle");
    const navLinks = document.querySelector("#navLinks");
    const searchInput = document.querySelector("#searchInput");
    const chips = document.querySelectorAll(".chip");
    const cards = document.querySelectorAll("[data-category]");
    const cartButton = document.querySelector("#cartButton");
    const orderDrawer = document.querySelector("#orderDrawer");
    const closeDrawer = document.querySelector("#closeDrawer");
    const drawerItems = document.querySelector("#drawerItems");
    const whatsappLink = document.querySelector("#whatsappLink");
    const imageViewer = document.querySelector("#imageViewer");
    const expandedProductImage = document.querySelector("#expandedProductImage");
    const closeImageViewer = document.querySelector("#closeImageViewer");
    const productImages = document.querySelectorAll(".product-card .product-media img");
    const order = [];
    let activeFilter = "all";
    const heroSlides = document.querySelectorAll(".hero-slide");
    const productCarousels = document.querySelectorAll(".product-carousel");
    let currentSlide = 0;

    // Cambia automaticamente la imagen principal cada 4.5 segundos.
    if (heroSlides.length > 1) {
      setInterval(() => {
        heroSlides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add("active");
      }, 4500);
    }

    // Inicializa cada carrusel para que sus flechas funcionen de forma independiente.
    productCarousels.forEach((carousel) => {
      const track = carousel.querySelector(".product-carousel-track");
      const arrows = carousel.querySelectorAll("[data-carousel-direction]");

      function updateArrows() {
        const maxScroll = track.scrollWidth - track.clientWidth;
        arrows.forEach((arrow) => {
          const atStart = track.scrollLeft <= 2;
          const atEnd = track.scrollLeft >= maxScroll - 2;
          arrow.disabled = arrow.dataset.carouselDirection === "prev" ? atStart : atEnd;
        });
      }

      arrows.forEach((arrow) => {
        arrow.addEventListener("click", () => {
          const direction = arrow.dataset.carouselDirection === "next" ? 1 : -1;
          track.scrollBy({
            left: direction * track.clientWidth,
            behavior: "smooth",
          });
        });
      });

      track.addEventListener("scroll", updateArrows, { passive: true });
      track.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
      });
      window.addEventListener("resize", updateArrows);
      requestAnimationFrame(updateArrows);
    });


    // Abre las fotografias de productos en una ventana ampliada.
    function openImageViewer(image) {
      expandedProductImage.src = image.currentSrc || image.src;
      expandedProductImage.alt = image.alt || "Imagen ampliada del producto";
      imageViewer.showModal();
    }

    productImages.forEach((image) => {
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", `Ampliar ${image.alt || "imagen del producto"}`);
      image.addEventListener("click", () => openImageViewer(image));
      image.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openImageViewer(image);
      });
    });

    closeImageViewer.addEventListener("click", () => imageViewer.close());
    imageViewer.addEventListener("click", (event) => {
      if (event.target === imageViewer) imageViewer.close();
    });
    imageViewer.addEventListener("close", () => {
      expandedProductImage.removeAttribute("src");
      expandedProductImage.alt = "";
    });
    // Abre y cierra el menu en telefonos.
    mobileToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.addEventListener("click", (event) => {
      if (event.target.tagName === "A") navLinks.classList.remove("open");
    });

    // Activa el filtro seleccionado y actualiza las tarjetas.
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((item) => item.classList.remove("active"));
        chip.classList.add("active");
        activeFilter = chip.dataset.filter;
        applyFilters();
      });
    });

    searchInput.addEventListener("input", applyFilters);

    // Muestra solo los productos que coinciden con filtro y busqueda.
    function applyFilters() {
      const query = searchInput.value.trim().toLowerCase();
      cards.forEach((card) => {
        const categoryMatch = activeFilter === "all" || card.dataset.category === activeFilter;
        const text = `${card.dataset.name || ""} ${card.textContent}`.toLowerCase();
        const queryMatch = !query || text.includes(query);
        card.classList.toggle("hidden", !(categoryMatch && queryMatch));
      });
      window.dispatchEvent(new Event("resize"));
    }

    // Agrega o quita productos del pedido.
    document.addEventListener("click", (event) => {
      const removeButton = event.target.closest("[data-remove]");
      if (removeButton) {
        order.splice(Number(removeButton.dataset.remove), 1);
        renderOrder();
        return;
      }

      const addButton = event.target.closest("[data-add]");
      if (!addButton) return;
      order.push(addButton.dataset.add);
      renderOrder();
      orderDrawer.classList.add("open");
    });

    cartButton.addEventListener("click", () => orderDrawer.classList.add("open"));
    closeDrawer.addEventListener("click", () => orderDrawer.classList.remove("open"));

    // Construye el resumen y el mensaje listo para WhatsApp.
    function renderOrder() {
      cartButton.textContent = order.length;
      if (!order.length) {
        drawerItems.innerHTML = '<p class="section-desc">Agrega productos para preparar tu mensaje.</p>';
        whatsappLink.href = "#";
        return;
      }

      drawerItems.innerHTML = order.map((item, index) => `
        <div class="drawer-item">
          <strong>${index + 1}.</strong>
          <span>${item}</span>
          <button
            class="remove-item"
            type="button"
            data-remove="${index}"
            aria-label="Quitar ${item}"
            title="Quitar producto"
          >×</button>
        </div>
      `).join("");
      const message = `Hola, quiero consultar disponibilidad de:%0A${order.map((item) => `- ${item}`).join("%0A")}`;
      whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    }
















